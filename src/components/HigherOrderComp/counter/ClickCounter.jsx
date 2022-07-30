import withCounter from '../HOC/withCounter'
const ClickCounter = ({ count, increment }) => {
    return <div><button onClick={increment}>Click {count} times</button></div>
}

export default withCounter(ClickCounter)