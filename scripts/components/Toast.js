import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CustomToast = ({ title, description }) => {
  return (
    <Flex
      bg="red.400"
      backdropFilter="blur(10px) hue-rotate(90deg)"
      p={6}
      rounded="xl"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center">
        {title}
      </Text>
      <Text fontSize="2xl" color="white" textAlign="center" mt={4} mb={8}>
        {description}
      </Text>
    </Flex>
  );
};

export default CustomToast;
