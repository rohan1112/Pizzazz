import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname =
    'px-2 text-sm text-blue-500 hover:cursor-pointer hover:underline';

  if (to === '-1')
    return <button className={classname} onClick={() => navigate(-1)}></button>;
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}

export default LinkButton;
