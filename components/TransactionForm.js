import { useState } from 'react';
import { Box, Heading, VStack, Input, Button, Select } from '@chakra-ui/react';

const TransactionForm = ({ onInquiry, onPayment }) => {
    const [form, setForm] = useState({ date: '', description: '', type: '', amount: '', fee: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleInquiry = () => {
        onInquiry(form);
    };

    const handlePayment = () => {
        onPayment(form);
    };

    return (
        <Box>
            <VStack spacing={4} align="start">
                <Input name="date" value={form.date} onChange={handleChange} placeholder="Date (YYYY-MM-DD)" required />
                <Input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
                <Select name="type" value={form.type} onChange={handleChange} placeholder="Select transaction type" required>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </Select>
                <Input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" required />
                {form.type === 'debit' && (
                    <Input name="fee" value={form.fee} onChange={handleChange} placeholder="Transaction Fee" type="number" />
                )}
                <Button onClick={handleInquiry} colorScheme="teal">Inquiry</Button>
                <Button onClick={handlePayment} colorScheme="teal">Payment</Button>
            </VStack>
        </Box>
    );
};

export default TransactionForm;
