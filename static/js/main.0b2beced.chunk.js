(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{10:function(e,t,a){e.exports={top_section:"Header_top_section__8UY_G",logo:"Header_logo__3_SJs",profile:"Header_profile__1y4dl",profile_name:"Header_profile_name__28ZDW",profile_image:"Header_profile_image__37WdK",nav_list:"Header_nav_list__1VTXW",list_item:"Header_list_item__38Eeh",inactive:"Header_inactive__p5Kz3",active:"Header_active__vmCnS"}},17:function(e,t,a){e.exports={main:"Profile_main__YfNHw",profile:"Profile_profile__39xAB",image:"Profile_image__LIP-K",edit:"Profile_edit__2j79y",profile_image:"Profile_profile_image__2pSz9",infoContainer:"Profile_infoContainer__2BzGi"}},18:function(e,t,a){e.exports={main:"Albums_main__38_kM",albums:"Albums_albums__2vuav",album:"Albums_album__3TTII",album_artist:"Albums_album_artist__1FLdN",album_name:"Albums_album_name__Ehfk6"}},19:function(e,t,a){e.exports={container:"Album_container__2AUUm",main:"Album_main__TR337",album_info_container:"Album_album_info_container__3JtF8",album_info:"Album_album_info__1oXyl",song_list:"Album_song_list__3TE99"}},26:function(e,t,a){e.exports={main:"Favorite_main__2TVgT",title:"Favorite_title__1Ap9h"}},29:function(e,t,a){e.exports={main:"Login_main__CU5LU"}},31:function(e,t,a){e.exports={main:"MusicCard_main__11es8",audio:"MusicCard_audio__2bUuS"}},32:function(e,t,a){e.exports={main:"ProfileEdit_main__2DCwK",form:"ProfileEdit_form__ESqdL"}},34:function(e,t,a){e.exports={btn:"SubmitButton_btn__1ATYn"}},35:function(e,t,a){e.exports={form_control:"Input_form_control__1v5Fr"}},36:function(e,t,a){e.exports={main:"Loading_main__1YHLH"}},39:function(e,t,a){e.exports={main:"Search_main__V99w_"}},46:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(33),i=a.n(s),c=(a(46),a(5)),o=a(6),l=a(8),u=a(7),d=a(14),m=a(4),j=a(2),b=a.n(j),p=a(3),h=a(34),f=a.n(h),O=a(0);function v(e){var t=e.text,a=e.handleClick,n=e.testId,r=e.disabled;return Object(O.jsx)("button",{type:"submit",className:f.a.btn,onClick:a,"data-testid":n,disabled:r,children:t})}v.defaultProps={disabled:!1};var x=v,_=a(35),g=a.n(_);function N(e){var t=e.type,a=e.text,n=e.name,r=e.placeholder,s=e.handleOnChange,i=e.testId,c=e.value;return Object(O.jsxs)("div",{className:g.a.form_control,children:[a&&Object(O.jsx)("label",{htmlFor:n,children:a}),Object(O.jsx)("input",{type:t,name:n,id:n,"data-testid":i,placeholder:r,onChange:s,value:c})]})}N.defaultProps={text:""};var k=N,C=a(36),I=a.n(C);var w=function(){return Object(O.jsx)("p",{className:I.a.main,children:"Carregando..."})},S=a(29),y=a.n(S),F=a.p+"static/media/logo.7a3c37e5.png",U=a(15),A="user",P=function(e){return localStorage.setItem(A,JSON.stringify(e))},D=function(e){return function(t){t(e)}},H=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(A));null===t&&(t={}),D(t)(e)}))},B=function(e){return new Promise((function(t){P(Object(U.a)(Object(U.a)({},{name:"",email:"",image:"",description:""}),e)),D("OK")(t)}))},E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState({loginName:a.value})},e.shouldButtonBeDisabled=function(){return e.state.loginName.length<3},e.handleClick=function(){var t=Object(p.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),n=e.state.loginName,t.next=4,B({name:n});case 4:e.props.history.push(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={loginName:"",loading:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.loginName;return a?Object(O.jsx)(w,{}):Object(O.jsxs)("div",{"data-testid":"page-login",className:y.a.main,children:[Object(O.jsx)("img",{src:F,alt:"Trybetunes"}),Object(O.jsxs)("form",{className:y.a.form_control,children:[Object(O.jsx)(k,{type:"text",text:"Login",name:"userName",placeholder:"Nome",handleOnChange:this.handleChange,testId:"login-name-input",value:n}),Object(O.jsx)(x,{text:"Entrar",handleClick:function(){e.handleClick("/search")},testId:"login-submit-button",disabled:this.shouldButtonBeDisabled()})]})]})}}]),a}(r.a.Component),J=E,M=a(25),T=a(10),L=a.n(T),K=a.p+"static/media/logo-white.0671366a.png",R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:a=t.sent,e.setState({user:a});case 4:case"end":return t.stop()}}),t)}))),e.state={user:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.user;return e.name?Object(O.jsxs)("header",{"data-testid":"header-component",children:[Object(O.jsxs)("div",{className:L.a.top_section,children:[Object(O.jsx)("img",{className:L.a.logo,src:K,alt:"Logo do trybetunes"}),Object(O.jsxs)("div",{className:L.a.profile,children:[Object(O.jsx)(M.a,{className:L.a.profile_image}),Object(O.jsx)("span",{className:L.a.profile_name,"data-testid":"header-user-name",children:e.name})]})]}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:L.a.nav_list,children:[Object(O.jsx)("li",{className:L.a.list_item,children:Object(O.jsx)(d.c,{to:"/search","data-testid":"link-to-search",className:function(e){return e?L.a.active:L.a.inactive},children:"Pesquisar"})}),Object(O.jsx)("li",{className:L.a.list_item,children:Object(O.jsx)(d.c,{to:"/favorites","data-testid":"link-to-favorites",className:function(e){return e?L.a.active:L.a.inactive},children:"Favoritas"})}),Object(O.jsx)("li",{className:L.a.list_item,children:Object(O.jsx)(d.c,{to:"/profile","data-testid":"link-to-profile",className:function(e){return e?L.a.active:L.a.inactive},children:"Perfil"})})]})})]}):Object(O.jsx)(w,{})}}]),a}(r.a.Component),Y=a(39),z=a.n(Y),V=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n,r,s,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,i=s.results,c=i.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=V,q=a(18),G=a.n(q),X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e){return e.shouldUpdateAlbums}},{key:"componentDidUpdate",value:function(){(0,this.props.disableAlbumsUpdate)()}},{key:"render",value:function(){var e=this.props,t=e.albums,a=e.searchFor,n=e.loading,r=e.shouldUpdateAlbums;return n?Object(O.jsx)(w,{}):Object(O.jsxs)("div",{className:G.a.main,children:[a&&Object(O.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(a)}),t.length>0?Object(O.jsx)("div",{className:G.a.albums,children:t.map((function(e){return Object(O.jsx)(d.b,{to:"/album/".concat(e.collectionId),"data-testid":"link-to-album-".concat(e.collectionId),children:Object(O.jsxs)("div",{className:G.a.album,children:[Object(O.jsx)("img",{src:e.artworkUrl100.replace("100x100","1000x1000"),alt:e.artistName}),Object(O.jsx)("span",{className:G.a.album_artist,children:e.artistName}),Object(O.jsx)("span",{className:G.a.album_name,children:e.collectionName})]})},e.collectionId)}))}):r&&Object(O.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})]})}}]),a}(r.a.Component);X.defaultProps={searchFor:""};var Z=X,Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState({searchFor:a.value})},e.shouldButtonBeDisabled=function(){return e.state.searchFor.length<2},e.handleClick=function(){var t=Object(p.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.searchFor,e.setState({loading:!0}),t.next=5,W(n);case 5:r=t.sent,e.setState({searchResult:r,loading:!1,shouldUpdateAlbums:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.disableAlbumsUpdate=function(){e.setState({shouldUpdateAlbums:!1,searchFor:""})},e.state={searchFor:"",loading:!1,searchResult:[],shouldUpdateAlbums:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchFor,a=e.searchResult,n=e.loading,r=e.shouldUpdateAlbums;return Object(O.jsxs)("div",{"data-testid":"page-search",className:z.a.main,children:[Object(O.jsx)(R,{}),!n&&Object(O.jsxs)("form",{children:[Object(O.jsx)(k,{name:"search",placeholder:"Nome do Artista",testId:"search-artist-input",type:"text",value:t,handleOnChange:this.handleChange}),Object(O.jsx)(x,{testId:"search-artist-button",text:"Procurar",disabled:this.shouldButtonBeDisabled(),handleClick:this.handleClick})]}),Object(O.jsx)(Z,{loading:n,searchFor:t,albums:a,shouldUpdateAlbums:r,disableAlbumsUpdate:this.disableAlbumsUpdate})]})}}]),a}(r.a.Component),$=Q,ee=a(40),te=a(31),ae=a.n(te),ne=a(41),re="favorite_songs";JSON.parse(localStorage.getItem(re))||localStorage.setItem(re,JSON.stringify([]));var se=function(){return JSON.parse(localStorage.getItem(re))},ie=function(e){return localStorage.setItem(re,JSON.stringify(e))},ce=function(e){return function(t){t(e)}},oe=function(){return new Promise((function(e){var t=se();ce(t)(e)}))},le=function(e){return new Promise((function(t){if(e){var a=se();ie([].concat(Object(ne.a)(a),[e]))}ce("OK")(t)}))},ue=function(e){return new Promise((function(t){var a=se();ie(a.filter((function(t){return t.trackId!==e.trackId}))),ce("OK")(t)}))},de=a.p+"static/media/whiteHeartIcon.2b822118.svg",me=a.p+"static/media/redHeartIcon.db5f2c5f.svg",je=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleFavorite=Object(p.a)(b.a.mark((function t(){var a,n,r,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props,n=a.song,r=a.updateFavorites,s=e.state.isFavorite,e.setState({loading:!0}),!s){t.next=8;break}return t.next=6,ue(n);case 6:t.next=10;break;case 8:return t.next=10,le(n);case 10:e.setState({isFavorite:!s,loading:!1},r);case 11:case"end":return t.stop()}}),t)}))),e.state={isFavorite:!1,loading:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.favorite;this.setState({isFavorite:e})}},{key:"render",value:function(){var e=this.props,t=e.trackName,a=e.previewUrl,n=e.trackId,r=this.state,s=r.isFavorite;return r.loading?Object(O.jsx)(w,{}):Object(O.jsxs)("div",{className:ae.a.main,children:[Object(O.jsx)("span",{children:t}),Object(O.jsxs)("div",{className:ae.a.audio,children:[Object(O.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(O.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(O.jsx)("code",{children:"audio"}),"."]}),Object(O.jsxs)("label",{htmlFor:"favorite-".concat(n),children:[s?Object(O.jsx)("img",{className:"heart",src:me,alt:"filled heart"}):Object(O.jsx)("img",{className:"heart",src:de,alt:"empty heart"}),Object(O.jsx)("input",{id:"favorite-".concat(n),type:"checkbox","data-testid":"checkbox-music-".concat(n),onChange:this.handleFavorite,checked:s})]})]})]})}}]),a}(r.a.Component);je.defaultProps={updateFavorites:function(){}};var be=je,pe=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=pe,fe=a(19),Oe=a.n(fe),ve=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setSongs=Object(p.a)(b.a.mark((function t(){var a,n,r,s,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,he(a);case 3:n=t.sent,r=Object(ee.a)(n),s=r[0],i=r.slice(1),e.setState({albumInfo:s,songs:i});case 6:case"end":return t.stop()}}),t)}))),e.componentDidMount=Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setSongs(),e.handleFavorites();case 2:case"end":return t.stop()}}),t)}))),e.handleFavorites=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe();case 2:a=t.sent,e.setState({loading:!1,favoriteSongs:a});case 4:case"end":return t.stop()}}),t)}))),e.state={albumInfo:{},songs:[],favoriteSongs:[],loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.albumInfo,a=e.songs,n=e.loading,r=e.favoriteSongs;return n?Object(O.jsx)(w,{}):Object(O.jsxs)("div",{"data-testid":"page-album",className:Oe.a.container,children:[Object(O.jsx)(R,{}),Object(O.jsxs)("main",{className:Oe.a.main,children:[Object(O.jsxs)("section",{className:Oe.a.album_info_container,children:[Object(O.jsx)("img",{src:t.artworkUrl100,alt:t.collectionName}),Object(O.jsxs)("div",{className:Oe.a.album_info,children:[Object(O.jsx)("span",{"data-testid":"artist-name",children:t.artistName}),Object(O.jsx)("span",{"data-testid":"album-name",children:t.collectionName})]})]}),Object(O.jsx)("section",{className:Oe.a.song_list,children:a.map((function(e){return Object(O.jsx)(be,{song:e,trackName:e.trackName,previewUrl:e.previewUrl,trackId:e.trackId,favorite:r.some((function(t){return t.trackId===e.trackId}))},e.trackId)}))})]})]})}}]),a}(r.a.Component),xe=a(26),_e=a.n(xe),ge=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe();case 2:a=t.sent,e.setState({loading:!1,favorites:a});case 4:case"end":return t.stop()}}),t)}))),e.updateFavorites=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,oe();case 3:a=t.sent,e.setState({loading:!1,favorites:a});case 5:case"end":return t.stop()}}),t)}))),e.state={favorites:[],loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.favorites;return a?Object(O.jsx)(w,{}):Object(O.jsxs)("div",{"data-testid":"page-favorites",className:_e.a.container,children:[Object(O.jsx)(R,{}),Object(O.jsxs)("main",{className:_e.a.main,children:[Object(O.jsx)("h3",{className:_e.a.title,children:"Favoritas"}),n.map((function(t){return Object(O.jsx)(be,{song:t,trackName:t.trackName,previewUrl:t.previewUrl,trackId:t.trackId,favorite:n.some((function(e){return e.trackId===t.trackId})),updateFavorites:e.updateFavorites},t.trackId)}))]})]})}}]),a}(r.a.Component),Ne=a(17),ke=a.n(Ne),Ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:a=t.sent,e.setState({user:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.state={user:{},loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.user,a=t.name,n=t.email,r=t.image,s=t.description,i=e.loading;return Object(O.jsxs)("div",{"data-testid":"page-profile",className:ke.a.main,children:[Object(O.jsx)(R,{}),i?Object(O.jsx)(w,{}):Object(O.jsxs)("main",{className:ke.a.profile,children:[Object(O.jsxs)("div",{className:ke.a.edit,children:[r?Object(O.jsx)("img",{src:r,alt:a,"data-testid":"profile-image",className:ke.a.image}):Object(O.jsx)(M.a,{className:ke.a.profile_image}),Object(O.jsx)(d.b,{to:"/profile/edit",children:"Editar perfil"})]}),Object(O.jsxs)("div",{className:ke.a.infoContainer,children:[Object(O.jsx)("span",{children:"Nome:"}),Object(O.jsx)("p",{children:a}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{children:"E-mail:"}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{children:"Descri\xe7\xe3o:"}),Object(O.jsx)("p",{children:s}),Object(O.jsx)("hr",{})]})]})]})}}]),a}(r.a.Component),Ie=a(22),we=a(32),Se=a.n(we),ye=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=Object(p.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:a=t.sent,e.setState({user:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var a=t.target,n=e.state.user;e.setState({user:Object(U.a)(Object(U.a)({},n),{},Object(Ie.a)({},a.name,a.value))})},e.handleClick=function(){var t,a=e.state.user;t=a,new Promise((function(e){P(Object(U.a)({},t)),D("OK")(e)})),e.props.history.push("/profile")},e.state={user:{},loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.user,a=e.user,n=a.name,r=a.email,s=a.image,i=a.description,c=e.loading;return Object(O.jsxs)("div",{"data-testid":"page-profile-edit",className:Se.a.main,children:[Object(O.jsx)(R,{}),c?Object(O.jsx)(w,{}):Object(O.jsxs)("form",{className:Se.a.form,children:[Object(O.jsx)("p",{children:"Edite Seu Perfil"}),Object(O.jsx)(k,{testId:"edit-input-name",value:n,type:"text",text:"Nome:",name:"name",handleOnChange:this.handleChange,placeholder:"usu\xe1rio"}),Object(O.jsx)(k,{testId:"edit-input-email",value:r,type:"text",text:"E-mail:",name:"email",handleOnChange:this.handleChange,placeholder:"usuario@usuario.com.br"}),Object(O.jsx)(k,{testId:"edit-input-description",value:i,type:"text",text:"Descri\xe7\xe3o:",name:"description",handleOnChange:this.handleChange,placeholder:"Sobre mim"}),Object(O.jsx)(k,{testId:"edit-input-image",value:s,type:"text",text:"Imagem:",name:"image",handleOnChange:this.handleChange,placeholder:"Url da imagem"}),Object(O.jsx)(x,{testId:"edit-button-save",text:"Salvar",disabled:Object.values(t).some((function(e){return""===e})),handleClick:this.handleClick})]})]})}}]),a}(r.a.Component);var Fe=function(){return Object(O.jsx)("div",{"data-testid":"page-not-found",children:"Not found page"})},Ue=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(d.a,{children:Object(O.jsx)("main",{className:"main",children:Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",component:J}),Object(O.jsx)(m.a,{path:"/search",component:$}),Object(O.jsx)(m.a,{path:"/album/:id",component:ve}),Object(O.jsx)(m.a,{path:"/favorites",component:ge}),Object(O.jsx)(m.a,{path:"/profile/edit",component:ye}),Object(O.jsx)(m.a,{path:"/profile",component:Ce}),Object(O.jsx)(m.a,{path:"*",component:Fe})]})})})}}]),a}(r.a.Component),Ae=Ue;i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Ae,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0b2beced.chunk.js.map