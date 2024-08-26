import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from "../../redux/form/formActions"
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: '' });
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.username || !values.email || !values.password) {
      setModalMessage('Por favor, completa todos los campos.');
      setShowModalInfo(true);
      return;
    }

    if (values.password === 'mod7ReactUSIP') {
      dispatch(saveFormData(values));
      setModalMessage(`Bienvenido ${values.username}`);
    } else {
      setModalMessage('Password incorrecto');
    }

    setShowModalInfo(true);
  };

  const hideModalInfo = () => {
    setShowModalInfo(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    dispatch(clearFormData());
    resetForm();
    setShowLogoutModal(false);
  };

  const handleShowLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const hideLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const isLoggedIn = form.formData.username && form.formData.email;

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ModalInfo
        visible={showModalInfo}
        message={modalMessage}
        onClose={hideModalInfo}
        isWelcome={modalMessage.startsWith('Bienvenido')}
      />
      {showLogoutModal && (
        <ModalInfo
          visible={showLogoutModal}
          message="¿Desea cerrar sesión?"
          onClose={hideLogoutModal}
        >
          <button onClick={handleLogout}>Presiona para salir</button>
        </ModalInfo>
      )}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5>username: {form.formData.username}</h5>
          <h5>email: {form.formData.email}</h5>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
            {isLoggedIn && (
              <a href="#" onClick={handleShowLogoutModal} style={{ color: 'Blue', textDecoration: 'underline', marginLeft : '10px' }}>
              Logout
            </a>
            
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;