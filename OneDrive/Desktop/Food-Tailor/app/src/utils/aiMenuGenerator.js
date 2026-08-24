// AI Menu Generator — selects a curated multi-brand menu based on occasion, guests, budget
import { brands, dishes, getDishesByBrand } from '../data/seedData';

/**
 * Generates 3 AI-curated menu packages based on event parameters.
 * Each package pulls signature dishes from multiple brands.
 */
export function generateMenuRecommendations({ occasion, guestCount, budgetPerHead, dietaryPreference }) {
  const allDishes = [...dishes];

  // Filter by dietary preference
  const filteredDishes = dietaryPreference === 'veg'
    ? allDishes.filter(d => d.isVeg)
    : dietaryPreference === 'non-veg'
      ? allDishes.filter(d => !d.isVeg)
      : allDishes;

  // Sort by signature quality and price fit
  const sortedByValue = [...filteredDishes].sort((a, b) => {
    const aPriceFit = Math.abs(a.pricePerHead - budgetPerHead * 0.3);
    const bPriceFit = Math.abs(b.pricePerHead - budgetPerHead * 0.3);
    return aPriceFit - bPriceFit;
  });

  // Build 3 different menus with different strategies
  const packages = [
    buildPackage('Curated Signature', sortedByValue, guestCount, budgetPerHead, 'balanced', occasion),
    buildPackage('Royal Feast', sortedByValue, guestCount, budgetPerHead, 'premium', occasion),
    buildPackage('Artisanal Express', sortedByValue, guestCount, budgetPerHead, 'value', occasion),
  ];

  return packages;
}

function buildPackage(name, availableDishes, guestCount, budgetPerHead, strategy, occasion) {
  const totalBudget = guestCount * budgetPerHead;
  let selected = [];
  let usedBrandIds = new Set();
  let runningCost = 0;

  // Strategy multipliers
  const priceMultiplier = strategy === 'premium' ? 1.3 : strategy === 'value' ? 0.75 : 1.0;
  const targetPerHead = budgetPerHead * priceMultiplier;
  const targetDishCount = strategy === 'premium' ? 7 : strategy === 'value' ? 4 : 5;

  // Prioritize variety — pick from different brands
  const categorized = {
    'Biryani': [],
    'Starter': [],
    'Main Course': [],
    'Dessert': [],
    'Beverage': [],
  };

  availableDishes.forEach(d => {
    if (categorized[d.category]) {
      categorized[d.category].push(d);
    }
  });

  // Must have at least one biryani for a Hyderabadi event
  if (categorized['Biryani'].length > 0) {
    const biryaniPick = strategy === 'premium'
      ? categorized['Biryani'].reduce((a, b) => a.pricePerHead > b.pricePerHead ? a : b)
      : categorized['Biryani'][0];
    selected.push(biryaniPick);
    usedBrandIds.add(biryaniPick.brandId);
    runningCost += biryaniPick.pricePerHead;
  }

  // Add starters
  const starters = categorized['Starter'].filter(d => !usedBrandIds.has(d.brandId) || strategy === 'premium');
  if (starters.length > 0) {
    const pick = starters[Math.floor(Math.random() * starters.length)];
    selected.push(pick);
    usedBrandIds.add(pick.brandId);
    runningCost += pick.pricePerHead;
  }

  // Add main courses — try from different brands
  const mains = categorized['Main Course']
    .filter(d => !selected.find(s => s.id === d.id))
    .sort(() => Math.random() - 0.5);

  for (const dish of mains) {
    if (selected.length >= targetDishCount) break;
    if (runningCost + dish.pricePerHead <= targetPerHead * 1.2) {
      selected.push(dish);
      usedBrandIds.add(dish.brandId);
      runningCost += dish.pricePerHead;
    }
  }

  // Add dessert if budget allows
  const desserts = categorized['Dessert'];
  if (desserts.length > 0 && selected.length < targetDishCount) {
    selected.push(desserts[0]);
    runningCost += desserts[0].pricePerHead;
  }

  // Add beverage if budget allows
  const beverages = categorized['Beverage'];
  if (beverages.length > 0 && selected.length < targetDishCount && strategy !== 'value') {
    selected.push(beverages[0]);
    runningCost += beverages[0].pricePerHead;
  }

  // Calculate totals
  const perHead = selected.reduce((sum, d) => sum + d.pricePerHead, 0);
  const totalEstimate = perHead * guestCount;
  const brandCount = new Set(selected.map(d => d.brandId)).size;

  // Confidence score based on how well we matched the budget
  const budgetMatch = 1 - Math.abs(perHead - budgetPerHead) / budgetPerHead;
  const confidence = Math.max(0.65, Math.min(0.98, budgetMatch + 0.1));

  const descriptions = {
    'Curated Signature': 'A balanced selection of signature dishes from across Hyderabad\'s finest kitchens — the perfect mix of heritage and flavor.',
    'Royal Feast': 'Premium picks for a grand occasion — Nizami specialties, heritage biryanis, and indulgent desserts.',
    'Artisanal Express': 'Smart, crowd-pleasing picks that deliver maximum flavor within a focused budget.',
  };

  return {
    name,
    description: descriptions[name],
    items: selected.map(d => ({
      ...d,
      brandName: brands.find(b => b.id === d.brandId)?.name || 'Unknown',
      quantity: guestCount,
    })),
    perHead,
    totalEstimate,
    brandCount,
    confidence: Math.round(confidence * 100),
    guestCount,
  };
}

/**
 * Get alternative dishes for swapping
 */
export function getAlternatives(currentDish, allItems) {
  return dishes.filter(d =>
    d.id !== currentDish.id &&
    d.category === currentDish.category &&
    !allItems.find(item => item.id === d.id)
  ).map(d => ({
    ...d,
    brandName: brands.find(b => b.id === d.brandId)?.name || 'Unknown',
  }));
}
