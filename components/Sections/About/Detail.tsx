import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiAmazons3,
  SiVuedotjs,
  // SiNuxtdotjs,
  SiNestjs,
} from 'react-icons/si';
import{TbApi} from 'react-icons/tb'
// import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2021

  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }}>
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text textAlign='justify' variant="description">
        I`ve been working as a professional software developer for more than {professionalYears} years. I
        specialize in creating
        <Tooltip
          label="Ha!. border: 1px solid red "
          aria-label="Border joke?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> responsive, bug free </b>
          </Text>
        </Tooltip>
        Restful API for websites and mobile applications. Along the process, I also
        <Tooltip
          label="probably nothing special D_D (🧱, 🚀)"
          aria-label="WAGMI"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> develop frontend designs using Vuejs (Vue 3) and ReactJs.</b>
          </Text>
        </Tooltip>{' '}
        <br /> <br />
        Here are a couple of the technologies I
        <Tooltip label="console.log((🧱, 🚀))" aria-label="log" hasArrow>
          <Text as="span" variant="emphasis">
            <b> utilize </b>
          </Text>
        </Tooltip>
        in my development.{' '}
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES5+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            NodeJS
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNestjs} color={emphasis} fontSize="2em" />
            NestJs
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={TbApi} color={emphasis} fontSize="2em" />
            Restful API
          </ListItem>
        </List>
        <List spacing={3}>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiExpress} color={emphasis} fontSize="2em" />
            ExpressJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAmazons3} color={emphasis} fontSize="2em" />
            AWS S3
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiVuedotjs} color={emphasis} fontSize="2em" />
            VueJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            ReactJs
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
