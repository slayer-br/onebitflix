import useSWR from "swr";
import categoriesService from "@/services/categoriesServices";
import PageSpinner from "@/components/common/spinner";
import SlideComponent from "@/components/common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";

interface props {
  categoryId: number;
  categoryName: string;
}
const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () => categoriesService.getCourses(categoryId));

  if (error) return error;

  if (!data || !data.data || !Array.isArray(data.data.courses)) {
    return <PageSpinner />;
  }

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;
