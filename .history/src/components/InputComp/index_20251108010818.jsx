import PropTypes from "prop-types";
import styles from "./InputComp.module.scss";

// Component Input
function InputComp({
    className,
    placeholder = "",
    name = "",
    type,
    onChange,
    autoFocus = false,
    value = "",
    // spellCheck = false,
    required = false,
}) {
    return (
        <input
            className={className || styles.inputText}
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={onChange}
            // spellCheck={spellCheck}
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
    spellCheck: PropTypes.bool,
    value: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

export default InputComp;
