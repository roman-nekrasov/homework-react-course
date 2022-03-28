import cn from 'classnames';

import s from './style.module.css';

const ArrowChoice = ({ isYourMove, animationPlay }) => {
    return <div className={cn(s.arrow, {
        [s.rightSide]: isYourMove === false,
        [s.leftSide]: isYourMove === true,
        [s.hideArrow]: !animationPlay,
    })}>
    </div>;
};

export default ArrowChoice;
