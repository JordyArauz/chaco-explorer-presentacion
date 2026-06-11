const OPEN_METEO_FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

const weatherCodes = {
  0: { label: "Cielo despejado", icon: "☀️" },
  1: { label: "Mayormente despejado", icon: "🌤️" },
  2: { label: "Parcialmente nublado", icon: "⛅" },
  3: { label: "Nublado", icon: "☁️" },
  45: { label: "Niebla", icon: "🌫️" },
  48: { label: "Niebla con escarcha", icon: "🌫️" },
  51: { label: "Llovizna ligera", icon: "🌦️" },
  53: { label: "Llovizna moderada", icon: "🌦️" },
  55: { label: "Llovizna intensa", icon: "🌧️" },
  61: { label: "Lluvia ligera", icon: "🌧️" },
  63: { label: "Lluvia moderada", icon: "🌧️" },
  65: { label: "Lluvia fuerte", icon: "⛈️" },
  71: { label: "Nieve ligera", icon: "🌨️" },
  73: { label: "Nieve moderada", icon: "🌨️" },
  75: { label: "Nieve fuerte", icon: "❄️" },
  80: { label: "Chubascos ligeros", icon: "🌦️" },
  81: { label: "Chubascos moderados", icon: "🌧️" },
  82: { label: "Chubascos fuertes", icon: "⛈️" },
  95: { label: "Tormenta", icon: "⛈️" },
  96: { label: "Tormenta con granizo", icon: "⛈️" },
  99: { label: "Tormenta fuerte con granizo", icon: "⛈️" }
};

const chacoCities = [
  {
    id: "chaco-yacuiba",
    name: "Yacuiba",
    aliases: ["yacuiba", "yacuiba bolivia", "yacuiba tarija"],
    country: "Bolivia",
    admin1: "Tarija",
    latitude: -22.0164,
    longitude: -63.6775,
    timezone: "America/La_Paz",
    population: null,
    displayName: "Yacuiba, Gran Chaco, Tarija, Bolivia"
  },
  {
    id: "chaco-villa-montes",
    name: "Villa Montes",
    aliases: ["villa montes", "villamontes", "villa montes bolivia", "villa montes tarija"],
    country: "Bolivia",
    admin1: "Tarija",
    latitude: -21.2622,
    longitude: -63.4694,
    timezone: "America/La_Paz",
    population: null,
    displayName: "Villa Montes, Gran Chaco, Tarija, Bolivia"
  },
  {
    id: "chaco-carapari",
    name: "Caraparí",
    aliases: ["carapari", "caraparí", "carapari bolivia", "carapari tarija"],
    country: "Bolivia",
    admin1: "Tarija",
    latitude: -21.8342,
    longitude: -63.7486,
    timezone: "America/La_Paz",
    population: null,
    displayName: "Caraparí, Gran Chaco, Tarija, Bolivia"
  },
  {
    id: "chaco-aguarague",
    name: "Ruta del Aguaragüe",
    aliases: ["aguarague", "aguaragüe", "ruta del aguarague", "serrania del aguarague"],
    country: "Bolivia",
    admin1: "Tarija",
    latitude: -21.508,
    longitude: -63.579,
    timezone: "America/La_Paz",
    population: null,
    displayName: "Ruta del Aguaragüe, Gran Chaco, Tarija, Bolivia"
  },
  {
    id: "chaco-gran-chaco",
    name: "Gran Chaco",
    aliases: ["gran chaco", "chaco", "chaco tarijeño", "provincia gran chaco"],
    country: "Bolivia",
    admin1: "Tarija",
    latitude: -21.704,
    longitude: -63.632,
    timezone: "America/La_Paz",
    population: null,
    displayName: "Gran Chaco, Tarija, Bolivia"
  }
];

const chacoPlaces = [
  {
    id: "yacuiba-plaza-12-agosto",
    title: "Plaza Principal 12 de Agosto",
    city: "Yacuiba",
    type: "Plaza principal",
    summary: "Espacio central de Yacuiba, ideal para iniciar un recorrido urbano, descansar y tomar fotografías.",
    latitude: -22.0161,
    longitude: -63.6772,
    url: "#"
  },
  {
    id: "yacuiba-mercado-central",
    title: "Mercado Central de Yacuiba",
    city: "Yacuiba",
    type: "Cultura local",
    summary: "Zona comercial tradicional donde se puede conocer el movimiento diario, productos locales y costumbres chaqueñas.",
    latitude: -22.0158,
    longitude: -63.6792,
    url: "#"
  },
  {
    id: "yacuiba-mercado-campesino",
    title: "Mercado Campesino de Yacuiba",
    city: "Yacuiba",
    type: "Cultura local",
    summary: "Lugar representativo para conocer productos regionales, gastronomía sencilla y comercio popular.",
    latitude: -22.0187,
    longitude: -63.6815,
    url: "#"
  },
  {
    id: "yacuiba-centro-comercial-mercado-lourdes",
    title: "Centro Comercial Mercado Lourdes",
    city: "Yacuiba",
    type: "Centro comercial",
    summary: "Zona comercial de Yacuiba recomendada para compras, recorridos urbanos y conocer el movimiento comercial local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-iglesia-san-pedro",
    title: "Iglesia San Pedro",
    city: "Yacuiba",
    type: "Iglesia",
    summary: "Punto religioso y urbano cercano al centro, útil para recorridos culturales dentro de la ciudad.",
    latitude: -22.0155,
    longitude: -63.6761,
    url: "#"
  },
  {
    id: "yacuiba-estacion-tren",
    title: "Estación de Tren de Yacuiba",
    city: "Yacuiba",
    type: "Historia urbana",
    summary: "Referencia histórica vinculada al transporte y al crecimiento urbano de Yacuiba.",
    latitude: -22.0124,
    longitude: -63.6797,
    url: "#"
  },
  {
    id: "yacuiba-terminal",
    title: "Terminal de Buses de Yacuiba",
    city: "Yacuiba",
    type: "Punto de conexión",
    summary: "Punto importante para viajeros que llegan o salen hacia otros municipios del Gran Chaco.",
    latitude: -22.0128,
    longitude: -63.6848,
    url: "#"
  },
  {
    id: "yacuiba-zona-fronteriza",
    title: "Frontera Yacuiba Argentina",
    city: "Yacuiba",
    type: "Zona comercial",
    summary: "Área fronteriza entre Yacuiba y Argentina, reconocida por su movimiento comercial, tránsito de personas y conexión cultural entre ambos países.",
    latitude: -22.0495,
    longitude: -63.6864,
    url: "#"
  },
  {
    id: "yacuiba-circuito-municipal-motociclismo",
    title: "Circuito Municipal De Motociclismo",
    city: "Yacuiba",
    type: "Deporte y recreación",
    summary: "Espacio deportivo de Yacuiba destinado a actividades de motociclismo, eventos locales y recreación al aire libre.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-san-pedro",
    title: "Plazuela San Pedro",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Espacio urbano de descanso y encuentro cercano a zonas tradicionales de Yacuiba.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-la-cruz-mirador",
    title: "La Cruz-Mirador",
    city: "Yacuiba",
    type: "Mirador",
    summary: "Punto panorámico de Yacuiba recomendado para observar la ciudad, tomar fotografías y disfrutar del paisaje local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-la-playa",
    title: "Parque LA PLAYA",
    city: "Yacuiba",
    type: "Parque recreativo",
    summary: "Espacio recreativo urbano de Yacuiba recomendado para visitas familiares, descanso y actividades al aire libre.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-gamy-paseo-peatonal-pocitos",
    title: "GAMY - Paseo Peatonal Pocitos",
    city: "Yacuiba",
    type: "Paseo urbano",
    summary: "Paseo peatonal de Pocitos, recomendado para caminatas, recorridos urbanos y conexión con la zona fronteriza.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-vial",
    title: "Parque vial",
    city: "Yacuiba",
    type: "Educación vial y recreación",
    summary: "Espacio recreativo y educativo orientado a actividades familiares y aprendizaje vial.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-heroes-del-chaco",
    title: "Parque \"Heroes del Chaco\"",
    city: "Yacuiba",
    type: "Parque urbano",
    summary: "Parque urbano de Yacuiba vinculado a la memoria histórica chaqueña, recomendado para paseo y descanso.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-los-lapachos",
    title: "Plazuela Los Lapachos",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Espacio público de Yacuiba recomendado para descanso, paseo y convivencia barrial.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-el-porvenir",
    title: "Plaza \"El Porvenir\"",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza urbana de Yacuiba recomendada para recreación, descanso y actividades comunitarias.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-integracion-bolivia-argentina",
    title: "Parque de integracion de los pueblos \"Bolivia-Argentina\"",
    city: "Yacuiba",
    type: "Parque urbano",
    summary: "Espacio urbano simbólico de integración entre Bolivia y Argentina, recomendado para paseo, descanso y fotografía.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-del-estudiante",
    title: "Plaza del Estudiante",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza de Yacuiba vinculada a la vida estudiantil, actividades sociales y descanso urbano.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-mariscal-sucre",
    title: "Plazuela Mariscal Sucre",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Espacio público de Yacuiba recomendado para paseo, descanso y encuentro vecinal.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-el-pensador",
    title: "El Pensador",
    city: "Yacuiba",
    type: "Monumento urbano",
    summary: "Referencia urbana y cultural de Yacuiba, útil para recorridos y fotografía local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-magarinos",
    title: "Plaza Magariños",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Espacio público de Yacuiba recomendado para descanso, paseo y actividades comunitarias.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-san-jose-pocitos",
    title: "Plazuela San José de Pocitos",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Plazuela ubicada en Pocitos, recomendada para recorridos urbanos y visitas a la zona fronteriza.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-los-lapachos",
    title: "Plaza Los Lapachos",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza urbana de Yacuiba recomendada para paseo, descanso y actividades familiares.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-los-cebiles-b-nacional",
    title: "Parque los Cebiles, B. Nacional",
    city: "Yacuiba",
    type: "Parque urbano",
    summary: "Parque barrial de Yacuiba recomendado para recreación, descanso y actividades familiares.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parquecito-b-ferroviario",
    title: "Parquecito B. Ferroviario",
    city: "Yacuiba",
    type: "Parque urbano",
    summary: "Pequeño parque urbano del Barrio Ferroviario, recomendado como punto de descanso y recreación local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-parque-infantil-barrio-1ro-mayo",
    title: "Parque Infantil Barrio 1ro de Mayo",
    city: "Yacuiba",
    type: "Recreación familiar",
    summary: "Parque infantil barrial de Yacuiba recomendado para familias, niños y actividades de esparcimiento.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-santa-candelaria",
    title: "Plaza Santa Candelaria",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza urbana de Yacuiba recomendada para descanso, encuentro vecinal y actividades familiares.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-rotonda-libertadores",
    title: "Rotonda de los Libertadores",
    city: "Yacuiba",
    type: "Referencia urbana",
    summary: "Rotonda representativa de Yacuiba utilizada como punto de ubicación y referencia urbana.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-graffitis-barrio-gremial",
    title: "Graffitis Barrio Gremial",
    city: "Yacuiba",
    type: "Arte urbano",
    summary: "Espacio de arte urbano en Barrio Gremial, recomendado para recorridos fotográficos y culturales.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-el-chaguanco",
    title: "Plaza el chaguanco",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza urbana de Yacuiba recomendada para descanso, recreación y encuentro vecinal.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-conejini",
    title: "Plaza conejini",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Espacio público de Yacuiba recomendado para recreación barrial, descanso y convivencia local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-lapachal-alto",
    title: "Plazuela Lapachal Alto",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Plazuela de Yacuiba ubicada en zona barrial, recomendada para descanso y recreación familiar.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-balneario-coquito",
    title: "Balneario Coquito",
    city: "Yacuiba",
    type: "Balneario",
    summary: "Balneario recreativo de Yacuiba recomendado para descanso familiar y actividades de esparcimiento.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plaza-bella-vista",
    title: "Plaza de bella vista",
    city: "Yacuiba",
    type: "Plaza urbana",
    summary: "Plaza urbana de Yacuiba recomendada para descanso, paseo y convivencia barrial.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-plazuela-del-sigma",
    title: "Plazuela del Sigma",
    city: "Yacuiba",
    type: "Plazuela urbana",
    summary: "Espacio público de Yacuiba recomendado para descanso, recreación y ubicación local.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-cabana-el-jardin-del-turista-santa-marta",
    title: "CABAÑA EL JARDIN DEL TURISTA - SANTA MARTA",
    city: "Yacuiba",
    type: "Recreación natural",
    summary: "Cabaña turística ubicada en la zona de Santa Marta, recomendada para descanso, recreación y contacto con la naturaleza.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-laguna-santa-martha",
    title: "Laguna Santa Martha",
    city: "Yacuiba",
    type: "Naturaleza",
    summary: "Atractivo natural de Yacuiba recomendado para paisaje, descanso y recorridos recreativos.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-balneario-el-eden",
    title: "Balneario El Eden",
    city: "Yacuiba",
    type: "Balneario",
    summary: "Balneario recreativo de Yacuiba recomendado para visitas familiares, descanso y actividades al aire libre.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "yacuiba-puente-internacional-salvador-mazza",
    title: "Puente Internacional Profesor Salvador Mazza",
    city: "Yacuiba",
    type: "Punto fronterizo",
    summary: "Paso internacional de conexión entre Yacuiba y Argentina, importante para tránsito, comercio y referencia turística fronteriza.",
    latitude: -22.0164,
    longitude: -63.6775,
    url: "#"
  },
  {
    id: "villa-montes-plaza-24-julio",
    title: "Plaza Principal 24 de Julio",
    city: "Villa Montes",
    type: "Plaza principal",
    summary: "Punto urbano central de Villa Montes, ideal para iniciar recorridos y conocer la vida cotidiana del municipio.",
    latitude: -21.2625,
    longitude: -63.4691,
    url: "#"
  },
  {
    id: "villa-montes-museo-corralito",
    title: "Museo Histórico de la Guerra del Chaco",
    city: "Villa Montes",
    type: "Historia",
    summary: "Espacio cultural relacionado con la memoria histórica de la Guerra del Chaco y la identidad regional.",
    latitude: -21.2609,
    longitude: -63.4704,
    url: "#"
  },
  {
    id: "villa-montes-mercado-central",
    title: "Mercado Central de Villa Montes",
    city: "Villa Montes",
    type: "Cultura local",
    summary: "Zona tradicional para conocer productos locales, comida popular y movimiento comercial del municipio.",
    latitude: -21.2614,
    longitude: -63.4716,
    url: "#"
  },
  {
    id: "villa-montes-parque-urbano",
    title: "Bioparque de las Aves",
    city: "Villa Montes",
    type: "Recreación",
    summary: "Espacio para descanso, caminatas cortas y actividades familiares dentro del área urbana.",
    latitude: -21.2648,
    longitude: -63.4682,
    url: "#"
  },
  {
    id: "villa-montes-puente-pilcomayo",
    title: "Mirador Puentes Pilcomayo",
    city: "Villa Montes",
    type: "Mirador urbano",
    summary: "Punto panorámico de Villa Montes recomendado para observar los puentes del Pilcomayo, el paisaje del río y tomar fotografías.",
    latitude: -21.2535,
    longitude: -63.4948,
    url: "#"
  },
  {
    id: "villa-montes-el-angosto",
    title: "Cabaña El Angosto",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Zona turística y paisajística de Villa Montes, asociada al entorno natural de El Angosto, descanso familiar y contacto con la naturaleza.",
    latitude: -21.2412,
    longitude: -63.5532,
    url: "#"
  },
  {
    id: "villa-montes-eco-parque-don-pastor",
    title: "Eco Parque Don Pastor",
    city: "Villa Montes",
    type: "Recreación natural",
    summary: "Espacio recomendado para visitas familiares, comida regional y contacto con el ambiente chaqueño.",
    latitude: -21.2524,
    longitude: -63.5209,
    url: "#"
  },
  {
    id: "villa-montes-ibibobo",
    title: "Ruta histórica de Ibibobo",
    city: "Villa Montes",
    type: "Historia",
    summary: "Recorrido histórico vinculado a la Guerra del Chaco y a la memoria regional del municipio.",
    latitude: -21.4386,
    longitude: -63.2958,
    url: "#"
  },
  {
    id: "villa-montes-soldado-desconocido",
    title: "El Soldado Desconocido",
    city: "Villa Montes",
    type: "Monumento histórico",
    summary: "Monumento representativo vinculado a la memoria histórica de Villa Montes y la Guerra del Chaco.",
    latitude: -21.2611,
    longitude: -63.4687,
    url: "#"
  },
  {
    id: "villa-montes-pescadito",
    title: "PESCADITO",
    city: "Villa Montes",
    type: "Recreación natural",
    summary: "Espacio recreativo de Villa Montes asociado al descanso, visitas familiares y contacto con el entorno natural.",
    latitude: -21.2488,
    longitude: -63.4862,
    url: "#"
  },
  {
    id: "villa-montes-playa-pena-colorada",
    title: "Playa la Peña Colorada",
    city: "Villa Montes",
    type: "Playa natural",
    summary: "Atractivo natural recomendado para descanso, paseo y fotografía en el entorno chaqueño de Villa Montes.",
    latitude: -21.2556,
    longitude: -63.5128,
    url: "#"
  },
  {
    id: "villa-montes-playa-el-pescador",
    title: "Playa el Pescador",
    city: "Villa Montes",
    type: "Playa natural",
    summary: "Zona natural vinculada al río y al descanso familiar, ideal para recorridos y visitas recreativas.",
    latitude: -21.2494,
    longitude: -63.4991,
    url: "#"
  },
  {
    id: "villa-montes-mirador-aguarague",
    title: "Mirador Aguaragüe",
    city: "Villa Montes",
    type: "Mirador natural",
    summary: "Punto panorámico recomendado para observar la Serranía del Aguaragüe y el paisaje chaqueño.",
    latitude: -21.2417,
    longitude: -63.5356,
    url: "#"
  },
  {
    id: "villa-montes-quebrada-tampinta",
    title: "Quebrada de Tampinta",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Zona natural de Villa Montes recomendada para recorridos, fotografía y contacto con paisajes de quebrada.",
    latitude: -21.2748,
    longitude: -63.5452,
    url: "#"
  },
  {
    id: "villa-montes-cruz-de-palo",
    title: "Cruz de Palo",
    city: "Villa Montes",
    type: "Referencia cultural",
    summary: "Punto referencial de Villa Montes asociado a identidad local, tradición y recorridos urbanos o rurales.",
    latitude: -21.2669,
    longitude: -63.4623,
    url: "#"
  },
  {
    id: "villa-montes-sombrero-chaqueno",
    title: "Sombrero Chaqueño",
    city: "Villa Montes",
    type: "Monumento cultural",
    summary: "Referencia cultural representativa de la identidad chaqueña en Villa Montes.",
    latitude: -21.2587,
    longitude: -63.4646,
    url: "#"
  },
  {
    id: "villa-montes-posada-del-condor",
    title: "POSADA DEL CONDOR (RUTA DEL MASTIL)",
    city: "Villa Montes",
    type: "Ruta turística",
    summary: "Punto de la Ruta del Mástil asociado a recorridos de naturaleza, descanso y observación del paisaje.",
    latitude: -21.2442,
    longitude: -63.5298,
    url: "#"
  },
  {
    id: "villa-montes-des-01-ruta-mastil",
    title: "DES. 01 (RUTA DEL MASTIL)",
    city: "Villa Montes",
    type: "Ruta turística",
    summary: "Punto referencial de la Ruta del Mástil, recomendado para recorridos guiados y observación del entorno.",
    latitude: -21.2461,
    longitude: -63.5369,
    url: "#"
  },
  {
    id: "villa-montes-des-02-ruta-mastil",
    title: "DES. 02 (RUTA DEL MASTIL)",
    city: "Villa Montes",
    type: "Ruta turística",
    summary: "Punto de descanso o referencia dentro de la Ruta del Mástil en Villa Montes.",
    latitude: -21.2484,
    longitude: -63.5427,
    url: "#"
  },
  {
    id: "villa-montes-tampinta",
    title: "Tampinta Villa Montes",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Zona natural de Villa Montes asociada a recorridos, quebradas y paisajes característicos del Chaco.",
    latitude: -21.2791,
    longitude: -63.5485,
    url: "#"
  },
  {
    id: "villa-montes-mirador-cima-aguarague",
    title: "MIRADOR (CIMA DEL AGUARAGUE)",
    city: "Villa Montes",
    type: "Mirador natural",
    summary: "Mirador ubicado en la zona alta del Aguaragüe, recomendado para observar el paisaje amplio del Chaco serrano.",
    latitude: -21.2408,
    longitude: -63.5492,
    url: "#"
  },
  {
    id: "villa-montes-aguas-termales",
    title: "Aguas termales, Villa Montes",
    city: "Villa Montes",
    type: "Relajación natural",
    summary: "Atractivo asociado al descanso, bienestar y turismo natural en el municipio de Villa Montes.",
    latitude: -21.2526,
    longitude: -63.5184,
    url: "#"
  },
  {
    id: "villa-montes-playa-pilcomayo",
    title: "Playa Pilcomayo",
    city: "Villa Montes",
    type: "Playa natural",
    summary: "Espacio natural cercano al Río Pilcomayo, recomendado para descanso, paisaje y recorridos familiares.",
    latitude: -21.2476,
    longitude: -63.5048,
    url: "#"
  },
  {
    id: "villa-montes-balneario-el-ruisenor",
    title: "BALNEARIO EL RUISEÑOR",
    city: "Villa Montes",
    type: "Balneario",
    summary: "Balneario recreativo de Villa Montes recomendado para descanso familiar y actividades de esparcimiento.",
    latitude: -21.2715,
    longitude: -63.4809,
    url: "#"
  },
  {
    id: "villa-montes-quebrada-los-monos-desembocadura",
    title: "Quebrada los Monos desembocadura",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Sector natural asociado a quebradas y paisajes de Villa Montes, ideal para recorridos de observación.",
    latitude: -21.2827,
    longitude: -63.5396,
    url: "#"
  },
  {
    id: "villa-montes-des-03-ruta-mastil",
    title: "DES. 03 (RUTA DEL MASTIL)",
    city: "Villa Montes",
    type: "Ruta turística",
    summary: "Punto referencial de la Ruta del Mástil, útil para recorridos turísticos y caminatas guiadas.",
    latitude: -21.2509,
    longitude: -63.5489,
    url: "#"
  },
  {
    id: "villa-montes-cueva-del-surubi",
    title: "La Cueva del Surubí",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Atractivo natural de Villa Montes asociado a formaciones, paisaje y recorridos de aventura.",
    latitude: -21.2863,
    longitude: -63.5317,
    url: "#"
  },
  {
    id: "villa-montes-mastil-cima-aguarague",
    title: "MASTIL (CIMA DEL AGUARAGUE)",
    city: "Villa Montes",
    type: "Mirador natural",
    summary: "Punto alto de la zona del Aguaragüe, recomendado para observación panorámica y fotografía del paisaje chaqueño.",
    latitude: -21.2429,
    longitude: -63.5464,
    url: "#"
  },
  {
    id: "villa-montes-agua-de-loro",
    title: "Agua de loro, Villa Montes",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Atractivo natural de Villa Montes recomendado para recorridos, descanso y contacto con el entorno chaqueño.",
    latitude: -21.2892,
    longitude: -63.5213,
    url: "#"
  },
  {
    id: "villa-montes-cantera-historica",
    title: "Cantera Histórica",
    city: "Villa Montes",
    type: "Historia",
    summary: "Sitio de interés histórico y referencial de Villa Montes, asociado a la memoria e identidad local.",
    latitude: -21.2684,
    longitude: -63.4757,
    url: "#"
  },
  {
    id: "villa-montes-fun-park-eb",
    title: "FUN PARK E &B",
    city: "Villa Montes",
    type: "Recreación familiar",
    summary: "Espacio recreativo familiar de Villa Montes recomendado para entretenimiento, descanso y actividades con niños.",
    latitude: -21.2642,
    longitude: -63.4598,
    url: "#"
  },
  {
    id: "villa-montes-el-angosto-el-chorro",
    title: "El Angosto, El Chorro",
    city: "Villa Montes",
    type: "Naturaleza",
    summary: "Sector natural de El Angosto asociado a agua, paisaje y recorridos recreativos en Villa Montes.",
    latitude: -21.2438,
    longitude: -63.5538,
    url: "#"
  },
  {
    id: "villa-montes-rotonda-ferroviario",
    title: "Rotonda Ferroviario",
    city: "Villa Montes",
    type: "Referencia urbana",
    summary: "Punto urbano de referencia en Villa Montes, útil para recorridos, ubicación y orientación dentro de la ciudad.",
    latitude: -21.2604,
    longitude: -63.4661,
    url: "#"
  },
  {
    id: "villa-montes-plaza-bolivar",
    title: "Plaza Bolívar",
    city: "Villa Montes",
    type: "Plaza urbana",
    summary: "Espacio público de Villa Montes recomendado para descanso, paseo y convivencia urbana.",
    latitude: -21.2631,
    longitude: -63.4718,
    url: "#"
  },
  {
    id: "villa-montes-monumento-aviones-caidos",
    title: "Monumento a los Aviones caídos de la Guerra del Chaco",
    city: "Villa Montes",
    type: "Monumento histórico",
    summary: "Monumento histórico de Villa Montes vinculado a la memoria de la Guerra del Chaco y sus acontecimientos.",
    latitude: -21.2657,
    longitude: -63.4672,
    url: "#"
  },
  {
    id: "villa-montes-plaza-6-agosto",
    title: "Plaza 6 de Agosto",
    city: "Villa Montes",
    type: "Plaza urbana",
    summary: "Plaza urbana de Villa Montes recomendada para paseo, descanso y actividades comunitarias.",
    latitude: -21.2595,
    longitude: -63.4729,
    url: "#"
  },
  {
    id: "villa-montes-plaza-heroes-chaco",
    title: "Plaza Héroes del Chaco",
    city: "Villa Montes",
    type: "Plaza histórica",
    summary: "Espacio público de Villa Montes relacionado con la memoria chaqueña, paseo urbano y actividades locales.",
    latitude: -21.2578,
    longitude: -63.4668,
    url: "#"
  },
  {
    id: "villa-montes-cascada-los-monos",
    title: "Cascada de los Monos",
    city: "Villa Montes",
    type: "Cascada",
    summary: "Atractivo natural de Villa Montes recomendado para turismo de naturaleza, fotografía y recorridos guiados.",
    latitude: -21.2878,
    longitude: -63.5441,
    url: "#"
  },
  {
    id: "villa-montes-plaza-el-chanar",
    title: "Plaza El Chañar",
    city: "Villa Montes",
    type: "Plaza urbana",
    summary: "Plaza de Villa Montes recomendada para descanso, recreación y convivencia barrial.",
    latitude: -21.2706,
    longitude: -63.4637,
    url: "#"
  },
  {
    id: "villa-montes-edu-mango",
    title: "Edu Mango",
    city: "Villa Montes",
    type: "Gastronomía local",
    summary: "Punto gastronómico o recreativo local de Villa Montes, recomendado como referencia para visitantes.",
    latitude: -21.2566,
    longitude: -63.4614,
    url: "#"
  },
  {
    id: "villa-montes-plaza-boqueron",
    title: "Plaza Boquerón",
    city: "Villa Montes",
    type: "Plaza urbana",
    summary: "Espacio público de Villa Montes recomendado para descanso, recreación y paseo urbano.",
    latitude: -21.2729,
    longitude: -63.4576,
    url: "#"
  },
  {
    id: "villa-montes-plaza-san-francisco-solano",
    title: "Plaza San Francisco Solano",
    city: "Villa Montes",
    type: "Plaza urbana",
    summary: "Plaza urbana de Villa Montes asociada a actividades comunitarias, descanso y paseo familiar.",
    latitude: -21.2551,
    longitude: -63.4742,
    url: "#"
  },
  {
    id: "villa-montes-mirador-antiguo",
    title: "Mirador antiguo",
    city: "Villa Montes",
    type: "Mirador",
    summary: "Punto de observación tradicional de Villa Montes, recomendado para vistas urbanas y fotografía.",
    latitude: -21.2519,
    longitude: -63.4826,
    url: "#"
  },
  {
    id: "villa-montes-hoterma-mirador",
    title: "HOTERMA MIRADOR",
    city: "Villa Montes",
    type: "Relajación natural",
    summary: "Atractivo asociado a descanso, aguas termales o mirador turístico en Villa Montes.",
    latitude: -21.2467,
    longitude: -63.5251,
    url: "#"
  },
  {
    id: "villa-montes-mirador-pena-colorada",
    title: "Mirador peña colorada",
    city: "Villa Montes",
    type: "Mirador natural",
    summary: "Mirador natural recomendado para observar el paisaje de Peña Colorada y el entorno chaqueño.",
    latitude: -21.2538,
    longitude: -63.5159,
    url: "#"
  },
  {
    id: "villa-montes-parque-infantil-boqueron",
    title: "Parque infantil Boquerón",
    city: "Villa Montes",
    type: "Recreación familiar",
    summary: "Parque infantil de Villa Montes recomendado para familias, niños y actividades recreativas.",
    latitude: -21.2741,
    longitude: -63.4592,
    url: "#"
  },
  {
    id: "carapari-plaza-principal",
    title: "Plaza Principal de Caraparí",
    city: "Caraparí",
    type: "Plaza principal",
    summary: "Lugar central del municipio, ideal para iniciar una visita y conocer el ambiente local.",
    latitude: -21.8341,
    longitude: -63.7484,
    url: "#"
  },
  {
    id: "carapari-mercado-local",
    title: "Mercado local de Caraparí",
    city: "Caraparí",
    type: "Cultura local",
    summary: "Punto urbano donde se aprecia el comercio local, productos de la zona y vida cotidiana del municipio.",
    latitude: -21.8351,
    longitude: -63.7496,
    url: "#"
  },
  {
    id: "carapari-iglesia-central",
    title: "Capilla San José de Caraparí",
    city: "Caraparí",
    type: "Iglesia",
    summary: "Capilla tradicional de Caraparí, ubicada cerca del centro urbano y vinculada a la vida religiosa y cultural del municipio.",
    latitude: -21.8335,
    longitude: -63.748,
    url: "#"
  },
  {
    id: "carapari-parque-urbano",
    title: "Parque Infantil de Caraparí",
    city: "Caraparí",
    type: "Recreación",
    summary: "Espacio recreativo familiar de Caraparí, ideal para descansar, caminar y disfrutar del ambiente urbano del municipio.",
    latitude: -21.8328,
    longitude: -63.7463,
    url: "#"
  },
  {
    id: "carapari-quebrada-el-comun",
    title: "Complejo turístico Quebrada El Común",
    city: "Caraparí",
    type: "Naturaleza",
    summary: "Atractivo natural recomendado para visitar en familia y disfrutar paisajes de quebrada.",
    latitude: -21.7818,
    longitude: -63.7925,
    url: "#"
  },
  {
    id: "carapari-aguas-blancas",
    title: "Comunidad Aguas Blancas",
    city: "Caraparí",
    type: "Turismo comunitario",
    summary: "Comunidad vinculada al turismo local, paisajes naturales y experiencias rurales del Chaco.",
    latitude: -21.7594,
    longitude: -63.831,
    url: "#"
  },
  {
    id: "carapari-bereti-chaco",
    title: "Comunidad Bereti Chaco",
    city: "Caraparí",
    type: "Turismo comunitario",
    summary: "Zona rural recomendada para conocer el entorno chaqueño y actividades comunitarias.",
    latitude: -21.6102,
    longitude: -63.8078,
    url: "#"
  },
  {
    id: "carapari-laguna-berety",
    title: "Laguna de Berety",
    city: "Caraparí",
    type: "Naturaleza",
    summary: "Espacio natural asociado a paisaje, descanso y recorridos rurales dentro del municipio.",
    latitude: -21.5967,
    longitude: -63.8098,
    url: "#"
  },
  {
    id: "carapari-timboy-tiguazu",
    title: "Aguas Termales Timboy Tiguazú",
    city: "Caraparí",
    type: "Relajación natural",
    summary: "Zona de aguas termales ubicada en el entorno del Aguaragüe, recomendada para turismo natural.",
    latitude: -21.7145,
    longitude: -63.6779,
    url: "#"
  },
  {
    id: "carapari-iniguazu",
    title: "Iñiguazú",
    city: "Caraparí",
    type: "Naturaleza",
    summary: "Área natural para caminatas, descanso y contacto con flora característica del Chaco.",
    latitude: -21.5346,
    longitude: -63.7808,
    url: "#"
  },
  {
    id: "carapari-mirador",
    title: "Mirador de Caraparí",
    city: "Caraparí",
    type: "Mirador",
    summary: "Punto panorámico de Caraparí recomendado para observar el paisaje urbano, las serranías cercanas y tomar fotografías.",
    latitude: -21.8342,
    longitude: -63.7486,
    url: "#"
  },
  {
    id: "carapari-canaveral",
    title: "Cañaveral",
    city: "Caraparí",
    type: "Naturaleza",
    summary: "Zona natural de Caraparí asociada a vegetación local, recorridos tranquilos y paisajes característicos del municipio.",
    latitude: -21.8342,
    longitude: -63.7486,
    url: "#"
  },
  {
    id: "carapari-piscicola-san-juan",
    title: "PISCICOLA San Juan",
    city: "Caraparí",
    type: "Piscina recreativa",
    summary: "Espacio recreativo con piscina, recomendado para descanso familiar, actividades de esparcimiento y visitas de fin de semana.",
    latitude: -21.8342,
    longitude: -63.7486,
    url: "#"
  },
  {
    id: "carapari-paseo-de-los-sauces",
    title: "Paseo de los Sauces",
    city: "Caraparí",
    type: "Parque para caminar",
    summary: "Espacio urbano de paseo en Caraparí, ideal para caminar, descansar y disfrutar de un ambiente tranquilo.",
    latitude: -21.8342,
    longitude: -63.7486,
    url: "#"
  },
  {
    id: "carapari-parque-carapari",
    title: "Parque Caraparí",
    city: "Caraparí",
    type: "Parque urbano",
    summary: "Parque urbano de Caraparí recomendado para recreación, descanso y actividades familiares dentro del municipio.",
    latitude: -21.8342,
    longitude: -63.7486,
    url: "#"
  },
  {
    id: "carapari-serrania-aguarague",
    title: "Serranía del Aguaragüe - Sector Caraparí",
    city: "Caraparí",
    type: "Naturaleza",
    summary: "Área natural representativa del Chaco tarijeño, con valor ecológico, paisajístico y turístico.",
    latitude: -21.692,
    longitude: -63.6505,
    url: "#"
  },
  {
    id: "aguarague-parque-nacional",
    title: "Parque Nacional y ANMI Aguaragüe",
    city: "Ruta del Aguaragüe",
    type: "Área protegida",
    summary: "Área natural protegida del Gran Chaco, compartida por Villa Montes, Yacuiba y Caraparí.",
    latitude: -21.508,
    longitude: -63.579,
    url: "#"
  },
  {
    id: "aguarague-mirador-serrania",
    title: "Mirador de la Serranía del Aguaragüe",
    city: "Ruta del Aguaragüe",
    type: "Mirador natural",
    summary: "Punto de observación recomendado para apreciar el paisaje del Chaco serrano.",
    latitude: -21.5052,
    longitude: -63.5849,
    url: "#"
  },
  {
    id: "aguarague-caidas-agua",
    title: "Caídas de agua del Aguaragüe",
    city: "Ruta del Aguaragüe",
    type: "Naturaleza",
    summary: "Sector natural vinculado a la Ruta Turística del Aguaragüe, ideal para recorridos ecológicos.",
    latitude: -21.4987,
    longitude: -63.5887,
    url: "#"
  },
  {
    id: "aguarague-sendero-natural",
    title: "Sendero natural del Aguaragüe",
    city: "Ruta del Aguaragüe",
    type: "Senderismo",
    summary: "Recorrido sugerido para caminatas, observación de vegetación y contacto con el paisaje chaqueño.",
    latitude: -21.5128,
    longitude: -63.5924,
    url: "#"
  },
  {
    id: "gran-chaco-itavicua",
    title: "Itavicua",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Zona natural del Gran Chaco asociada a paisajes rurales, descanso y recorridos al aire libre.",
    latitude: -21.9835,
    longitude: -63.6328,
    url: "#"
  },
  {
    id: "gran-chaco-mirador-de-la-cruz",
    title: "Mirador de la Cruz",
    city: "Gran Chaco",
    type: "Mirador",
    summary: "Punto panorámico del Gran Chaco recomendado para observar el paisaje y tomar fotografías.",
    latitude: -21.9,
    longitude: -63.65,
    url: "#"
  },
  {
    id: "gran-chaco-aguayrenda",
    title: "Aguayrenda",
    city: "Gran Chaco",
    type: "Turismo comunitario",
    summary: "Zona rural del Gran Chaco vinculada a recorridos comunitarios, naturaleza y paisaje chaqueño.",
    latitude: -21.95,
    longitude: -63.62,
    url: "#"
  },
  {
    id: "gran-chaco-represa-itavicua",
    title: "Represa de Itavicua",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Atractivo natural asociado al agua, paisaje y recorridos de descanso en la zona de Itavicua.",
    latitude: -21.98,
    longitude: -63.635,
    url: "#"
  },
  {
    id: "gran-chaco-represa-la-tipa",
    title: "Represa \"La Tipa\"",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Represa del Gran Chaco recomendada para visitas recreativas, paisaje y recorridos al aire libre.",
    latitude: -21.97,
    longitude: -63.64,
    url: "#"
  },
  {
    id: "gran-chaco-el-palmar",
    title: "El Palmar",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Atractivo natural del Gran Chaco asociado a vegetación regional, paisajes chaqueños y descanso fuera del centro urbano.",
    latitude: -21.9907,
    longitude: -63.6435,
    url: "#"
  },
  {
    id: "gran-chaco-berety-chaco",
    title: "Berety Chaco",
    city: "Gran Chaco",
    type: "Turismo comunitario",
    summary: "Comunidad y zona rural del Gran Chaco recomendada para conocer paisajes, cultura local y espacios naturales.",
    latitude: -21.6102,
    longitude: -63.8078,
    url: "#"
  },
  {
    id: "gran-chaco-timboy-chaco",
    title: "Timboy Chaco",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Zona natural del Gran Chaco asociada a recorridos rurales, paisaje y turismo de descanso.",
    latitude: -21.7145,
    longitude: -63.6779,
    url: "#"
  },
  {
    id: "gran-chaco-mirador-cruz-aguayrenda",
    title: "Mirador de la Cruz - Aguayrenda",
    city: "Gran Chaco",
    type: "Mirador",
    summary: "Mirador ubicado en la zona de Aguayrenda, recomendado para observar el paisaje chaqueño y realizar recorridos fotográficos.",
    latitude: -21.95,
    longitude: -63.62,
    url: "#"
  },
  {
    id: "gran-chaco-parque-nacional-aguarague",
    title: "Parque Nacional Aguaragüe",
    city: "Gran Chaco",
    type: "Área protegida",
    summary: "Área protegida representativa del Gran Chaco, importante por su valor ecológico, paisajístico y turístico.",
    latitude: -21.508,
    longitude: -63.579,
    url: "#"
  },
  {
    id: "gran-chaco-serrania-aguarague",
    title: "Serranía de Aguaragüe",
    city: "Gran Chaco",
    type: "Naturaleza",
    summary: "Serranía representativa del Gran Chaco, recomendada para observación del paisaje, senderismo y turismo ecológico.",
    latitude: -21.508,
    longitude: -63.579,
    url: "#"
  },
  {
    id: "gran-chaco-dorbigny",
    title: "D'Orbigny",
    city: "Gran Chaco",
    type: "Referencia natural",
    summary: "Punto referencial del Gran Chaco asociado a recorridos rurales, naturaleza y paisaje chaqueño.",
    latitude: -21.8,
    longitude: -63.7,
    url: "#"
  },
  {
    id: "gran-chaco-hito-frontera-paraguay-bolivia",
    title: "HITO FRONTERA PARAGUAY & BOLIVIA",
    city: "Gran Chaco",
    type: "Punto fronterizo",
    summary: "Punto fronterizo referencial entre Paraguay y Bolivia, importante por su valor geográfico y territorial.",
    latitude: -21,
    longitude: -62.8,
    url: "#"
  },
  {
    id: "gran-chaco-reserva-cabo-juan",
    title: "Reserva de Vida Silvestre de Cabo Juan",
    city: "Gran Chaco",
    type: "Reserva natural",
    summary: "Reserva de vida silvestre del Gran Chaco, recomendada para turismo ecológico, observación de naturaleza y conservación ambiental.",
    latitude: -21.2,
    longitude: -63,
    url: "#"
  }
];

const fallbackPlaces = [
  {
    title: "Centro urbano chaqueño",
    type: "Zona turística",
    summary: "Punto ideal para iniciar el recorrido, tomar fotografías y conocer la vida local del Gran Chaco.",
    distance: 900,
    url: "#",
    latOffset: 0.006,
    lonOffset: 0.004
  },
  {
    title: "Mirador natural del Chaco",
    type: "Mirador",
    summary: "Lugar recomendado para observar el paisaje chaqueño y planificar una visita al atardecer.",
    distance: 1800,
    url: "#",
    latOffset: -0.008,
    lonOffset: 0.006
  },
  {
    title: "Espacio cultural local",
    type: "Cultura",
    summary: "Lugar sugerido para conocer historia, costumbres y tradiciones del Gran Chaco.",
    distance: 2400,
    url: "#",
    latOffset: 0.004,
    lonOffset: -0.008
  }
];

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return response.json();
}

function buildUrl(baseUrl, params) {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

function calculateDistanceMeters(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371000;
  const toRadians = (value) => (value * Math.PI) / 180;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

function calculateDistanceKm(distanceMeters) {
  if (!Number.isFinite(distanceMeters)) return "Cerca";
  if (distanceMeters < 1000) return `${Math.round(distanceMeters)} m`;
  return `${(distanceMeters / 1000).toFixed(1)} km`;
}

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getWeatherInfo(code) {
  return weatherCodes[code] || { label: "Clima variable", icon: "🌍" };
}

function calculateTravelScore(current, daily) {
  let score = 100;

  const temp = current.temperature_2m;
  const wind = current.wind_speed_10m;
  const rain = daily.precipitation_probability_max?.[0] ?? 0;

  if (temp < 8 || temp > 34) score -= 24;
  else if (temp < 14 || temp > 29) score -= 12;

  if (wind > 35) score -= 18;
  else if (wind > 22) score -= 8;

  if (rain > 70) score -= 24;
  else if (rain > 40) score -= 12;

  return Math.max(35, Math.min(100, Math.round(score)));
}

function getTravelAdvice(score, code) {
  const weather = getWeatherInfo(code).label.toLowerCase();

  if (score >= 82) return "Excelente para caminar";
  if (score >= 65) return weather.includes("lluv") ? "Lleva paraguas" : "Buen día para explorar";

  return "Planifica interiores";
}

function getLocalCityMatches(query) {
  const cleanQuery = normalizeText(query);

  if (!cleanQuery) return chacoCities;

  const matches = chacoCities.filter((city) => {
    const cityName = normalizeText(city.name);
    const displayName = normalizeText(city.displayName);
    const aliases = city.aliases.map(normalizeText);

    return (
      cityName.includes(cleanQuery) ||
      displayName.includes(cleanQuery) ||
      aliases.some((alias) => alias.includes(cleanQuery) || cleanQuery.includes(alias))
    );
  });

  return matches.length ? matches : chacoCities;
}

function getNearestChacoCity(latitude, longitude) {
  const citiesWithDistance = chacoCities.map((city) => ({
    ...city,
    distance: calculateDistanceMeters(latitude, longitude, city.latitude, city.longitude)
  }));

  return citiesWithDistance.sort((a, b) => a.distance - b.distance)[0];
}

export function detectNearestCity(latitude, longitude) {
  return getNearestChacoCity(Number(latitude), Number(longitude));
}

function getRecommendedPlacesForCity(cityName) {
  const cleanCityName = normalizeText(cityName);

  if (cleanCityName.includes("gran chaco")) {
    return chacoPlaces;
  }

  if (cleanCityName.includes("aguarague")) {
    return chacoPlaces.filter((place) => {
      const cleanPlaceCity = normalizeText(place.city);
      return cleanPlaceCity.includes("aguarague") || cleanPlaceCity.includes("villa montes");
    });
  }

  return chacoPlaces.filter((place) => {
    const cleanPlaceCity = normalizeText(place.city);
    return cleanPlaceCity === cleanCityName || cleanPlaceCity.includes(cleanCityName) || cleanPlaceCity === "gran chaco";
  });
}

function getCityTravelInfo(city) {
  const cleanCity = normalizeText(city);

  if (cleanCity.includes("yacuiba")) {
    return {
      howToGet: "Desde el centro de Yacuiba puedes llegar en taxi, mototaxi o movilidad urbana. Para lugares fuera del centro se recomienda taxi contratado o movilidad particular.",
      transport: "Taxi urbano, mototaxi, trufi local o movilidad particular.",
      transportCost: "Costo referencial: Bs 5 a Bs 15 dentro de la ciudad. Hacia zonas naturales puede variar entre Bs 20 y Bs 50.",
      lodging: [
        {
          name: "Hospedaje urbano en Yacuiba",
          description: "Opción recomendada para visitantes que quieren estar cerca de restaurantes, comercios y transporte.",
          cost: "Bs 80 a Bs 180 por noche"
        },
        {
          name: "Alojamiento familiar o residencial",
          description: "Alternativa económica para viajes cortos o visitas de paso.",
          cost: "Bs 60 a Bs 120 por noche"
        }
      ]
    };
  }

  if (cleanCity.includes("villa montes")) {
    return {
      howToGet: "Desde Yacuiba o Caraparí se puede llegar por carretera hacia Villa Montes. Dentro del municipio se puede usar taxi local o transporte contratado para llegar a puntos naturales.",
      transport: "Bus intermunicipal, taxi local, trufi o movilidad particular.",
      transportCost: "Costo referencial: Bs 20 a Bs 45 entre municipios. Dentro de la ciudad puede variar entre Bs 5 y Bs 20.",
      lodging: [
        {
          name: "Hotel urbano en Villa Montes",
          description: "Buena opción para visitar el Río Pilcomayo, el centro urbano y atractivos cercanos.",
          cost: "Bs 90 a Bs 220 por noche"
        },
        {
          name: "Residencial o alojamiento básico",
          description: "Alternativa económica para estudiantes, viajeros y grupos pequeños.",
          cost: "Bs 70 a Bs 140 por noche"
        }
      ]
    };
  }

  if (cleanCity.includes("carapari")) {
    return {
      howToGet: "Desde Yacuiba o Villa Montes se puede tomar transporte hacia Caraparí. Para atractivos naturales o comunidades rurales se recomienda coordinar taxi, transporte local o movilidad particular.",
      transport: "Bus intermunicipal, taxi compartido, trufi o movilidad contratada.",
      transportCost: "Costo referencial: Bs 15 a Bs 40 entre municipios. Hacia comunidades o zonas naturales puede variar entre Bs 30 y Bs 80.",
      lodging: [
        {
          name: "Hospedaje local en Caraparí",
          description: "Opción práctica para visitar aguas termales, quebradas y comunidades cercanas.",
          cost: "Bs 70 a Bs 160 por noche"
        },
        {
          name: "Alojamiento familiar o comunitario",
          description: "Puede estar disponible según la zona. Conviene consultar antes de viajar.",
          cost: "Bs 50 a Bs 120 por noche"
        }
      ]
    };
  }

  return {
    howToGet: "Para llegar a este punto se recomienda coordinar transporte desde Yacuiba, Villa Montes o Caraparí, según el punto de partida.",
    transport: "Transporte intermunicipal, taxi contratado o movilidad particular.",
    transportCost: "Costo referencial: Bs 20 a Bs 80 dependiendo de la distancia.",
    lodging: [
      {
        name: "Hospedaje en municipio cercano",
        description: "Se recomienda hospedarse en Yacuiba, Villa Montes o Caraparí según la ruta elegida.",
        cost: "Bs 70 a Bs 200 por noche"
      }
    ]
  };
}

function buildPlaceDetail(place) {
  const travelInfo = getCityTravelInfo(place.city);

  const mapsQuery = encodeURIComponent(
    `${place.title}, ${place.city}, Gran Chaco, Tarija, Bolivia`
  );

  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return {
    fullDescription: `${place.summary} Este punto forma parte de la propuesta turística local de Chaco Explorer, enfocada en mostrar atractivos urbanos, culturales, históricos y naturales del Gran Chaco tarijeño.`,
    images: [
      `assets/places/${place.id}-1.jpg`,
      `assets/places/${place.id}-2.jpg`,
      `assets/places/${place.id}-3.jpg`
    ],
    howToGet: travelInfo.howToGet,
    transport: travelInfo.transport,
    transportCost: travelInfo.transportCost,
    lodging: travelInfo.lodging,
    routeUrl,
    mapUrl,
    estimatedVisit: place.type?.toLowerCase().includes("naturaleza") || place.type?.toLowerCase().includes("ruta")
      ? "Tiempo recomendado: medio día o jornada completa."
      : "Tiempo recomendado: 30 minutos a 2 horas.",
    recommendations: [
      "Llevar agua, gorra o sombrero y protector solar.",
      "Consultar el clima antes de salir.",
      "Confirmar costos y disponibilidad antes del viaje.",
      "Respetar el entorno natural, cultural y comunitario."
    ],
    note: "Los costos son referenciales para fines académicos y pueden variar según temporada, horario y disponibilidad."
  };
}

function enrichPlace(place) {
  const detail = buildPlaceDetail(place);

  return {
    ...place,
    ...detail,
    image: detail.images[0] || null
  };
}

function getLocalPlaces(latitude, longitude, radius) {
  const nearestCity = getNearestChacoCity(latitude, longitude);
  const recommendedPlaces = getRecommendedPlacesForCity(nearestCity.name);

  const placesWithDistance = recommendedPlaces
    .map((place) => {
      const distance = calculateDistanceMeters(latitude, longitude, place.latitude, place.longitude);

      return enrichPlace({
        ...place,
        distance,
        distanceText: calculateDistanceKm(distance)
      });
    })
    .sort((a, b) => a.distance - b.distance);

  const placesInsideRadius = placesWithDistance.filter((place) => place.distance <= Number(radius));

  return placesInsideRadius.slice(0, 100);
}

export async function searchCities(query) {
  return getLocalCityMatches(query).slice(0, 6);
}

export async function getWeather(latitude, longitude) {
  const url = buildUrl(OPEN_METEO_FORECAST_URL, {
    latitude,
    longitude,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: 5
  });

  const data = await getJSON(url);
  const info = getWeatherInfo(data.current.weather_code);
  const score = calculateTravelScore(data.current, data.daily);

  return {
    ...data,
    currentInfo: info,
    travelScore: score,
    advice: getTravelAdvice(score, data.current.weather_code)
  };
}

export async function getNearbyPlaces(latitude, longitude, radius = 7000) {
  return getLocalPlaces(latitude, longitude, Number(radius));
}

export function getAllChacoPlaces() {
  return chacoPlaces.map((place) => enrichPlace({
    ...place,
    distanceText: place.city
  }));
}

export function getChacoPlaceById(id) {
  const place = chacoPlaces.find((item) => String(item.id) === String(id));

  if (!place) return null;

  return enrichPlace({
    ...place,
    distanceText: place.city
  });
}
