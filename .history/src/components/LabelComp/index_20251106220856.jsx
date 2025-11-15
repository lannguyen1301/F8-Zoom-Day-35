import PropTypes from "prop-types";


// Component Label
function LabelComp({children, className, htmlFor}) {
    return <label className={className} htmlFor={htmlFor}>{children}</label>;
}

LabelComp.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
}
export default LabelComp;