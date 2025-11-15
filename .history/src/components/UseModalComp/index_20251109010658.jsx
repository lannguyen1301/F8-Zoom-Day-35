import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Component Modal Hook
function UseModalComp() {
    const [showModal, setShowModal] = useState(false);
    const [post, setPost] = useState(null);

    // Open Modal
    const openModal = (post) => {
        setPost(post);
        setShowModal(true);
    };

    // Close Modal
    const closeModal = () => {
        setPost(null);
        setShowModal(false);
    };

    // Bấm ESC để thoát Modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };

        if (showModal) {
            document.addEventListener("keydown", handleEsc);
        }

        // Cleanup khi đóng Modal
        return () => document.removeEventListener("keydown", handleEsc);
    }, [showModal]);
    return;
}

UseModalComp.propTypes = {};
export default UseModalComp;
