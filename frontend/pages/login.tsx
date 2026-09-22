import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/components/common/headerGeneric";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/components/common/footer";
import { SyntheticEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ToastComponent from "@/components/common/toast";
import authService from "@/services/authService";
const Login = function () {
  const router = useRouter();
  const [toastColor, setToastColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (router.query.registred === "true") {
      setToastColor("bg-success");
      setToastIsOpen(true);
      setToastMessage("Cadastro efetuado com sucesso");

      const timer = setTimeout(() => {
        setToastIsOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [router.query.registred]);

  const handleLogin = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/home");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("E-mail ou senha incorretos.");
    }
  };

  return (
    <>
      <Head>
        <title>Onebitflix | Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Quero fazer parte" />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem-vindo(a) de volta!</p>
          <Form className={styles.form} onSubmit={handleLogin}>
            <p className={styles.formSubTitle}>
              <strong>Faça o seu login</strong>
            </p>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Qual o seu email?"
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
                placeholder="Qual a sua senha?"
                required
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              ENTRAR
            </Button>
          </Form>
        </Container>
        <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage} />
        <Footer />
      </main>
    </>
  );
};

export default Login;
