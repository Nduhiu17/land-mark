export interface Plot {
  id: string
  title: string
  type: "commercial" | "residential"
  price: number
  area: number
  location: string
  images: string[]
  description: string
  coordinates: { lat: number; lng: number }
  amenities: string[]
  features: string[]
  possession: string
  approved: boolean
  featured?: boolean
}

const commercialImages = [
  "/commercial-plot-1.jpeg",
  "/commercial-plot-2.jpeg",
  "/commercial-plot-4.jpeg",
  "/commercial-plot-5.jpeg",
];

const residentialImages = [
  "/residential-plot-1.jpeg",
  "/residential-plot-2.jpeg",
  "/residential-plot-3.jpeg",
  "/residential-plot-4.jpeg",
  "/residential-plot-5.jpeg",
];

const getRandomImages = (type: "commercial" | "residential") => {
  const images = type === "commercial" ? commercialImages : residentialImages;
  return [...images].sort(() => 0.5 - Math.random()).slice(0, 3);
};

export const allPlots: Plot[] = [
  {
    id: "1",
    title: "Tatu City Commercial Plot",
    type: "commercial",
    price: 5000000,
    area: 2500,
    location: "Tatu City, Kiambu",
    images: getRandomImages("commercial"),
    description:
      "Prime commercial plot in the heart of Tatu City with excellent connectivity and modern infrastructure. Perfect for IT companies, startups, and tech-focused businesses. Surrounded by leading companies and a growing ecosystem.",
    coordinates: { lat: -1.1726, lng: 36.9534 },
    amenities: ["24/7 Security", "High-Speed Internet", "Power Backup", "Water Supply", "Parking Space"],
    features: ["Corner Plot", "East Facing", "Clear Title", "Easy Road Access", "Bank Loan Available"],
    possession: "Ready",
    approved: true,
    featured: true,
  },
  {
    id: "2",
    title: "Runda Residential Paradise",
    type: "residential",
    price: 3500000,
    area: 1200,
    location: "Runda, Nairobi",
    images: getRandomImages("residential"),
    description:
      "Exclusive residential plot in a gated community with premium amenities. Set in a serene environment with lush green landscaping and modern infrastructure. Ideal for building your dream home.",
    coordinates: { lat: -1.224, lng: 36.808 },
    amenities: ["Community Garden", "Swimming Pool", "Gym", "Children Playground", "Community Hall"],
    features: ["Gated Community", "South Facing", "Flat Terrain", "Piped Gas", "Well Connected"],
    possession: "Ready",
    approved: true,
    featured: true,
  },
  {
    id: "3",
    title: "Westlands Business Hub",
    type: "commercial",
    price: 6000000,
    area: 3000,
    location: "Westlands, Nairobi",
    images: getRandomImages("commercial"),
    description:
      "Strategic commercial plot in the bustling business district with maximum visibility and footfall. Excellent for retail, office, or mixed-use development. Direct access to main roads and metro connectivity.",
    coordinates: { lat: -1.265, lng: 36.805 },
    amenities: ["High Visibility", "Ample Parking", "24/7 Power Supply", "Water Connection", "Security System"],
    features: ["Corner Plot", "Main Road Frontage", "Approved Layout", "Easy Bank Loan", "Investment Ready"],
    possession: "Ready",
    approved: true,
    featured: true,
  },
  {
    id: "4",
    title: "Karen Eco-Friendly Living",
    type: "residential",
    price: 2800000,
    area: 1000,
    location: "Karen, Nairobi",
    images: getRandomImages("residential"),
    description:
      "A serene and eco-friendly plot in the leafy suburbs of Karen. Perfect for a family home with ample space for a garden and outdoor activities. Close to international schools and shopping centers.",
    coordinates: { lat: -1.321, lng: 36.707 },
    amenities: ["Gated Community", "Borehole Water", "Solar Power Ready", "Clubhouse", "Nature Trails"],
    features: ["North Facing", "Gentle Slope", "Mature Trees", "Quiet Neighborhood", "Secure Environment"],
    possession: "3 Months",
    approved: true,
  },
  {
    id: "5",
    title: "Mombasa Industrial Park",
    type: "commercial",
    price: 4200000,
    area: 2800,
    location: "Mombasa, Coastal Region",
    images: getRandomImages("commercial"),
    description:
      "Large industrial plot in a prime location near the port of Mombasa. Ideal for manufacturing, warehousing, or logistics. Excellent access to transport networks and a skilled labor force.",
    coordinates: { lat: -4.0435, lng: 39.6682 },
    amenities: ["Industrial Grade Power", "Wide Roads", "Container Depot Access", "24/7 Security", "Waste Management"],
    features: ["Flat Terrain", "Main Road Access", "Industrial Zoning", "Tax Incentives", "High Growth Area"],
    possession: "Ready",
    approved: true,
  },
  {
    id: "6",
    title: "Nyali Gated Community",
    type: "residential",
    price: 3200000,
    area: 1500,
    location: "Nyali, Mombasa",
    images: getRandomImages("residential"),
    description:
      "A beautiful plot in an exclusive gated community in Nyali. Close to the beach, shopping malls, and top-rated schools. Perfect for a holiday home or a permanent residence.",
    coordinates: { lat: -4.025, lng: 39.701 },
    amenities: ["Swimming Pool", "Clubhouse", "Gym", "Landscaped Gardens", "Beach Access"],
    features: ["Gated Community", "Controlled Development", "Paved Roads", "Street Lighting", "Secure Perimeter"],
    possession: "6 Months",
    approved: true,
  },
  {
    id: "7",
    title: "Nakuru CBD Retail Space",
    type: "commercial",
    price: 3800000,
    area: 1800,
    location: "Nakuru CBD, Nakuru",
    images: getRandomImages("commercial"),
    description:
      "A prime retail plot in the heart of Nakuru's central business district. High footfall and excellent visibility. Ideal for a supermarket, bank, or restaurant.",
    coordinates: { lat: -0.3031, lng: 36.0801 },
    amenities: ["Ample Parking", "High-Speed Fiber", "Backup Generator", "24/7 Security", "Loading Bay"],
    features: ["Main Street Frontage", "High Commercial Value", "Ready for Construction", "Approved Plans Available", "Flexible Use"],
    possession: "Ready",
    approved: false,
  },
  {
    id: "8",
    title: "Diani Beachfront Villa Plot",
    type: "residential",
    price: 4500000,
    area: 2000,
    location: "Diani, Coastal Region",
    images: getRandomImages("residential"),
    description:
      "Stunning beachfront plot in the popular tourist destination of Diani. Perfect for a luxury villa or a boutique hotel. Uninterrupted ocean views and direct access to the white sandy beach.",
    coordinates: { lat: -4.2833, lng: 39.5833 },
    amenities: ["Private Beach Access", "Water Sports Facilities", "Nearby Restaurants", "Gated Community", "24/7 Security"],
    features: ["Ocean View", "Freehold Title", "Ready for Development", "Tourist Hotspot", "High Rental Potential"],
    possession: "Ready",
    approved: true,
  },
]
