// import Container from "./Container";
// import MainTitle from "./MainTitle";
// import Button from "./Button";
// import { HiArrowRight } from "react-icons/hi2";
// import { getFields } from "../_services/apiFields";
// import FieldCard from "./FieldCard";
// import Link from "next/link";

// export default async function FeaturedFieldsSection() {
//   const fields = await getFields(5);
//   return (
//     <div className="py-20 bg-foreground" id="fields">
//       <Container>
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <MainTitle
//             title="Featured Fields"
//             description="Our most popular this month"
//             customStyles="text-start"
//           />
//           <Button
//             title="View All"
//             icon={<HiArrowRight />}
//             type="main"
//             href="fields"
//             additionalStyles="text-base justify-between !py-3 !px-5 hidden md:flex md:mb-10 lg:mb-0"
//           />
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
//           {fields?.map((cur) => (
//             <Link key={cur._id} href={`fields/${cur._id}`}>
//               <FieldCard field={cur} />
//             </Link>
//           ))}
//         </div>
//         <Button
//           title="View All"
//           icon={<HiArrowRight />}
//           type="main"
//           additionalStyles="text-base justify-between !py-3 !px-5 md:hidden mt-10 flex mx-auto"
//         />
//       </Container>
//     </div>
//   );
// }
import { getFields } from "../_services/apiFields";
import { Field } from "../_interfaces/IField";
import FeaturedFieldsClient from "./FeaturedFieldsClient";

export default async function FeaturedFieldsSection() {
  const fields: Field[] = await getFields(5);
  return <FeaturedFieldsClient fields={fields} />;
}
