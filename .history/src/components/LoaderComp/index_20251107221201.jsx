import PropTypes from "prop-types";
import styles from "./LoaderComp.module.scss";

// Component Comment Loader
function LoaderComp({ className, children }) {
    return <div className={className}>{children}</div>;
}

LoaderComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default LoaderComp;
