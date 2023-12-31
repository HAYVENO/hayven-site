import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiStyledcomponents,
  SiCpanel,
  SiMongodb,
  // SiMaterialdesign,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiTailwindcss,
  SiGithub,
  SiExpress,
  SiNetlify,
  SiMysql,
  SiPostgresql,
  SiHeroku,
  SiDocker,
  SiAmazons3,
  SiSequelize,
  SiJest,
  SiVuedotjs,
  SiNestjs,
  SiNuxtdotjs,
  SiVercel,
  SiFlutter,
  SiDart,
} from 'react-icons/si'
// import { AiOutlineAntDesign } from 'react-icons/ai'
// import { IoLogoPwa } from 'react-icons/io5'
import { BiCodeCurly } from 'react-icons/bi'
import { GiShipWheel} from 'react-icons/gi'
import {BsFillCloudFog2Fill} from 'react-icons/bs'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'app'
  | 'cicd'
  | 'database'
  | 'orm'
  | "cloud"
  | 'ui frameworks'
  | 'productivity boost'
  | 'unit testing'


export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'NodeJs',
      icon: SiNodedotjs,
    },
    {
      name: 'ExpressJs',
      icon: SiExpress,
    },
    {
      name: 'Javascript (ES5+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'NestJs',
      icon: SiNestjs
    }
  ],
  frontend: [
    {
      name: 'VueJs',
      icon: SiVuedotjs,
    },
    {
      name: 'ReactJs',
      icon: SiReact,
    },
    {
      name: 'NuxtJs',
      icon: SiNuxtdotjs
    },
    {
      name: 'Javascript (ES5+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    }
  ],
  app: [
    {
      name: 'Flutter',
      icon: SiFlutter,
    },
    {
      name: 'Dart',
      icon: SiDart,
    },

  ],
  database: [
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
  ],
  orm:[
    {
      name: "Sequelize",
      icon: SiSequelize
    },
    {
      name: "TypeOrm",
      icon: BiCodeCurly
    },
    {
      name: "Mongoose",
      icon: SiMongodb
    },
    {
      name: "KnexJs",
      icon: GiShipWheel
    }
  ],
  cloud:[
    {
      name: 'AWS S3',
      icon: SiAmazons3,
    },
    {
      name: 'Cloudinary',
      icon: BsFillCloudFog2Fill
    }
  ],
  'unit testing':[
    {
      name: 'JestJs',
      icon: SiJest
    }
  ],
  cicd: [
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
    },
    {
      name: 'Heroku',
      icon: SiHeroku,
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
    },
    {
      name: "Vercel",
      icon: SiVercel
    }
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'Tailwind Css',
      icon: SiTailwindcss,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
