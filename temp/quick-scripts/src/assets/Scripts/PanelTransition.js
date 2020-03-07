"use strict";
cc._RF.push(module, '18429PrWeZLA5PPumGwSpZT', 'PanelTransition');
// Scripts/PanelTransition.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    duration: 0
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.outOfWorld = cc.v2(3000, 0);
    this.node.position = this.outOfWorld;
    var cbFadeOut = cc.callFunc(this.onFadeOutFinish, this);
    var cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
    this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 255), cc.scaleTo(this.duration, 1.0)), cbFadeIn);
    this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 0), cc.scaleTo(this.duration, 2.0)), cbFadeOut);
    this.node.on('fade-in', this.startFadeIn, this);
    this.node.on('fade-out', this.startFadeOut, this);
  },
  startFadeIn: function startFadeIn() {
    cc.director.getScheduler().pauseTarget(this.node);
    this.node.position = cc.v2(0, 0);
    this.node.setScale(2);
    this.node.opacity = 0;
    this.node.runAction(this.actionFadeIn);
  },
  startFadeOut: function startFadeOut() {
    cc.director.getScheduler().pauseTarget(this.node);
    this.node.runAction(this.actionFadeOut);
  },
  onFadeInFinish: function onFadeInFinish() {
    cc.director.getScheduler().resumeTarget(this.node);
  },
  onFadeOutFinish: function onFadeOutFinish() {
    this.node.position = this.outOfWorld;
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();