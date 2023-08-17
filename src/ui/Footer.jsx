import Container from './Container';

function Footer() {
  return (
    <footer className="bg-slate-950 py-4 text-slate-50">
      <Container>
        <p>Blog {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export default Footer;
