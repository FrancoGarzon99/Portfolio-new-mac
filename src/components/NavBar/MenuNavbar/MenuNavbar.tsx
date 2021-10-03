import React, {Dispatch, SetStateAction} from "react";
import {Menu, MenuButton, MenuList, Image, MenuOptionGroup, MenuItemOption} from "@chakra-ui/react";

interface Props {
  setGridDesktopLayout: Dispatch<SetStateAction<string>>;
  gridDesktopLayout: string;
}

const MenuNavbar: React.FC<Props> = ({setGridDesktopLayout, gridDesktopLayout}) => {
  return (
    <Menu isLazy closeOnSelect={false}>
      <MenuButton>
        <Image src="https://icongr.am/material/apple.svg?size=20&color=ffffff" />
      </MenuButton>
      <MenuList _focus={{bg: "colorPrimary"}} bg="colorPrimary" borderColor="colorPrimary">
        <MenuOptionGroup
          defaultValue={gridDesktopLayout}
          type="radio"
          onChange={(e) => setGridDesktopLayout(e as string)}
        >
          <MenuItemOption _focus={{bg: "gray.600"}} _hover={{bg: "gray.600"}} value="desktop">
            Desktop
          </MenuItemOption>
          <MenuItemOption _focus={{bg: "gray.600"}} _hover={{bg: "gray.600"}} value="cards">
            List
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuNavbar;
