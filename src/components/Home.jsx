import React, { useState } from 'react'

function Home() {
    const [inputUsername, setInputUsername] = useState("");


    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [followingList, setfollowingList] = useState([])
    const [followersList, setfollowersList] = useState([])


    const [doesntFollowBack, setDoesntFollowBack] = useState([]);
    const [youDontFollowBack, setYouDontFollowBack] = useState([]);





    function setInput(e) {
        setInputUsername(e.target.value)
    }

    async function repoDataURL() {
        await fetch(`https://api.github.com/users/${inputUsername}/followers`)
            .then((res) => res.json())
            .then(
                (result) => {

                    const list = result.map((item) => (
                        <>
                            {/* <h1>
                                followers
                            </h1> */}

                            <div>

                                <a target="_blank" href={item.html_url} rel="noreferrer">{item.login}</a>
                            </div>

                        </>
                    ));

                    setFollowers(list);
                },
                (error) => {
                    console.log(error);
                }
            );



        //followers List array
        const FollowersArray = []
        await fetch(`https://api.github.com/users/${inputUsername}/followers`)
            .then((res) => res.json())
            .then(
                (result) => {
                    const followerss = result.map((n) => {

                        FollowersArray.push(n.login)
                    });
                    console.log(FollowersArray);
                    setfollowersList(followerss);
                },
                (error) => {
                    console.log(error);
                }
            );



        // -------

        await fetch(`https://api.github.com/users/${inputUsername}/following`)
            .then((res) => res.json())
            .then(
                (result) => {
                    const followingss = result.map((foll) => (
                        <>


                            <div>
                                <a target="_blank" href={foll.html_url} rel="noreferrer">{foll.login}</a>
                            </div>
                        </>
                    ));

                    setFollowing(followingss);
                },
                (error) => {
                    console.log(error);
                }
            );
        //following List array
        const followingArray = []
        await fetch(`https://api.github.com/users/${inputUsername}/following`)
            .then((res) => res.json())
            .then(
                (result) => {
                    const followings = result.map((m) => {

                        followingArray.push(m.login)
                    });
                    console.log(followingArray);
                    setfollowingList(followings);
                },
                (error) => {
                    console.log(error);
                }
            );


        // common foll0wers and following
        // follow back ppl  
        const friends = followingArray.filter(element => FollowersArray.includes(element));

        console.log(friends)











        //dont give follow back
        const toxic = followingArray.filter(x => !FollowersArray.includes(x));
        console.log(toxic);

    }





    return (
        <div>
            <input value={inputUsername} type="text" name="username" id="" onChange={setInput} />
            <button onClick={repoDataURL}>get data</button>

            {/* <h1>followers</h1>
            {followers}
            <hr />
            <h1>following</h1>
            {following} */}



            <table >
                <tr>
                    <th>followers</th>
                    <th>following</th>
                    <th>friends</th>
                </tr>
                <tr>
                    <td>{followers}</td>
                    <td> {following}</td>
                    <td> </td>



                </tr>

            </table>

        </div>
    )
}

export default Home
