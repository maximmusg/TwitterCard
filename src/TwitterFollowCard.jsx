import React from "react";

const TwitterFollowCard = ({ userName, name, isFollowing }) => {
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
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
};

export default TwitterFollowCard;
