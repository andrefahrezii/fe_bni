import { Box, Heading } from '@chakra-ui/react';
import TransactionInquiry from '../components/TransactionInquiry';
import { useEffect, useState } from 'react';

export default function Inquiry() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box p={8}>
            <Heading mb={4}>Transaction Inquiry</Heading>
            <TransactionInquiry />
        </Box>
    );
}
