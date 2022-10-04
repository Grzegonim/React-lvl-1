import styles from './Card.module.scss';
import clsx from 'clsx'
import { useState } from 'react';
import { toggleFavorite } from '../../redux/searchStringRedux';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();
  const toggleClass = () => {
    if(!isFavorite){    
      setFavorite(true)
      dispatch(toggleFavorite(props.id))
    } else{
      setFavorite(false)
      dispatch(toggleFavorite(props.id))
      console.log(props.id)
    }
  };

  const deleteCard = () => {
    dispatch(removeCard(props.id))
  };

  return (
    <li className={styles.card}>{props.title}
      <div>
        <button onClick={toggleClass} className={clsx(isFavorite && styles.isActive)}><span className={'fa fa-star-o'}></span></button>
        <button onClick={deleteCard}><span className={'fa fa-trash'}></span></button>
      </div>
    </li>
  );
};

export default Card;