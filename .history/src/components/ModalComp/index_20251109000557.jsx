import clsx from "clsx";
import styles from "./ModalComp.scss";

// Component Modal
function ModalComp() {
    if (!post) return null;
    // tránh crash nếu không có post
    return (
        <div id="modal">
            <div className={styles.modalContainer}></div>
        </div>
    );
}
export default ModalComp;
