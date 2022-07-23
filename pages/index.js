import Head from 'next/head'
import styles from '../styles/Layout.module.css';
import ArticleList from '../components/ArticleList';
import server from '../config/index';

export default function Home({articles}) {
    console.log(articles);
    console.log("SERVER PULLED FROM CONFIG/INDEX.JS: ", server);
    return (
        <div>

            <title>Web Dev News</title>
            <meta name="keywords" content="web development, programming"/>
            <ArticleList articles={articles} />

        </div>

    )
}

// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//     const articles = await res.json();

//     return {
//         props: {
//             articles
//         }
//     }
// }

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/articles`);
    // const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}