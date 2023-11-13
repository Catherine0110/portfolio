import SpringIcon from '../assets/spring.svg'
import CloseIcon from '../assets/closeParalaxEls.svg'
import DotsIcon from '../assets/dotsBg.svg'
import MailIcon from '../assets/mail-icon.png'
import InIcon from '../assets/in-icon.png'
import HTMLIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import JsIcon from '../assets/javascript.svg'
import SassIcon from '../assets/sass.svg'
import ReactIcon from '../assets/react.svg'
import REduxIcon from '../assets/redux.svg'
import NextIcon from '../assets/next.svg'
import PugIcon from '../assets/pug.png'
import WebpackIcon from '../assets/webpack.svg'
import GitIcon from '../assets/git.svg'
import TsIcon from '../assets/ts.svg'
import FigmaIcon from '../assets/figma.svg'
import PsIcon from '../assets/ps.svg'
import GulpIcon from '../assets/gulp.svg'
import DobuyImg from '../assets/dobuy-min.jpg'
import MosplitkaImg from '../assets/mosplitka-min.jpg'
import CELImg from '../assets/cel.jpg'
import MintImg from '../assets/mint.jpg'
import DVedImg from '../assets/dved-min.jpg'
import VMarketImg from '../assets/vobla-market-min.jpg'
import { SkillCardThemes } from '../componets/SkillCard/SkillCard'

const navMenu = [
    {
        id: 'about',
        title: 'О себе',
    },
    {
        id: 'projects',
        title: 'Проекты',
    },
    {
        id: 'contacts',
        title: 'Контакты',
    },
]

const paralaxSpeeds = [
    {color: 'paralaxPinkEl', top: '-80px', left: '50%'},
    {color: 'paralaxPinkEl', top: '30px',left:'10%'},
    {color: 'paralaxVioletEl', top: '120%',left:'30%'},
    {color: 'paralaxVioletEl', top: '50%',right:'17%'},
    {icon: SpringIcon, top: '10%',right:'25%',colorIcon: 'white'},
    {icon: SpringIcon, top: '120%',right:'35%',colorIcon: 'pink'},
    {icon: SpringIcon, top: '80%',left:'5%', colorIcon: 'violet'},
    {icon: CloseIcon, top: '90%',right:'10%'},
    {icon: DotsIcon, top: '10%',right:'2%',colorIcon: 'violet', dots: true}
]

const formIcons = [
    {icon: MailIcon, href: "mailto:catherinel011091@gmail.com"},
    {icon: InIcon, href: "https://www.linkedin.com/in/catherine-lozhkina/"},
]

const aboutContent = {
    text: 'Привет! Меня зовут Екатерина и я frontend разработчик.</br></br>Мой опыт включает в себя разработку пользовательских интерфейсов, создание адаптивных и кроссбраузерных веб-сайтов, а также оптимизацию производительности , рефакторинг и доработку проектов. Я уверенно работаю с современными фронтенд-технологиями и инструментами, что позволяет мне создавать высококачественные продукты для пользователей.</br></br>Я постоянно обучаюсь и развиваю свои навыки, следуя последним тенденциям в веб-разработке. Готова к новым вызовам и всегда открыта для сотрудничества.',
    title: 'Обо мне'
}

const aboutSkills = [
    {index: 0, icon: CssIcon, text: 'CSS', theme: SkillCardThemes.GREEN},
    {index: 1, icon: HTMLIcon, text: 'HTML', theme: SkillCardThemes.PINK},
    {index: 2, icon: JsIcon, text: 'JS', theme: SkillCardThemes.BLUE},
    {index: 3, icon: SassIcon, text: 'SASS', theme: SkillCardThemes.YELLOW},
    {index: 4, icon: ReactIcon, text: 'React', theme: SkillCardThemes.GREEN_LIGHT},
    {index: 5, icon: REduxIcon, text: 'Redux', theme: SkillCardThemes.VIOLET},
    {index: 6, icon: NextIcon, text: 'Next', theme: SkillCardThemes.FUCHSIA},
    {index: 7, img: PugIcon, text: 'PUG', theme: SkillCardThemes.GREEN},
    {index: 8, icon: WebpackIcon, text: 'Webpack', theme: SkillCardThemes.PINK},
    {index: 9, icon: GitIcon, text: 'Git', theme: SkillCardThemes.BLUE},
    {index: 10, icon: TsIcon, text: 'TS', theme: SkillCardThemes.GREEN_LIGHT},
    {index: 11, icon: FigmaIcon, text: 'Figma', theme: SkillCardThemes.YELLOW},
    {index: 12, icon: PsIcon, text: 'Ps', theme: SkillCardThemes.FUCHSIA},
    {index: 13, icon: GulpIcon, text: 'Gulp', theme: SkillCardThemes.VIOLET},
]

const projects = [
    {id: 0, icon: ReactIcon, title: 'React pet-project', text: 'Освоение новых технологий через разработку  pet проекта на React, включая настройку всей инфраструктуры, тестовой среды, работу с сервером/данными и т д.', technologies: [{color: 'green',text: 'react'}, {color: 'pink',text: 'redux'}, {color: 'blue',text: 'ts'}, {color: 'yellow',text: 'storyBook'}, {color: 'greenl',text: 'ci/cd'}, {color: 'violet',text: 'jest'}, {color: 'fuchsia',text:'webpack'}], subtext: 'Проект в процессе разработки', href: 'https://github.com/Catherine0110/advanced-react-project'},
    {id: 1,img: DobuyImg, title: 'DoBuy', text: 'Pазработка интернет-магазина с нуля для компании , доставляющей электронную технику в PФ из ОАЭ.', role: ['frontend-developer'], technologies: [{color: 'green',text: 'html'}, {color: 'pink',text: 'scss'}, {color: 'blue',text: 'js'}, {color: 'yellow',text: 'gulp'}, {color: 'greenl',text: 'pug'}, ], href: 'https://dobuy.ru/'},

    {id: 2,img: MosplitkaImg, title: 'Mosplitka', text: 'Доработка  крупного интернет-магазин керамической плитки и сантехники.', role: ['frontend-developer'], technologies: [{color: 'green',text: 'react'}, {color: 'pink',text: 'nextJjs'}, {color: 'blue',text: 'css-modules'}, {color: 'yellow',text: 'webpack'},  ], href: 'https://mosplitka.ru/'},

    {id: 3,img: CELImg, title: 'Credit Europe Leasing', text: 'Разработка сайта с нуля для компании ,предоставляющей услуги лизинга частным коммерческим предприятиям и потребителям.', role: ['frontend-developer'], technologies: [{color: 'green',text: 'html'}, {color: 'pink',text: 'scss'}, {color: 'blue',text: 'js'}, {color: 'yellow',text: 'gulp'}, {color: 'greenl',text: 'pug'} ], href: 'https://www.crediteuropeleasing.ru/'},

    {id: 4,img: MintImg, title: 'Mint', text: 'Доработка CRM для организации, реализующей программы наставничества, образования и профориентации для детей-сирот.', role: ['frontend-developer'], technologies: [{color: 'green',text: 'html'}, {color: 'pink',text: 'scss'}, {color: 'blue',text: 'js'}, {color: 'yellow',text: 'gulp'}, {color: 'greenl',text: 'pug'},{color: 'fuchsia',text:'webpack'} ], href: 'https://crm.justmint.ru/'},

    {id: 5,img: DVedImg, title: 'Digital Ved', text: 'Разработка сайта с нуля для мультисервисной SAAS платформы в области ВЭД.', role: ['frontend-developer'], technologies: [{color: 'green',text: 'html'}, {color: 'pink',text: 'scss'}, {color: 'blue',text: 'js'}, {color: 'yellow',text: 'gulp'}, {color: 'greenl',text: 'pug'}], href: 'https://digitalved.ru/'},

    {id: 6,img: VMarketImg, title: 'Vobla market', text: 'Разработка лендинга на wordpress с нуля для компании по продаже рыбных снеков.', role: ['developer', 'designer'], technologies: [{color: 'green',text: 'wordpress'}, {color: 'pink',text: 'css'}, {color: 'blue',text: 'js'} ], href: 'https://vobla-market.ru/'},
]

export { navMenu, paralaxSpeeds, formIcons, aboutContent, aboutSkills, projects }
