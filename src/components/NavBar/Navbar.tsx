import React, {Dispatch, SetStateAction} from "react";
import {Image, Text, Stack, Link, Box} from "@chakra-ui/react";

import {Application} from "../../types";

import MenuNavbar from "./MenuNavbar/MenuNavbar";

interface Props {
  app?: Application;
  setGridDesktopLayout: Dispatch<SetStateAction<string>>;
  gridDesktopLayout: string;
}

const Navbar: React.FC<Props> = ({app, setGridDesktopLayout, gridDesktopLayout}) => {
  const hasFullScreenSupport: boolean = React.useMemo(
    () => Boolean(document.documentElement.requestFullscreen),
    [],
  );
  const [isFullScreen, toggleFullScreen] = React.useState<boolean>(false);

  function handleToggleFullScreen(isEnabled: boolean) {
    if (isEnabled) {
      return document.documentElement.requestFullscreen().then(() => toggleFullScreen(true));
    } else {
      return document.exitFullscreen().then(() => toggleFullScreen(false));
    }
  }

  return (
    <Box backgroundColor="rgba(0,0,0,0.75)" boxShadow="md" paddingX={4}>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          alignItems="center"
          direction="row"
          height="28px"
          justifyContent="flex-start"
          overflowX="auto"
          spacing={6}
        >
          <MenuNavbar
            gridDesktopLayout={gridDesktopLayout}
            setGridDesktopLayout={setGridDesktopLayout}
          />
          {app && (
            <>
              <Text fontSize="sm" fontWeight="bold" userSelect="none">
                {app.name}
              </Text>
              {app.actions.map((action) => (
                <Link
                  key={action.name}
                  _hover={{textDecoration: "none"}}
                  fontSize="sm"
                  fontWeight="500"
                  href={action.link}
                  isExternal={action.isExternal}
                >
                  {action.name}
                </Link>
              ))}
            </>
          )}
        </Stack>
        {hasFullScreenSupport && (
          <>
            {isFullScreen ? (
              <Image
                cursor="pointer"
                src="https://icongr.am/octicons/screen-normal.svg?size=20&color=ffffff"
                tabIndex={0}
                onClick={() => handleToggleFullScreen(false)}
              />
            ) : (
              <Image
                cursor="pointer"
                src="https://icongr.am/octicons/screen-full.svg?size=20&color=ffffff"
                tabIndex={0}
                onClick={() => handleToggleFullScreen(true)}
              />
            )}
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
