import React from 'react';

type ButtonProps = {
    name: string;
    handleClick:() => void;
    isDisabled?: boolean
}

export const Button = ({name, handleClick, isDisabled}:ButtonProps) => {
    return (
        <button className={'button'} onClick={handleClick} disabled={isDisabled}>{name}</button>
    );
};

