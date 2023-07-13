// COMPONENTES
import Card from "../../components/Card/Card.jsx";
// STYLES
import style from "./CountryCards.module.css"

export default function CountryCards(props) {
   const { countries } = props
   return (
      <div className={style.cardsContainer}>
         {countries.map((country) => (
         <Card country={country} key={country.ID}/>
         ))} 
      </div>
   )
}
