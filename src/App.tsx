import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { nextSlide, prevSlide, firstSlide, lastSlide } from './store/actions/slideActions'
import './App.css';
import Presentation from './components/Presentation'
import { useKeyPress } from './hooks'

const App: React.FC = () => {
  const dispatch = useDispatch();                           // Function to send action to redux store
  const arrowRightPressed = useKeyPress('ArrowRight');      // Listen to 'arrow right' key pressed events
  const arrowLeftPressed = useKeyPress('ArrowLeft');        // Listen to 'arrow left' key pressed events
  const spacePressed = useKeyPress(' ');
  const homePressed = useKeyPress('Home');
  const endPressed = useKeyPress('End');

  // Handle keys to go to next slide
  useEffect(() => {

    // Trigger next slide on following keyboard events: 
    // - ArrowRigth
    (arrowRightPressed || spacePressed) && dispatch(nextSlide());
    // eslint-disable-next-line
  }, [arrowRightPressed, spacePressed])

  // Handle keys to go to previous slide
  useEffect(() => {

    // Trigger previous slide on following keyboard events: 
    // - ArrowLeft
    (arrowLeftPressed) && dispatch(prevSlide());
    // eslint-disable-next-line
  }, [arrowLeftPressed])

  // Go to first slide if 'home' button is pressed on keyboard
  useEffect(() => {

    homePressed && dispatch(firstSlide());
    // eslint-disable-next-line
  }, [homePressed])

  // Go to last slide if 'end' button is pressed on keyboard
  useEffect(() => {
    endPressed && dispatch(lastSlide());
    // eslint-disable-next-line
  }, [endPressed])

  return (
    <div className="App">
      <Presentation />
    </div>
  );
}

export default App;
