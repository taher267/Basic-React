import withCounter from '../HOC/withCounter'
const ClickCounter = ({ count, increment }) => {
    return <div><button onMouseOver={increment}>Hover {count} times</button></div>
}
export default withCounter(ClickCounter);