import { Component } from "react";
import Letter from "./Letter";


export class Solution extends Component {

    wordToArray(wordD) {
        let word = []
        for (let index = 0; index < wordD.length; index++) {
            word.push(wordD[index])
        }
        return word
    }
   
    render() {

        return (
            <div>
                <div> {this.wordToArray(this.props.solution.word).map(
                    c => <Letter char={this.props.letterStatus[c] ? c : '_'} />)} </div>
                {this.props.solution.hint}
                <div> <em> Your ideal mood when coding.</em></div>
            </div>
        )
    }
}
export default Solution