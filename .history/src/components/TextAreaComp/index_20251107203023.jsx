import PropTypes from "prop-types";

// Component Text Area
function TextAreaComp({
    className,
    name,
    id,
    onChange,
    placeholder,
    value,
    required = true,
}) {
    return (
        <textarea
            name={name}
            id={id}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
        />
    );
}
TextAreaComp.propTypes = {
    className: PropTypes.string, name: PropTypes.string, id: PropTypes.string, onChange: PropTypes.func, placeholder: PropTypes.string
}
export default TextAreaComp;