import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="text-xl font-medium uppercase tracking-wide">
      Blog
    </Link>
  );
}

export default Logo;
