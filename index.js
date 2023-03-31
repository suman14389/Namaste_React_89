import React from 'react';
import ReactDOM from 'react-dom/client';


const header = React.createElement('h1', {
    className: 'header-container',
}, 'Welcome to my website');

const lineBreak = React.createElement('hr');

const firstName = React.createElement('h2', { className: 'firstname'}, 'Suman Naik ');
const lastName = React.createElement('h2', {className: 'lastname'}, 'Guguloth' );
const contact = React.createElement('h3', {style: {display: 'inline'}}, 'Contact: 7247809524');
const DOB = React.createElement('h2', {}, "14 Feb 2001");
const gender = React.createElement('h2', {}, 'Male');
const highestDegree = React.createElement('h2', {}, 'B.Tech (IIT Roorkee)' );
const emailId = React.createElement('h3',{style: {display: 'inline', marginLeft: '30px'}}, 'EmailId: sumanm14389@gmail.com' );

const details = React.createElement('div', {
    className: 'details-container',
}, [firstName, lastName, DOB, gender, highestDegree]);

const footer = React.createElement('div', {
    className: 'footer-container',
}, [contact, emailId] );

const Element = React.createElement('div', {
    className: 'container'
}, [header, lineBreak, details, lineBreak, footer]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Element);


