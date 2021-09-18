import React from "react";
import {Stack, Text, Box} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
  canDrag: boolean;
  dragConstraints: React.RefObject<Element> | any;
  handleDragHandleDown: VoidFunction;
  handleDragHandleEnter: VoidFunction;
  handleDragHandleLeave: VoidFunction;
  handleDragHandleUp: VoidFunction;
  title: string;
  onClose: VoidFunction;
}

const HeaderWindow: React.FC<Props> = ({
  children,
  title,
  onClose,
  canDrag,
  dragConstraints,
  handleDragHandleEnter,
  handleDragHandleDown,
  handleDragHandleLeave,
  handleDragHandleUp,
}) => {
  return (
    <motion.div
      animate={{scale: 1}}
      drag={canDrag}
      dragConstraints={dragConstraints}
      dragElastic={false}
      dragMomentum={false}
      exit={{scale: 0}}
      initial={{scale: 0}}
      style={{width: "100%"}}
    >
      <Stack justifyContent="space-between" spacing={0}>
        <Stack direction="row" position="relative" spacing={0} w="100%">
          <Stack
            backgroundColor="rgba(45, 55, 72, 0.8)"
            borderColor="gray.600"
            borderRadius="10px 0px 0px 10px"
            boxShadow="xl"
            p={2}
            w="22%"
          >
            <Stack alignItems="center" direction="row">
              <Box
                backgroundColor="red.400"
                borderRadius={9999}
                cursor="pointer"
                height={3}
                tabIndex={0}
                width={3}
                onClick={onClose}
                onKeyPress={(e) => ["Enter", "Space"].includes(e.code) && onClose()}
              />
              <Box backgroundColor="yellow.400" borderRadius={9999} height={3} width={3} />
              <Box backgroundColor="green.400" borderRadius={9999} height={3} width={3} />
            </Stack>
          </Stack>
          <Stack
            backgroundColor="gray.700"
            borderColor="gray.600"
            borderRadius="0px 10px 10px 0px"
            boxShadow="xl"
            w="100%"
          >
            <Box
              onPointerDown={handleDragHandleDown}
              onPointerEnter={handleDragHandleEnter}
              onPointerLeave={handleDragHandleLeave}
              onPointerUp={handleDragHandleUp}
            >
              <Text
                color="gray.400"
                flex={1}
                fontWeight="bold"
                textAlign="center"
                userSelect="none"
              >
                {title}
              </Text>
            </Box>
            <Box>{children}</Box>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default HeaderWindow;
