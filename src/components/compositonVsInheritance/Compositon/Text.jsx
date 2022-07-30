import React from 'react';

const Text = ({ ad, brk }) => {

    const text = `I'm default text again`;
    return <>{brk ? (ad ? brk(ad(text, '🍎')) : brk(text)) : text}</>
}

export default Text;
