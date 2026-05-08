import { Category } from "../_interfaces/ICategory";

export default function CategoryCard({ category }:{category:Category}) {
  const { name, image } = category;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative hover:scale-105 transition after:bg-black/20 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-2xl rounded-2xl min-h-60 w-full flex items-end px-5 py-7"
    >
      <p className="text-white font-bold text-2xl z-40 tracking-wide">{name}</p>
    </div>
  );
}
