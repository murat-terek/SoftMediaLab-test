import React from 'react';
import { Field, reduxForm, formValues, WrappedFieldProps } from 'redux-form';
import Label from '../ui-kit/label/label';
import ToggleBox, { ToggleBoxProps } from '../ui-kit/togglebox/togglebox';
import InputNumber, { InputNumberProps } from '../ui-kit/input-number/input-number';
import RadioGroupWithInfo, { RadioGroupWithInfoProps } from '../ui-kit/radio-group-with-info/radio-group-with-info';
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

type renderRadioGroupType = WrappedFieldProps & RadioGroupWithInfoProps;

const renderRadioGroup = ({ input, ...rest }: renderRadioGroupType) => (
    <RadioGroupWithInfo
        {...input}
        {...rest}
        value={input.value}
        onChange={input.onChange}
    />
);

type renderToggleBoxType = WrappedFieldProps & ToggleBoxProps & { salaryPeriod: SelaryPeriod };

const renderToggleBox = formValues<renderToggleBoxType>('salaryPeriod')(
    ({ input, salaryPeriod, ...rest }: renderToggleBoxType) => {
        if (salaryPeriod === SelaryPeriod.MROT) {
            return null;
        }

        return (
            <ToggleBox
                {...rest}
                checked={input.value ? true : false}
                onChange={input.onChange}
            />
        );
    }
);

type renderInputNumberType = WrappedFieldProps & InputNumberProps & { salaryPeriod: SelaryPeriod };

const renderInputNumber = formValues<renderInputNumberType>('salaryPeriod')(
    ({ input, salaryPeriod }: renderInputNumberType) => {
        if (salaryPeriod === SelaryPeriod.MROT) {
            return null;
        }

        return (
            <InputNumber
                value={input.value}
                onChange={input.onChange}
                label={
                    salaryPeriod === SelaryPeriod.Day ? '₽ в день' :
                        salaryPeriod === SelaryPeriod.Hour ? '₽ в час' : '₽'
                }
            />
        );
    }
);

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
                    component={renderInputNumber}
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
