import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 px-6 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className=" text-sm capitalize italic text-slate-500">
        {isLoadingIngredients ? 'loading...' : ingredients.join(',')}
      </p>
    </li>
  );
}

export default OrderItem;
