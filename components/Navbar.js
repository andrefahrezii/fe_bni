import { Box, Flex, Link as ChakraLink, Menu, MenuButton, MenuList, MenuItem, Avatar, Text, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiUser } from 'react-icons/fi'; // Menggunakan react-icons untuk ikon pengguna

const Navbar = () => {
    return (
        <Box
            px={4}
            py={2}
            bg="white"
            h="54px"
            borderBottom="1px"
            borderBottomColor="#9299A4"
            boxShadow="xl"
            borderColor="#9299A4"
        >
            <Flex align="center" justify="space-between">
                <ChakraLink color="black" fontWeight="bold" fontSize="lg" href="/" passHref>
                    BNI Transactions
                </ChakraLink>
                <Flex align="center">
                    <ChakraLink href="/inquiry" passHref color="black" mx={2}>
                        Inquiry
                    </ChakraLink>
                    <ChakraLink color="black" mx={2} href="/payment" passHref>
                        Payment
                    </ChakraLink>
                    {/* <NextLink href="/report" passHref> */}
                    <ChakraLink color="black" mx={2}>
                        Report
                    </ChakraLink>
                    {/* </NextLink> */}
                    <Menu>
                        <MenuButton as={IconButton} icon={<FiUser />} variant="link" ml={4}>
                            <Avatar size="sm" name="User Name" src="https://bit.ly/dan-abramov" />
                            <Text ml={2} display={{ base: 'none', md: 'inline' }}>User Name</Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
