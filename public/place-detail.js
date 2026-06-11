import { getChacoPlaceById } from "/service/tourismService.js";

const STORAGE_KEYS = {
  itinerary: "turismo-inteligente-itinerary",
  theme: "turismo-inteligente-theme",
  session: "turismo-inteligente-session"
};

const ui = {
  detailLoading: document.querySelector("#detailLoading"),
  detailContent: document.querySelector("#detailContent"),
  notFoundContent: document.querySelector("#notFoundContent"),
  themeToggle: document.querySelector("#themeToggle"),
  placeBadge: document.querySelector("#placeBadge"),
  placeTitle: document.querySelector("#placeTitle"),
  placeDescription: document.querySelector("#placeDescription"),
  placeCity: document.querySelector("#placeCity"),
  placeType: document.querySelector("#placeType"),
  visitTime: document.querySelector("#visitTime"),
  coordinates: document.querySelector("#coordinates"),
  gallery: document.querySelector("#gallery"),
  fullDescription: document.querySelector("#fullDescription"),
  howToGet: document.querySelector("#howToGet"),
  transport: document.querySelector("#transport"),
  transportCost: document.querySelector("#transportCost"),
  recommendations: document.querySelector("#recommendations"),
  lodgingList: document.querySelector("#lodgingList"),
  addToPlanBtn: document.querySelector("#addToPlanBtn"),
  openRouteBtn: document.querySelector("#openRouteBtn"),
  openMapBtn: document.querySelector("#openMapBtn"),
  detailNote: document.querySelector("#detailNote"),
  toast: document.querySelector("#toast")
};

let currentPlace = null;
let currentSession = null;

function init() {
  currentSession = loadSession();
  applySavedTheme();
  bindEvents();
  loadPlaceDetail();
  applyRolePermissions();
}

function bindEvents() {
  ui.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    ui.themeToggle.textContent = isDark ? "☀️ Tema" : "🌙 Tema";
  });

  ui.addToPlanBtn.addEventListener("click", () => {
    if (currentPlace) {
      addToItinerary(currentPlace);
    }
  });
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    ui.themeToggle.textContent = "☀️ Tema";
  } else {
    document.body.classList.remove("dark");
    ui.themeToggle.textContent = "🌙 Tema";
  }
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.session));
  } catch {
    return null;
  }
}

function applyRolePermissions() {
  ui.addToPlanBtn.textContent = "Agregar al itinerario";
}

function loadPlaceDetail() {
  const params = new URLSearchParams(window.location.search);
  const placeId = params.get("id");

  if (!placeId) {
    showNotFound();
    return;
  }

  const place = getChacoPlaceById(placeId);

  if (!place) {
    showNotFound();
    return;
  }

  currentPlace = place;
  renderPlace(place);
}

function renderPlace(place) {
  document.title = `${place.title} | Chaco Explorer`;

  ui.placeBadge.textContent = `📍 ${place.city} · ${place.type}`;
  ui.placeTitle.textContent = place.title;
  ui.placeDescription.textContent = place.summary;
  ui.placeCity.textContent = place.city || "Gran Chaco";
  ui.placeType.textContent = place.type || "Lugar turístico";
  ui.visitTime.textContent = place.estimatedVisit || "Tiempo referencial";
  ui.coordinates.textContent = `${Number(place.latitude).toFixed(4)}, ${Number(place.longitude).toFixed(4)}`;

  ui.fullDescription.textContent = place.fullDescription || place.summary;
  ui.howToGet.textContent = place.howToGet || "Información de acceso no disponible.";
  ui.transport.textContent = place.transport || "Transporte local o movilidad particular.";
  ui.transportCost.textContent = place.transportCost || "Costo referencial no disponible.";
  ui.detailNote.textContent = place.note || "";

  ui.openRouteBtn.href = place.routeUrl || createGoogleMapsUrl(place);
  ui.openMapBtn.href = place.mapUrl || createGoogleMapsUrl(place);

  renderGallery(place);
  renderRecommendations(place);
  renderLodging(place);

  ui.detailLoading.hidden = true;
  ui.notFoundContent.hidden = true;
  ui.detailContent.hidden = false;
}

function createGoogleMapsUrl(place) {
  return `https://www.google.com/maps?q=${place.latitude},${place.longitude}`;
}

function renderGallery(place) {
  const images = Array.isArray(place.images) && place.images.length ? place.images : [];

  ui.gallery.innerHTML = images.map((image, index) => `
    <article class="gallery-card">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(place.title)} imagen ${index + 1}" />
      <div class="gallery-fallback">
        <div>
          <strong>📷</strong>
          <span>Agrega una imagen en <br><b>${escapeHtml(image)}</b></span>
        </div>
      </div>
    </article>
  `).join("");

  ui.gallery.querySelectorAll(".gallery-card img").forEach((img) => {
    img.addEventListener("error", () => {
      const card = img.closest(".gallery-card");

      if (card) {
        card.classList.add("image-error");
      }

      img.remove();
    });
  });
}

function renderRecommendations(place) {
  const recommendations = Array.isArray(place.recommendations) ? place.recommendations : [];

  ui.recommendations.innerHTML = recommendations.map((item) => `
    <li>${escapeHtml(item)}</li>
  `).join("");
}

function renderLodging(place) {
  const lodging = Array.isArray(place.lodging) ? place.lodging : [];

  if (!lodging.length) {
    ui.lodgingList.innerHTML = `
      <div class="info-card">
        <h4>Hospedaje no registrado</h4>
        <p>Se recomienda consultar opciones en el municipio más cercano.</p>
      </div>
    `;
    return;
  }

  ui.lodgingList.innerHTML = lodging.map((item) => `
    <div class="info-card">
      <h4>${escapeHtml(item.name)}</h4>
      <p>${escapeHtml(item.description)}</p>
      <p class="cost">${escapeHtml(item.cost)}</p>
    </div>
  `).join("");
}

function showNotFound() {
  ui.detailLoading.hidden = true;
  ui.detailContent.hidden = true;
  ui.notFoundContent.hidden = false;
}

function loadItinerary() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.itinerary)) || [];
  } catch {
    return [];
  }
}

function saveItinerary(itinerary) {
  localStorage.setItem(STORAGE_KEYS.itinerary, JSON.stringify(itinerary));
}

function addToItinerary(place) {
  const itinerary = loadItinerary();
  const exists = itinerary.some((item) => String(item.id) === String(place.id));

  if (exists) {
    showToast("Ese lugar ya está en tu itinerario");
    return;
  }

  itinerary.push({
    id: place.id,
    title: place.title,
    distanceText: place.distanceText || place.city || "Punto turístico",
    city: place.city ? `${place.city}, Gran Chaco` : "Gran Chaco",
    addedBy: currentSession ? currentSession.id : null,
    addedByRole: currentSession ? currentSession.role : "invitado",
    addedAt: new Date().toISOString()
  });

  saveItinerary(itinerary);
  showToast("Lugar agregado al itinerario");
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("show");

  clearTimeout(showToast.timeoutId);

  showToast.timeoutId = setTimeout(() => {
    ui.toast.classList.remove("show");
  }, 2600);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
