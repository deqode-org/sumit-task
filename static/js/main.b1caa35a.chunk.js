(this["webpackJsonptest-task-react"]=this["webpackJsonptest-task-react"]||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(16),r=n.n(s),i=(n(26),n(20)),c=n(1),u=n(5),l=n(6),h=n(7),g=n(8),d={ENTER:13,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40};function p(e){return e>1e3&&(e=1e3),Math.floor(1e3*Math.random())%e===0}var m=function(e){var t=[];return p(2)&&t.push("pre"+e),p(2)&&t.push(e),p(2)&&t.push(e+"post"),p(2)&&t.push("pre"+e+"post"),new Promise((function(e,n){var a=200*Math.random();setTimeout((function(){p(10)?n():e(t)}),a)}))},f=n(17),v=(n(27),function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.suggestions,n=t.length>0;return o.a.createElement(f.a,{onOutsideClick:function(){e.props.closeDropdown()}},o.a.createElement("ul",{className:"dropdown-menu dropdown-menu-end ".concat(n?"show":"hide")},t.map((function(t,n){return o.a.createElement("li",{className:"dropdown-item ".concat(e.props.highlightIndex===n&&"highlight"),key:t,onClick:function(){return e.props.suggestionSelected(t)}},t)}))))}}]),n}(o.a.Component)),E=n(18),R=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getSuggestedOptions=function(e){m(e).then((function(e){a.setState({suggestions:e,highlightIndex:0})})).catch((function(e){console.log("Got error in getting data")}))},a.onInputChange=function(e){var t=a.state.text.split(" ").slice(-1)[0],n=e.target.value.split(" ").slice(-1)[0];a.setState({text:e.target.value}),n&&t!==n?a.debouncedInputChange(n):a.resetSuggestions()},a.suggestionSelected=function(e){var t=a.state.text.split(" ").slice(0,-1).join(" ");a.setState({text:"".concat(t," ").concat(e," ")}),a.resetSuggestions(),a.inputRef.current.focus()},a.onKeyPressed=function(e){var t=a.state,n=t.suggestions,o=t.highlightIndex;if(0!==n.length){var s=e.which;s===d.UP_ARROW?a.setState({highlightIndex:0===o?n.length-1:o-1}):s===d.DOWN_ARROW?a.setState({highlightIndex:o===n.length-1?0:o+1}):s===d.ENTER&&a.suggestionSelected(n[o])}},a.resetSuggestions=function(){a.setState({suggestions:[],highlightIndex:0})},a.state={text:"",suggestions:[],highlightIndex:0},a.inputRef=o.a.createRef(),a.debouncedInputChange=Object(E.debounce)(a.getSuggestedOptions,500),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search",value:this.state.text,onChange:function(t){return e.onInputChange(t)},onKeyDown:function(t){return e.onKeyPressed(t)},ref:this.inputRef}),o.a.createElement(v,{suggestions:this.state.suggestions,highlightIndex:this.state.highlightIndex,closeDropdown:function(){return e.resetSuggestions()},suggestionSelected:function(t){return e.suggestionSelected(t)}}),o.a.createElement("div",null,"/sumit-task")))}}]),n}(o.a.Component),O=function(){return o.a.createElement("div",{className:"col-md-4 offset-md-4"},o.a.createElement(R,null))},b={Dashboard:"/",Redirect:"*"},S=function(){return o.a.createElement(i.a,{basename:"/sumit-task"},o.a.createElement(c.b,{path:b.Dashboard,component:O}),o.a.createElement(c.a,{from:b.Redirect,to:b.Dashboard}))},w=function(){return o.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b1caa35a.chunk.js.map