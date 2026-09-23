import SlideComponent from "@/components/common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import PageSpinner from "@/components/common/spinner";
import courseService from "@/services/courseService";
import useSWR from "swr";

const NewestCategory = function () {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses);

  if (error) return error;
  if (!data || !Array.isArray(data.data)) {
    return <PageSpinner />;
  }
  return (
    <>
      <p className={styles.titleCategory}>Lançamentos</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default NewestCategory;
