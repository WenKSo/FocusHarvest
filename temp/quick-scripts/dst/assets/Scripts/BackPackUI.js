
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BackPackUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f804T0UmxFgI6NpuVPy4an', 'BackPackUI');
// Scripts/BackPackUI.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    slotPrefab: {
      "default": null,
      type: cc.Prefab
    },
    scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    totalCount: 0
  },
  init: function init(home) {
    this.heroSlots = [];
    this.home = home;

    for (var i = 0; i < this.totalCount; ++i) {
      var heroSlot = this.addHeroSlot();
      this.heroSlots.push(heroSlot);
    }
  },
  addHeroSlot: function addHeroSlot() {
    var heroSlot = cc.instantiate(this.slotPrefab);
    this.scrollView.content.addChild(heroSlot);
    return heroSlot;
  },
  show: function show() {
    this.node.active = true;
    this.node.emit('fade-in');
    this.home.toggleHomeBtns(false);
  },
  hide: function hide() {
    this.node.emit('fade-out');
    this.home.toggleHomeBtns(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdHMvLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0cy9hc3NldHNcXFNjcmlwdHNcXEJhY2tQYWNrVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzbG90UHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInNjcm9sbFZpZXciLCJTY3JvbGxWaWV3IiwidG90YWxDb3VudCIsImluaXQiLCJob21lIiwiaGVyb1Nsb3RzIiwiaSIsImhlcm9TbG90IiwiYWRkSGVyb1Nsb3QiLCJwdXNoIiwiaW5zdGFudGlhdGUiLCJjb250ZW50IiwiYWRkQ2hpbGQiLCJzaG93Iiwibm9kZSIsImFjdGl2ZSIsImVtaXQiLCJ0b2dnbGVIb21lQnRucyIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBREo7QUFLUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGRCxLQUxKO0FBU1JDLElBQUFBLFVBQVUsRUFBRTtBQVRKLEdBSFA7QUFlTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEIsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtELElBQUwsR0FBWUEsSUFBWjs7QUFDQSxTQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0osVUFBekIsRUFBcUMsRUFBRUksQ0FBdkMsRUFBMEM7QUFDdEMsVUFBSUMsUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFBZjtBQUNBLFdBQUtILFNBQUwsQ0FBZUksSUFBZixDQUFvQkYsUUFBcEI7QUFDSDtBQUNKLEdBdEJJO0FBd0JMQyxFQUFBQSxXQUFXLEVBQUUsdUJBQVk7QUFDckIsUUFBSUQsUUFBUSxHQUFHZCxFQUFFLENBQUNpQixXQUFILENBQWUsS0FBS2IsVUFBcEIsQ0FBZjtBQUNBLFNBQUtHLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCQyxRQUF4QixDQUFpQ0wsUUFBakM7QUFDQSxXQUFPQSxRQUFQO0FBQ0gsR0E1Qkk7QUE4QkxNLEVBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLFNBQWY7QUFDQSxTQUFLWixJQUFMLENBQVVhLGNBQVYsQ0FBeUIsS0FBekI7QUFDSCxHQWxDSTtBQW9DTEMsRUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QsU0FBS0osSUFBTCxDQUFVRSxJQUFWLENBQWUsVUFBZjtBQUNBLFNBQUtaLElBQUwsQ0FBVWEsY0FBVixDQUF5QixJQUF6QjtBQUNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0cyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNsb3RQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVmlldzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxDb3VudDogMFxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoaG9tZSkge1xuICAgICAgICB0aGlzLmhlcm9TbG90cyA9IFtdO1xuICAgICAgICB0aGlzLmhvbWUgPSBob21lO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaGVyb1Nsb3QgPSB0aGlzLmFkZEhlcm9TbG90KCk7XG4gICAgICAgICAgICB0aGlzLmhlcm9TbG90cy5wdXNoKGhlcm9TbG90KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRIZXJvU2xvdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaGVyb1Nsb3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsb3RQcmVmYWIpO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChoZXJvU2xvdCk7XG4gICAgICAgIHJldHVybiBoZXJvU2xvdDtcbiAgICB9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ2ZhZGUtaW4nKTtcbiAgICAgICAgdGhpcy5ob21lLnRvZ2dsZUhvbWVCdG5zKGZhbHNlKTtcbiAgICB9LFxuXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdCgnZmFkZS1vdXQnKTtcbiAgICAgICAgdGhpcy5ob21lLnRvZ2dsZUhvbWVCdG5zKHRydWUpO1xuICAgIH0sXG59KTtcbiJdfQ==