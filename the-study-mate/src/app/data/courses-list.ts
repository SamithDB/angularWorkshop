import { Course } from '../models/course';

export const idGenerator = (): number => {
  return Math.round(Math.random() * 10000);
};

export const courseList: Course[] = [
  {
    id: idGenerator(),
    title: 'Angular workshop',
    imgUrl: 'assets/angular-3-logo.png',
    price: 60,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'React workshop',
    imgUrl: 'assets/angular-3-logo.png',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'Vue workshop',
    imgUrl: 'assets/angular-3-logo.png',
    price: 40,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  },
  {
    id: idGenerator(),
    title: 'Backbone workshop',
    imgUrl: 'assets/angular-3-logo.png',
    price: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }
];
