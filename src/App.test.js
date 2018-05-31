import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

const mockStore = {
  todos: []
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider todoStore={mockStore}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
