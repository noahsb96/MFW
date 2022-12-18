import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ShopContext } from "../../../context/shopContext";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

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
      <Box>
        <Grid templateColumns="repeat(3, 1fr)">
          {products.slice(0, 6).map((product) => (
            <Link to={`/merch/${product.handle}`} key={product.title}>
            <Box _hover={{ opacity: '80%'}} textAlign="left">
              <Image id="product-image" src={product.images[0].src} />

              <Text>{product.title}</Text>
              <Text>
                ${product.variants[0].price.amount[0]}
                {product.variants[0].price.amount[1]}
              </Text>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
