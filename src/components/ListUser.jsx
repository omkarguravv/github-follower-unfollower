import React from 'react'
import UserProfile from './UserProfile';
import Length from './Length';



function ListUser() {
  return (
    <div className=' flex flex-row text-center justify-center '>


    <div>

      <Length whichSection="Followers" count={33}/>
      <UserProfile />
      
    </div>
    <div>

      <Length whichSection="Following" count={33}/>
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />

    </div>
    <div>

      <Length whichSection="Doesn't Follow Back"  count={33}/>
      <UserProfile  />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />

    </div>
    <div>

      <Length whichSection="You Don't Follow Back" count={33} />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />

    </div>

    </div>
  )
}

export default ListUser
