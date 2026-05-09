import Container from "../../_components/Container";
import { FaSearch } from "react-icons/fa";
import { getFields } from "../../_services/apiFields";
import FieldCard from "../../_components/FieldCard";
import Filter from "../../_components/Filter";
import { getCategories } from "../../_services/apiCategories";
import Link from "next/link";

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
    <div className="min-h-lvh">
      <div className="bg-linear-to-br from-[#10B981] to-[#1E3A8A] mt-21 py-14">
        <Container>
          <p className="text-white text-3xl md:text-4xl font-bold">
            Explore Sports Venues
          </p>
          <div className="relative">
            <FaSearch
              className="absolute bottom-4 left-4 text-gray-400"
              size={15}
            />
            <input
              type="text"
              placeholder="Search by name or sport..."
              className="mt-10 bg-white px-10 py-3 w-full rounded-lg shadow-md outline-offset-2 outline-gray-400 placeholder:text-sm placeholder:font-medium"
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-20 flex flex-col gap-5">
          <Filter
            filterName="Sport"
            filterKey="category"
            filterItems={categories}
          />
          {fields.length > 0 ? (
            <>
              <p className="font-medium text-gray-600 ">
                Showing {fields.length} fields
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {fields.map((cur) => (
                  <Link key={cur._id} href={`fields/${cur._id}`}>
                    <FieldCard field={cur} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="font-medium text-gray-600">There is no fields yet</p>
          )}
        </div>
      </Container>
    </div>
  );
}
