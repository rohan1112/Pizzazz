import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center sm:my-16  ">
      <h1 className=" mb-8 text-center text-xl font-semibold sm:mb-10 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Order Now
        </Button>
      )}
    </div>
  );
}

export default Home;
