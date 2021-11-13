import React from "react";
import {Box} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const CardColorPrimary: React.FC<Props> = ({children}) => {
  return (
    <Box bg="colorCardPrimary" borderRadius={8} p={6} w="100%">
      {children}
    </Box>
  );
};

export default CardColorPrimary;
