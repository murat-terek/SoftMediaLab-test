import React from 'react';
import RadioWithInfo, { RadioWithInfoProps } from '../radio-with-info/radio-with-info';

type radioValue = string | number;

interface RadioOption extends RadioWithInfoProps {
    value: radioValue;
}

export interface RadioGroupWithInfoProps {
    value: radioValue;
    onChange(value: radioValue): void;
    options: RadioOption[];
    className?: string;
}

const RadioGroupWithInfo: React.FC<RadioGroupWithInfoProps> =
    ({ value, onChange, options, className }) => {
        const handleClick = (value: radioValue) => () => {
            onChange(value);
        }

        return (
            <div className={className}>
                {options.map(option => (
                    <RadioWithInfo
                        {...option}
                        key={option.value}
                        onClick={handleClick(option.value)}
                        checked={value === option.value}
                    />
                ))}
            </div>
        );
    }

export default RadioGroupWithInfo;
