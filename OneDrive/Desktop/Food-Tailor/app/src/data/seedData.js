// Seed Data — Hyderabad Signature Kitchens & Beloved Brands
// This data is used both client-side (fallback) and to seed the database

export const brands = [
  {
    id: 1,
    name: 'Cafe Niloufer',
    tagline: 'The Gold Standard of Irani Chai & Maska Bun',
    cuisine: 'Irani & Bakery',
    description: 'Since 1978, Cafe Niloufer has defined Hyderabad\'s tea and bakery culture with world-famous Irani Chai, Osmania biscuits, and fresh malai maska buns.',
    whyWePicked: 'An iconic Hyderabadi gathering is never complete without Niloufer\'s rich, velvety Irani Chai and signature bakery treats.',
    established: 1978,
  },
  {
    id: 2,
    name: 'Hotel Shadab',
    tagline: 'Old City Royalty & Legendary Flavors',
    cuisine: 'Hyderabadi & Mughlai',
    description: 'Nestled near the historic Charminar, Hotel Shadab carries forward generations of authentic Mughlai, rich dum biryani, and slow-cooked Nahari heritage.',
    whyWePicked: 'For authentic Old City soul — their mutton biryani and slow-simmered gravies bring an unmatched depth to any feast.',
    established: 1953,
  },
  {
    id: 3,
    name: 'Maharaja Chat',
    tagline: 'The Ultimate Street Food Master',
    cuisine: 'Street Food & Chaat',
    description: 'Hyderabad\'s premier destination for artisanal chaat, crispy pani puri, rich pav bhaji, and vibrant street snacks crafted with pure ingredients.',
    whyWePicked: 'Brings high-energy, vibrant chaat counters that guests flock to during cocktail hours and family parties.',
    established: 1996,
  },
  {
    id: 4,
    name: 'Samosa King',
    tagline: 'Crispy, Flavour-Packed Starters',
    cuisine: 'Appetizers & Snacks',
    description: 'Famous across the city for handcrafted specialty samosas, crunchy golden corn and paneer pockets, and irresistible party appetizers.',
    whyWePicked: 'Crisp, hot, and crowd-pleasing starters that get every celebration started on the right note.',
    established: 2008,
  },
  {
    id: 5,
    name: 'Ice Berg Ice Creams',
    tagline: 'Artisanal Natural Scoops',
    cuisine: 'Desserts & Ice Creams',
    description: 'Pioneers of organic, handcrafted rolled and artisanal ice creams made with fresh seasonal fruits and premium dairy.',
    whyWePicked: 'The ultimate refreshing dessert station for weddings, birthdays, and summer celebrations.',
    established: 2012,
  },
  {
    id: 6,
    name: 'The Thick Shake Factory',
    tagline: 'Rich, Decadent Shakes & Coolers',
    cuisine: 'Beverages & Shakes',
    description: 'India\'s premium thick shake brand, crafting thick, velvety Belgian chocolate, Ferrero, and exotic fruit shakes.',
    whyWePicked: 'A hit with guests of all ages, delivering a modern dessert and beverage counter to your gathering.',
    established: 2013,
  },
  {
    id: 7,
    name: 'Almond House',
    tagline: 'Purity, Heritage & Royal Mithai',
    cuisine: 'Royal Indian Sweets',
    description: 'Master confectioners renowned for pure ghee Bisticks, Badam Halwa, Kaju Katli, and exquisite festive mithai hampers.',
    whyWePicked: 'Celebrated across generations for uncompromising purity and luxurious festive sweet platters.',
    established: 1989,
  },
  {
    id: 8,
    name: 'Manam Chocolate',
    tagline: 'Award-Winning Craft Indian Cacao',
    cuisine: 'Artisanal Confectionery',
    description: 'Internationally celebrated single-origin Indian craft chocolate makers crafting exquisite tablets, truffles, and cacao delicacies.',
    whyWePicked: 'Adds a bespoke, luxury gourmet confectionery touch to high-end celebrations and wedding gifts.',
    established: 2022,
  },
  {
    id: 9,
    name: 'Karachi Bakery',
    tagline: 'Generations of Iconic Baking',
    cuisine: 'Bakes, Fruit Biscuits & Pastries',
    description: 'Globally renowned for its signature Tutti-Frutti Fruit Biscuits, plum cakes, cashew treats, and celebratory baked delights.',
    whyWePicked: 'A beloved household name that guests instantly recognize and adore.',
    established: 1953,
  },
  {
    id: 10,
    name: 'The Chocolate Room',
    tagline: 'Chocoholic Dreams & Fondue',
    cuisine: 'Dessert Lounges',
    description: 'Decadent chocolate fondues, lava cakes, waffles, and warm cocoa creations designed for dessert lovers.',
    whyWePicked: 'Creates an unforgettable live chocolate station that lights up birthday parties and cocktail nights.',
    established: 2007,
  },
  {
    id: 11,
    name: 'Dimmy Pan Palace',
    tagline: 'The Signature Royal Paan Experience',
    cuisine: 'Paan & After-Mints',
    description: 'Hyderabad\'s most famous paan institution, crafting artisanal Meetha Paan, Chocolate Paan, and royal mouth fresheners.',
    whyWePicked: 'The timeless royal finish to every authentic Hyderabadi banquet feast.',
    established: 1995,
  },
  {
    id: 12,
    name: 'Paradise',
    tagline: 'The Crown Jewel of Hyderabadi Dum Biryani',
    cuisine: 'Hyderabadi',
    description: 'Since 1953, Paradise has set the gold standard for celebratory Hyderabadi Dum Biryani with slow-steamed basmati and tender cuts.',
    whyWePicked: 'No grand celebration is complete without the world-renowned aroma of Paradise Dum Biryani.',
    established: 1953,
  },
];

export const dishes = [
  // Cafe Niloufer
  { id: 1, brandId: 1, name: 'Special Niloufer Irani Chai', category: 'Beverage', description: 'Thick, creamy, scalded milk tea brewed with signature Niloufer spice blend.', pricePerHead: 60, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 2, brandId: 1, name: 'Fresh Bun Maska & Malai', category: 'Starter', description: 'Soft oven-baked sourdough buns slathered with rich homemade butter and clotted cream.', pricePerHead: 90, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 3, brandId: 1, name: 'Artisanal Osmania Biscuits', category: 'Dessert', description: 'Buttery, crumbly, lightly salted traditional tea biscuits baked fresh.', pricePerHead: 50, isVeg: true, isSignature: true, servesMin: 10 },

  // Hotel Shadab
  { id: 4, brandId: 2, name: 'Shadab Royal Mutton Dum Biryani', category: 'Biryani', description: 'Old City-style slow-cooked mutton biryani layered with long-grain basmati and whole spices.', pricePerHead: 320, isVeg: false, isSignature: true, servesMin: 10 },
  { id: 5, brandId: 2, name: 'Slow-Simmered Mutton Haleem', category: 'Main Course', description: 'Overnight cooked broken wheat, lentils, and meat stew rich in country ghee and roasted cashews.', pricePerHead: 240, isVeg: false, isSignature: true, servesMin: 10 },
  { id: 6, brandId: 2, name: 'Traditional Handi Nahari', category: 'Main Course', description: 'Spiced bone-marrow shank stew simmered on slow embers, served with butter naan.', pricePerHead: 260, isVeg: false, isSignature: true, servesMin: 10 },

  // Maharaja Chat
  { id: 7, brandId: 3, name: 'Special Dahi Puri Platter', category: 'Starter', description: 'Crisp puris stuffed with spiced potatoes, sweet yogurt, tamarind chutney, and fine sev.', pricePerHead: 110, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 8, brandId: 3, name: 'Maharaja Sev Batata Puri', category: 'Starter', description: 'Flat puris topped with seasoned diced potatoes, raw mango, trio of chutneys, and roasted spices.', pricePerHead: 100, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 9, brandId: 3, name: 'Butter Pav Bhaji Counter', category: 'Main Course', description: 'Mashed vegetable gravy simmered in butter and special spices, served with toasted pav buns.', pricePerHead: 140, isVeg: true, isSignature: true, servesMin: 10 },

  // Samosa King
  { id: 10, brandId: 4, name: 'Crispy Corn Cheese Samosa', category: 'Starter', description: 'Golden flaky pastry parcels filled with sweet corn, molten cheese, and green herbs.', pricePerHead: 90, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 11, brandId: 4, name: 'Hyderabadi Spiced Kheema Samosa', category: 'Starter', description: 'Crisp triangular pastries stuffed with minced spiced mutton and fresh mint.', pricePerHead: 120, isVeg: false, isSignature: true, servesMin: 10 },
  { id: 12, brandId: 4, name: 'Paneer Tikka Cocktail Samosa', category: 'Starter', description: 'Bite-sized crisp samosas filled with tandoori spiced paneer and roasted cumin.', pricePerHead: 95, isVeg: true, isSignature: true, servesMin: 10 },

  // Ice Berg Ice Creams
  { id: 13, brandId: 5, name: 'Organic Fresh Sitaphal Scoop', category: 'Dessert', description: 'Handcrafted natural ice cream made with real custard apple pulp and organic milk.', pricePerHead: 120, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 14, brandId: 5, name: 'Tender Coconut & Honey Cream', category: 'Dessert', description: 'Fresh tender coconut malai blended into silky cream with natural wild honey.', pricePerHead: 130, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 15, brandId: 5, name: 'Belgian Dark Chocolate Roll', category: 'Dessert', description: 'Rich 70% dark chocolate rolled live on chilled stone with cocoa nibs.', pricePerHead: 140, isVeg: true, isSignature: true, servesMin: 10 },

  // The Thick Shake Factory
  { id: 16, brandId: 6, name: 'Belgian Chocolate Thick Shake', category: 'Beverage', description: 'Ultra-thick gourmet chocolate shake blended with dark fudge and chocolate pearls.', pricePerHead: 150, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 17, brandId: 6, name: 'Alphonso Mango Cream Shake', category: 'Beverage', description: 'Real Alphonso mango pulp blended with rich vanilla cream and crushed nuts.', pricePerHead: 140, isVeg: true, isSignature: true, servesMin: 10 },

  // Almond House
  { id: 18, brandId: 7, name: 'Signature Almond Bisticks', category: 'Dessert', description: 'The legendary crunchy, buttery almond confectionery exclusive to Almond House.', pricePerHead: 180, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 19, brandId: 7, name: 'Pure Ghee Badam Halwa', category: 'Dessert', description: 'Rich, slow-roasted California almond halwa cooked with pure cow ghee and saffron.', pricePerHead: 190, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 20, brandId: 7, name: 'Shahi Kaju Katli Platter', category: 'Dessert', description: 'Melt-in-mouth diamond cashew fudge made with whole Goan cashews.', pricePerHead: 160, isVeg: true, isSignature: true, servesMin: 10 },

  // Manam Chocolate
  { id: 21, brandId: 8, name: 'Single Origin Cacao Truffles', category: 'Dessert', description: 'Bespoke hand-rolled truffles infused with South Indian spices and raw cacao.', pricePerHead: 220, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 22, brandId: 8, name: 'Craft Chocolate Tasting Board', category: 'Dessert', description: 'Selection of 65% to 75% dark chocolate bars with roasted nuts and sea salt.', pricePerHead: 200, isVeg: true, isSignature: true, servesMin: 10 },

  // Karachi Bakery
  { id: 23, brandId: 9, name: 'Original Karachi Fruit Biscuits', category: 'Dessert', description: 'The world-famous crumbly biscuits studded with candied papaya and cardamom.', pricePerHead: 60, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 24, brandId: 9, name: 'Cashew Pista Cookies Platter', category: 'Dessert', description: 'Rich roasted dry fruit shortbread cookies freshly baked.', pricePerHead: 75, isVeg: true, isSignature: true, servesMin: 10 },

  // Dimmy Pan Palace
  { id: 25, brandId: 11, name: 'Special Meetha Pan Counter', category: 'Dessert', description: 'Fresh Betel leaf wrapped with aromatic gulkand, tuti-frutti, menthol, and silver vark.', pricePerHead: 50, isVeg: true, isSignature: true, servesMin: 10 },
  { id: 26, brandId: 11, name: 'Belgian Chocolate Paan', category: 'Dessert', description: 'Sweet paan coated in gourmet dark chocolate and chilled sprinkles.', pricePerHead: 70, isVeg: true, isSignature: true, servesMin: 10 },

  // Paradise
  { id: 27, brandId: 12, name: 'Royal Chicken Dum Biryani', category: 'Biryani', description: 'The world-famous aromatic saffron dum biryani with tender chicken and mirchi ka salan.', pricePerHead: 260, isVeg: false, isSignature: true, servesMin: 10 },
  { id: 28, brandId: 12, name: 'Paradise Chicken 65', category: 'Starter', description: 'Crisp, fiery deep-fried chicken tossed with curry leaves and roasted Nizami spices.', pricePerHead: 190, isVeg: false, isSignature: true, servesMin: 10 },
];

export const occasions = [
  { id: 1, name: 'Birthday Celebration', icon: '🎂', description: 'Your favorite food brands delivered for a memorable birthday feast' },
  { id: 2, name: 'Family Gathering', icon: '👨‍👩‍👧‍👦', description: 'Bring the family together over beloved signature dishes' },
  { id: 3, name: 'Weddings & Receptions', icon: '💒', description: 'Curated multi-brand banquet feasts tailored for your guests' },
  { id: 4, name: 'Corporate Events & Galas', icon: '💼', description: 'Impress clients and teams with iconic food brands in one seamless order' },
  { id: 5, name: 'House Parties & Socials', icon: '🏠', description: 'Skip the multi-app chaos — one curated spread from multiple brands' },
  { id: 6, name: 'Festive Celebrations', icon: '✨', description: 'Celebrate festive traditions with authentic regional food legends' },
];

export const getBrandById = (id) => brands.find(b => b.id === id);
export const getDishesByBrand = (brandId) => dishes.filter(d => d.brandId === brandId);
export const getDishById = (id) => dishes.find(d => d.id === id);
