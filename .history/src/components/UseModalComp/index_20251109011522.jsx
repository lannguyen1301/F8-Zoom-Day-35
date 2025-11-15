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

    // Khóa cuộn trang
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup tránh lỗi
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    // ĐóngModal khi click ra bên ngoài
    const handleBackdropClick = (e) => {
        if (e.target.classList.containers("modalBackdrop")) {
            closeModal();
        }
    };
    return { showModal, post, openModal, closeModal, handleBackdropClick };
}

UseModalComp.propTypes = {};
export default UseModalComp;
