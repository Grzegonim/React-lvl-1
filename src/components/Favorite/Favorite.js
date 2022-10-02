import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getFavoriteCard } from "../../redux/store";
import Card from "../Card/Card";
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);
  console.log(favoriteCards)
  return (
    <article className={styles.article}>
      <PageTitle>Favortie</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map(card => <Card key={card.id} title={card.title} id={card.id} />)}
        </ul>
      </div>
    </article>
  
  )
}

export default Favorite;