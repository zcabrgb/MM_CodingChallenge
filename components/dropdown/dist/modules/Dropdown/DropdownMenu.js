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
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      direction = props.direction,
      open = props.open,
      scrolling = props.scrolling;
  var classes = (0, _classnames.default)(direction, (0, _lib.useKeyOnly)(open, 'visible'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'menu transition', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownMenu, props);
  var ElementType = (0, _lib.getElementType)(DropdownMenu, props);
  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A dropdown menu can open to the left or to the right. */
  direction: _propTypes.default.oneOf(['left', 'right']),

  /** Whether or not the dropdown menu is displayed. */
  open: _propTypes.default.bool,

  /** A dropdown menu can scroll. */
  scrolling: _propTypes.default.bool
};
var _default = DropdownMenu;
exports.default = _default;

//# sourceMappingURL=DropdownMenu.js.map