(this["webpackJsonpgame-2048"]=this["webpackJsonpgame-2048"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/githubicon.a2594cec.svg"},function(e,a,t){e.exports=t.p+"static/media/arrowup.984a6c88.svg"},function(e,a,t){e.exports=t.p+"static/media/arrowdown.0bda22ab.svg"},function(e,a,t){e.exports=t.p+"static/media/arrowleft.fc7c38a8.svg"},function(e,a,t){e.exports=t.p+"static/media/arrowright.17866ce5.svg"},function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),i=t.n(o),c=(t(18),t(1)),s=t(2),l=t(4),m=t(3),u=(t(19),t(20),t(21),t(8)),h=t.n(u),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h2",{className:"title"},"2048"),n.a.createElement("a",{className:"githubicon",href:"https://github.com/VaibhavDomadia/game-2048",title:"Link to the Repository"},n.a.createElement("img",{src:h.a,alt:"Github Link to the Project"})))}}]),t}(n.a.Component),v=t(5),d=t(9),b=t.n(d),g=t(10),p=t.n(g),O=t(11),y=t.n(O),k=t(12),j=t.n(k),E=(t(22),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"gamePlayOptions"},n.a.createElement("h2",{className:"gamePlayMessage"},"Use Arrow Keys to Play"),n.a.createElement("div",{className:"arrowKeysContainer"},n.a.createElement("div",{className:"arrowKey arrowUp"},n.a.createElement("img",{src:b.a,alt:"Arrow Up"})),n.a.createElement("div",{className:"arrowKey"},n.a.createElement("img",{src:y.a,alt:"Arrow Left"})),n.a.createElement("div",{className:"arrowKey"},n.a.createElement("img",{src:p.a,alt:"Arrow Down"})),n.a.createElement("div",{className:"arrowKey"},n.a.createElement("img",{src:j.a,alt:"Arrow Right"}))))}}]),t}(n.a.Component)),w=(t(23),t(24),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.value,a="#ffffff";switch(e){case 2:a="#32a852";break;case 4:a="#3ccfcf";break;case 8:a="#ea4335";break;case 16:a="#fbbc05";break;case 32:a="#1389fd";break;case 64:a="#7a58fc";break;case 128:a="#3ddc84";break;case 256:a="#f47100";break;case 512:a="#ee6e73";break;case 1024:a="#10536e";break;case 2048:a="#404040";break;default:a="#ffffff"}var t={backgroundColor:a};return 0!=e&&(t.boxShadow="2px 2px 24px rgba(0, 0, 0, 0.2)"),n.a.createElement("div",{className:"cell",style:t},0==e?"":e)}}]),t}(n.a.Component)),C=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.cellValues;return n.a.createElement("div",{className:"row"},e.map((function(e,a){return n.a.createElement(w,{key:a,value:e})})))}}]),t}(n.a.Component),N=(t(25),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.board,t=e.gameWon,r=e.gameOver;return n.a.createElement("div",{className:"boardContainer"},t&&n.a.createElement("div",{className:"gameWonBanner"},"You Won!"),!t&&r&&n.a.createElement("div",{className:"gameOverBanner"},"Game Over!"),n.a.createElement("div",{className:"board"},a.map((function(e,a){return n.a.createElement(C,{key:a,cellValues:e})}))))}}]),t}(n.a.Component)),M=(t(26),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"scoreBoard"},n.a.createElement("div",{className:"scoreTitle"},"Score:"),n.a.createElement("div",{className:"score"},this.props.score))}}]),t}(n.a.Component)),B=(t(27),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{className:"restartButton",onClick:this.props.restartGame},"Restart")}}]),t}(n.a.Component)),G=(t(28),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).getEmptyBoard=r.getEmptyBoard.bind(Object(v.a)(r)),r.initializeBoard=r.initializeBoard.bind(Object(v.a)(r)),r.generateRandomCellValue=r.generateRandomCellValue.bind(Object(v.a)(r)),r.move=r.move.bind(Object(v.a)(r)),document.onkeyup=r.move,r.moveLeft=r.moveLeft.bind(Object(v.a)(r)),r.moveRight=r.moveRight.bind(Object(v.a)(r)),r.moveUp=r.moveUp.bind(Object(v.a)(r)),r.moveDown=r.moveDown.bind(Object(v.a)(r)),r.shrinkArray=r.shrinkArray.bind(Object(v.a)(r)),r.restartGame=r.restartGame.bind(Object(v.a)(r)),r.isGameOver=r.isGameOver.bind(Object(v.a)(r)),r.isGameWon=r.isGameWon.bind(Object(v.a)(r)),r.state={board:r.initializeBoard(),gameOver:!1,gameWon:!1,score:0},r}return Object(s.a)(t,[{key:"getEmptyBoard",value:function(){for(var e=new Array(4),a=0;a<4;a++)e[a]=new Array(4).fill(0);return e}},{key:"initializeBoard",value:function(){var e=this.getEmptyBoard(),a=Math.floor(4*Math.random()),t=Math.floor(4*Math.random());return e[a][t]=this.generateRandomCellValue(),a=Math.floor(4*Math.random()),t=Math.floor(4*Math.random()),e[a][t]=this.generateRandomCellValue(),e}},{key:"generateRandomCellValue",value:function(){return 2*(Math.floor(2*Math.random())+1)}},{key:"shrinkArray",value:function(e){for(var a=[],t=0,r=0;r<e.length;r++)r+1<e.length&&e[r]==e[r+1]?(a.push(2*e[r]),t+=2*e[r],r++):a.push(e[r]);return 0!=t&&this.setState((function(e,a){return{score:e.score+t}})),a}},{key:"move",value:function(e){if(!this.state.gameWon){var a=e.keyCode-37;if(0<=a&&a<4){switch(a){case 0:this.moveLeft();break;case 1:this.moveUp();break;case 2:this.moveRight();break;case 3:this.moveDown()}this.isGameOver()&&this.setState({gameOver:!0}),this.isGameWon()&&this.setState({gameWon:!0})}}}},{key:"moveLeft",value:function(){for(var e=this.state.board,a=!1,t=this.getEmptyBoard(),r=0;r<4;r++){for(var n=[],o=!1,i=0;i<4;i++)0!=e[r][i]?(n.push(e[r][i]),o&&(a=!0)):o=!0;var c=this.shrinkArray(n);c.length!=n.length&&(a=!0);for(var s=0;s<4;s++)s<c.length?t[r][s]=c[s]:t[r][s]=0}if(a){for(var l=[],m=0;m<4;m++)0==t[m][3]&&l.push(m);if(0!=l.length)t[l[Math.floor(Math.random()*l.length)]][3]=this.generateRandomCellValue()}this.setState({board:t})}},{key:"moveRight",value:function(){for(var e=this.state.board,a=!1,t=this.getEmptyBoard(),r=0;r<4;r++){for(var n=[],o=!1,i=3;i>=0;i--)0!=e[r][i]?(n.push(e[r][i]),o&&(a=!0)):o=!0;var c=this.shrinkArray(n);c.length!=n.length&&(a=!0);for(var s=3;s>=0;s--)4-s-1<c.length?t[r][s]=c[4-s-1]:t[r][s]=0}if(a){for(var l=[],m=0;m<4;m++)0==t[m][0]&&l.push(m);if(0!=l.length)t[l[Math.floor(Math.random()*l.length)]][0]=this.generateRandomCellValue()}this.setState({board:t})}},{key:"moveUp",value:function(){for(var e=this.state.board,a=!1,t=this.getEmptyBoard(),r=0;r<4;r++){for(var n=[],o=!1,i=0;i<4;i++)0!=e[i][r]?(n.push(e[i][r]),o&&(a=!0)):o=!0;var c=this.shrinkArray(n);c.length!=n.length&&(a=!0);for(var s=0;s<4;s++)s<c.length?t[s][r]=c[s]:t[s][r]=0}if(a){for(var l=[],m=0;m<4;m++)0==t[3][m]&&l.push(m);if(0!=l.length){var u=l[Math.floor(Math.random()*l.length)];t[3][u]=this.generateRandomCellValue()}}this.setState({board:t})}},{key:"moveDown",value:function(){for(var e=this.state.board,a=!1,t=this.getEmptyBoard(),r=0;r<4;r++){for(var n=[],o=!1,i=3;i>=0;i--)0!=e[i][r]?(n.push(e[i][r]),o&&(a=!0)):o=!0;var c=this.shrinkArray(n);c.length!=n.length&&(a=!0);for(var s=3;s>=0;s--)4-s-1<c.length?t[s][r]=c[4-s-1]:t[s][r]=0}if(a){for(var l=[],m=0;m<4;m++)0==t[0][m]&&l.push(m);if(0!=l.length){var u=l[Math.floor(Math.random()*l.length)];t[0][u]=this.generateRandomCellValue()}}this.setState({board:t})}},{key:"restartGame",value:function(){this.setState({board:this.initializeBoard(),gameOver:!1,gameWon:!1,score:0})}},{key:"isGameOver",value:function(){for(var e=this.state.board,a=0;a<4;a++)for(var t=0;t<4;t++)if(0==e[a][t])return!1;for(var r=0;r<4;r++)for(var n=1;n<4;n++)if(e[r][n]==e[r][n-1])return!1;for(var o=0;o<4;o++)for(var i=1;i<4;i++)if(e[i][o]==e[i-1][o])return!1;return!0}},{key:"isGameWon",value:function(){for(var e=this.state.board,a=0;a<4;a++)for(var t=0;t<4;t++)if(2048==e[a][t])return!0;return!1}},{key:"render",value:function(){var e=this.state,a=e.board,t=e.gameOver,r=e.gameWon,o=e.score;return n.a.createElement("div",{className:"gameArena"},n.a.createElement(E,null),n.a.createElement(N,{gameWon:r,gameOver:t,board:a}),n.a.createElement(M,{score:o}),n.a.createElement(B,{restartGame:this.restartGame}))}}]),t}(n.a.Component)),R=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(G,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e0f943d5.chunk.js.map