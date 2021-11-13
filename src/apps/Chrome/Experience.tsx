import React from "react";
import {Box, Stack} from "@chakra-ui/react";

// import ImageSection from "./sections/Image";
// import TitleSection from "./sections/Title";
// import ContactSection from "./sections/Contact";

// type Section = "image" | "title" | "contact";

interface Props {
  onClose: VoidFunction;
}

// const SECTIONS: Record<Section, React.ComponentType> = {
//   image: ImageSection,
//   title: TitleSection,
//   contact: ContactSection,
// };

const Experience: React.FC<Props> = () => {
  // const sections: Section[] = ["image", "title", "contact"];

  return (
    <Box borderBottomRadius="md" padding={4}>
      <Stack>
        <Box>Experiencia</Box>
      </Stack>
    </Box>
  );
};

export default Experience;
