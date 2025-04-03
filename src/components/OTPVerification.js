import { useState, useContext } from "react";
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Center,
  Heading,
  useToast,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  const { login } = useContext(AuthContext);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Email not provided. Please go back and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (otp.length !== 4) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://localhost:7022/api/users/verify-code?email=${encodeURIComponent(
          email
        )}&code=${otp}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP");
      }

      toast({
        title: "Verification Successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      login();
      navigate("/");
    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setOtp(""); // Optionally clear OTP
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"sm"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          We have sent a code to your email
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "gray.400")}
        >
          {email || "unknown@email.com"}
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput otp size="lg" onChange={handleChange} autoFocus>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"brand.500"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
            onClick={handleSubmit}
            isDisabled={otp.length !== 4}
            isLoading={loading}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default OTPVerification;
