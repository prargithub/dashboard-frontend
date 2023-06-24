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
  Input,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

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
          <Box p="1.5rem" pl="2rem">
            My Dashboard
          </Box>
          <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem">
            <center>
              <Flex
                direction="column"
                color="white"
                w={{ base: "70%", sm: "70%", md: "70%", lg: "95%", xl: "95%" }}
                // w="30%"
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
                <Text
                  fontSize="2rem"
                  fontWeight="600"
                  bgGradient="linear(to-l, #BA2463, #333399)"
                  bgClip="text"
                >
                  DASHBOARD LOGIN
                </Text>
                <Text pt="1rem" pl="2rem" pr="2rem" fontSize="lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus id voluptates recusandae nulla.
                </Text>
              </Flex>
            </center>
          </Box>
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
            ml={{ base: "0", xl: "18rem", lg: "15rem", sm: "0", md: "5rem" }}
            p="1rem"
          >
            <InfoOutlineIcon />
            <Box p={2}>My Profile</Box>
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

          <Box bg="rgba(0, 0, 38, 1)" pt="2rem" pb="1rem">
            <center>
              <Flex
                direction="column"
                color="white"
                w={{ base: "70%", sm: "70%", md: "70%", lg: "95%", xl: "95%" }}
                minW="350px"
                minH="300px"
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
                <Text
                  fontSize="2rem"
                  fontWeight="600"
                  bgGradient="linear(to-l, #BA2463, #333399)"
                  bgClip="text"
                >
                  DASHBOARD LOGIN
                </Text>
                <Text pt="1rem" pl="2rem" pr="2rem" fontSize="lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus id voluptates recusandae nulla.
                </Text>
              </Flex>
            </center>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
