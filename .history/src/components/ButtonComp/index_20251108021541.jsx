import PropTypes from "prop-types";

import styles from "./ButtonComp.module.scss";

function ButtonComp({ className, children, onClick }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
}

ButtonComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default ButtonComp;
