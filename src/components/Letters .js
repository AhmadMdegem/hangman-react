import { Component } from "react";
import Letter from "./Letter";

export class Letters extends Component {
    constructor() {
        super()
        this.changeStatus = this.changeStatus.bind(this)

    }
    changeStatus(letter) {
        this.props.changeStatus(letter)       
    }
  
    render() {
        return (
            <div className="container-letters">
                {Object.keys(this.props.letterStatus).map(
                    c => <Letter char={c} changeStatus={this.changeStatus}/>)}
            </div>
        )
    }
}
export default Letters