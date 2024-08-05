import Banner from "../components/Home/Banner";
import Product from "../components/Home/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-10">
        <Product />
      </div>
    </div>
  );
};

export default Home;
