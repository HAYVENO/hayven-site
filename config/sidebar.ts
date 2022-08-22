import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/TaiwoRaqeeb',
    icon: FaTwitter,
  },

  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/taiworoqeeb',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/18401459/raqeeb-taiwo',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCI7zWSxUFf58BZeHO0iGeew',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/taiworoqeeb',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/taiworoqeeb',
    icon: FaDev,
  },
]
