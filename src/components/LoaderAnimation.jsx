import Loader from 'react-loader-spinner';

const LoaderAnimation = ()=>{
    return(
        <>
        <Loader
            type="BallTriangle"
            color="#3f51b5"
            height={100}
            width={100}
        />
        <p>Working on it...</p>
        </>
    );
};

export default LoaderAnimation;