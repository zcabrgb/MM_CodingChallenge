"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A dropdown menu can contain dividers to separate related content.
 */
function DropdownDivider(props) {
  var className = props.className;
  var classes = (0, _classnames.default)('divider', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownDivider, props);
  var ElementType = (0, _lib.getElementType)(DropdownDivider, props);
  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}

DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _propTypes.default.string
};
var _default = DropdownDivider;
exports.default = _default;

//# sourceMappingURL=DropdownDivider.js.map