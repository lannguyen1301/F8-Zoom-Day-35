import PropTypes from "prop-types";
import clsx from "clsx"; 

// Component icon
function IconComp({ className }) {
return <i className={className}></i>
}

IconComp.propTypes = {
    className: PropTypes.string,
}
export default IconComp;