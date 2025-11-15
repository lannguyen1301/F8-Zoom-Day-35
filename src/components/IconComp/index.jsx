import PropTypes from "prop-types";
// import clsx from "clsx";

// Component icon
function IconComp({ className, title }) {
    return <i className={className} title={title}></i>;
}

IconComp.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};
export default IconComp;
