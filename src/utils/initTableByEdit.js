export const initTableByEdit = (rows, event, purchaseSum, paymentNumber) => {
    
    if (!rows || !event) return rows;

    if (event && event.target.name.startsWith('checkNumber_')) {
        const idx = event.target.name.split('checkNumber_')[1];
        rows[idx - 1].checknumber.value = event.target.value;
    }
    else if (event.target.name === 'firstCheckSum') {
        let val = Number(event.target.value);
        const min = Number(event.target.attributes["min"].value);
        const max = Number(event.target.attributes["max"].value);

        if (val >= min && val < max) {
            rows[0].checksum.value = val;
            val = (purchaseSum - val) / (paymentNumber -1);
        }
        else {
            rows[0].checksum.value = max - paymentNumber +1;
            val = 1;
        }
        

        for (let index = 1; index < rows.length; index++) {
            rows[index].checksum.value = val;
        }
    }

    return rows;
}