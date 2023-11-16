const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>
          Explora nuestra galería de adopción de perros para encontrar a tu
          compañero perfecto. Tenemos una variedad de perros con diferentes
          personalidades y tamaños, todos en busca de un hogar amoroso. Cada
          imagen captura su esencia única. Adopta un perro y brindale una
          segunda oportunidad. Encuentra a tu compañero peludo para siempre.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0 10px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

export default Footer;
