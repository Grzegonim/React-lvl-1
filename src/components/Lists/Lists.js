import styles from './Lists.module.scss';
import { getAllLists } from '../../redux/listsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSearch } from '../../redux/searchStringRedux';
import ListForm from '../ListForm/ListForm';

const Lists = () => {
  const lists = useSelector(getAllLists);
  const dispatch = useDispatch();
  const refreshState = () => {
    dispatch(updateSearch(''));
};

  return (
    <section className={styles.lists}>
    <h2 className={styles.heading}>Browse lists</h2>
    {lists.map(list => (
      <Link key={list.id} to={'/list/' + list.id} onClick={refreshState} className={styles.listLink}>
        <h3>{list.title}</h3>
        <p>{list.description}</p>
      </Link>
    ))}
      <ListForm />
    </section> 
  )
}

export default Lists; 