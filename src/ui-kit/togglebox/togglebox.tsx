import React from 'react';
import classnames from 'classnames';
import Label from '../label/label';
import './togglebox.scss';

export interface ToggleBoxProps {
    uncheckedLabel: string;
    checkedLabel: string;
    checked: boolean;
    onChange?(checked: boolean): void;
    className?: string;
    id: string;
}

const ToggleBox: React.FC<ToggleBoxProps> =
    ({ uncheckedLabel, checkedLabel, checked, onChange, className, id }) => {
        const handleCheck = () => {
            onChange && onChange(true);
        }

        const handleUncheck = () => {
            onChange && onChange(false);
        }

        const handleToggle = () => {
            onChange && onChange(!checked);
        }

        return (
            <div className={classnames('togglebox', className)}>
                <Label className="mr-1 togglebox-label" black={!checked} onClick={handleUncheck}>
                    {uncheckedLabel}
                </Label>
                <div className="custom-control custom-switch">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id={id}
                        checked={checked}
                        onChange={handleToggle}
                    />
                    <label className="custom-control-label" htmlFor={id} />
                </div>
                <Label className="togglebox-label" black={checked} onClick={handleCheck}>
                    {checkedLabel}
                </Label>
            </div>
        );
    }

export default ToggleBox;