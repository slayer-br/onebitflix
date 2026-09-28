import Head from "next/head";
import styles from "../styles/profile.module.scss";
import { Button, Container, Col, Row } from "reactstrap";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import Footer from "@/components/common/footer";
const UserInfo = function () {
  return (
    <>
      <Head>
        <title>Onebitflix | Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button className={styles.renderFormBtn}>Dados pessoais</Button>
              <Button className={styles.renderFormBtn}>Senha</Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default UserInfo;
