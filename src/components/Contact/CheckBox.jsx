import React from 'react';
import CheckBoxContext from './CheckBoxcontext';

const CheckBox = ({children, value, disabled, checked, onChange}) => {
    const context = React.useContext(CheckBoxContext);

    if (!context) {
        return (
            <label>
                <input
                    type="checkbox"
                    name="category"
                    id={value}
                    disabled={disabled}
                    checked={checked}
                    onChange={({target: {
                            checked
                        }}) => onChange(checked)}/> {children}
            </label>
        );
    }

    const {isDisabled, isChecked, toggleValue} = context;

    return (
        <label>
            <input
                type="checkbox"
                disabled={isDisabled(disabled)}
                checked={isChecked(value)}
                onChange={({target: {
                        checked
                    }}) => toggleValue({checked, value})}/> {children}
        </label>
    );

}

export default CheckBox;