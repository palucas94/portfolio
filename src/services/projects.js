import ToDoAppImg from '../images/palucas-todoapp.png';
import PlayTunesImg from '../images/palucas-playtunes.png';
import GerichtImg from '../images/palucas-gericht-restaurant.png';
import WitwImg from '../images/palucas-witw.png';

const PROJECTS = [
  {
    id: 1,
    name: 'Where in the world?',
    image: WitwImg,
    description: 'Fully responsive website where the user can find information about any country in the world. Filter by region and/or search for an specific country.  ',
    stacks: ['React', 'CSS', 'Context', 'API'],
    repository: 'https://github.com/palucas94/where-in-the-world',
    deploy: 'https://palucas-witw.vercel.app/',
  },
  {
    id: 2,
    name: 'Gericht Restaurant',
    image: GerichtImg,
    description: 'A restaurant landing page. Based on a figma design, this is a fully responsive website with Modern UI and UX.',
    stacks: ['React', 'CSS'],
    repository: 'https://github.com/palucas94/gericht-restaurant',
    deploy: 'https://palucas-gericht-restaurant.vercel.app/',
  },
  {
    id: 3,
    name: 'PlayTunes',
    image: PlayTunesImg,
    description: 'Music App based on a Figma design where the user can search for any artist, listen to music samples, add favorite songs and edit profile.',
    stacks: ['React', 'CSS', 'API'],
    repository: 'https://github.com/palucas94/playtunes-music-app',
    deploy: 'https://palucas-playtunes.vercel.app/',
  },
  {
    id: 4,
    name: 'To Do App',
    image: ToDoAppImg,
    description: 'A Todo App where the user can add, mark as complete, filter and delete todos. The list is also saved in the local storage.',
    stacks: ['React', 'CSS'],
    repository: 'https://github.com/palucas94/react-todo-app',
    deploy: 'https://palucas-todo-list.vercel.app/',
  },
];

export default PROJECTS;
