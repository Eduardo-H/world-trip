import { Box, Divider, Flex, Heading } from '@chakra-ui/react';

import { HomeBanner } from '../components/HomeBanner';
import { TraveTypesList } from '../components/TravelTypesList';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Box>
      <HomeBanner />

      <Box 
        my="5rem"
        px={["0.5rem", "4rem", "8rem"]}
      >
        <TraveTypesList />
      </Box>

      <Divider 
        w="6rem" 
        mx="auto"
        borderBottomWidth={2}
        borderColor="#000000"
      />

      <Flex justify="center" my="2rem">
        <Heading textAlign="center" lineHeight={["2rem", "4rem"]} fontSize={["1.75rem", "2.5rem"]} fontWeight="medium">
          Let's go?<br />So choose you continent
        </Heading>
      </Flex>

      <Box px={{base: 0, lg: "10rem"}} mb="2rem">
        <Slider />
      </Box>
    </Box>
  );
}
