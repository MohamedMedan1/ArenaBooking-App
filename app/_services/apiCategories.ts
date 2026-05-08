import { Category } from "../_interfaces/ICategory";

interface CategoriesResponse {
  status: string;
  data: Category[];
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch("https://arenabooking-api-production.up.railway.app/api/v1/categories");

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const { data }: CategoriesResponse = await res.json();
    return data;
    
  } catch (err) {
    console.error("Error fetching categories:", err);
    return []; 
  }
}