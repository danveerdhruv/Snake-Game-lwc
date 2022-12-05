Webruntime.define('lwc/snakeGame', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
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
