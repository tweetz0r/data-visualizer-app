import keyBy from 'lodash-es/keyBy'
import sortBy from 'lodash-es/sortBy'
import { SET_DIMENSIONS } from '../reducers/dimensions'
import { apiFetchDimensions } from '@dhis2/analytics'
import { sGetSettingsDisplayNameProperty } from '../reducers/settings'

export const acSetDimensions = dimensions => ({
    type: SET_DIMENSIONS,
    value: keyBy(sortBy(dimensions, [d => d.name.toLowerCase()]), 'id'),
})

export const tSetDimensions = d2 => async (dispatch, getState) => {
    const onSuccess = dimensions => {
        dispatch(acSetDimensions(dimensions))
    }

    const onError = error => {
        console.log('Error (apiFetchDimensions): ', error)
        return error
    }

    try {
        const displayNameProp = sGetSettingsDisplayNameProperty(getState())
        const dimensions = await apiFetchDimensions(d2, displayNameProp)
        return onSuccess(dimensions)
    } catch (err) {
        return onError(err)
    }
}
