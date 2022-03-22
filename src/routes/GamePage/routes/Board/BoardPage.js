import style from './style.module.css';

const BoardPage = () => {
    return (
        <div className={style.root}>
            <div className={style.playerOne}>

            </div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;