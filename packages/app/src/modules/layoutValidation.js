import i18n from '@dhis2/d2-i18n';
import {
    AXIS,
    DIMENSION_ID_DATA,
    DIMENSION_ID_PERIOD,
    FIXED_DIMENSIONS,
    dimensionIsValid,
    layoutGetDimension,
} from '@dhis2/analytics';

import {
    YEAR_OVER_YEAR_LINE,
    YEAR_OVER_YEAR_COLUMN,
    PIE,
    GAUGE,
    SINGLE_VALUE,
} from './chartTypes';
import { BASE_FIELD_YEARLY_SERIES } from './fields/baseFields';

const SERIES_MISSING = 'SERIES_MISSING';
const CATEGORY_MISSING = 'CATEGORY_MISSING';
const PE_MISSING = 'PE_MISSING';
const PE_MISSING_ON_CATEGORY = 'PE_MISSING_ON_CATEGORY';
const PIE_DX_MISSING = 'PIE_DX_MISSING';
const PIE_PE_MISSING = 'PIE_PE_MISSING';
const PIE_FILTER_MISSING = 'PIE_FILTER_MISSING';
const YOY_PE_MISSING_ON_SERIES = 'YOY_PE_MISSING_ON_SERIES';
const YOY_DX_MISSING_ON_FILTER = 'YOY_DX_MISSING_ON_FILTER';
const SV_DX_MISSING_ON_SERIES = 'SV_DX_MISSING_ON_SERIES';
const SV_PE_MISSING_ON_FILTER = 'SV_PE_MISSING_ON_FILTER';

const getErrorMessage = key => {
    const series = i18n.t('series');
    const category = i18n.t('category');
    const filter = i18n.t('filter');

    const errorLabels = {
        [SERIES_MISSING]: i18n.t(
            'Please add at least one {{series}} dimension',
            { series }
        ),
        [CATEGORY_MISSING]: i18n.t(
            'Please add at least one {{category}} dimension',
            { category }
        ),
        [PE_MISSING]: i18n.t(
            'Please add at least one period as {{series}}, {{category}} or {{filter}}',
            {
                series,
                category,
                filter,
            }
        ),
        [PIE_DX_MISSING]: i18n.t(
            'Please add {{data}} as {{category}} or {{filter}}',
            {
                data: FIXED_DIMENSIONS[DIMENSION_ID_DATA].name(),
                category,
                filter,
            }
        ),
        [PIE_PE_MISSING]: i18n.t(
            'Please add at least one period as {{series}} or {{filter}}',
            {
                series,
                filter,
            }
        ),
        [PIE_FILTER_MISSING]: i18n.t(
            'Please add at least one {{filter}} dimension',
            { filter }
        ),
        [YOY_PE_MISSING_ON_SERIES]: i18n.t(
            'Please add at least one period as a {{series}} dimension',
            { series }
        ),
        [PE_MISSING_ON_CATEGORY]: i18n.t(
            'Please add at least one period as a {{category}} dimension',
            { category }
        ),
        [YOY_DX_MISSING_ON_FILTER]: i18n.t(
            'Please add {{data}} as a filter dimension',
            {
                data: FIXED_DIMENSIONS[DIMENSION_ID_DATA].name(),
            }
        ),
        [SV_DX_MISSING_ON_SERIES]: i18n.t(
            'Please add one {{series}} dimension',
            { series }
        ),
        [SV_PE_MISSING_ON_FILTER]: i18n.t(
            'Please add at least one period as {{filter}}',
            { filter }
        ),
    };

    return errorLabels[key];
};

// Layout validation helper functions
const isAxisValid = axis =>
    AXIS.isValid(axis) && dimensionIsValid(axis[0], { requireItems: true });

const validateDimension = (dimension, message) => {
    if (!(dimension && dimensionIsValid(dimension, { requireItems: true }))) {
        throw new Error(getErrorMessage(message));
    }
};

const validateAxis = (axis, message) => {
    if (!isAxisValid(axis)) {
        throw new Error(getErrorMessage(message));
    }
};

// Layout validation
const validateDefaultLayout = layout => {
    validateAxis(layout.columns, SERIES_MISSING);
    validateAxis(layout.rows, CATEGORY_MISSING);
    validateDimension(
        layoutGetDimension(layout, DIMENSION_ID_PERIOD),
        PE_MISSING
    );
};

const validateYearOverYearLayout = layout => {
    if (
        !(
            Array.isArray(layout[BASE_FIELD_YEARLY_SERIES]) &&
            typeof layout[BASE_FIELD_YEARLY_SERIES][0] === 'string'
        )
    ) {
        throw new Error(getErrorMessage(YOY_PE_MISSING_ON_SERIES));
    }

    validateAxis(layout.rows, PE_MISSING_ON_CATEGORY);

    validateAxis(layout.columns, YOY_DX_MISSING_ON_FILTER);
};

const validatePieLayout = layout => {
    validateAxis(layout.columns, SERIES_MISSING);
    validateAxis(layout.filters, PIE_FILTER_MISSING);
    validateDimension(
        layoutGetDimension(layout, DIMENSION_ID_PERIOD),
        PIE_PE_MISSING
    );
};

const validateSingleValueLayout = layout => {
    validateAxis(layout.columns, SV_DX_MISSING_ON_SERIES);
    validateDimension(
        layoutGetDimension(layout, DIMENSION_ID_PERIOD),
        SV_PE_MISSING_ON_FILTER
    );
};

export const validateLayout = layout => {
    switch (layout.type) {
        case PIE:
        case GAUGE:
            return validatePieLayout(layout);
        case YEAR_OVER_YEAR_COLUMN:
        case YEAR_OVER_YEAR_LINE:
            return validateYearOverYearLayout(layout);
        case SINGLE_VALUE:
            return validateSingleValueLayout(layout);
        default:
            return validateDefaultLayout(layout);
    }
};
