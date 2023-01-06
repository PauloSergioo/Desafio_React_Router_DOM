import "./styles.css";
import homeImg from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <div className="navbar container">
        <nav>
          <ul className="listing-nav">
            <li>Início</li>
            <li>Produtos</li>
            <li>Sobre nós</li>
          </ul>
        </nav>
        <div>
          <img src={homeImg} alt="home" />
        </div>
      </div>
    </header>
  );
}
