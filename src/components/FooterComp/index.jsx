import PropTypes from "prop-types";

function FooterComp({ className, children }) {
    return <footer className={className}>{children}</footer>;
}
FooterComp.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default FooterComp;
