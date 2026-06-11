import { searchCities, getWeather, getNearbyPlaces, getAllChacoPlaces, detectNearestCity } from "/service/tourismService.js";

const DEFAULT_CITY = "Yacuiba";

const STORAGE_KEYS = {
  users: "turismo-inteligente-users",
  session: "turismo-inteligente-session",
  sales: "turismo-inteligente-sales",
  itinerary: "turismo-inteligente-itinerary",
  theme: "turismo-inteligente-theme"
};

const ADMIN_ACCOUNT = {
  id: "admin-jordy",
  firstName: "Jordy",
  lastName: "Arauz",
  username: "jordy",
  password: "Nico10",
  role: "admin",
  createdAt: new Date().toISOString()
};

const DEFAULT_CURRENCY = {
  label: "USD",
  prefix: "$ ",
  suffix: " USD",
  locale: "en-US",
  rateFromUSD: 1,
  decimals: 0
};

const COUNTRY_CURRENCIES = {
  bolivia: {
    label: "BOB",
    prefix: "Bs ",
    suffix: " BOB",
    locale: "es-BO",
    rateFromUSD: 6.9,
    decimals: 0
  }
};

const ui = {
  authScreen: document.querySelector("#authScreen"),
  authTitle: document.querySelector("#authTitle"),
  authDescription: document.querySelector("#authDescription"),
  showLoginBtn: document.querySelector("#showLoginBtn"),
  showRegisterBtn: document.querySelector("#showRegisterBtn"),
  loginForm: document.querySelector("#loginForm"),
  registerForm: document.querySelector("#registerForm"),
  loginUserInput: document.querySelector("#loginUserInput"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  registerFirstNameInput: document.querySelector("#registerFirstNameInput"),
  registerLastNameInput: document.querySelector("#registerLastNameInput"),
  registerUserInput: document.querySelector("#registerUserInput"),
  registerPasswordInput: document.querySelector("#registerPasswordInput"),
  registerRoleInput: document.querySelector("#registerRoleInput"),

  adminPanel: document.querySelector("#adminPanel"),
  sellerPanel: document.querySelector("#sellerPanel"),
  clientPanel: document.querySelector("#clientPanel"),

  adminNavLink: document.querySelector("#adminNavLink"),
  sellerNavLink: document.querySelector("#sellerNavLink"),
  clientNavLink: document.querySelector("#clientNavLink"),

  adminUsersMetric: document.querySelector("#adminUsersMetric"),
  adminSalesMetric: document.querySelector("#adminSalesMetric"),
  adminRevenueMetric: document.querySelector("#adminRevenueMetric"),
  adminUsersList: document.querySelector("#adminUsersList"),
  adminSalesList: document.querySelector("#adminSalesList"),

  adminClientForm: document.querySelector("#adminClientForm"),
  adminClientFirstNameInput: document.querySelector("#adminClientFirstNameInput"),
  adminClientLastNameInput: document.querySelector("#adminClientLastNameInput"),
  adminClientUserInput: document.querySelector("#adminClientUserInput"),
  adminClientPasswordInput: document.querySelector("#adminClientPasswordInput"),

  adminSaleForm: document.querySelector("#adminSaleForm"),
  adminSaleClientInput: document.querySelector("#adminSaleClientInput"),
  adminSalePackageInput: document.querySelector("#adminSalePackageInput"),
  adminSaleAmountInput: document.querySelector("#adminSaleAmountInput"),
  adminSaleStatusInput: document.querySelector("#adminSaleStatusInput"),
  adminSalePhoneInput: document.querySelector("#adminSalePhoneInput"),
  adminSaleEmailInput: document.querySelector("#adminSaleEmailInput"),
  adminSalePaymentMethodInput: document.querySelector("#adminSalePaymentMethodInput"),

  sellerUsersMetric: document.querySelector("#sellerUsersMetric"),
  sellerSalesMetric: document.querySelector("#sellerSalesMetric"),
  sellerRevenueMetric: document.querySelector("#sellerRevenueMetric"),
  sellerUsersList: document.querySelector("#sellerUsersList"),
  sellerSalesList: document.querySelector("#sellerSalesList"),

  sellerClientForm: document.querySelector("#sellerClientForm"),
  sellerClientFirstNameInput: document.querySelector("#sellerClientFirstNameInput"),
  sellerClientLastNameInput: document.querySelector("#sellerClientLastNameInput"),
  sellerClientUserInput: document.querySelector("#sellerClientUserInput"),
  sellerClientPasswordInput: document.querySelector("#sellerClientPasswordInput"),

  saleForm: document.querySelector("#saleForm"),
  saleClientInput: document.querySelector("#saleClientInput"),
  salePackageInput: document.querySelector("#salePackageInput"),
  saleAmountInput: document.querySelector("#saleAmountInput"),
  saleStatusInput: document.querySelector("#saleStatusInput"),
  salePhoneInput: document.querySelector("#salePhoneInput"),
  saleEmailInput: document.querySelector("#saleEmailInput"),
  salePaymentMethodInput: document.querySelector("#salePaymentMethodInput"),

  clientPlanMetric: document.querySelector("#clientPlanMetric"),
  clientPurchasesMetric: document.querySelector("#clientPurchasesMetric"),
  clientSpentMetric: document.querySelector("#clientSpentMetric"),
  clientPurchasesList: document.querySelector("#clientPurchasesList"),

  userChip: document.querySelector("#userChip"),
  userFullName: document.querySelector("#userFullName"),
  welcomeMessage: document.querySelector("#welcomeMessage"),
  resetProfileBtn: document.querySelector("#resetProfileBtn"),

  searchForm: document.querySelector("#searchForm"),
  cityInput: document.querySelector("#cityInput"),
  selectedCityName: document.querySelector("#selectedCityName"),
  weatherIcon: document.querySelector("#weatherIcon"),
  currentTemp: document.querySelector("#currentTemp"),
  weatherDescription: document.querySelector("#weatherDescription"),
  weatherAnimationLayer: document.querySelector("#weatherAnimationLayer"),
  windValue: document.querySelector("#windValue"),
  humidityValue: document.querySelector("#humidityValue"),
  travelScore: document.querySelector("#travelScore"),
  countryMetric: document.querySelector("#countryMetric"),
  placesMetric: document.querySelector("#placesMetric"),
  feelMetric: document.querySelector("#feelMetric"),
  adviceMetric: document.querySelector("#adviceMetric"),
  centerMapBtn: document.querySelector("#centerMapBtn"),
  geoLocateBtn: document.querySelector("#geoLocateBtn"),
  mapContainer: document.querySelector("#map"),
  forecastList: document.querySelector("#forecastList"),
  forecastCanvas: document.querySelector("#forecastChart"),
  placesList: document.querySelector("#placesList"),
  itineraryList: document.querySelector("#itineraryList"),
  checkoutBox: document.querySelector("#checkoutBox"),
  checkoutEyebrow: document.querySelector("#checkoutEyebrow"),
  checkoutTitle: document.querySelector("#checkoutTitle"),
  checkoutSummary: document.querySelector("#checkoutSummary"),
  checkoutClientLabel: document.querySelector("#checkoutClientLabel"),
  checkoutClientInput: document.querySelector("#checkoutClientInput"),
  checkoutPhoneInput: document.querySelector("#checkoutPhoneInput"),
  checkoutEmailInput: document.querySelector("#checkoutEmailInput"),
  checkoutStatusInput: document.querySelector("#checkoutStatusInput"),
  checkoutPaymentMethodInput: document.querySelector("#checkoutPaymentMethodInput"),
  checkoutActionBtn: document.querySelector("#checkoutActionBtn"),
  clearPlanBtn: document.querySelector("#clearPlanBtn"),
  daysInput: document.querySelector("#daysInput"),
  styleSelect: document.querySelector("#styleSelect"),
  budgetTotal: document.querySelector("#budgetTotal"),
  radiusSelect: document.querySelector("#radiusSelect"),
  themeToggle: document.querySelector("#themeToggle"),
  toast: document.querySelector("#toast"),
  qrModal: document.querySelector("#qrModal"),
  closeQrModalBtn: document.querySelector("#closeQrModalBtn"),
  qrModalImage: document.querySelector("#qrModalImage"),
  invoiceModal: document.querySelector("#invoiceModal"),
  invoiceCard: document.querySelector("#invoiceCard"),
  closeInvoiceModalBtn: document.querySelector("#closeInvoiceModalBtn"),
  invoiceContent: document.querySelector("#invoiceContent")
};

let map;
let baseLayer;
let cityMarker;
let allPlacesLayer;
let forecastChart;
let locationAccuracyCircle;
let currentCity = null;
let currentPlaces = [];
let allChacoPlaces = [];
let itinerary = loadItinerary();
let profile = null;

const salesFilters = {
  adminSalesList: "all",
  sellerSalesList: "all",
  clientPurchasesList: "all"
};

const userFilters = {
  adminUsersList: "all",
  sellerUsersList: "all"
};

const formatDate = new Intl.DateTimeFormat("es", {
  weekday: "short",
  day: "numeric",
  month: "short"
});

function init() {
  ensureDefaultAdmin();
  applySavedTheme();
  initMap();
  bindEvents();
  restoreSession();
  hideRoleDetailSections();
  renderItinerary();
  updateBudget();
  renderProfile();
  renderRolePanels();
  loadDestination(DEFAULT_CITY);
  requestMapRefresh();

  if (!profile) {
    showAuthScreen("login");
  } else {
    hideAuthScreen();
  }
}

function bindEvents() {
  bindRoleActionButtons();
  bindSalesFilters();
  bindUserFilters();

  ui.showLoginBtn.addEventListener("click", () => showAuthScreen("login"));
  ui.showRegisterBtn.addEventListener("click", () => showAuthScreen("register"));

  ui.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = normalizeUsername(ui.loginUserInput.value);
    const password = ui.loginPasswordInput.value.trim();

    if (!username || !password) {
      showToast("Completa usuario y contraseña");
      return;
    }

    const users = loadUsers();
    const userByUsername = users.find((item) => item.username === username);

    if (!userByUsername) {
      showToast("Este usuario no se encuentra registrado");
      return;
    }

    if (userByUsername.password !== password) {
      showToast("Contraseña incorrecta");
      return;
    }

    profile = createProfileFromUser(userByUsername);

    saveSession(profile);
    ui.loginForm.reset();
    hideRoleDetailSections();
    renderProfile();
    renderRolePanels();
    hideAuthScreen();
    showToast(`Bienvenido/a, ${profile.firstName}`);
  });

  ui.registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = normalizeName(ui.registerFirstNameInput.value);
    const lastName = normalizeName(ui.registerLastNameInput.value);
    const username = normalizeUsername(ui.registerUserInput.value);
    const password = ui.registerPasswordInput.value.trim();
    const selectedRole = ui.registerRoleInput ? ui.registerRoleInput.value : "cliente";
    const allowedRoles = ["cliente", "vendedor"];
    const role = allowedRoles.includes(selectedRole) ? selectedRole : "cliente";

    if (!firstName || !lastName || !username || !password) {
      showToast("Completa todos los campos para crear la cuenta");
      return;
    }

    const users = loadUsers();
    const usernameExists = users.some((user) => user.username === username);

    if (usernameExists) {
      showToast("Ese usuario ya existe. Usa otro nombre de usuario");
      return;
    }

    const newUser = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      firstName,
      lastName,
      username,
      password,
      role,
      createdAt: new Date().toISOString(),
      createdBy: "self-register"
    };

    users.push(newUser);
    saveUsers(users);

    profile = createProfileFromUser(newUser);

    saveSession(profile);
    ui.registerForm.reset();
    hideRoleDetailSections();
    renderProfile();
    renderRolePanels();
    hideAuthScreen();
    showToast(`Cuenta creada como ${getRoleLabel(role)}. Bienvenido/a, ${firstName}`);
  });

  if (ui.sellerClientForm) {
    ui.sellerClientForm.addEventListener("submit", (event) => {
      event.preventDefault();
      registerClientFromSeller();
    });
  }

  if (ui.adminClientForm) {
    ui.adminClientForm.addEventListener("submit", (event) => {
      event.preventDefault();
      registerClientFromAdmin();
    });
  }

  if (ui.adminSaleForm) {
    ui.adminSaleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      registerSaleFromAdmin();
    });
  }

  ui.resetProfileBtn.addEventListener("click", () => {
    profile = null;
    clearSession();
    hideRoleDetailSections();
    renderProfile();
    renderRolePanels();
    showAuthScreen("login");
    showToast("Sesión cerrada");
  });

  ui.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = ui.cityInput.value.trim();

    if (query) {
      loadDestination(query);
    }
  });

  ui.centerMapBtn.addEventListener("click", () => {
    if (!allChacoPlaces.length) {
      syncAllChacoPlacesOnMap();
    }

    if (!allChacoPlaces.length) {
      showToast("No hay lugares turísticos cargados en el mapa");
      return;
    }

    requestMapRefresh();
    fitAllChacoPlacesOnMap();
    showToast("Mostrando todos los lugares turísticos del Gran Chaco");
  });

  ui.geoLocateBtn.addEventListener("click", geolocateUser);

  ui.radiusSelect.addEventListener("change", async () => {
    if (!currentCity) return;

    await loadPlaces(currentCity);
    fitAllChacoPlacesOnMap();
  });

  ui.clearPlanBtn.addEventListener("click", () => {
    itinerary = [];
    saveItinerary();
    renderItinerary();
    updateBudget();
    renderRolePanels();
    updateCheckoutBox();
    showToast("Itinerario limpiado");
  });

  ui.daysInput.addEventListener("input", updateBudget);
  ui.styleSelect.addEventListener("change", updateBudget);

  if (ui.checkoutActionBtn) {
    ui.checkoutActionBtn.addEventListener("click", checkoutItinerary);
  }

  if (ui.checkoutClientInput) {
    ui.checkoutClientInput.addEventListener("change", updateCheckoutBox);
  }

  if (ui.checkoutPhoneInput) {
    ui.checkoutPhoneInput.addEventListener("input", updateCheckoutBox);
  }

  if (ui.checkoutEmailInput) {
    ui.checkoutEmailInput.addEventListener("input", updateCheckoutBox);
  }

  if (ui.checkoutStatusInput) {
    ui.checkoutStatusInput.addEventListener("change", () => {
      syncPaymentMethodWithStatus(ui.checkoutStatusInput, ui.checkoutPaymentMethodInput);
      updateCheckoutBox();
    });
  }

  if (ui.checkoutPaymentMethodInput) {
    ui.checkoutPaymentMethodInput.addEventListener("change", () => {
      syncQrPaymentBox(ui.checkoutPaymentMethodInput);
      syncCardPaymentBox(ui.checkoutPaymentMethodInput);
      updateCheckoutBox();
    });
  }

  ui.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    ui.themeToggle.textContent = isDark ? "☀️" : "🌙";

    setTimeout(() => {
      requestMapRefresh();
      if (forecastChart) forecastChart.update();
    }, 150);
  });

  if (ui.saleForm) {
    ui.saleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      registerSale();
    });
  }

  if (ui.saleStatusInput) {
    ui.saleStatusInput.addEventListener("change", () => {
      syncPaymentMethodWithStatus(ui.saleStatusInput, ui.salePaymentMethodInput);
    });
  }

  if (ui.adminSaleStatusInput) {
    ui.adminSaleStatusInput.addEventListener("change", () => {
      syncPaymentMethodWithStatus(ui.adminSaleStatusInput, ui.adminSalePaymentMethodInput);
    });
  }

  syncPaymentMethodWithStatus(ui.saleStatusInput, ui.salePaymentMethodInput);
  syncPaymentMethodWithStatus(ui.adminSaleStatusInput, ui.adminSalePaymentMethodInput);
  syncPaymentMethodWithStatus(ui.checkoutStatusInput, ui.checkoutPaymentMethodInput);

  if (ui.salePaymentMethodInput) {
    ui.salePaymentMethodInput.addEventListener("change", () => {
      syncQrPaymentBox(ui.salePaymentMethodInput);
      syncCardPaymentBox(ui.salePaymentMethodInput);
    });
  }

  if (ui.adminSalePaymentMethodInput) {
    ui.adminSalePaymentMethodInput.addEventListener("change", () => {
      syncQrPaymentBox(ui.adminSalePaymentMethodInput);
      syncCardPaymentBox(ui.adminSalePaymentMethodInput);
    });
  }

  document.querySelectorAll(".qr-payment-box img").forEach((image) => {
    image.addEventListener("click", () => openQrModal(image.getAttribute("src")));
  });

  document.querySelectorAll("[data-card-expiry]").forEach((input) => {
    input.addEventListener("input", () => formatCardExpiryInput(input));
  });

  document.querySelectorAll("[data-card-number]").forEach((input) => {
    input.addEventListener("input", () => formatCardNumberInput(input));
  });

  if (ui.closeQrModalBtn) {
    ui.closeQrModalBtn.addEventListener("click", closeQrModal);
  }

  if (ui.qrModal) {
    ui.qrModal.addEventListener("click", (event) => {
      if (event.target === ui.qrModal) {
        closeQrModal();
      }
    });
  }

  if (ui.closeInvoiceModalBtn) {
    ui.closeInvoiceModalBtn.addEventListener("click", closeInvoiceModal);
  }

  if (ui.invoiceModal) {
    ui.invoiceModal.addEventListener("click", (event) => {
      if (event.target === ui.invoiceModal) {
        closeInvoiceModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeQrModal();
      closeInvoiceModal();
    }
  });

  window.addEventListener("resize", requestMapRefresh);
  window.addEventListener("load", requestMapRefresh);
  window.addEventListener("pageshow", syncItineraryFromStorage);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      syncItineraryFromStorage();
      requestMapRefresh();
    }
  });
}

function ensureDefaultAdmin() {
  const users = loadUsersRaw();
  const normalizedUsers = users.map((user) => ({
    ...user,
    username: normalizeUsername(user.username),
    role: user.role || "cliente"
  }));

  const adminIndex = normalizedUsers.findIndex((user) => user.username === ADMIN_ACCOUNT.username);

  if (adminIndex === -1) {
    normalizedUsers.unshift(ADMIN_ACCOUNT);
  } else {
    normalizedUsers[adminIndex] = {
      ...ADMIN_ACCOUNT,
      ...normalizedUsers[adminIndex],
      role: "admin",
      password: normalizedUsers[adminIndex].password || ADMIN_ACCOUNT.password
    };
  }

  saveUsers(normalizedUsers);
}

function createProfileFromUser(user) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    role: user.role || "cliente",
    fullName: `${user.firstName} ${user.lastName}`
  };
}

function restoreSession() {
  const session = loadSession();

  if (!session) return;

  const users = loadUsers();
  const validUser = users.find((user) => user.id === session.id);

  if (!validUser) {
    clearSession();
    return;
  }

  profile = createProfileFromUser(validUser);
  saveSession(profile);
}

function saveSession(session) {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.session));
  } catch {
    return null;
  }
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
}

function hasRole(...roles) {
  return profile && roles.includes(profile.role);
}

function bindRoleActionButtons() {
  document.querySelectorAll("[data-role-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.roleTarget;
      const target = document.querySelector(`#${targetId}`);

      if (!target) return;

      const panel = button.closest(".role-panel");

      if (panel) {
        panel.querySelectorAll(".role-detail-section").forEach((section) => {
          if (section.id === targetId) {
            section.classList.toggle("is-hidden");
            section.classList.toggle("active-role-section", !section.classList.contains("is-hidden"));
          } else {
            section.classList.add("is-hidden");
            section.classList.remove("active-role-section");
          }
        });
      }

      if (!target.classList.contains("is-hidden")) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    });
  });
}

function bindSalesFilters() {
  document.querySelectorAll("[data-sales-filter-for]").forEach((group) => {
    const listId = group.dataset.salesFilterFor;

    group.querySelectorAll("[data-sales-status]").forEach((button) => {
      button.addEventListener("click", () => {
        salesFilters[listId] = button.dataset.salesStatus;

        group.querySelectorAll(".filter-tab").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");
        renderRolePanels();
      });
    });
  });
}

function bindUserFilters() {
  document.querySelectorAll("[data-users-filter-for]").forEach((group) => {
    const listId = group.dataset.usersFilterFor;

    group.querySelectorAll("[data-user-role]").forEach((button) => {
      button.addEventListener("click", () => {
        userFilters[listId] = button.dataset.userRole;

        group.querySelectorAll(".filter-tab").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");
        renderRolePanels();
      });
    });
  });
}

function hideRoleDetailSections() {
  document.querySelectorAll(".role-detail-section").forEach((section) => {
    section.classList.add("is-hidden");
    section.classList.remove("active-role-section");
  });
}

function showAuthScreen(mode) {
  ui.authScreen.classList.remove("is-hidden");
  document.body.classList.add("profile-open");

  if (mode === "register") {
    ui.authTitle.textContent = "Crear cuenta";
    ui.authDescription.textContent = "Registra tus datos y elige si tu cuenta será Cliente o Vendedor.";
    ui.loginForm.classList.add("is-hidden");
    ui.registerForm.classList.remove("is-hidden");
    ui.showLoginBtn.classList.remove("active");
    ui.showRegisterBtn.classList.add("active");

    setTimeout(() => ui.registerFirstNameInput.focus(), 120);
    return;
  }

  ui.authTitle.textContent = "Iniciar sesión";
  ui.authDescription.textContent = "Ingresa con tu usuario y contraseña para acceder a Chaco Explorer.";
  ui.loginForm.classList.remove("is-hidden");
  ui.registerForm.classList.add("is-hidden");
  ui.showLoginBtn.classList.add("active");
  ui.showRegisterBtn.classList.remove("active");

  setTimeout(() => ui.loginUserInput.focus(), 120);
}

function hideAuthScreen() {
  ui.authScreen.classList.add("is-hidden");
  document.body.classList.remove("profile-open");
  requestMapRefresh();
}

function renderProfile() {
  if (!profile) {
    ui.userChip.hidden = true;
    ui.resetProfileBtn.hidden = true;
    ui.userFullName.textContent = "Invitado";
    ui.welcomeMessage.textContent = "Bienvenido/a a Chaco Explorer.";
    updateCheckoutBox();
    return;
  }

  ui.userChip.hidden = false;
  ui.resetProfileBtn.hidden = false;
  ui.userFullName.textContent = profile.fullName;
  ui.welcomeMessage.textContent = `Hola, ${profile.firstName}. Rol activo: ${getRoleLabel(profile.role)}.`;
  updateCheckoutBox();
}

function renderRolePanels() {
  hideAllRolePanels();

  if (!profile) {
    updateCheckoutBox();
    return;
  }

  if (hasRole("admin")) {
    ui.adminPanel.classList.remove("is-hidden");
    ui.adminNavLink.classList.remove("is-hidden");
    renderAdminPanel();
  }

  if (hasRole("vendedor")) {
    ui.sellerPanel.classList.remove("is-hidden");
    ui.sellerNavLink.classList.remove("is-hidden");
    renderSellerPanel();
  }

  if (hasRole("cliente")) {
    ui.clientPanel.classList.remove("is-hidden");
    ui.clientNavLink.classList.remove("is-hidden");
    renderClientPanel();
  }

  updateCheckoutBox();
}

function hideAllRolePanels() {
  ui.adminPanel.classList.add("is-hidden");
  ui.sellerPanel.classList.add("is-hidden");
  ui.clientPanel.classList.add("is-hidden");

  ui.adminNavLink.classList.add("is-hidden");
  ui.sellerNavLink.classList.add("is-hidden");
  ui.clientNavLink.classList.add("is-hidden");
}

function renderAdminPanel() {
  const users = loadUsers();
  const clients = users.filter((user) => user.role === "cliente");
  const sales = loadSales();
  const revenue = getSalesTotal(sales);

  ui.adminUsersMetric.textContent = users.length;
  ui.adminSalesMetric.textContent = sales.length;
  ui.adminRevenueMetric.textContent = `Bs ${revenue.toFixed(2)}`;

  renderClientOptions(ui.adminSaleClientInput, clients);

  renderUsersList(ui.adminUsersList, {
    mode: "admin",
    users
  });

  renderSalesList(ui.adminSalesList, sales, {
    emptyText: "Todavía no existen ventas registradas."
  });
}

function renderSellerPanel() {
  const users = loadUsers();
  const visibleUsers = users.filter((user) => user.role !== "admin");
  const clients = users.filter((user) => user.role === "cliente");
  const sales = loadSales();
  const revenue = getSalesTotal(sales);

  ui.sellerUsersMetric.textContent = visibleUsers.length;
  ui.sellerSalesMetric.textContent = sales.length;
  ui.sellerRevenueMetric.textContent = `Bs ${revenue.toFixed(2)}`;

  renderSaleClientOptions(clients);

  renderSalesList(ui.sellerSalesList, sales, {
    emptyText: "Todavía no existen ventas registradas."
  });

  renderUsersList(ui.sellerUsersList, {
    mode: "readonly",
    users: visibleUsers
  });
}

function renderClientPanel() {
  const sales = loadSales().filter((sale) => sale.clientId === profile.id);
  const spent = getSalesTotal(sales);

  ui.clientPlanMetric.textContent = itinerary.length;
  ui.clientPurchasesMetric.textContent = sales.length;
  ui.clientSpentMetric.textContent = `Bs ${spent.toFixed(2)}`;

  renderSalesList(ui.clientPurchasesList, sales, {
    emptyText: "Todavía no tienes compras registradas.",
    clientView: true
  });
}

function registerClientFromSeller() {
  if (!hasRole("vendedor", "admin")) {
    showToast("No tienes permiso para registrar clientes");
    return;
  }

  const firstName = normalizeName(ui.sellerClientFirstNameInput.value);
  const lastName = normalizeName(ui.sellerClientLastNameInput.value);
  const username = normalizeUsername(ui.sellerClientUserInput.value);
  const password = ui.sellerClientPasswordInput.value.trim();

  if (!firstName || !lastName || !username || !password) {
    showToast("Completa todos los datos del cliente");
    return;
  }

  const users = loadUsers();
  const usernameExists = users.some((user) => user.username === username);

  if (usernameExists) {
    showToast("Ese usuario ya existe. Usa otro nombre de usuario");
    return;
  }

  const newClient = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    firstName,
    lastName,
    username,
    password,
    role: "cliente",
    createdAt: new Date().toISOString(),
    createdBy: profile.id,
    createdByRole: profile.role
  };

  users.push(newClient);
  saveUsers(users);

  ui.sellerClientForm.reset();
  renderRolePanels();
  showToast(`Cliente registrado: ${firstName} ${lastName}`);
}

function registerClientFromAdmin() {
  if (!hasRole("admin")) {
    showToast("No tienes permiso para registrar clientes");
    return;
  }

  const firstName = normalizeName(ui.adminClientFirstNameInput.value);
  const lastName = normalizeName(ui.adminClientLastNameInput.value);
  const username = normalizeUsername(ui.adminClientUserInput.value);
  const password = ui.adminClientPasswordInput.value.trim();

  if (!firstName || !lastName || !username || !password) {
    showToast("Completa todos los datos del cliente");
    return;
  }

  const users = loadUsers();
  const usernameExists = users.some((user) => user.username === username);

  if (usernameExists) {
    showToast("Ese usuario ya existe. Usa otro nombre de usuario");
    return;
  }

  const newClient = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    firstName,
    lastName,
    username,
    password,
    role: "cliente",
    createdAt: new Date().toISOString(),
    createdBy: profile.id,
    createdByRole: profile.role
  };

  users.push(newClient);
  saveUsers(users);

  ui.adminClientForm.reset();
  renderRolePanels();
  showToast(`Cliente registrado: ${firstName} ${lastName}`);
}

function renderUsersList(container, options) {
  const { users, mode } = options;
  const filterRole = userFilters[container.id] || "all";
  const visibleUsers = filterRole === "all"
    ? users
    : users.filter((user) => user.role === filterRole);

  if (!visibleUsers.length) {
    container.innerHTML = `<div class="admin-empty">${users.length ? "No hay usuarios para este filtro." : "No hay usuarios registrados todavía."}</div>`;
    return;
  }

  container.innerHTML = visibleUsers.map((user) => {
    const readonly = mode === "readonly";
    const isCurrentUser = profile && profile.id === user.id;
    const disableDelete = readonly || isCurrentUser;

    return `
      <article class="admin-user-card" data-user-id="${escapeHtml(user.id)}">
        <h4>${escapeHtml(user.firstName)} ${escapeHtml(user.lastName)}</h4>
        <p>
          Usuario: <strong>${escapeHtml(user.username)}</strong> ·
          Rol: <strong>${getRoleLabel(user.role)}</strong>
        </p>

        <div class="admin-user-grid">
          <label>
            <span>Nombre</span>
            <input type="text" data-field="firstName" value="${escapeHtml(user.firstName)}" ${readonly ? "disabled" : ""} />
          </label>

          <label>
            <span>Apellido</span>
            <input type="text" data-field="lastName" value="${escapeHtml(user.lastName)}" ${readonly ? "disabled" : ""} />
          </label>

          <label>
            <span>Usuario</span>
            <input type="text" data-field="username" value="${escapeHtml(user.username)}" ${readonly ? "disabled" : ""} />
          </label>

          <label>
            <span>Contraseña</span>
            <input type="text" data-field="password" value="${escapeHtml(user.password)}" ${readonly ? "disabled" : ""} />
          </label>

          <label>
            <span>Rol</span>
            <select data-field="role" ${readonly ? "disabled" : ""}>
              <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
              <option value="vendedor" ${user.role === "vendedor" ? "selected" : ""}>Vendedor</option>
              <option value="cliente" ${user.role === "cliente" ? "selected" : ""}>Cliente</option>
            </select>
          </label>
        </div>

        <div class="admin-user-actions">
          <button class="small-button" type="button" data-action="save" ${readonly ? "disabled" : ""}>Guardar cambios</button>
          <button class="small-button danger" type="button" data-action="delete" ${disableDelete ? "disabled" : ""}>Eliminar usuario</button>
        </div>
      </article>
    `;
  }).join("");

  if (mode !== "admin") return;

  container.querySelectorAll("[data-action='save']").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".admin-user-card");
      updateUserFromAdmin(card.dataset.userId, card);
    });
  });

  container.querySelectorAll("[data-action='delete']").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".admin-user-card");
      deleteUserFromAdmin(card.dataset.userId);
    });
  });
}

function updateUserFromAdmin(userId, card) {
  if (!hasRole("admin")) {
    showToast("No tienes permiso para modificar usuarios");
    return;
  }

  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    showToast("Usuario no encontrado");
    return;
  }

  const updatedUser = {
    ...users[userIndex],
    firstName: normalizeName(card.querySelector("[data-field='firstName']").value),
    lastName: normalizeName(card.querySelector("[data-field='lastName']").value),
    username: normalizeUsername(card.querySelector("[data-field='username']").value),
    password: card.querySelector("[data-field='password']").value.trim(),
    role: card.querySelector("[data-field='role']").value
  };

  if (!updatedUser.firstName || !updatedUser.lastName || !updatedUser.username || !updatedUser.password) {
    showToast("No dejes campos vacíos");
    return;
  }

  const usernameExists = users.some((user) => user.id !== userId && user.username === updatedUser.username);

  if (usernameExists) {
    showToast("Ese usuario ya existe");
    return;
  }

  users[userIndex] = updatedUser;
  saveUsers(users);

  if (profile && profile.id === updatedUser.id) {
    profile = createProfileFromUser(updatedUser);
    saveSession(profile);
    renderProfile();
  }

  renderRolePanels();
  showToast("Usuario actualizado correctamente");
}

function deleteUserFromAdmin(userId) {
  if (!hasRole("admin")) {
    showToast("No tienes permiso para eliminar usuarios");
    return;
  }

  if (profile && profile.id === userId) {
    showToast("No puedes eliminar tu propia sesión activa");
    return;
  }

  const users = loadUsers();
  const filteredUsers = users.filter((user) => user.id !== userId);

  saveUsers(filteredUsers);

  const filteredSales = loadSales().filter((sale) => sale.clientId !== userId && sale.sellerId !== userId);
  saveSales(filteredSales);

  renderRolePanels();
  showToast("Usuario eliminado");
}

function renderClientOptions(selectElement, clients) {
  if (!selectElement) return;

  const selectedClientId = selectElement.value;

  selectElement.innerHTML = `
    <option value="">Seleccionar cliente</option>
    ${clients.map((client) => `
      <option value="${escapeHtml(client.id)}">
        ${escapeHtml(client.firstName)} ${escapeHtml(client.lastName)} - ${escapeHtml(client.username)}
      </option>
    `).join("")}
  `;

  if (selectedClientId && clients.some((client) => client.id === selectedClientId)) {
    selectElement.value = selectedClientId;
  }
}

function renderSaleClientOptions(clients) {
  renderClientOptions(ui.saleClientInput, clients);
}

function renderCheckoutClients() {
  if (!ui.checkoutClientInput) return;

  const selectedClientId = ui.checkoutClientInput.value;
  const users = loadUsers();
  const clients = users.filter((user) => user.role === "cliente");

  ui.checkoutClientInput.innerHTML = `
    <option value="">Seleccionar cliente</option>
    ${clients.map((client) => `
      <option value="${escapeHtml(client.id)}">
        ${escapeHtml(client.firstName)} ${escapeHtml(client.lastName)} - ${escapeHtml(client.username)}
      </option>
    `).join("")}
  `;

  if (selectedClientId && clients.some((client) => client.id === selectedClientId)) {
    ui.checkoutClientInput.value = selectedClientId;
  }
}

function registerSale() {
  if (!hasRole("admin", "vendedor")) {
    showToast("No tienes permiso para registrar ventas");
    return;
  }

  const clientId = ui.saleClientInput.value;
  const packageName = normalizeName(ui.salePackageInput.value);
  const amount = Number(ui.saleAmountInput.value);
  const status = ui.saleStatusInput.value;
  const customerPhone = normalizePhone(ui.salePhoneInput.value);
  const customerEmail = ui.saleEmailInput.value.trim();
  const paymentMethod = ui.salePaymentMethodInput.value;

  const client = loadUsers().find((user) => user.id === clientId);

  if (!client) {
    showToast("Selecciona un cliente válido");
    return;
  }

  if (!isValidPackageName(packageName)) {
    showToast("Ingresa un paquete turístico válido");
    return;
  }

  if (amount <= 0) {
    showToast("Completa correctamente los datos de la venta");
    return;
  }

  if (!isValidPhone(customerPhone)) {
    showToast("Ingresa un teléfono válido");
    return;
  }

  if (!isValidEmail(customerEmail)) {
    showToast("Ingresa un correo electrónico válido");
    return;
  }

  if (status === "Pagado" && !paymentMethod) {
    showToast("Selecciona una forma de pago para una venta pagada");
    return;
  }

  const finalPaymentMethod = status === "Pagado"
    ? paymentMethod
    : "Pendiente de pago";
  const cardData = finalPaymentMethod === "Tarjeta de débito o crédito"
    ? getCardData(ui.saleForm)
    : {};

  if (!cardData) return;

  const sale = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    clientId: client.id,
    clientName: `${client.firstName} ${client.lastName}`,
    packageName,
    amount,
    status,
    customerPhone,
    customerEmail,
    paymentMethod: finalPaymentMethod,
    ...cardData,
    sellerId: profile.id,
    sellerName: profile.fullName,
    createdAt: new Date().toISOString()
  };

  const sales = loadSales();
  sales.unshift(sale);
  saveSales(sales);

  ui.saleForm.reset();
  syncPaymentMethodWithStatus(ui.saleStatusInput, ui.salePaymentMethodInput);
  renderRolePanels();
  showToast("Venta registrada correctamente");
}

function registerSaleFromAdmin() {
  if (!hasRole("admin")) {
    showToast("No tienes permiso para registrar ventas");
    return;
  }

  const clientId = ui.adminSaleClientInput.value;
  const packageName = normalizeName(ui.adminSalePackageInput.value);
  const amount = Number(ui.adminSaleAmountInput.value);
  const status = ui.adminSaleStatusInput.value;
  const customerPhone = normalizePhone(ui.adminSalePhoneInput.value);
  const customerEmail = ui.adminSaleEmailInput.value.trim();
  const paymentMethod = ui.adminSalePaymentMethodInput.value;

  const client = loadUsers().find((user) => user.id === clientId);

  if (!client) {
    showToast("Selecciona un cliente válido");
    return;
  }

  if (!isValidPackageName(packageName)) {
    showToast("Ingresa un paquete turístico válido");
    return;
  }

  if (amount <= 0) {
    showToast("Completa correctamente los datos de la venta");
    return;
  }

  if (!isValidPhone(customerPhone)) {
    showToast("Ingresa un teléfono válido");
    return;
  }

  if (!isValidEmail(customerEmail)) {
    showToast("Ingresa un correo electrónico válido");
    return;
  }

  if (status === "Pagado" && !paymentMethod) {
    showToast("Selecciona una forma de pago para una venta pagada");
    return;
  }

  const finalPaymentMethod = status === "Pagado"
    ? paymentMethod
    : "Pendiente de pago";
  const cardData = finalPaymentMethod === "Tarjeta de débito o crédito"
    ? getCardData(ui.adminSaleForm)
    : {};

  if (!cardData) return;

  const sale = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    clientId: client.id,
    clientName: `${client.firstName} ${client.lastName}`,
    packageName,
    amount,
    status,
    customerPhone,
    customerEmail,
    paymentMethod: finalPaymentMethod,
    ...cardData,
    sellerId: profile.id,
    sellerName: profile.fullName,
    createdAt: new Date().toISOString()
  };

  const sales = loadSales();
  sales.unshift(sale);
  saveSales(sales);

  ui.adminSaleForm.reset();
  syncPaymentMethodWithStatus(ui.adminSaleStatusInput, ui.adminSalePaymentMethodInput);
  renderRolePanels();
  showToast("Venta registrada correctamente");
}

function renderSalesList(container, sales, options = {}) {
  if (!container) return;

  const emptyText = options.emptyText || "No hay registros.";
  const clientView = options.clientView || false;
  const filterStatus = salesFilters[container.id] || "all";
  const visibleSales = filterStatus === "all"
    ? sales
    : sales.filter((sale) => sale.status === filterStatus);

  if (!visibleSales.length) {
    container.innerHTML = `<div class="sales-empty">${sales.length ? "No hay registros para este filtro." : emptyText}</div>`;
    return;
  }

  container.innerHTML = visibleSales.map((sale) => {
    const statusClass = getSaleStatusClass(sale.status);
    const canDelete = canDeleteSale(sale);

    return `
      <article class="${clientView ? "purchase-card" : "sale-card"}">
        <div class="sale-card-header">
          <div>
            <h4>${escapeHtml(sale.packageName)}</h4>
            <p>${clientView ? "Compra personal" : `Cliente: ${escapeHtml(sale.clientName)}`}</p>
          </div>
          <span class="sale-status ${statusClass}">${escapeHtml(sale.status)}</span>
        </div>

        <div class="sale-meta">
          <div>
            <span>Monto</span>
            <strong>Bs ${Number(sale.amount).toFixed(2)}</strong>
          </div>
          <div>
            <span>Fecha</span>
            <strong>${new Date(sale.createdAt).toLocaleDateString("es-BO")}</strong>
          </div>
          <div>
            <span>Registrado por</span>
            <strong>${escapeHtml(sale.sellerName)}</strong>
          </div>
          <div>
            <span>Teléfono</span>
            <strong>${escapeHtml(sale.customerPhone || "No registrado")}</strong>
          </div>
          <div>
            <span>Correo</span>
            <strong>${escapeHtml(sale.customerEmail || "No registrado")}</strong>
          </div>
          <div>
            <span>Pago</span>
            <strong>${escapeHtml(getPaymentLabel(sale.paymentMethod))}</strong>
          </div>
          <div>
            <span>Tarjeta</span>
            <strong>${sale.cardLast4 ? escapeHtml(sale.cardMasked || `**** **** **** ${sale.cardLast4}`) : "No aplica"}</strong>
          </div>
          <div>
            <span>ID venta</span>
            <strong>${escapeHtml(String(sale.id).slice(0, 8))}</strong>
          </div>
        </div>

        ${canDelete ? `
          <div class="sale-actions">
            <button type="button" data-view-invoice="${escapeHtml(sale.id)}">Ver factura</button>
            <button class="danger" type="button" data-delete-sale="${escapeHtml(sale.id)}">
              ${clientView ? "Eliminar compra" : "Eliminar venta"}
            </button>
          </div>
        ` : `
          <div class="sale-actions">
            <button type="button" data-view-invoice="${escapeHtml(sale.id)}">Ver factura</button>
          </div>
        `}
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-view-invoice]").forEach((button) => {
    button.addEventListener("click", () => {
      openInvoiceModal(button.dataset.viewInvoice);
    });
  });

  container.querySelectorAll("[data-delete-sale]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteSale(button.dataset.deleteSale);
    });
  });
}

function canDeleteSale(sale) {
  if (!profile) return false;

  if (hasRole("admin", "vendedor")) {
    return true;
  }

  if (hasRole("cliente")) {
    return String(sale.clientId) === String(profile.id);
  }

  return false;
}

function deleteSale(saleId) {
  const sales = loadSales();
  const sale = sales.find((item) => String(item.id) === String(saleId));

  if (!sale) {
    showToast("Venta no encontrada");
    return;
  }

  if (!canDeleteSale(sale)) {
    showToast("No tienes permiso para eliminar este registro");
    return;
  }

  const filteredSales = sales.filter((item) => String(item.id) !== String(saleId));

  saveSales(filteredSales);
  renderRolePanels();

  if (hasRole("cliente")) {
    showToast("Compra eliminada de tu historial");
  } else {
    showToast("Venta eliminada correctamente");
  }
}

function getCurrentUserRole() {
  return profile?.role || "invitado";
}

function generateInvoiceNumber(sale) {
  const date = new Date(sale.createdAt || Date.now());
  const year = date.getFullYear();
  const shortId = String(sale.id || Date.now()).replace(/[^a-zA-Z0-9]/g, "").slice(0, 8).toUpperCase();
  return `CE-${year}-${shortId}`;
}

function canViewInvoice(sale) {
  if (!profile || !sale) return false;
  if (hasRole("admin", "vendedor")) return true;
  return hasRole("cliente") && String(sale.clientId) === String(profile.id);
}

function openInvoiceModal(saleId) {
  const sale = loadSales().find((item) => String(item.id) === String(saleId));

  if (!sale || !canViewInvoice(sale)) {
    showToast("No tienes permiso para ver esta factura");
    return;
  }

  if (!ui.invoiceModal || !ui.invoiceContent) return;

  ui.invoiceContent.innerHTML = renderInvoiceHTML(sale, getCurrentUserRole());
  ui.invoiceModal.classList.remove("is-hidden");

  const printButton = ui.invoiceContent.querySelector("[data-print-invoice]");
  if (printButton) {
    printButton.addEventListener("click", printInvoice);
  }

  const closeButton = ui.invoiceContent.querySelector("[data-close-invoice]");
  if (closeButton) {
    closeButton.addEventListener("click", closeInvoiceModal);
  }
}

function closeInvoiceModal() {
  if (!ui.invoiceModal) return;
  ui.invoiceModal.classList.add("is-hidden");
}

function renderInvoiceHTML(sale, currentUserRole) {
  const canPrint = currentUserRole === "admin" || currentUserRole === "vendedor";
  const createdAt = new Date(sale.createdAt || Date.now());
  const amount = Number(sale.amount || 0);
  const quantity = Number(sale.quantity || 1);
  const subtotal = amount;
  const total = amount;
  const paymentMethod = getPaymentLabel(sale.paymentMethod);
  const cardMasked = sale.cardMasked || (sale.cardLast4 ? `**** **** **** ${sale.cardLast4}` : "");

  return `
    <div class="invoice-print-area">
      <header class="invoice-header">
        <div>
          <span>Chaco Explorer</span>
          <h2>Factura</h2>
        </div>
        <strong>${escapeHtml(generateInvoiceNumber(sale))}</strong>
      </header>

      <section class="invoice-grid">
        <div>
          <span>Fecha y hora</span>
          <strong>${escapeHtml(createdAt.toLocaleString("es-BO"))}</strong>
        </div>
        <div>
          <span>Cliente</span>
          <strong>${escapeHtml(sale.clientName || "No registrado")}</strong>
        </div>
        <div>
          <span>Registrado por</span>
          <strong>${escapeHtml(sale.sellerName || "No registrado")}</strong>
        </div>
        <div>
          <span>Estado</span>
          <strong>${escapeHtml(sale.status || "No registrado")}</strong>
        </div>
      </section>

      <section class="invoice-items">
        <h3>Detalle</h3>
        <div class="invoice-item-row">
          <span>Paquete/lugar/itinerario</span>
          <strong>${escapeHtml(sale.packageName || "No registrado")}</strong>
        </div>
        <div class="invoice-item-row">
          <span>Cantidad</span>
          <strong>${escapeHtml(quantity)}</strong>
        </div>
        <div class="invoice-item-row">
          <span>Método de pago</span>
          <strong>${escapeHtml(paymentMethod)}</strong>
        </div>
        ${sale.cardLast4 ? `
          <div class="invoice-card-data">
            <div>
              <span>Titular</span>
              <strong>${escapeHtml(sale.cardHolder || "No registrado")}</strong>
            </div>
            <div>
              <span>Tarjeta</span>
              <strong>${escapeHtml(cardMasked)}</strong>
            </div>
            <div>
              <span>Vencimiento</span>
              <strong>${escapeHtml(sale.cardExpiry || "No registrado")}</strong>
            </div>
          </div>
        ` : ""}
      </section>

      <section class="invoice-totals">
        <div>
          <span>Subtotal</span>
          <strong>Bs ${subtotal.toFixed(2)}</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>Bs ${total.toFixed(2)}</strong>
        </div>
      </section>

      <p class="invoice-note">Documento generado para fines académicos.</p>
    </div>

    <div class="invoice-actions">
      ${canPrint ? `<button type="button" data-print-invoice>Imprimir / Guardar PDF</button>` : ""}
      <button type="button" data-close-invoice>Cerrar</button>
    </div>
  `;
}

function printInvoice() {
  if (!hasRole("admin", "vendedor")) {
    showToast("No tienes permiso para imprimir esta factura");
    return;
  }

  if (!ui.invoiceModal || ui.invoiceModal.classList.contains("is-hidden") || !ui.invoiceContent?.querySelector(".invoice-print-area")) {
    showToast("Abre una factura antes de imprimir");
    return;
  }

  window.print();
}

function getSaleStatusClass(status) {
  const normalized = normalizeCountry(status);

  if (normalized.includes("pendiente") || normalized.includes("reservado")) {
    return "pending";
  }

  if (normalized.includes("cancelado")) {
    return "cancelled";
  }

  return "";
}

function loadUsersRaw() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || [];
  } catch {
    return [];
  }
}

function loadUsers() {
  const users = loadUsersRaw();

  return users.map((user) => ({
    ...user,
    username: normalizeUsername(user.username),
    role: user.role || "cliente"
  }));
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function loadSales() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.sales)) || [];
  } catch {
    return [];
  }
}

function saveSales(sales) {
  localStorage.setItem(STORAGE_KEYS.sales, JSON.stringify(sales));
}

function getSalesTotal(sales) {
  return sales.reduce((total, sale) => total + Number(sale.amount || 0), 0);
}

function isValidPhone(value) {
  const raw = String(value || "").trim();
  const cleaned = raw.replace(/[\s-]/g, "");

  const boliviaLocal = /^[67]\d{7}$/;
  const boliviaInternational = /^\+?591[67]\d{7}$/;
  const argentinaInternational = /^\+?54\d{10,13}$/;

  return (
    boliviaLocal.test(cleaned) ||
    boliviaInternational.test(cleaned) ||
    argentinaInternational.test(cleaned)
  );
}

function normalizePhone(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function isValidPackageName(value) {
  const text = normalizeName(value);

  if (text.length < 5) return false;
  if (/^\d+$/.test(text)) return false;
  if (!/[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]/.test(text)) return false;
  if (/^(.)\1{4,}$/i.test(text.replace(/\s+/g, ""))) return false;
  if (!/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ0-9\s\-.,()]+$/.test(text)) return false;

  const words = text.split(" ").filter(Boolean);

  if (words.length < 2 && !itinerary.some((item) => text.toLowerCase().includes(item.title.toLowerCase()))) {
    return false;
  }

  return true;
}

function isValidEmail(value) {
  const email = String(value || "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getPaymentLabel(value) {
  return value || "No registrado";
}

function openQrModal(imageSrc) {
  if (!ui.qrModal || !ui.qrModalImage) return;
  ui.qrModalImage.src = imageSrc;
  ui.qrModal.classList.remove("is-hidden");
}

function closeQrModal() {
  if (!ui.qrModal) return;
  ui.qrModal.classList.add("is-hidden");
}

function syncQrPaymentBox(paymentSelect) {
  if (!paymentSelect) return;

  const box = paymentSelect.closest("label")?.nextElementSibling;

  if (!box || !box.classList.contains("qr-payment-box")) return;

  if (paymentSelect.value === "Transferencia bancaria QR" && !paymentSelect.disabled) {
    box.classList.remove("is-hidden");
  } else {
    box.classList.add("is-hidden");
  }
}

function syncCardPaymentBox(paymentSelect) {
  if (!paymentSelect) return;

  const container = paymentSelect.closest("form") || paymentSelect.closest(".checkout-box");
  if (!container) return;

  const cardBox = container.querySelector(".card-payment-box");

  if (!cardBox) return;

  if (paymentSelect.value === "Tarjeta de débito o crédito" && !paymentSelect.disabled) {
    cardBox.classList.remove("is-hidden");
  } else {
    cardBox.classList.add("is-hidden");
    cardBox.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }
}

function normalizeCardNumber(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatCardNumberInput(input) {
  if (!input) return;

  const digits = normalizeCardNumber(input.value).slice(0, 16);
  input.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function isValidCardNumber(value) {
  const digits = normalizeCardNumber(value);
  return /^\d{16}$/.test(digits);
}

function formatCardExpiryInput(input) {
  if (!input) return;

  const digits = String(input.value || "").replace(/\D/g, "").slice(0, 4);

  if (digits.length < 2) {
    input.value = digits;
    return;
  }

  if (digits.length === 2) {
    input.value = `${digits}/`;
    return;
  }

  input.value = `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function isValidFullCardHolderName(value) {
  const text = normalizeName(value);
  const namePattern = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/;

  if (!namePattern.test(text)) return false;

  const words = text.split(" ").filter(Boolean);

  if (words.length < 3 || words.length > 4) return false;

  return words.every((word) => {
    if (word.length < 2) return false;
    if (!/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/.test(word)) return false;
    return !/^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ])\1+$/i.test(word);
  });
}

function isValidExpiryDate(value) {
  const text = String(value || "").trim();
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(text)) return false;

  const [month, year] = text.split("/").map(Number);
  const currentDate = new Date();
  const currentYear = Number(String(currentDate.getFullYear()).slice(-2));
  const currentMonth = currentDate.getMonth() + 1;

  return year > currentYear || (year === currentYear && month >= currentMonth);
}

function isValidCardExpiry(value) {
  return isValidExpiryDate(value);
}

function isValidCvv(value) {
  return /^\d{3,4}$/.test(String(value || "").trim());
}

function getCardData(container) {
  const cardHolder = normalizeName(container.querySelector("[data-card-holder], .card-holder-input")?.value || "");
  const cardNumber = normalizeCardNumber(container.querySelector("[data-card-number], .card-number-input")?.value || "");
  const cardExpiry = String(container.querySelector("[data-card-expiry], .card-expiry-input")?.value || "").trim();
  const cardCvv = String(container.querySelector("[data-card-cvv], .card-cvv-input")?.value || "").trim();

  if (!isValidFullCardHolderName(cardHolder)) {
    showToast("Ingresa el titular completo de la tarjeta");
    return null;
  }

  if (!isValidCardNumber(cardNumber)) {
    showToast("Ingresa un número de tarjeta válido");
    return null;
  }

  if (!isValidExpiryDate(cardExpiry)) {
    showToast("Ingresa un vencimiento válido MM/AA");
    return null;
  }

  if (!isValidCvv(cardCvv)) {
    showToast("Ingresa un CVV válido");
    return null;
  }

  return {
    cardHolder,
    cardLast4: cardNumber.slice(-4),
    cardMasked: `**** **** **** ${cardNumber.slice(-4)}`,
    cardExpiry
  };
}

function syncPaymentMethodWithStatus(statusSelect, paymentSelect) {
  if (!statusSelect || !paymentSelect) return;

  const status = statusSelect.value;

  if (status === "Pagado") {
    paymentSelect.disabled = false;
    paymentSelect.required = true;

    if (paymentSelect.value === "Pendiente de pago") {
      paymentSelect.value = "";
    }

    syncQrPaymentBox(paymentSelect);
    syncCardPaymentBox(paymentSelect);
    return;
  }

  paymentSelect.value = "";
  paymentSelect.disabled = true;
  paymentSelect.required = false;
  syncQrPaymentBox(paymentSelect);
  syncCardPaymentBox(paymentSelect);
}

function getRoleLabel(role) {
  const labels = {
    admin: "Administrador",
    vendedor: "Vendedor",
    cliente: "Cliente"
  };

  return labels[role] || "Cliente";
}

function normalizeName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeCountry(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ");
}

function getCurrencyByCountry(country) {
  const normalizedCountry = normalizeCountry(country);
  return COUNTRY_CURRENCIES[normalizedCountry] || DEFAULT_CURRENCY;
}

function formatLocalMoney(amountInUSD, country) {
  const currency = getCurrencyByCountry(country);
  const convertedAmount = amountInUSD * currency.rateFromUSD;

  const formattedNumber = convertedAmount.toLocaleString(currency.locale, {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals
  });

  return `${currency.prefix}${formattedNumber}${currency.suffix}`;
}

function fixMapSize() {
  if (!map) return;

  map.invalidateSize({
    animate: false,
    pan: false
  });
}

function requestMapRefresh() {
  if (!map) return;

  const delays = [0, 120, 300, 700, 1200];

  delays.forEach((delay) => {
    setTimeout(() => {
      fixMapSize();

      if (baseLayer && delay >= 300) {
        baseLayer.redraw();
      }
    }, delay);
  });
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    ui.themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    ui.themeToggle.textContent = "🌙";
  }
}

function initMap() {
  map = L.map(ui.mapContainer, {
    zoomControl: true,
    scrollWheelZoom: true,
    preferCanvas: true
  }).setView([-21.704, -63.632], 8);

  baseLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 20,
    subdomains: "abcd",
    detectRetina: false,
    crossOrigin: true,
    keepBuffer: 6,
    updateWhenIdle: true,
    updateWhenZooming: false,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  });

  baseLayer.on("tileerror", retryTileLoad);
  baseLayer.addTo(map);

  allPlacesLayer = L.layerGroup().addTo(map);

  syncAllChacoPlacesOnMap();

  setTimeout(() => {
    fitAllChacoPlacesOnMap();
  }, 500);

  if ("ResizeObserver" in window && ui.mapContainer) {
    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(fixMapSize);
    });

    observer.observe(ui.mapContainer);
  }

  requestMapRefresh();
}

function retryTileLoad(event) {
  const tile = event.tile;

  if (!tile || tile.dataset.retried === "true") return;

  tile.dataset.retried = "true";

  setTimeout(() => {
    try {
      const retryUrl = new URL(tile.src);
      retryUrl.searchParams.set("retry", Date.now().toString());
      tile.src = retryUrl.toString();
    } catch {
      tile.src = `${tile.src}?retry=${Date.now()}`;
    }
  }, 450);
}

async function loadDestination(query) {
  try {
    setLoading(true);

    const cities = await searchCities(query);

    if (!cities.length) {
      showToast("No se encontró ese destino. Prueba con Yacuiba, Villa Montes, Caraparí o Aguaragüe.");
      return;
    }

    currentCity = cities[0];
    ui.cityInput.value = currentCity.name;

    await Promise.all([
      loadWeather(currentCity),
      loadPlaces(currentCity)
    ]);

    updateCityMap(currentCity, "🌵");
    updateBudget();

    setTimeout(() => {
      fitAllChacoPlacesOnMap();
    }, 450);

    showToast(`${currentCity.displayName} cargado. Lista: ${currentPlaces.length} cercanos · Mapa: ${allChacoPlaces.length} del Gran Chaco`);
  } catch (error) {
    console.error(error);
    showToast("No se pudieron cargar los datos. Revisa tu conexión.");
  } finally {
    setLoading(false);
    requestMapRefresh();
  }
}

function geolocateUser() {
  if (!navigator.geolocation) {
    showToast("Tu navegador no permite usar geolocalización");
    return;
  }

  ui.geoLocateBtn.disabled = true;
  ui.geoLocateBtn.textContent = "Localizando...";

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const nearestCity = detectNearestCity(latitude, longitude);
      const nearestCityName = nearestCity?.name || "Gran Chaco";

      currentCity = {
        id: "current-location",
        name: "Mi ubicación",
        displayName: `Mi ubicación actual (cerca de ${nearestCityName})`,
        country: nearestCity?.country || "Bolivia",
        nearestCity,
        latitude,
        longitude
      };

      ui.cityInput.value = `Mi ubicación actual - ${nearestCityName}`;

      try {
        setLoading(true);

        await Promise.all([
          loadWeather(currentCity),
          loadPlaces(currentCity)
        ]);

        updateCityMap(currentCity, "📍");

        if (locationAccuracyCircle) {
          locationAccuracyCircle.remove();
        }

        if (position.coords.accuracy) {
          locationAccuracyCircle = L.circle([latitude, longitude], {
            radius: position.coords.accuracy,
            color: "#0f766e",
            fillColor: "#2dd4bf",
            fillOpacity: 0.12,
            weight: 1
          }).addTo(map);
        }

        updateBudget();
        requestMapRefresh();

        map.setView([latitude, longitude], 15, { animate: true });

        if (cityMarker) {
          cityMarker.openPopup();
        }

        const radiusKm = Number(ui.radiusSelect.value) / 1000;
        const placesMessage = currentPlaces.length
          ? `${currentPlaces.length} lugares turísticos dentro de ${Number.isInteger(radiusKm) ? radiusKm : radiusKm.toFixed(1)} km`
          : "No se encontraron lugares turísticos dentro del radio seleccionado.";

        showToast(`Ubicación cerca de ${nearestCityName}. ${placesMessage}`);
      } catch (error) {
        console.error(error);
        showToast("No se pudieron cargar datos de tu ubicación");
      } finally {
        setLoading(false);
        ui.geoLocateBtn.disabled = false;
        ui.geoLocateBtn.textContent = "Geolocalizar";
        requestMapRefresh();
      }
    },
    (error) => {
      console.error(error);

      ui.geoLocateBtn.disabled = false;
      ui.geoLocateBtn.textContent = "Geolocalizar";

      if (error.code === error.PERMISSION_DENIED) {
        showToast("Permiso de ubicación denegado");
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        showToast("No se pudo obtener tu ubicación");
      } else if (error.code === error.TIMEOUT) {
        showToast("La geolocalización tardó demasiado");
      } else {
        showToast("Error al intentar geolocalizar");
      }

      requestMapRefresh();
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

async function loadWeather(city) {
  const weather = await getWeather(city.latitude, city.longitude);
  updateWeatherUI(city, weather);
  renderForecast(weather.daily);
}

async function loadPlaces(city) {
  return loadPlacesForLocation(city.latitude, city.longitude);
}

async function loadPlacesForLocation(latitude, longitude) {
  return updateNearbyPlacesByRadius(
    latitude,
    longitude,
    Number(ui.radiusSelect.value)
  );
}

async function updateNearbyPlacesByRadius(latitude, longitude, radius) {
  ui.placesList.innerHTML = '<div class="loader">Buscando lugares turísticos cercanos...</div>';

  currentPlaces = await getNearbyPlaces(
    latitude,
    longitude,
    Number(radius)
  );

  renderPlaces(currentPlaces);
  ui.placesMetric.textContent = currentPlaces.length;
  renderTouristMarkers(currentPlaces);

  return currentPlaces;
}

function updateWeatherUI(city, weather) {
  const current = weather.current;

  ui.selectedCityName.textContent = city.displayName;
  ui.weatherIcon.textContent = weather.currentInfo.icon;
  ui.currentTemp.textContent = `${Math.round(current.temperature_2m)}°C`;
  ui.weatherDescription.textContent = weather.currentInfo.label;
  ui.windValue.textContent = Math.round(current.wind_speed_10m);
  ui.humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  ui.travelScore.textContent = `${weather.travelScore}/100`;
  ui.countryMetric.textContent = city.country;
  ui.feelMetric.textContent = `${Math.round(current.apparent_temperature)}°C`;
  ui.adviceMetric.textContent = weather.advice;

  updateWeatherAnimation(city.displayName || city.name, weather.currentInfo.label);
  updateBudget();
}

function updateWeatherAnimation(cityName, weatherText) {
  const type = getWeatherAnimationType(weatherText);

  clearWeatherAnimation();

  if (!ui.weatherAnimationLayer) return;

  ui.weatherAnimationLayer.dataset.city = cityName || "";
  ui.weatherAnimationLayer.dataset.weatherType = type || "none";

  if (type === "rain") {
    renderRainAnimation();
  } else if (type === "sunny") {
    renderSunnyAnimation();
  } else if (type === "cloudy") {
    renderCloudyAnimation();
  }
}

function getWeatherAnimationType(weatherText) {
  const text = String(weatherText || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (/\b(lluvia|lluvioso|rain|rainy|tormenta|storm)\b/.test(text)) return "rain";
  if (/\b(soleado|despejado|sunny|clear)\b/.test(text)) return "sunny";
  if (/\b(nublado|nube|cloudy|clouds|overcast)\b/.test(text)) return "cloudy";

  return null;
}

function renderRainAnimation() {
  if (!ui.weatherAnimationLayer) return;

  const rain = document.createElement("div");
  rain.className = "weather-rain";

  for (let index = 0; index < 22; index += 1) {
    const drop = document.createElement("span");
    drop.className = "weather-rain-drop";
    drop.style.left = `${4 + index * 4.3}%`;
    drop.style.animationDelay = `${(index % 8) * -0.18}s`;
    drop.style.animationDuration = `${1.2 + (index % 5) * 0.16}s`;
    rain.appendChild(drop);
  }

  ui.weatherAnimationLayer.appendChild(rain);
}

function renderSunnyAnimation() {
  if (!ui.weatherAnimationLayer) return;

  const sun = document.createElement("div");
  sun.className = "weather-sun";

  const glow = document.createElement("span");
  glow.className = "weather-sun-glow";

  const core = document.createElement("span");
  core.className = "weather-sun-core";

  sun.append(glow, core);
  ui.weatherAnimationLayer.appendChild(sun);
}

function renderCloudyAnimation() {
  if (!ui.weatherAnimationLayer) return;

  const cloudWrap = document.createElement("div");
  cloudWrap.className = "weather-clouds";

  for (let index = 0; index < 3; index += 1) {
    const cloud = document.createElement("span");
    cloud.className = `weather-cloud weather-cloud-${index + 1}`;
    cloudWrap.appendChild(cloud);
  }

  ui.weatherAnimationLayer.appendChild(cloudWrap);
}

function clearWeatherAnimation() {
  if (!ui.weatherAnimationLayer) return;

  ui.weatherAnimationLayer.replaceChildren();
  ui.weatherAnimationLayer.dataset.weatherType = "none";
}

function updateCityMap(city, icon = "🌵") {
  const position = [city.latitude, city.longitude];

  if (cityMarker) cityMarker.remove();

  cityMarker = L.marker(position, {
    icon: L.divIcon({
      className: "city-pin",
      html: `<span>${icon}</span>`,
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    })
  }).addTo(map);

  cityMarker.bindPopup(`
    <strong>${escapeHtml(city.displayName)}</strong><br>
    Punto central del recorrido
  `);

  requestMapRefresh();
}

function syncAllChacoPlacesOnMap() {
  if (!map || !allPlacesLayer) return;

  allChacoPlaces = getAllChacoPlaces()
    .filter((place) => Number.isFinite(place.latitude) && Number.isFinite(place.longitude));

  renderTouristMarkers(allChacoPlaces);
}

function renderTouristMarkers(places) {
  allChacoPlaces = places
    .filter((place) => Number.isFinite(place.latitude) && Number.isFinite(place.longitude));

  updateAllChacoPlaceMarkers(allChacoPlaces);
}

function updateAllChacoPlaceMarkers(places) {
  allPlacesLayer.clearLayers();

  places.forEach((place) => {
    const marker = L.marker([place.latitude, place.longitude], {
      icon: L.divIcon({
        className: "place-pin",
        html: "<span>📍</span>",
        iconSize: [34, 34],
        iconAnchor: [17, 34]
      })
    });

    marker.bindPopup(`
      <strong>${escapeHtml(place.title)}</strong><br>
      ${escapeHtml(place.city || "Gran Chaco")} · ${escapeHtml(place.type || "Lugar turístico")}<br>
      <small>${escapeHtml(place.summary || "")}</small><br>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">
        <button class="popup-add" data-place-id="${escapeHtml(place.id)}">Agregar al plan</button>
        <a class="popup-add" style="text-decoration:none; display:inline-block;" href="place-detail.html?id=${encodeURIComponent(place.id)}">Ver más</a>
      </div>
    `);

    marker.on("popupopen", () => {
      const popupElement = marker.getPopup()?.getElement();
      const button = popupElement?.querySelector(".popup-add[data-place-id]");

      if (button) {
        button.addEventListener("click", () => addToItinerary(place));
      }
    });

    marker.addTo(allPlacesLayer);
  });

  requestMapRefresh();
}

function fitAllChacoPlacesOnMap() {
  if (!map) return;

  const boundsItems = allChacoPlaces
    .filter((place) => Number.isFinite(place.latitude) && Number.isFinite(place.longitude))
    .map((place) => [place.latitude, place.longitude]);

  if (currentCity && Number.isFinite(currentCity.latitude) && Number.isFinite(currentCity.longitude)) {
    boundsItems.push([currentCity.latitude, currentCity.longitude]);
  }

  if (!boundsItems.length) return;

  const bounds = L.latLngBounds(boundsItems);

  map.fitBounds(bounds, {
    padding: [46, 46],
    maxZoom: 9,
    animate: true
  });

  requestMapRefresh();
}

function renderForecast(daily) {
  const dates = daily.time.map((date) => formatDate.format(new Date(`${date}T12:00:00`)));
  const maxTemps = daily.temperature_2m_max.map(Math.round);
  const minTemps = daily.temperature_2m_min.map(Math.round);

  if (forecastChart) forecastChart.destroy();

  forecastChart = new Chart(ui.forecastCanvas, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Máxima °C",
          data: maxTemps,
          tension: 0.35,
          borderWidth: 3
        },
        {
          label: "Mínima °C",
          data: minTemps,
          tension: 0.35,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.body).getPropertyValue("--text")
          }
        }
      },
      scales: {
        y: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue("--muted")
          },
          grid: {
            color: "rgba(100, 116, 139, 0.14)"
          }
        },
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue("--muted")
          },
          grid: {
            display: false
          }
        }
      }
    }
  });

  ui.forecastList.innerHTML = daily.time.map((date, index) => {
    const weatherCode = daily.weather_code[index];
    const rain = daily.precipitation_probability_max[index] ?? 0;

    return `
      <div class="forecast-item">
        <div>
          <strong>${formatDate.format(new Date(`${date}T12:00:00`))}</strong>
          <span>${getDailyWeatherLabel(weatherCode)}</span>
        </div>
        <div>
          <strong>${Math.round(daily.temperature_2m_min[index])}° / ${Math.round(daily.temperature_2m_max[index])}°</strong>
          <span>${rain}% lluvia</span>
        </div>
      </div>
    `;
  }).join("");
}

function getDailyWeatherLabel(code) {
  const labels = {
    0: "Despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Niebla",
    48: "Niebla",
    51: "Llovizna",
    53: "Llovizna",
    55: "Llovizna intensa",
    61: "Lluvia ligera",
    63: "Lluvia",
    65: "Lluvia fuerte",
    71: "Nieve",
    73: "Nieve",
    75: "Nieve intensa",
    80: "Chubascos",
    81: "Chubascos",
    82: "Chubascos fuertes",
    95: "Tormenta",
    96: "Tormenta",
    99: "Tormenta fuerte"
  };

  return labels[code] || "Clima variable";
}

function renderPlaces(places) {
  if (!places.length) {
    ui.placesList.innerHTML = '<div class="empty-state">No se encontraron lugares turísticos dentro del radio seleccionado.</div>';
    return;
  }

  ui.placesList.innerHTML = places.map((place) => `
    <article class="place-card">
      <div>
        <h3>${escapeHtml(place.title)}</h3>
        <p>${escapeHtml(place.summary)}</p>
        <p><strong>${escapeHtml(place.distanceText)}</strong> desde el punto seleccionado</p>
      </div>
      <div class="place-actions">
        <button type="button" data-add-place="${escapeHtml(place.id)}">Agregar</button>
        <a href="place-detail.html?id=${encodeURIComponent(place.id)}">Ver más</a>
      </div>
    </article>
  `).join("");

  ui.placesList.querySelectorAll("[data-add-place]").forEach((button) => {
    button.addEventListener("click", () => {
      const place = places.find((item) => String(item.id) === button.dataset.addPlace);
      if (place) addToItinerary(place);
    });
  });
}

function addToItinerary(place) {
  const exists = itinerary.some((item) => String(item.id) === String(place.id));

  if (exists) {
    showToast("Ese lugar ya está en tu itinerario");
    return;
  }

  itinerary.push({
    id: place.id,
    title: place.title,
    distanceText: place.distanceText || place.city || "Punto turístico",
    city: place.city ? `${place.city}, Gran Chaco` : currentCity?.displayName || "Gran Chaco"
  });

  saveItinerary();
  renderItinerary();
  updateBudget();
  renderRolePanels();
  updateCheckoutBox();
  showToast("Lugar agregado al itinerario");
}

function removeFromItinerary(id) {
  itinerary = itinerary.filter((item) => String(item.id) !== String(id));

  saveItinerary();
  renderItinerary();
  updateBudget();
  renderRolePanels();
  updateCheckoutBox();
  showToast("Lugar eliminado");
}

function renderItinerary() {
  if (!itinerary.length) {
    ui.itineraryList.className = "itinerary-list empty-state";
    ui.itineraryList.textContent = "Aún no agregaste lugares al itinerario.";
    updateCheckoutBox();
    return;
  }

  ui.itineraryList.className = "itinerary-list";
  ui.itineraryList.innerHTML = itinerary.map((item, index) => `
    <article class="plan-card">
      <div>
        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.city)} · ${escapeHtml(item.distanceText)}</p>
      </div>
      <button type="button" data-remove-place="${escapeHtml(item.id)}">Quitar</button>
    </article>
  `).join("");

  ui.itineraryList.querySelectorAll("[data-remove-place]").forEach((button) => {
    button.addEventListener("click", () => removeFromItinerary(button.dataset.removePlace));
  });

  updateCheckoutBox();
}

function getItineraryTotalBOB() {
  const days = Math.max(1, Number(ui.daysInput.value) || 1);
  const dailyCostBOB = Number(ui.styleSelect.value);
  const activitiesCostBOB = itinerary.length * 15;
  return days * dailyCostBOB + activitiesCostBOB;
}

function updateCheckoutBox() {
  if (!ui.checkoutBox || !ui.checkoutActionBtn || !ui.checkoutSummary) return;

  if (!profile) {
    ui.checkoutBox.classList.add("is-hidden");
    return;
  }

  const isClient = hasRole("cliente");
  const isSellerOrAdmin = hasRole("vendedor", "admin");

  if (!isClient && !isSellerOrAdmin) {
    ui.checkoutBox.classList.add("is-hidden");
    return;
  }

  ui.checkoutBox.classList.remove("is-hidden");

  const total = itinerary.length ? getItineraryTotalBOB() : 0;
  const totalText = `Bs ${total.toLocaleString("es-BO")} BOB`;

  if (isClient) {
    ui.checkoutEyebrow.textContent = "Compra del viaje";
    ui.checkoutTitle.textContent = "Reserva tu itinerario";
    ui.checkoutActionBtn.textContent = "Comprar itinerario";
    ui.checkoutClientLabel.classList.add("is-hidden");
  }

  if (isSellerOrAdmin) {
    ui.checkoutEyebrow.textContent = "Venta del viaje";
    ui.checkoutTitle.textContent = "Registrar venta del itinerario";
    ui.checkoutActionBtn.textContent = "Registrar venta del itinerario";
    ui.checkoutClientLabel.classList.remove("is-hidden");
    renderCheckoutClients();
  }

  if (!itinerary.length) {
    ui.checkoutActionBtn.disabled = true;
    ui.checkoutSummary.textContent = "Agrega lugares al itinerario para continuar.";
    return;
  }

  if (isSellerOrAdmin && !ui.checkoutClientInput.value) {
    ui.checkoutActionBtn.disabled = true;
    ui.checkoutSummary.textContent = `${itinerary.length} lugar(es) seleccionados · Total estimado: ${totalText}. Selecciona un cliente.`;
    return;
  }

  ui.checkoutActionBtn.disabled = false;
  ui.checkoutSummary.textContent = `${itinerary.length} lugar(es) seleccionados · Total estimado: ${totalText}`;
}

function checkoutItinerary() {
  if (!profile) {
    showToast("Inicia sesión para continuar");
    return;
  }

  if (!itinerary.length) {
    showToast("Agrega lugares al itinerario antes de continuar");
    return;
  }

  const isClient = hasRole("cliente");
  const isSellerOrAdmin = hasRole("vendedor", "admin");

  let client = null;
  let sellerId = "sistema";
  let sellerName = "Chaco Explorer";

  if (isClient) {
    client = {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      fullName: profile.fullName
    };
  }

  if (isSellerOrAdmin) {
    const clientId = ui.checkoutClientInput.value;
    client = loadUsers().find((user) => user.id === clientId && user.role === "cliente");

    if (!client) {
      showToast("Selecciona un cliente válido");
      return;
    }

    sellerId = profile.id;
    sellerName = profile.fullName;
  }

  if (!client) {
    showToast("No se pudo identificar el cliente");
    return;
  }

  const status = ui.checkoutStatusInput.value;
  const customerPhone = normalizePhone(ui.checkoutPhoneInput.value);
  const customerEmail = ui.checkoutEmailInput.value.trim();
  const paymentMethod = ui.checkoutPaymentMethodInput.value;

  if (!isValidPhone(customerPhone)) {
    showToast("Ingresa un teléfono válido");
    return;
  }

  if (!isValidEmail(customerEmail)) {
    showToast("Ingresa un correo electrónico válido");
    return;
  }

  if (status === "Pagado" && !paymentMethod) {
    showToast("Selecciona una forma de pago para una venta pagada");
    return;
  }

  const finalPaymentMethod = status === "Pagado"
    ? paymentMethod
    : "Pendiente de pago";
  const cardData = finalPaymentMethod === "Tarjeta de débito o crédito"
    ? getCardData(ui.checkoutBox)
    : {};

  if (!cardData) return;

  const total = getItineraryTotalBOB();
  const packageName = `Itinerario Chaco Explorer: ${itinerary.map((item) => item.title).join(", ")}`;

  const sale = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    clientId: client.id,
    clientName: client.fullName || `${client.firstName} ${client.lastName}`,
    packageName,
    amount: total,
    status,
    customerPhone,
    customerEmail,
    paymentMethod: finalPaymentMethod,
    ...cardData,
    sellerId,
    sellerName,
    createdAt: new Date().toISOString()
  };

  const sales = loadSales();
  sales.unshift(sale);
  saveSales(sales);

  ui.checkoutPhoneInput.value = "";
  ui.checkoutEmailInput.value = "";
  ui.checkoutStatusInput.value = "Reservado";
  ui.checkoutPaymentMethodInput.value = "";
  syncPaymentMethodWithStatus(ui.checkoutStatusInput, ui.checkoutPaymentMethodInput);

  renderRolePanels();
  updateCheckoutBox();

  if (isClient) {
    showToast("Compra reservada correctamente");
  } else {
    showToast("Venta del itinerario registrada correctamente");
  }
}

function updateBudget() {
  if (!itinerary.length) {
    ui.budgetTotal.textContent = "Bs 0 BOB";
    updateCheckoutBox();
    return;
  }

  const estimatedTotalBOB = getItineraryTotalBOB();

  ui.budgetTotal.textContent = `Bs ${estimatedTotalBOB.toLocaleString("es-BO")} BOB`;
  updateCheckoutBox();
}

function loadItinerary() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.itinerary)) || [];
  } catch {
    return [];
  }
}

function saveItinerary() {
  localStorage.setItem(STORAGE_KEYS.itinerary, JSON.stringify(itinerary));
}

function syncItineraryFromStorage() {
  itinerary = loadItinerary();
  renderItinerary();
  updateBudget();
  renderRolePanels();
}

function setLoading(isLoading) {
  const button = ui.searchForm.querySelector("button");
  button.disabled = isLoading;
  button.textContent = isLoading ? "Buscando..." : "Buscar";
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.style.zIndex = "20000";
  ui.toast.classList.add("show");

  clearTimeout(showToast.timeoutId);

  showToast.timeoutId = setTimeout(() => {
    ui.toast.classList.remove("show");
  }, 2600);
}

init();
