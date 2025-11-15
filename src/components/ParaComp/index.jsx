import PropTypes from "prop-types";
function ParaComp({ children, className }) {
    return <p className={className}>{children}</p>;
}

ParaComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ParaComp;
