import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authReducer/actions";

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Stack,
  Heading,
} from "@chakra-ui/react";

export const LoginForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (email && password) {
      let userObj = { email, password };
      dispatch(loginUser(userObj, toast, navigate));
    }
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      width="min(30rem,100%)"
      mx="auto"
      marginBlock="20vh 30vh"
    >
      <Box></Box>
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <Button size="sm" mr="4" onClick={handlePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              mx="auto"
              colorScheme="blue"
              width="min-content"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
