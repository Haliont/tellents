import React from 'react';
import PropTypes from 'prop-types';
import { FormSpy } from 'react-final-form';

const AutoSaveComponent = ({ values, onSave }) => {
  onSave(values);
  return null;
};

function AutoSave(props) {
  return <FormSpy {...props} component={AutoSaveComponent} />;
}

AutoSave.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default AutoSave;
