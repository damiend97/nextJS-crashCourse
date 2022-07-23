import Head from 'next/head'
import Meta from '../components/Meta';

const about = () => {
    return (
        <div>
            <title>About page</title>
            <Meta title='About' /> {/* <---- overwrite ^^^ title */}
            About
        </div>
    );
};

export default about;