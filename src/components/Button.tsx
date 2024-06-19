import React from 'react';

type ButtonProps = {
    name: string;
    handleClick: () => void;
    isDisabled?: boolean;
    color?: string
}

export const Button = ({name, handleClick, isDisabled, color:backgroundColor}: ButtonProps) => {
    return (
        <button  className={'button'} style={backgroundColor ? {backgroundColor} : {}} onClick={handleClick} disabled={isDisabled}>{name}</button>
    );
};

