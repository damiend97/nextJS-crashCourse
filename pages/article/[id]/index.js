import Link from 'next/link';
import {useRouter} from 'next/router';
import Meta from '../../../components/Meta';

const article = ({article}) => {
    // const router = useRouter();
    // const {id} = router.query

    return (
        <>
            <Meta title={`Article #${article.id}`} description={article.excerpt} />
            {/* {id} */}
            <h1>{article.id}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back...</Link>
            
        </>
    );
};

// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// getServerSideProps ^^ vs vv getStaticProps&&getStaticPaths
// getStaticProps is faster but you must generate paths in order for it to work which is fine but thats why we have getStaticPaths

export const getStaticProps = async (context) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await fetch(`http://localhost:3000/api/articles/`)
    const article = await res.json();

    const ids = article.map(article => article.id);
    const paths = ids.map(id => 
        (
            { params: {id: id.toString()} }
        )
    );

    return {
        paths,
        fallback: false
    }

}

export default article;