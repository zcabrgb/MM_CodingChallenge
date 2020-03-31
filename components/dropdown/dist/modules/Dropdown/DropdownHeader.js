"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A dropdown menu can contain a header.
 */
function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = (0, _classnames.default)('header', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownHeader, props);
  var ElementType = (0, _lib.getElementType)(DropdownHeader, props);

  if (!_lib.childrenUtils.isNil(children)) {
    return _react.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _Icon.default.create(icon, {
    autoGenerateKey: false
  }), content);
}

DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand
};
DropdownHeader.create = (0, _lib.createShorthandFactory)(DropdownHeader, function (content) {
  return {
    content: content
  };
});
var _default = DropdownHeader;
exports.default = _default;

//# sourceMappingURL=DropdownHeader.js.map