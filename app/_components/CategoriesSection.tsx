import { getCategories } from "../_services/apiCategories";
import { Category } from "../_interfaces/ICategory";
import CategoriesClient from "./CategoriesClient";

export default async function CategoriesSection() {
  const categories: Category[] = await getCategories();
  return <CategoriesClient categories={categories} />;
}
