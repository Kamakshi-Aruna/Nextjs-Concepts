import Link from "next/link";

function Home(){
    return(
        <>
          <h1>Next-Js Pre-rendering</h1>
            <Link href='/users' legacyBehavior>
                <a>Users</a>
            </Link>
            <Link href='/posts' legacyBehavior>
                <a>Posts</a>
            </Link>
        </>
    )
}

export default Home