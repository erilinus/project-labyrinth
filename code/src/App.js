import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import game from 'reducers/game';
// import StartGame from 'components/StartGame'
import StartScreen from 'components/StartScreen';
import { InnerWrapper, OuterWrapper } from 'components/styling/MainStyles';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <StartScreen />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  )
}
