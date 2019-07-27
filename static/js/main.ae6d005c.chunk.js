(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){},22:function(t,e,a){t.exports=a(46)},46:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(3),i=a(4),s=a(6),u=a(5),d=a(7),m=(a(11),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav bg-dark"},r.a.createElement("div",{className:"row w-100 py-4"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h2",{className:"text-white"},"Presdential Candidates 2020"),r.a.createElement("h3",{className:"text-warning"},"Finances in Truth")))))}}]),e}(n.Component)),p=600,h=1100,f=a(1),g=a(8),v=a.n(g),b=function(t){function e(t){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).call(this,t))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){v()({method:"GET",url:"https://api.open.fec.gov/v1/candidates/search/?office=P&election_year=2020&incumbent_challenge=I&incumbent_challenge=C&page=1&per_page=50&sort_nulls_last=false&has_raised_funds=true&sort=name&sort_hide_null=false&sort_null_only=false&is_active_candidate=true&api_key=".concat("sO43O5ckT95cJQG6p0apWTZgdYR1xKP1MB65AVoT","&candidate_status=C&year=2020")}).then(function(t){var e=t.data.results;console.log(e);var a=e.map(function(t,e){return t.name.split(",").reverse().join(" ")+" - "+t.party}).sort(),n=document.getElementById("prez");n.options.length=0,a.forEach(function(t,r){n.options[n.options.length]=new Option(a[r],e[r].principal_committees[0].committee_id)})}).catch(function(t){return console.log("Danger, Will Robinson! "+t)})}},{key:"render",value:function(){var t=this.props.handleSelect;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center pt-4"},r.a.createElement("div",{className:"form-group row text-center align-middle"},r.a.createElement("label",{htmlFor:"prez",className:"col-auto col-form-label col-form-label-sm"},r.a.createElement("span",{className:"h6 text-dark"},"Select a Candidate")),r.a.createElement("div",{className:"col-auto"},r.a.createElement("select",{className:"form-control",id:"prez",onChange:t})))))}}]),e}(n.Component),y="sO43O5ckT95cJQG6p0apWTZgdYR1xKP1MB65AVoT",E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleSelect=function(t){var e=t.currentTarget.value;a.setState({isLoading:!0}),v()({method:"GET",url:"https://api.open.fec.gov/v1/committee/".concat(e,"/schedules/schedule_a/by_size/?per_page=20&cycle=2020&page=1&sort_hide_null=false&sort=-cycle&api_key=").concat(y,"&sort_null_only=false&sort_nulls_last=false\n                        ")}).then(function(t){var e=t.data.results.map(function(t){return{size:t.size,total:t.total,count:t.count}}).sort(function(t,e){return t.size>e.size?1:-1});a.setState({data:e,isLoading:!1})}).catch(function(t){console.log("Danger, Will Robinson! "+t),a.setState({isLoading:!1})})},a.buildBar=function(t){var e=f.g("#chart").append("g").attr("transform","translate("+h/2+","+p/2+")");console.log(a.state.data);var n=f.f().range(["#ed5565","#f8ac59","#23c6c8","#1ab394","#1c84c6"]).domain(t,function(t){return t.size}),r=Math.min(h,p)/2,o=.3*r,c=f.e().range([0,f.c(function(t){return t.total})]).domain([0,f.c(t)]),l=f.g("body").append("div").attr("id","tooltip").style("opacity",0).attr("class","tooltip").style("position","absolute");f.g("#chart").attr("width",960).attr("height",500).call(function(t){var e=f.g(t.node().parentNode),a=parseInt(t.style("width")),n=parseInt(t.style("height")),r=a/n;function o(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/r))}t.attr("viewBox","0 0 "+a+" "+n).attr("perserveAspectRatio","xMinYMid").call(o),f.g(window).on("resize."+e.attr("id"),o)});var i=f.d().value(function(t){return t.total}).sort(null),s=f.a().innerRadius(o).outerRadius(r),u=f.a().innerRadius(o).outerRadius(function(t){return c(t.total)}),d=(e.selectAll("path").data(i(t)).enter().append("path").attr("fill",function(t,e){return n[e]}).attr("class",".arc").attr("stroke","#5a5a5a").attr("d",u).on("mouseover",function(t){l.transition().duration(200).style("opacity","1").style("pointer-events","none"),l.html("Total Donations: $"+t.total.replace(/\B(?=(\d{3})+(?!\d))/g,",")+"</br>Number of Donations in Size Category: "+t.count).style("left",f.b.pageX+100).style("top",f.b.pageY+25).on("mouseout",function(t,e){l.transition().duration(250).style("opacity","0")})}),e.selectAll(".oArc").data(i(t)).enter().append("path").attr("fill",function(t,e){return n(e)}).attr("stroke","#5a5a5a").attr("class",".oArc").attr("d",s),f.f().domain(["< $200","$200.01 - $499.99","$500 - $999.99","$1000 - $1999.99","> $2000"]).range(["#ed5565","#f8ac59","#23c6c8","#1ab394","#1c84c6"])),m=f.g("#legend");m.selectAll(".legend").data(d.domain()).enter().append("circle").attr("cx",function(t,e){return e%1*100}).attr("cy",function(t,e){return 50*parseInt(e/1)}).attr("r",7).style("fill",function(t){return d(t)}).style("stroke",function(t){return d(t)}).style("alignment-baseline","bottom"),m.append("text").attr("x",function(t,e){return e%1*100}).attr("y",function(t,e){return 50*parseInt(e/1)+40}).text(function(t){return t}).style("line-height","1.5em").attr("text-anchor","left").style("alignment-baseline","top")},a.state={isLoading:!1,data:{}},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(){this.buildBar(this.state.data)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSelect:this.handleSelect}),this.state.isLoading?r.a.createElement("h3",{className:"text-primary text-center"},"Data Loading . . ."," "):r.a.createElement("div",null,r.a.createElement("svg",{id:"chart",className:"chart svg-content"}),r.a.createElement("svg",{id:"id",width:"100%",height:"100px"})))}}]),e}(n.Component),w=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("div",{className:"row bg-secondary chartrow"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"chartbox",className:"bg-white shadow-lg mx-auto"},r.a.createElement(E,null))))))}}]),e}(n.Component),O=a(21);a.n(O).a.config();var _=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(w,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.ae6d005c.chunk.js.map