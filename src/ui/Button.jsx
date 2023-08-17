import { Link } from 'react-router-dom';

function Button({ children, to, type, onClick }) {
  const base =
    'inline-block rounded-md bg-blue-500 px-4 py-2 text-slate-50 transition-colors duration-300 hover:bg-blue-600';

  const styles = {
    primary: base,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
