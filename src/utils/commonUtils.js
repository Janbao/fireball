// eslint-disable-next-line import/no-anonymous-default-export
export default {
    formatNumber(number) {
        return Number(number).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'");
    },

    trimPriceToThreeDecimal(price) {
        if (price % 1 === 0) {
            return price;
        } else {
            let cachedPrice = price.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0];

            while (cachedPrice.charAt(cachedPrice.length-1) === '0') {
                cachedPrice = cachedPrice.substring(0, cachedPrice.length - 1);
            }

            return parseFloat(cachedPrice);
        }
    },

    formatNumberWithCommas(number) {
        const options = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3
        };

        return Number(number).toLocaleString('en', options);
    },

    formatTraits(traits) {
        let traitsKeys = ['NRG', 'AGG', 'SPK', 'BRN', 'EYS', 'EYC'];

        return traits.reduce((item, val, i) => ({...item,[traitsKeys[i]]:val}),{});
    },

    cutAddress(address) {
        return address.slice(0, 4) + '~~' + address.slice(38);
    },

    getSellerShortAddress(item) {
        let sellerAddress = item.seller;

        return `${sellerAddress.substring(0, 4)}...${sellerAddress.substring(sellerAddress.length - 4, sellerAddress.length)}`;
    },

    basicSort(array, sortType, sortDir) {
        return [...array].sort((a, b) => sortDir === 'asc' ? a[sortType] - b[sortType] : b[sortType] - a[sortType]);
    },
}