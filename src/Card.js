import React from 'react';

const lockCombo = ["w", "a", "s", "d"];
const success = "Congratulations! You've opened lock No. 3!"
const failure = "Wrong! Please try again!";

class Card extends React.Component {
    // set state
    constructor(props) {
        super(props);
        this.state = {
            posOne: "",
            posTwo: "",
            posThree: "",
            posFour: ""
        }
    }

    // check answer
    checkAnswer = () => {
        const lockInputArr = Object.values(this.state);

        for (let i = 0; i < lockInputArr.length; i++) {
            if (lockInputArr[i] !== lockCombo[i]) {
                alert(failure);
                return false;
            }
            alert(success);
            return (true);  
        }
    }

    // create our event handler 
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const position = target.id;

        if (position === "1") {
            this.setState({
                posOne: value
            });
        } else if (position === "2") {
            this.setState({
                posTwo: value
            });
        } else if (position === "3") {
            this.setState({
                posThree: value
            });
        } else if (position === "4") {
            this.setState({
                posFour: value
            });
        }
    }

    // render func
    render() {
        return(
            <div>
                <div>
                    <span className="bg-gold dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posOne}</span>
                    <span className="bg-gold dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posTwo}</span>
                    <span className="bg-gold dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posThree}</span>
                    <span className="bg-gold dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posFour}</span>
                </div>
                <br />
                <form>
                    <input type="text" maxLength="2" className="bg-gold dib br3 pa3 ma2 grow bw2 shadow-5" id="1" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="2" className="bg-gold dib br3 pa3 ma2 grow bw2 shadow-5" id="2" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="2" className="bg-gold dib br3 pa3 ma2 grow bw2 shadow-5" id="3" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="2" className="bg-gold dib br3 pa3 ma2 grow bw2 shadow-5" id="4" onChange={this.handleInputChange}></input>
                </form>
                <br />
                <br />
                <div>
                    <button className="bg-light-green dib br3 pa3 ma2 bw1 shadow-5 spin-button" variant="secondary" type="submit" onClick={this.checkAnswer}>Unlock</button>
                </div>
            </div>
        )
    }
}

export default Card;