import logo from '../../assets/img/logo.png';
import './styles.css';

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="QuerySales" />
            <h1>QuerySales</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/beto_pinalli">@beto_pinalli</a>
            </p>
        </div>
    </header>
    )
   }
   
   export default Header
   