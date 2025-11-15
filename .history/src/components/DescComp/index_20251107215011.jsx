import PropTypes from "prop-types";

// Component Desc Wrapper
function DescComp({ className, children }) {
    return <div className={className}>{children}</div>;
}

DescComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default DescComp;
