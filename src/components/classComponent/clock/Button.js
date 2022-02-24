import React from 'react';
class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        // console.log('Button component render');
        const { change, locale, show } = this.props;
        // if (!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change clock' : 'ঘড়ি পরিবর্তন'}
                </button>
                {show && <p>HI!</p>}
            </>
        );
    }
}

export default Button;
