import React, {Dispatch, SetStateAction, useRef} from "react";
import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Portal,
  Stack,
} from "@chakra-ui/react";

interface Props {
  setGridDesktopLayout: Dispatch<SetStateAction<string>>;
  gridDesktopLayout?: string;
}

const MenuNavbar: React.FC<Props> = ({setGridDesktopLayout}) => {
  const initialFocusRef = useRef<any | undefined | null>(null);

  return (
    <Popover closeOnBlur={false} initialFocusRef={initialFocusRef} placement="bottom-end">
      <PopoverTrigger>
        <Image src="https://icongr.am/material/apple.svg?size=20&color=ffffff" />
      </PopoverTrigger>
      <Portal>
        <PopoverContent bg="colorPrimary" borderColor="colorPrimary">
          <PopoverHeader border="0" fontWeight="bold" pt={2}>
            Layout
          </PopoverHeader>
          <PopoverBody p={4}>
            <Stack spacing={4}>
              <Button
                _hover={{bg: "gray.600"}}
                bg="gray.500"
                onClick={() => setGridDesktopLayout("desktop")}
              >
                Desktop
              </Button>
              <Button
                ref={initialFocusRef}
                _hover={{bg: "gray.600"}}
                bg="gray.500"
                onClick={() => setGridDesktopLayout("cards")}
              >
                List
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default MenuNavbar;
