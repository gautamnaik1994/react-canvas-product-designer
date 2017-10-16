import { fabric } from 'fabric';

let canvas = null;

export function initializeCanvas() {
  canvas = window._canvas = new fabric.Canvas('mockup_canvas');
}

export function getCanvasInstance() {
  if (canvas == null) {
    initializeCanvas();
    return canvas;
  }
  return canvas;
}

export function setCanvasSize(width = 500, height = 500) {
  canvas.setWidth(width);
  canvas.setHeight(height);
}

export function addShape(shape) {
  console.log('Got executed', 'FFFFFFF');
  switch (shape) {
    case 'rectangle': {
      canvas.add(
        new fabric.Rect({
          width: 50,
          height: 50,
          left: 50,
          top: 50,
          fill: '#00d1b2',
        }),
      );
      break;
    }
    case 'circle': {
      canvas.add(
        new fabric.Circle({
          radius: 40,
          left: 50,
          top: 50,
          fill: '#00d1b2',
        }),
      );
      break;
    }
    default: {
      return 0;
    }
  }
  canvas.renderAll();
}

export function addText(text) {
  canvas.add(new fabric.Text(text, { left: 100, top: 100 }));
  canvas.renderAll();
}

export function changeColor(color) {
  if (canvas.getActiveObject() != null) {
    canvas.getActiveObject().set('fill', color);
    canvas.renderAll();
  }
  return 0;
}
export function changeOpacity(opacity) {
  if (canvas.getActiveObject() != null) {
    canvas.getActiveObject().set('opacity', opacity);
    canvas.renderAll();
  }
  return 0;
}

