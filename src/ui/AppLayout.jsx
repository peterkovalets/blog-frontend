import Home from '../pages/Home';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>
        <Container>
          <Home />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
