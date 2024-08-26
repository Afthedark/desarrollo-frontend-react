import { motion } from 'framer-motion'

const ModalInfo = ({ visible, message, onClose, children, isWelcome }) => {
    if (!visible) {
        return null;
    }

    const modalClass = isWelcome ? "notification-success" : "notification-default";
    const closeButtonClass = isWelcome ? "close-btn-success" : "close-btn-default";

    return (
        <div className="modal-overlay">
            <motion.div
                className={modalClass}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p>{message}</p>
                    {children}
                </div>
                <button
                    className={closeButtonClass}
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;