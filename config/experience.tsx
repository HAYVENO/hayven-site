import { Link } from '@chakra-ui/react'

export type Company = 'MoonInnovations' | 'GreenMouse' | 'Foodelo'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  MoonInnovations: {
    name: 'Moon Innovations',
    longName: 'Moon Innovations LLC',
    subDetail: 'Computers and Electronics Manufacturing Company',
    url: 'https://mooninnovations.io',
    position: 'Software Developer (Backend)',
    duration: 'Dec 2021 - Till Date',
    logo: {
      light: '/worked_at_logos/nativebrands/1.svg',
      dark: '/worked_at_logos/nativebrands/2.svg',
    },
    roles: [
      <>
        I created the Restful API used for the company's customer service web portal for managing
        customers technical problems

        .
      </>,
      <>
        I also created the Restful API the users use in controlling the company's product via mobile device, I used TypeScript as the programming language.
      </>,
      <>
        My first major endeavour, which started in late December, was to create a working Restful API with JavaScript coming from a no nodejs experience
        .
      </>,
    ],
  },
  GreenMouse: {
    name: 'GreenMouse',
    longName: 'Green Mouse Technologies',
    subDetail: 'Digital Agency',
    url: 'https://greenmousetech.com/',
    position: 'Software Developer (Backend)',
    duration: 'March 2022 -August 2022',
    logo: {
      light: '/worked_at_logos/bptech/4.svg',
      dark: '/worked_at_logos/bptech/3.svg',
    },
    roles: [
      <>
        I was successful in getting some client projects into production in the few months of work at GreenMouse.
      </>,
      <>
        I worked on Restful API design for{' '}
        <Link
          variant="primaryLink"
          href="https://talctechrentals.com/"
          target="_blank"
          rel="noreferrer"
        >
          Talctech Rentals website
        </Link>{' '}
        using NodeJS.
      </>,
      <>
        Also built a Restful API for
        {" "}
        <Link
          aria-label="Braze"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          EventHype Social
        </Link>{' '}
        mobile App and Admin portal.
      </>,
      <>
         I am also working on numerous websites and apps backend in development
      </>,
    ],
  },
  Foodelo: {
    name: 'Foodelo (Blunic)',
    longName: 'Foodelo (Blunic)',
    subDetail: 'Food Solutions',
    url: 'https://www.foodelo.africa/',
    position: 'Software Developer (Backend)',
    duration: 'November 2022 - Present',
    logo: {
      light: 'https://www.foodelo.africa/images/logo.svg',
      dark: 'https://www.foodelo.africa/images/logo.svg',
    },
    roles: [
      <>
         Foodelo is a food solution app owned by {" "}
        <Link
          aria-label="Braze"
          href="https://www.blunic.io/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
         Blunic
        </Link>.
      </>,
      <>
        I am working as a backend developer in a team of six.
      </>,
      <>
        I worked on series of features on the app.
      </>,
      <>
        Also there is the
        {" "}
        <Link
          aria-label="Braze"
          href="https://play.google.com/store/apps/details?id=ng.com.riders.foodelo"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Rider's App
        </Link>{' '}
        and the {" "}
        <Link
          aria-label="Braze"
          href="https://play.google.com/store/apps/details?id=africa.foodelo.hybrid"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
         Hybrid App (For Customers and Vendors)
        </Link>.
      </>
    ],
  },
}

export const ExperiencesList = [Experiences.MoonInnovations, Experiences.GreenMouse, Experiences.Foodelo]
