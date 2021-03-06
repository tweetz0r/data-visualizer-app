import React from 'react'
import PropTypes from 'prop-types'

const YearOverYearLineIcon = ({
    style = { paddingRight: '8px', width: 24, height: 24 },
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,48,48" style={style}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <mask id="mask-yoyl-icon" fill="white">
                    <rect x="0" y="0" width="48" height="48" />
                </mask>
                <polygon
                    stroke="#1976D2"
                    strokeWidth="2"
                    mask="url(#mask-yoyl-icon)"
                    points="1 28 10 35 18 16 34 35 50 36 50 51 -3 51 -3 28"
                />
                <polygon
                    stroke="#004BA0"
                    strokeWidth="2"
                    mask="url(#mask-yoyl-icon)"
                    points="1 20 8 20 19 29 36 17 50 28 50 51 -3 51 -3 20"
                />
                <polygon
                    stroke="#63A4FF"
                    strokeWidth="2"
                    mask="url(#mask-yoyl-icon)"
                    points="1 35 19 39 28 31 38 28 50 43 50 66 -3 66 -3 35"
                />
                <rect fill="#9E9E9E" x="0" y="0" width="2" height="48" />
                <rect fill="#9E9E9E" x="0" y="46" width="48" height="2" />
            </g>
        </g>
    </svg>
)

YearOverYearLineIcon.propTypes = {
    style: PropTypes.object,
}

export default YearOverYearLineIcon
