import React from "react";
import {Image, Text, Grid, Stack, Box} from "@chakra-ui/react";

import {Application} from "../../types";

interface Props {
  apps: Application[];
  onOpenApp: (app: Application) => void;
}

const Desktop: React.FC<Props> = ({apps, onOpenApp}) => {
  function handleOpenApp(app: Application, element: HTMLDivElement) {
    onOpenApp(app);
    element.focus();
  }

  return (
    <Grid gap={2} gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))" padding={4}>
      {apps.map((app) => (
        <Stack
          key={app.id}
          alignItems="flex-start"
          bgColor="colorPrimary"
          borderRadius="15px"
          className="container"
          cursor="pointer"
          h="80px"
          justify="center"
          padding={1}
          shadow="0px 5px 10px 2px #00000040"
          spacing={1}
          tabIndex={0}
          userSelect="none"
          onDoubleClick={(e) => handleOpenApp(app, e.currentTarget)}
          onKeyPress={(e) =>
            ["Enter", "Space"].includes(e.code) && handleOpenApp(app, e.currentTarget)
          }
          onTouchStart={(e) => handleOpenApp(app, e.currentTarget)}
        >
          <Box
            borderRadius="sm"
            padding={3}
            pl="28px"
            sx={{
              ".container:focus &": {
                backgroundColor: "black",
              },
            }}
            w="100%"
          >
            <Text fontSize="20px">Habilidades</Text>
            <Text fontFamily="fontSecondary" fontSize="12px" fontWeight="300">
              ¿Queres conocerme mejor?
            </Text>
          </Box>
        </Stack>
      ))}
      {/* <Stack
        alignItems="flex-start"
        bgColor="colorPrimary"
        borderRadius="15px"
        h="80px"
        justify="center"
        shadow="0px 5px 10px 2px #00000040"
        spacing={2}
      >
        <Box pl="28px">
          <Text fontSize="20px">Habilidades</Text>
          <Text fontFamily="fontSecondary" fontSize="12px" fontWeight="300">
            ¿Queres conocerme mejor?
          </Text>
        </Box>
      </Stack>
      <Stack
        alignItems="flex-start"
        bgColor="colorPrimary"
        borderRadius="15px"
        h="80px"
        justify="center"
        shadow="0px 5px 10px 2px #00000040"
        spacing={2}
      >
        <Box pl="28px">
          <Text fontSize="20px">Proyectos</Text>
          <Text fontFamily="fontSecondary" fontSize="12px" fontWeight="300">
            Algunos de mis actuales trabajos
          </Text>
        </Box>
      </Stack>
      <Stack
        alignItems="flex-start"
        bgColor="colorPrimary"
        borderRadius="15px"
        h="80px"
        justify="center"
        shadow="0px 5px 10px 2px #00000040"
        spacing={2}
      >
        <Box pl="28px">
          <Text fontSize="20px">Educación</Text>
          <Text fontFamily="fontSecondary" fontSize="12px" fontWeight="300">
            Los aprendido este ultimo tiempo
          </Text>
        </Box>
      </Stack>
      <Stack
        alignItems="flex-start"
        bgColor="colorPrimary"
        borderRadius="15px"
        h="80px"
        justify="center"
        shadow="0px 5px 10px 2px #00000040"
        spacing={2}
      >
        <Box pl="28px">
          <Text fontSize="20px">Experiencia</Text>
          <Text fontFamily="fontSecondary" fontSize="12px" fontWeight="300">
            Mi experiencia en proyectos como JR
          </Text>
        </Box>
      </Stack> */}
      {/* {apps.map((app) => (
        <Stack
          key={app.id}
          alignItems="center"
          className="container"
          cursor="pointer"
          padding={1}
          spacing={1}
          tabIndex={0}
          userSelect="none"
          onDoubleClick={(e) => handleOpenApp(app, e.currentTarget)}
          onKeyPress={(e) =>
            ["Enter", "Space"].includes(e.code) && handleOpenApp(app, e.currentTarget)
          }
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
            <Image margin="auto" maxWidth="40px" src={app.icon} />
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
      ))} */}
    </Grid>
  );
};

export default Desktop;
