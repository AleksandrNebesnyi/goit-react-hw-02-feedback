(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={item:"Statistics_item__16gn_",value:"Statistics_value__tYHV8"}},11:function(t,e,a){t.exports={button:"CreatefeedbackButton_button__1Q3P1"}},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(9),i=a.n(s),o=(a(16),a(10)),r=a(3),l=a(4),u=a(6),b=a(5),j=a(8),d=a.n(j),h=a(0),p=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{className:d.a.section,children:[Object(h.jsx)("h1",{className:d.a.title,children:e}),a]})};p.defaultProps={title:""};var O=p,v=a(1),m=a.n(v),f=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:m.a.item,children:["Good: ",Object(h.jsx)("span",{className:m.a.value,children:e})]}),Object(h.jsxs)("p",{className:m.a.item,children:["Neutral: ",Object(h.jsx)("span",{className:m.a.value,children:a})," "]}),Object(h.jsxs)("p",{className:m.a.item,children:["Bad: ",Object(h.jsxs)("span",{className:m.a.value,children:[" ",n]})," "]}),Object(h.jsxs)("p",{className:m.a.item,children:["Total: ",Object(h.jsxs)("span",{className:m.a.value,children:[" ",c()]})," "]}),Object(h.jsxs)("p",{className:m.a.item,children:[" Percentage: ",Object(h.jsx)("span",{className:m.a.value,children:s()}),"  %"]})]})}}]),a}(n.Component),x=f,k=a(11),g=a.n(k);var _=function(t){var e=t.options,a=t.clickButtonFeedback;return e.map((function(t){return Object(h.jsx)("button",{className:g.a.button,type:"button",name:t,onClick:a,children:t})}))},N=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleClickButton=function(e){var a=e.target.name;t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return 0===e?0:Math.floor(e/t.countTotalFeedback()*100)},t.options=function(){return console.log(Object.keys(t.state)),Object.keys(t.state)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.handleClickButton,s=this.countTotalFeedback,i=this.countPositiveFeedbackPercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Please Leave Feedback",children:Object(h.jsx)(_,{options:this.options(),clickButtonFeedback:c})}),Object(h.jsx)(O,{title:"Statistics",children:s()>0?Object(h.jsx)(x,{good:e,neutral:a,bad:n,total:s,positivePercentage:i}):""})]})}}]),a}(n.Component),P=N;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={section:"Section_section__INdWU",title:"Section_title__23qq1"}}},[[18,1,2]]]);
//# sourceMappingURL=main.6a7197ed.chunk.js.map