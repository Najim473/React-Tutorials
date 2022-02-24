import React from 'react';
export default class Form extends React.Component {
    state = {
        title: 'Javascript',
        text: 'Programmers Loves Javascript',
        library: 'React',
        isAwesome: true,
    };
    handleChange = (e) => {
        // this.setState({
        //     title: e.target.value,
        //     text: e.target.value,
        // });
        if (e.target.type === 'text') {
            console.log(e.target.value);
            this.setState({
                title: e.target.value,
                // text: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            console.log(e.target.value);
            this.setState({
                text: e.target.value,
                // text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            // console.log(e.target.value);
            this.setState({
                library: e.target.value,
                // text: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            // console.log(e.target.value);
            this.setState({
                isAwesome: e.target.checked,
                // text: e.target.value,
            });
        } else {
            // console.log(sel);
            console.log(e.target.type);
            console.log('Nothing Here');
        }
    };
    submitHandler = (e) => {
        e.preventDefault();
        const { title, text, library, isAwesome } = this.state;
        console.log(title, text, library, isAwesome);
    };
    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null} />
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea
                        name="text"
                        value={text}
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">Ract</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    {/* <p>I have Select {library} from the select options</p> */}
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        checked={isAwesome}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
