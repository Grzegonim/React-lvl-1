import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import shortid from 'shortid';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription]= useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, id: shortid() }))
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <TextInput placeholder='Title' onChange={e => setTitle(e.target.value)} />
      <TextInput placeholder='Description' onChange={e => setDescription(e.target.value)} />
      <Button>ADD LIST</Button>
    </form>
  )
}

export default ListForm;