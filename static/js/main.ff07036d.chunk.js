(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},30:function(t,e,n){},33:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(23),s=n.n(c),i=(n(30),n(2)),o=n(3),u=n(5),A=n(4),d=n(13),l=n(7),k=n(6),S=n.n(k),b=n(9),g=n(15),p="user",j=function(t){return localStorage.setItem(p,JSON.stringify(t))},f=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},O=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(p));null===e&&(e={}),f(e)(t)}))},v=function(t){return new Promise((function(e){j(Object(g.a)(Object(g.a)({},{name:"",email:"",image:"",description:""}),t)),f("OK")(e)}))},I=n.p+"static/media/loading.6639e93f.png",h=(n(21),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"loa",children:[Object(h.jsx)("img",{alt:"",src:I}),Object(h.jsx)("p",{children:"loading.."})]})}}]),n}(r.a.Component),B=m,Z=(n(33),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).clickEvent=Object(b.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.name,t.setState({loading:!0}),e.next=4,v({name:n});case 4:t.setState({loading:!1,redirect:!0});case 5:case"end":return e.stop()}}),e)}))),t.validationButton=function(e){var n=e.target.value;n.length>=3?t.setState({disableButton:!1,name:n}):t.setState({disableButton:!0,name:n})},t.state={disableButton:!0,loading:!1,redirect:!1,name:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.disableButton,a=t.loading,r=t.redirect;return a?Object(h.jsx)(B,{}):r?Object(h.jsx)(l.a,{to:"/trybetunes/search"}):Object(h.jsxs)("form",{id:"page-login","data-testid":"page-login",children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("input",{onChange:this.validationButton,value:e,"data-testid":"login-name-input",type:"text",id:"nameInput",placeholder:"Nome"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onClick:this.clickEvent,disabled:n,"data-testid":"login-submit-button",type:"button",value:"Entrar",id:"btnInput"})]})}}]),n}(r.a.Component)),w=n(17),C=(n(42),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("nav",{id:"nav",children:[Object(h.jsx)(d.b,{className:"link","data-testid":"link-to-search",to:"/trybetunes/search",children:"Buscar"}),Object(h.jsx)(d.b,{className:"link","data-testid":"link-to-favorites",to:"/trybetunes/favorites",children:"Favoritos"})]})}}]),n}(r.a.Component)),x=C,D=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"loa2",children:Object(h.jsx)("p",{children:"loading.."})})}}]),n}(r.a.Component),N=D;function J(t){return function(e){13===e.keyCode&&t(e)}}var E=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={userRendered:!1,username:""},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(S.a.mark((function t(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:e=t.sent,this.setState({userRendered:!0,username:e.name});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this.state,n=e.userRendered,a=e.username;return Object(h.jsxs)("header",{id:"header","data-testid":"header-component",children:[Object(h.jsx)("h1",{children:"TryTunes"}),Object(h.jsx)(x,{}),Object(h.jsxs)("div",Object(g.a)(Object(g.a)({},(t=function(){var t=document.querySelector("#nav"),e=document.querySelector(".sanduba");t.classList.toggle("active"),e.classList.toggle("active"),document.querySelectorAll("#nav .link").forEach((function(t,e){t.style.animation?t.style.animation="":t.style.animation="navFade 0.5s ease forwards ".concat(e/2*.3,"s")}))},{role:"button",tabIndex:0,onKeyDown:J(t),onClick:t})),{},{className:"sanduba",children:[Object(h.jsx)("div",{className:"line1"}),Object(h.jsx)("div",{className:"line2"}),Object(h.jsx)("div",{className:"line3"})]})),n?Object(h.jsx)("div",{className:"span",id:"span",children:Object(h.jsx)("span",{"data-testid":"header-user-name",children:a})}):Object(h.jsx)("div",{className:"span",children:Object(h.jsx)(N,{})})]})}}]),n}(r.a.Component),y=E,Q="favorite_songs";JSON.parse(localStorage.getItem(Q))||localStorage.setItem(Q,JSON.stringify([]));var L=function(){return JSON.parse(localStorage.getItem(Q))},R=function(t){return localStorage.setItem(Q,JSON.stringify(t))},X=function(t){return function(e){setTimeout((function(){e(t)}),500)}},P=function(){return new Promise((function(t){var e=L();X(e)(t)}))},G=function(t){return new Promise((function(e){if(t){var n=L();R([].concat(Object(w.a)(n),[t]))}X("OK")(e)}))},U=function(t){return new Promise((function(e){var n=L();R(n.filter((function(e){return e.trackId!==t.trackId}))),X("OK")(e)}))},F=function(){var t=Object(b.a)(S.a.mark((function t(e){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"),{method:"GET"});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=F,T=(n(22),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(t){var a;Object(i.a)(this,n),(a=e.call(this,t)).verifyIfFavoriteSongs=function(){var t=Object(b.a)(S.a.mark((function t(e){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:n=t.sent,n.filter((function(t){return t.trackId===e.trackId})).includes(e)&&a.setState({checked:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleCheck=Object(b.a)(S.a.mark((function t(){var e,n,r,c,s,i,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.state.checked,n=a.props,r=n.songData,c=n.appendNewFavSong,s=n.startLoading,i=n.stopLoading,o=n.removeFavSong,a.setState({checked:!e}),e){t.next=11;break}return s(),t.next=7,G(r);case 7:c(r.trackId),i(),t.next=16;break;case 11:return s(),t.next=14,U(r);case 14:o(r.trackId),i();case 16:case"end":return t.stop()}}),t)})));var r=a.props.checked;return a.state={checked:r},a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var t=this.props.songData;this.verifyIfFavoriteSongs(t)}},{key:"render",value:function(){var t=this.props,e=t.checked,n=t.trackId,a=t.trackName,r=t.previewUrl,c=t.artista;return Object(h.jsxs)("section",{id:"audio",children:[Object(h.jsxs)("div",{id:"cabeca",children:[Object(h.jsx)("p",{children:a}),Object(h.jsxs)("label",{id:"label",htmlFor:"audio-component",children:[Object(h.jsx)("input",{type:"checkbox","data-testid":"checkbox-music-".concat(n),checked:e,onChange:this.handleCheck}),"Favorita"]})]}),Object(h.jsx)("h5",{className:"artistaCard",children:c}),Object(h.jsxs)("audio",{controls:!0,children:[Object(h.jsx)("track",{src:"",kind:"captions",label:"english_captions"}),Object(h.jsx)("source",{type:"audio/mp3","data-testid":"audio-component",src:r})]})]})}}]),n}(r.a.Component)),K=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(t){var a;Object(i.a)(this,n),(a=e.call(this,t)).initialFavSongs=Object(b.a)(S.a.mark((function t(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent.map((function(t){return t.trackId})),a.setState({favSongs:e});case 4:case"end":return t.stop()}}),t)}))),a.appendNewFavSong=function(t){var e=a.state.favSongs;e.some((function(e){return e.trackId===t}))||a.setState({favSongs:[].concat(Object(w.a)(e),[t])})},a.removeFavSong=function(t){var e=a.state.favSongs,n=Object(w.a)(e);n.slice(e.indexOf(t),1),a.setState({favSongs:n})},a.startLoading=function(){a.setState({loading:!0})},a.stopLoading=function(){a.setState({loading:!1})},a.requestSongs=function(){var t=a.props.match.params.id;Y(t).then((function(t){return a.setState({loadedSongs:t},(function(){a.setState({loading:!1})}))}))},a.renderSongsList=function(){var t=a.state,e=t.favSongs,n=t.loadedSongs,r=t.aux;return n.map((function(t,n){var c=null;if(0!==n||r){if(0!==n){var s=JSON.parse(localStorage.getItem("favorite_songs")).some((function(e){return e.trackId===t.trackId}));c=Object(h.jsx)(T,{artistId:t.artistId,trackName:t.trackName,previewUrl:t.previewUrl,trackId:t.trackId,favSongs:e,songData:t,checked:s,removeFavSong:a.removeFavSong,appendNewFavSong:a.appendNewFavSong,startLoading:a.startLoading,stopLoading:a.stopLoading,artista:t.artistName},t.trackName)}}else{var i=t.artworkUrl100;a.setState({artista:{image:i.replace("100x100bb","1000x1000bb"),artista:t.artistName,albumName:t.collectionName},aux:!0},(function(){})),c=!1}return c}))},a.renderLoadingScreen=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Carregando..."})})};var r=JSON.parse(localStorage.getItem("favorite_songs"));return a.state={loading:!0,loadedSongs:[],favSongs:r,artista:"",aux:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.requestSongs(),this.initialFavSongs(),this.setState({favSongs:JSON.parse(localStorage.getItem("favorite_songs"))})}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.artista;return Object(h.jsxs)("div",{"data-testid":"page-album",children:[Object(h.jsx)(y,{}),Object(h.jsxs)("div",{className:"musicas",children:[Object(h.jsxs)("div",{id:"albumInfo",children:[Object(h.jsx)("img",{alt:"artsiaalbum",id:"albumFoto",src:n.image}),Object(h.jsxs)("p",{className:"infos cima",children:[Object(h.jsx)("strong",{children:"Artista: "}),n.artista]}),Object(h.jsxs)("p",{className:"infos",children:[Object(h.jsx)("strong",{children:"Album: "}),n.albumName]})]}),Object(h.jsx)("div",{className:"musica",children:e?this.renderLoadingScreen():this.renderSongsList()})]})]})}}]),n}(r.a.Component),q=function(){var t=Object(b.a)(S.a.mark((function t(e){var n,a,r,c,s,i,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a,{method:"GET"});case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,s=c.results,i=c.resultCount,o=s.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",{response:o,resultCount:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=q,H=(n(43),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).pesquisaMusica=Object(b.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.valor,t.setState({userRendered:!0,resultadoPesquisa:{response:[]},valor2:n}),e.t0=t,e.next=5,M(n);case 5:e.t1=e.sent,e.t2={userRendered:!1,valor:"",buttonDisable:!0,resultadoPesquisa:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:case"end":return e.stop()}}),e)}))),t.verificaInput=function(e){var n=e.target.value;t.setState({valor:n});n.length>=2?t.setState({buttonDisable:!1}):t.setState({buttonDisable:!0})},t.state={userRendered:!1,buttonDisable:!0,valor:"",resultadoPesquisa:{response:[]},valor2:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.resultadoPesquisa,n=t.userRendered,a=t.valor,r=t.valor2,c=t.buttonDisable;return Object(h.jsxs)("div",{"data-testid":"page-search",children:[Object(h.jsx)(y,{}),Object(h.jsx)("div",{id:"sea",children:Object(h.jsxs)("div",{id:"search-artist-input",children:[Object(h.jsx)("input",{value:a,onKeyDown:function(t){"Enter"===t.key&&document.querySelector("#search-artist-button").click()},onChange:this.verificaInput,"data-testid":"search-artist-input",id:"search-artist-inputs",type:"text",placeholder:"Pesquisar artistas"}),Object(h.jsx)("button",{onClick:this.pesquisaMusica,disabled:c,"data-testid":"search-artist-button",id:"search-artist-button",type:"button",children:Object(h.jsx)("img",{alt:"",id:"lupa",src:"data:image/png;base64,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"})})]})}),n&&Object(h.jsx)(B,{}),e.resultCount>1&&Object(h.jsx)("p",{className:"preview",children:"Resultados para: ".concat(r)}),0===e.resultCount&&Object(h.jsx)("p",{className:"preview",children:"Nenhum \xe1lbum foi encontrado"}),Object(h.jsx)("ul",{id:"resultado",children:e.response.map((function(t){return Object(h.jsxs)("div",{id:"colecao",children:[Object(h.jsx)("img",{alt:"",id:"capa",src:t.artworkUrl100}),Object(h.jsxs)("div",{id:"infos",children:[Object(h.jsxs)(d.b,{className:"nomes",id:"link2","data-testid":"link-to-album-".concat(t.collectionId),to:"/trybetunes/album/".concat(t.collectionId),children:["Album:",t.collectionName]}),Object(h.jsxs)("p",{className:"nomes",children:[Object(h.jsx)("strong",{children:"Artista: "}),t.artistName]}),Object(h.jsxs)("p",{className:"nomes",children:[Object(h.jsx)("strong",{children:"Lan\xe7amento: "}),new Date(t.releaseDate).getFullYear()]})]})]},t.collectionId)}))})]})}}]),n}(r.a.Component)),z=(n(44),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).album=new K,a.verifyIfFavoriteSongs=function(){var t=Object(b.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.album.removeFavSong(e),a.setState({songData:JSON.parse(localStorage.getItem("favorite_songs"))});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.state={songData:JSON.parse(localStorage.getItem("favorite_songs"))},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.songData,n=e;return Object(h.jsxs)("div",{"data-testid":"page-favorites",children:[Object(h.jsx)(y,{}),Object(h.jsx)("h1",{id:"fav",children:"Favoritos"}),Object(h.jsx)("div",{id:"favoritos",children:n.map((function(a){return function(n,a){var r=a.some((function(t){return t.trackId===n.trackId}));return Object(h.jsx)(T,{artistId:n.artistId,trackName:n.trackName,previewUrl:n.previewUrl,trackId:n.trackId,favSongs:e,songData:n,checked:r,removeFavSong:t.verifyIfFavoriteSongs,appendNewFavSong:t.album.appendNewFavSong,startLoading:t.album.startLoading,stopLoading:t.album.stopLoading,artista:n.artistName},n.trackName)}(a,n)}))})]})}}]),n}(r.a.Component)),W=z,V=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(h.jsx)(y,{}),Object(h.jsx)("h1",{children:"Editar Perfil"})]})}}]),n}(r.a.Component),_=V,$=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{"data-testid":"page-not-found",children:Object(h.jsx)("h1",{children:"Pagina n\xe3o encontrada!"})})}}]),n}(r.a.Component),tt=$,et=function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("main",{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/trybetunes",exact:!0,component:Z}),Object(h.jsx)(l.b,{path:"/trybetunes/search",component:H}),Object(h.jsx)(l.b,{path:"/trybetunes/album/:id",component:K}),Object(h.jsx)(l.b,{path:"/trybetunes/favorites",component:W}),Object(h.jsx)(l.b,{path:"/trybetunes/profile/edit",component:_}),Object(h.jsx)(l.b,{path:"*",component:tt})]})})}}]),n}(r.a.Component),nt=et,at=(n(45),function(t){Object(u.a)(n,t);var e=Object(A.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)(nt,{})})}}]),n}(r.a.Component)),rt=at;s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(rt,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ff07036d.chunk.js.map