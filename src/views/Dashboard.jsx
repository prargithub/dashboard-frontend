import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          bg="rgba(0, 0, 38, 1)"
          pl="2rem"
          pt="2rem"
          color="white"
        >
          <Text>hi</Text>
          <Text>hi</Text>
          <Text>hi</Text>
        </GridItem>
        <GridItem colSpan={4} bg="papayawhip" />
      </Grid>
    </Box>
  );
};

export default Dashboard;

// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   GridItem,
//   Link,
//   Spacer,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

// function SideNavbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex height="100vh">
//         {/* mobile view */}
//         <Box
//           display={{ base: "block", md: "none" }}
//           p="4"
//           onClick={onToggle}
//           backgroundColor="rgba(0, 0, 38, 1)"
//         >
//           {isOpen ? <CloseIcon /> : <HamburgerIcon color="white" />}
//         </Box>

//         {/* laptop view */}
//         <Flex
//           width={{ base: isOpen ? "100%" : "0", sm: "100%", md: "20%" }}
//           bg="rgba(0, 0, 38, 1)"
//           color="white"
//           direction="column"
//           transition="width 0.5s"
//           style={{
//             backgroundColor: "rgba(0, 0, 38, 1)",
//             backdropFilter: "blur(400px)",
//             boxShadow: "10px 10px 15px rgba(128, 128, 128, 0.2)",
//           }}
//           //   overflowX="hidden"
//         >
//           {/* Navbar content */}
//           <Flex
//             align="center"
//             p="4"
//             borderBottom="1px"
//             borderColor="gray.700"
//             display={{ base: "flex", md: "none" }}
//             backgroundColor="rgba(0, 0, 38, 1)"
//           >
//             {/* <Spacer /> */}
//             <Button
//               variant="ghost"
//               onClick={onToggle}
//               backgroundColor="rgba(0, 0, 38, 1)"
//             >
//               {isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             </Button>
//           </Flex>

//           {/* Sidebar menu items */}
//           <Flex
//             direction="column"
//             p="4"
//             flex="1"
//             overflowY="auto"
//             display={{ base: isOpen ? "flex" : "none", md: "flex" }}
//           >
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Home
//             </Box>
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Calendar
//             </Box>
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Schedule
//             </Box>
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Meetings
//             </Box>
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Notifications
//             </Box>
//             <Box p="2" borderRadius="md" _hover={{ bg: "gray.700" }}>
//               Settings
//             </Box>
//           </Flex>
//         </Flex>

//         {/* Main content */}
//         <Box flex="1" bg="white">
//           {/* Place your main content here */}
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default SideNavbar;
