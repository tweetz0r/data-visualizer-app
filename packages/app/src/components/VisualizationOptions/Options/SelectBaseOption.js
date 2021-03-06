import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Checkbox, SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import { sGetUiOptions } from '../../../reducers/ui'
import { acSetUiOptions } from '../../../actions/ui'

import {
    tabSectionOption,
    tabSectionOptionToggleable,
} from '../styles/VisualizationOptions.style.js'

export const SelectBaseOption = ({
    option,
    label,
    helpText,
    toggleable,
    value,
    onChange,
}) => {
    const defaultValue = option.defaultValue

    const [enabled, setEnabled] = useState(value !== defaultValue)

    const selected = option.items.find(item => item.value === value) || {}

    const onToggle = checked => {
        setEnabled(checked)

        onChange(checked ? option.items[0].value : defaultValue)
    }

    return (
        <div
            className={!toggleable || enabled ? '' : tabSectionOption.className}
        >
            {toggleable ? (
                <Checkbox
                    checked={enabled}
                    label={label}
                    name={`${option.name}-toggle`}
                    onChange={({ checked }) => onToggle(checked)}
                    dense
                />
            ) : null}
            {!toggleable || enabled ? (
                <div
                    className={
                        toggleable ? tabSectionOptionToggleable.className : ''
                    }
                >
                    <SingleSelectField
                        name={`${option.name}-select`}
                        label={toggleable ? '' : label}
                        onChange={({ selected }) => onChange(selected.value)}
                        selected={selected}
                        helpText={helpText}
                        inputWidth="280px"
                        dense
                    >
                        {option.items.map(({ value, label }) => (
                            <SingleSelectOption
                                key={value}
                                value={value}
                                label={label}
                            />
                        ))}
                    </SingleSelectField>
                </div>
            ) : null}
        </div>
    )
}

SelectBaseOption.propTypes = {
    option: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    helpText: PropTypes.string,
    label: PropTypes.string,
    toggleable: PropTypes.bool,
}

const mapStateToProps = (state, ownProps) => ({
    value: sGetUiOptions(state)[ownProps.option.name],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: value =>
        dispatch(acSetUiOptions({ [ownProps.option.name]: value })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectBaseOption)
