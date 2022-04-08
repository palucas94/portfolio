import ToDoAppImg from '../images/palucas-todoapp.png';
import PlayTunesImg from '../images/palucas-playtunes.png';

const PROJECTS = [
  {
    id: 1,
    name: 'To Do App',
    image: ToDoAppImg,
    description: 'In this Todo App the user can add a new to do, mark it as complete, filter it by status and delete it. The app also saves the list in local storage.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'React'],
    repository: 'https://github.com/palucas94/react-todo-app',
    deploy: 'https://palucas-todo-list.vercel.app/',
  },
  {
    id: 2,
    name: 'PlayTunes',
    image: PlayTunesImg,
    description: 'Using iTunes API, the user can search for any artist and find all relevant albums related to that search. After selecting an album the user can listen to a sample of each song from the album. It is possible to add favorite songs and edit user profile.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'React'],
    repository: 'https://github.com/palucas94/playtunes-music-app',
    deploy: 'https://palucas-playtunes.vercel.app/',
  },
];

export default PROJECTS;
