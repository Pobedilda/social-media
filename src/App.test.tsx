import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPost, changeNewPostTexts, state} from "./state/state";


test('renders learn react link', () => {

  render(<App state={state} addPost={addPost} changeNewPostTexts={changeNewPostTexts}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
