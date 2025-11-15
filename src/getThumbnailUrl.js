// export const getThumbnailUrl = (name) => {
//     if (!name) return "/img/img-fallback.png";
//     return `https://ui-avatars.com/api/?name=${encodeURIComponent(
//         name
//     )}&background=random`;
// };

// src/getThumbnailUrl.js
export const getThumbnailUrl = ({ src, userId, size = 110 }) => {
    // Nếu có ảnh cụ thể được truyền vào (src), thì ưu tiên dùng nó
    if (src) return src;

    // Nếu có userId, sinh ảnh đại diện giả lập theo ID (API có sẵn của pravatar)
    if (userId)
        return `https://i.pravatar.cc/${size}?u=${encodeURIComponent(userId)}`;

    // Nếu không có gì, dùng fallback ảnh trống
    return `https://via.placeholder.com/${size}?text=No+Image`;
};
