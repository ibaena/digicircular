import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../app/partials/nav.jsx';
import Footer from '../app/partials/footer.jsx';
import Accounts from '../app/partials/accounts.jsx';
import SimpleFilter from '../app/partials/simple-filter.jsx';

export const AdminLayout = ({content}) => (

<div className="wrapper-main">
    <header className="navigation">
    <Accounts />
      <Nav />
    </header>

    <div>
        <main className="container">
            {content}
        </main>
    </div>

    <footer className="site-footer" id="footer" role="contentinfo">

    </footer>


</div>

)
