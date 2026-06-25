# List of the 64 animal classes in the Kaggle dataset in alphabetical order
ANIMAL_CLASSES = [
    'Antelope', 'Bear', 'Beaver', 'Bee', 'Bison', 'Blackbird', 'Buffalo', 'Butterfly', 
    'Camel', 'Cat', 'Cheetah', 'Chimpanzee', 'Chinchilla', 'Cow', 'Crab', 'Crocodile', 
    'Deer', 'Dog', 'Dolphin', 'Donkey', 'Duck', 'Eagle', 'Elephant', 'Falcon', 
    'Ferret', 'Flamingo', 'Fox', 'Frog', 'Giraffe', 'Goat', 'Goose', 'Gorilla', 
    'Grasshopper', 'Hawk', 'Hedgehog', 'Hippopotamus', 'Hyena', 'Iguana', 'Jaguar', 
    'Kangaroo', 'Koala', 'Lemur', 'Leopard', 'Lizard', 'Lynx', 'Mole', 'Mongoose', 
    'Ostrich', 'Otter', 'Owl', 'Panda', 'Peacock', 'Penguin', 'Porcupine', 'Raccoon', 
    'Seal', 'Sheep', 'Snail', 'Snake', 'Spider', 'Squid', 'Walrus', 'Whale', 'Wolf'
]

# Database of facts for each of the 64 classes
ANIMAL_FACTS = {
    'Antelope': {
        'scientific_name': 'Antilocapra americana',
        'habitat': 'Grasslands, Savannahs',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Antelopes are fast-running mammals with hollow horns. They are known for their graceful movement and agility in escaping predators on the open plains.'
    },
    'Bear': {
        'scientific_name': 'Ursidae',
        'habitat': 'Forests, Tundra, Mountains',
        'diet': 'Omnivore',
        'status': 'Vulnerable',
        'description': 'Bears are large, powerful mammals with thick fur and strong claws. While mostly omnivorous, their diets vary from exclusively bamboo (panda) to mostly meat (polar bear).'
    },
    'Beaver': {
        'scientific_name': 'Castor canadensis',
        'habitat': 'Rivers, Lakes, Wetlands',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Beavers are semi-aquatic rodents famous for building dams, canals, and lodges. Their engineering work creates rich wetland habitats for other species.'
    },
    'Bee': {
        'scientific_name': 'Anthophila',
        'habitat': 'Meadows, Forests, Gardens',
        'diet': 'Herbivore',
        'status': 'Threatened (varies)',
        'description': 'Bees are flying insects known for their role in pollination and, in the case of the honeybee, for producing honey and beeswax. They are crucial for biodiversity.'
    },
    'Bison': {
        'scientific_name': 'Bison bison',
        'habitat': 'Plains, Grasslands',
        'diet': 'Herbivore',
        'status': 'Near Threatened',
        'description': 'Bison are massive, shaggy-haired herbivores native to North America and Europe. They are iconic symbols of the Great Plains, traveling in large protective herds.'
    },
    'Blackbird': {
        'scientific_name': 'Turdus merula',
        'habitat': 'Woodlands, Gardens, Parks',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'The common blackbird is a species of true thrush. Males have jet-black plumage and bright yellow-orange eye rings and bills, and they sing a beautiful melodic song.'
    },
    'Buffalo': {
        'scientific_name': 'Syncerus caffer',
        'habitat': 'Savannahs, Swamps, Grasslands',
        'diet': 'Herbivore',
        'status': 'Near Threatened',
        'description': 'African buffalos are large, formidable bovines with unique fused horns forming a continuous bone shield. They are highly protective and resilient predators.'
    },
    'Butterfly': {
        'scientific_name': 'Lepidoptera',
        'habitat': 'Fields, Meadows, Rainforests',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Butterflies are insects with large, often brightly colored wings and a conspicuous fluttering flight. They undergo complete metamorphosis from caterpillar to butterfly.'
    },
    'Camel': {
        'scientific_name': 'Camelus',
        'habitat': 'Deserts, Arid Grasslands',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Camels are humped even-toed ungulates adapted to harsh desert life. Their humps store fat, not water, allowing them to travel long distances without nourishment.'
    },
    'Cat': {
        'scientific_name': 'Felis catus',
        'habitat': 'Domestic, Urban',
        'diet': 'Carnivore',
        'status': 'Domesticated',
        'description': 'Cats are small, agile carnivorous mammals that have been domesticated for thousands of years. They are known for their hunting abilities, independence, and companionship.'
    },
    'Cheetah': {
        'scientific_name': 'Acinonyx jubatus',
        'habitat': 'Savannahs, Dry Forests',
        'diet': 'Carnivore',
        'status': 'Vulnerable',
        'description': 'The cheetah is the fastest land animal, capable of accelerating from 0 to 60 mph in under three seconds. They have characteristic black "tear tracks" on their faces.'
    },
    'Chimpanzee': {
        'scientific_name': 'Pan troglodytes',
        'habitat': 'Rainforests, Wet Savannahs',
        'diet': 'Omnivore',
        'status': 'Endangered',
        'description': 'Chimpanzees are highly intelligent great apes that share 98% of their DNA with humans. They live in complex social groups and are skilled at using tools.'
    },
    'Chinchilla': {
        'scientific_name': 'Chinchilla lanigera',
        'habitat': 'Andes Mountains (Rocky areas)',
        'diet': 'Herbivore',
        'status': 'Endangered',
        'description': 'Chinchillas are small crepuscular rodents native to the Andes. They are famous for having the densest fur of any land mammal, which protects them in freezing climates.'
    },
    'Cow': {
        'scientific_name': 'Bos taurus',
        'habitat': 'Farms, Pastures',
        'diet': 'Herbivore',
        'status': 'Domesticated',
        'description': 'Cows are large domesticated bovid ungulates raised for dairy, meat, and leather. They are ruminants, meaning their stomachs have four compartments to digest grass.'
    },
    'Crab': {
        'scientific_name': 'Brachyura',
        'habitat': 'Oceans, Beaches, Estuaries',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Crabs are decapod crustaceans with short tails and a thick exoskeleton. They are armed with a single pair of claws and typically move sideways.'
    },
    'Crocodile': {
        'scientific_name': 'Crocodylidae',
        'habitat': 'Swamps, Estuaries, Rivers',
        'diet': 'Carnivore',
        'status': 'Vulnerable',
        'description': 'Crocodiles are large, semi-aquatic predatory reptiles that have existed since the age of dinosaurs. They have a powerful bite and hunt by stealth in water.'
    },
    'Deer': {
        'scientific_name': 'Cervidae',
        'habitat': 'Forests, Grasslands, Wetlands',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Deer are hoofed ruminant mammals known for their agility and grace. Except for the Chinese water deer, males grow and shed antlers annually.'
    },
    'Dog': {
        'scientific_name': 'Canis lupus familiaris',
        'habitat': 'Domestic, Global',
        'diet': 'Omnivore',
        'status': 'Domesticated',
        'description': 'Dogs were the first animals to be domesticated by humans. Descended from wolves, they have evolved into hundreds of breeds and are known for their loyalty.'
    },
    'Dolphin': {
        'scientific_name': 'Delphinidae',
        'habitat': 'Oceans, Coastal Bays',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Dolphins are highly intelligent aquatic mammals that use echolocation to navigate and hunt. They live in social groups called pods and display playful behavior.'
    },
    'Donkey': {
        'scientific_name': 'Equus asinus',
        'habitat': 'Pastures, Farms, Semi-Arid',
        'diet': 'Herbivore',
        'status': 'Domesticated',
        'description': 'Donkeys are domesticated members of the horse family. Renowned for their stamina and resilience, they are widely used as pack animals in rural communities worldwide.'
    },
    'Duck': {
        'scientific_name': 'Anatidae',
        'habitat': 'Ponds, Lakes, Wetlands',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Ducks are waterbirds with broad, flat bills, waterproof feathers, and webbed feet. They feed on aquatic plants, fish, insects, and small crustaceans.'
    },
    'Eagle': {
        'scientific_name': 'Accipitridae',
        'habitat': 'Mountains, Forests, Coasts',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Eagles are large, powerfully built birds of prey. They have massive hooked beaks, strong talons, and exceptionally keen eyesight to spot prey from great heights.'
    },
    'Elephant': {
        'scientific_name': 'Elephantidae',
        'habitat': 'Savannahs, Rainforests',
        'diet': 'Herbivore',
        'status': 'Endangered',
        'description': 'Elephants are the largest living land animals. They are characterized by their long trunks, tusks, and large ear flaps, displaying high intelligence and empathy.'
    },
    'Falcon': {
        'scientific_name': 'Falco',
        'habitat': 'Cliffs, Grasslands, Cities',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Falcons are high-speed raptors with thin, tapered wings. The peregrine falcon is the fastest creature on Earth, reaching diving speeds over 200 mph.'
    },
    'Ferret': {
        'scientific_name': 'Mustela putorius furo',
        'habitat': 'Domestic',
        'diet': 'Carnivore',
        'status': 'Domesticated',
        'description': 'Ferrets are small, elongated domesticated mustelids. They are energetic, curious, and sleep up to 18 hours a day, making them popular household pets.'
    },
    'Flamingo': {
        'scientific_name': 'Phoenicopterus',
        'habitat': 'Saline Lakes, Lagoons',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Flamingos are famous pink wading birds with long, thin legs and curved bills. Their pink coloration comes from pigments in the shrimp and algae they eat.'
    },
    'Fox': {
        'scientific_name': 'Vulpes vulpes',
        'habitat': 'Forests, Grasslands, Cities',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Foxes are small-to-medium-sized omnivorous mammals belonging to the canine family. They are highly adaptable and display clever hunting and survival behaviors.'
    },
    'Frog': {
        'scientific_name': 'Anura',
        'habitat': 'Rainforests, Ponds, Swamps',
        'diet': 'Carnivore',
        'status': 'Vulnerable (varies)',
        'description': 'Frogs are tailless amphibians known for their jumping ability, webbed toes, and croaking sounds. They absorb water and oxygen directly through their moist skin.'
    },
    'Giraffe': {
        'scientific_name': 'Giraffa camelopardalis',
        'habitat': 'Savannahs, Open Woodlands',
        'diet': 'Herbivore',
        'status': 'Vulnerable',
        'description': 'Giraffes are the tallest terrestrial animals. Their long necks enable them to feed on high tree leaves, especially acacia, using their prehensile blue tongues.'
    },
    'Goat': {
        'scientific_name': 'Capra hircus',
        'habitat': 'Mountains, Farms, Valleys',
        'diet': 'Herbivore',
        'status': 'Domesticated',
        'description': 'Goats are hardy, agile herbivores that were among the first animals to be domesticated. They are excellent climbers, capable of scaling steep rocky terrain.'
    },
    'Goose': {
        'scientific_name': 'Anserini',
        'habitat': 'Wetlands, Fields, Lakes',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Geese are medium-to-large waterfowl related to ducks and swans. They migrate in eye-catching V-formations and are known for their territorial honking.'
    },
    'Gorilla': {
        'scientific_name': 'Gorilla gorilla',
        'habitat': 'Tropical Rainforests',
        'diet': 'Herbivore',
        'status': 'Critically Endangered',
        'description': 'Gorillas are the largest living primates, native to the forests of central Africa. Led by a dominant silverback, they live in highly cohesive, gentle family groups.'
    },
    'Grasshopper': {
        'scientific_name': 'Caelifera',
        'habitat': 'Fields, Meadows, Gardens',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Grasshoppers are plant-eating insects with powerful hind legs modified for leaping. Some species can group into massive swarms (locusts), consuming crops.'
    },
    'Hawk': {
        'scientific_name': 'Accipitrinae',
        'habitat': 'Forests, Grasslands, Deserts',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Hawks are medium-sized birds of prey known for their sharp eyesight and swift aerial maneuvers. They hunt small mammals, reptiles, and other birds.'
    },
    'Hedgehog': {
        'scientific_name': 'Erinaceinae',
        'habitat': 'Woodlands, Hedgerows, Gardens',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Hedgehogs are small, nocturnal insectivorous mammals covered in stiff, protective spines. When threatened, they roll into a tight, prickly ball.'
    },
    'Hippopotamus': {
        'scientific_name': 'Hippopotamus amphibius',
        'habitat': 'Rivers, Lakes, Swamps',
        'diet': 'Herbivore',
        'status': 'Vulnerable',
        'description': 'Hippos are massive, semi-aquatic mammals native to Sub-Saharan Africa. Despite their bulky size, they can run fast and are highly protective of their territory.'
    },
    'Hyena': {
        'scientific_name': 'Hyaenidae',
        'habitat': 'Savannahs, Grasslands, Deserts',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Hyenas are unique feliform carnivores with extremely powerful jaws capable of crushing bone. Spotted hyenas live in matriarchal clans and hunt in packs.'
    },
    'Iguana': {
        'scientific_name': 'Iguana iguana',
        'habitat': 'Rainforests, Coastal Canopies',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Iguanas are large herbivorous lizards native to tropical areas of Central and South America. They are excellent swimmers and can drop from tall trees unharmed.'
    },
    'Jaguar': {
        'scientific_name': 'Panthera onca',
        'habitat': 'Rainforests, Swamps, Grasslands',
        'diet': 'Carnivore',
        'status': 'Near Threatened',
        'description': 'The jaguar is the largest cat species in the Americas. Unlike most cats, they love water and are strong swimmers, possessing an exceptionally powerful bite.'
    },
    'Kangaroo': {
        'scientific_name': 'Macropodidae',
        'habitat': 'Grasslands, Forests, Plains',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Kangaroos are large marsupials native to Australia. They are the only large animals that hop to travel, and mothers raise their joey inside a stomach pouch.'
    },
    'Koala': {
        'scientific_name': 'Phascolarctos cinereus',
        'habitat': 'Eucalyptus Forests',
        'diet': 'Herbivore',
        'status': 'Vulnerable',
        'description': 'Koalas are tree-dwelling marsupials native to Australia. They sleep up to 20 hours a day to conserve energy, eating exclusively toxic eucalyptus leaves.'
    },
    'Lemur': {
        'scientific_name': 'Lemuriformes',
        'habitat': 'Dry & Rainforests of Madagascar',
        'diet': 'Herbivore',
        'status': 'Endangered',
        'description': 'Lemurs are primitive primates native only to the island of Madagascar. They have long, bushy tails, reflective eyes, and are mostly active at night.'
    },
    'Leopard': {
        'scientific_name': 'Panthera pardus',
        'habitat': 'Forests, Savannahs, Deserts',
        'diet': 'Carnivore',
        'status': 'Vulnerable',
        'description': 'Leopards are elegant, powerful big cats known for their stealth and strength. They frequently haul heavy carcasses up into trees to keep them from scavengers.'
    },
    'Lizard': {
        'scientific_name': 'Lacertilia',
        'habitat': 'Global (except Antarctica)',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Lizards are a widespread group of squamate reptiles. They typically have feet, external ears, and movable eyelids, and many can shed their tails to escape predators.'
    },
    'Lynx': {
        'scientific_name': 'Lynx',
        'habitat': 'Boreal Forests, Tundra',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Lynx are medium-sized wild cats with distinctive black hair tufts on their ears, short tails, and large padded paws that act as natural snowshoes.'
    },
    'Mole': {
        'scientific_name': 'Talpidae',
        'habitat': 'Grasslands, Under Soil',
        'diet': 'Insectivore',
        'status': 'Least Concern',
        'description': 'Moles are small mammals adapted to a subterranean lifestyle. They have cylindrical bodies, velvety fur, tiny eyes, and powerful forelimbs for digging tunnels.'
    },
    'Mongoose': {
        'scientific_name': 'Herpestidae',
        'habitat': 'Savannahs, Forests, Scrublands',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Mongooses are small, agile predators. They are famous for their speed and resistance to snake venom, which allows them to attack and eat cobras.'
    },
    'Ostrich': {
        'scientific_name': 'Struthio camelus',
        'habitat': 'Savannahs, Semi-Deserts',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Ostriches are the largest and heaviest living birds. They are flightless, but they can run at sustained speeds of 30 mph, kicking with immense force.'
    },
    'Otter': {
        'scientific_name': 'Lutrinae',
        'habitat': 'Rivers, Coastal Waters',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Otters are playful, semi-aquatic carnivorous mammals. They have webbed feet, dense waterproof fur, and use stones as tools to crack open shellfish.'
    },
    'Owl': {
        'scientific_name': 'Strigiformes',
        'habitat': 'Forests, Deserts, Tundra',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Owls are nocturnal birds of prey. They are characterized by flat faces, forward-facing eyes, exceptional hearing, and feathers designed for silent flight.'
    },
    'Panda': {
        'scientific_name': 'Ailuropoda melanoleuca',
        'habitat': 'Bamboo Mountain Forests',
        'diet': 'Herbivore',
        'status': 'Vulnerable',
        'description': 'Giant pandas are bears native to south-central China. They have a distinctive black-and-white coat and feed almost exclusively on bamboo shoots and leaves.'
    },
    'Peacock': {
        'scientific_name': 'Pavo cristatus',
        'habitat': 'Woodlands, Farmlands',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Peacocks are the males of the peafowl species, famous for their train of iridescent tail feathers which they fan out in a spectacular courtship display.'
    },
    'Penguin': {
        'scientific_name': 'Spheniscidae',
        'habitat': 'Southern Oceans, Coasts',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Penguins are flightless aquatic birds adapted to cold water. Their wings have evolved into stiff flippers, making them incredibly agile and fast swimmers.'
    },
    'Porcupine': {
        'scientific_name': 'Erethizontidae',
        'habitat': 'Forests, Hills, Deserts',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Porcupines are large rodents easily recognized by their coat of sharp, needle-like quills, which detaches easily to embed in attacking predators.'
    },
    'Raccoon': {
        'scientific_name': 'Procyon lotor',
        'habitat': 'Forests, Urban Areas',
        'diet': 'Omnivore',
        'status': 'Least Concern',
        'description': 'Raccoons are highly intelligent nocturnal mammals. They are characterized by their black facial "mask" and ringed tail, and possess dextrous front paws.'
    },
    'Seal': {
        'scientific_name': 'Pinnipedia',
        'habitat': 'Polar and Temperate Oceans',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Seals are marine mammals with flippers. They spend most of their lives in water but haul out onto land or ice to breed, give birth, and molt.'
    },
    'Sheep': {
        'scientific_name': 'Ovis aries',
        'habitat': 'Pastures, Farms, Grasslands',
        'diet': 'Herbivore',
        'status': 'Domesticated',
        'description': 'Sheep are multi-purpose domesticated ruminant mammals. Bred for wool, meat, and milk, they live in flocks and graze on grasses and clover.'
    },
    'Snail': {
        'scientific_name': 'Gastropoda',
        'habitat': 'Gardens, Damp Woodlands',
        'diet': 'Herbivore',
        'status': 'Least Concern',
        'description': 'Snails are shelled mollusks that move slowly by muscular contractions of their foot, secreting mucus to glide smoothly over surfaces.'
    },
    'Snake': {
        'scientific_name': 'Serpentes',
        'habitat': 'Global (except Polar)',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Snakes are elongated, legless carnivorous reptiles. Many have venom glands used to subdue prey, while others compress their prey to kill.'
    },
    'Spider': {
        'scientific_name': 'Araneae',
        'habitat': 'Global (Diverse)',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Spiders are eight-legged arachnids that possess fangs capable of injecting venom. Many species spin complex silk webs to trap flying insects.'
    },
    'Squid': {
        'scientific_name': 'Teuthida',
        'habitat': 'Open Oceans, Deep Seas',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Squids are marine cephalopods with elongated bodies, large eyes, and eight arms and two tentacles. They swim rapidly using jet propulsion.'
    },
    'Walrus': {
        'scientific_name': 'Odobenus rosmarus',
        'habitat': 'Arctic Oceans, Ice Floes',
        'diet': 'Carnivore',
        'status': 'Vulnerable',
        'description': 'Walruses are large, flippered marine mammals native to the Arctic. They are easily recognized by their prominent tusks, whiskers, and massive bulk.'
    },
    'Whale': {
        'scientific_name': 'Cetacea',
        'habitat': 'Deep Oceans',
        'diet': 'Carnivore',
        'status': 'Endangered (varies)',
        'description': 'Whales are the largest mammals on Earth, breathing air through blowholes. Baleen whales filter tiny plankton, while toothed whales hunt fish and squid.'
    },
    'Wolf': {
        'scientific_name': 'Canis lupus',
        'habitat': 'Forests, Tundra, Grasslands',
        'diet': 'Carnivore',
        'status': 'Least Concern',
        'description': 'Wolves are pack-hunting wild canines and the ancestors of domestic dogs. They are highly social, communicating through howls, posture, and scent.'
    }
}
