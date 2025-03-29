'use client';

import {
  Box,
  Input,
  IconButton,
  VStack,
  HStack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from '../../components/Footer';

const ChatBubble = ({ message, isUser }) => (
  <Flex justify={isUser ? 'flex-end' : 'flex-start'} w="100%">
    <Box
      bg={isUser ? 'brand.500' : useColorModeValue('gray.100', 'gray.700')}
      color={isUser ? 'white' : useColorModeValue('gray.800', 'gray.200')}
      px={4}
      py={2}
      borderRadius="xl"
      maxW="75%"
      minW="20%"
      wordBreak="break-word"
    >
      <Text>{message}</Text>
    </Box>
  </Flex>
);

const Chatting = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef();

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'll get back to you shortly.",
          sender: 'bot',
        },
      ]);
    }, 500);
  };

  useEffect(() => {
    bottomRef.current?.scrollTo({
      top: bottomRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);
  

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, white, #ebf8ff)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      px={4}
      py={6}
    >
      <Box
        w="100%"
        maxW="800px"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        flex="1"
        display="flex"
        flexDirection="column"
      >
<VStack
  spacing={3}
  align="stretch"
  overflowY="auto"
  flex="1"
  maxH="70vh"
  pr={2}
  ref={bottomRef}
>
  {messages.map((msg, idx) => (
    <ChatBubble key={idx} message={msg.text} isUser={msg.sender === 'user'} />
  ))}
</VStack>


    <HStack mt={8} spacing={3} align="flex-end">
    <Input
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        bg="gray.50"
        borderRadius="full"
        flex="1"
        h="45px" // Makes the input taller
        px={4}
        fontSize="md"
    />
    <IconButton
        icon={<ArrowForwardIcon />}
        colorScheme="brand"
        onClick={handleSend}
        borderRadius="full"
        aria-label="Send"
        h="50px" // Match the input height
        minW="50px"
    />
    </HStack>

      </Box>

      <Footer />
    </Box>
  );
};

export default Chatting;
