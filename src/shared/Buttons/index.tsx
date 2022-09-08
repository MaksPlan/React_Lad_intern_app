import React, { FC } from 'react';
import style from './button.module.scss';

interface IProps {
    buttonAction: any;
    name: string;   
}

const Button: FC<IProps> = ({buttonAction, name}) => {
    return (
        <button type='button' onClick={buttonAction} className={style.button}>
           {name}
        </button>
    );
};

export default Button;