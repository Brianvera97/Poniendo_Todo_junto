

import React, { Component } from 'react';


class SomeClassComponent extends Component {
    
    constructor(props) {
        super(props);
        const {age } = this.props
        this.state = {
            age : age
        };
    }
    BdHappy = () =>{
        this.setState((sumHappy) =>({
            age: sumHappy.age +1
        }))
    }

    render() {
        const { firstName, lastName,  hairColor } = this.props
        return (
            <>
                
                    <h1>{lastName}, {firstName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={this.BdHappy}>Birdthday Butoon for {firstName}, {lastName} </button>
                    
                
            </>
        )
    }
}

export default SomeClassComponent;