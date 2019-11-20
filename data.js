export const images = [
    {
        id: 0,
        image: 'https://wallpaperaccess.com/full/83037.jpg',
        caption: 'Lorem ipsum'
    },
    {
        id: 1,
        image: 'https://wallpaperaccess.com/full/83027.jpg',
        caption: 'Lorem ipsum'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/originals/15/ae/c9/15aec99dd910ef9b6d9d14836a2ac6a1.jpg',
        caption: 'Lorem ipsum'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/originals/53/9e/cf/539ecf5d46dcfe5f94a89c883065cf97.jpg',
        caption: 'Lorem ipsum'
    }
]

export class Groot {
  constructor(status) {
    this.greeting = status;
  }
  salutation() {
    return this.greeting;
  }
}