import React from 'react';
import ReactDOM from 'react-dom';
import ComponentBuilder from './ComponentBuilder.js';
import Header from './components/Header';
import Footer from './components/Footer';

const data = {
  content: {
    body: [
      {
        id: 'c1',
        type: 'text',
        title: 'Text componenet one content.'
      },
      {
        id: 'c2',
        type: 'image',
        src: 'resources/logo192.png'
      },
      {
        id: 'c3',
        type: 'text',
        title: 'Text componenet two content.'
      },
      {
        id: 'c4',
        type: 'accordion',
        title: 'Accordion asset.'
      },
    ]
  }
};

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Hello This is the new player</h1>
      {data.content.body.map(component => ComponentBuilder(component))}
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);