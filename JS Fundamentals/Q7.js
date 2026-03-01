const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Fulltime score is " + this.score);
    return this;
  },
};

const fouls = {
  fouls: 0,
  foulCount() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log("Halftime fouls are " + this.fouls);
    return this;
  },
  fullTime() {
    console.log("Fulltime fouls are " + this.fouls);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

fouls.foulCount().foulCount().halfTime().foulCount().fullTime();
