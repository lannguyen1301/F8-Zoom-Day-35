import PropTypes from "prop-types";

function HeaderComp({ className, children }) {
    return <header className={className}>{children}</header>;
}
HeaderComp.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default HeaderComp;
