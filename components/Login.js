import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Center, Text } from '@chakra-ui/react';

const Login = ({ onLogin }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phoneNumber)) {
            setError('Nomor telepon harus berupa angka saja');
            return;
        }

        try {
            // Lakukan validasi nomor telepon dan password di sini
            // Jika valid, kirim OTP ke nomor telepon dan set otpSent menjadi true
            // Jika tidak valid, tampilkan pesan kesalahan
            setError('');
            setOtpSent(true); // Sementara, untuk demonstrasi langsung set otpSent menjadi true
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    const handleVerifyOTP = async () => {
        const otpRegex = /^\d+$/;
        if (!otpRegex.test(otp)) {
            setError('OTP harus berupa angka saja');
            return;
        }

        try {
            // Lakukan validasi OTP di sini
            // Jika OTP valid, panggil fungsi onLogin untuk masuk ke halaman home
            // Jika tidak valid, tampilkan pesan kesalahan
            setError('');
            onLogin(); // Sementara, untuk demonstrasi langsung panggil onLogin
        } catch (error) {
            console.error('OTP verification failed:', error.message);
        }
    };

    return (
        <Center height="100vh">
            <Box width="400px" p={8}>
                {!otpSent ? (
                    <VStack spacing={6} align="center">
                        <Box>
                            <FormControl width="100%">
                                <FormLabel fontSize="lg">Nomor Telepon</FormLabel>
                                <Input
                                    width="600px"
                                    height="56px"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    size="lg"
                                    borderRadius="12"
                                    borderColor="#9299A4"
                                    placeholder='6282175999896'
                                />
                            </FormControl>

                            <FormControl width="100%">
                                <FormLabel fontSize="lg">Password</FormLabel>
                                <Input
                                    width="600px"
                                    height="56px"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    size="lg"
                                    borderRadius="12"
                                    borderColor="#9299A4"
                                    placeholder='password'
                                />
                            </FormControl>
                        </Box>
                        {error && <Text color="red.500">{error}</Text>}
                        <Button width="100%" onClick={handleLogin} bg="#FF6B00" color="white" size="lg" _hover={{ bg: "#E65A00" }} borderRadius="999px">
                            Login
                        </Button>
                    </VStack>
                ) : (
                    <VStack spacing={6} align="center">
                        <FormControl width="100%">
                            <FormLabel fontSize="lg">OTP</FormLabel>
                            <Input
                                width="600px"
                                height="56px"
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                size="lg"
                                borderRadius="12"
                                borderColor="#9299A4"
                            />
                        </FormControl>
                        {error && <Text color="red.500">{error}</Text>}
                        <Button width="100%" onClick={handleVerifyOTP} bg="#FF6B00" color="white" size="lg" _hover={{ bg: "#E65A00" }}>
                            Verify OTP
                        </Button>
                    </VStack>
                )}
            </Box>
        </Center>
    );
};

export default Login;
