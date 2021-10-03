import React from "react";
import {Grid, Box, Center} from "@chakra-ui/react";

import {Application} from "../../types";
import CardsDesktop from "../Cards/CardsDesktop";
import CardList from "../Cards/CardList";
interface Props {
  apps: Application[];
  onOpenApp: (app: Application) => void;
  gridDesktopLayout: string;
}

const Desktop: React.FC<Props> = ({apps, onOpenApp, gridDesktopLayout}) => {
  function handleOpenApp(app: Application, element: HTMLDivElement) {
    onOpenApp(app);
    element.focus();
  }

  return (
    <Box>
      {gridDesktopLayout === "cards" ? (
        <Box>
          <Center>
            <Box>
              <Box
                bgImage={"url(/profile.jpg)"}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                borderRadius="50%"
                h="11rem"
                w="11rem"
              />
            </Box>
          </Center>
          <Grid gap={2} gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))" padding={4}>
            {apps.map((app) => (
              <CardList key={app.id} app={app} handleOpenApp={handleOpenApp} />
            ))}
          </Grid>
        </Box>
      ) : (
        <Grid gap={4} gridTemplateColumns="repeat(auto-fill, minmax(92px, 1fr))">
          {apps.map((app) => (
            <CardsDesktop key={app.id} app={app} handleOpenApp={handleOpenApp} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Desktop;
