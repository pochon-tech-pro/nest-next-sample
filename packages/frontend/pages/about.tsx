import styles from "../styles/Home.module.css";
import {NextPage} from "next";
import Layout from "./layout";

const About: NextPage = () => {
    return (
        <Layout title={"Index Title !!"}>
            <h1 className={styles.title}>About!!</h1>
        </Layout>
    );
}

export default About;