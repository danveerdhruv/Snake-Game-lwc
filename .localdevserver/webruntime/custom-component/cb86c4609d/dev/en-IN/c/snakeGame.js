Webruntime.define('lwc/snakeGame', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".header" + shadowSelector + "{background: rgb(170, 0, 255);color: white;}\n.game-container" + shadowSelector + "{width: 70vw;height: 60vh;background: rgb(193,255,70);}\n.game-block" + shadowSelector + "{width: 20px;height: 20px;background: rgb(230,250,190);}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "header": true,
          "slds-var-p-around_medium": true,
          "slds-text-align_center": true
        },
        key: 0
      }, [api_text("Score:"), api_dynamic($cmp.score)]), api_element("div", {
        classMap: {
          "game-container": true
        },
        key: 2
      }, [api_element("div", {
        classMap: {
          "game-block": true
        },
        key: 1
      }, [])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-snakeGame_snakeGame-host",
      shadowAttribute: "lwc-snakeGame_snakeGame"
    };

    class SnakeGame extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.score = void 0;
      }
      renderedCallback() {
        let cWidth = this.template.querySelector(".game-container").clientWidth;
        let cHeight = this.template.querySelector(".game-container").clientHeight;
      }
    }
    lwc.registerDecorators(SnakeGame, {
      fields: ["score"]
    });
    var snakeGame = lwc.registerComponent(SnakeGame, {
      tmpl: _tmpl
    });

    return snakeGame;

});
