import Container from "./Container";
import MainTitle from "./MainTitle";
import { getCategories } from "../_services/apiCategories";
import CategoryCard from "./CategoryCard";

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <div className="my-20 lg:my-30">
      <MainTitle title = "Browse by Sport" description="Choose from our wide selection of sports venues"/>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((cur) => <CategoryCard key={cur._id} category={cur}/>)}
        </div>
      </Container>
    </div>
  );
}
