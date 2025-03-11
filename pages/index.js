import Link from 'next/link'
import {useRouter} from "next/router";

export default function Home() {

    const router=useRouter()

    const handleClick=()=>{
        console.log("Place your Order")
        router.push('/product')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link href='/blog' legacyBehavior>
                <a>Blog</a>
            </Link><br/>
            <Link href='/product' legacyBehavior>
                <a>Products</a>
            </Link><br/>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}
