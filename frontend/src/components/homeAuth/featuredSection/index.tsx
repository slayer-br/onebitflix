import styles from "./styles.module.scss";
import useSWR from "swr";
import courseService, { CourseType } from "../../../services/courseService";
import PageSpinner from "../../common/spinner";
import HeaderAuth from "@/components/common/headerAuth";
import { Container, Button } from "reactstrap";
import Link from "next/link";

const FeaturedSection = function () {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data) return <PageSpinner />;
  return (
    <>
      {data.data?.map((course: CourseType) => (
        <div
          key={course.id}
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "480px",
          }}
        >
          <HeaderAuth />
          <Container>
            <p className={styles.title}>{course.name}</p>
            <p className={styles.description}>{course.synopsis}</p>
            <Link href={`/courses/${course.id}`} className={styles.link}>
              <Button outline color="light" className={styles.button}>
                Acesse agora!
                <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg} />
              </Button>
            </Link>
          </Container>
        </div>
      ))[0]}
    </>
  );
};

export default FeaturedSection;
