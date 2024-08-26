import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

const Navbar = () => {
    // Obtener el estado formData desde Redux
    const formData = useSelector((state) => state.form.formData);

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
            </ul>
            <div className="navbar-user-info">
                Bienvenido {formData.username ? `${formData.username}: ${formData.email}` : ""}
            </div>
        </nav>
    );
};

export default Navbar;
