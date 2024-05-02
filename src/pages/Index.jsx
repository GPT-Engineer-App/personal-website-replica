import React from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex align="center" justify="center" h="100vh" bgGradient="linear(to-r, gray.300, gray.500)">
        <VStack spacing={2} textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ2NjcxODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
          <Heading as="h1" size="2xl" fontWeight="normal" color="gray.700">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Software Developer | Tech Enthusiast
          </Text>
          <Stack direction="row" spacing={4} align="center" justify="center" mt={5}>
            <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
              LinkedIn
            </Button>
            <Button leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
              GitHub
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Email
            </Button>
          </Stack>
        </VStack>
      </Flex>

      <Box py={10} bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="md" maxW="2xl">
            I am a passionate software developer with a focus on creating impactful and user-friendly applications. With a background in computer science, I have developed a strong foundation in coding and design principles.
          </Text>
        </VStack>
      </Box>

      <Box py={10} bg={useColorModeValue("gray.100", "gray.700")}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Contact Me
          </Heading>
          <Box maxW="md" w="full">
            <form>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your Name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your-email@example.com" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your message" />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
