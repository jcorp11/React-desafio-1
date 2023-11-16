function Header({ title }) {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  );
}

const styles = {
  header: {
    margin: "20px 0 0 0",
  },
};

export default Header;
