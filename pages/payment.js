import { Box, Heading } from '@chakra-ui/react';
import PaymentTransaction from '../components/PaymentTransaction';
import { useEffect, useState } from 'react';

export default function Payment() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box p={8}>
            <Heading mb={4}>Payment Transactions</Heading>
            <PaymentTransaction />
        </Box>
    );
}
