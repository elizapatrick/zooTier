import lionImg from "../../picture/lion.jpg";
import elephantImg from "../../picture/elephant.jpg";
import parrotImg from "../../picture/parrot.jpg";
import tigerImg from "../../picture/tiger.jpg";
import komodoDragonImg from "../../picture/komodo-dragon.jpg";
import penguinImg from "../../picture/penguin.jpg";
import gorillaImg from "../../picture/Gorilla.jpg";
import polarBearImg from "../../picture/polar-bear.jpg";

export const animals = [
    {
        id: "lion",
        name: "African Lion",
        scientificName: "Panthera leo",
        category: "Mammal",
        image: lionImg,
        description:
            "The lion is known as the king of the jungle, though it actually lives in grasslands and savannas.",
        habitat: "African grasslands and savannas",
        diet: "Carnivore - mainly zebras, wildebeest, and buffalo",
        lifespan: "10-14 years",
        status: "Vulnerable",
        statusClass: "status-vulnerable",
        fallback:
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
        funFacts: [
            "A lion's roar can be heard from up to 5 miles away",
            "Female lions do most of the hunting",
            "Lions sleep for up to 20 hours a day",
            "A lion's mane gets darker as it ages"
        ]
    },
    {
        id: "elephant",
        name: "African Elephant",
        scientificName: "Loxodonta africana",
        category: "Mammal",
        image: elephantImg,
        description:
            "African elephants are the largest land animals on Earth. They are highly intelligent, social creatures with complex family structures led by matriarchs.",
        habitat: "African savannas, forests, and deserts",
        diet: "Herbivore - grasses, leaves, bark, and fruits",
        lifespan: "60-70 years",
        status: "Endangered",
        statusClass: "status-endangered",
        fallback:
            "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80",
        funFacts: [
            "Elephants can recognize themselves in a mirror",
            "They can communicate using infrasound below human hearing range",
            "An elephant's trunk contains over 40,000 muscles",
            "Elephants show empathy and mourn their dead"
        ]
    },
    {
        id: "parrot",
        name: "Scarlet Macaw",
        scientificName: "Ara macao",
        category: "Bird",
        image: parrotImg,
        description:
            "The Scarlet Macaw is one of the most spectacular parrots in the world, known for brilliant colors.",
        habitat: "Tropical rainforests of Central and South America",
        diet: "Herbivore - fruits, nuts, seeds, and flowers",
        lifespan: "40-50 years",
        status: "Least Concern",
        statusClass: "status-least-concern",
        fallback:
            "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?auto=format&fit=crop&w=900&q=80",
        funFacts: [
            "Scarlet Macaws can fly at speeds up to 35 mph",
            "They can live for decades and form strong pair bonds",
            "Their beaks can crack very hard nuts",
            "They can mimic human speech and sounds"
        ]
    },
    {
        id: "tiger",
        name: "Bengal Tiger",
        scientificName: "Panthera tigris tigris",
        category: "Mammal",
        image: tigerImg,
        description:
            "Bengal tigers are powerful solitary hunters known for their striped coats and stealth.",
        habitat: "Tropical forests and grasslands of South Asia",
        diet: "Carnivore - deer, wild boar, and other medium-sized mammals",
        lifespan: "10-15 years",
        status: "Endangered",
        statusClass: "status-endangered",
        fallback:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "Every tiger has a unique stripe pattern",
            "Tigers are excellent swimmers and enjoy water",
            "A tiger can leap over 20 feet in one bound",
            "Their night vision is far better than humans"
        ]
    },
    {
        id: "komodo-dragon",
        name: "Komodo Dragon",
        scientificName: "Varanus komodoensis",
        category: "Reptile",
        image: komodoDragonImg,
        description:
            "The Komodo dragon is the largest living lizard species and a top predator on its islands.",
        habitat: "Dry savannas and forests in Indonesia",
        diet: "Carnivore - deer, birds, carrion, and smaller reptiles",
        lifespan: "20-30 years",
        status: "Endangered",
        statusClass: "status-endangered",
        fallback:
            "https://images.unsplash.com/photo-1592305965182-7a5cb0f4fbea?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "Komodo dragons can detect carrion from miles away",
            "They can run quickly for short distances",
            "Young dragons spend time in trees to avoid adults",
            "Their tongues are used to sense chemical trails"
        ]
    },
    {
        id: "penguin",
        name: "King Penguin",
        scientificName: "Aptenodytes patagonicus",
        category: "Bird",
        image: penguinImg,
        description:
            "King penguins are social seabirds adapted to cold waters and long-distance swimming.",
        habitat: "Subantarctic islands and coastal zones",
        diet: "Carnivore - fish, squid, and krill",
        lifespan: "15-20 years",
        status: "Least Concern",
        statusClass: "status-least-concern",
        fallback:
            "https://images.unsplash.com/photo-1462887749044-b47cb05b83b8?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "King penguins can dive deeper than 300 meters",
            "They recognize mates and chicks by vocal calls",
            "Their feathers are densely packed for insulation",
            "They can travel long distances while foraging"
        ]
    },
    {
        id: "gorilla",
        name: "Mountain Gorilla",
        scientificName: "Gorilla beringei beringei",
        category: "Mammal",
        image: gorillaImg,
        description:
            "Mountain gorillas live in family groups and are known for complex social behavior.",
        habitat: "High-altitude forests of Central Africa",
        diet: "Herbivore - leaves, shoots, stems, and fruit",
        lifespan: "35-40 years",
        status: "Endangered",
        statusClass: "status-endangered",
        fallback:
            "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "Each gorilla has a unique nose print",
            "They use gestures and sounds to communicate",
            "Silverbacks protect and guide their troop",
            "They share over 98% of DNA with humans"
        ]
    },
    {
        id: "polar-bear",
        name: "Polar Bear",
        scientificName: "Ursus maritimus",
        category: "Mammal",
        image: polarBearImg,
        description:
            "Polar bears are marine mammals adapted to Arctic life with thick fur and insulating fat.",
        habitat: "Arctic sea ice and coastal tundra",
        diet: "Carnivore - mainly seals",
        lifespan: "20-25 years",
        status: "Vulnerable",
        statusClass: "status-vulnerable",
        fallback:
            "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "Polar bear skin is black under white fur",
            "They are strong swimmers over long distances",
            "Their sense of smell can detect seals through ice",
            "Cubs usually stay with mothers for over two years"
        ]
    },
    {
        id: "zebra",
        name: "Plains Zebra",
        scientificName: "Equus quagga",
        category: "Mammal",
        image:
            "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80",
        description:
            "Plains zebras are social grazers recognized by their black-and-white striped patterns.",
        habitat: "African grasslands and savannas",
        diet: "Herbivore - grasses and shrubs",
        lifespan: "20-25 years",
        status: "Near Threatened",
        statusClass: "status-vulnerable",
        fallback:
            "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80",
        funFacts: [
            "No two zebras have the same stripe pattern",
            "They sleep standing up in short intervals",
            "Zebras form close social bonds in herds",
            "Their stripes may help with heat regulation"
        ]
    }
];
