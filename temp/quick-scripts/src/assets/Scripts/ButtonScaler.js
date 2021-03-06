"use strict";
cc._RF.push(module, '6222b3vhn9B+LfcnZPPomP/', 'ButtonScaler');
// Scripts/ButtonScaler.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pressedScale: 1,
    transDuration: 0
  },
  // use this for initialization
  onLoad: function onLoad() {
    var self = this;
    self.initScale = this.node.scale;
    self.button = self.getComponent(cc.Button);
    self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressedScale);
    self.scaleUpAction = cc.scaleTo(self.transDuration, self.initScale);

    function onTouchDown(event) {
      this.stopAllActions();
      this.runAction(self.scaleDownAction);
    }

    function onTouchUp(event) {
      this.stopAllActions();
      this.runAction(self.scaleUpAction);
    }

    this.node.on('touchstart', onTouchDown, this.node);
    this.node.on('touchend', onTouchUp, this.node);
    this.node.on('touchcancel', onTouchUp, this.node);
  }
});

cc._RF.pop();