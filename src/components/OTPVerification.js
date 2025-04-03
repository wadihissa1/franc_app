import { useState, useContext } from "react";
import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Button,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext"; // Import AuthContext

const OTPVerification = () => {
  const location = useLocation(); // Access the location object to get the passed state
  const navigate = useNavigate(); // Initialize useNavigate
  const { email } = location.state || {}; // Destructure email from location.state

  const { login } = useContext(AuthContext); // Get login function from AuthContext

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async () => {
    if (otp.length !== 4) return;

    setLoading(true);

    try {
      // Sending email and OTP as query parameters in the URL
      const response = await fetch(
        `https://localhost:7022/api/users/verify-code?email=${encodeURIComponent(email)}&code=${otp}`,
        {
          method: "POST", // Use POST method as per the backend
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP");
      }

      // OTP verified successfully, navigate to the home page
      toast({
        title: "Verification Successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Call login function
    login(); // Update login state in AuthContext
    console.log("Login function called!");

    

      // Redirect to home page
      navigate("/");

    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="lg" fontWeight="bold">
        Enter OTP sent to your email
      </Text>
      <HStack>
        <PinInput otp size="lg" onChange={handleChange}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button
        colorScheme="blue"
        onClick={handleSubmit}
        isDisabled={otp.length !== 4}
        isLoading={loading}
      >
        Verify OTP
      </Button>
    </VStack>
  );
};

export default OTPVerification;
