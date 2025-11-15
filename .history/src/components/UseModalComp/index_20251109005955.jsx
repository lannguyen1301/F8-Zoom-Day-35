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
    return;
}

UseModalComp.propTypes = {};
export default UseModalComp;
