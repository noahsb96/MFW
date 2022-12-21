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
      <Box mt="2em" mb="4em" justifyContent="center" display="flex">
        <Grid templateColumns="repeat(3, 1fr)">
          {products.slice(0, 6).map((product) => (
            <Box m="2em" textAlign="left">
              <Link to={`/merch/${product.handle}`} key={product.title}>
                <Image
                  id="product-image"
                  _hover={{ opacity: "80%" }}
                  src={product.images[0].src}
                />
              </Link>
              <Text fontSize="2em" ml="1em">
                {product.title}
              </Text>
              <Text fontSize="2em" ml="1em">
                ${product.variants[0].price.amount[0]}
                {product.variants[0].price.amount[1]}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
