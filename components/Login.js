import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Center, Text } from '@chakra-ui/react';

const Login = ({ onSendOtp, onVerifyOtp, error }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = async () => {
        const success = await onSendOtp(phoneNumber);
        if (success) {
            setOtpSent(true);
        }
    };

    return (
        <Center height="100vh">
            <Box width="400px" p={8}>
                <VStack spacing={6} align="center">
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



                    {error && <Text color="red.500">{error}</Text>}

                    {!otpSent ? (
                        <Button
                            width="100%"
                            onClick={handleSendOtp}
                            bg="#FF6B00"
                            color="white"
                            size="lg"
                            _hover={{ bg: "#E65A00" }}
                            borderRadius="999px"
                        >
                            Login
                        </Button>
                    ) : (
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
                                placeholder='298764'
                            />
                            <Button
                                width="100%"
                                onClick={() => onVerifyOtp(phoneNumber, otp)}
                                bg="#FF6B00"
                                color="white"
                                size="lg"
                                _hover={{ bg: "#E65A00" }}
                                borderRadius="99px"
                            >
                                Verify OTP
                            </Button>
                        </FormControl>
                    )}
                </VStack>
            </Box>
        </Center>
    );
};

export default Login;
