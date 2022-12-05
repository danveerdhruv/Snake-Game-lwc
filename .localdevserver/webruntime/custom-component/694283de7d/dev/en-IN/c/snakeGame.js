Webruntime.define('lwc/snakeGame', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".header" + shadowSelector + "{background: rgb(170, 0, 255);color: white;}\n.game-container" + shadowSelector + "{width: 70vw;height: 60vh;background: rgb(193,255,70);}\n.game-block" + shadowSelector + "{width: 20px;height: 20px;background: rgb(230,250,190);display: inline-block;}\n.snake" + shadowSelector + "{background:green;}\n.food" + shadowSelector + "{background:red;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic,
        h: api_element,
        k: api_key,
        i: api_iterator
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
        key: 3
      }, api_iterator($cmp.gameBlocks, function (block) {
        return [block.snake ? api_element("div", {
          classMap: {
            "game-block": true,
            "snake": true
          },
          key: api_key(1, block.id)
        }, [api_dynamic(block.id), api_text(";")]) : null, !block.snake ? api_element("div", {
          classMap: {
            "game-block": true
          },
          key: api_key(2, block.id)
        }, [api_dynamic(block.id), api_text(";")]) : null];
      }))];
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
        this.blockSize = 20;
        this.gameBlocks = [];
        this.renderComplete = false;
      }
      renderedCallback() {
        if (!this.renderComplete) {
          let eWidth = this.template.querySelector(".game-container").clientWidth;
          let eHeight = this.template.querySelector(".game-container").clientHeight;
          let xMax = Math.floor(eWidth / this.blockSize);
          let yMax = Math.floor(eHeight / this.blockSize);
          let tempBlocks = [];
          for (let y = 0; y < yMax; y++) {
            for (let x = 0; x < xMax; x++) {
              let obj;
              if (x == 0 && y == 0) {
                obj = {
                  id: `${x}:${y}`,
                  snake: true,
                  food: false
                };
              } else {
                obj = {
                  id: `${x}:${y}`,
                  snake: false,
                  food: false
                };
              }
              tempBlocks.push(obj);
            }
          }
          this.renderComplete = true;
          this.gameBlocks = tempBlocks;
        }
      }
    }
    lwc.registerDecorators(SnakeGame, {
      track: {
        gameBlocks: 1
      },
      fields: ["score", "blockSize", "renderComplete"]
    });
    var snakeGame = lwc.registerComponent(SnakeGame, {
      tmpl: _tmpl
    });

    return snakeGame;

});
