import { getFields } from "../../_services/apiFields";
import { getCategories } from "../../_services/apiCategories";
import { Metadata } from "next";
import FieldsListing from "../../_components/fields/FieldsListing";

export const metadata: Metadata = {
  title: "All Fields",
  description: "Browse the list of available sports fields, compare prices, and check facilities.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const queryStr = category && category !== "all" ? { category } : {};

  const fields = await getFields(queryStr);
  const categories = await getCategories();

  return (
    <FieldsListing fields={fields} categoriesData={categories} />
  );
}
