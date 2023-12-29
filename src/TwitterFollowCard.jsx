import { useState } from "react";

const TwitterFollowCard = ({ userName = "unknow", name }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${userName}`}
            alt="Avatar perfil"
          />
          <div className="tw-followCard-info">
            <strong className="tw-followCard-infoUserName">{name}</strong>
            <span>@{userName}</span>
          </div>
        </header>
        <aside>
          <button onClick={handleClick} className={buttonClassName}>
            {text}
          </button>
        </aside>
      </article>
    </>
  );
};

export default TwitterFollowCard;
