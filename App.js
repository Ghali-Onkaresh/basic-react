
const heading =  React.createElement('div', {
    id: 'parent',
},  React.createElement('div', {}), React.createElement('h1', {}, 'Hello World')) ; 


const element = ReactDOM.createRoot(document.getElementById('root'));

element.render(heading);