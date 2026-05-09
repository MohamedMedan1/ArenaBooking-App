import { HiOutlineUsers,HiMiniStar  } from "react-icons/hi2";
import { Field } from "../_interfaces/IField";

export default function FieldCard({ field }: { field: Field }) {
  const { name, image, capacity, pricePerHour, rating, category } = field;
  return (
    <div className="relative w-full h-96 rounded-2xl shadow-md hover:-translate-y-1.5 hover:shadow-2xl transition">
      
      <div className="absolute right-3 top-3 bg-chart-2 rounded-full px-3 py-1 text-white text-sm font-semibold">{category.name}</div>

      <div
        className="w-full h-1/2 rounded-t-2xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}></div>

      <div className="py-5 px-7 flex flex-col gap-4">
      
        <p className="font-bold text-2xl">{name}</p>
      
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiMiniStar className="text-chart-4" size={24} />
            <p className="font-semibold">{rating}</p>
          </div>
          <div>
            <p className="font-bold text-chart-2 text-2xl">${pricePerHour}</p>
            <span className="text-gray-600 text-sm">perHour</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-semibold text-sm text-gray-600">
          <HiOutlineUsers size={20} />
          <p>{capacity} <span>players</span></p>
        </div>

      </div>
    </div>
  );
}
