import PropTypes from "prop-types";

// Component Comment Loader
function LoaderComp({ className, children }) {
    return <div className={className}>{children}</div>;
}

LoaderComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default LoaderComp;
