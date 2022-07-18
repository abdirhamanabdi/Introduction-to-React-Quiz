import React from 'react';




function Child(props) {
    return (
        <div>Child
        <button onClick={() => props.changeValue ("It is working")}
        >Click to change title</button>
     
     </div>
    );
  }
  







export default Child;
