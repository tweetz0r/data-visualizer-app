import React from 'react'
import i18n from '@dhis2/d2-i18n'

import TextBaseOption from './TextBaseOption'

const TargetLineValue = () => (
    <TextBaseOption
        type="number"
        width="96px"
        label={i18n.t('Value')}
        placeholder={i18n.t('Number')}
        option={{
            name: 'targetLineValue',
        }}
        inline
    />
)

export default TargetLineValue
