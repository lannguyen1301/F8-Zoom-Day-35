import PropTypes from "prop-types";

// Component Checkbox
function CheckBoxComp({ className, type, id, checked, onChange }) {
    return (
        <input
            className={className}
            type={type}
            id={id}
            checked={checked}
            onChange={onChange}
        />
    );
}

CheckBoxComp.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};
export default CheckBoxComp;
