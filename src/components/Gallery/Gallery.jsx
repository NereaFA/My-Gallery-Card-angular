import Card from "../Card/Card";

const List=[
    {title:"Margaritas", description:"Son de campo", imgUrl:"https://i.pinimg.com/474x/c1/88/b6/c188b657fa0fd86161c5647d8d576dec.jpg"},
    {title:"Girasoles", description:"Son de campo", imgUrl:"https://i.pinimg.com/originals/7b/a7/be/7ba7be039e0daabe11b3c59044f52a62.jpg"}
];

export default function Gallery(){
 const cardList=[...List];

 return(
    <div>
         {cardList.map((item, index) => <div key={index}>
         
         
         <Card card={{item}}></Card>
         
         
         </div>)}
    </div>
  
// /* <div>
   
// </div> */
    // <div className="gallery">
    //     [cardList.map(item => <div key>={item}</div>)]
    // </div>
 
 )
}