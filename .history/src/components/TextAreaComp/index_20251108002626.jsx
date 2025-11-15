import PropTypes from "prop-types";
import styles from "./TextAreaComp.module.scss";

// Component Text Area
function TextAreaComp({
    className,
    name = "body",
    id,
    onChange,
    placeholder = "Write a comments",
    value = "",
    required = true,
}) {
    return (
        <textarea
            name={name}
            id={id}
            className={className || styles.textarea}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
        />
    );
}
TextAreaComp.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};
export default TextAreaComp;
