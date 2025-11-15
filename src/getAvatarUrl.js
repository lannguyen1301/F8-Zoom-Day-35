export const getAvatarUrl = (name) => {
    if (!name) return "/img/img-fallback.png";
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=random`;
};
