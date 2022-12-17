import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ShopContext } from "../../../context/shopContext";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Cart />
      <img
        src="https://i.imgur.com/rsokXOF.jpg"
        alt="home-pic"
        id="home-pic"
        width="100%"
      ></img>
      <h1 id="merch-header">Merch</h1>
      <div id="merch-container">
        {products.slice(0, 6).map((product) => (
          <div id="merch-div">
            <Link to={`/merch/${product.handle}`} key={product.title}>
              <img id="product-image" src={product.images[0].src}></img>
            </Link>
            <div id="product-info">
              <h3>{product.title}</h3>
              <h3 id="price">
                ${product.variants[0].price.amount[0]}
                {product.variants[0].price.amount[1]}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
