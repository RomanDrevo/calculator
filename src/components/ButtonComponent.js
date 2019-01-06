import React from 'react'

const ButtonComponent = ({onClick, size, value, symbol}) => (
    <div
        onClick={onClick}
        className="action-button"
        size={size}
        action={value}
    >
        {symbol}
    </div>
)

export default ButtonComponent
