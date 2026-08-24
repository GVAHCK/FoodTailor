// API wrapper — falls back to local seed data when backend is not available
import { brands as seedBrands, dishes as seedDishes, getDishesByBrand } from '../data/seedData';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

async function fetchWithFallback(url, fallback) {
  try {
    const res = await fetch(`${API_BASE}${url}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    // Gracefully fall back to local seed data
    return fallback();
  }
}

export async function fetchBrands() {
  return fetchWithFallback('/brands', () => seedBrands);
}

export async function fetchBrandDishes(brandId) {
  return fetchWithFallback(`/brands/${brandId}/dishes`, () => getDishesByBrand(brandId));
}

export async function fetchAllDishes() {
  return fetchWithFallback('/dishes', () => seedDishes);
}

export async function submitMenuBuilder(data) {
  try {
    const res = await fetch(`${API_BASE}/menu-builder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    // Fall back to client-side AI generation
    const { generateMenuRecommendations } = await import('../utils/aiMenuGenerator');
    return generateMenuRecommendations(data);
  }
}

export async function submitOrder(orderData) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    // Return a mock confirmation for demo
    return {
      success: true,
      orderId: `FT-${Date.now().toString(36).toUpperCase()}`,
      message: 'Your event menu has been submitted. Our team will coordinate delivery.',
    };
  }
}
