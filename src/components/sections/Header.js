import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  ScaleFade,
  Slide,
  Text,
  useColorMode,
} from '@chakra-ui/react';

const MenuItems = (props) => {
  const { children, isLast, to = '/', ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={['pink.500', 'pink.500', 'transparent', 'transparent']}
      color={['white', 'white', 'pink.700', 'pink.700']}
      {...props}
    >
      <Flex align='center'>
        <StarIcon w='50px' color={['white', 'white', 'pink.700', 'pink.700']} />
        <IconButton
          onClick={toggleColorMode}
          bg='pink.500'
          color='white'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to='/'>Home</MenuItems>
          <MenuItems to='/about'>About</MenuItems>
          <MenuItems to='/login'>Login</MenuItems>
          <MenuItems to='/contact'>Contact</MenuItems>
          <MenuItems to='/signup' isLast>
            <Button
              size='sm'
              rounded='md'
              color={['pink.500', 'pink.500', 'white', 'white']}
              bg={['white', 'white', 'pink.500', 'pink.500']}
              _hover={{
                bg: ['pink.100', 'pink.100', 'pink.600', 'pink.600'],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
