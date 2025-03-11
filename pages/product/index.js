import Link from 'next/link'

function productList({productId=100}) {
    return (
        <>
            <Link href='/' legacyBehavior>
                <a>Home</a>
            </Link>
            <ul>
                <Link href='/product/1' legacyBehavior>
                    <a>Product 1</a>
                </Link><br/>
                <Link href='/product/2' legacyBehavior>
                    <a>Product 2</a>
                </Link><br/>
                <Link href='/product/3' legacyBehavior replace>
                    <a>Product 3</a>
                </Link><br/>
                <Link href={`/product/${productId}`} legacyBehavior>
                    <a>Product {productId}</a>
                </Link>
            </ul>
        </>
    )
}

export default productList