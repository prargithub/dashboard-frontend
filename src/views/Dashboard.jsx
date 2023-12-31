import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  LockIcon,
  SettingsIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Spacer,
} from "@chakra-ui/react";
import Cards from "../views/images/credit_cards.png";
import React from "react";
import { Space } from "antd";

const Dashboard = () => {
  return (
    <Box bg="rgba(0, 0, 38, 1)">
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          display={{
            base: "none",
            md: "none",
            sm: "none",
            xl: "block",
            lg: "block",
          }}
          rowSpan={2}
          colSpan={1}
          bg="rgba(0, 0, 38, 1)"
          pl="0.5rem"
          pr="1rem"
          pt="2rem"
          color="white"
          fontSize="xl"
          style={{
            border: "1px solid transparent",
            boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
          }}
        >
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <HamburgerIcon />
            <Box p={2}>Home</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <CalendarIcon />
            <Box p={2}>Calendar</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <EditIcon />
            <Box p={2}>To Do List</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <ChatIcon />
            <Box p={2}>Meetings</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <BellIcon />
            <Box p={2}>Notifications</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <SettingsIcon />
            <Box p={2}>Settings</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <LockIcon />
            <Box p={2}>Logout</Box>
          </HStack>
          <HStack
            spacing={2}
            alignItems="center"
            borderRadius="md"
            _hover={{ bg: "gray.700" }}
          >
            <DeleteIcon />
            <Box p={2}>Delete Account</Box>
          </HStack>
        </GridItem>

        <GridItem
          colSpan={2}
          display={{
            base: "none",
            md: "none",
            sm: "none",
            xl: "block",
            lg: "block",
          }}
          bg="rgba(0, 0, 38, 1)"
          fontSize="2xl"
          color="white"
          fontWeight="500"
        >
          <Box p="1rem" pl="2rem">
            My Dashboard
          </Box>
          <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem" pl="2rem">
            <Flex
              direction="column"
              color="white"
              w={{ base: "70%", sm: "70%", md: "70%", lg: "95%", xl: "95%" }}
              minW="350px"
              pt="1.5rem"
              pb="1.5rem"
              pl="2rem"
              gap="1rem" //gap between each line
              style={{
                border: "1px solid transparent",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(400px)",
                boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
              }}
            >
              <Text
                fontSize="2rem"
                fontWeight="600"
                bgGradient="linear(to-l, #BA2463, #333399)"
                bgClip="text"
                pr="1rem"
              >
                Financial Overview
              </Text>
              <StatGroup>
                <Stat>
                  <StatLabel>WFC</StatLabel>
                  <StatNumber>40.61 USD</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    1.10%
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel>INTC</StatLabel>
                  <StatNumber>33.00 USD</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    0.89%
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel>JPMC</StatLabel>
                  <StatNumber>138.85 USD</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    0.52%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Flex>
          </Box>
          <HStack>
            <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem" pl="2rem">
              <Flex
                direction="column"
                color="white"
                w="100%"
                // minW="350px"
                minH="300px"
                pt="1.5rem"
                pb="1.5rem"
                pl="1.5rem"
                gap="1rem" //gap between each line
                style={{
                  border: "1px solid transparent",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(400px)",
                  boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
                }}
              >
                <Text
                  fontSize="1.5rem"
                  fontWeight="600"
                  bgGradient="linear(to-l, #BA2463, #333399)"
                  bgClip="text"
                  pr="1.3rem"
                >
                  Completed tasks
                </Text>
                <Checkbox defaultChecked colorScheme="pink">
                  Dashboard portal
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  Data Structures & Algorithms
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  Make master resume
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  CS4010 project
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  Install Linux
                </Checkbox>
                <Checkbox defaultChecked colorScheme="pink">
                  Meet professor
                </Checkbox>{" "}
              </Flex>
            </Box>
            <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem" pl="2rem" pr="1rem">
              <Flex
                direction="column"
                color="white"
                w="100%"
                // minW="350px"
                minH="300px"
                pt="1.5rem"
                pb="1.5rem"
                pl="1.5rem"
                gap="1rem" //gap between each line
                style={{
                  border: "1px solid transparent",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(400px)",
                  boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
                }}
              >
                <Text
                  fontSize="1.5rem"
                  fontWeight="600"
                  bgGradient="linear(to-l, #BA2463, #333399)"
                  bgClip="text"
                  pr="1.3rem"
                >
                  Pending tasks
                </Text>
                <Checkbox colorScheme="pink">Make dashboard-backend</Checkbox>
                <Checkbox colorScheme="pink">Submit resume</Checkbox>
                <Checkbox colorScheme="pink">Learn hash maps</Checkbox>
                <Checkbox colorScheme="pink">CH5120 assigment</Checkbox>
                <Checkbox colorScheme="pink">Complete laundry</Checkbox>
                <Checkbox colorScheme="pink">NodeJS training</Checkbox>
              </Flex>
            </Box>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={{ base: "5", lg: "2", xl: "2", sm: "5", md: "5" }}
          bg="rgba(0, 0, 38, 1)"
          justifyContent="center"
          fontSize="2xl"
          color="white"
          fontWeight="500"
          height="100%"
        >
          <HStack
            spacing={3}
            alignItems="center"
            borderRadius="md"
            mr="0"
            ml={{ base: "0", xl: "20rem", lg: "18rem", sm: "0", md: "5rem" }}
            p="1rem"
          >
            <InfoOutlineIcon />
            <Popover>
              <PopoverTrigger>
                <Box>My profile</Box>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>View my profile</PopoverHeader>
                  <PopoverHeader>Share my profile to friends</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="pink">Logout</Button>
                  </PopoverBody>
                  {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                </PopoverContent>
              </Portal>
            </Popover>
            <Switch id="theme" />
          </HStack>

          <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem" pl="1rem">
            <Flex
              direction="column"
              color="white"
              w={{ base: "70%", sm: "70%", md: "70%", lg: "95%", xl: "95%" }}
              minW="350px"
              minH="250px"
              pt="1rem"
              pb="1rem"
              gap="1rem" //gap between each line
              style={{
                border: "1px solid transparent",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(400px)",
                boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
              }}
            >
              <Text
                fontSize="2rem"
                fontWeight="600"
                bgGradient="linear(to-l, #BA2463, #333399)"
                bgClip="text"
                pl="1rem"
                pr="1rem"
              >
                Progress Status
              </Text>
              <Stack spacing={5} pl="1rem" pr="1rem">
                <Text fontSize="xl" fontWeight="400">
                  Research
                </Text>
                <Progress colorScheme="pink" size="lg" value={80} />
                <Text fontSize="xl" fontWeight="400">
                  Workout
                </Text>
                <Progress colorScheme="pink" size="lg" value={45} />
              </Stack>
            </Flex>
          </Box>

          <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem" pr="1rem" pl="1rem">
            <Flex
              direction="column"
              color="white"
              w={{ base: "70%", sm: "70%", md: "70%", lg: "95%", xl: "95%" }}
              minW="350px"
              pt="1.5rem"
              pb="1.5rem"
              gap="1rem" //gap between each line
              style={{
                border: "1px solid transparent",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(400px)",
                boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
              }}
            >
              <Tabs>
                <TabList>
                  <Tab
                    bgGradient="linear(to-l, #BA2463, #333399)"
                    bgClip="text"
                    fontSize="1.5rem"
                    fontWeight="600"
                  >
                    Access
                  </Tab>
                  <Tab
                    bgGradient="linear(to-l, #BA2463, #333399)"
                    bgClip="text"
                    fontSize="1.5rem"
                    fontWeight="600"
                  >
                    Completed
                  </Tab>
                  <Tab
                    bgGradient="linear(to-l, #BA2463, #333399)"
                    bgClip="text"
                    fontSize="1.5rem"
                    fontWeight="600"
                  >
                    Pending
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel fontSize="md">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio ex quidem illum inventore aperiam voluptas quisquam
                      ratione repudiandae totam nemo. Incidunt cupiditate
                      reiciendis eveniet libero esse eius debitis odit? Nisi
                      blanditiis error distinctio iste asperiores, beatae
                      impedit at architecto. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </TabPanel>
                  <TabPanel fontSize="md">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti quam nulla accusamus distinctio reiciendis,
                      dignissimos labore itaque sint excepturi possimus nihil,
                      fugiat modi aspernatur sed non ad quia est. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Incidunt
                      cupiditate reiciendis eveniet libero esse eius debitis
                      odit? Alias?
                    </p>
                  </TabPanel>
                  <TabPanel fontSize="md">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat odit officiis fuga unde distinctio earum alias
                      voluptas magnam fugit magni explicabo, commodi praesentium
                      excepturi. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Magni totam alias neque et quasi?
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
