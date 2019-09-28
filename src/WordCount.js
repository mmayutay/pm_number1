import React, { Component } from 'react';

class WordCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            fname: '',
            sname: '',
            enter: '',
            List: []
        }
    }

    firstParagraph(e) {
        this.setState({ fname: e.target.value })
    }
    wordCounter(e) {
        e.preventDefault();
        let count = 0;
        let handler = this.state.fname.split(" ")
        handler.forEach(i => {
            this.setState({List: (this.state.List.push(i))})
            if(i === this.state.sname){
                count += 1;
            }
            this.setState({counter: count})
        })
        this.setState({List: (this.state.List)})
    }
    secondParagraph(e){
        this.setState({sname: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>{this.state.Listnames}</h1>
                <form>
                    <br/>
                    <input type="text" placeholder="Enter a first paragraph" onChange={(e) => this.firstParagraph(e)}></input>
                    <br/>
                    <input type="text" placeholder="Enter the word you find" onChange={(e) => this.secondParagraph(e)}></input>
                    <br/>
                    <h2>Length of the sentence: {" "}{this.state.List.length}</h2>
                    <h2>Number of Occurence: {" "}{this.state.counter}</h2>
                    <br/>
                    <button onClick={(e) => this.wordCounter(e)}>Click</button>
                </form>
            </div>
        )
    }
}
export default WordCount;