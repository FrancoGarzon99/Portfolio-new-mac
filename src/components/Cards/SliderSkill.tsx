import React from "react";
import {Box, Text} from "@chakra-ui/react";

interface Props {
  title: string;
  porcent: number;
}

const SliderSkill: React.FC<Props> = ({title, porcent}) => {
  return (
    <Box bg="#C4C4C4" borderRadius={10} h="100%" position="relative">
      <Box
        bg="linear-gradient(90deg, #3AFFF3 15.54%, #00FFF0 91.2%)"
        borderRadius={10}
        h="24px"
        p={1}
        w={`${porcent}%`}
      />
      <Text bottom={0} ml={2} position="absolute">
        {title}
      </Text>
      <Text bottom={0} fontWeight="medium" ml={2} position="absolute" right={5}>
        {porcent}%
      </Text>
    </Box>
  );
};

export default SliderSkill;
