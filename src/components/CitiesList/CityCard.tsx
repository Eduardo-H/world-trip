import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

interface CityCardProps {
  name: string;
  country: string;
  image: string;
  flag: string;
}

export function CityCard({
  name,
  country,
  image,
  flag
}: CityCardProps) {
  return (
    <Stack bg="white" boxShadow="lg" borderRadius="5px">
      <Image src={image} alt={name} w="100%" maxH="220px" objectFit="cover" borderTopRadius="5px" />
      <Flex align="center" justify="space-between" px="2rem" py="1.5rem">
        <Box>
          <Heading fontSize="1.35rem" mb="0.75rem">{name}</Heading>
          <Text>{country}</Text>
        </Box>
        <Image 
          src={flag} 
          alt={country} 
          w="2rem" 
          h="2rem" 
          objectFit="cover"
          borderRadius="50%"
          boxShadow="xs"
        />
      </Flex>
    </Stack>
  );
}