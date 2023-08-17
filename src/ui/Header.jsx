import Container from './Container';
import Logo from './Logo';

function Header() {
  return (
    <header className="border-b border-slate-200 bg-slate-50 py-4">
      <Container>
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <Logo />
            </li>
            <li>
              <a
                href="#"
                className="rounded-md bg-blue-500 px-4 py-2 text-slate-50 transition-colors duration-300 hover:bg-blue-600"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
