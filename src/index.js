import React from "react";
import ReactDOM from "react-dom";

// const div= <div>hello 2</div>
const div = React.createElement('h1',{className:'text'},"Hello React Developer");
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
