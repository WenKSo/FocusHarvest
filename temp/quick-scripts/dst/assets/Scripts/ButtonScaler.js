
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ButtonScaler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdHMvLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0cy9hc3NldHNcXFNjcmlwdHNcXEJ1dHRvblNjYWxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByZXNzZWRTY2FsZSIsInRyYW5zRHVyYXRpb24iLCJvbkxvYWQiLCJzZWxmIiwiaW5pdFNjYWxlIiwibm9kZSIsInNjYWxlIiwiYnV0dG9uIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwic2NhbGVEb3duQWN0aW9uIiwic2NhbGVUbyIsInNjYWxlVXBBY3Rpb24iLCJvblRvdWNoRG93biIsImV2ZW50Iiwic3RvcEFsbEFjdGlvbnMiLCJydW5BY3Rpb24iLCJvblRvdWNoVXAiLCJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRSxDQUROO0FBRVJDLElBQUFBLGFBQWEsRUFBRTtBQUZQLEdBSFA7QUFRTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUEsSUFBQUEsSUFBSSxDQUFDQyxTQUFMLEdBQWlCLEtBQUtDLElBQUwsQ0FBVUMsS0FBM0I7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQlosRUFBRSxDQUFDYSxNQUFyQixDQUFkO0FBQ0FOLElBQUFBLElBQUksQ0FBQ08sZUFBTCxHQUF1QmQsRUFBRSxDQUFDZSxPQUFILENBQVdSLElBQUksQ0FBQ0YsYUFBaEIsRUFBK0JFLElBQUksQ0FBQ0gsWUFBcEMsQ0FBdkI7QUFDQUcsSUFBQUEsSUFBSSxDQUFDUyxhQUFMLEdBQXFCaEIsRUFBRSxDQUFDZSxPQUFILENBQVdSLElBQUksQ0FBQ0YsYUFBaEIsRUFBK0JFLElBQUksQ0FBQ0MsU0FBcEMsQ0FBckI7O0FBQ0EsYUFBU1MsV0FBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDekIsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLFNBQUwsQ0FBZWIsSUFBSSxDQUFDTyxlQUFwQjtBQUNIOztBQUNELGFBQVNPLFNBQVQsQ0FBb0JILEtBQXBCLEVBQTJCO0FBQ3ZCLFdBQUtDLGNBQUw7QUFDQSxXQUFLQyxTQUFMLENBQWViLElBQUksQ0FBQ1MsYUFBcEI7QUFDSDs7QUFDRCxTQUFLUCxJQUFMLENBQVVhLEVBQVYsQ0FBYSxZQUFiLEVBQTJCTCxXQUEzQixFQUF3QyxLQUFLUixJQUE3QztBQUNBLFNBQUtBLElBQUwsQ0FBVWEsRUFBVixDQUFhLFVBQWIsRUFBeUJELFNBQXpCLEVBQW9DLEtBQUtaLElBQXpDO0FBQ0EsU0FBS0EsSUFBTCxDQUFVYSxFQUFWLENBQWEsYUFBYixFQUE0QkQsU0FBNUIsRUFBdUMsS0FBS1osSUFBNUM7QUFDSDtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdHMiLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwcmVzc2VkU2NhbGU6IDEsXG4gICAgICAgIHRyYW5zRHVyYXRpb246IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pbml0U2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XG4gICAgICAgIHNlbGYuYnV0dG9uID0gc2VsZi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgc2VsZi5zY2FsZURvd25BY3Rpb24gPSBjYy5zY2FsZVRvKHNlbGYudHJhbnNEdXJhdGlvbiwgc2VsZi5wcmVzc2VkU2NhbGUpO1xuICAgICAgICBzZWxmLnNjYWxlVXBBY3Rpb24gPSBjYy5zY2FsZVRvKHNlbGYudHJhbnNEdXJhdGlvbiwgc2VsZi5pbml0U2NhbGUpO1xuICAgICAgICBmdW5jdGlvbiBvblRvdWNoRG93biAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucnVuQWN0aW9uKHNlbGYuc2NhbGVEb3duQWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblRvdWNoVXAgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bkFjdGlvbihzZWxmLnNjYWxlVXBBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIG9uVG91Y2hEb3duLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgb25Ub3VjaFVwLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoY2FuY2VsJywgb25Ub3VjaFVwLCB0aGlzLm5vZGUpO1xuICAgIH1cbn0pO1xuIl19