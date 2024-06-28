import React from 'react';

type ButtonProps = {
    name: string;
    handleClick?: () => void;
    isDisabled?: boolean;
    color?: string
    type?: 'button' | 'submit' | 'reset'
}

export const Button = ({name, handleClick, isDisabled, color:backgroundColor, type}: ButtonProps) => {
    return (
        <button  className={'button'} style={backgroundColor ? {backgroundColor} : {}} onClick={handleClick} disabled={isDisabled} type={type}>{name}</button>
    );
};

