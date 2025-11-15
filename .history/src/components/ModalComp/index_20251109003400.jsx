import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./ModalComp.scss";

// Component Modal
function ModalComp() {
    if (!post) return null;
    // tránh crash nếu không có post
    return (
        <div id="modal" className={clsx(styles.modalBackdrop, styles.show)}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    id="modalClose"
                    className={styles.modalClose}
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="modalContent">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}

ModalComp.propTypes = {};
export default ModalComp;
