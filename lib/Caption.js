'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Caption;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Caption(_ref) {
  var date = _ref.date,
      months = _ref.months,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: 'DayPicker-Caption', onClick: onClick, role: 'heading' },
    months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
  );
}

Caption.propTypes = {
  date: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  locale: _propTypes2.default.string,
  localeUtils: _PropTypes2.default.localeUtils,
  onClick: _propTypes2.default.func
};
//# sourceMappingURL=Caption.js.map