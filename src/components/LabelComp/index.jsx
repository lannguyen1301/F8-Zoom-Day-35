import PropTypes from "prop-types";

// Component Label
function LabelComp({ children, className, htmlFor, ...props }) {
    return (
        <label className={className} htmlFor={htmlFor} {...props}>
            {children}
        </label>
    );
}

LabelComp.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
};
export default LabelComp;
