import PropTypes from "prop-types";

// Component Form
function FormComp({ className, children, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
}

FormComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default FormComp;
