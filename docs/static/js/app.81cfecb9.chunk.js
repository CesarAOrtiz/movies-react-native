(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{212:function(e,t,r){"use strict";r.d(t,"a",(function(){return Be}));var n=r(0),a=r.n(n),o=r(42),i=r(99),c=r(184),s=r(2),l=r.n(s);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:{},isLoading:!1,error:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE":return d(d({},e),{},{data:t.payload});case"SET_MOVIE_LOADING":return d(d({},e),{},{isLoading:t.payload});case"SET_MOVIE_ERROR":return d(d({},e),{},{error:t.payload});default:return e}};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={data:[],isLoading:!1,error:null,page:1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return g(g({},e),{},{data:e.data.concat(t.payload)});case"SET_MOVIES_LOADING":return g(g({},e),{},{isLoading:t.payload});case"SET_MOVIES_ERROR":return g(g({},e),{},{error:t.payload});case"SET_MOVIES_PAGE":return g(g({},e),{},{page:t.payload});default:return e}};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={data:[],isLoading:!1,error:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CAST":return O(O({},e),{},{data:t.payload});case"SET_CAST_LOADING":return O(O({},e),{},{isLoading:t.payload});case"SET_CAST_ERROR":return O(O({},e),{},{error:t.payload});default:return e}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={data:[],isLoading:!1,error:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SIMILARS":return S(S({},e),{},{data:t.payload});case"SET_SIMILARS_LOADING":return S(S({},e),{},{isLoading:t.payload});case"SET_SIMILARS_ERROR":return S(S({},e),{},{error:t.payload});default:return e}},R={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GUEST_SESION":return t.payload;default:return e}};function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RATED_MOVIES":return t.payload;case"RATE_MOVIE":return P(P({},e),t.payload);default:return e}},L="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,k=Object(i.b)({movie:p,movies:h,cast:b,similars:j,session:T,rated:x}),M=Object(i.d)(k,L(Object(i.a)(c.a))),G=r(316),C=r(182),A=r(16),z=r.n(A),V=r(21),N=r(3),W=r(1),H=r(47),U=r(58),B=r(13),J=r.n(B),X=r(23),F=r.n(X),q=r(185),K=r.n(q).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6f1a2f5fc8e0c2ba7e14d7f2bf40a1da",language:"en-US"},transformResponse:[function(e){var t=JSON.parse(e);if(console.log(t),t.errors)throw t;if(!1===t.success)throw{errors:t.status_message};return t}]});function Q(e){var t={};return t.id=e.id,t.title=e.title,t.overview=e.overview,t.poster="https://image.tmdb.org/t/p/w500/"+e.poster_path,t.backdrop="https://image.tmdb.org/t/p/original/"+e.backdrop_path,t.releaseDate=e.release_date,t.voteAverage=e.vote_average,t.genres=e.genres,t}function Y(e){return{name:e.name,character:e.character,profilePath:"https://image.tmdb.org/t/p/w185"+e.profile_path,id:e.id}}var Z=function(e){return{type:"SET_MOVIES_LOADING",payload:e}},$=function(e){return{type:"SET_MOVIES_ERROR",payload:e}},ee=function(e){return{type:"SET_MOVIES_PAGE",payload:e}},te=r(22),re=r(30),ne=r(51),ae=r(216);function oe(e){var t=e.backgroundColor,r=void 0===t?"black":t,n=e.position,o=void 0===n?"absolute":n,i=e.top,c=void 0===i?null:i,s=e.right,l=void 0===s?null:s,u=e.left,d=void 0===u?null:u,f=e.bottom,p=void 0===f?null:f,m=e.progress,g=void 0===m?0:m,v=e.rotation,h=void 0===v?0:v,y=e.size,O=void 0===y?30:y,E=e.width,b=void 0===E?3:E,w=Math.floor(10*g),S=g<=5?"red":g<=7?"yellow":"green",_={position:o,top:c,right:l,left:d,bottom:p,backgroundColor:r,borderRadius:50};return a.a.createElement(ae.a,{style:_,rotation:h,size:O,width:b,fill:w,tintColor:S},(function(){return a.a.createElement(te.a,{style:{color:"white",fontSize:13}},Math.floor(w))}))}var ie=function(e){return{type:"SET_MOVIE_LOADING",payload:e}},ce=function(e){return{type:"SET_MOVIE_ERROR",payload:e}},se=function(e){return{type:"GET_CAST",payload:e}},le=function(e){return{type:"SET_CAST_LOADING",payload:e}},ue=function(e){return{type:"SET_CAST_ERROR",payload:e}},de=function(e){return{type:"GET_SIMILARS",payload:e}},fe=function(e){return{type:"SET_SIMILARS_LOADING",payload:e}},pe=function(e){return{type:"SET_SIMILARS_ERROR",payload:e}};var me=N.a.create({card:{backgroundColor:"#01192e",borderRadius:15,shadowColor:"#000",shadowOffset:{width:5,height:5},shadowOpacity:.25,shadowRadius:7.5},image:{borderTopLeftRadius:15,borderTopRightRadius:15},info:{padding:10},title:{fontWeight:"bold"},text:{color:"white",fontSize:16}}),ge=function(e){var t=e.movie,r=e.navigation,n=e.imgWidth,i=void 0===n?260:n,c=e.imgHeight,s=void 0===c?390:c,l=e.cardMargin,u=void 0===l?10:l,d=e.backgroundColor,f=void 0===d?"#01192e":d,p=e.color,m=void 0===p?"white":p,g=Object(o.b)(),v=t.title,h=t.poster,y=t.releaseDate,O=t.voteAverage,E=t.id,b=new Date(y).toDateString(),w=function(e){g(function(e){return function(t){var r,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(ie(!0)),a.prev=1,a.next=4,F.a.awrap(K({url:"/movie/"+e,method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return Q(e)}])}));case 4:r=a.sent,n=r.data,t({type:"GET_MOVIE",payload:n}),t(ce(null)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t(ce(a.t0.errors));case 13:t(ie(!1));case 14:case"end":return a.stop()}}),null,null,[[1,10]],Promise)}}(E)),g(function(e){return function(t){var r,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(le(!0)),a.prev=1,a.next=4,F.a.awrap(K({url:"movie/"+e+"/credits",method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return e.cast.filter((function(e){return e.character&&e.profile_path})).map(Y)}])}));case 4:r=a.sent,n=r.data,t(se(n)),t(ue(null)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t(ue(a.t0.errors));case 13:t(le(!1));case 14:case"end":return a.stop()}}),null,null,[[1,10]],Promise)}}(E)),g(function(e){return function(t){var r,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(fe(!0)),a.prev=1,a.next=4,F.a.awrap(K({url:"movie/"+e+"/similar",method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return e.results.map(Q)}])}));case 4:r=a.sent,n=r.data,t(de(n)),t(pe(null)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t(pe(a.t0.errors));case 13:t(fe(!1));case 14:case"end":return a.stop()}}),null,null,[[1,10]],Promise)}}(E)),r.navigate("Details",{id:E,title:v})};return a.a.createElement(W.a,{style:[me.card,{width:i,margin:u,backgroundColor:f}]},a.a.createElement(ne.a,{onPress:w},a.a.createElement(re.a,{source:{uri:h},style:[me.image,{height:s}]})),a.a.createElement(oe,{top:s-20,right:10,progress:O}),a.a.createElement(W.a,{style:me.info},a.a.createElement(ne.a,{onPress:w},a.a.createElement(te.a,{style:[me.text,me.title,{color:m}],numberOfLines:1,ellipsizeMode:"clip"},v)),a.a.createElement(te.a,{style:[me.text,{color:m}]},b)))};var ve=N.a.create({container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#4e73df"}}),he=function(e){var t=e.navigation,r=e.movieWidth,i=void 0===r?250:r,c=e.movieHeigth,s=void 0===c?375:c,l=e.movieMargin,u=void 0===l?10:l,d=Object(o.b)(),f=Object(o.c)((function(e){return e.movies})),p=f.data,m=f.isLoading,g=(f.error,function(){return Math.floor(V.a.get("window").width/(i+2*(u+5)))}),v=Object(n.useState)(g()),h=z()(v,2),y=h[0],O=h[1];return Object(n.useEffect)((function(){var e;d((function(t,r){var n,a;return F.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t(Z(!0)),o.prev=1,o.next=4,F.a.awrap(K({url:"movie/now_playing?page="+(e||r().movies.page),method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return e.results.map(Q)}])}));case 4:n=o.sent,a=n.data,t({type:"GET_MOVIES",payload:a}),t(ee((e||r().movies.page)+1)),t($(null)),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),t($(o.t0.errors));case 14:t(Z(!1));case 15:case"end":return o.stop()}}),null,null,[[1,11]],Promise)}))}),[]),Object(n.useEffect)((function(){var e=V.a.addEventListener("change",(function(){return O(g())}));return function(){return null==e?void 0:e.remove()}}),[]),a.a.createElement(W.a,{style:ve.container},m&&a.a.createElement(U.a,{size:40,color:"white",style:{height:V.a.get("window").height-64}}),p&&(null==p?void 0:p.length)>0&&a.a.createElement(H.a,{key:y,numColumns:y,horizontal:!1,data:p,renderItem:function(e){var r=e.item;return a.a.createElement(ge,{movie:r,imgWidth:i,imgHeight:s,cardMargin:u,navigation:t})},keyExtractor:function(e){return e.id.toString()}}))},ye=r(213),Oe=oe;var Ee=N.a.create({imageContainer:{width:"100%",height:V.a.get("window").height/2},imageBorder:{flex:1,overflow:"hidden"},posterImage:{flex:1}}),be=function(e){var t=e.data,r=t.backdrop,n=t.voteAverage;return a.a.createElement(W.a,{style:Ee.imageContainer},a.a.createElement(W.a,{style:Ee.imageBorder},(null==r?void 0:r.length)>0&&a.a.createElement(re.a,{source:{uri:r},style:Ee.posterImage}),a.a.createElement(Oe,{left:20,bottom:20,size:40,width:4,progress:n})))},we=r(214),Se=["Terrible","Bad","Meh","Average","Ok","Good","Very Good","Wow","Amazing","Unbelievable"];function _e(e){var t=e.movieId,r=e.rate,n=e.defaultRating,o=void 0===n?0:n;return a.a.createElement(we.a,{count:Se.length,reviews:Se,defaultRating:o,size:20,onFinishRating:function(e){return F.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:r(t,e);case 1:case"end":return n.stop()}}),null,null,null,Promise)},style:{marginBottom:10}})}var je=r(215),Re=function(e){return{type:"GET_GUEST_SESION",payload:e}},Te=function(e){return{type:"GET_RATED_MOVIES",payload:e}},Ie=function(e,t){return{type:"RATE_MOVIE",payload:l()({},e,t)}},Pe=a.a.createContext();function De(e){var t=e.children,r=Object(o.b)(),i=Object(o.c)((function(e){return e})),c=i.session,s=i.rated;return Object(n.useEffect)((function(){r((function(e){var t,r,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F.a.awrap(je.a.getItem("@guest_session_id"));case 3:if("undefined"===(t=a.sent)||null===t){a.next=6;break}return a.abrupt("return",e(Re({id:t})));case 6:return a.next=8,F.a.awrap(K({url:"authentication/guest_session/new",method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return{id:e.guest_session_id}}])}));case 8:r=a.sent,n=r.data,e(Re(n)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),e(Re(a.t0.errors));case 16:case"end":return a.stop()}}),null,null,[[0,13]],Promise)}))}),[]),Object(n.useEffect)((function(){var e;c.id&&r((e=c.id,function(t){var r,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F.a.awrap(K({url:"guest_session/"+e+"/rated/movies",method:"GET",transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){var t={};return e.results.forEach((function(e){t[e.id]=e.rating})),t}])}));case 3:r=a.sent,n=r.data,t(Te(n)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t(Te(a.t0.errors));case 11:case"end":return a.stop()}}),null,null,[[0,8]],Promise)}))}),[c]),a.a.createElement(Pe.Provider,{value:{rated:s,rate:function(e,t){return r(function(e,t,r){return function(n){return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F.a.awrap(K({url:"movie/"+t+"/rating?guest_session_id="+e,method:"POST",data:{value:r},transformResponse:[].concat(J()(K.defaults.transformResponse),[function(e){return e}])}));case 3:n(Ie(t,r)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),n(Ie(a.t0.errors));case 9:case"end":return a.stop()}}),null,null,[[0,6]],Promise)}}(c.id,e,t))}}},t)}var xe=N.a.create({title:{fontSize:20,fontWeight:"bold",marginVertical:5},subtitle:{fontSize:16}}),Le=function(e){var t=e.data,r=Object(n.useContext)(Pe),o=r.rated,i=r.rate,c=t.id,s=t.title,l=t.releaseDate,u=t.overview,d=t.genres,f=new Date(l).toDateString();return a.a.createElement(W.a,null,a.a.createElement(te.a,{style:[xe.title,{color:"#4e73df"}]},s),a.a.createElement(_e,{movieId:c,defaultRating:o[c]||0,rate:i}),a.a.createElement(te.a,{style:xe.title},"Overview"),a.a.createElement(te.a,{style:xe.subtitle},u),a.a.createElement(te.a,{style:xe.title},"Release date"),a.a.createElement(te.a,{style:xe.subtitle},"Invalid Date"===f?"Unknown":f),a.a.createElement(te.a,{style:xe.title},"Genres"),a.a.createElement(te.a,{style:xe.subtitle},null==d?void 0:d.map((function(e){return e.name})).join(", ")))},ke=r(8);var Me=N.a.create({container:{flexDirection:"row",backgroundColor:"white",borderRadius:10,height:50,marginLeft:20,paddingRight:15,elevation:9,shadowColor:"#000",shadowOffset:{width:5,height:5},shadowOpacity:.25,shadowRadius:7.5},actorImage:{width:50,height:50,borderTopLeftRadius:10,borderBottomLeftRadius:10},actorInfo:{marginLeft:10,marginTop:4},actorName:{fontSize:18,fontWeight:"bold"},actorCharacter:{fontSize:16,opacity:.7}}),Ge=function(e){var t=e.actor;return t?a.a.createElement(W.a,{style:Me.container},a.a.createElement(re.a,{source:{uri:t.profilePath},style:Me.actorImage}),a.a.createElement(W.a,{style:Me.actorInfo},a.a.createElement(te.a,{style:Me.actorName},t.name),a.a.createElement(te.a,{style:Me.actorCharacter},t.character))):null};var Ce=function(e){var t=e.data;return a.a.createElement(H.a,{data:t,keyExtractor:function(e,t){return e.id.toString()+"i-"+t},renderItem:function(e){var t=e.item;return a.a.createElement(Ge,{actor:t})},horizontal:!0,showsHorizontalScrollIndicator:"web"===ke.a.OS})};var Ae=function(e){var t=e.data,r=e.navigation;return a.a.createElement(H.a,{data:t,renderItem:function(e){var t=e.item;return a.a.createElement(ge,{movie:t,imgWidth:140,imgHeight:210,cardMargin:10,navigation:r,backgroundColor:"white",color:"black"})},keyExtractor:function(e){return e.id.toString()},horizontal:!0,showsHorizontalScrollIndicator:"web"===ke.a.OS})};var ze=function(e){var t=e.navigation,r=e.name,n=e.ListComponent,i=Object(o.c)((function(e){return e[r]})),c=i.data,s=i.isLoading;return i.error,s?a.a.createElement(U.a,{size:35,color:"grey",style:{marginTop:20}}):a.a.createElement(n,{data:c,navigation:t})};var Ve=N.a.create({content:{width:"100%",maxWidth:1024,margin:"auto"},title:{fontSize:20,fontWeight:"bold",marginVertical:10}}),Ne=function(e){e.route;var t=e.navigation,r=Object(o.c)((function(e){return e.movie})),n=r.data,i=r.isLoading;return r.error,a.a.createElement(ye.a,{style:{width:"100%"}},i&&a.a.createElement(U.a,{size:40,color:"#4e73df",style:{height:V.a.get("window").height-64}}),!i&&a.a.createElement(W.a,{style:Ve.content},a.a.createElement(be,{data:n}),a.a.createElement(W.a,{style:{margin:20}},a.a.createElement(Le,{data:n}),a.a.createElement(te.a,{style:Ve.title},"Cast"),a.a.createElement(ze,{ListComponent:Ce,name:"cast"}),a.a.createElement(te.a,{style:Ve.title},"Similars"),a.a.createElement(ze,{name:"similars",navigation:t,ListComponent:Ae}))))},We=Object(G.a)(),He={headerStyle:{backgroundColor:"white"},headerTintColor:"#4e73df",headerTitleStyle:{fontWeight:"bold"}};var Ue=function(){return a.a.createElement(C.a,null,a.a.createElement(We.Navigator,{initialRouteName:"Home",screenOptions:He},a.a.createElement(We.Screen,{name:"Home",component:he,options:{title:"Movies Inc",headerTitleStyle:{fontSize:28}}}),a.a.createElement(We.Screen,{name:"Details",component:Ne,options:function(e){return{title:e.route.params.title}}})))};function Be(){return a.a.createElement(o.a,{store:M},a.a.createElement(De,null,a.a.createElement(Ue,null)))}},226:function(e,t,r){e.exports=r(312)}},[[226,1,2]]]);
//# sourceMappingURL=app.81cfecb9.chunk.js.map