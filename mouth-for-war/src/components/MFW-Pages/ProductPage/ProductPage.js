import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../../../context/shopContext";
import Header from "../../Header/Header";
import Cart from "../../Cart/Cart";
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import Footer from "../../Footer/Footer";

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Cart />
      <Box>
        <Grid templateColumns="repeat(2, 1fr)" />
        <Image h={500} w={500} src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>
            ${product.variants[0].price.amount[0]}
            {product.variants[0].price.amount[1]}
          </Text>
          <Text>{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            <Text color="black">Add To Cart</Text>
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
