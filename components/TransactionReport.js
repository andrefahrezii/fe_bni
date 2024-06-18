// components/TransactionReport.js
import { Box, Heading, Text } from '@chakra-ui/react';
import { transactions } from '../data/transactions';

const TransactionReport = () => {
    const openingBalance = 500000000;
    const endingBalance = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'credit') {
            return acc + transaction.amount;
        } else {
            return acc - (transaction.amount + (transaction.fee || 0));
        }
    }, openingBalance);

    return (
        <Box>
            <Heading size="md" mb={4}>Transaction Report</Heading>
            <Text mb={2}>Opening Balance: Rp {openingBalance.toLocaleString()}</Text>
            {transactions.map((transaction, index) => (
                <Box key={index} mb={2} p={4} borderWidth="1px" borderRadius="lg">
                    <Text>Date: {transaction.date}</Text>
                    <Text>Description: {transaction.description}</Text>
                    <Text>Type: {transaction.type}</Text>
                    <Text>Amount: Rp {transaction.amount.toLocaleString()}</Text>
                    <Text>Fee: Rp {transaction.fee ? transaction.fee.toLocaleString() : '0'}</Text>
                </Box>
            ))}
            <Text mt={4}>Ending Balance: Rp {endingBalance.toLocaleString()}</Text>
        </Box>
    );
};

export default TransactionReport;
