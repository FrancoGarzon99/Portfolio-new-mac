import React from "react";
import {Box} from "@chakra-ui/react";

import HeaderWindow from "./HeaderWindow";

interface Props {
  onClose: VoidFunction;
  title: string;
  dragConstraints?: React.RefObject<Element>;
}

const Window: React.FC<Props> = ({onClose, dragConstraints, title, children}) => {
  const [canDrag, toggleCanDrag] = React.useState(false);
  const [isDragging, toggleIsDragging] = React.useState(false);

  function handleDragHandleEnter() {
    toggleCanDrag(true);
  }

  function handleDragHandleLeave() {
    if (!isDragging) {
      toggleCanDrag(false);
    }
  }

  function handleDragHandleDown() {
    toggleIsDragging(true);
  }

  function handleDragHandleUp() {
    toggleIsDragging(false);
  }

  return (
    <Box left="20px" maxWidth={{base: "90vw", md: 900}} position="absolute" top="40px" width="100%">
      <HeaderWindow
        // eslint-disable-next-line react/no-children-prop
        children={children}
        canDrag={canDrag}
        dragConstraints={dragConstraints}
        handleDragHandleDown={handleDragHandleDown}
        handleDragHandleEnter={handleDragHandleEnter}
        handleDragHandleLeave={handleDragHandleLeave}
        handleDragHandleUp={handleDragHandleUp}
        title={title}
        onClose={onClose}
      />
    </Box>
  );
};

export default Window;
