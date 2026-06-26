function price(items) {
    const priceValue = Number(items?.productPrice ?? 0);
    const discount = Number(items?.productPriceOff ?? 0);

    if (!priceValue || discount <= 0) {
        return priceValue;
    }

    return priceValue - Math.floor(priceValue * discount / 100);
}

export default price;
