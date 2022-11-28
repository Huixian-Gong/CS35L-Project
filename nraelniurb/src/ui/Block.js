import style from './Block.module.css';

function Block(props) {
  return <div className={style.card}>{props.children}</div>;
}

export default Block;