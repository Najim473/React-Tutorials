// STATE AND LIFECYCLE

import React from 'react';
// import reactDom from 'react-dom';
import Button from './Button';
class Clock extends React.Component {
    // state = { date: new Date() };
    state = { date: new Date(), locale: 'bn-BD' };
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date(), locale: 'bn-BD' }; // Because of here don't use props
    //     this.handleClick = this.handleClick.bind(this);
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
    handleClick = (locale) => {
        // console.log('Click event is working now');
        this.setState({
            locale,
        });
    };
    render() {
        console.log('Clock component render');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                {/* <button type="button" onClick={() => this.handleClick('en-US')}>
                    Click Here
                </button> */}
                <Button change={this.handleClick} locale="en-US">
                    Click
                </Button>
            </div>
        );
    }
}
export default Clock;
