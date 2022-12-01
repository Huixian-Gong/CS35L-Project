import style from './Block1.module.css';

function Block(props) {
  return <div className={style.card}>{props.children}</div>;
}

export default Block;