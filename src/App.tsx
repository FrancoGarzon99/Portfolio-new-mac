import React, {useState} from "react";
import {Stack, Box, Center, Link} from "@chakra-ui/react";
import {Switch, Route, useHistory, useLocation} from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Desktop from "./components/Desktop/Desktop";
import Window from "./components/Window/Window";
import {Application} from "./types";
import {APPS, IconstContact} from "./constants";

const App: React.FC = () => {
  const [gridDesktopLayout, setGridDesktopLayout] = useState("cards");

  const location = useLocation();
  const history = useHistory();
  const dragZone = React.useRef(null);
  const selectedApp = React.useMemo(() => {
    const [, route] = location.pathname.split("/");

    return APPS.find((app) => app.id === route);
  }, [location.pathname]);

  function handleOpenApp(app: Application) {
    return history.push(app.id);
  }

  function handleCloseApp() {
    return history.push("/");
  }

  return (
    <Stack height="100%" position="relative" spacing={0}>
      <Navbar
        app={selectedApp}
        gridDesktopLayout={gridDesktopLayout}
        setGridDesktopLayout={setGridDesktopLayout}
      />
      <Stack
        ref={dragZone}
        alignItems={gridDesktopLayout === "cards" ? "center" : "initial"}
        flexDirection={gridDesktopLayout === "cards" ? "row" : "column"}
        height="100%"
        justifyContent={gridDesktopLayout === "cards" ? "center" : "flex-start"}
      >
        <Desktop apps={APPS} gridDesktopLayout={gridDesktopLayout} onOpenApp={handleOpenApp} />
        <Switch key={location.pathname} location={location}>
          {APPS.map((app) => (
            <Route
              key={app.id}
              exact
              path={`/${app.id}`}
              render={(props) => (
                <Window
                  key={app.id}
                  dragConstraints={dragZone}
                  title={`${app.name}${app.label ? ` - ${app.label}` : ``}`}
                  onClose={handleCloseApp}
                  {...props}
                >
                  {React.createElement(app.component)}
                </Window>
              )}
            />
          ))}
        </Switch>
      </Stack>
      <Box h="54px">
        <Center>
          <Stack direction="row" spacing={2}>
            {IconstContact.map((icon) => (
              <Link
                key={icon.id}
                _hover={{textDecoration: "none"}}
                fontSize="sm"
                fontWeight="500"
                href={icon.link}
                isExternal={icon.isExternal}
              >
                {React.createElement(icon.iconComponent)}
              </Link>
            ))}
          </Stack>
        </Center>
      </Box>
    </Stack>
  );
};

export default App;
