import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const x = 2;
    return (
        <div>
            <h1><span className='title'>Web Dev News</span></h1>
            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'blue' : 'red'};
                    }
                `}
            </style>
            <p><span className={headerStyles.title2}>Welcome to the latest web dev news</span></p>
        </div>
    );
};

export default Header;