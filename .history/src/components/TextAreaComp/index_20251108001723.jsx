import PropTypes from "prop-types";
import styles from "./TextAreaComp.module.scss";

// Component Text Area
function TextAreaComp({}) {
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
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};
export default TextAreaComp;
