
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PanelTransition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdHMvLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0cy9hc3NldHNcXFNjcmlwdHNcXFBhbmVsVHJhbnNpdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImR1cmF0aW9uIiwib25Mb2FkIiwib3V0T2ZXb3JsZCIsInYyIiwibm9kZSIsInBvc2l0aW9uIiwiY2JGYWRlT3V0IiwiY2FsbEZ1bmMiLCJvbkZhZGVPdXRGaW5pc2giLCJjYkZhZGVJbiIsIm9uRmFkZUluRmluaXNoIiwiYWN0aW9uRmFkZUluIiwic2VxdWVuY2UiLCJzcGF3biIsImZhZGVUbyIsInNjYWxlVG8iLCJhY3Rpb25GYWRlT3V0Iiwib24iLCJzdGFydEZhZGVJbiIsInN0YXJ0RmFkZU91dCIsImRpcmVjdG9yIiwiZ2V0U2NoZWR1bGVyIiwicGF1c2VUYXJnZXQiLCJzZXRTY2FsZSIsIm9wYWNpdHkiLCJydW5BY3Rpb24iLCJyZXN1bWVUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFERixHQUhQO0FBT0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLFVBQUwsR0FBa0JOLEVBQUUsQ0FBQ08sRUFBSCxDQUFNLElBQU4sRUFBWSxDQUFaLENBQWxCO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLEdBQXFCLEtBQUtILFVBQTFCO0FBQ0EsUUFBSUksU0FBUyxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FBWSxLQUFLQyxlQUFqQixFQUFrQyxJQUFsQyxDQUFoQjtBQUNBLFFBQUlDLFFBQVEsR0FBR2IsRUFBRSxDQUFDVyxRQUFILENBQVksS0FBS0csY0FBakIsRUFBaUMsSUFBakMsQ0FBZjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWWhCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBU2pCLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVSxLQUFLZCxRQUFmLEVBQXlCLEdBQXpCLENBQVQsRUFBd0NKLEVBQUUsQ0FBQ21CLE9BQUgsQ0FBVyxLQUFLZixRQUFoQixFQUEwQixHQUExQixDQUF4QyxDQUFaLEVBQXFGUyxRQUFyRixDQUFwQjtBQUNBLFNBQUtPLGFBQUwsR0FBcUJwQixFQUFFLENBQUNnQixRQUFILENBQVloQixFQUFFLENBQUNpQixLQUFILENBQVNqQixFQUFFLENBQUNrQixNQUFILENBQVUsS0FBS2QsUUFBZixFQUF5QixDQUF6QixDQUFULEVBQXNDSixFQUFFLENBQUNtQixPQUFILENBQVcsS0FBS2YsUUFBaEIsRUFBMEIsR0FBMUIsQ0FBdEMsQ0FBWixFQUFtRk0sU0FBbkYsQ0FBckI7QUFDQSxTQUFLRixJQUFMLENBQVVhLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLEtBQUtDLFdBQTdCLEVBQTBDLElBQTFDO0FBQ0EsU0FBS2QsSUFBTCxDQUFVYSxFQUFWLENBQWEsVUFBYixFQUF5QixLQUFLRSxZQUE5QixFQUE0QyxJQUE1QztBQUNILEdBakJJO0FBbUJMRCxFQUFBQSxXQUFXLEVBQUUsdUJBQVk7QUFDckJ0QixJQUFBQSxFQUFFLENBQUN3QixRQUFILENBQVlDLFlBQVosR0FBMkJDLFdBQTNCLENBQXVDLEtBQUtsQixJQUE1QztBQUNBLFNBQUtBLElBQUwsQ0FBVUMsUUFBVixHQUFxQlQsRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBckI7QUFDQSxTQUFLQyxJQUFMLENBQVVtQixRQUFWLENBQW1CLENBQW5CO0FBQ0EsU0FBS25CLElBQUwsQ0FBVW9CLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLcEIsSUFBTCxDQUFVcUIsU0FBVixDQUFvQixLQUFLZCxZQUF6QjtBQUNILEdBekJJO0FBMkJMUSxFQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEJ2QixJQUFBQSxFQUFFLENBQUN3QixRQUFILENBQVlDLFlBQVosR0FBMkJDLFdBQTNCLENBQXVDLEtBQUtsQixJQUE1QztBQUNBLFNBQUtBLElBQUwsQ0FBVXFCLFNBQVYsQ0FBb0IsS0FBS1QsYUFBekI7QUFDSCxHQTlCSTtBQWdDTE4sRUFBQUEsY0FBYyxFQUFFLDBCQUFZO0FBQ3hCZCxJQUFBQSxFQUFFLENBQUN3QixRQUFILENBQVlDLFlBQVosR0FBMkJLLFlBQTNCLENBQXdDLEtBQUt0QixJQUE3QztBQUNILEdBbENJO0FBb0NMSSxFQUFBQSxlQUFlLEVBQUUsMkJBQVk7QUFDekIsU0FBS0osSUFBTCxDQUFVQyxRQUFWLEdBQXFCLEtBQUtILFVBQTFCO0FBQ0gsR0F0Q0ksQ0F3Q0w7QUFDQTtBQUVBOztBQTNDSyxDQUFUIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdHMiLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3V0T2ZXb3JsZCA9IGNjLnYyKDMwMDAsIDApO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm91dE9mV29ybGQ7XG4gICAgICAgIGxldCBjYkZhZGVPdXQgPSBjYy5jYWxsRnVuYyh0aGlzLm9uRmFkZU91dEZpbmlzaCwgdGhpcyk7XG4gICAgICAgIGxldCBjYkZhZGVJbiA9IGNjLmNhbGxGdW5jKHRoaXMub25GYWRlSW5GaW5pc2gsIHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGlvbkZhZGVJbiA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aGlzLmR1cmF0aW9uLCAyNTUpLCBjYy5zY2FsZVRvKHRoaXMuZHVyYXRpb24sIDEuMCkpLCBjYkZhZGVJbik7XG4gICAgICAgIHRoaXMuYWN0aW9uRmFkZU91dCA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aGlzLmR1cmF0aW9uLCAwKSwgY2Muc2NhbGVUbyh0aGlzLmR1cmF0aW9uLCAyLjApKSwgY2JGYWRlT3V0KTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdmYWRlLWluJywgdGhpcy5zdGFydEZhZGVJbiwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbignZmFkZS1vdXQnLCB0aGlzLnN0YXJ0RmFkZU91dCwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0RmFkZUluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnBhdXNlVGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMik7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmFjdGlvbkZhZGVJbik7XG4gICAgfSxcblxuICAgIHN0YXJ0RmFkZU91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5wYXVzZVRhcmdldCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuYWN0aW9uRmFkZU91dCk7XG4gICAgfSxcblxuICAgIG9uRmFkZUluRmluaXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnJlc3VtZVRhcmdldCh0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICBvbkZhZGVPdXRGaW5pc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5vdXRPZldvcmxkO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=