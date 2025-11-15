import PropTypes from "prop-types";


// Component Label
function LabelComp({children, className, htmlFor}) {
    return <label className={className} htmlFor={htmlFor}>{children}</label>;
}

export default LabelComp;