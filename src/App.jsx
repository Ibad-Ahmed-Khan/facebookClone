import { Box, Flex } from "@chakra-ui/react";
import TicToe from "./components/TicToe";
import Facebook from "./components/Facebook";

function App() {
  return (
    <Flex
      w="100vw"
      align="center"
      justifyContent="center"
      style={{
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
      }}
    >
      <Facebook />
    </Flex>
  );
}

export default App;
