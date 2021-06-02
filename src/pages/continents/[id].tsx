import React from 'react';
import { GetServerSideProps } from 'next';
import { 
  Box, 
  Flex, 
  Heading, 
  SimpleGrid, 
  Text, 
  Tooltip
} from '@chakra-ui/react';
import { api } from '../../services/api';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Continent as ContinentType } from '../../types';
import { CitiesList } from '../../components/CitiesList';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({continent}: ContinentProps) {
  return (
    <>
      <ContinentBanner name={continent.name} image={continent.cover_image} />

      <Box px={{base: "1rem", xl: "10rem"}}>
        <SimpleGrid 
          columns={{base: 1, lg: 2}} 
          my="4rem" 
          gap="2rem"
        >
          <Text px="1rem" textAlign="justify">
            {continent.about}
          </Text>

          <Flex justify="space-around" align="center">
            <SimpleGrid columns={{base: 1, md: 3}} gap="2rem">
              <Box textAlign="center">
                <Heading color="yellow.950">{continent.countries}</Heading>
                <Text fontWeight="semibold">Countries</Text>
              </Box>
              <Box textAlign="center">
                <Heading color="yellow.950">{continent.languages}</Heading>
                <Text fontWeight="semibold">Languages</Text>
              </Box>
              <Box textAlign="center">
                <Heading color="yellow.950">20</Heading>

                <Flex align="center">
                  <Text fontWeight="semibold" mr="0.5rem">
                    Top 100 cities
                    
                  </Text>
                  <Tooltip 
                      hasArrow 
                      label="Number of cities that are in the world's most visited cities list" 
                      placement="top" 
                      bg="gray.200" 
                      color="gray.700"
                      textAlign="center"
                    >
                      <Text color="gray.400">
                        <AiOutlineInfoCircle />
                      </Text>
                  </Tooltip>
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>

        <CitiesList cities={[...continent.main_cities]} />
      </Box>
      
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get<ContinentType>(`continents/${params.id}`);

  return {
    props: {
      continent: data
    }
  }
}