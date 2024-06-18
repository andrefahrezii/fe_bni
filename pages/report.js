import { Box, Heading } from '@chakra-ui/react';
import TransactionReport from '../components/TransactionReport';
import { useEffect, useState } from 'react';

export default function Report() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Box p={8}>
            <Heading mb={4}>Transaction Report</Heading>
            <TransactionReport />
        </Box>
    );
}
