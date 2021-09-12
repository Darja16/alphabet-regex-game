import React, {useState} from 'react';

import styles from './Start.module.css';

const Start = ()  => {
    const [name, setName] = useState('')
    const [mode, setMode] = useState('')

  const submitForm = (event) => {
    event.preventDefault();

    alert(`${name} and mode ${mode}`)
  }


    return (
      <div className={styles.container}>
        <form onSubmit={submitForm}>
          <label>
            NAME
            <input
              placeholder='Type your name'
              required
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            SELECT MODE
            <select name='Motivation' required onChange={e => setMode(e.target.value)}>
              <option value='' disabled selected>
                Select your option
              </option>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </label>
          
          <button>START</button>       
        </form>
      </div>
    );
}

export default Start;
