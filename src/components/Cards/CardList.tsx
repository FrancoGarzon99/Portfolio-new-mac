import React from "react";
import {Stack, Box, Text} from "@chakra-ui/react";

import {Application} from "../../types";

interface Props {
  handleOpenApp: (app: Application, element: HTMLDivElement) => void;
  app: Application;
}

const CardList: React.FC<Props> = ({app, handleOpenApp}) => {
  return (
    <Box
      className="container"
      tabIndex={0}
      userSelect="none"
      onDoubleClick={(e) => handleOpenApp(app, e.currentTarget)}
      onKeyPress={(e) => ["Enter", "Space"].includes(e.code) && handleOpenApp(app, e.currentTarget)}
      onTouchStart={(e) => handleOpenApp(app, e.currentTarget)}
    >
      <Stack
        alignItems="flex-start"
        bgColor="colorPrimary"
        borderRadius="15px"
        cursor="pointer"
        h="4.8rem"
        justify="center"
        p={1}
        shadow="0px 5px 10px 2px #00000040"
        spacing={1}
        sx={{
          ".container:focus &": {
            border: "1px solid gray",
          },
        }}
      >
        <Box borderRadius="sm" padding={3} pl="20px" w="100%">
          <Text fontSize="1.3rem">{app.name}</Text>
          <Text fontFamily="fontSecondary" fontSize="0.8rem" fontWeight="300">
            {app.description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardList;
