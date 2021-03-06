// Generated by CoffeeScript 1.6.2
(function () {
  var Tooltip,
    __hasProp = {}.hasOwnProperty,
    __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }

      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };

  Tooltip = (function (_super) {
    __extends(Tooltip, _super);

    function Tooltip(msg, width, height, radius, settings) {
      this.msg = msg;
      // this.width = width != null ? width : 50;
      // this.height = height != null ? height : 30;
      this.radius = radius != null ? radius : 4;
      this.initialize();
      this.x = 0;
      this.y = 0;
      this.shape = null;
      this.text = null;
      this._draw(settings);
    }
    Tooltip.prototype._hitBody = Tooltip.prototype._hitInAnchor = Tooltip.prototype._hitOutAnchor = Tooltip.prototype._hitTest = function () {
      return false;
    }
    Tooltip.prototype._draw = function (settings) {
      var arrowHeight, arrowWidth, fillColor, fontColor, g, shadowColor;

      fillColor = settings["tooltipBackground"] || "#fff";
      fontColor = settings["tooltipBackground"] || "#800";
      shadowColor = settings["tooltipShadow"] || "#aaa";
      arrowWidth = 0;
      arrowHeight = 0;
      this.shape = new createjs.Shape();
      g = this.shape.graphics;
      g.beginFill(fillColor);
      this.text = new createjs.Text(this.msg, "20px arial", fontColor);

      this.text.textAlign = 'left';
      var bounds = this.text.getBounds();
      this.text.regY = 15;

      // text.x = -block._width/2;
      // text.y = -block._height/2;
      this.text.textBaseline = "bottom";
      this.text.maxWidth = this.width;
      this.text.x = 4;

      this.text.y = this.text.getMeasuredHeight();


      //this.text.setBounds(bounds.x, bounds.y, bounds.width * 1.2, bounds.height);
      g.drawRoundRect(-10, -10, bounds.width * 1.2, bounds.height * 2 - arrowHeight, 4);
      // g.moveTo((this.width * 0.5) - arrowWidth, this.height - arrowHeight);
      // g.lineTo(this.width * 0.5, this.height);
      // g.lineTo((this.width * 0.5) + arrowWidth, this.height - arrowHeight);
      g.endFill();
      this.shape.shadow = new createjs.Shadow(shadowColor, 0, 0, 6);
      // this.shape.alpha = 0.8;
      this.shape.x = this.shape.y = 0;
      this.addChild(this.shape);
      this.addChild(this.text);
    }

    return Tooltip;

  })(createjs.Container);

  this.servo = this.servo || {};

  this.servo.createjs = this.servo.createjs || {};

  this.servo.createjs.Tooltip = Tooltip;

}).call(this);
