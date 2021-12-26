import type {NextPage} from 'next'
import Link from 'next/link'
import Layout from "./layout";

const Home: NextPage = () => {
    return (
        <Layout title={"Index Title !!"}>
            <nav>
                <ul>
                    <li><Link href={"/about"}>About Page</Link></li>
                </ul>
            </nav>
        </Layout>
    )
}

export default Home
