import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Main() {
    const [username, setUsername] = useState("")

    const [loading, setLoading] = useState(false);

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const [doesntFollowBack, setDoesntFollowBack] = useState([]);
    const [youDontFollowBack, setYouDontFollowBack] = useState([]);



    function handleSubmit(e) {
        e.preventDefault();
        searchFollowers();
    }
    function searchFollowers() {
        setLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/followers`,
        }).then(res => {
            setLoading(false);
            setFollowers(res.data)
        });
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/following`,
        }).then(res => {
            setLoading(false);
            setFollowing(res.data)
        });
    }

    function renderFollowers(f) {
        return (

            <div className='h-12 w-44  overflow-hidden flex flex-row text-center bg-gray-600 rounded  items-center   text-centre my-5 mx-3  ' key={f.id}>
                <div>
                    <img className=' rounded-full w-10 mx-1   ' src={f.avatar_url} alt="" />
                </div>

                <div className='text-xl text-white hover:underline hover:text-blue-500 px-3'>
                    <a target="_blank" rel="noopener noreferrer" href={f.html_url}>{f.login}</a>
                </div>


            </div>

        )
    }
    function renderFollowing(f) {
        return (

            <div className='h-12 w-44  overflow-hidden flex flex-row text-center bg-gray-600 rounded  items-center   text-centre my-5 mx-3 ' key={f.id}>
                <div>
                    <img className=' rounded-full w-10 mx-1   ' src={f.avatar_url} alt="" />
                </div>

                <div className='text-xl text-white hover:underline hover:text-blue-500 px-3'>
                    <a target="_blank" rel="noopener noreferrer" href={f.html_url}>{f.login}</a>
                </div>


            </div>
        )
    }


    useEffect(() => {
        const followersUsernames = followers.map((f) => f.login);
        const followingUsernames = following.map((f) => f.login);
        const doesntFollow = [];
        const youDontFollow = [];

        following.forEach((f) => {
            if (!(followersUsernames.includes(f.login)) && !(doesntFollow.includes(f))) {
                doesntFollow.push(f);
            }
        });

        followers.forEach((f) => {
            if (!(followingUsernames.includes(f.login)) && !(youDontFollow.includes(f))) {
                youDontFollow.push(f);
            }
        });



        setDoesntFollowBack(doesntFollow);
        setYouDontFollowBack(youDontFollow);

    }, [followers, following, username]);




    function a(f) {
        return (

            <div className='h-12 w-44  overflow-hidden flex flex-row text-center bg-gray-600 rounded  items-center   text-centre my-5 mx-3 ' key={f.id}>
                <div>
                    <img className=' rounded-full w-10 mx-1   ' src={f.avatar_url} alt="" />
                </div>

                <div className='text-xl text-white hover:underline hover:text-blue-500 px-3'>
                    <a target="_blank" rel="noopener noreferrer" href={f.html_url}>{f.login}</a>
                </div>


            </div>

        )
    }
    function b(f) {
        return (

            <div className='h-12 w-44  overflow-hidden flex flex-row text-center bg-gray-600 rounded  items-center   text-centre my-5 mx-3 ' key={f.id}>
                <div>
                    <img className=' rounded-full w-10 mx-1   ' src={f.avatar_url} alt="" />
                </div>

                <div className='text-xl text-white hover:underline hover:text-blue-500 px-3'>
                    <a target="_blank" rel="noopener noreferrer" href={f.html_url}>{f.login}</a>
                </div>


            </div>

        )
    }

    return (
        <div>
            <form className='flex flex-row py-8 justify-center' action="">
                <input
                    className=' mx-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    value={username}
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                    type="text" name="" id="" />

                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded-full w-20  '
                    onClick={handleSubmit}
                >{loading ? "searching...." : "serach"}</button>
            </form>

            <br />



            <div className=' overflow-auto relative mx-5   '>

                <div className='grid grid-flow-col place-items-center '>
                    <h3 className='sticky top-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Followers   {followers.length}</h3>

                    <h3 className='sticky top-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Following {following.length}</h3>

                    <h3 className='sticky top-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Doesn't Follow Back {doesntFollowBack.length}</h3>

                    <h3 className='sticky top-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>You Don't Follow Back {youDontFollowBack.length}</h3>

                </div>

                <div className=' h-96 grid grid-flow-col place-items-center overflow-auto relative '>

                    <div className=' h-96 overflow-auto relative' >  {followers.map(renderFollowers)}</div>
                    <div className='h-96 overflow-auto relative' >  {following.map(renderFollowing)}</div>
                    <div className='h-96 overflow-auto relative'>  {doesntFollowBack.map(a)}</div>
                    <div className='h-96 overflow-auto relative'>  {youDontFollowBack.map(b)}</div>
                </div>
            </div>


            <div className=' flex justify-center  text-2xl my-4'>
                <h1> Made by <a className=' text-blue-400 hover:underline ' href="https://github.com/omkarguravv">Omkar Gurav</a> </h1>
            </div>






        </div>
    )
}

export default Main;