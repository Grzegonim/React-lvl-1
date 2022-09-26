import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const addColumn = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { id: shortid(), title, icon } });
    setTitle('');
    setIcon('');
  };


  return (
    <form onSubmit={addColumn} className={styles.columnForm}>
      Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;