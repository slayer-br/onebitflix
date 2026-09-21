import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
  return (
    <>
      <p className={styles.sectionTitle}>o que vc vai acesar</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>front-end</p>
          <p className={styles.cardDesciption}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>back-end</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>mobile</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>git e github</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>projetos</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>carreira</p>
          <p className={styles.cardDescription}>
            O Onebitcode Black é o lugar para você evoluir. Para isso, você vai ter acesso às práticas avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico necessário para ser um sênior na
            programação.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
