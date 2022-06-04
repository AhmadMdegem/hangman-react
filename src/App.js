import Score from './components/Score'
import './App.css';
import Solution from './components/Solution';
import Letters from './components/Letters ';
import { Component } from 'react';
import Endgame from './components/Endgame';


export class App extends Component {
  constructor() {
    super()
    this.changeStatus = this.changeStatus.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.endGame = this.endGame.bind(this)

    this.state = {
      solution: {
        word: "OMAR",
        hint: "ME"
      },
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: false,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: false,
        Z: false
      },
      score: 100
    }
  }

  updateScore(letter) {
    if (this.state.solution.word.includes(letter))
      this.setState({
        score: this.state.score + 5
      })
    else
      this.setState({
        score: this.state.score - 20
      })
  }

  changeStatus(letter) {
    if (this.state.solution.word.includes(letter)) {
      let letterStatus = this.state.letterStatus
      letterStatus[letter] = true
      this.setState({
        letterStatus
      })
    }
    this.updateScore(letter)
  }
  endGame() {
    let count = 0
    for (let index = 0; index < this.state.solution.word.length; index++)
      if (this.state.letterStatus[this.state.solution.word[index]])
        count++
    if (count === this.state.solution.word.length)
      return 1
    else if (this.state.score <= 0)
      return 0
    return false
  }
  render() {
    if (this.endGame() === 1)
      return (
        <div className="App"><Endgame msg='Congratulations'/></div>)
    else if(this.endGame() === 0)
    return (
      <div className="App"><Endgame msg='Game Over'/></div>)
    return (
      <div className="App">

        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <div>

          <Letters letterStatus={this.state.letterStatus} changeStatus={this.changeStatus} />


        </div>
      </div>
    );
  }
}

export default App;
