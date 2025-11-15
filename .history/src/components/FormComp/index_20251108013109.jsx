import PropTypes from "prop-types";
import styles from "./FormComp.module.scss";

// Component Form
function FormComp({ className, children, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={styles.formInner}>
            {children}
        </form>
    );
}

FormComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default FormComp;
