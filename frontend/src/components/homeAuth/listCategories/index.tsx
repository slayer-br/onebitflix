import useSWR from "swr";
import categoriesService, { CategoryType } from "../../../services/categoriesServices";
import PageSpinner from "@/components/common/spinner";
import ListCategoriesSlide from "../listCategoriesSlides";

const ListCategories = function () {
  const { data, error } = useSWR("/listCategories", categoriesService.getCategories);
  if (error) return error;

  if (!data || !data.data || !Array.isArray(data.data.categories)) {
    return <PageSpinner />;
  }

  return (
    <>
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name} />
      ))}
    </>
  );
};

export default ListCategories;
