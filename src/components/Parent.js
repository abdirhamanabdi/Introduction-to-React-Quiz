import React from 'react';
import Child from './Child';
function Parent() {
    const [value, setValue] = React.useState(
      ('Lorem ipsum diot')
     
    );
  
    return (
      <>
        <h3>{value}</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>
  
        <div className="wrapper">
          <Child
          changeValue={value => setValue(value)} />
        </div>
      </>
    );
  }
    
export default Parent;