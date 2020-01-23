import React from 'react'

interface Props {

}

const SlideTitle: React.FC<Props> = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export default SlideTitle
