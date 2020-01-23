import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { nextSlide, prevSlide } from './store/actions/slideActions'
import './App.css';
import Presentation from './components/Presentation'
import { useKeyPress } from './hooks'

const App: React.FC = () => {
  const dispatch = useDispatch();                           // Function to send action to redux store
  const arrowRightPressed = useKeyPress('ArrowRight');      // Listen to 'arrow right' key pressed events
  const arrowLeftPressed = useKeyPress('ArrowLeft');        // Listen to 'arrow left' key pressed events

  // Handle keys to go to next slide
  useEffect(() => {

    // Trigger next slide on following keyboard events: 
    // - ArrowRigth
    (arrowRightPressed) && dispatch(nextSlide());
    // eslint-disable-next-line
  }, [arrowRightPressed])

  // Handle keys to go to previous slide
  useEffect(() => {

    // Trigger previous slide on following keyboard events: 
    // - ArrowLeft
    (arrowLeftPressed) && dispatch(prevSlide());
    // eslint-disable-next-line
  }, [arrowLeftPressed])

  return (
    <div className="App">
      <Presentation />
    </div>
  );
}

export default App;
