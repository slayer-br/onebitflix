import PageSpinner from "@/components/common/spinner";
import styles from "../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/slideComponent";

const FeaturedCategory = function () {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data || !Array.isArray(data.data)) {
    return <PageSpinner />;
  }

  return ( 
  <>
  <p className={styles.titleCategory}>EM DESTAQUE</p>
    <SlideComponent course={data.data} />
  </>
  )
};

export default FeaturedCategory;
