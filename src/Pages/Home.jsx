import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ".//home.css";
import "../home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Container className="text-center mt-5">
                <h1>Welcome to VibeWardrobe</h1>
                {/* <h4>Curated looks. Everyday sparkle.</h4> */}
                <p>
                    Wear what moves you. Jewelry, clothing, and accessories that
                    speak your vibe.
                </p>
                <Button as={Link} to="/products" variant="primary">
                    View Products
                </Button>
            </Container>
        </div>
    );
};

export default Home;

// Testing
