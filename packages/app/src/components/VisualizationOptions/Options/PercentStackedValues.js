import React from 'react'

import i18n from '@dhis2/d2-i18n'

import CheckboxBaseOption from './CheckboxBaseOption'

const PercentStackedValues = () => (
    <CheckboxBaseOption
        label={i18n.t('Stacked values add up to 100%')}
        option={{
            name: 'percentStackedValues',
        }}
    />
)

export default PercentStackedValues
