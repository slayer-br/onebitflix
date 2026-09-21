import styles from "./styles.module.scss";
import { Container, Button } from "reactstrap";
import { CourseType } from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestCourses: CourseType[];
}
const SlideSection = function ({ newestCourses }: props) {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>Aulas já disponíveis</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Cadastre-se para acessar
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;
