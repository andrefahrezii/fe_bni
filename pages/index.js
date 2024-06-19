import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Login from '../components/Login';
import Home from './home'; // Pastikan import Home dari file yang sesuai

const IndexPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const handleSendOtp = async (phoneNumber) => {
        try {
            const response = await fetch('http://localhost:3001/api/auth/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomor_telepon: phoneNumber,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send OTP');
            }

            const data = await response.json();
            console.log('OTP sent successfully:', data.token);


            // Set state untuk menandai bahwa OTP telah dikirim
            return data;

        } catch (error) {
            console.error('Login failed:', error.message);
            setError('Failed to send OTP');
            return false;
        }
    };

    const handleVerifyOtp = async (phoneNumber, otp) => {
        const otpRegex = /^\d+$/;
        if (!otpRegex.test(otp)) {
            setError('OTP harus berupa angka saja');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomor_telepon: phoneNumber,
                    otp: otp,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to verify OTP');
            }

            const data = await response.json();
            console.log('OTP verified successfully:', data);
            const token = data.token

            localStorage.setItem('token:', token)
            // Panggil prop onLogin untuk mengirim token ke IndexPage
            setIsLoggedIn(true);
            setToken(data);
            setError('');
            console.log(token, "token")

        } catch (error) {
            console.error('OTP verification failed:', error.message);
            setError('Failed to verify OTP');
        }
    };

    return (
        <>
            <Box p={8}>
                {!isLoggedIn ? (
                    <Login
                        onSendOtp={handleSendOtp}
                        onVerifyOtp={handleVerifyOtp}
                        error={error}
                    />
                ) : (
                    <Home token={token} />
                )}
            </Box>
        </>
    );
};

export default IndexPage;
