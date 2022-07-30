const Text = ({ ad: addEmoji, brk, ang }) => {

    let text = `I'm default text again`;

    if (ang) text = `${ang(text)}`;
    if (brk) text = `${brk(text)}`;
    if (addEmoji) text = `${addEmoji(text, '🍎')}`;

    return text;
    // return <>{brk ? (ad ? brk(ad(text, '🍎')) : brk(text)) : text}</>
}

export default Text;
