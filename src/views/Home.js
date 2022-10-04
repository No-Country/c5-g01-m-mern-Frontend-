import img from "../assets/departamentos-salud-hero.png";
import logo from "../assets/enfermeras-home-logo.png";

const Home = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'7%'}}>
  

        <img src={img} alt=""></img>

      <div>
        <img src={logo} alt=""></img>


      </div>
    </div>
  );
};

export default Home;
