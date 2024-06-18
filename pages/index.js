import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import TransactionForm from '../components/TransactionForm';
import Login from '../components/Login';

const IndexPage = () => {
    const handleInquiry = (data) => {
        // Lakukan logika untuk transaksi inquiry
        console.log('Transaction Inquiry:', data);
    };

    const handlePayment = (data) => {
        // Lakukan logika untuk transaksi payment
        console.log('Transaction Payment:', data);
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        // Lakukan validasi login di sini
        // Jika login berhasil, set isLoggedIn menjadi true
        // Jika login gagal, tampilkan pesan kesalahan
        setIsLoggedIn(true); // Sementara, untuk demonstrasi langsung set isLoggedIn menjadi true
    };
    return (
        <>
            <Box p={8}>
                {!isLoggedIn ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    // Tampilkan halaman home di sini setelah login berhasil
                    <Box>
                        <Heading mb={4}>BNI Transactions</Heading>
                        <TransactionForm onInquiry={handleInquiry} onPayment={handlePayment} />
                    </Box>
                )}
            </Box>
        </>
    );
};

export default IndexPage;
