import React from 'react';
import Spinner from './spinner.gif';

export default () =>{
    return (
        <div>
            <img
            src={Spinner}
            alt="Loading.."
            sytle={{ width:'200px', margin:' 40px auto', display:'block' }}
            />

        </div>
    );

}