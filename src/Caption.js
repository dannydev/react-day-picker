import React from 'react';
import PropTypes from 'prop-types';
import DayPickerPropTypes from './PropTypes';

export default function Caption({ date, months, locale, localeUtils, onClick }) {
  return (
    <div className="DayPicker-Caption" onClick={ onClick } role="heading">
      { months ?
        `${months[date.getMonth()]} ${date.getFullYear()}` :
        localeUtils.formatMonthTitle(date, locale)
      }
    </div>
  );
}

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
  months: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
  onClick: PropTypes.func,
};
