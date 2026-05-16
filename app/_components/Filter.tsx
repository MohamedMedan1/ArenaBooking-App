"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function Filter({
  filterName,
  filterKey,
  filterItems,
}: {
  filterName: string;
  filterKey: string;
  filterItems: any[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilter(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(filterKey, term);
    } else {
      params.delete(filterKey);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const baseStyles =
    "px-6 py-1.5 cursor-pointer font-semibold transition rounded-full";
  const activeStyles = "text-white bg-brand-green";
  const idleStyles = "text-secondary hover:bg-background";

  const category = searchParams.get(filterKey) || "all";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <HiAdjustmentsHorizontal className="text-brand-green" size={23} />
        <p className="text-primary font-bold text-xl">Filter by{filterName}</p>
      </div>

      <ul className="flex flex-wrap items-center gap-5">
        <li
          className={`${baseStyles} ${category === "all" ? activeStyles : idleStyles} `}
          onClick={() => handleFilter("all")}
        >
          All
        </li>
        {filterItems?.map((cur) => (
          <li
            key={cur._id}
            className={`${baseStyles} ${category === cur._id ? activeStyles : idleStyles}`}
            onClick={() => handleFilter(cur._id)}
          >
            {cur.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
