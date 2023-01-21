import LogoTitle from '../../assets/images/logo-s.png';

const Home = () => {
  return ( 
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hello,<br /> I'm
            <img src={LogoTitle} alt="developer"/>
            Łukasz
            <br />
web developer </h1>
        </div>

    </div>
);
}

export default Home
