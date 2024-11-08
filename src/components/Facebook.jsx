import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook, FaMeta, FaEye, FaEyeSlash } from "react-icons/fa6";

const Facebook = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      align="center"
      justify="space-around"
      fontWeight="300"
      minW="full"
      paddingInline="2rem"
      gap="2rem"
      bg="#F0F2F5"
    >
      <Text fontSize="0.875rem" color="#606770">
        English (UK)
      </Text>
      <FaFacebook size="3rem" color="#1877F2" /> {/* Facebook blue icon */}
      <VStack w="full" spacing="1rem">
        <Input
          h="3rem" // Approximately 48px height
          borderRadius="6px" // Slightly rounded
          type="text"
          placeholder="Mobile number or email address"
          bg="white"
          borderColor="#dddfe2"
          fontSize="1rem"
          padding="0.75rem 1rem"
        />
        <Flex align="center" w="full">
          <Input
            h="3rem"
            borderRadius="6px"
            type={showPassword ? "text" : "password"} // Toggle between text and password
            placeholder="Password"
            bg="white"
            borderColor="#dddfe2"
            fontSize="1rem"
            padding="0.75rem 1rem"
          />
          <IconButton
            aria-label="Toggle password visibility"
            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            onClick={togglePasswordVisibility}
            variant="link"
            color="#606770"
            ml="-3rem" // Position the icon within the input field
          />
        </Flex>
        <Button
          borderRadius="7rem"
          h="3rem"
          w="full"
          bg="#1877F2"
          color="white"
          fontSize="1rem"
          _hover={{ bg: "#1877F2" }}
          _active={{ bg: "#1877F2", transform: "scale(0.94)" }}
        >
          Log in
        </Button>
        <Text fontSize="0.875rem">Forgot Password?</Text>
      </VStack>
      <VStack w="full" spacing="1rem">
        <Button
          borderRadius="7rem"
          h="3rem"
          w="full"
          bg="none"
          border="1px solid #1877F2"
          color="#1877F2"
          fontSize="1rem"
          _active={{ transform: "scale(0.94)" }}
        >
          Create new account
        </Button>
        <Flex align="center" justify="center" fontWeight="bolder" gap="5px">
          <FaMeta color="#606770" />
          <Text fontSize="0.875rem" color="#606770">
            Meta
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          gap="1rem"
          fontSize="0.8rem"
          color="#606770"
        >
          <Text>About</Text>
          <Text>Help</Text>
          <Text>More</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Facebook;
