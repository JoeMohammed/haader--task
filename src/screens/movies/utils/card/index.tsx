import Image from 'components/img';
import { TCategoryCard } from 'types/card.types';
import styles from './card.module.scss';

export default function CategoryCard({
  alt,
  src,
  height,
  width,
  title,
  description,
}: TCategoryCard) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Image alt={alt} src={src} height={height} width={width} />
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_body_title}>{title}</h4>
        <p className={styles.card_body_description}>{description}</p>
      </div>
    </div>
  );
}
