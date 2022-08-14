import React from 'react'

function RepoFetch() {
  return (
    <div>
      <form action="">
        <input 
        value ={username}
        placeholder="username"
        onChange={e=>setUsername(e.target.value)}
        type="text" name="" id="" />
        <button 
        onClick={handleSubmit}
        >{loading?"searching....":"serach"}</button>
      </form>
    </div>
  )
}

export default RepoFetch
