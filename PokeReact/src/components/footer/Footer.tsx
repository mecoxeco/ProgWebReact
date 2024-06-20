import styles from "./footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} Página do Pokémon Squirtle. Todos os direitos
        reservados.
      </p>
      <a href="">Voltar para o topo</a>
      <a href="mailto:batata@mail.com">Contato via e-mail</a>
      <a href="">Telefone: (55) 5555-5555</a>
    </footer>
  );
}

export default Footer;
