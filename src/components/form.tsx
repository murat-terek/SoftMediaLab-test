import React from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import Label from '../ui-kit/label/label';
import ToggleBox from '../ui-kit/togglebox/togglebox';
import Input from '../ui-kit/input-number/input-number';
import RadioGroup from '../ui-kit/radio-group-with-info/radio-group-with-info';
import { SelaryPeriod } from '../enums/salary-period';
import Message from './message';

const radioOptions = [
    {
        label: 'Оклад за месяц',
        value: SelaryPeriod.Month
    },
    {
        label: 'МРОТ',
        value: SelaryPeriod.MROT,
        info: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'
    },
    {
        label: 'Оплата за день',
        value: SelaryPeriod.Day
    },
    {
        label: 'Оклад за час',
        value: SelaryPeriod.Hour
    },
]

const renderRadioGroup = ({ input, ...rest }: any) => (
    <RadioGroup
        {...input}
        {...rest}
        value={input.value}
        onChange={input.onChange}
    />
);

const renderToggleBox = formValues('salaryPeriod')(
    ({ input, checkedLabel, uncheckedLabel, children, className, id, salaryPeriod }: any) => {
        if (salaryPeriod  === SelaryPeriod.MROT) {
            return null;
        }

        return (
            <ToggleBox
                checkedLabel={checkedLabel}
                uncheckedLabel={uncheckedLabel}
                checked={input.value ? true : false}
                onChange={input.onChange}
                children={children}
                className={className}
                id={id}
            />
        );
});

const renderInput = formValues('salaryPeriod')(({ input, salaryPeriod, ...rest }: any) => {
    if (salaryPeriod  === SelaryPeriod.MROT) {
        return null;
    }

    return (
        <Input
            {...input}
            {...rest}
            value={input.value}
            onChange={input.onChange}
            label={
                salaryPeriod === SelaryPeriod.Day ? '₽ в день' :
                salaryPeriod === SelaryPeriod.Hour ? '₽ в час' : '₽'
            }
        />
    );
});

const Form: React.FC = () => {
    return (
        <div>
            <Label>Сумма</Label>
            <Field 
                className="mb-2"
                name="salaryPeriod"
                component={renderRadioGroup}
                options={radioOptions}
                value={SelaryPeriod.Month}
            />
            <div className="ml-4 pl-2">
                <Field
                    className="mb-3"
                    name="withTax"
                    component={renderToggleBox}
                    checkedLabel="Без НДФЛ"
                    uncheckedLabel="Указать с НДФЛ"
                    id="customSwitch1"
                />
                <Field
                    name="salary"
                    component={renderInput}
                />
            </div>
            <Message className="mt-4" />
        </div>
    );
}

export default reduxForm({
    form: 'Form',
    initialValues: {
        salaryPeriod: SelaryPeriod.Month,
        withTax: true
    }
})(Form);
