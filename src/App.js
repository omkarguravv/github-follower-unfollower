import React, { useState, useEffect } from "react";

import searchFollowers from "./components/apiCall";
import Footer from "./components/Footer";
import Row from './components/Row';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [row, setShowRow] = useState(false);
  const [doesntFollowBack, setDoesntFollowBack] = useState([]);
  const [youDontFollowBack, setYouDontFollowBack] = useState([]);

  useEffect(() => {
    const followersUsernames = followers.map((f) => f.login);
    const followingUsernames = following.map((f) => f.login);
    const doesntFollow = [];
    const youDontFollow = [];

    following.forEach((f) => {
      if (!followersUsernames.includes(f.login) && !doesntFollow.includes(f)) {
        doesntFollow.push(f);
      }
    });

    followers.forEach((f) => {
      if (!followingUsernames.includes(f.login) && !youDontFollow.includes(f)) {
        youDontFollow.push(f);
      }
    });

    setDoesntFollowBack(doesntFollow);
    setYouDontFollowBack(youDontFollow);
  }, [followers, following, username]);


  return (
    <div className=" lg:h-screen bg-gray-800  text-white  ">
      <form className="flex flex-row py-8 justify-center">
        <input
          className=" mx-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
          id=""
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-full w-fit  "
          onClick={(event) => {
            event.preventDefault();
            setShowRow(true);
            searchFollowers(setLoading, setFollowers, setFollowing, username);
          }}
        >
          {loading ? "searching.." : "search"}
        </button>
      </form>

      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        <Row
          name="Followers"
          length={followers.length}
          rowDetails={followers}
          row={row} />

        <Row
          name="Follwing"
          length={following.length}
          rowDetails={following}
          row={row} />
        <Row
          length={doesntFollowBack.length}
          name="Doesn't Follow Back"
          rowDetails={doesntFollowBack}
          row={row}
        />
        <Row
          name="You Don't Follow Back"
          length={youDontFollowBack.length}
          rowDetails={youDontFollowBack}
          row={row}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
