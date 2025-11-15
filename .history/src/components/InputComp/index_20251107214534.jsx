import PropTypes from "prop-types";
import styles from "./InputComp.scss";

// Component Input
function InputComp({
    className,
    placeholder,
    name,
    type,
    onChange,
    autoFocus = true,
    value,
    spellCheck = false,
    required = true,
}) {
    return (
        <input
            className={className}
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={onChange}
            spellCheck={spellCheck}
            value={value}
            required={required}
            autoFocus={autoFocus}
        />
    );
}

InputComp.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    obChange: PropTypes.func,
    spellCheck: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.string,
    autoFocus: PropTypes.string,
};

export default InputComp;
