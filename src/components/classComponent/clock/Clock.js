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
        // console.log('Clock component render');
        const { date, locale } = this.state;

        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //             Click
        //         </Button>
        //     );
        // } else {
        //     button = (
        //         <Button change={this.handleClick} locale="bn-BD">
        //             Click
        //         </Button>
        //     );
        // }
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
                {/* {button} */}
                {locale === 'bn-BD' ? (
                    <Button
                        change={this.handleClick}
                        locale="en-US"
                        show={false}
                        // enable
                    />
                ) : (
                    <Button
                        change={this.handleClick}
                        locale="bn-BD"
                        show
                        // enable={false}
                    />
                )}
            </div>
        );
    }
}
export default Clock;
