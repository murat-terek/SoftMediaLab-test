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
            {info && !isOpen ? (
                <Icon
                    name={IconName.info}
                    color="gray"
                    size={20}
                    className="ml-1"
                    onMouseEnter={handleOpen}
                    role="button"
                />
            ) : info ? (
                <Tooltip open text={info}>
                    <Icon
                        name={IconName.remove}
                        color="gray"
                        size={20}
                        className="ml-1"
                        onClick={handleClose}
                        role="button"
                    />
                </Tooltip>
            ) : null}
        </div>
    );
}

export default RadioWithInfo;
