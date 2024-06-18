// components/PaymentTransaction.js
import { Box, Heading, Text } from '@chakra-ui/react';
import { transactions } from '../data/transactions';

const PaymentTransaction = () => {
    const paymentTransactions = transactions.filter(transaction => transaction.description.includes('Payment'));

    return (
        <Box mb={8}>
            <Heading size="md" mb={4}>Payment Transactions</Heading>
            {paymentTransactions.map((transaction, index) => (
                <Box key={index} mb={2} p={4} borderWidth="1px" borderRadius="lg">
                    <Text>Date: {transaction.date}</Text>
                    <Text>Description: {transaction.description}</Text>
                    <Text>Amount: Rp {transaction.amount.toLocaleString()}</Text>
                    <Text>Fee: Rp {transaction.fee ? transaction.fee.toLocaleString() : '0'}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default PaymentTransaction;
