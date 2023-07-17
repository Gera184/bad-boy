import { dateToString } from "./dateToString";
// TODO: UseMemo ???
export const initTable = (blabla, purchaseSum, paymentNumber, checkNumber, dueDate) => {
    console.log("initTable");


    const total = Number(purchaseSum);
    const payments = Number(paymentNumber);

    const check = Number(checkNumber);
    const sumPerPayment = Math.floor(total / payments);
    const remainder = total % payments;
    const date = new Date(dueDate);

    let paymentData = [];

    paymentData.push({
        paymentnumber: { value: 1 },
        PaymentDate: { value: dateToString(date) },
        checksum: {
            value: sumPerPayment + remainder,
            input: {
                name: "firstCheckSum",
                type: "number",
                min: 1,
                max: purchaseSum,
                readonly: payments === 1 // true/false
            }
        },
        checknumber: {
            value: check,
            input: {
                name: "checkNumber_1",
                type: "number",
            }
        }
    });


    if (payments > 1) {

        for (let index = 2; index < payments + 1; index++) {

            const row = {
                paymentnumber: { value: index },
                PaymentDate: { value: dateToString(new Date(date.setMonth(date.getMonth() + 1))).toString() },
                checksum: {
                    value: sumPerPayment,
                    // input: {
                    //     name: "checkSum_" + index,
                    //     type: "number",
                    // }
                },
                checknumber: {
                    value: check + index - 1,
                    input: {
                        name: "checkNumber_" + index,
                        type: "number",
                    }
                },
            }
            paymentData.push(row)
        }
    }
    return paymentData;
}