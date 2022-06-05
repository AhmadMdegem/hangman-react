import { Component } from "react";
import Letter from "./Letter";


export class Solution extends Component {
    constructor() {
        super()
        this.state = {
            hint : false
        }
    }
    wordToArray(wordD) {
        let word = []
        for (let index = 0; index < wordD.length; index++) {
            word.push(wordD[index])
        }
        return word
    }
    showHint = () => {
        this.setState({
            hint:true
        })
    }
    render() {

        return (
            <div>
                <div > {this.wordToArray(this.props.solution.word).map(
                    c => <Letter char={this.props.letterStatus[c] ? c : '_'} />)} </div><br></br>
                <div className="hint">
                    {this.state.hint ? this.props.solution.hint : <button onClick={this.showHint}>hint</button>}
                </div>
            </div>
        )
    }
}
export default Solution