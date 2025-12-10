import React from 'react'

interface IconProps {
    className: string;
    iconName: string;
}

const Icon: React.FC<IconProps> = ({className, iconName}) => {
    return (
        <svg className={className} aria-hidden="true" focusable="false">
            <use xlinkHref={`#${iconName}`} />
        </svg>
    )
}

export default Icon;
