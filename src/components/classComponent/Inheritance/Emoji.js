import React from 'react';
export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render(override) {
        let text = 'This is emoji comment';
        if (override) text = override;
        return ( {text}) ;
    }
}
