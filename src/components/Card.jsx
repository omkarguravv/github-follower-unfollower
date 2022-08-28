import React from "react";

function Card(f) {
  return (
    <div
      className="flex flex-row p-3 m-3 bg-gray-600 rounded place-items-center overflow-hidden "
      key={f.id}
    >
      <img className=" rounded-full w-10 mx-1 " src={f.avatar_url} alt="avatar" />
      <a
        className="text-white hover:underline hover:text-blue-500 px-3"
        target="_blank"
        rel="noopener noreferrer"
        href={f.html_url}
      >
        {f.login}
      </a>
    </div>
  );
}

export default Card;
