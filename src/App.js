import React from "react";
import "./css/style.css";

export default class Zadatak2 extends React.Component {
    constructor() {
        super();

        this.state = {
            firstNum: "",
            secondNum: "",
            result: ""
        }

        this.handleFirstNum = this.handleFirstNum.bind(this);
        this.handleSecondNum = this.handleSecondNum.bind(this);
        this.getResult = this.getResult.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleFirstNum(event) {
        this.setState({
            firstNum: event.target.value
        })
    }

    handleSecondNum(event) {
        this.setState({
            secondNum: event.target.value
        })
    }

    getResult() {
        this.setState({
            result: (parseInt(this.state.firstNum) + parseInt(this.state.secondNum))
        })
    }

    reset() {
        this.setState({
            firstNum: "",
            secondNum: "",
            result: ""
        })
    }

    render() {
        return(
            <form className="form-content">
                <input type="number" value={this.state.firstNum} onChange={this.handleFirstNum}/>
                <input type="number" value={this.state.secondNum} onChange={this.handleSecondNum}/>

                <div className="btn-group">
                    <input type="button" className="btn" value="Click" onClick={this.getResult}/>
                    <input type="button" className="btn" value="Reset" onClick={this.reset}/>
                </div>
                
                <div className="result">
                    <p>Result: {this.state.result}</p>
                </div>
            </form>
        )
    }
}
