import { Link } from '@chakra-ui/react'

export type Company = 'Nativebrands' | 'BPTech'

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
  Nativebrands: {
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
        {/* {' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange website
        </Link>{' '} */}
        .
      </>,
      <>
        I also created the Restful API the users use in controlling the comapny's product via mobile 
        device, I used TypeScript as the programming language
        {/* {' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange
        </Link>{' '} */}
        .
      </>,
      <>
        My first major endeavor, which started in late December, was to create
        a working Restful API with JavaScript coming from a no nodejs experience 
        {/* <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchnage
        </Link>{' '} */}
        .
      </>,
    ],
  },
  BPTech: {
    name: 'GreenMouse',
    longName: 'Green Mouse Technologies',
    subDetail: 'Digital Agency',
    url: 'https://greenmousetech.com/',
    position: 'Backend Developer',
    duration: 'March 2022 - Till Date',
    logo: {
      light: '/worked_at_logos/bptech/4.svg',
      dark: '/worked_at_logos/bptech/3.svg',
    },
    roles: [
      <>
        I was successful in getting some client's project into production in the few month of working
        at GreenMouse.
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
        I am also working on numerous website and apps backend in development
        {/* <Link
          aria-label="Braze"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jufopay website.
        </Link>{' '} */}
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.Nativebrands, Experiences.BPTech]
