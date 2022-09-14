import styles from './Column.module.scss';
import Card from '../Card/Card';
import List from '../List/List';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  console.log(props.action)
  return (
      <article className={styles.column}>
        <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <ul className={styles.cards}>
          {props.cards.map(card => <Card key={card.id} title={card.title} />)}          
        </ul>
        <CardForm columnId={props.id} action={props.action} />
      </article>
  );
};

export default Column;