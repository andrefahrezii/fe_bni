import { Box, Heading, Text, Card, VStack, HStack, Icon } from '@chakra-ui/react';
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

    return (
        <>
            <Box p={8}>
                <HStack spacing={4} mb={4}>
                    <Card borderRadius="15px" height="250px" width="450px" backgroundColor={"skyblue"}>
                        <VStack>
                            <HStack>
                                <Text>
                                    Rp 5.000.000,00 -,
                                </Text>
                            </HStack>
                            <HStack>
                                <Text>
                                    3304 - 91238 - 3213 - 3123
                                </Text>
                            </HStack>
                            <HStack>
                                <Text>
                                    PT ABC
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
            </Box>
        </>
    );
};

export default Home;
