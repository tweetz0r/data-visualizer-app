import React from 'react'
import PropTypes from 'prop-types'

const SingleValueIcon = ({
    style = { paddingRight: '8px', width: 24, height: 24 },
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,48,48" style={style}>
        <path
            d="M45,9.59a2,2,0,0,1,2,2v25a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2v-25a2,2,0,0,1,2-2H45m0-1H3a3,3,0,0,0-3,3v25a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3v-25a3,3,0,0,0-3-3Z"
            fill="#9e9e9e"
        />
        <path
            d="M13.06,31H10.82V20.16L7.51,21.29V19.4l5.26-1.94h.29Z"
            fill="#1976d2"
        />
        <path
            d="M27,31H18V29.46l4.5-4.91a10.45,10.45,0,0,0,1.38-1.81,2.91,2.91,0,0,0,.42-1.46,2.2,2.2,0,0,0-.55-1.56,1.86,1.86,0,0,0-1.46-.59,2.2,2.2,0,0,0-1.7.66,2.65,2.65,0,0,0-.6,1.83H17.69a4.36,4.36,0,0,1,.56-2.22,3.9,3.9,0,0,1,1.6-1.54,5.19,5.19,0,0,1,2.41-.54,4.54,4.54,0,0,1,3.1,1A3.41,3.41,0,0,1,26.5,21a4.66,4.66,0,0,1-.57,2.12,11.88,11.88,0,0,1-1.87,2.52l-3.3,3.53H27Z"
            fill="#1976d2"
        />
        <path
            d="M32.68,23.23h1.38a2.47,2.47,0,0,0,1.64-.54,1.9,1.9,0,0,0,.61-1.53,2.1,2.1,0,0,0-.51-1.5,2,2,0,0,0-1.54-.53,2.13,2.13,0,0,0-1.49.52A1.76,1.76,0,0,0,32.18,21H29.93a3.39,3.39,0,0,1,.55-1.89A3.74,3.74,0,0,1,32,17.79a5.15,5.15,0,0,1,2.21-.47,4.68,4.68,0,0,1,3.18,1,3.57,3.57,0,0,1,1.15,2.83A2.87,2.87,0,0,1,38,22.87a3.53,3.53,0,0,1-1.49,1.21,3.28,3.28,0,0,1,1.69,1.2,3.24,3.24,0,0,1,.58,1.95,3.63,3.63,0,0,1-1.25,2.89,4.82,4.82,0,0,1-3.28,1.08,4.82,4.82,0,0,1-3.19-1,3.44,3.44,0,0,1-1.24-2.77h2.25a1.88,1.88,0,0,0,.6,1.45,2.29,2.29,0,0,0,1.61.56,2.34,2.34,0,0,0,1.65-.56,2.09,2.09,0,0,0,.6-1.61,2.13,2.13,0,0,0-.63-1.65A2.7,2.7,0,0,0,34,25H32.68Z"
            fill="#1976d2"
        />
    </svg>
)

SingleValueIcon.propTypes = {
    style: PropTypes.object,
}

export default SingleValueIcon
