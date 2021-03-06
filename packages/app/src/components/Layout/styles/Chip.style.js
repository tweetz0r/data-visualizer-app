import { colors } from '@dhis2/ui-core'

import * as layoutStyle from './style'

const baseChip = {
    padding: layoutStyle.CHIP_PADDING,
    fontSize: layoutStyle.CHIP_FONT_SIZE,
    fontWeight: layoutStyle.CHIP_FONT_WEIGHT,
    color: layoutStyle.CHIP_COLOR,
    cursor: 'pointer',
    minHeight: 24,
    userSelect: 'none',
}

export const styles = {
    chipWrapper: {
        display: 'flex',
        margin: layoutStyle.CHIP_MARGIN,
        backgroundColor: layoutStyle.CHIP_BACKGROUND_COLOR,
        borderRadius: layoutStyle.CHIP_BORDER_RADIUS,
        alignItems: 'center',
        maxWidth: '400px',
    },
    chip: {
        ...baseChip,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    chipEmpty: {
        backgroundColor: colors.grey300,
    },
    fixedDimensionIcon: {
        paddingRight: '6px',
    },
    iconWrapper: {
        paddingRight: '6px',
        display: 'flex',
        alignItems: 'center',
    },
    warningIcon: {
        fontSize: layoutStyle.CHIP_FONT_SIZE,
    },
    warningIconWrapper: {
        paddingLeft: '6px',
        display: 'flex',
        alignItems: 'center',
    },
    lockIcon: {
        fontSize: layoutStyle.CHIP_FONT_SIZE,
    },
    lockIconWrapper: {
        paddingLeft: '6px',
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
}

styles.chipLeft = {
    ...baseChip,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    alignItems: 'center',
}

styles.chipRight = {
    ...baseChip,
    paddingLeft: '0px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
}
