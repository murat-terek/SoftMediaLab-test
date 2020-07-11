import React from 'react';
import classnames from 'classnames';
import './radio.scss';

export interface RadioProps {
    label?: React.ReactNode;
    checked?: boolean;
    onClick?(): void;
    className?: string;
}

const Radio: React.FC<RadioProps> = ({ children, checked, onClick, className, label }) => {
    return (
        <div className={classnames('form-check', className)}>
            <label className="form-check-label radio">
                <input className="form-check-input" type="radio" checked={!!checked} onChange={onClick} />
                {children || label}
            </label>
        </div>
    );
}

export default Radio;
