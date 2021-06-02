import NextLink from 'next/link';
import { Flex, Icon, Image, Link } from '@chakra-ui/react';

import { useHeader } from '../contexts/HeaderContext';
import { BsChevronLeft } from 'react-icons/bs';
import React from 'react';

export function Header() {
  const { showBackButton, setShowBackButton } = useHeader();

  return (
    <Flex 
      as="nav" 
      w="100%" 
      bg="gray.50" 
      py={["4", "6"]}
      px={["2rem", "4rem", "8rem"]}
    >
      {showBackButton && (
        <NextLink href="/">
          <Link onClick={() => setShowBackButton(false)} my="auto" >
            <Icon as={BsChevronLeft} fontSize={["1rem", "1.5rem"]} />
          </Link>
        </NextLink>
      )}
      
      <Image mx="auto" src="/images/logo.svg" w={["100px", "200px"]}/>
    </Flex>
  );
}