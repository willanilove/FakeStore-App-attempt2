import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { getProduct, updateProduct } from "../api";
import LoadingSpinner from "../Components/LoadingSpinner";

const EditProduct = () => {
    // Extracting prod ID fro URL:
    const { id } = useParams();
    // State to store prod info & UI feedback:
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // When component loads; fetch prod data
    useEffect(() => {
        getProduct(id)
            .then((res) => setSelectedProduct(res.data))
            .catch(() => setMessage("Failed to load product"))
            .finally(() => setIsLoading(false));
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            [e.target.name]: e.target.value,
        });
    };

    // When user clicks button, this sends new product info to the API & displays message
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, selectedProduct)
            .then(() =>
                setMessage("Product updated successfully (mock response)")
            )
            .catch(() => setMessage("Failed to update product"));
    };

    // Spinner
    // if (loading) return <Spinner animation="border" className="m-5" />;
    if (isLoading) return <LoadingSpinner />;

    // 'Edit Product'Form
    return (
        <Container className="mt-4">
            <h2>Edit Product</h2>
            {message && <Alert variant="info">{message}</Alert>}
            {selectedProduct && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title"
                            value={selectedProduct.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="number"
                            value={selectedProduct.price}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={selectedProduct.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            name="category"
                            value={selectedProduct.category}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Product
                    </Button>
                </Form>
            )}
        </Container>
    );
};

export default EditProduct;
