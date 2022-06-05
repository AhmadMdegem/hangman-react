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
      score: 100,
      start: false
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
      letterStatus[letter] = !this.state.letterStatus[letter]
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
  reStarGame = () => {
    let letterStatus = this.state.letterStatus
    for (let item in letterStatus)
      letterStatus[item] = false

    this.setState({
      score: 100,
      letterStatus: letterStatus
    })
    this.startGame()
  }
  setWord = (e) => {
    let sol = this.state.solution
    sol.word = e.target.value
    sol.word = sol.word.toUpperCase()
    this.setState({
      solution: sol
    })
  }
  setHint = (e) => {
    let sol = this.state.solution
    sol.hint = e.target.value
    
    this.setState({
      solution: sol
    })
  }
  startGame = () => {
    this.setState({
      start: !this.state.start
    })
  }
  render() {
    if (!this.state.start)
      return (
        <div className="App">
          <h2 className='start-game'>Enter Word</h2>
          <form onSubmit={this.startGame}>
            <input type="text" onChange={this.setWord} placeholder="word"/><br></br>
            <input type="text" onChange={this.setHint} placeholder="hint"/><br></br>
            <button >submit</button>
          </form>
        </div>
      )
    if (this.endGame() === 1)
      return (
        <div className="App"><Endgame msg='Congratulations' />
          <button onClick={this.reStarGame}>Re Start Game</button>
        </div>)
    else if (this.endGame() === 0)
      return (
        <div className="App"><Endgame msg='Game Over' />
          <button onClick={this.reStarGame}>Re Start Game</button>
        </div>)
    return (
      <div className="App">
        <div className='score'><Score score={this.state.score} /></div>
        <div className='sol'><Solution letterStatus={this.state.letterStatus} solution={this.state.solution} /></div>
        <h3>available Letters</h3>
        <div className='letters'>
          <Letters letterStatus={this.state.letterStatus} changeStatus={this.changeStatus} />
        </div>
      </div>
    );
  }
}

export default App;
