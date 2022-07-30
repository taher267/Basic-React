const Angle = ({ children }) => {
    const ang = (text) => `<${text}>`
    return children({ ang })
}

export default Angle;
