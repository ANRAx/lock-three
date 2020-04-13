import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Card from './Card';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(

  <div>
    <div>
      <Header />
    </div>
    <div className="tc pt7">
      <Card />
    </div>
    <div>
      <Footer />
    </div>
  </div>
  , document.getElementById('root')
);

serviceWorker.unregister();
