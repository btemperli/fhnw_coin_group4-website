'use strict';

function App() {

    // Add the navigation with the tabs
    $('#nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // do the things for the data-tables
}

App();