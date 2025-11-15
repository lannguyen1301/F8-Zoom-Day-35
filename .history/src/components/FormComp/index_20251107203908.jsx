// Component Form
function FormComp({ className, children, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
}

export default FormComp;
