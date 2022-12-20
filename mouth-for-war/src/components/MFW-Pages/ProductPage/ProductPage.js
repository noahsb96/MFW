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
      <Flex ml="20em" mt="8em" mb="5em">
        <Grid templateColumns="repeat(2, 1fr)" />
        <Image h={500} w={500} src={product.images[0].src} />
        <Box ml="10em">
          <Heading id="heading" fontSize="3em" mb="1em">{product.title}</Heading>
          <Text fontSize="2em" mb="1em">
            ${product.variants[0].price.amount[0]}
            {product.variants[0].price.amount[1]}
          </Text>
          <Text fontSize="1.5em" mb="2em" mr="5em">{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            <Text color="black">Add To Cart</Text>
          </Button>
        </Box>
      </Flex>
      <Footer id="product-page-footer" />
    </>
  );
};

export default ProductPage;
