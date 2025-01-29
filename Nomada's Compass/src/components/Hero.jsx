import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HerpImg"
          src="https://i0.wp.com/theetlrblog.com/wp-content/uploads/2020/07/Mt-Fuji-Japan-Itinerary-e1596049020445.jpg?w=910&ssl=1"
        />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
