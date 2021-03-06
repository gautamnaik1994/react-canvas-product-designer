import { fabric } from 'fabric';
import uniqid from 'uniqid';
import * as actions from '../actions/index';

let canvas = null;

export function initializeCanvas() {
  canvas = window._canvas = new fabric.Canvas('mockup_canvas');
  canvas.on('object:selected', actions.getCurrentOjectInfo);
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
export function changeObjectName(name) {
  if (canvas.getActiveObject() != null) {
    canvas.getActiveObject().set('name', name);
  }
  return 0;
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
          opacity: 1,
          id: uniqid('rect-'),
          name: 'Rectangle',
          tagColor: '#00d1b2',
          flipX: false,
          flipY: false,
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
          opacity: 1,
          id: uniqid('circ-'),
          name: 'Circle',
          tagColor: '#00d1b2',
          flipX: false,
          flipY: false,
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

export function addImage(dataURL) {
  fabric.Image.fromURL(dataURL, (img) => {
    // img.setWidth(canvas.getWidth());
    canvas.add(img);
    canvas.renderAll();
  });
}
export function generateImage() {
  return canvas.toDataURL({
    format: 'png',
  });
}

export function sendObjectBackwards() {
  if (canvas.getActiveObject() != null) {
    canvas.sendBackwards(canvas.getActiveObject());
    canvas.deactivateAll().renderAll();
  }
  return 0;
}

export function sendObjectForwards() {
  if (canvas.getActiveObject() != null) {
    canvas.bringForward(canvas.getActiveObject());
    canvas.deactivateAll().renderAll();
  }
}
export function bringObjectFront() {
  if (canvas.getActiveObject() != null) {
    canvas.bringToFront(canvas.getActiveObject());
    canvas.deactivateAll().renderAll();
  }
  return 0;
}

export function sendObjectBack() {
  if (canvas.getActiveObject() != null) {
    canvas.sendToBack(canvas.getActiveObject());
    canvas.deactivateAll().renderAll();
  }
  return 0;
}

export function rotateObject(value) {
  const activeObject = canvas.getActiveObject();
  if (activeObject != null) {
    canvas.getActiveObject().rotate(activeObject.getAngle() + value);
    canvas.renderAll();
  }
}
export function flipObject(direction) {
  const activeObject = canvas.getActiveObject();
  console.log('activeObject.flipY', activeObject.flipY);
  if (activeObject != null) {
    if (direction === 'X') {
      activeObject.flipX = !activeObject.flipX;
    }
  } else {
    activeObject.flipY = !activeObject.flipY;
  }
  canvas.renderAll();
}
