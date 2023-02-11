import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Summary from './Summary'
import CustomerStories from './CustomerStories'

export const HOME = '/'
export const ABOUT = '/about'
export const RESUME = '/resume'
export const PORTFOLIO = '/portfolio'
export const TESTIMONIAL = '/testimonial'
export const CONTACT = '/contact'

const ALL_URLS = [
  {
    url: HOME,
    key: 'home',
    name: 'Home',
    component: Summary,
    enabled: true,
  },
  {
    url: ABOUT,
    key: 'about',
    name: 'About',
    component: About,
    enabled: true,
  },
  {
    url: RESUME,
    key: 'resume',
    name: 'Resume',
    component: Resume,
    enabled: true,
  },
  {
    url: PORTFOLIO,
    key: 'portfolio',
    name: 'Portfolio',
    component: Portfolio,
    enabled: false,
  },
  {
    url: TESTIMONIAL,
    key: 'testimonial',
    name: "Customer's Stories",
    component: CustomerStories,
    enabled: true,
  },
  {
    url: CONTACT,
    key: 'contact',
    name: 'Contact',
    component: Contact,
    enabled: true,
  },
]

const URLS = ALL_URLS.filter(({ enabled }) => enabled)

export default URLS
