const tempConvert = (scale, temperature) => {
    if (scale === 'f') return (temperature - 32) * (5 / 9);
    return (temperature * 9 / 5) + 32;
}

export default tempConvert
