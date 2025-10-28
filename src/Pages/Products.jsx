import { useEffect, useState } from "react";
// prettier-ignore
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
import LoadingSpinner from "../Components/LoadingSpinner";

const Products = () => {
    // State to store prod list & UI feedback:
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // When component loads; fetch product list
    useEffect(() => {
        getProducts()
            .then((res) => setProductList(res.data))
            .catch(() => setErrorMessage("Failed to fetch products"))
            .finally(() => setIsLoading(false));
    }, []);

    // Spinner
    // if (loading) return spinner anima;
    if (isLoading) return <LoadingSpinner />;
    // Error message if fetch fails
    if (errorMessage) return <Alert variant="danger">{errorMessage}</Alert>;

    // Display prod cards inside Bootstrap grid
    return (
        <Container className="mt-4">
            <h2 className="mb-4">Products</h2>
            <Row>
                {productList.map((item) => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={item.image}
                                height={200}
                                style={{ objectFit: "contain" }}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>${item.price}</Card.Text>
                                <Button
                                    as={Link}
                                    to={`/products/${item.id}`}
                                    variant="primary"
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
