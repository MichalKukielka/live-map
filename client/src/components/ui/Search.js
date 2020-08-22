import React, { useState } from 'react';

function Search({ getQuery }) {
    const [text, setText] = useState('');

    const handleQueryChange = (query) => {
        setText(query);
        getQuery(query);
    }

    return (
        <input
            type='text'
            className='form-control py-3 my-1 d-block'
            placeholder='Search car...'
            value={text}
            onChange={(e) => handleQueryChange(e.target.value)}
        />
    );
}

export default Search