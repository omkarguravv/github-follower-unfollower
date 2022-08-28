import axios from "axios";

function searchFollowers(setLoading, setFollowers, setFollowing,username) {
  setLoading(true);
  axios({
    method: "get",
    url: `https://api.github.com/users/${username}/followers`,
  }).then((res) => {
    setLoading(false);
    setFollowers(res.data);
  });
  axios({
    method: "get",
    url: `https://api.github.com/users/${username}/following`,
  }).then((res) => {
    setLoading(false);
    setFollowing(res.data);
  });
}

export default searchFollowers;