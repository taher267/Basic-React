### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


## compositon Vs Inheritance
Inheritance, Bad practice in React : [Link](https://reactjs.org/docs/composition-vs-inheritance.html)


### Inheritance
React was small component and reuse ability
and also independent
but it is Dependent on another component
**Func 01**
import React, { Component } from 'react'

export default class Emoji extends Component {
    addEmoji = ({ text, emoji }) => `${emoji} ${text} ${emoji}`;

    render(decortedText) {
        let text = `This is default text`;
        if (decortedText) {
            text = decortedText
        }
        return (
            <div>{text}</div>
        )
    }
}


import Emoji from './Emoji';
**Func 02**
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
**Func 03**
import React, { Component } from 'react';
import Text from './Text';

class index extends Component {
    render() {
        return (
            <div>
                <Text />
            </div>
        );
    }
}

export default index;


### Composition
**Func 01**
import React from 'react';

const Text = ({ ad }) => {
    const text = `I'm default text again`;
    return <>{ad ? ad(text, 'EMO') : text}</>
}

export default Text;
**Func 02**
import React, { Component } from 'react'

export default class Emoji extends Component {
    ad = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return this.props.children({ ad: this.ad })
    }
}

**Func 03**

import React from 'react'
import Text from './Text'
import Emoji from './Emoji';

const index = () => {
    return (
        <div><Emoji>{
            ({ ad }) => <Text ad={ad} />
        }</Emoji></div>
    )
}

export default index;

### Nested
**Func 01**
import Text from './Text'
import Emoji from './Emoji';
import Bracket from './Bracket';

const index = () => {
    return (
        <div>
            <Emoji>{
                ({ ad }) => <Bracket>
                    {({ brk }) => <Text ad={ad} brk={brk} />}
                </Bracket>

            }</Emoji>


        </div>
    )
}

export default index;
**Func 02**
import React, { Component } from 'react'

export default class Bracket extends Component {
    brk = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ brk: this.brk })
    }
}
**Func 02 Prev Composition Emoji Func 01**


**Func 04**
import React from 'react';

const Text = ({ ad, brk }) => {

    const text = `I'm default text again`;
    return <>{brk ? (ad ? brk(ad(text, '🍎')) : brk(text)) : text}</>
}

export default Text;



