import Link from "next/link";

const Layout = ({children}) => {
    return(
        <>
            <div>
                <Link href="/motherhood/love">The Love of Motherhood</Link>
                <Link href="/motherhood/courage">The Courage of Motherhood</Link>
            </div>
            {children}
        </>
    )
}

export default Layout