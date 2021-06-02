import { Flex, SimpleGrid } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export function TraveTypesList() {
  return (
    <Flex justify="space-between" align="center" px={["2","6"]}>
      <SimpleGrid flex="1" columns={{base: 2, lg: 5}}>
        <TravelType name="night life" icon="/images/cocktail.svg" />
        <TravelType name="beach" icon="/images/surf.svg" />
        <TravelType name="modern" icon="/images/building.svg" />
        <TravelType name="classic" icon="/images/museum.svg" />
        <TravelType name="and more..." icon="/images/earth.svg" />
      </SimpleGrid>
    </Flex>
  );
}