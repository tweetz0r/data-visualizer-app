import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import i18n from '@dhis2/d2-i18n';
import * as fromReducers from '../../reducers';
import { colors } from '../../colors';

const style = {
    toolTip: {
        color: colors.white,
        backgroundColor: '#4a4a4a',
        boxShadow: 'none',
        width: 150,
        borderRadius: 3,
        position: 'relative',
        top: 5,
        fontSize: 12,
        padding: 5,
    },
    recommendedIcon: {
        backgroundColor: colors.accentSecondaryLight,
        height: 7,
        width: 7,
        marginTop: 10,
        marginLeft: 4,
        borderRadius: 5,
    },
    iconWrapper: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    iconGenericWrapper: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    icon: {
        position: 'relative',
        top: '14%',
    },
};

export class RecommendedIcon extends Component {
    state = { anchorEl: null };

    onMouseOver = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    onMouseExit = () => {
        this.setState({ anchorEl: null });
    };

    checkIfRecommended = () => {
        const { isRecommended, isSelected, id } = this.props;
        return isRecommended.includes(id) && !isSelected;
    };

    showTooltip = () => {
        const HINT_TEXT = i18n.t('Dimension recommended with selected data');

        return (
            <Popper
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                placement="bottom"
            >
                <Paper style={style.toolTip}>{HINT_TEXT}</Paper>
            </Popper>
        );
    };

    render = () => {
        const TooltipOnHover = Boolean(this.state.anchorEl)
            ? this.showTooltip()
            : null;

        return this.checkIfRecommended() ? (
            <div
                style={style.recommendedIcon}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseExit}
            >
                {TooltipOnHover}
            </div>
        ) : null;
    };
}

const mapStateToProps = state => ({
    isRecommended: fromReducers.fromRecommendedIds.sGetRecommendedIds(state),
});

RecommendedIcon.propTypes = {
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isRecommended: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(RecommendedIcon);

export const DataIcon = () => {
    return (
        <div style={style.iconWrapper}>
            <svg
                style={style.icon}
                width="12px"
                height="12px"
                viewBox="0 0 12 12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>0CE35F95-11B0-4594-B76D-918904D3C4D1</title>
                <desc>Created with sketchtool.</desc>
                <defs />
                <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g id="Icon/12x12/Data">
                        <g id="icon_data_small">
                            <rect
                                id="bounds"
                                x="0"
                                y="0"
                                width="12"
                                height="12"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="0.5"
                                y="0.5"
                                width="4"
                                height="4"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="7.5"
                                y="0.5"
                                width="4"
                                height="4"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="7.5"
                                y="7.5"
                                width="4"
                                height="4"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="0.5"
                                y="7.5"
                                width="4"
                                height="4"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export const PeriodIcon = () => {
    return (
        <div style={style.iconWrapper}>
            <svg
                style={style.icon}
                width="11px"
                height="11px"
                viewBox="0 0 11 11"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>619E56CE-6EA1-46F2-83A4-994ED2ADE298</title>
                <desc>Created with sketchtool.</desc>
                <defs />
                <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g id="Icon/12x12/Date">
                        <g id="icon_date_small">
                            <rect
                                id="bounds"
                                x="0"
                                y="0"
                                width="12"
                                height="12"
                            />
                            <rect
                                id="Rectangle-9"
                                fill="#494949"
                                x="5"
                                y="2"
                                width="1"
                                height="4"
                            />
                            <rect
                                id="Rectangle-17"
                                fill="#494949"
                                x="5"
                                y="5"
                                width="3"
                                height="1"
                            />
                            <circle
                                id="Oval-3"
                                stroke="#494949"
                                cx="5.5"
                                cy="5.5"
                                r="5"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export const OrgUnitIcon = () => {
    return (
        <div style={style.iconWrapper}>
            <svg
                style={style.icon}
                width="11px"
                height="12px"
                viewBox="0 0 11 12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>262CCA05-7B4F-45C2-981D-57F1EC91B010</title>
                <desc>Created with sketchtool.</desc>
                <defs />
                <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g id="Icon/12x12/OrgUnit">
                        <g id="icon_unit_small">
                            <rect
                                id="bounds"
                                x="0"
                                y="0"
                                width="12"
                                height="12"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="3.5"
                                y="0.5"
                                width="4"
                                height="3"
                            />
                            <rect
                                id="Rectangle-19"
                                fill="#494949"
                                x="5"
                                y="4"
                                width="1"
                                height="3"
                            />
                            <rect
                                id="Rectangle-20"
                                fill="#494949"
                                x="2"
                                y="6"
                                width="3"
                                height="1"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="6.5"
                                y="8.5"
                                width="4"
                                height="3"
                            />
                            <rect
                                id="Rectangle-18"
                                stroke="#494949"
                                x="0.5"
                                y="8.5"
                                width="4"
                                height="3"
                            />
                            <rect
                                id="Rectangle-21"
                                fill="#494949"
                                x="2"
                                y="7"
                                width="1"
                                height="1"
                            />
                            <rect
                                id="Rectangle-22"
                                fill="#494949"
                                x="6"
                                y="6"
                                width="3"
                                height="1"
                            />
                            <rect
                                id="Rectangle-23"
                                fill="#494949"
                                x="8"
                                y="7"
                                width="1"
                                height="1"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export const GenericDimension = () => {
    return (
        <div style={style.iconGenericWrapper}>
            <div
                style={{
                    height: 4,
                    width: 4,
                    border: '1px solid #494949',
                    borderRadius: 1,
                    position: 'relative',
                    top: '42%',
                }}
            />
        </div>
    );
};

export const MoreHorizontal = () => {
    return (
        <svg
            style={{ position: 'relative', top: 2 }}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    );
};
