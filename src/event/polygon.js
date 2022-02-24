import { vec2, vec4, flatten } from "../helpers/helper";

import {
  index,
  cindex,
  colors,
  t,
  numPolygons,
  start,
  numIndices,
} from "../common/const";

function eventPolygon(event, canvas, gl, cBufferId, bufferId) {
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  var t = vec2(
    (2 * event.clientX) / canvas.width - 1,
    (2 * (canvas.height - event.clientY)) / canvas.height - 1
  );
  gl.bufferSubData(gl.ARRAY_BUFFER, 8 * index, flatten(t));

  gl.bindBuffer(gl.ARRAY_BUFFER, cBufferId);
  t = vec4(colors[index % 7]);
  gl.bufferSubData(gl.ARRAY_BUFFER, 16 * index, flatten(t));
  index++;
}

export { eventPolygon };
