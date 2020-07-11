import React from 'react';
import Radio, { RadioProps } from '../radio/radio';
import Icon, { IconName } from '../icon/icon';
import Tooltip from '../tooltip/tooltip';

export interface RadioWithInfoProps extends RadioProps {
    info?: string;
}

const RadioWithInfo: React.FC<RadioWithInfoProps> = ({ info, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="d-flex">
            <Radio {...props} />
            {!!info && (
                <Tooltip open={isOpen} text={info}>
                    <Icon
                        name={isOpen ? IconName.remove : IconName.info}
                        color="gray"
                        size={20}
                        className="ml-1"
                        role="button"
                        onMouseEnter={handleOpen}
                        onClick={handleClose}
                    />
                </Tooltip>
            )}
        </div>
    );
}

export default RadioWithInfo;
