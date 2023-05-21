import style from "./Card.module.css";

export default function Card(props) {
  //console.log(props);
  return (
    <div className={style.container} key={props.id}>
      <div className={style.buttonContainer}>
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <img src={props.image} alt="" />
      <div className={style.dataContainer}>
        <h2>{props.name}</h2>
        <h4>{props.status}</h4>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
        <h4>{props.origin}</h4>
      </div>
    </div>
  );
}
