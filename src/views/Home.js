import img from "../assets/departamentos-salud-hero.png";
import logo from "../assets/enfermeras-home-logo.png";

const Home = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'7%'}}>
  

        <img style={{marginLeft:'10%'}} src={img} alt=""></img>

        <img src={logo} alt=""></img>



    </div>
  );
};

export default Home;
