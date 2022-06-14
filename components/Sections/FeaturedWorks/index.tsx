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
        Take a look at some of the work I`ve done in the areas of corporate projects, 
        and those still in development.
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
            description="Talctech Rentals is website built for landlords, or property owners to put their properties out there for rent. This way individuals looking for homes to rent can easily go to website and converse with the landlord to rent an apartment."
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
            description="This is an android app, that allows user to post and organise any event over internet without the help any company, this app also promote brands, ceremony via the app dashboard to all user using the app."
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
            description="This app was create for Moon Innovation product, to allow user have access to the products information and control the product via the internet. Note: This App is still in the development stage."
            src="/works/moon-logo.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.mooninnovations.io/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Angry Arabs NFT"
            description="As a freelancer, I created an NFT minting website. Next JS is used to create the frontend, which interacts with an ERC721 smart contract."
            src="/works/angryarabs.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="http://angry-arab.vercel.app/"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
