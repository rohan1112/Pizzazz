import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex items-center justify-between py-3">
      <p className=" text-sm sm:mb-0 sm:text-base">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-center gap-3 sm:gap-6 ">
        <UpdateItemQuantity pizzaId={pizzaId} quantity={currQuantity} />
        <p className="text-sm font-bold sm:text-base">
          {formatCurrency(totalPrice)}
        </p>
      </div>
    </li>
  );
}

export default CartItem;
