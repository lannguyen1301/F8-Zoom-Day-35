// import PropTypes from "prop-types";
// import { useState } from "react";
// import styles from "./ImgComp.module.scss";

// // Component Avatar Nếu không có src thì sinh avatar từ name
// function ImgComp({ name, src, className, onError, alt }) {
//     const [imgError, setImgError] = useState(false);
// const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//     name
// )}&background=random`;

//     if (imgError) {
//         // fallback khi ảnh lỗi
//         const words = name.trim().split(" ");
//         const initials =
//             words.length === 1
//                 ? words[0][0].toUpperCase()
//                 : `${words[0][0].toUpperCase()}${words[
//                       words.length - 1
//                   ][0].toUpperCase()}`;
//         return <div className="avatar-fallback">{initials}</div>;
//     }

//     return (
//         <>
//             <div className={styles.avatar}>
//                 <img
//                     src={avatarUrl}
//                     alt={alt || name || "avatar"}
//                     className={className || styles.avatarImg}
//                     onError={(e) => {
//                         setImgError(true);
//                         if (onError) onError(e);
//                     }}
//                 />
//             </div>
//         </>
//     );
// }

// // Component Comment Loader
// function LoaderComp({ className, children }) {
//     return <div className={className}>{children}</div>;
// }

// ImgComp.propTypes = {
//     className: PropTypes.string,
//     name: PropTypes.string,
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     className: PropTypes.string,
//     onError: PropTypes.func,
// };
// export default ImgComp;

// import PropTypes from "prop-types";
// function ImgComp({ className, src, alt }) {
//     const handleFallback = (e) => {
//         e.target.src = "../../img/img-fallback.png";
//     };
//     return (
//         <img
//             className={className}
//             src={src}
//             alt={alt}
//             onError={handleFallback}
//         />
//     );
// }
// ImgComp.propTypes = {
//     className: PropTypes.string,
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string,
// };
// export default ImgComp;

import PropTypes from "prop-types";
function ImgComp({ className, src, alt }) {
    return <img className={className} src={src} alt={alt} />;
}

ImgComp.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
export default ImgComp;
