// STATE AND LIFECYCLE

import React from 'react';
// import reactDom from 'react-dom';
class Clock extends React.Component {
    state = { date: new Date() };
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() }; // Because of here don't use props
    // }
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}
export default Clock;

// FOR APP JS
<Clock locale="us-EN" />;
