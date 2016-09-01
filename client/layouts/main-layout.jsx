import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export const MainLayout = ({content}) => (

<div className="wrapper-main">
    <header>
      HEADER
    </header>

    <div>
        <main>
            {content}
        </main>
    </div>

    <footer>
      FOOTER
    </footer>


</div>

)
