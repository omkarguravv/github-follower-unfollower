import React from 'react';

function Footer() {
  return (
    <div className=" flex justify-center  text-2xl my-4">
      <h1>
        Made by
        <a
          className=" text-blue-400 hover:underline px-2"
          href="https://github.com/omkarguravv"
        >
          Omkar Gurav | <a href="https://github.com/omkarguravv/github-follower-unfollower">Repo</a>
        </a>
      </h1>
    </div>
  )
}

export default Footer;