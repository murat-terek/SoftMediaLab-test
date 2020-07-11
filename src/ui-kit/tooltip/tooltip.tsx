import React from 'react';
import './tooltip.scss';

export interface TooltipProps {
    text?: string;
    open?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ children, open, text }) => {
    return (
        <span className="awesome-tooltip">
            {children}
            {open && text && <div className="awesome-tooltip-text">{text}</div>}
        </span>
    );
}

export default Tooltip;
