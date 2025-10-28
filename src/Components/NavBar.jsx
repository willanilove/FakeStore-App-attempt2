import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                {/* Logo */}
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                    VW
                </Navbar.Brand>

                {/* Toggle button for mobile view */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible nav links (for small screens) */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/products">
                            Products
                        </Nav.Link>

                        <Nav.Link as={Link} to="/add-product">
                            Add Product
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
