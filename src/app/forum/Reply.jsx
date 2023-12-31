import React, { useState } from "react";
import "./Forum.css";
import { CgProfile } from "react-icons/cg";

import like from "../../../public/fav.svg";
import unlike from "../../../public/favfill.svg";

const CommentTile = ({ user, title, details }) => {
  const [isLiked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="comment-tile" onDoubleClick={handleToggleLike}>
      <div className="user-profile">
        {user.profilePic ? (
          <img src={user.profilePic} alt={`Profile of ${user.name}`} />
        ) : (
          <CgProfile size={50} />
        )}
      </div>
      <div className="comment-details">
        <h3 style={{ fontWeight: "900" }}>{title}</h3>
        <p>{details}</p>
      </div>
      <div className="like-button">
        <button onClick={handleToggleLike}>
          {isLiked ? <UNLikeSvg /> : <LikeSvg />}
        </button>
      </div>
    </div>
  );
};

export default CommentTile;

export function LikeSvg() {
  return (
    <div className="" >
      <svg
        width="22"
        height="20"
        viewBox="0 0 89 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.0793 8.03422C12.7131 10.8628 6.84615 17.8696 6.84615 27.1532C6.84615 34.4968 10.1606 41.5369 15.4686 48.3329C20.7775 55.1307 27.8615 61.4067 34.9375 67.1902C37.8189 69.5453 39.7433 71.1107 41.3465 72.1227C42.8714 73.0858 43.7524 73.3124 44.5 73.3124C45.2476 73.3124 46.1287 73.0858 47.6537 72.1227C49.2566 71.1107 51.1812 69.5453 54.0626 67.1902C61.1385 61.4067 68.2225 55.1307 73.5313 48.3329C78.8393 41.5369 82.1537 34.4968 82.1537 27.1532C82.1537 17.8696 76.2868 10.8628 68.9207 8.03422C61.6214 5.23133 53.0342 6.57893 47.2189 14.0062C46.5715 14.8334 45.5662 15.3187 44.5 15.3187C43.4339 15.3187 42.4286 14.8334 41.781 14.0062C35.9659 6.57893 27.3784 5.23133 20.0793 8.03422ZM44.5 6.93751C36.7564 -0.45298 26.3185 -1.54725 17.5746 1.81044C7.82537 5.55413 0 14.8808 0 27.1532C0 36.5233 4.2312 44.9702 10.0255 52.3893C15.8189 59.8071 23.3937 66.4747 30.5442 72.3191L30.7062 72.4516C33.3826 74.6391 35.6298 76.476 37.6299 77.7391C39.7484 79.0765 41.9323 80 44.5 80C47.0676 80 49.2517 79.0765 51.3699 77.7391C53.3702 76.476 55.6174 74.6391 58.2937 72.4516L58.4556 72.3191C65.6063 66.4747 73.1811 59.8071 78.9746 52.3893C84.7689 44.9702 89 36.5233 89 27.1532C89 14.8808 81.1747 5.55413 71.4256 1.81044C62.6814 -1.54725 52.2434 -0.45298 44.5 6.93751Z"
          fill="#080808"
        />
      </svg>
    </div>
  );
}

export function UNLikeSvg() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 89 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.5 6.93751C36.7564 -0.452981 26.3185 -1.54725 17.5746 1.81044C7.82537 5.55413 0 14.8808 0 27.1532C0 36.5233 4.2312 44.9702 10.0255 52.3893C15.8189 59.8071 23.3937 66.4747 30.5442 72.3191L30.7062 72.4516C33.3826 74.6391 35.6298 76.476 37.6299 77.7391C39.7484 79.0765 41.9323 80 44.5 80C47.0677 80 49.2517 79.0765 51.3699 77.7391C53.3702 76.476 55.6174 74.6391 58.2937 72.4516L58.4556 72.3191C65.6063 66.4747 73.1811 59.8071 78.9746 52.3893C84.7689 44.9702 89 36.5233 89 27.1532C89 14.8808 81.1747 5.55413 71.4256 1.81044C62.6814 -1.54725 52.2434 -0.452981 44.5 6.93751Z"
        fill="red"
      />
    </svg>
  );
}
