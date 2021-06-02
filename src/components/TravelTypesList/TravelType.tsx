import { Flex, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import {BsDot} from 'react-icons/bs';

interface TravelTypeProps {
  icon: string;
  name: string;
}

export function TravelType({ icon, name }: TravelTypeProps) {
  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction="column" justify="center" align="center">
      <Image src={icon} mb="4" h="80px" display={{base: "none", lg: "block"}} />
      <Text fontWeight="medium" fontSize={["1.23rem", "1.5rem"]}>
        { !isLargeVersion && (
          <Icon as={BsDot} color="yellow.950" fontSize="2.5rem" />
        ) } 
        {name}
      </Text>
    </Flex>
  );
}