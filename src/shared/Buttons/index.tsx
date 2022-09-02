import React, { FC } from 'react';

interface IProps {
    buttonAction: any;
    name: string;   
}

const Button: FC<IProps> = ({buttonAction, name}) => {
    return (
        <button type='button' onClick={buttonAction}>
           {name}
        </button>
    );
};

export default Button;