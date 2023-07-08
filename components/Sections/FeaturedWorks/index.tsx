import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Take a look at some of the work I`ve done in the areas of corporate projects, and those still in development.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Talctech Rentals"
            src="/works/talctech-logo.jpg"
            description="Talctech Rentals is a website built for landlords, or property owners to put their properties out there for rent. This way individuals looking for homes to rent can easily go to the website and converse with the landlord to rent an apartment."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://talctechrentals.com/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="EventHype Social"
            description="This is an android app, that allows users to post and organise any event over the internet without the help of any company, this app also promotes brands, and ceremonies via the app dashboard to all users using the app."
            src="/works/eventhype-logo.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="#"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Moon App"
            description="This app was created for the Moon Innovation product, to allow users to have access to the product's information and control the product via the internet. Note: This App is still in the development stage."
            src="/works/moon-logo.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.mooninnovations.io/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Producemart"
            description="As a backend developer, I created an API while working with Greenmouse for an agricultural e-commerce platform where buyers and suppliers trade farm products."
            src="/works/producemart-logo.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://producemart.com/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="Deepend"
            description="As a backend developer, I created an API while working with Greenmouse for an Entertainment and services platform where you can get cinema tickets, rent equipment, rent a studio, buy VR-Game's ticket and order any food of your choice."
            src="/works/deep.png"
            height={{ base: '130px', md: '225px', '2xl': '280px' }}
            ctaUrl="https://deependapp.com.ng/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="Abdulraqeeb's Blog"
            description="This is my blog that I built from scratch using Vuejs (Vue 3), It is a blog for technical and non-technical write-ups, I use markdown for writing the articles, which provides me with many features that make article writing easier, attractive and better. "
            src="/works/Blog.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://blog.taiworoqeeb.tech"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={7}
            title="Foodelo"
            description="This a food solution created for food vendors and customer to easily order food from restaurant near them."
            src="/works/foodelo.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.foodelo.africa/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={8}
            title="MageHUB"
            description="MageHUB is a versatile platform that allows users to connect and communicate with friends and a wide network of individuals globally. Additionally, MageHUB offers the convenience of interacting with various AI tools, including ChatGPT, OpenAI, and many others, providing users with a diverse range of conversational capabilities and resources."
            src="/works/mageHUB.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="#"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
