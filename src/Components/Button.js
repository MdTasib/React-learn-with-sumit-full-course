import React from 'react';

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { change, locale, show } = this.props;
        return (
            <div>
                <button onClick={() => change(locale)}>{locale === 'bn-BD' ? 'Change en-us' : 'Change bn-bd'}</button>
                {show && <p>Hey!</p>}
            </div>
        )
    }
}

export default Button;