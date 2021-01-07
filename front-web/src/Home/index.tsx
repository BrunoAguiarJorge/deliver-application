import { AsyncLocalStorage } from 'async_hooks';
import './styles.css';
import {ReactComponent as MainImage} from './mainImage.svg'
import Footer from '../Footer';

function Home(){
    return(
      <>
       <div className="home-container">
           <div className="home-content">
               <div className="hoeme-action">
                   <h1 className="home-title">
                    Faça seu pedido <br /> que entregamos <br /> pra você!!!
                   </h1>
                   <h3 className="home-subtitle">
                       Escolha o seu pedido e em poucos minutos <br /> 
                       levaremos até a sua porta.
                   </h3>

                   <a href="orders" className="home-btn-order">
                       FAZER PEDIDO
                       
                   </a>
               </div>
                <div className="home-image">
                   <MainImage />
                </div>
           </div>
       </div>
       <Footer />
      </>
    )
}

export default Home;