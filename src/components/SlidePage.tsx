import React from 'react'

interface Props {
    className?: string;
    style?: any;
}

const SlidePage: React.FC<Props> = (props) => {
    return (
        <div className={props.className} style={{ ...props.style }}>
            {props.children}
        </div>
    )
}

export default SlidePage;
