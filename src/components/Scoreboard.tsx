import React, {ReactNode} from 'react';

type ScoreboardProps = {
    count: number;
    maxValue: number
}

export const Scoreboard = ({count, maxValue}: ScoreboardProps) => {
    return (
        <div className={'scoreboard'}>
            <div className={count === maxValue ? 'finish' : ''}>{count}</div>
        </div>
    );
};

