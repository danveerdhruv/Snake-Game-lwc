Webruntime.define('lwc/snakeGame', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "header": true,
          "slds-p-around_medium": true
        },
        key: 0
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-snakeGame_snakeGame-host",
      shadowAttribute: "lwc-snakeGame_snakeGame"
    };

    class SnakeGame extends lwc.LightningElement {}
    var snakeGame = lwc.registerComponent(SnakeGame, {
      tmpl: _tmpl
    });

    return snakeGame;

});
