/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
'use strict';

/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: %%GULP_INJECT_VERSION%%
 * GitHub: https://github.com/hustcc/ribbon.js
**/
/* jshint -W030 */
module.exports = function(options) {

  const config = Object.assign({
    z: -1, // z-index
    a: 0.6, // alpha
    s: 90, // size
    target: 'body'
  }, options);

  const canvas = document.createElement('canvas');
  const g2d = canvas.getContext('2d');
  const pr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const f = config.s;
  let q, t;
  const m = Math;
  let r = 0;
  const pi = m.PI * 2;
  const cos = m.cos;
  const random = m.random;
  canvas.width = width * pr;
  canvas.height = height * pr;
  g2d.scale(pr, pr);
  g2d.globalAlpha = config.a;
  canvas.style.cssText = 'opacity: ' + config.a + ';position:fixed;top:0;left:0;z-index: ' + config.z + ';width:100%;height:100%;pointer-events:none;';
  // create canvas
  const ens = document.querySelectorAll(config.target);
  console.log(ens);
  ens[0].appendChild(canvas);

  function redraw() {
    g2d.clearRect(0, 0, width, height);
    q = [{x: 0, y: height * 0.7 + f}, {x: 0, y: height * 0.7 - f}];
    while (q[1].x < width + f) draw(q[0], q[1]);
  }
  function draw(i, j) {
    g2d.beginPath();
    g2d.moveTo(i.x, i.y);
    g2d.lineTo(j.x, j.y);
    const k = j.x + (random() * 2 - 0.25) * f; const n = line(j.y);
    g2d.lineTo(k, n);
    g2d.closePath();
    r -= pi / -50;
    g2d.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + pi / 3) * 127 + 128 << 8 | cos(r + pi / 3 * 2) * 127 + 128).toString(16);
    g2d.fill();
    q[0] = q[1];
    q[1] = {x: k, y: n};
  }
  function line(p) {
    t = p + (random() * 2 - 1.1) * f;
    return t > height || t < 0 ? line(p) : t;
  }

  document.onclick = redraw;
  document.ontouchstart = redraw;
  redraw();
};
