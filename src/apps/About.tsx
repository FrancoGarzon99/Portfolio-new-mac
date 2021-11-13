import React from "react";
import {Text, Box, Stack} from "@chakra-ui/react";

import CardColorPrimary from "../components/Cards/CardColorPrimary";

const About: React.FC = () => {
  return (
    <Stack pb={10} pt={4} px={10} spacing={6}>
      <CardColorPrimary>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus temporibus accusamus
          error nesciunt est dolore aliquam, quia, veritatis reprehenderit, veniam eius similique
          voluptatem! Incidunt, natus laborum repellendus at nam amet?
        </Text>
      </CardColorPrimary>
      <CardColorPrimary>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus temporibus accusamus
          error nesciunt est dolore aliquam, quia, veritatis reprehenderit, veniam eius similique
          voluptatem! Incidunt, natus laborum repellendus at nam amet?
        </Text>
      </CardColorPrimary>
      <CardColorPrimary>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus temporibus accusamus
          error nesciunt est dolore aliquam, quia, veritatis reprehenderit, veniam eius similique
          voluptatem! Incidunt, natus laborum repellendus at nam amet?
        </Text>
      </CardColorPrimary>
    </Stack>
  );
};

export default About;
