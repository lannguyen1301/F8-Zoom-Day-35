import PropTypes from "prop-types";
import styles from "./LoaderComp.module.scss";

// Component Comment Loader
function LoaderComp({ children }) {
    return <div className={styles.loader}></div>;
}

LoaderComp.propTypes = {
    className: PropTypes.string,
    // children: PropTypes.node.isRequired,
};
export default LoaderComp;
