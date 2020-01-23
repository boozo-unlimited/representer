
import { useState, useEffect } from 'react'

/**
 * From https://usehooks.com/useKeyPress/
 * Many thanks to Gabe Ragland
 */
function useKeyPress(targetKey: string) {

    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    function downHandler(ev: KeyboardEvent) {
        //console.log(ev);
        if (ev.key === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    const upHandler = (ev: KeyboardEvent) => {
        if (ev.key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
        // eslint-disable-next-line
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

export default useKeyPress;
