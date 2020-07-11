import React, { InputHTMLAttributes } from 'react';
import './input-number.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label: string;
    value: number;
    onChange(value: number): void;
}

const InputNumber: React.FC<InputProps> = ({ label, onChange, ...props }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.target.value.replace(/([^\d]*)/g, '');
        onChange && onChange(value);
    }

    return (
        <div className="input-number-wrapper">
            <input {...props} onChange={handleChange} onBlur={undefined} className="form-control input-number" />
            <b className="ml-1">{label}</b>
        </div>
    )
}

export default InputNumber;