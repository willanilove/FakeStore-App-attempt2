import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ className = "m-5", animation = "border" }) => {
    return <Spinner animation={animation} className={className} />;
};

export default LoadingSpinner;
