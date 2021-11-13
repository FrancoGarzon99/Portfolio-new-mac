import React from "react";
import {Box, Stack} from "@chakra-ui/react";

import CardColorPrimary from "../components/Cards/CardColorPrimary";
import SliderSkill from "../components/Cards/SliderSkill";

interface Props {
  onClose: VoidFunction;
}

const Abilities: React.FC<Props> = () => {
  return (
    <Stack direction="row" p={8} spacing={8}>
      <CardColorPrimary>
        <Stack spacing={2}>
          <Box>Developer</Box>
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
        </Stack>
      </CardColorPrimary>
      <CardColorPrimary>
        <Stack spacing={2}>
          <Box>Design</Box>
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
          <SliderSkill porcent={75} title="Adobe XD" />
        </Stack>
      </CardColorPrimary>
    </Stack>
  );
};

export default Abilities;
