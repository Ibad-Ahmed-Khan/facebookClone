import { Box, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const TicToe = () => {
  const length = 9;
  const [arr, setArr] = useState(Array(length).fill(null));
  const [toggle, setToggle] = useState(false);

  const handleBox = (index) => {
    const newArr = [...arr]; // Copy the current array
    setToggle(!toggle);
    newArr[index] = toggle ? "X" : "0"; // Update the clicked box with "X" (for now, you can add toggle logic for X/O later)
    setArr(newArr); // Update th
    console.log(newArr);
  };

  console.log(toggle);
  return (
    <SimpleGrid w="30rem" h="30rem" columns="3" border="3px solid">
      {arr.map((item, index) => {
        return (
          <Flex
            cursor="pointer"
            key={index}
            align="center"
            justify="center"
            border="3px solid"
            onClick={() => handleBox(index)}
          >
            <Text>{item}</Text>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};

export default TicToe;
