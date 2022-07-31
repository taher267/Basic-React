const vatCal = ({ price, vat, type = '%' }) => {
    let checkVat = 0;
    if (!Number.isNaN(parseInt(vat))) checkVat = parseInt(vat);
    if (type === '%') return (price ?? 1) * checkVat / 100;

    return 0;
}

export default vatCal