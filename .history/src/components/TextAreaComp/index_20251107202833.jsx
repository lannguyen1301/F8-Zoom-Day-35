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
