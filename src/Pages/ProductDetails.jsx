import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// prettier-ignore
import { Container, Card, Button, Alert, Modal } from "react-bootstrap";
import { getProduct, deleteProduct } from "../api";
import LoadingSpinner from "../Components/LoadingSpinner";
const ProductDetails = () => {
    // Extracting prod ID fro URL:
    const { id } = useParams();
    // Nav redirects after delete:
    const navigate = useNavigate();
    // State to store prod info & UI feedback:
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);

    // When component loads; fetch prod data
    useEffect(() => {
        getProduct(id)
            .then((res) => setSelectedProduct(res.data))
            .catch(() => setErrorMessage("Failed to load product"))
            .finally(() => setIsLoading(false));
    }, [id]);

    // Delete prod & redirect to prod page
    const confirmDeleteProduct = () => {
        deleteProduct(id)
            .then(() => {
                alert("Product deleted successfully (mock)");
                navigate("/products");
            })
            .catch(() => alert("Failed to delete"));
    };

    // Spinner
    // if (loading) return <Spinner animation="border" className="m-5" />;
    if (isLoading) return <LoadingSpinner />;
    // Error message if fetch fails
    if (errorMessage) return <Alert variant="danger">{errorMessage}</Alert>;
    // Display prod details inside Bootstrap card
    return (
        <Container className="mt-4">
            <Card>
                <Card.Img
                    variant="top"
                    src={selectedProduct.image}
                    style={{ objectFit: "contain", height: "300px" }}
                />
                <Card.Body>
                    <Card.Title>{selectedProduct.title}</Card.Title>
                    <Card.Text>{selectedProduct.description}</Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {selectedProduct.category}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${selectedProduct.price}
                    </Card.Text>
                    <Button
                        as={Link}
                        to={`/edit-product/${id}`}
                        variant="warning"
                        className="me-2"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => setConfirmDelete(true)}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={confirmDelete} onHide={() => setConfirmDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setConfirmDelete(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteProduct}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ProductDetails;
