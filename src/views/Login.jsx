import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <Box bg="rgba(0, 0, 38, 1)" minHeight="100vh" pt="5rem" pb="5rem">
      <center>
        <Flex
          direction="column"
          color="white"
          w="30%"
          minW="350px"
          minH="400px"
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
            // bgGradient="linear(to-l, #C12A72, #4135D6)"
            bgGradient="linear(to-l, #BA2463, #333399)"
            bgClip="text"
          >
            DASHBOARD LOGIN
          </Text>
          {/* <Text fontSize="1.3rem">Create an account</Text> */}
          <Text pt="1rem" pl="2rem" pr="2rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus id
            voluptates recusandae nulla.
          </Text>

          <FormControl
            isRequired
            pt="2rem"
            pl={{
              base: "2rem",
              xl: "3rem",
              lg: "3rem",
              md: "2rem",
              sm: "2rem",
            }}
            pr={{
              base: "2rem",
              xl: "3rem",
              lg: "3rem",
              md: "2rem",
              sm: "2rem",
            }}
          >
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your E-mail ID" />
            <FormHelperText>Enter your registered mail.</FormHelperText>
          </FormControl>
          <FormControl
            isRequired
            pl={{
              base: "2rem",
              xl: "3rem",
              lg: "3rem",
              md: "2rem",
              sm: "2rem",
            }}
            pr={{
              base: "2rem",
              xl: "3rem",
              lg: "3rem",
              md: "2rem",
              sm: "2rem",
            }}
            pb="1rem"
          >
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <Flex align="center">
            <Checkbox
              defaultChecked
              pl={{
                base: "2rem",
                xl: "3rem",
                lg: "3rem",
                md: "2rem",
                sm: "2rem",
              }}
              colorScheme="pink"
            >
              Remember me
            </Checkbox>
            <Button
              ml="auto"
              mr={{
                base: "2rem",
                xl: "3rem",
                lg: "3rem",
                md: "2rem",
                sm: "2rem",
              }}
              variant="outline"
              color="gray.400"
            >
              <Link as={RouterLink} to="/dashboard">
                Login{" "}
              </Link>
            </Button>
          </Flex>
          <Text
            align="left"
            pl={{
              base: "2rem",
              xl: "3rem",
              lg: "3rem",
              md: "2rem",
              sm: "2rem",
            }}
          >
            <Link as={RouterLink} to="/register">
              New user? Click here to register.{" "}
            </Link>
          </Text>
        </Flex>
      </center>
    </Box>
  );
}
