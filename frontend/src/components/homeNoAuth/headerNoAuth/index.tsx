import { Container, Button } from "reactstrap";
import Link from "next/link";
import styles from "./styles.module.scss";

const HeaderNoAuth = function () {
  return (
    <>
      <div className={styles.ctaSection}>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
        <p>Cadastre-se para ter acesso aos cursos</p>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
      </div>
      <Container className={styles.nav}>
        <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />
        <div>
          <Link href="/login">
            <Button outline className={styles.navBtn}>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button outline className={styles.navBtn}>
              Quero fazer parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
