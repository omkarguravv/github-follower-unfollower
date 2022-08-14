import React, { useState, useEffect } from 'react'

function Demo() {
    const URL = `https://api.github.com/users/`
    const [username, setUserName] = useState("")

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [doesntFollowBack, setDoesntFollowBack] = useState([]);
    const [youDontFollowBack, setYouDontFollowBack] = useState([]);
    const Followerlist = []
    const Followinglist = []


    useEffect(() => {

        async function getUserData() {

            // followers 
            const followers = await fetch(`${URL}${username}/followers`)
                .then((res => res.json()))
                .then(
                    (result) => {
                        // console.log(result);
                        const data = result.map((f) => (f.login))
                        // console.log(data);
                        setFollowers(data)
                        Followerlist.push(data)
                        console.log(Followerlist);


                    }
                )
            // console.log(followers);

            const following = await fetch(`${URL}${username}/following`)
                .then((res => res.json()))
                .then(
                    (result) => {
                        // console.log(result);
                        const data = result.map((f) => (f.login))
                        // console.log(data);
                        setFollowing(data)
                        Followinglist.push(data)
                        console.log(Followinglist);

                    }
                )
            console.log(following);



        }getUserData()
    }, [username, followers, following])










    return (
        <div>
            <br />
            <input value={username} type="text" placeholder='username'
                onChange={(e) => { setUserName(e.target.value) }}

            />
            <br />


            <button
            //  onClick={(e) => { setUserName(e.target.value) }}
            > Fetch User Data</button>
            <br />

            {setFollowers}
            <br />
            {following}

        </div>
    )
}

export default Demo
