(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],{10:function(n,e,l){},12:function(n,e,l){"use strict";l.r(e);var t=l(1),c=l.n(t),i=l(4),s=l.n(i),r=(l(9),l(3)),a=(l.p,l(10),l(0)),u=function(n){var e="";switch(n.turn){case"O":e=" hover:bg-violet-400 transition-colors duration-300";break;case"X":e=" hover:bg-red-600 transition-colors duration-300"}return Object(a.jsx)("div",{id:n.num,className:"tile"+e,onClick:function(){n.click(n.num)}})},o=l.p+"static/media/x.ffdafe3f.png",d=l.p+"static/media/o.839db302.png";var m=function(){var n=Object(t.useState)(),e=Object(r.a)(n,2),l=e[0],c=e[1],i=Object(t.useState)([null,null,null,null,null,null,null,null,null]),s=Object(r.a)(i,2),m=s[0],g=s[1];function j(n){if(("X"===l||"O"===l)&&null===m[n]){m[n]=l,document.getElementById(n).innerHTML='<img class="xoimg object-contain" src="'+("X"===l?o:d)+'"/>',console.log(m);var e=(console.log("HELLO CHECKMATCH TILEARRAY",m),m[0]===m[1]&&m[1]===m[2]&&null!==m[0]?m[0]:m[3]===m[4]&&m[4]===m[5]&&null!==m[3]?m[3]:m[6]===m[7]&&m[7]===m[8]&&null!==m[6]?m[6]:m[0]===m[3]&&m[3]===m[6]&&null!==m[0]?m[0]:m[1]===m[4]&&m[4]===m[7]&&null!==m[1]?m[1]:m[2]===m[5]&&m[5]===m[8]&&null!==m[2]||m[2]===m[4]&&m[4]===m[6]&&null!==m[2]?m[2]:m[0]===m[4]&&m[4]===m[8]&&null!==m[0]?m[0]:null);console.log("winner",m,e),null===e?m.includes(null)?c("X"===l?"O":"X"):(c(null),document.getElementById("game-msg").innerHTML="No winner :O start again",m.forEach((function(n,e){document.getElementById(e).innerHTML=""}))):(c(null),document.getElementById("game-msg").innerHTML="Player ".concat(e," Wins"))}}return Object(t.useEffect)((function(){switch(l){case"X":document.getElementById("game-msg").innerHTML="Player X's Turn";break;case"O":document.getElementById("game-msg").innerHTML="Player O's Turn"}})),Object(a.jsxs)("div",{className:"App text-white",children:[Object(a.jsx)("p",{id:"game-msg",className:"container mx-auto my-5 rounded-md border-red-500 border-4 text-6xl w-9/12 py-8",children:"Start new game???"}),Object(a.jsxs)("div",{className:"grid grid-cols-3 grid-rows-3 grid-table mx-auto",children:[Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"0",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"1",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"2",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"3",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"4",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"5",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"6",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"7",click:j,turn:l})}),Object(a.jsx)("div",{className:"grid-col bg-gray-800 m-2 shadow-xl",children:Object(a.jsx)(u,{num:"8",click:j,turn:l})})]}),Object(a.jsx)("button",{className:"mt-5 text-3xl",onClick:function(){g([null,null,null,null,null,null,null,null,null]),m.forEach((function(n,e){document.getElementById(e).innerHTML=""})),c(100*Math.random>50?"X":"O")},children:"Start"})]})},g=function(n){n&&n instanceof Function&&l.e(3).then(l.bind(null,13)).then((function(e){var l=e.getCLS,t=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;l(n),t(n),c(n),i(n),s(n)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),g()},9:function(n,e,l){}},[[12,1,2]]]);
//# sourceMappingURL=main.8cc3d12e.chunk.js.map