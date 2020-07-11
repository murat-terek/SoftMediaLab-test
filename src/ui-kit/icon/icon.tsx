import React from 'react';
import IconContentInfo from './icon-content-info';
import IconContentRemove from './icon-content-remove';

export enum IconName {
    info = 'info',
    remove = 'remove'
}

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color, className, ...props }) => (
    <span style={{ color }} className={className} {...props}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            {name === IconName.info ? (
                <IconContentInfo />
            ) : name === IconName.remove ? (
                <IconContentRemove />
            ) : null}
        </svg>
    </span>
);

export default Icon;
