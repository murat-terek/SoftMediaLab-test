import React from 'react';
import classnames from 'classnames';
import { formValues } from 'redux-form';
import { SelaryPeriod } from '../enums/salary-period';

const NDFL_RATIO = 0.13;

const formatNumber = (number: number) =>
    number.toLocaleString(undefined, { maximumFractionDigits: 2 });

interface MessageProps {
    salaryPeriod?: SelaryPeriod;
    withTax?: boolean;
    salary?: number;
    className?: string;
}

const Message: React.FC<MessageProps> = ({ salaryPeriod, withTax, salary, className }) => {
    if (salaryPeriod !== SelaryPeriod.Month || !salary) {
        return null;
    }

    const grossSalary = withTax ? (salary / (1 - NDFL_RATIO)) : salary;
    const ndfl = grossSalary * NDFL_RATIO;
    const clearSalary = grossSalary - ndfl;

    return (
        <div className={classnames('alert alert-warning', className)} role="alert">
            <div><b>{formatNumber(clearSalary)} ₽</b> сотрудник будет получать на руки</div>
            <div><b>{formatNumber(ndfl)} ₽</b> НДФЛ, 13% от оклада</div>
            <div><b>{formatNumber(grossSalary)} ₽</b> за сотрудника в месяц</div>
        </div>
    );
}

export default formValues<MessageProps>('salaryPeriod', 'withTax', 'salary')(Message);
