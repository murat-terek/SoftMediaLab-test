import React, { InputHTMLAttributes } from 'react';
import './input-number.scss';

const extractNumber = (value: string) =>
    +value.replace(/([^\d]*)/g, '');

export interface InputNumberProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {
    label: string;
    value: number;
    onChange(value: number): void;
    onBlur(value: number): void;
}

const InputNumber: React.FC<InputNumberProps> = ({ label, onChange, onBlur, ...props }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(extractNumber(event.target.value));
    }

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        onBlur && onBlur(extractNumber(event.target.value));
    }

    return (
        <div className="input-number-wrapper">
            <input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control input-number"
            />
            <b className="ml-1">{label}</b>
        </div>
    )
}

export default InputNumber;