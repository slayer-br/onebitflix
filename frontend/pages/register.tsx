import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/components/common/footer";

const Register = function () {
  return (
    <>
      <Head>
        <title>Onebitflix | Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js" defer></script>
      </Head>
      <main>
        <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem vindo(a) ao OneBitFlix!</p>
          <Form className={styles.form}>
            <p className={styles.formSubTitle}>
              <strong>Faça seu cadastro</strong>
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                Nome
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Qual o seu nome?"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className={styles.label}>
                Sobrenome
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Qual o seu sobrenome?"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" className={styles.label}>
                WhatsApp / Telegram
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Qual seu melhor e-mail?"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="birth" className={styles.label}>
                Data de nascimento
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2020-12-31"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                Confirme sua senha
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              Cadastrar
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Register;
