/** Enter / Space キーでクリック相当の動作を発火するキーボードハンドラ */
export const handleKeyActivate = (onClick) => (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick(e);
  }
};
