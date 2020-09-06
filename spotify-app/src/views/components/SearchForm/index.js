import React from "react";
import { Field, reduxForm } from "redux-form";

const SearchForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='searchField'>Search for:</label>
        <Field name='searchField' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='searchType'>Type:</label>
        <Field name='searchType' component='select'>
          <option value='' />
          <option value='album'>album</option>
          <option value='artist'>artist</option>
          <option value='playlist'>playlist</option>
          <option value='track'>track</option>
        </Field>
      </div>
      <div>
        <label htmlFor='searchLimit'>Limit:</label>
        <Field name='searchLimit' component='select'>
          <option value='' />
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
          <option value='50'>50</option>
        </Field>
      </div>
      <button type='submit'>Search</button>
    </form>
  );
};

export default reduxForm({
  form: 'search'
})(SearchForm);
  
