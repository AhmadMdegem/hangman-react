import React, { Component } from "react";

export class Score extends Component {
    constructor() {
        super()
        this.state = {
            level: "high-score",
            isTrue: true,
        }
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel() {
        if (this.props.score > 80)
            return "high-score"

        else if (this.props.score > 50)
            return "medium-score"

        else
            return "low-score"

    }

    render() {
        
        return (

            <div className={this.changeLevel()} >{this.props.score}
            </div>
        )
    }
}
export default Score;