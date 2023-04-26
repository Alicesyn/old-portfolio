import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { HashLink } from 'react-router-hash-link';

const webLinks = [
  { name: "Home", path: "#" },
  { name: "Projects", path: "#projects" },
  { name: "Tech Stack", path: "#tech-stack" },
];

const mobileLinks = [
  { name: "About", path: "#" },
  { name: "Projects", path: "#projects" },
  { name: "Tech Stack", path: "#tech-stack" },
  { name: "Developer Story", path: "#story-timeline" }
];

interface NavLinkProps {
  index?: string | number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <HashLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.900")
      }}
      _activeLink={{
        color: useColorModeValue("blue.500", "blue.200")
      }}
      onClick={() => props.onClose()}
      to={props.path}
    >
      {props.name}
    </HashLink>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const menuProps = {
  //   bg: useColorModeValue("gray.200", "gray.900"),
  //   color: useColorModeValue("blue.500", "blue.200")
  // };

  return (
    <>
      <Box className='sticky' bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              {/*<Menu isLazy>*/}
              {/*  <MenuButton*/}
              {/*    as={Button}*/}
              {/*    variant="ghost"*/}
              {/*    size="sm"*/}
              {/*    px={2}*/}
              {/*    py={1.5}*/}
              {/*    fontSize={"1em"}*/}
              {/*    rounded={"md"}*/}
              {/*    height={"auto "}*/}
              {/*    _hover={menuProps}*/}
              {/*    _expanded={menuProps}*/}
              {/*    _focus={{ boxShadow: "outline" }}*/}
              {/*    rightIcon={<BiChevronDown size={18} />}*/}
              {/*  >*/}
              {/*    Links*/}
              {/*  </MenuButton>*/}
              {/*  <MenuList zIndex={5}>*/}
              {/*    <HashLink to="#tech-stack">*/}
              {/*      <MenuItem>*/}
              {/*        <HStack>*/}
              {/*          <Icon*/}
              {/*            as={AiTwotoneThunderbolt}*/}
              {/*            size={18}*/}
              {/*            color={useColorModeValue("blue.500", "blue.200")}*/}
              {/*          />*/}
              {/*          <Text>Tech Stack</Text>*/}
              {/*        </HStack>*/}
              {/*      </MenuItem>*/}
              {/*    </HashLink>*/}
              {/*    <HashLink to="#story-timeline">*/}
              {/*      <MenuItem>*/}
              {/*        <HStack>*/}
              {/*          <Icon*/}
              {/*            as={MdTimeline}*/}
              {/*            size={18}*/}
              {/*            color={useColorModeValue("blue.500", "blue.200")}*/}
              {/*          />*/}
              {/*          <Text>Developer Story</Text>*/}
              {/*        </HStack>*/}
              {/*      </MenuItem>*/}
              {/*    </HashLink>*/}
              {/*  </MenuList>*/}
              {/*</Menu>*/}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              as={Link}
              href={"https://github.com/Alicesyn"}
              size={"md"}
              icon={<FaGithub />}
              aria-label={"Github account"}
              bg={useColorModeValue("white", "gray.700")}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.900")
              }}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
