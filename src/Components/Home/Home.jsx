import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

function Home() {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle payment transaction here
    };
    return(
        <Box maxW="600px" mx="auto" mb={10}>
        <Heading as="h1" textAlign="center" my="8">
        Payment Gateway
        </Heading>
        <Box bg="white" boxShadow="md" p="8">
        <form onSubmit={handleSubmit}>
            <FormControl id="name" mb="4">
            <FormLabel>Name on Card</FormLabel>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </FormControl>
            <FormControl id="cardNumber" mb="4">
            <FormLabel>Card Number</FormLabel>
            <Input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            </FormControl>
            <FormControl id="expiryDate" mb="4">
            <FormLabel>Expiry Date</FormLabel>
            <Input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
            />
            </FormControl>
            <FormControl id="cvv" mb="4">
            <FormLabel>CVV</FormLabel>
            <Input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
            />
            </FormControl>
            <Button type="submit" colorScheme="blue" mt="8">
            Submit
            </Button>
        </form>
        </Box>
    </Box>
    );
}

export default Home;
