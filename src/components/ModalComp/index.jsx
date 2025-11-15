import PropTypes from "prop-types";
import clsx from "clsx";
import DescComp from "../DescComp";
import ButtonComp from "../ButtonComp";
import SubHeadingComp from "../SubHeadingComp";
import styles from "./ModalComp.module.scss";

// Component Modal
function ModalComp({
    className,
    title,
    id,
    body,
    post,
    onClick,
    onClose,
    onBackdropClick,
}) {
    if (!post) return null;
    // tránh crash nếu không có post
    return (
        <DescComp
            id="modal"
            className={clsx(styles.modalBackdrop, styles.show)}
        >
            <DescComp
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <ButtonComp
                    id="modalClose"
                    className={styles.modalClose}
                    onClick={onClose}
                >
                    &times;
                </ButtonComp>
                <DescComp className={styles.modalContent}>
                    <SubHeadingComp className={styles.subHeading}>
                        {post.title}
                    </SubHeadingComp>
                    <p>{post.body}</p>
                </DescComp>
            </DescComp>
        </DescComp>
    );
}

ModalComp.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    post: PropTypes.string,
    body: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onBackdropClick: PropTypes.func,
};
export default ModalComp;
