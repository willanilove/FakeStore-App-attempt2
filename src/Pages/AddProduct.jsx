import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const AddProduct = () => {
    // State to store form input values
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [confirmation, setConfirmation] = useState("");

    // 'handle' form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // New prod obj from form inputs
        const newProduct = {
            title,
            price: parseFloat(price),
            description,
            category,
        };

        // Sends POST request to FakeStoreAPI
        try {
            const response = await axios.post(
                "https://fakestoreapi.com/products",
                newProduct
            );
            if (response.status === 200 || response.status === 201) {
                setConfirmation("Product created successfully!");
                // Clear form after success
                setTitle("");
                setPrice("");
                setDescription("");
                setCategory("");
            }
        } catch (error) {
            setConfirmation("Something went wrong. Please try again.");
        }
    };

    // Display form & confirmation message
    return (
        <Container className="mt-4">
            <h2>Add a New Product</h2>
            {confirmation && <Alert variant="info">{confirmation}</Alert>}
            <Form onSubmit={handleSubmit}>
                {/* Prod title input */}
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Prod price input */}
                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Product description input */}
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter product description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Prod category input */}
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Submit button */}
                <Button variant="primary" type="submit">
                    Create Product
                </Button>
            </Form>
        </Container>
    );
};

export default AddProduct;
