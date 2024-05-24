import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="#fff1e5" color="black" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Culture</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Featured Articles */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Featured News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" mb={4} />
              <Heading as="h3" size="lg">Article Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" mb={4} />
              <Heading as="h3" size="lg">Article Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="#f3f2f1" borderRadius="lg" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>More News</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md">Sidebar Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Sidebar Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Sidebar Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;