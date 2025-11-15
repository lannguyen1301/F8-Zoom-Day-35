import PropTypes from "prop-types";
import { useState } from "react";
// Component Avatar
function ImgComp({ name, className = "avatar-img", onError, alt }) {
    const [imgError, setImgError] = useState(false);
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=random`;

    if (imgError) {
        const words = name.trim().split(" ");
        const initials =
            words.length === 1
                ? words[0][0].toUpperCase()
                : `${words[0][0].toUpperCase()}${words[
                      words.length - 1
                  ][0].toUpperCase()}`;
        return <div className="avatar-fallback">{initials}</div>;
    }

    return (
        <img
            src={avatarUrl}
            alt={name}
            className={className}
            onError={() => setImgError(true)}
        />
    );
}

// Component Comment Loader
// function LoaderComp({ className, children }) {
//     return <div className={className}>{children}</div>;
// }

ImgComp.prototype = {
    alt: PropTypes.string,
    className: PropTypes.string,
    onError: PropTypes.func,
};
export default ImgComp;
