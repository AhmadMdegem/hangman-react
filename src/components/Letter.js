import { Component } from "react";


export class Letter extends Component {

    constructor(props) {
        super(props);
        this.selectLetter = this.selectLetter.bind(this);
        
        this.state = {
            select: false
        }
    }
    selectLetter() {
        this.setState({
            select: true
        })
        this.props.changeStatus(this.props.char)
        

    }


    render() {
        if (this.state.select)
            return (
                <span className="selected" >{this.props.char} </span>
            )
        return (
            <span onClick={this.selectLetter} >{this.props.char} </span>
        )
    }
}
export default Letter