// components/TransactionInquiry.js
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { transactions } from '../data/transactions';

const TransactionInquiry = () => {
    return (
        <Box mb={8}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Description</Th>
                        <Th>Type</Th>
                        <Th isNumeric>Amount</Th>
                        <Th isNumeric>Fee</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {transactions.map((transaction, index) => (
                        <Tr key={index}>
                            <Td>{transaction.date}</Td>
                            <Td>{transaction.description}</Td>
                            <Td>{transaction.type}</Td>
                            <Td isNumeric>{transaction.amount.toLocaleString()}</Td>
                            <Td isNumeric>{transaction.fee ? transaction.fee.toLocaleString() : '-'}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default TransactionInquiry;
