import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <div className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:border-b-2 sm:border-stone-300 sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizzazz
      </Link>
      <div className="flex items-center gap-2">
        <SearchOrder></SearchOrder>
        <Username />
      </div>
    </div>
  );
}

export default Header;
