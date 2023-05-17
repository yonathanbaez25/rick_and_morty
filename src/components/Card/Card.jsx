import style from "./Card.module.css";

export default function Card(props) {
  //console.log(props);
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className={style.dataContainer}>
        <h2>{props.name}</h2>
        <h4>{props.status}</h4>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
        <h4>{props.origin}</h4>
      </div>
      <img src={props.image} alt="" />
    </div>
  );
}
