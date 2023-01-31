import "./Card.css";

export default function Card({card}) {
  return (
    <figure className="container">
      <div className="imagen">
        <img className="img" src={card.item.imgUrl} alt={card.item.title}/>
      </div>
      <div className="titulo">{card.item.title}</div>
      <p>{card.item.description}</p>
    </figure>
  );
}

// export default function Card({card}){


//     return(
//         <div className="Card" >
//             <div>
//                 {card.item.title}
//             </div>

//             <img className="img-card" src={card.item.imgUrl} alt=  {card.item.title}></img>

//             <div>
//                 {card.item.description}
//             </div>
//         </div>
//     )
// };