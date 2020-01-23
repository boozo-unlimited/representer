import React from 'react'

import slides from '../slides'

interface Props {

}

const Presentation: React.FC<Props> = (props) => {

    const CurrentSlide = slides[0];

    return (
        <div>
            {/* Show actual slide */}
            <CurrentSlide />
        </div>
    )
}

export default Presentation;
