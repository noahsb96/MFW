import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Grid,
  Flex,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  console.log(checkout);

  return (
    <div>
      <>
        <Drawer
          isOpen={isCartOpen}
          placement="right"
          onClose={closeCart}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize="2em">Your Shopping Cart</DrawerHeader>

            <DrawerBody color="black">
              {checkout.lineItems?.length ? (
                checkout.lineItems.map((item) => (
                  <Grid
                    templateColumns="repeat(4, 1fr)"
                    gap={1}
                    key={item.id}
                    border="3px solid black"
                    mb="2em"
                  >
                    <Flex alignItems="center" justifyContent="center">
                      <CloseIcon
                        cursor="pointer"
                        onClick={() => removeLineItem(item.id)}
                      />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Image src={item.variant.image.src} />
                    </Flex>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      ml="1.5em"
                    >
                      <Text fontSize="1.2em" textAlign="center">
                        {item.title}
                      </Text>
                    </Flex>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      ml="-1em"
                      fontSize="1.2em"
                    >
                      <Text>
                        ${item.variant.price.amount[0]}
                        {item.variant.price.amount[1]}
                      </Text>
                    </Flex>
                  </Grid>
                ))
              ) : (
                <Box h="100%" w="100%">
                  <Text
                    h="100%"
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Your Cart is empty!
                  </Text>
                </Box>
              )}
            </DrawerBody>

            {checkout.lineItems?.length ? (
              <DrawerFooter>
                <Button w="100%">
                  <Link color="black" w="100%" href={checkout.webUrl}>
                    Checkout
                  </Link>
                </Button>
              </DrawerFooter>
            ) : null}
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Cart;
