import React, { useState } from 'react';

function Search({ getQuery }) {
    const [text, setText] = useState('');

    const handleQueryChange = (e) => {
        setText(e.target.value);
        getQuery(e.target.value);
    }

    return (
        <input
            type='text'
            className='form-control py-3 my-1 d-block'
            placeholder='Search car...'
            value={text}
            onChange={handleQueryChange}
        />
    );
}

export default Search