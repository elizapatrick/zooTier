import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

const animals = [
  {
    id: 'elephant',
    name: 'African Elephant',
    habitat: 'Savannah',
    dangerLevel: 3,
    feedingTimes: ['09:00', '13:30', '17:00'],
  },
  {
    id: 'parrot',
    name: 'Macaw Parrot',
    habitat: 'Rainforest Aviary',
    dangerLevel: 1,
    feedingTimes: ['08:15', '12:45', '16:15'],
  },
  {
    id: 'komodo-dragon',
    name: 'Komodo Dragon',
    habitat: 'Dry Forest Enclosure',
    dangerLevel: 5,
    feedingTimes: ['10:30', '15:30'],
  },
  {
    id: 'lion',
    name: 'African Lion',
    habitat: 'Grassland',
    dangerLevel: 5,
    feedingTimes: ['10:00', '15:00'],
  },
  {
    id: 'penguin',
    name: 'King Penguin',
    habitat: 'Arctic Exhibit',
    dangerLevel: 1,
    feedingTimes: ['08:30', '14:00', '18:00'],
  },
  {
    id: 'gorilla',
    name: 'Mountain Gorilla',
    habitat: 'Rainforest',
    dangerLevel: 4,
    feedingTimes: ['11:00', '16:30'],
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    habitat: 'Jungle Habitat',
    dangerLevel: 5,
    feedingTimes: ['09:45', '15:15'],
  },
  {
    id: 'polar-bear',
    name: 'Polar Bear',
    habitat: 'Arctic Tundra',
    dangerLevel: 4,
    feedingTimes: ['10:15', '17:30'],
  },
];

const animalsById = new Map(animals.map(a => [a.id, a]));

app.get('/api/branding', (_req, res) => {
  res.json({
    logo: {
      path: '/assets/logo-parrot.png',
      alt: 'ZOOllinger Parrot Logo',
    },
    liveStats: {
      guestCount: 1240,
    },
  });
});

app.get('/api/animals', (_req, res) => {
  res.json(animals);
});

app.get('/api/animals/:id', (req, res) => {
  const animal = animalsById.get(req.params.id);
  
  if (!animal) {
    return res.status(404).json({ message: 'Animal not found' });
  }
  
  res.json(animal);
});

app.get('/api/tickets', (_req, res) => {
  res.json({
    currency: 'USD',
    lastUpdated: '2026-05-11',
    tickets: [
      { type: 'adult', price: 29.99, available: true },
      { type: 'child', price: 16.99, available: true },
      { type: 'senior', price: 19.99, available: true },
      { type: 'family', price: 79.99, available: false },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`ZOOllinger backend running on http://localhost:${PORT}`);
});
