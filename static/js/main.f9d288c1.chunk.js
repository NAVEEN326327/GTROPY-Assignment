(this.webpackJsonpgtropy=this.webpackJsonpgtropy||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},277:function(e,t,c){"use strict";c.r(t);var s=c(12),d=c.n(s),a=c(98),i=c.n(a),n=(c(109),c(99)),r=c(100),l=c(104),o=c(103),j=(c(110),c(111),c(101)),v=c(102),h=c.n(v),_=c(0),m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,d=new Array(s),a=0;a<s;a++)d[a]=arguments[a];return(e=t.call.apply(t,[this].concat(d))).state={state_data:[],total_cases:[],current_state:null},e.getStateData=function(){try{h.a.get("https://api.covid19india.org/data.json").then((function(t){var c=t.data.statewise;e.setState({state_data:c.slice(1),total_cases:c[0]})}))}catch(t){console.log("Wrong with url")}},e.currentRow=function(e,t,c,s,d){document.getElementById("confirmed").innerHTML=e,document.getElementById("active").innerHTML=t,document.getElementById("recovered").innerHTML=c,document.getElementById("deceased").innerHTML=s,document.getElementById("current_state").innerHTML=d,document.getElementById("tem__confirmed__cases").innerHTML=e,document.getElementById("active__first").innerHTML=t,document.getElementById("deceased__first").innerHTML=s,document.getElementById("recovered__first").innerHTML=c},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.getStateData()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{class:"container",children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsxs)("div",{class:"col-sm-12 col-md-6",children:[Object(_.jsx)("br",{}),Object(_.jsx)("h3",{children:"INDIA COVIE-19 Tracker"}),Object(_.jsx)("p",{children:"Let's all pray to make our Earth Covid-19 free soon, Stay Safe and do TheLocate"}),Object(_.jsxs)("div",{className:"donut__card container row",children:[Object(_.jsx)("div",{className:"top__outer__div col-md-8 col-sm-12",children:Object(_.jsxs)("div",{className:"mid__div",children:[Object(_.jsx)("div",{className:"outer__circle",children:Object(_.jsxs)("div",{className:"inner__circle",children:[Object(_.jsx)("h5",{id:"tem__confirmed__cases",children:this.state.total_cases.confirmed}),Object(_.jsx)("p",{children:"Confirmed"})]})}),Object(_.jsxs)("div",{className:"top__outer__div__mid",children:[Object(_.jsxs)("div",{className:"first",children:[Object(_.jsx)("div",{className:"active__dot"}),"\xa0",Object(_.jsx)("div",{children:"active:"}),Object(_.jsx)("div",{id:"active__first",children:this.state.total_cases.active})]}),Object(_.jsxs)("div",{className:"second",children:[Object(_.jsx)("div",{className:"decease__dot"}),"\xa0",Object(_.jsx)("div",{children:"decease:"}),Object(_.jsx)("div",{id:"deceased__first",children:this.state.total_cases.deaths})]}),Object(_.jsxs)("div",{className:"third",children:[Object(_.jsx)("div",{className:"recovered__dot"}),"\xa0",Object(_.jsx)("div",{children:"recovered:"}),Object(_.jsx)("div",{id:"recovered__first",children:this.state.total_cases.recovered})]})]})]})}),Object(_.jsx)("div",{className:"col-md-4 col-sm-12",children:Object(_.jsx)(j.Line,{data:{datasets:[{data:[100,234,6,3,6]},{data:[13450,2434,64,343,645]},{data:[100,4534,6,345,6]}]}})})]}),Object(_.jsxs)("div",{className:"table__outer__container container row",children:[Object(_.jsxs)("div",{className:"table__container table__container_heading container row ",children:[Object(_.jsx)("div",{children:"STATE/UT"}),Object(_.jsx)("div",{children:"CONFIRMED"}),Object(_.jsx)("div",{children:"ACTIVE"}),Object(_.jsx)("div",{children:"RECOVERED"}),Object(_.jsx)("div",{children:"DECEASED"})]}),this.state.state_data.map((function(t,c){return Object(_.jsxs)("div",{id:"table__container",className:"table__container container row",onMouseOver:function(){e.currentRow(t.confirmed,t.active,t.recovered,t.deaths,t.state)},children:[Object(_.jsx)("div",{className:"table__state",children:t.state}),Object(_.jsx)("div",{className:"table__confirmed",children:t.confirmed}),Object(_.jsx)("div",{className:"table__active",children:t.active}),Object(_.jsx)("div",{className:"table__recovered",children:t.recovered}),Object(_.jsx)("div",{className:"table__deaths",children:t.deaths})]})}))]})]}),Object(_.jsxs)("div",{class:"col-sm-12 col-md-6",children:[" ",Object(_.jsx)("br",{}),Object(_.jsx)("h3",{children:"INDIA MAP"}),Object(_.jsx)("p",{children:" HOVER OVER A STATE FOR MORE DETAILS"}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{className:"map__card container",children:[Object(_.jsxs)("div",{className:"total___cases__card row",children:[Object(_.jsxs)("div",{className:"confirmed col-md-3 col-sm-6",children:[Object(_.jsx)("div",{children:"Confirmed"}),Object(_.jsx)("div",{id:"confirmed",children:this.state.total_cases.confirmed})]}),Object(_.jsxs)("div",{className:"active col-md-3 col-sm-6",children:[Object(_.jsx)("div",{children:"Active"}),Object(_.jsx)("div",{id:"active",children:this.state.total_cases.active})]}),Object(_.jsxs)("div",{className:"recovered col-md-3 col-sm-6",children:[Object(_.jsx)("div",{children:"Recovered"}),Object(_.jsx)("div",{id:"recovered",children:this.state.total_cases.recovered})]}),Object(_.jsxs)("div",{className:"deceased col-md-3 col-sm-6",children:[Object(_.jsx)("div",{children:"Deceased"}),Object(_.jsx)("div",{id:"deceased",children:this.state.total_cases.deaths})]})]}),Object(_.jsxs)("div",{className:"last__updated",children:[Object(_.jsx)("div",{id:"current_state",className:"current__state",children:this.state.current_state}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"first",children:"LAST UPDATED"}),Object(_.jsx)("div",{className:"second",children:this.state.total_cases.lastupdatedtime})]})]})]})]})]})})}}]),c}(s.Component),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,278)).then((function(t){var c=t.getCLS,s=t.getFID,d=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),d(e),a(e),i(e)}))};i.a.render(Object(_.jsx)(d.a.StrictMode,{children:Object(_.jsx)(m,{})}),document.getElementById("root")),b()}},[[277,1,2]]]);
//# sourceMappingURL=main.f9d288c1.chunk.js.map