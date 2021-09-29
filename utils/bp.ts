export class BirthdayProblem {
  constructor(private days: number) {}

  probability(people: number) {
    return (1 - Math.pow((this.days - 1) / this.days, (people * (people - 1)) / 2)) * 100;
  }

  people(probability: number) {
    return 404;
  }
}

export default new BirthdayProblem(365);

// https://en.wikipedia.org/wiki/Birthday_problem
// https://www.geeksforgeeks.org/birthday-paradox
