import React, { Component } from 'react';
class Message extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    Counter() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.Counter()}>Count</button>
            </div>
        )
       
    }
}
export default Message;
//import React, { Component } from 'react';
//class Message extends Component {
//    constructor() {
//        super()
//        this.state = {
//            count: 0
//        }
//    }
//    counter() {
//        this.setState({
//            count: this.state.count + 1
//        })
//    }
//    render() {
//        return (
//            <div>
//                <h1> {this.state.count}</h1>
//                <button onClick={() => this.counter()}>Subscribe</button>
//            </div>
//        )
//    }
//}
//export default Message;