'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SocialProfileSimple({ name, username, avatar, description, badges = [], linkedin }) {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={avatar}
          name={name}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {username}
        </Text>
        <Text minH="60px" maxH={60} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
          {description}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6} flexWrap="wrap">
          {badges.map((badge, i) => (
            <Badge
              key={i}
              px={2}
              py={1}
              m={0.5}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #{badge}
            </Badge>
          ))}
        </Stack>

        <Stack mt={8}>
          <Button
            fontSize={'sm'}
            rounded={'full'}
            bg={'brand.500'}
            color={'white'}
            onClick={() => window.open(linkedin, '_blank')}
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
