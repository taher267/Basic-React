import Emoji from './Emoji';

class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const decoretedText = this.addEmoji({ text: 'This is my text', emoji: "📧" });
        return super.render(decoretedText);
    }
}

export default Text;