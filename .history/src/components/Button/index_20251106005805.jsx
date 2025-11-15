import PropTypes from "prop-types"; 
// prop-types là thư viện để kiểm tra kiểu dữ liệu của props
// cài đặt thư viện prop-types: npm install prop-types / npm i prop-types

// Component Button
function Button({ onClick, className, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;