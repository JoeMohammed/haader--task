import styles from './loading.module.scss';

export default function Loading() {
  return (
    <>
      <div className="fixed_loading">
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
