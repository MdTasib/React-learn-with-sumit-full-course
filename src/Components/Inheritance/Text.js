import Emoji from './Emoji';

class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am javascript language', '😍');
        return super.render(decoratedText);
    }
}

export default Text;