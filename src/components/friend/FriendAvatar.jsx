function FriendAvatar({ picture, name }) {
  return (
    <img
      src={picture}
      alt={name}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
        margin: "0 auto 16px",
        display: "block",
      }}
      onError={function (e) {
        e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=2D5016&color=fff";
      }}
    />
  );
}

export default FriendAvatar;
