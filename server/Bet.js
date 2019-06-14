const rapperName = require('rapper-name-generator');

class Bet {
  constructor(id = Math.round(Math.random() * 1000)) {
    this.id = id;
    this.teams = [{
      name: rapperName(),
      win: Math.random() * 10,
    }, {
      name: rapperName(),
      win: Math.random() * 10,
    }];

    this.draw = Math.random() * 10;
  }

  randomize() {
    const random = Math.random() * 3;

    if (random > 2) {
      this.teams[0].win = Math.random() * 10;
    } else if (random > 1) {
      this.teams[1].win = Math.random() * 10;
    } else {
      this.draw = Math.random() * 10;
    }
  }
}

module.exports = Bet;
