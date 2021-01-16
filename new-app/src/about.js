import React from 'react';
class About extends React.Component {
    constructor() {
        super();
        this.state = {
            foo: '',
            bar: ''
        };
    }
    update(e) {
        this.setState({
            foo: this.refs.foo.value,
            bar: this.refs.bar.value
        });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref="foo"
                    placeholder="Please Enter Name"
                    onChange={this.update.bind(this)} />
                {this.state.foo}
                <br />
                <input
                    type="email"
                    ref="bar"
                    placeholder="Please Enter Email"
                    onChange={this.update.bind(this)} />
                {this.state.bar}
            </div>
        );
    }
}
export default About;
//const About = () => {
//	return(
//        <div>
//           This is page of About Us
//        </div>
//	);
//}
//export default About;