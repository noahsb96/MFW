import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ShopContext } from "../../../context/shopContext";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <img
        src="https://i.imgur.com/rsokXOF.jpg"
        alt="home-pic"
        id="home-pic"
        width="100%"
      ></img>
      {products.map((product) => (
        <h1>{product.title}</h1>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
