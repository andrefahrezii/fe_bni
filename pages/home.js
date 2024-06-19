import { Box, Heading, Text, Card, VStack, HStack, Icon, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FiCreditCard, FiFileText } from 'react-icons/fi';
import { useState } from 'react';

const Home = ({ token }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [filterDate, setFilterDate] = useState('');
    const [filterType, setFilterType] = useState('');

    const handleInquiry = (data) => {
        console.log('Transaction Inquiry:', data);
    };

    const handlePayment = (data) => {
        console.log('Transaction Payment:', data);
    };
    const data = token
    const history = data.historyTransaksi
    const name = data.nama
    const saldo = data.saldoSekarang
    const norek = data.nomor_rekening



    return (
        <>
            <Box p={8}>
                <HStack spacing={4} mb={4}>
                    <Card borderRadius="15px" height="250px" width="450px" backgroundColor={"skyblue"}>
                        <VStack>
                            <HStack>
                                <Text>
                                    Rp {saldo}-,
                                </Text>
                            </HStack>
                            <HStack>
                                <Text>
                                    {norek}
                                </Text>
                            </HStack>
                            <HStack>
                                <Text>
                                    {name}
                                </Text>
                            </HStack>
                        </VStack>
                    </Card>
                    <Card bgColor="deeppink" width="200px" h="75px" borderRadius="15px" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                        <Icon as={FiCreditCard} boxSize="6" mb="2" color="white" />
                        <Text color="white">Inquiry</Text>
                    </Card>
                    <Card bgColor="deeppink" width="200px" h="75px" borderRadius="15px" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                        <Icon as={FiCreditCard} boxSize="6" mb="2" color="white" />
                        <Text color="white">Payment</Text>
                    </Card>
                    <Card bgColor="deeppink" width="200px" h="75px" borderRadius="15px" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                        <Icon as={FiFileText} boxSize="6" mb="2" color="white" />
                        <Text color="white">Report</Text>
                    </Card>
                </HStack>

                {/* Tabel Transaksi */}
                <Box mt={8}>
                    <Heading size="md" mb={4}>Transaction History</Heading>
                    <Table variant="striped" colorScheme="gray">
                        <Thead>
                            <Tr>
                                <Th>Type</Th>
                                <Th>Amount</Th>
                                <Th>Transaction Fee</Th>
                                <Th>Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {history.map((transaction) => (
                                <Tr key={transaction.id}>
                                    <Td>{transaction.type}</Td>
                                    <Td>{transaction.amount}</Td>
                                    <Td>{transaction.transactionFee}</Td>
                                    <Td>{transaction.date}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </>
    );
};

export default Home;
