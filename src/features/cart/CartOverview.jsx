import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuanity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuanity) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>{totalCartQuanity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
