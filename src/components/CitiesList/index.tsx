import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { City } from '../../types';

import { CityCard } from './CityCard';

interface CitiesProps {
  cities: City[];
}

export function CitiesList({ cities }: CitiesProps) {
  return (
    <Box mb="3rem">
      <Heading fontWeight="medium">Top 100 cities</Heading>

      <SimpleGrid 
        columns={[1, 1, 2, 3, 4]} 
        gap="3rem"
        mt="2rem"
      >
        {cities.map(city => (
          <CityCard 
            key={city.name}
            name={city.name}
            country={city.country}
            image={city.image}
            flag={city.flag}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}