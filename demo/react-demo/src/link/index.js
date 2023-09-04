import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';
import styles from './styles.module.css';

function Link({
  url, title, icon, className,
}) {
  return (
    <RRLink to={url} className={[styles[className], styles.link].join(' ')}>
      <i className={[icon, 'fas'].join(' ')} />
      <span>
        {' '}
        {title}
      </span>
    </RRLink>
  );
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  title: 'View',
  icon: 'fa-eye',
  className: '',
};

export default Link;
