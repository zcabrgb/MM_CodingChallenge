"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Flag = _interopRequireDefault(require("../../elements/Flag"));

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

var _Image = _interopRequireDefault(require("../../elements/Image"));

var _Label = _interopRequireDefault(require("../../elements/Label"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An item sub-component for Dropdown component.
 */
var DropdownItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          description = _this$props.description,
          flag = _this$props.flag,
          icon = _this$props.icon,
          image = _this$props.image,
          label = _this$props.label,
          selected = _this$props.selected,
          text = _this$props.text;
      var classes = (0, _classnames.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(selected, 'selected'), 'item', className); // add default dropdown icon if item contains another menu

      var iconName = _lodash.default.isNil(icon) ? _lib.childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown' : icon;
      var rest = (0, _lib.getUnhandledProps)(DropdownItem, this.props);
      var ElementType = (0, _lib.getElementType)(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (!_lib.childrenUtils.isNil(children)) {
        return _react.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var flagElement = _Flag.default.create(flag, {
        autoGenerateKey: false
      });

      var iconElement = _Icon.default.create(iconName, {
        autoGenerateKey: false
      });

      var imageElement = _Image.default.create(image, {
        autoGenerateKey: false
      });

      var labelElement = _Label.default.create(label, {
        autoGenerateKey: false
      });

      var descriptionElement = (0, _lib.createShorthand)('span', function (val) {
        return {
          children: val
        };
      }, description, {
        defaultProps: {
          className: 'description'
        },
        autoGenerateKey: false
      });
      var textElement = (0, _lib.createShorthand)('span', function (val) {
        return {
          children: val
        };
      }, _lib.childrenUtils.isNil(content) ? text : content, {
        defaultProps: {
          className: 'text'
        },
        autoGenerateKey: false
      });
      return _react.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
    }
  }]);

  return DropdownItem;
}(_react.Component);

_defineProperty(DropdownItem, "propTypes", {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Style as the currently chosen item. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: _lib.customPropTypes.itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: _propTypes.default.bool,

  /** Shorthand for Flag. */
  flag: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Image. */
  image: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Label. */
  label: _lib.customPropTypes.itemShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: _propTypes.default.bool,

  /** Display text. */
  text: _lib.customPropTypes.contentShorthand,

  /** Stored value. */
  value: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string])
});

_defineProperty(DropdownItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"]);

DropdownItem.create = (0, _lib.createShorthandFactory)(DropdownItem, function (opts) {
  return opts;
});
var _default = DropdownItem;
exports.default = _default;

//# sourceMappingURL=DropdownItem.js.map