// Component Label
function LabelComp({children, className, htmlFor}) {
    return <label htmlFor={htmlFor}>{children}</label>;
}

export default LabelComp;