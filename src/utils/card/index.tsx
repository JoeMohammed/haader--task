import Image from 'components/img';
import styles from './card.module.scss';
import StarsRating from 'react-star-rate';

type TMovieCard = {
  alt: string;
  src: string;
  height: number;
  width: number;
  title: string;
  desc: string;
  value: number;
  deleteHandler: () => void;
  editHandler: () => void;
};

export default function MovieCard({
  alt,
  src,
  height,
  width,
  title,
  desc,
  value,
  deleteHandler,
  editHandler,
}: TMovieCard) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Image alt={alt} height={height} width={width} src={src} />
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_body_content}>
          <h3 className={styles.card_body_title}>{title}</h3>
          <p className={styles.card_body_description}>{desc}</p>
        </div>
        <div className={styles.card_body_options}>
          <div className={styles.card_body_options_rate}>
            <StarsRating value={value} />
          </div>
          <div className={styles.card_body_options_option}>
            <span
              className={styles.card_body_options_option_edit}
              onClick={() => {
                editHandler();
              }}
            >
              Edit
            </span>
            <span
              className={styles.card_body_options_option_delete}
              onClick={() => {
                deleteHandler();
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
