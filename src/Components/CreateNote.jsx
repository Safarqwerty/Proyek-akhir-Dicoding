// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function CreateNote({inputText, setInputText, saveHandler}) {
    const char = 100;
    // eslint-disable-next-line react/prop-types
    const charLimit = char - inputText.length;
    return (
        <div className='note'>
            <textarea 
            cols={10} 
            rows={5} 
            placeholder='Judul...' 
            value={inputText} onChange={(e) => setInputText(e.target.value)} 
            maxLength={100}
            >

            </textarea>
            <div className='note_footer'>
                <span className='label'>{charLimit}</span>
                <button className='note_save' onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default CreateNote