(this.webpackJsonpdijkstra=this.webpackJsonpdijkstra||[]).push([[0],[,,,,,,,,,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var i=e(0),c=e(1),s=e.n(c),o=e(4),r=e.n(o),a=(e(12),e(13),e(6)),u=e(5);function d(n){n.sort((function(n,t){return n.distance-t.distance}))}function f(n,t){var e,i=function(n,t){var e=[],i=n.col,c=n.row;c>0&&e.push(t[c-1][i]);c<t.length-1&&e.push(t[c+1][i]);i>0&&e.push(t[c][i-1]);i<t[0].length-1&&e.push(t[c][i+1]);return e.filter((function(n){return!n.isVisited}))}(n,t),c=Object(u.a)(i);try{for(c.s();!(e=c.n()).done;){var s=e.value;s.distance=n.distance+1,s.previousNode=n}}catch(o){c.e(o)}finally{c.f()}}e(14);var l=function(n){var t=n.nodes;return Object(i.jsx)(i.Fragment,{children:t.map((function(n,t){return Object(i.jsx)("div",{className:"node\n                    ".concat(n.isStart?"node-start":"","\n                    ").concat(n.isFinish?"node-finish":"","\n                    ").concat(n.isWall?"node-wall":""),id:n.row+"-"+n.col},t)}))})},h=(e(15),["..................",".XXXXXXXX.........","..................","......XXXXXX......","....XX......XX....","..................","..................","..................","..................",".................."].map((function(n){return n.split("")}))),v=function(){var n=s.a.useState([]),t=Object(a.a)(n,2),e=t[0],c=t[1];s.a.useEffect((function(){var n=function(n,t){for(var e=[],i=0;i<n;i++){for(var c=[],s=0;s<t;s++)c.push(j(s,i));e.push(c)}return e}(h.length,h[0].length);c(n)}),[]);var o=function(n,t){n.forEach((function(e,i){e.isFinish&&setTimeout((function(){return function(n){n.forEach((function(n,t){setTimeout((function(){document.getElementById("".concat(n.row,"-").concat(n.col)).classList.add("node-path")}),50*t)}))}(t)}),10*n.length),setTimeout((function(){document.getElementById("".concat(e.row,"-").concat(e.col)).classList.add("node-visited")}),10*i)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){var n=e[9][8],t=e[0][8],i=function(n,t,e){var i=[];t.distance=0;for(var c=n.flat();c.length;){d(c);var s=c.shift();if(!s.isWall){if(s.isVisited=!0,i.push(s),s.distance===1/0)return i;if(s===e)return i;f(s,n)}}}(e,n,t),c=function(n){for(var t=[],e=n;null!==e;)t.unshift(e),e=e.previousNode;return t}(t);o(i,c)},className:"button",children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0414\u0435\u0439\u043a\u0441\u0442\u0440\u044b"}),Object(i.jsx)("div",{style:{width:30*h[0].length},className:"nodes",children:e.map((function(n,t){return Object(i.jsx)(l,{nodes:n},t)}))})]})};function j(n,t){return{row:t,col:n,isStart:9===t&&8===n,isFinish:0===t&&8===n,distance:1/0,isVisited:!1,isWall:"X"===h[t][n],previousNode:null}}var p=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(v,{})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.f9abe9be.chunk.js.map