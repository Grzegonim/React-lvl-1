import styles from './SearchForm.module.scss'
import TextInput  from '../TextInput/TextInput';
import Button  from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [searchInputTitle, setInputTitle] = useState('');
    const dispatch = useDispatch();
    const searchTitle = e => {
        e.preventDefault();
        dispatch(updateSearch(searchInputTitle));
    };

    return (
        <form className={styles.searchForm} onSubmit={searchTitle}> 
            <TextInput placeholder='Search...' onChange={e => setInputTitle(e.target.value)} />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;