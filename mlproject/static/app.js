/* ==========================================================================
   WILDAI FRONTEND APPLICATION LOGIC
   ========================================================================== */

// Client-side Database of Animal Facts (synced from animal_db.py for search/quick view)
const ANIMAL_CLASSES_DATA = {
    'Antelope': { scientific: 'Antilocapra americana', habitat: 'Grasslands, Savannahs', diet: 'Herbivore', status: 'Least Concern', description: 'Antelopes are fast-running mammals with hollow horns. They are known for their graceful movement and agility in escaping predators on the open plains.' },
    'Bear': { scientific: 'Ursidae', habitat: 'Forests, Tundra, Mountains', diet: 'Omnivore', status: 'Vulnerable', description: 'Bears are large, powerful mammals with thick fur and strong claws. While mostly omnivorous, their diets vary from exclusively bamboo (panda) to mostly meat (polar bear).' },
    'Beaver': { scientific: 'Castor canadensis', habitat: 'Rivers, Lakes, Wetlands', diet: 'Herbivore', status: 'Least Concern', description: 'Beavers are semi-aquatic rodents famous for building dams, canals, and lodges. Their engineering work creates rich wetland habitats for other species.' },
    'Bee': { scientific: 'Anthophila', habitat: 'Meadows, Forests, Gardens', diet: 'Herbivore', status: 'Threatened', description: 'Bees are flying insects known for their role in pollination and, in the case of the honeybee, for producing honey and beeswax. They are crucial for biodiversity.' },
    'Bison': { scientific: 'Bison bison', habitat: 'Plains, Grasslands', diet: 'Herbivore', status: 'Near Threatened', description: 'Bison are massive, shaggy-haired herbivores native to North America and Europe. They are iconic symbols of the Great Plains, traveling in large protective herds.' },
    'Blackbird': { scientific: 'Turdus merula', habitat: 'Woodlands, Gardens, Parks', diet: 'Omnivore', status: 'Least Concern', description: 'The common blackbird is a species of true thrush. Males have jet-black plumage and bright yellow-orange eye rings and bills, and they sing a beautiful melodic song.' },
    'Buffalo': { scientific: 'Syncerus caffer', habitat: 'Savannahs, Swamps, Grasslands', diet: 'Herbivore', status: 'Near Threatened', description: 'African buffalos are large, formidable bovines with unique fused horns forming a continuous bone shield. They are highly protective and resilient predators.' },
    'Butterfly': { scientific: 'Lepidoptera', habitat: 'Fields, Meadows, Rainforests', diet: 'Herbivore', status: 'Least Concern', description: 'Butterflies are insects with large, often brightly colored wings and a conspicuous fluttering flight. They undergo complete metamorphosis from caterpillar to butterfly.' },
    'Camel': { scientific: 'Camelus', habitat: 'Deserts, Arid Grasslands', diet: 'Herbivore', status: 'Least Concern', description: 'Camels are humped even-toed ungulates adapted to harsh desert life. Their humps store fat, not water, allowing them to travel long distances without nourishment.' },
    'Cat': { scientific: 'Felis catus', habitat: 'Domestic, Urban', diet: 'Carnivore', status: 'Domesticated', description: 'Cats are small, agile carnivorous mammals that have been domesticated for thousands of years. They are known for their hunting abilities, independence, and companionship.' },
    'Cheetah': { scientific: 'Acinonyx jubatus', habitat: 'Savannahs, Dry Forests', diet: 'Carnivore', status: 'Vulnerable', description: 'The cheetah is the fastest land animal, capable of accelerating from 0 to 60 mph in under three seconds. They have characteristic black "tear tracks" on their faces.' },
    'Chimpanzee': { scientific: 'Pan troglodytes', habitat: 'Rainforests, Wet Savannahs', diet: 'Omnivore', status: 'Endangered', description: 'Chimpanzees are highly intelligent great apes that share 98% of their DNA with humans. They live in complex social groups and are skilled at using tools.' },
    'Chinchilla': { scientific: 'Chinchilla lanigera', habitat: 'Andes Mountains', diet: 'Herbivore', status: 'Endangered', description: 'Chinchillas are small crepuscular rodents native to the Andes. They are famous for having the densest fur of any land mammal, which protects them in freezing climates.' },
    'Cow': { scientific: 'Bos taurus', habitat: 'Farms, Pastures', diet: 'Herbivore', status: 'Domesticated', description: 'Cows are large domesticated bovid ungulates raised for dairy, meat, and leather. They are ruminants, meaning their stomachs have four compartments to digest grass.' },
    'Crab': { scientific: 'Brachyura', habitat: 'Oceans, Beaches, Estuaries', diet: 'Omnivore', status: 'Least Concern', description: 'Crabs are decapod crustaceans with short tails and a thick exoskeleton. They are armed with a single pair of claws and typically move sideways.' },
    'Crocodile': { scientific: 'Crocodylidae', habitat: 'Swamps, Estuaries, Rivers', diet: 'Carnivore', status: 'Vulnerable', description: 'Crocodiles are large, semi-aquatic predatory reptiles that have existed since the age of dinosaurs. They have a powerful bite and hunt by stealth in water.' },
    'Deer': { scientific: 'Cervidae', habitat: 'Forests, Grasslands, Wetlands', diet: 'Herbivore', status: 'Least Concern', description: 'Deer are hoofed ruminant mammals known for their agility and grace. Except for the Chinese water deer, males grow and shed antlers annually.' },
    'Dog': { scientific: 'Canis lupus familiaris', habitat: 'Domestic, Global', diet: 'Omnivore', status: 'Domesticated', description: 'Dogs were the first animals to be domesticated by humans. Descended from wolves, they have evolved into hundreds of breeds and are known for their loyalty.' },
    'Dolphin': { scientific: 'Delphinidae', habitat: 'Oceans, Coastal Bays', diet: 'Carnivore', status: 'Least Concern', description: 'Dolphins are highly intelligent aquatic mammals that use echolocation to navigate and hunt. They live in social groups called pods and display playful behavior.' },
    'Donkey': { scientific: 'Equus asinus', habitat: 'Pastures, Farms, Semi-Arid', diet: 'Herbivore', status: 'Domesticated', description: 'Donkeys are domesticated members of the horse family. Renowned for their stamina and resilience, they are widely used as pack animals in rural communities worldwide.' },
    'Duck': { scientific: 'Anatidae', habitat: 'Ponds, Lakes, Wetlands', diet: 'Omnivore', status: 'Least Concern', description: 'Ducks are waterbirds with broad, flat bills, waterproof feathers, and webbed feet. They feed on aquatic plants, fish, insects, and small crustaceans.' },
    'Eagle': { scientific: 'Accipitridae', habitat: 'Mountains, Forests, Coasts', diet: 'Carnivore', status: 'Least Concern', description: 'Eagles are large, powerfully built birds of prey. They have massive hooked beaks, strong talons, and exceptionally keen eyesight to spot prey from great heights.' },
    'Elephant': { scientific: 'Elephantidae', habitat: 'Savannahs, Rainforests', diet: 'Herbivore', status: 'Endangered', description: 'Elephants are the largest living land animals. They are characterized by their long trunks, tusks, and large ear flaps, displaying high intelligence and empathy.' },
    'Falcon': { scientific: 'Falco', habitat: 'Cliffs, Grasslands, Cities', diet: 'Carnivore', status: 'Least Concern', description: 'Falcons are high-speed raptors with thin, tapered wings. The peregrine falcon is the fastest creature on Earth, reaching diving speeds over 200 mph.' },
    'Ferret': { scientific: 'Mustela putorius furo', habitat: 'Domestic', diet: 'Carnivore', status: 'Domesticated', description: 'Ferrets are small, elongated domesticated mustelids. They are energetic, curious, and sleep up to 18 hours a day, making them popular household pets.' },
    'Flamingo': { scientific: 'Phoenicopterus', habitat: 'Saline Lakes, Lagoons', diet: 'Omnivore', status: 'Least Concern', description: 'Flamingos are famous pink wading birds with long, thin legs and curved bills. Their pink coloration comes from pigments in the shrimp and algae they eat.' },
    'Fox': { scientific: 'Vulpes vulpes', habitat: 'Forests, Grasslands, Cities', diet: 'Omnivore', status: 'Least Concern', description: 'Foxes are small-to-medium-sized omnivorous mammals belonging to the canine family. They are highly adaptable and display clever hunting and survival behaviors.' },
    'Frog': { scientific: 'Anura', habitat: 'Rainforests, Ponds, Swamps', diet: 'Carnivore', status: 'Vulnerable', description: 'Frogs are tailless amphibians known for their jumping ability, webbed toes, and croaking sounds. They absorb water and oxygen directly through their moist skin.' },
    'Giraffe': { scientific: 'Giraffa camelopardalis', habitat: 'Savannahs, Open Woodlands', diet: 'Herbivore', status: 'Vulnerable', description: 'Giraffes are the tallest terrestrial animals. Their long necks enable them to feed on high tree leaves, especially acacia, using their prehensile blue tongues.' },
    'Goat': { scientific: 'Capra hircus', habitat: 'Mountains, Farms', diet: 'Herbivore', status: 'Domesticated', description: 'Goats are hardy, agile herbivores that were among the first animals to be domesticated. They are excellent climbers, capable of scaling steep rocky terrain.' },
    'Goose': { scientific: 'Anserini', habitat: 'Wetlands, Fields, Lakes', diet: 'Herbivore', status: 'Least Concern', description: 'Geese are medium-to-large waterfowl related to ducks and swans. They migrate in eye-catching V-formations and are known for their territorial honking.' },
    'Gorilla': { scientific: 'Gorilla gorilla', habitat: 'Tropical Rainforests', diet: 'Herbivore', status: 'Critically Endangered', description: 'Gorillas are the largest living primates, native to the forests of central Africa. Led by a dominant silverback, they live in highly cohesive, gentle family groups.' },
    'Grasshopper': { scientific: 'Caelifera', habitat: 'Fields, Meadows, Gardens', diet: 'Herbivore', status: 'Least Concern', description: 'Grasshoppers are plant-eating insects with powerful hind legs modified for leaping. Some species can group into massive swarms (locusts), consuming crops.' },
    'Hawk': { scientific: 'Accipitrinae', habitat: 'Forests, Grasslands', diet: 'Carnivore', status: 'Least Concern', description: 'Hawks are medium-sized birds of prey known for their sharp eyesight and swift aerial maneuvers. They hunt small mammals, reptiles, and other birds.' },
    'Hedgehog': { scientific: 'Erinaceinae', habitat: 'Woodlands, Gardens', diet: 'Omnivore', status: 'Least Concern', description: 'Hedgehogs are small, nocturnal insectivorous mammals covered in stiff, protective spines. When threatened, they roll into a tight, prickly ball.' },
    'Hippopotamus': { scientific: 'Hippopotamus amphibius', habitat: 'Rivers, Lakes, Swamps', diet: 'Herbivore', status: 'Vulnerable', description: 'Hippos are massive, semi-aquatic mammals native to Sub-Saharan Africa. Despite their bulky size, they can run fast and are highly protective of their territory.' },
    'Hyena': { scientific: 'Hyaenidae', habitat: 'Savannahs, Grasslands', diet: 'Carnivore', status: 'Least Concern', description: 'Hyenas are unique feliform carnivores with extremely powerful jaws capable of crushing bone. Spotted hyenas live in matriarchal clans and hunt in packs.' },
    'Iguana': { scientific: 'Iguana iguana', habitat: 'Rainforests, Coastal Canopies', diet: 'Herbivore', status: 'Least Concern', description: 'Iguanas are large herbivorous lizards native to tropical areas of Central and South America. They are excellent swimmers and can drop from tall trees unharmed.' },
    'Jaguar': { scientific: 'Panthera onca', habitat: 'Rainforests, Swamps', diet: 'Carnivore', status: 'Near Threatened', description: 'The jaguar is the largest cat species in the Americas. Unlike most cats, they love water and are strong swimmers, possessing an exceptionally powerful bite.' },
    'Kangaroo': { scientific: 'Macropodidae', habitat: 'Grasslands, Forests', diet: 'Herbivore', status: 'Least Concern', description: 'Kangaroos are large marsupials native to Australia. They are the only large animals that hop to travel, and mothers raise their joey inside a stomach pouch.' },
    'Koala': { scientific: 'Phascolarctos cinereus', habitat: 'Eucalyptus Forests', diet: 'Herbivore', status: 'Vulnerable', description: 'Koalas are tree-dwelling marsupials native to Australia. They sleep up to 20 hours a day to conserve energy, eating exclusively toxic eucalyptus leaves.' },
    'Lemur': { scientific: 'Lemuriformes', habitat: 'Madagascar Forests', diet: 'Herbivore', status: 'Endangered', description: 'Lemurs are primitive primates native only to the island of Madagascar. They have long, bushy tails, reflective eyes, and are mostly active at night.' },
    'Leopard': { scientific: 'Panthera pardus', habitat: 'Forests, Savannahs', diet: 'Carnivore', status: 'Vulnerable', description: 'Leopards are elegant, powerful big cats known for their stealth and strength. They frequently haul heavy carcasses up into trees to keep them from scavengers.' },
    'Lizard': { scientific: 'Lacertilia', habitat: 'Global (except Polar)', diet: 'Omnivore', status: 'Least Concern', description: 'Lizards are a widespread group of squamate reptiles. They typically have feet, external ears, and movable eyelids, and many can shed their tails to escape predators.' },
    'Lynx': { scientific: 'Lynx', habitat: 'Boreal Forests, Tundra', diet: 'Carnivore', status: 'Least Concern', description: 'Lynx are medium-sized wild cats with distinctive black hair tufts on their ears, short tails, and large padded paws that act as natural snowshoes.' },
    'Mole': { scientific: 'Talpidae', habitat: 'Underground, Grasslands', diet: 'Insectivore', status: 'Least Concern', description: 'Moles are small mammals adapted to a subterranean lifestyle. They have cylindrical bodies, velvety fur, tiny eyes, and powerful forelimbs for digging tunnels.' },
    'Mongoose': { scientific: 'Herpestidae', habitat: 'Savannahs, Forests', diet: 'Omnivore', status: 'Least Concern', description: 'Mongooses are small, agile predators. They are famous for their speed and resistance to snake venom, which allows them to attack and eat cobras.' },
    'Ostrich': { scientific: 'Struthio camelus', habitat: 'Savannahs, Semi-Deserts', diet: 'Omnivore', status: 'Least Concern', description: 'Ostriches are the largest and heaviest living birds. They are flightless, but they can run at sustained speeds of 30 mph, kicking with immense force.' },
    'Otter': { scientific: 'Lutrinae', habitat: 'Rivers, Coastal Waters', diet: 'Carnivore', status: 'Least Concern', description: 'Otters are playful, semi-aquatic carnivorous mammals. They have webbed feet, dense waterproof fur, and use stones as tools to crack open shellfish.' },
    'Owl': { scientific: 'Strigiformes', habitat: 'Forests, Deserts, Tundra', diet: 'Carnivore', status: 'Least Concern', description: 'Owls are nocturnal birds of prey. They are characterized by flat faces, forward-facing eyes, exceptional hearing, and feathers designed for silent flight.' },
    'Panda': { scientific: 'Ailuropoda melanoleuca', habitat: 'Bamboo Mountain Forests', diet: 'Herbivore', status: 'Vulnerable', description: 'Giant pandas are bears native to south-central China. They have a distinctive black-and-white coat and feed almost exclusively on bamboo shoots and leaves.' },
    'Peacock': { scientific: 'Pavo cristatus', habitat: 'Woodlands, Farmlands', diet: 'Omnivore', status: 'Least Concern', description: 'Peacocks are the males of the peafowl species, famous for their train of iridescent tail feathers which they fan out in a spectacular courtship display.' },
    'Penguin': { scientific: 'Spheniscidae', habitat: 'Southern Oceans', diet: 'Carnivore', status: 'Least Concern', description: 'Penguins are flightless aquatic birds adapted to cold water. Their wings have evolved into stiff flippers, making them incredibly agile and fast swimmers.' },
    'Porcupine': { scientific: 'Erethizontidae', habitat: 'Forests, Hills, Deserts', diet: 'Herbivore', status: 'Least Concern', description: 'Porcupines are large rodents easily recognized by their coat of sharp, needle-like quills, which detaches easily to embed in attacking predators.' },
    'Raccoon': { scientific: 'Procyon lotor', habitat: 'Forests, Urban Areas', diet: 'Omnivore', status: 'Least Concern', description: 'Raccoons are highly intelligent nocturnal mammals. They are characterized by their black facial "mask" and ringed tail, and possess dextrous front paws.' },
    'Seal': { scientific: 'Pinnipedia', habitat: 'Polar Oceans, Coasts', diet: 'Carnivore', status: 'Least Concern', description: 'Seals are marine mammals with flippers. They spend most of their lives in water but haul out onto land or ice to breed, give birth, and molt.' },
    'Sheep': { scientific: 'Ovis aries', habitat: 'Pastures, Farms', diet: 'Herbivore', status: 'Domesticated', description: 'Sheep are multi-purpose domesticated ruminant mammals. Bred for wool, meat, and milk, they live in flocks and graze on grasses and clover.' },
    'Snail': { scientific: 'Gastropoda', habitat: 'Gardens, Damp Woodlands', diet: 'Herbivore', status: 'Least Concern', description: 'Snails are shelled mollusks that move slowly by muscular contractions of their foot, secreting mucus to glide smoothly over surfaces.' },
    'Snake': { scientific: 'Serpentes', habitat: 'Global (except Polar)', diet: 'Carnivore', status: 'Least Concern', description: 'Snakes are elongated, legless carnivorous reptiles. Many have venom glands used to subdue prey, while others compress their prey to kill.' },
    'Spider': { scientific: 'Araneae', habitat: 'Global (Diverse)', diet: 'Carnivore', status: 'Least Concern', description: 'Spiders are eight-legged arachnids that possess fangs capable of injecting venom. Many species spin complex silk webs to trap flying insects.' },
    'Squid': { scientific: 'Teuthida', habitat: 'Open Oceans, Deep Seas', diet: 'Carnivore', status: 'Least Concern', description: 'Squids are marine cephalopods with elongated bodies, large eyes, and eight arms and two tentacles. They swim rapidly using jet propulsion.' },
    'Walrus': { scientific: 'Odobenus rosmarus', habitat: 'Arctic Oceans, Ice Floes', diet: 'Carnivore', status: 'Vulnerable', description: 'Walruses are large, flippered marine mammals native to the Arctic. They are easily recognized by their prominent tusks, whiskers, and massive bulk.' },
    'Whale': { scientific: 'Cetacea', habitat: 'Deep Oceans', diet: 'Carnivore', status: 'Endangered', description: 'Whales are the largest mammals on Earth, breathing air through blowholes. Baleen whales filter tiny plankton, while toothed whales hunt fish and squid.' },
    'Wolf': { scientific: 'Canis lupus', habitat: 'Forests, Tundra, Grasslands', diet: 'Carnivore', status: 'Least Concern', description: 'Wolves are pack-hunting wild canines and the ancestors of domestic dogs. They are highly social, communicating through howls, posture, and scent.' }
};

// Global App State
const state = {
  currentTab: 'splash', // splash, home, scan, history, settings
  serverConnected: false,
  apiHost: 'http://localhost:8001',
  cameraStream: null,
  capturedImageBase64: null,
  history: [],
  preferences: {
    darkTheme: true,
    soundEffects: true
  }
};

// DOM elements cache
const DOM = {
  // Screens
  splashScreen: document.getElementById('splashScreen'),
  homeScreen: document.getElementById('homeScreen'),
  scanScreen: document.getElementById('scanScreen'),
  historyScreen: document.getElementById('historyScreen'),
  settingsScreen: document.getElementById('settingsScreen'),
  
  // Navigation
  navbar: document.getElementById('appNavbar'),
  navHome: document.getElementById('navHome'),
  navScan: document.getElementById('navScan'),
  navHistory: document.getElementById('navHistory'),
  navSettings: document.getElementById('navSettings'),
  btnGetStarted: document.getElementById('btnGetStarted'),
  heroScanBtn: document.getElementById('heroScanBtn'),
  heroScanCard: document.getElementById('heroScanCard'),
  viewAllHistoryLink: document.getElementById('viewAllHistoryLink'),
  
  // Top Elements
  statusBar: document.getElementById('statusBar'),
  statusTime: document.getElementById('statusTime'),
  dynamicIsland: document.getElementById('dynamicIsland'),
  islandText: document.getElementById('islandText'),
  islandPulse: document.getElementById('islandPulse'),
  statusDot: document.getElementById('statusDot'),
  statusLabel: document.getElementById('statusLabel'),
  
  // Search
  animalSearchInput: document.getElementById('animalSearchInput'),
  searchResultsOverlay: document.getElementById('searchResultsOverlay'),
  
  // Lists
  recentDiscoveriesList: document.getElementById('recentDiscoveriesList'),
  historyContainer: document.getElementById('historyContainer'),
  btnClearHistory: document.getElementById('btnClearHistory'),
  
  // Scanner components
  webcamVideo: document.getElementById('webcamVideo'),
  imagePreviewOverlay: document.getElementById('imagePreviewOverlay'),
  capturedImageElement: document.getElementById('capturedImageElement'),
  scannerLaser: document.getElementById('scannerLaser'),
  uploadFallbackBox: document.getElementById('uploadFallbackBox'),
  scanToast: document.getElementById('scanToast'),
  
  // Scanner Buttons
  btnGallery: document.getElementById('btnGallery'),
  fileInput: document.getElementById('fileInput'),
  btnCaptureOuter: document.getElementById('btnCaptureOuter'),
  btnToggleCamera: document.getElementById('btnToggleCamera'),
  cameraOnIcon: document.getElementById('cameraOnIcon'),
  cameraOffIcon: document.getElementById('cameraOffIcon'),
  pillModelMobile: document.getElementById('pillModelMobile'),
  pillModelResnet: document.getElementById('pillModelResnet'),
  
  // Settings Components
  serverStatusInfo: document.getElementById('serverStatusInfo'),
  settingsStatusBadge: document.getElementById('settingsStatusBadge'),
  themeSwitch: document.getElementById('themeSwitch'),
  ch: document.getElementById('themeSwitch'),
  soundSwitch: document.getElementById('soundSwitch'),
  settingsCardMobile: document.getElementById('settingsCardMobile'),
  settingsCardResnet: document.getElementById('settingsCardResnet'),
  
  // Details Sheet
  detailsBottomSheet: document.getElementById('detailsBottomSheet'),
  btnExitResults: document.getElementById('btnExitResults'),
  resultAnimalName: document.getElementById('resultAnimalName'),
  resultScientificName: document.getElementById('resultScientificName'),
  resultConfidenceCircle: document.getElementById('resultConfidenceCircle'),
  resultConfidencePercent: document.getElementById('resultConfidencePercent'),
  resultModelDetails: document.getElementById('resultModelDetails'),
  resultLatencyDetails: document.getElementById('resultLatencyDetails'),
  resultPredictionsList: document.getElementById('resultPredictionsList'),
  sheetDragHandle: document.getElementById('sheetDragHandle'),
  
  // Result Tabs
  tabFactsBtn: document.getElementById('tabFactsBtn'),
  tabCompareBtn: document.getElementById('tabCompareBtn'),
  paneFacts: document.getElementById('paneFacts'),
  paneCompare: document.getElementById('paneCompare'),
  compareLatencyMobile: document.getElementById('compareLatencyMobile'),
  comparePredsMobile: document.getElementById('comparePredsMobile'),
  compareLatencyResnet: document.getElementById('compareLatencyResnet'),
  comparePredsResnet: document.getElementById('comparePredsResnet'),
  comparisonVerdictText: document.getElementById('comparisonVerdictText'),
  
  // Audio
  soundScanSuccess: document.getElementById('soundScanSuccess')
};

// ==========================================================================
// CORE INITIALIZATION
// ==========================================================================
function init() {
  updateTime();
  setInterval(updateTime, 1000);
  
  loadLocalStorage();
  setupEventListeners();
  checkBackendConnection();
  
  // Periodically check server connection status
  setInterval(checkBackendConnection, 10000);
  
  // Render initial history elements
  renderHistory();
  renderRecentDiscoveries();
  
  // Initially hide navbar until get started is tapped
  DOM.navbar.style.transform = 'translateY(100%)';
}

// iOS Clock update logic
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  DOM.statusTime.textContent = `${hours}:${minutes}`;
}

// LocalStorage Persistence
function loadLocalStorage() {
  // Load History
  const storedHistory = localStorage.getItem('wildai_history');
  if (storedHistory) {
    state.history = JSON.parse(storedHistory);
  } else {
    // Pre-populate some beautiful default mock discoveries to make the first load look stunning
    state.history = [
      {
        id: 'disc_mock1',
        class: 'Fox',
        scientific: 'Vulpes vulpes',
        confidence: 0.942,
        timestamp: Date.now() - 3600000 * 2, // 2 hours ago
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&width=300&auto=format&fit=crop',
        model: 'resnet50',
        predictions: [
          { class: 'Fox', confidence: 0.942 },
          { class: 'Wolf', confidence: 0.038 },
          { class: 'Dog', confidence: 0.012 },
          { class: 'Hedgehog', confidence: 0.005 },
          { class: 'Raccoon', confidence: 0.003 }
        ],
        facts: ANIMAL_CLASSES_DATA['Fox']
      },
      {
        id: 'disc_mock2',
        class: 'Eagle',
        scientific: 'Accipitridae',
        confidence: 0.978,
        timestamp: Date.now() - 3600000 * 5, // 5 hours ago
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&width=300&auto=format&fit=crop',
        model: 'resnet50',
        predictions: [
          { class: 'Eagle', confidence: 0.978 },
          { class: 'Falcon', confidence: 0.015 },
          { class: 'Hawk', confidence: 0.005 },
          { class: 'Owl', confidence: 0.001 },
          { class: 'Blackbird', confidence: 0.001 }
        ],
        facts: ANIMAL_CLASSES_DATA['Eagle']
      },
      {
        id: 'disc_mock3',
        class: 'Panda',
        scientific: 'Ailuropoda melanoleuca',
        confidence: 0.991,
        timestamp: Date.now() - 3600000 * 24, // 24 hours ago
        image: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?q=80&width=300&auto=format&fit=crop',
        model: 'resnet50',
        predictions: [
          { class: 'Panda', confidence: 0.991 },
          { class: 'Bear', confidence: 0.008 },
          { class: 'Koala', confidence: 0.001 }
        ],
        facts: ANIMAL_CLASSES_DATA['Panda']
      }
    ];
    // Save to localStorage immediately so it acts as standard history
    localStorage.setItem('wildai_history', JSON.stringify(state.history));
  }
  
  // Load Preferences
  const storedPrefs = localStorage.getItem('wildai_prefs');
  if (storedPrefs) {
    state.preferences = JSON.parse(storedPrefs);
    // Apply preferences
    DOM.themeSwitch.checked = state.preferences.darkTheme;
    DOM.soundSwitch.checked = state.preferences.soundEffects;
    if (!state.preferences.darkTheme) {
      document.body.classList.add('light-theme');
    }
  }
}

function saveHistory() {
  try {
    localStorage.setItem('wildai_history', JSON.stringify(state.history));
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      console.warn("LocalStorage quota exceeded. Evicting oldest history items...");
      while (state.history.length > 0) {
        state.history.pop();
        try {
          localStorage.setItem('wildai_history', JSON.stringify(state.history));
          break;
        } catch (innerErr) {
          // continue popping
        }
      }
    } else {
      console.error("LocalStorage save error:", e);
    }
  }
  renderHistory();
  renderRecentDiscoveries();
}

function compressImage(base64Str, maxDim, callback) {
  if (!base64Str) {
    callback(null);
    return;
  }
  if (!base64Str.startsWith('data:image')) {
    callback(base64Str);
    return;
  }
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;
    if (width > height) {
      if (width > maxDim) {
        height *= maxDim / width;
        width = maxDim;
      }
    } else {
      if (height > maxDim) {
        width *= maxDim / height;
        height = maxDim;
      }
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', 0.7));
  };
  img.onerror = function() {
    callback(base64Str);
  };
  img.src = base64Str;
}

function savePreferences() {
  localStorage.setItem('wildai_prefs', JSON.stringify(state.preferences));
}

// ==========================================================================
// BACKEND NETWORK ACTIONS
// ==========================================================================
function checkBackendConnection() {
  fetch(`${state.apiHost}/index.html`, { method: 'HEAD', cache: 'no-cache' })
    .then(() => {
      setConnectionStatus(true);
    })
    .catch(() => {
      setConnectionStatus(false);
    });
}

function setConnectionStatus(connected) {
  state.serverConnected = connected;
  
  if (connected) {
    DOM.statusDot.className = 'status-dot connected';
    DOM.statusLabel.textContent = 'Online';
    DOM.serverStatusInfo.textContent = 'Connected successfully';
    DOM.settingsStatusBadge.className = 'badge badge-accent';
    DOM.settingsStatusBadge.textContent = 'Connected';
  } else {
    DOM.statusDot.className = 'status-dot disconnected';
    DOM.statusLabel.textContent = 'Offline';
    DOM.serverStatusInfo.textContent = 'Cannot connect to local server (run python3 server.py)';
    DOM.settingsStatusBadge.className = 'badge badge-neutral';
    DOM.settingsStatusBadge.textContent = 'Offline';
  }
}

// ==========================================================================
// SCREEN NAVIGATION
// ==========================================================================
function switchTab(targetTab) {
  // Stop camera if leaving scan tab
  if (state.currentTab === 'scan' && targetTab !== 'scan') {
    stopCamera();
  }
  
  state.currentTab = targetTab;
  
  // Hide all screens
  const screens = [DOM.splashScreen, DOM.homeScreen, DOM.scanScreen, DOM.historyScreen, DOM.settingsScreen];
  screens.forEach(screen => screen.classList.remove('active'));
  
  // Show active screen
  const targetScreenElement = DOM[targetTab + 'Screen'];
  if (targetScreenElement) {
    targetScreenElement.classList.add('active');
    // Scroll to top
    targetScreenElement.scrollTop = 0;
  }
  
  // Update Navbar highlights
  const navItems = [DOM.navHome, DOM.navScan, DOM.navHistory, DOM.navSettings];
  navItems.forEach(item => item.classList.remove('active'));
  
  if (targetTab === 'home') DOM.navHome.classList.add('active');
  if (targetTab === 'scan') DOM.navScan.classList.add('active');
  if (targetTab === 'history') DOM.navHistory.classList.add('active');
  if (targetTab === 'settings') DOM.navSettings.classList.add('active');
  
  // Show/Hide Navbar wrapper
  if (targetTab === 'splash') {
    DOM.navbar.style.transform = 'translateY(100%)';
  } else {
    DOM.navbar.style.transform = 'translateY(0)';
  }
  
  // Reset Dynamic Island text to logo default
  setDynamicIslandText('WildAI', false);
}

// Dynamic Island interaction states
function setDynamicIslandText(text, processing = false) {
  DOM.islandText.textContent = text;
  if (processing) {
    DOM.dynamicIsland.classList.add('processing');
  } else {
    DOM.dynamicIsland.classList.remove('processing');
  }
}

// ==========================================================================
// CAMERA VIEWPORT ACTIONS
// ==========================================================================
async function startCamera() {
  DOM.cameraOnIcon.style.display = 'none';
  DOM.cameraOffIcon.style.display = 'block';
  DOM.uploadFallbackBox.style.display = 'none';
  
  const constraints = {
    video: {
      facingMode: 'environment', // back camera by default
      width: { ideal: 640 },
      height: { ideal: 640 }
    },
    audio: false
  };
  
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    state.cameraStream = stream;
    DOM.webcamVideo.srcObject = stream;
    DOM.webcamVideo.style.display = 'block';
    showToast("Camera Active");
  } catch (err) {
    console.warn("Error starting webcam stream: ", err);
    // Show upload fallback
    DOM.webcamVideo.style.display = 'none';
    DOM.uploadFallbackBox.style.display = 'flex';
    DOM.cameraOnIcon.style.display = 'block';
    DOM.cameraOffIcon.style.display = 'none';
    showToast("Camera Access Denied");
  }
}

function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(track => track.stop());
    state.cameraStream = null;
  }
  DOM.webcamVideo.srcObject = null;
  DOM.webcamVideo.style.display = 'none';
  DOM.uploadFallbackBox.style.display = 'flex';
  
  DOM.cameraOnIcon.style.display = 'block';
  DOM.cameraOffIcon.style.display = 'none';
}

function toggleCamera() {
  if (state.cameraStream) {
    stopCamera();
    showToast("Camera Suspended");
  } else {
    startCamera();
  }
}

// Show micro-notification toast inside viewfinder
function showToast(message) {
  DOM.scanToast.textContent = message;
  DOM.scanToast.classList.add('show');
  setTimeout(() => {
    DOM.scanToast.classList.remove('show');
  }, 2000);
}

// ==========================================================================
// RECENT & HISTORY RENDERING
// ==========================================================================
function renderRecentDiscoveries() {
  DOM.recentDiscoveriesList.innerHTML = '';
  
  if (state.history.length === 0) {
    DOM.recentDiscoveriesList.innerHTML = `
      <div class="empty-state">
        <p>No scans yet. Start identifying animals!</p>
      </div>
    `;
    return;
  }
  
  // Show up to 3 most recent entries
  const recent = state.history.slice(0, 3);
  
  recent.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'discovery-list-item';
    itemEl.onclick = () => showDetailsDirect(item);
    
    const formattedConfidence = (item.confidence * 100).toFixed(0) + '%';
    
    itemEl.innerHTML = `
      <div class="discovery-img" style="background-image: url('${item.image}')"></div>
      <div class="discovery-info">
        <h4>${item.class}</h4>
        <p>${item.scientific}</p>
      </div>
      <div class="discovery-right">
        <div class="discovery-confidence">${formattedConfidence}</div>
      </div>
    `;
    
    DOM.recentDiscoveriesList.appendChild(itemEl);
  });
}

function renderHistory() {
  DOM.historyContainer.innerHTML = '';
  
  if (state.history.length === 0) {
    DOM.historyContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📂</div>
        <p>Your scan history is empty.</p>
        <p class="sub-text">Scanned animals will be saved here automatically.</p>
      </div>
    `;
    return;
  }
  
  state.history.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'history-item';
    
    const formattedConfidence = (item.confidence * 100).toFixed(0) + '%';
    const displayDate = new Date(item.timestamp).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });
    
    itemEl.innerHTML = `
      <div class="discovery-img" style="background-image: url('${item.image}')" onclick="event.stopPropagation(); showHistoryItemDetails('${item.id}')"></div>
      <div class="history-meta" onclick="showHistoryItemDetails('${item.id}')">
        <h4>${item.class}</h4>
        <p>${item.scientific} • ${formattedConfidence}</p>
        <p style="font-size: 9px; margin-top: 4px; color: var(--text-tertiary);">${displayDate}</p>
      </div>
      <button class="btn-delete" onclick="event.stopPropagation(); deleteHistoryItem('${item.id}')" title="Delete scan">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    `;
    
    DOM.historyContainer.appendChild(itemEl);
  });
}

function showHistoryItemDetails(id) {
  const item = state.history.find(x => x.id === id);
  if (item) {
    showDetailsDirect(item);
  }
}

function deleteHistoryItem(id) {
  state.history = state.history.filter(item => item.id !== id);
  saveHistory();
  showToast("Record Deleted");
}

// ==========================================================================
// SEARCH BAR LOGIC (For 64 Offline Classes)
// ==========================================================================
function setupSearch() {
  DOM.animalSearchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    DOM.searchResultsOverlay.innerHTML = '';
    
    if (!val) {
      DOM.searchResultsOverlay.style.display = 'none';
      return;
    }
    
    // Filter classes
    const matched = Object.keys(ANIMAL_CLASSES_DATA).filter(cls => 
      cls.toLowerCase().includes(val) || 
      ANIMAL_CLASSES_DATA[cls].scientific.toLowerCase().includes(val)
    );
    
    if (matched.length === 0) {
      DOM.searchResultsOverlay.innerHTML = '<div style="padding: 16px; text-align: center; color: var(--text-secondary); font-size: 12px;">No matches found</div>';
      DOM.searchResultsOverlay.style.display = 'block';
      return;
    }
    
    matched.forEach(cls => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.onclick = () => {
        // Clear search input and hide
        DOM.animalSearchInput.value = '';
        DOM.searchResultsOverlay.style.display = 'none';
        
        // Show offline facts for this class
        showDetailsDirect({
          class: cls,
          scientific: ANIMAL_CLASSES_DATA[cls].scientific,
          confidence: 1.0, // mock search view
          model: 'offline_search',
          predictions: [{ class: cls, confidence: 1.0 }],
          facts: ANIMAL_CLASSES_DATA[cls]
        });
      };
      
      item.innerHTML = `
        <span>${cls}</span>
        <span class="search-item-latin">${ANIMAL_CLASSES_DATA[cls].scientific}</span>
      `;
      DOM.searchResultsOverlay.appendChild(item);
    });
    DOM.searchResultsOverlay.style.display = 'block';
  });

  // Close search suggestions on outer click
  document.addEventListener('click', (e) => {
    if (!DOM.animalSearchInput.contains(e.target) && !DOM.searchResultsOverlay.contains(e.target)) {
      DOM.searchResultsOverlay.style.display = 'none';
    }
  });
}

// ==========================================================================
// IMAGE UPLOAD & INFERENCE TRIGGER
// ==========================================================================
function triggerGalleryUpload() {
  DOM.fileInput.click();
}

function handleFileInputChange(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    // Show image preview
    DOM.capturedImageElement.src = event.target.result;
    DOM.imagePreviewOverlay.style.display = 'block';
    DOM.uploadFallbackBox.style.display = 'none';
    
    // Save image base64
    state.capturedImageBase64 = event.target.result;
    showToast("Photo Imported");
  };
  reader.readAsDataURL(file);
}

// Trigger prediction
function triggerScan() {
  // 1. If camera is running, capture the frame
  if (state.cameraStream) {
    captureWebcamFrame();
  }
  
  // 2. If no image loaded, alert the user
  if (!state.capturedImageBase64) {
    alert("Please select a file or enable your camera viewport to capture.");
    return;
  }
  
  // 3. Check if server is running
  if (!state.serverConnected) {
    alert("Python server is offline. Please run 'python3 server.py' in the terminal.");
    return;
  }
  
  // 4. Start scan animations
  setDynamicIslandText('Analyzing...', true);
  DOM.scannerLaser.classList.add('scanning');
  
  runSingleClassificationRequest();
}

function captureWebcamFrame() {
  const canvas = document.createElement('canvas');
  // Crop to square viewfinder aspect
  const videoWidth = DOM.webcamVideo.videoWidth;
  const videoHeight = DOM.webcamVideo.videoHeight;
  const size = Math.min(videoWidth, videoHeight);
  
  canvas.width = 448; // double 224 for crisp capture preview
  canvas.height = 448;
  
  const ctx = canvas.getContext('2d');
  
  // Mirror canvas since webcam is mirrored
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  
  // Center crop crop source
  const sx = (videoWidth - size) / 2;
  const sy = (videoHeight - size) / 2;
  
  ctx.drawImage(DOM.webcamVideo, sx, sy, size, size, 0, 0, canvas.width, canvas.height);
  
  const base64 = canvas.toDataURL('image/jpeg', 0.85);
  state.capturedImageBase64 = base64;
  DOM.capturedImageElement.src = base64;
  DOM.imagePreviewOverlay.style.display = 'block';
}

function runSingleClassificationRequest() {
  fetch(`${state.apiHost}/api/classify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image: state.capturedImageBase64,
        model: 'resnet50'
    })
  })
  .then(res => res.json())
  .then(data => {
    // End Scan Animation
    DOM.scannerLaser.classList.remove('scanning');
    setDynamicIslandText('Species Found', false);
    
    if (data.success) {
      playSuccessSound();
      triggerHapticFeedback();
      
      // Save record to history (compress image first to prevent QuotaExceededError)
      compressImage(state.capturedImageBase64, 200, function(compressedBase64) {
        const newDiscovery = {
          id: 'disc_' + Date.now(),
          class: data.predictions[0].class,
          scientific: data.facts.scientific_name,
          confidence: data.predictions[0].confidence,
          timestamp: Date.now(),
          image: compressedBase64,
          model: 'resnet50'
        };
        
        state.history.unshift(newDiscovery);
        saveHistory();
      });
      
      // Render details modal
      renderDetailsModal(data.predictions[0].class, data.facts, data.predictions, data.latency_ms, data.model_name || 'ResNet50');
      
      // Open modal bottom sheet
      openDetailsSheet();
    } else {
      alert("Classification failed: " + data.error);
    }
  })
  .catch(err => {
    DOM.scannerLaser.classList.remove('scanning');
    setDynamicIslandText('Error', false);
    console.error("Classification error:", err);
    alert("Failed to communicate with python classifier backend: " + err);
  });
}

// Play UI confirmation sound
function playSuccessSound() {
  if (!state.preferences.soundEffects) return;
  try {
    // Generate web-audio synth beep if audio source is empty base64
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(660, audioCtx.currentTime); // E5
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1); // A5
    
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.4);
  } catch (e) {
    console.warn("Sound generation block:", e);
  }
}

// Trigger mobile vibration mock
function triggerHapticFeedback() {
  if ('vibrate' in navigator) {
    navigator.vibrate([60, 40, 60]); // iOS-like double haptic tap
  }
}

// ==========================================================================
// RESULTS MODAL RENDERING
// ==========================================================================
function renderDetailsModal(name, facts, predictions, latencyMs, modelName) {
  DOM.resultAnimalName.textContent = name;
  DOM.resultScientificName.textContent = facts.scientific_name || "N/A";
  
  // 1. Set progress circle match percentage
  const topConf = predictions[0].confidence;
  const percentText = (topConf * 100).toFixed(0) + '%';
  DOM.resultConfidencePercent.textContent = percentText;
  
  // Stroke dash calculation for circular ring (radius is 15.9155, circumfrence is 100)
  const offsetDash = 100 - (topConf * 100);
  DOM.resultConfidenceCircle.style.strokeDasharray = `${topConf * 100}, 100`;
  
  DOM.resultModelDetails.textContent = `Classified via ${modelName}`;
  DOM.resultLatencyDetails.textContent = `Inference latency: ${latencyMs.toFixed(1)} ms`;
  
  // 2. Set facts tabs
  DOM.paneFacts.querySelector('#factHabitat').textContent = facts.habitat || "N/A";
  DOM.paneFacts.querySelector('#factDiet').textContent = facts.diet || "N/A";
  DOM.paneFacts.querySelector('#factStatus').textContent = facts.status || "N/A";
  DOM.paneFacts.querySelector('#factDescription').textContent = facts.description || "N/A";
  
  // 3. Render prediction bars list
  DOM.resultPredictionsList.innerHTML = '';
  predictions.forEach(pred => {
    const formattedConf = (pred.confidence * 100).toFixed(1) + '%';
    const percentWidth = (pred.confidence * 100) + '%';
    
    const row = document.createElement('div');
    row.className = 'prediction-bar-row';
    row.innerHTML = `
      <div class="prediction-label">
        <span>${pred.class}</span>
        <span>${formattedConf}</span>
      </div>
      <div class="prediction-track">
        <div class="prediction-fill" style="width: ${percentWidth}"></div>
      </div>
    `;
    DOM.resultPredictionsList.appendChild(row);
  });
}

function showDetailsDirect(item) {
  // Populate mockup facts database direct
  const facts = item.facts || ANIMAL_CLASSES_DATA[item.class] || {
    scientific: "N/A", habitat: "N/A", diet: "N/A", status: "N/A", description: "No description available."
  };
  
  // Re-map facts key case
  const animalFacts = {
    scientific_name: facts.scientific,
    habitat: facts.habitat,
    diet: facts.diet,
    status: facts.status,
    description: facts.description
  };
  
  const predictions = item.predictions || [
    { class: item.class, confidence: item.confidence }
  ];
  
  const latency = item.latency_ms || 0.0;
  const modelStr = 'ResNet50 Animal Model';
  
  // Set image preview in scanner tab
  DOM.capturedImageElement.src = item.image;
  DOM.imagePreviewOverlay.style.display = 'block';
  DOM.uploadFallbackBox.style.display = 'none';
  state.capturedImageBase64 = item.image;
  
  renderDetailsModal(item.class, animalFacts, predictions, latency, modelStr);
  
  // Switch to scan tab and open bottom details sheet
  switchTab('scan');
  openDetailsSheet();
}

function openDetailsSheet() {
  DOM.detailsBottomSheet.classList.add('open');
}

function closeDetailsSheet() {
  DOM.detailsBottomSheet.classList.remove('open');
}

// Details Sheet Tabs
function setupResultTabs() {
  DOM.tabFactsBtn.addEventListener('click', () => switchDetailsTab('facts'));
  DOM.tabCompareBtn.addEventListener('click', () => switchDetailsTab('compare'));
}

function switchDetailsTab(tab) {
  if (tab === 'compare') {
    DOM.tabCompareBtn.classList.add('active');
    DOM.tabFactsBtn.classList.remove('active');
    DOM.paneCompare.classList.add('active');
    DOM.paneFacts.classList.remove('active');

    if (state.capturedImageBase64 && DOM.compareLatencyMobile.textContent === '--ms') {
      triggerScan();
    }
  } else {
    DOM.tabFactsBtn.classList.add('active');
    DOM.tabCompareBtn.classList.remove('active');
    DOM.paneFacts.classList.add('active');
    DOM.paneCompare.classList.remove('active');
  }
}

function clearAllHistory() {
  if (!confirm('Clear all history?')) return;
  state.history = [];
  saveHistory();
  setDynamicIslandText('History cleared', false);
}

// ==========================================================================
// PREFERENCES & MODEL PILLS
// ==========================================================================
function setupPreferences() {
  // Theme Switcher
  DOM.themeSwitch.addEventListener('change', (e) => {
    state.preferences.darkTheme = e.target.checked;
    savePreferences();
    if (e.target.checked) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  });
  
  // Sound Switcher
  DOM.soundSwitch.addEventListener('change', (e) => {
    state.preferences.soundEffects = e.target.checked;
    savePreferences();
  });
}

function updateModelPill(model) {
  DOM.pillModelMobile.classList.add('active');
  DOM.pillModelResnet.classList.remove('active');
}

function updateModelSettingsCard(model) {
  DOM.settingsCardMobile.classList.add('active');
  DOM.settingsCardResnet.classList.remove('active');
}

// ==========================================================================
// EVENT LISTENERS REGISTER
// ==========================================================================
function setupEventListeners() {
  // Splash Welcome screen trigger
  DOM.btnGetStarted.addEventListener('click', () => {
    // Move to Home screen
    switchTab('home');
    // Hide splash screen element completely
    if (DOM.splashScreen) {
      DOM.splashScreen.style.display = 'none';
    }
    // Ensure navigation bar is visible
    if (DOM.navbar) {
      DOM.navbar.style.transform = 'translateY(0)';
    }
  });

  // Navbar navigation triggers
  DOM.navHome.addEventListener('click', () => switchTab('home'));
  DOM.navScan.addEventListener('click', () => {
    switchTab('scan');
    // Start camera stream on entering scanner view
    startCamera();
  });
  DOM.navHistory.addEventListener('click', () => switchTab('history'));
  DOM.navSettings.addEventListener('click', () => switchTab('settings'));

  // Hero Scan button (also opens scanner)
  DOM.heroScanBtn.addEventListener('click', () => {
    switchTab('scan');
    startCamera();
  });

  // Other UI actions
  DOM.btnGallery.addEventListener('click', triggerGalleryUpload);
  DOM.fileInput.addEventListener('change', handleFileInputChange);
  DOM.btnCaptureOuter.addEventListener('click', triggerScan);
  DOM.btnToggleCamera.addEventListener('click', toggleCamera);
  DOM.btnExitResults.addEventListener('click', closeDetailsSheet);
  DOM.tabFactsBtn.addEventListener('click', () => switchDetailsTab('facts'));
  DOM.tabCompareBtn.addEventListener('click', () => switchDetailsTab('compare'));

  // Prevent clicks inside overlay from closing it
  DOM.searchResultsOverlay.addEventListener('click', e => e.stopPropagation());
  // Initialize search functionality
  setupSearch();

  DOM.heroScanCard.addEventListener('click', () => {
    switchTab('scan');
    startCamera();
  });

  DOM.viewAllHistoryLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('history');
  });

  DOM.sheetDragHandle.addEventListener('click', closeDetailsSheet);
  DOM.btnClearHistory.addEventListener('click', clearAllHistory);

  setupResultTabs();
  setupPreferences();

  const categories = document.querySelectorAll('.category-card');
  categories.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      showCategoryResults(cat);
    });
  });
}

  // Splash Welcome screen trigger
  DOM.btnGetStarted.addEventListener('click', () => {
    switchTab('home');
  });
  
  // Navbar navigation triggers
  DOM.navHome.addEventListener('click', () => switchTab('home'));
  DOM.navScan.addEventListener('click', () => {
    switchTab('scan');
    // Start camera stream on entering scanner view
    startCamera();
  });
  DOM.navHistory.addEventListener('click', () => switchTab('history'));
  DOM.navSettings.addEventListener('click', () => switchTab('settings'));
  

  DOM.heroScanBtn.addEventListener('click', () => {
    switchTab('scan');
    startCamera();
  });
  DOM.heroScanCard.addEventListener('click', () => {
    switchTab('scan');
    startCamera();
  });
  DOM.viewAllHistoryLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('history');
  });
  
  // Camera panel settings toggles

  

  
  // Webcam button toggle
  DOM.btnToggleCamera.addEventListener('click', toggleCamera);
  
  // File imports click handlers
  DOM.btnGallery.addEventListener('click', triggerGalleryUpload);
  DOM.fileInput.addEventListener('change', handleFileInputChange);
  
  // Capture click trigger
  DOM.btnCaptureOuter.addEventListener('click', triggerScan);
  
  // Results panel exits
  DOM.btnExitResults.addEventListener('click', closeDetailsSheet);
  
  // Bottom sheet drag handle dismiss logic
  DOM.sheetDragHandle.addEventListener('click', closeDetailsSheet);
  
  // Settings Engine Cards

  

  
  // Clear history action
  DOM.btnClearHistory.addEventListener('click', clearAllHistory);
  
  // Setup detailed sub-tabs
  setupResultTabs();
  
  // Setup preferences sliders
  setupPreferences();
  
  // Setup Home Search
  setupSearch();
  
  // Category quick views
  const categories = document.querySelectorAll('.category-card');
  categories.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      showCategoryResults(cat);
    });
  });


// Category filter modal quick view list
function showCategoryResults(category) {
  // Let's filter some typical classes to show in category preview
  const categoriesMapping = {
    'Mammals': ['Cheetah', 'Leopard', 'Jaguar', 'Lion', 'Bear', 'Panda', 'Wolf', 'Fox', 'Elephant', 'Giraffe', 'Koala', 'Kangaroo'],
    'Birds': ['Eagle', 'Falcon', 'Owl', 'Peacock', 'Ostrich', 'Flamingo', 'Duck', 'Goose'],
    'Reptiles': ['Crocodile', 'Snake', 'Lizard', 'Iguana'],
    'Aquatic': ['Dolphin', 'Whale', 'Seal', 'Walrus', 'Crab', 'Squid']
  };
  
  const classesList = categoriesMapping[category] || [];
  
  // Search bar update filter to help user explorer
  DOM.animalSearchInput.value = category;
  DOM.searchResultsOverlay.innerHTML = '';
  
  classesList.forEach(cls => {
    if (ANIMAL_CLASSES_DATA[cls]) {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.onclick = () => {
        DOM.animalSearchInput.value = '';
        DOM.searchResultsOverlay.style.display = 'none';
        showDetailsDirect({
          class: cls,
          scientific: ANIMAL_CLASSES_DATA[cls].scientific,
          confidence: 1.0,
          model: 'offline_search',
          predictions: [{ class: cls, confidence: 1.0 }],
          facts: ANIMAL_CLASSES_DATA[cls]
        });
      };
      
      item.innerHTML = `
        <span>${cls}</span>
        <span class="search-item-latin">${ANIMAL_CLASSES_DATA[cls].scientific}</span>
      `;
      DOM.searchResultsOverlay.appendChild(item);
    }
  });
  
  DOM.searchResultsOverlay.style.display = 'block';
  DOM.animalSearchInput.focus();
}

// Start application
window.onload = init;
