import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader
            type="TailSpin"
            color="#0059b3"
            height={400}
            width={600}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
