import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Flex, Heading, Image, Link, Stack } from '@chakra-ui/react';

import { Continent } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { 
  Navigation,
  Pagination,
} from 'swiper/core';
import { api } from '../../services/api';

SwiperCore.use([Navigation, Pagination]);

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useHeader } from '../../contexts/HeaderContext';

export function Slider() {
  const [continents, setContinents] = useState<Continent[]>([]);

  const { setShowBackButton } = useHeader();

  useEffect(() => {
    async function getAllContinents() {
      const { data } = await api.get<Continent[]>('continents');
      setContinents(data);
    }

    getAllContinents();
  }, []);

  return (
    <Swiper 
      initialSlide={1}
      navigation={true} 
      pagination={{
        "clickable": true
      }}
      loop={true}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Image 
              src={continent.slide_image} 
              w="100%" 
              h={["300px", "550px"]} 
              objectFit="cover"
          />
          <Flex
            color="gray.50"
            position="absolute"
            top="0"
            right="0"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            bg="rgba(0, 0, 0, 0.5)"
          >
            <NextLink href={`/continents/${continent.id}`}>
              <Link 
                onClick={() => setShowBackButton(true)}
                transitionDuration="0.2s"
                _hover={{filter: "brightness(0.7)"}}
              >
                <Stack
                  alignItems="center"
                  textAlign="center"  
                >
                  <Heading as="h1" fontSize={["1.5rem", "2rem", "3rem"]}>
                    {continent.name}
                  </Heading>
                  <Heading as="h2" fontSize={["1rem", "1.5rem", "2rem"]}>
                    {continent.description}
                  </Heading>
                </Stack>
              </Link>
            </NextLink>
          </Flex>        
        </SwiperSlide>
      ))}
    </Swiper>
  )
}