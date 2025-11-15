import PropTypes from "prop-types";

// component Select
function SelectComp({
    children,
    name,
    id,
    value,
    onChange,
    className,
    disabled,
    onFocus,
    tabIndex,
    title,
    required,
    ariaLabel,
}) {
    return (
        <select
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            className={className}
            disabled={disabled}
            required={required}
            title={title}
            onFocus={onFocus}
            aria-label={ariaLabel}
            tabIndex={tabIndex}
        >
            {children}
        </select>
    );
}

SelectComp.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    disable: PropTypes.bool,
    required: PropTypes.bool,
    onFocus: PropTypes.func,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default SelectComp;
