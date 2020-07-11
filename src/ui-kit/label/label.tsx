import React from 'react';
import classnames from 'classnames';
import './label.scss';

interface LabelProps {
    black?: boolean;
    className?: string;
    onClick?(): void;
}

const Label: React.FC<LabelProps> = ({ children, black, className, onClick }) => {
    return (
        <span
            className={classnames('label', className, { black: !!black })}
            onClick={onClick}
        >
            {children}
        </span>
    );
}

export default Label;
