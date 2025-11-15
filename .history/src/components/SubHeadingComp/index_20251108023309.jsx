import PropTypes from "prop-types";
// Component Heading H2
function SubHeadingComp({ className, children }) {
    return <h2 className={className}>{children}</h2>;
}

SubHeadingComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default SubHeadingComp;
