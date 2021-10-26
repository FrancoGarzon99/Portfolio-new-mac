import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  onClose: VoidFunction;
}

const VsCode: React.FC<Props> = () => {
  return <Text padding={2}>In process</Text>;
};

export default VsCode;
