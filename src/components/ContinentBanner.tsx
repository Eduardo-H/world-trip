import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  name: string;
  image: string;
}

export function ContinentBanner({name, image}: ContinentBannerProps) {

  return (
    <Flex 
      bgImage={
        `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)), 
          url("${image}")
        `
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100vw"
      h={["150px", "300px", "400px"]}
      justify={{base: "center", lg: "start"}}
      align={{base: "center", lg: "flex-end"}}
    >
      <Heading 
        fontSize={["1.75rem", "2rem", "3.5rem"]}
        fontWeight="medium" 
        color="gray.50"
        mb={{base: "0", lg: "2rem", xl: "3rem"}}
        ml={{base: "0", lg: "6rem", xl: "8rem"}}
      >
        {name}
      </Heading>
    </Flex>
  );
}