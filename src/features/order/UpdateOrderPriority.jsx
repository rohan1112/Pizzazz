import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrderPriority() {
  const Fetcher = useFetcher();

  return (
    <Fetcher.Form method="PATCH" className="text-right">
      <Button type="small">Make Priority</Button>
    </Fetcher.Form>
  );
}

export default UpdateOrderPriority;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
