import  Style  from "./Card.module.scss";

const Card = (props) => {
    const data = props.data || {
        title : "titolo",
        image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
    }
    return(
    <div  className={Style.card}>
        <h3>{data.title}</h3>
        <img width={150} src={data.image} alt="men's clothing" />
    </div>

    )
}

export default Card