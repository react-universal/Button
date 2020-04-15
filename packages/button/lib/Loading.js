import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

const Loading = ({loading, typeTextColor, hideLabel, dense}) => {
  if (!loading) return null;

  return (
    <ActivityIndicator
      size="small"
      color={typeTextColor}
      style={{
        width: dense ? 12 : 16,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: hideLabel ? 0 : 8,
      }}
    />
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
  typeTextColor: PropTypes.string,
  hideLabel: PropTypes.bool,
  dense: PropTypes.bool,
};
