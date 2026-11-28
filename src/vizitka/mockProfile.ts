import { Profile } from './graphql.js';

export const mockProfile: Profile = {
  id: 'mukha',
  name: 'Муха Сергей',
  description:
    'JavaScript Full-Stack разработчик, прошёл курсы по JavaScript, React, Next.js и Node.js. Умею создавать веб-приложения с нуля — от адаптивной вёрстки и клиентской логики до простого backend на Node.js. Хорошо понимаю структуру кода, работу с API, асинхронность и основы чистого кода (SOLID, DRY). Рассматриваю позиции Frontend, Backend или Full-Stack разработчика. Ищу возможность применить знания на реальных проектах, развиваться в команде и совершенствовать навыки',
  links: ['https://github.com/Serhey778'],
  skills: [
    { id: 'mukhaName1', name: 'HTML' },
    { id: 'mukhaName2', name: 'CSS' },
    { id: 'mukhaName3', name: 'JavaScript' },
    { id: 'mukhaName4', name: 'TypeScript' },
    { id: 'mukhaName5', name: 'React/Next.js' },
    { id: 'mukhaName6', name: 'Node.js' },
    { id: 'mukhaName7', name: 'Express' },
    { id: 'mukhaName8', name: 'Nest JS' },
    { id: 'mukhaName9', name: 'Prisma' },
    { id: 'mukhaName10', name: 'GraphQL' },
    { id: 'mukhaName11', name: 'Docker' },
  ],
  experience: [
    {
      id: 'mukhaExperience1',
      company: 'ООО «ЭКОСИСТЕМА АЛЬФА»',
      position: 'JavaScript Full-Stack разработчик',
    },
  ],
  projects: [
    {
      id: 'mukhaProjects1',
      name: 'мессенджер для обмена сообщениями на Next.js',
      link: 'https://github.com/Serhey778/chat-frontend-5',
    },
    {
      id: 'mukhaProjects2',
      name: 'список продуктов на на React/Next.js',
      link: 'https://github.com/Serhey778/list-products-nextjs развернуто https://list-products-nextjs.vercel.app',
    },
    {
      id: 'mukhaProjects3',
      name: 'отслеживание по IP двух работающих датчиков температуры/влажности в режиме реального времени',
      link: 'https://github.com/Serhey778/monitoring-system развернуто https://monitoring-system-cyan.vercel.app',
    },
    {
      id: 'mukhaProjects4',
      name: 'API-сервис для отслеживания по IP двух работающих датчиков температуры/влажности в режиме реального времени',
      link: 'https://github.com/Serhey778/server-monitoring-sensors развернуто https:server-monitoring-sensors.vercel.app',
    },
  ],
};
