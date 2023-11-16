const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>
          Explora nuestra galeria de adopcion de perros para encontrar a tu
          companero perfecto. Tenemos una varieadad de perros con diferentes
          personalidades y tamaños, todos en busca de un hogar amoroso. Cada
          imagen capturasu esencia unica. Adopta un perro y brindale una segunda
          oportunidad. Encuentra a tu companero peludo para siempre
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
