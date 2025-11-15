// Component Span
function SpanComp({ className, children }) {
    return <span className={className}>{children}</span>;
}

SpanComp.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default SpanComp;