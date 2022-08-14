import URL from './github'

console.log(URL)
export async function getFollowers(){
    const r = await fetch(`https://api.github.com/users/omkarguravv/followers`)
    console.log(r);
    return r.data.followers
}


