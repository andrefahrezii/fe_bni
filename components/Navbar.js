import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
    return (
        <Box
            px={4}
            py={2}
            bg="white"
            h="84px"
            // borderBottom="1px"
            borderBottomColor="#9299A4"
            boxShadow="xl"
            borderColor="#9299A4"
        >
            <Flex align="center" justify="space-between">
                <NextLink href="/" passHref>
                    <Link color="black" fontWeight="bold" fontSize="lg">
                        BNI Transactions
                    </Link>
                </NextLink>
                <Flex>
                    <NextLink href="/inquiry" passHref>
                        <Link color="black" mx={2}>
                            Inquiry
                        </Link>
                    </NextLink>
                    <NextLink href="/payment" passHref>
                        <Link color="black" mx={2}>
                            Payment
                        </Link>
                    </NextLink>
                    <NextLink href="/report" passHref>
                        <Link color="black" mx={2}>
                            Report
                        </Link>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
