import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function HomeBanner() {
  return (
    <Flex
      bgImage="/images/background.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{base: "", xl: "100vw"}}
      h="contain"
      align="center"
      justify="space-around"
      py={["8", "10"]}
      px="4"
    >
      <Box>
        <Heading 
          color="white" 
          fontSize={["1.5rem", "2rem"]}
          fontWeight="medium"
          lineHeight={["2.25rem", "3rem"]}
        >
          5 Continents, <br />infinite possibilities.
        </Heading>
        <Text color="gray.200" fontSize={["1rem", "1.15rem"]} mt="4">
          It's time to finally go on that trip you've dreamed for years.
        </Text>
      </Box>
      <Box display={{base: "none", xl: "block"}}>
        <Image 
          src="/images/airplane.svg" 
          mb="-4rem" 
          width={{base: "25rem", xxl: "30rem"}} 
        />
      </Box>
    </Flex>
  );
}