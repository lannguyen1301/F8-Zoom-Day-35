import PropTypes from "prop-types";
import clsx from "clsx"; 
function IconComp({ className }) {
return <i className={className}></i>
}

IconComp.prototype = {
    className: PropTypes.string,
}
export default IconComp;