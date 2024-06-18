// data/transactions.js
export const transactions = [
    {
        date: '2023-09-01',
        description: 'Opening Balance',
        type: 'credit',
        amount: 500000000,
    },
    {
        date: '2023-09-10',
        description: 'Transfer to BNI',
        type: 'debit',
        amount: 101500000,
    },
    {
        date: '2023-09-20',
        description: 'Electricity Payment',
        type: 'debit',
        amount: 5000000,
        fee: 7500,
    },
];
