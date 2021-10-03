import React from "react";
import {Stack, Box, Text, Image} from "@chakra-ui/react";

import {Application} from "../../types";

interface Props {
  handleOpenApp: (app: Application, element: HTMLDivElement) => void;
  app: Application;
}

const CardsDesktop: React.FC<Props> = ({app, handleOpenApp}) => {
  return (
    <Stack
      alignItems="center"
      className="container"
      cursor="pointer"
      padding={1}
      spacing={1}
      tabIndex={0}
      userSelect="none"
      onDoubleClick={(e) => handleOpenApp(app, e.currentTarget)}
      onKeyPress={(e) => ["Enter", "Space"].includes(e.code) && handleOpenApp(app, e.currentTarget)}
      onTouchStart={(e) => handleOpenApp(app, e.currentTarget)}
    >
      <Box
        borderRadius="sm"
        padding={1}
        sx={{
          ".container:focus &": {
            backgroundColor: "rgba(255,255,255,0.25)",
          },
        }}
        width="100%"
      >
        <Image margin="auto" maxWidth="64px" src={app.icon} />
      </Box>
      <Text
        borderRadius="sm"
        fontSize="sm"
        fontWeight="bold"
        overflow="hidden"
        paddingX={1}
        sx={{
          ".container:focus &": {
            backgroundColor: "blue.500",
          },
        }}
        textAlign="center"
        textOverflow="ellipsis"
        textShadow="1px 1px 7px rgba(0,0,0,0.7)"
        whiteSpace="nowrap"
        width="100%"
      >
        {app.label || app.name}
      </Text>
    </Stack>
  );
};

export default CardsDesktop;
