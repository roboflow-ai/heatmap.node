const { HeatmapConfig } = require('./config')
const { Canvas2dRenderer } = require('./renderer/canvas2d')

exports.Renderer = (function RendererClosure() {

  var rendererFn = false;

  if (HeatmapConfig['defaultRenderer'] === 'canvas2d') {
    rendererFn = Canvas2dRenderer;
  }

  return rendererFn;
})();
