import styles from './Card.module.scss';
import clsx from 'clsx'
import { useState } from 'react';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

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
    }
  }

  return (
    <li className={styles.card}>{props.title}<button onClick={toggleClass} className={clsx(isFavorite && styles.isActive)}><span className={'fa fa-star-o'}></span></button></li>
  );
};

export default Card;