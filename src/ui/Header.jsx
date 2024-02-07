import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Pizzazz</Link>
      <SearchOrder></SearchOrder>
      <p>Username</p>
    </div>
  );
}

export default Header;
