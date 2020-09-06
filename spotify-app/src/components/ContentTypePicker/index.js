import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setContentType } from '../../reducers/contentTypePickerSlice';

import "./contentTypePicker.css"

const ContentTypePicker = (props) => {
  const clickHandler = (event) => {
    const type = event.target.value;
    props.setContentType({ type });
  };

  useEffect(() => {

  });

  return (
    <div className="content-type-picker">
      <button onClick={clickHandler} value={props.type}>{ props.type }</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedContent: state.content.selectedContentType
  };
};

const mapDispatchToProps = {
  setContentType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentTypePicker);
