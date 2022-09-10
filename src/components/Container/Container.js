import styles from './Container.module.scss';

const Container = prompt => {
  return (
    <div className={styles.container}>
      {prompt.children}
    </div>
  );
};

export default Container;