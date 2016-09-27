import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../app/partials/nav.jsx';
import Footer from '../app/partials/footer.jsx';
import Accounts from '../app/partials/accounts.jsx';
import SimpleFilter from '../app/partials/simple-filter.jsx';

export const MainLayout = ({content}) => (

<div className="wrapper-main">
    <header className="navigation">
    <Accounts />
      <Nav />
    </header>
    <SimpleFilter />
    <div>

        <main className="container">
            {content}
        </main>
    </div>

    <footer className="site-footer" id="footer" role="contentinfo">
      <div className="btn-group">
          <a href="/flyers"><button><i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i></button></a>
      </div>
      <div className="btn-group">
          <button><i className="fa fa-share-alt fa-lg" aria-hidden="true"></i></button>
      </div>
      <div className="btn-group">
          <button><i className="fa fa-rss fa-lg" aria-hidden="true"></i></button>
      </div>

    </footer>


</div>

)
