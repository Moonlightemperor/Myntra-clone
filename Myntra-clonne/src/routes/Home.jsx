import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log('Items:', items); // Log items to debug
  return (
    <>
      <main>
        <div class="items-container">
          {items.map((item) => (
            <HomeItem item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
