(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(19),o=t.n(c),i=(t(37),t(38),t(10)),l=t(11),s=t(6),u=t(14),m=t(13),d=t(5),h=(t(39),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={active:!1},r.handleToggle=r.handleToggle.bind(Object(s.a)(r)),r}return Object(l.a)(t,[{key:"handleToggle",value:function(){var e=document.getElementById("menu__toggle");e.checked=!e.checked}},{key:"render",value:function(){return n.a.createElement("div",{id:"Header"},n.a.createElement("div",{className:"hamburger-menu"},n.a.createElement(d.b,{className:"logo_wrapper",to:"/"},n.a.createElement("div",{className:"logo_995px"},n.a.createElement("div",{className:"logo_img"}),n.a.createElement("h1",{className:"logo_text"},"The Lords Of The React "))),n.a.createElement("input",{id:"menu__toggle",type:"checkbox"}),n.a.createElement("label",{className:"menu__btn",htmlFor:"menu__toggle"},n.a.createElement("span",null)),n.a.createElement("div",{className:"menu__box"},n.a.createElement(d.b,{className:"header-item-wrapper",to:"/movies",onClick:this.handleToggle},n.a.createElement("div",{className:"menu__item"},"Movies")),n.a.createElement(d.b,{className:"header-item-wrapper",to:"/books",onClick:this.handleToggle},n.a.createElement("div",{className:"menu__item"},"Books")),n.a.createElement(d.b,{className:"header-item-wrapper",to:"/characters",onClick:this.handleToggle},n.a.createElement("div",{className:"menu__item"},"Characters")))))}}]),t}(n.a.Component)),p=t(12),g="GET_BOOKS_BY_ID_REQUEST",A="GET_BOOKS_BY_ID_SUCCESS",v="GET_BOOKS_BY_ID_FAIL",E="GET_MOVIES_BY_ID_REQUEST",b="GET_MOVIES_BY_ID_SUCCESS",f="GET_MOVIES_BY_ID_FAIL",N="GET_CHARACTERS_BY_ID_REQUEST",q="GET_CHARACTERS_BY_ID_SUCCESS",O="GET_CHARACTERS_BY_ID_FAIL",w="ADD_FILTER",C="GET_PARTICULAR_CHARACTER_BY_ID_REQUEST",B="GET_PARTICULAR_CHARACTER_BY_ID_SUCCESS",k="GET_PARTICULAR_CHARACTER_BY_ID_FAIL",y="SET_PAGINATION",j=function(e){return function(){return function(e){e({type:g}),fetch("https://the-one-api.dev/v2/book").then((function(e){return e.json()})).then((function(a){a.error&&e({type:v,payload:a.error}),e({type:A,payload:a})})).catch((function(a){e({type:v,payload:a})}))}(e)}};var F=function(e){return{BookItem:e.item.map((function(e){return n.a.createElement("div",null,n.a.createElement("p",null,"The book is - ",e.name))}))}},I=(t(45),t.p+"static/media/first_bookjpg.ae552076.jpg"),H=t.p+"static/media/second_book.d4e01794.jpg",L=t.p+"static/media/book_3.7dfc1152.jpg",D=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={search:null,book1:n.a.createElement("img",{className:"book-img_img",src:I,alt:""}),book2:n.a.createElement("img",{className:"book-img_img",src:H,alt:""}),book3:n.a.createElement("img",{className:"book-img_img",src:L,alt:""})},r.showBooks=r.showBooks.bind(Object(s.a)(r)),r.showParticularBook=r.showParticularBook.bind(Object(s.a)(r)),r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getBookInfo()}},{key:"showParticularBook",value:function(){return n.a.createElement(F,{item:this.props.books.docs})}},{key:"searchItem",value:function(e){var a=e.target.value;this.setState({search:a})}},{key:"showBooks",value:function(){var e=this;if(this.props.books.docs)return this.props.books.docs.filter((function(a){return null==e.state.search||a.name.toLowerCase().includes(e.state.search.toLowerCase())?a:void 0})).map((function(a){return n.a.createElement("div",{key:a._id,className:"book"},"The Fellowship Of The Ring"===a.name&&n.a.createElement("div",null,e.state.book1),"The Two Towers"===a.name&&n.a.createElement("div",null,e.state.book2),"The Return Of The King"===a.name&&n.a.createElement("div",null,e.state.book3),n.a.createElement("h2",{className:"book_title"},a.name))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"book-wrapper"},n.a.createElement("div",{className:"book-wrapper"},this.showBooks()))}}]),t}(n.a.Component),P=Object(p.b)((function(e){return{books:e.books.books.data}}),(function(e){return{getBookInfo:j(e)}}))((function(e){var a=e.books,t=e.getBookInfo;return n.a.createElement(D,{books:a,getBookInfo:t})})),S=function(e){return function(){return function(e){e({type:E}),fetch("https://the-one-api.dev/v2/movie",{headers:{Authorization:"Bearer TNdpyFs14J2bWMz53NFH"}}).then((function(e){return e.json()})).then((function(a){a.error&&e({type:f,payload:a.error}),e({type:b,payload:a})})).catch((function(a){e({type:f,payload:a})}))}(e)}},V=(t(46),t.p+"static/media/1.2f6df01e.jpg"),T=t.p+"static/media/2.69bc53fd.jpg",R=t.p+"static/media/3.c5a13e45.jpg",G=t.p+"static/media/H1.370bca13.jpg",M=t.p+"static/media/H2.99c51321.jpg",Y=t.p+"static/media/h3.d143601e.jpeg",_=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={search:null,img:n.a.createElement("img",{className:"movie-img_img",src:V,alt:""}),img2:n.a.createElement("img",{className:"movie-img_img",src:T,alt:""}),img3:n.a.createElement("img",{className:"movie-img_img",src:R,alt:""}),img4:n.a.createElement("img",{className:"movie-img_img",src:G,alt:""}),img5:n.a.createElement("img",{className:"movie-img_img",src:M,alt:""}),img6:n.a.createElement("img",{className:"movie-img_img",src:Y,alt:""})},r.showFilms=r.showFilms.bind(Object(s.a)(r)),r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getFilmsInfo()}},{key:"searchItem",value:function(e){var a=e.target.value;this.setState({search:a})}},{key:"handleScoreFilter",value:function(e){var a=e.target.value;e.target.checked?this.props.score.addScoreFilter(a):this.props.score.removeScoreFilter(a)}},{key:"showFilms",value:function(){var e=this;if(this.props.films.docs)return this.props.films.docs.filter((function(a){return null==e.state.search?a:a.name.toLowerCase().includes(e.state.search.toLowerCase())?a.name.length>0?a:alert(1):void 0})).map((function(a){if("The Lord of the Rings Series"!==a.name&&"The Hobbit Series"!==a.name)return n.a.createElement("div",{key:a._id,className:"film"},n.a.createElement("div",{className:"movie-img"},"The Fellowship of the Ring"===a.name&&n.a.createElement("div",null,e.state.img),"The Two Towers "===a.name&&n.a.createElement("div",null,e.state.img2),"The Return of the King"===a.name&&n.a.createElement("div",null,e.state.img3),"The Unexpected Journey"===a.name&&n.a.createElement("div",null,e.state.img4),"The Desolation of Smaug"===a.name&&n.a.createElement("div",null,e.state.img5),"The Battle of the Five Armies"===a.name&&n.a.createElement("div",null,e.state.img6),n.a.createElement("div",{className:"movie-score","data-tooltip":"Rotten Tomatoes Score"},n.a.createElement("p",null,a.rottenTomatesScore))),n.a.createElement("div",{className:"movie-info-wrapper"},n.a.createElement("h2",{className:"movie-title"},a.name),n.a.createElement("div",{className:"movie-budget"},n.a.createElement("p",null,n.a.createElement("span",null,"Budget:")," $",a.budgetInMillions," MM")),n.a.createElement("div",{className:"movie-revenue"},n.a.createElement("p",null,n.a.createElement("span",null,"Revenue:")," $",a.boxOfficeRevenueInMillions," MM")),n.a.createElement("div",{className:"movie-awards"},n.a.createElement("p",null,n.a.createElement("span",null,"Academy Awards Won:")," ",a.academyAwardWins))))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"film-Container"},n.a.createElement("div",{className:"search-filter-wrapper search-filter-films"},n.a.createElement("input",{className:"search-filter",type:"text",placeholder:"Search by title...",onChange:function(a){return e.searchItem(a)}})),n.a.createElement("div",{className:"film-wrapper"},this.showFilms()))}}]),t}(n.a.Component),W=Object(p.b)((function(e){return{films:e.films.films.data,search:e.films.films.search}}),(function(e){return{getFilmsInfo:S(e)}}))((function(e){var a=e.films,t=e.getFilmsInfo,r=e.search;return n.a.createElement(_,{films:a,getFilmsInfo:t,search:r})})),U=t(1),X=function(e,a){e({type:C}),function(e){return fetch("https://the-one-api.dev/v2/character/".concat(e),{headers:{Authorization:"Bearer TNdpyFs14J2bWMz53NFH"}})}(a).then((function(e){return e.json()})).then((function(a){a.error&&e({type:k,payload:a.error}),e({type:B,payload:a})})).catch((function(a){e({type:k,payload:a})}))},Q=function(e){return function(){return function(e){e({type:N}),fetch("https://the-one-api.dev/v2/character",{headers:{Authorization:"Bearer TNdpyFs14J2bWMz53NFH"}}).then((function(e){return e.json()})).then((function(a){a.error&&e({type:O,payload:a.error}),e({type:q,payload:a})})).catch((function(a){e({type:O,payload:a})}))}(e)}},z=function(e){return function(a){return X(e,a)}},Z=function(e){return function(a){return function(e,a){e({type:y,payload:a})}(e,a)}},J=t(23),K=t(4),x=(t(47),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).renderParticularHero=r.renderParticularHero.bind(Object(s.a)(r)),r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getParticularHeroInfo(this.props.match.params.id)}},{key:"renderParticularHero",value:function(){var e=this.props.oneHero;if(e)return console.log(e),n.a.createElement("div",null,e.map((function(e){return n.a.createElement("div",{key:e._id},n.a.createElement("div",{className:"particular-hero-wrapper"},e.name&&n.a.createElement("p",{className:"particular-hero-name"},e.name),n.a.createElement("div",{className:"particular-hero-text"},e.birth&&"NaN"!==e.birth&&n.a.createElement("p",null,n.a.createElement("span",null,"Birth:")," ",e.birth),e.death&&"NaN"!==e.death&&n.a.createElement("p",null,n.a.createElement("span",null,"Death:")," ",e.death),e.gender&&"NaN"!==e.gender&&n.a.createElement("p",null,n.a.createElement("span",null,"Gender:")," ",e.gender),e.hair&&"NaN"!==e.hair&&n.a.createElement("p",null,n.a.createElement("span",null,"Hair:")," ",e.hair),e.height&&"NaN"!==e.height&&n.a.createElement("p",null,n.a.createElement("span",null,"Height:")," ",e.height),e.race&&"NaN"!==e.race&&n.a.createElement("p",null,n.a.createElement("span",null,"Race:")," ",e.race),e.realm&&"NaN"!==e.realm&&n.a.createElement("p",null,n.a.createElement("span",null,"Realm:")," ",e.realm),e.spouse&&"NaN"!==e.spouse&&n.a.createElement("p",null,n.a.createElement("span",null,"Spouse:")," ",e.spouse))),e.wikiUrl&&n.a.createElement("div",{className:"particular-hero-link"},n.a.createElement("p",null,n.a.createElement("a",{href:e.wikiUrl,target:"_blank"},"LOTR Wiki link"))))})))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ParticularHero_conatiner "},n.a.createElement("div",{className:"ParticularHero_img box_left"}),n.a.createElement("div",{className:"ParticularHero_info box_right"},this.renderParticularHero()))}}]),t}(n.a.Component)),$=Object(p.b)((function(e){return{oneHero:e.characters.particularHero.data.docs}}))(x),ee=(t(48),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).heroesPerPage=25,r}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=new Array(Math.ceil(this.props.heroesAmount/this.heroesPerPage)).fill(0).map((function(e,a){return a+1})),t=this.props.currentPage>a.length-2?this.props.currentPage-(5-(a.length-this.props.currentPage)):this.props.currentPage-2;t<0&&(t=0);var r=this.props.currentPage<2?this.props.currentPage+(5-this.props.currentPage):this.props.currentPage+3,c=a.slice(t||0,r);return n.a.createElement("div",{className:"pagination"},n.a.createElement("span",{onClick:function(){return e.props.setCurrentPage(0)}},"\xab"),c.map((function(a,t,r){return n.a.createElement("span",{className:e.props.currentPage===a-1?"pagination-item-active":"",onClick:function(){return e.props.setCurrentPage(a-1)},key:a},a)})),n.a.createElement("span",{onClick:function(){return e.props.setCurrentPage(a.length-1)}},"\xbb"))}}]),t}(n.a.Component)),ae=Object(p.b)((function(e){return{heroesAmount:e.characters.heroes.filteredHeroes.total,currentPage:e.characters.heroes.currentPage}}),(function(e){return{setCurrentPage:Z(e)}}))(ee),te=(t(49),t.p+"static/media/dwarf.182e2c70.jpg"),re=t.p+"static/media/hobbit.8860e09e.png",ne=t.p+"static/media/orc.3501060e.png",ce=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={search:null,races:[],activeFilters:{}},r.showHeroes=r.showHeroes.bind(Object(s.a)(r)),r.handleChange=r.handleChange.bind(Object(s.a)(r)),r.getUniqueValues=r.getUniqueValues.bind(Object(s.a)(r)),r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesInfo()}},{key:"handleChange",value:function(e,a){var t=this,r=Object(U.a)({},this.state);"all"===a?delete r.activeFilters[e]:r.activeFilters=Object(U.a)(Object(U.a)({},this.state.activeFilters),{},Object(J.a)({},e,a)),this.setState(r,(function(){t.props.handleChange(t.state.activeFilters)}))}},{key:"searchItem",value:function(e){var a=e.target.value;this.setState({search:a})}},{key:"getUniqueValues",value:function(e,a){var t=[];return e.forEach((function(e){var r=!0;t.forEach((function(t){t&&e[a]&&t.length&&e[a].length&&"NaN"!==e[a]&&t.toLowerCase()!==e[a].toLowerCase()||(r=!1)})),r&&t.push(e[a])})),t}},{key:"showHeroes",value:function(){var e=this,a=this.props.filteredHeroes.slice(25*this.props.currentPage,25*this.props.currentPage+25);if(this.props.filteredHeroes){var t=this.getUniqueValues(this.props.heroes,"gender"),r=this.getUniqueValues(this.props.heroes,"race");return n.a.createElement("div",{className:"heroes_Conatiner"},n.a.createElement("div",{className:"heroes-filter-wrapper"},n.a.createElement("div",{className:"heroes-filter"},n.a.createElement("select",{id:"race",name:"race",value:this.state.activeFilters.race,onChange:function(a){e.handleChange("race",a.target.value)}},n.a.createElement("option",{value:"all"},"Filter by race"),r.map((function(e){return n.a.createElement("option",{key:e},e)}))),n.a.createElement("select",{id:"race",name:"race",value:this.state.activeFilters.gender,onChange:function(a){e.handleChange("gender",a.target.value)}},n.a.createElement("option",{value:"all"},"Filter by gender"),t.map((function(e){return n.a.createElement("option",{key:e},e)}))),n.a.createElement("div",{className:" search-filter-heroes"},n.a.createElement("input",{className:"search-filter",type:"text",placeholder:"Search by title...",onChange:function(a){return e.searchItem(a)}})))),n.a.createElement("p",{className:"heroes_kostyl"},"qqqqqqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqq qqqqqqqqqq"),n.a.createElement("div",{className:"heroes_wrapper"},a.filter((function(a){return null==e.state.search||a.name.toLowerCase().includes(e.state.search.toLowerCase())?a:void 0})).map((function(e){return n.a.createElement(d.b,{to:"/characters/".concat(e._id),key:e._id},n.a.createElement("div",{className:"heroes_box"},("Human"===e.race||"Men"===e.race||"Men,Wraith"===e.race)&&n.a.createElement("div",null,n.a.createElement("img",{className:"heroes_img",src:"data:image/png;base64,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"})),("Elf"===e.race||"Elves"===e.race)&&n.a.createElement("div",null,n.a.createElement("img",{className:"heroes_img",src:"data:image/png;base64,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"})),("Dwarf"===e.race||"Dwarves"===e.race)&&n.a.createElement("div",null,n.a.createElement("img",{className:"heroes_img",src:te})),("Hobbit"===e.race||"Hobbits"===e.race)&&n.a.createElement("div",null,n.a.createElement("img",{className:"heroes_img",src:re})),("Orcs"===e.race||"Orc"===e.race||"Uruk-hai"===e.race||"Uruk-hai,Orc"===e.race)&&n.a.createElement("div",null,n.a.createElement("img",{className:"heroes_img",src:ne})),n.a.createElement("h2",{className:"heroes_name"},e.name),n.a.createElement("p",{className:"heroes_race"},e.race),n.a.createElement("p",{className:"heroes_gender"},e.gender)))}))),n.a.createElement("div",null," ",n.a.createElement(ae,null)))}}},{key:"render",value:function(){var e=this;return n.a.createElement(K.c,null,n.a.createElement(K.a,{exact:!0,path:"/characters"},n.a.createElement("div",{className:"book-wrapper"},n.a.createElement("div",{className:"book-wrapper"},this.props.heroes.length?this.showHeroes():n.a.createElement("h2",{className:"heroes-preloader"},"Loading...")))),n.a.createElement(K.a,{path:"/characters/:id",render:function(a){return n.a.createElement($,Object.assign({},a,{getParticularHeroInfo:e.props.getParticularHeroInfo,heroes:e.props.filteredHeroes}))}}))}}]),t}(n.a.Component),oe=Object(p.b)((function(e){return{filteredHeroes:e.characters.heroes.filteredHeroes.docs,heroes:e.characters.heroes.data.docs,currentPage:e.characters.heroes.currentPage}}),(function(e){return{getHeroesInfo:Q(e),handleChange:function(a){return e((t=a,function(e,a){var r=Object(U.a)({},a().characters.heroes.data);Object.keys(t).length&&(r.docs=r.docs.filter((function(e){var a=!0;for(var r in t)if(e[r]!==t[r]){a=!1;break}return a}))),r.total=r.docs.length,e({type:w,payload:r})}));var t},getParticularHeroInfo:z(e)}}))((function(e){var a=e.heroes,t=e.getHeroesInfo,r=e.handleChange,c=e.filteredHeroes,o=e.getParticularHeroInfo,i=e.currentPage;return n.a.createElement(ce,{heroes:a,getHeroesInfo:t,handleChange:r,filteredHeroes:c,getParticularHeroInfo:o,currentPage:i})})),ie=(t(50),t(51),t(17)),le=t(30),se=t(21),ue=t.p+"static/media/CV_Yuri_Smal.3dd4c075.pdf",me=t.p+"static/media/CV_Vitalii_Yakovyshyn.b28a7eaf.pdf";var de=function(e){return n.a.createElement(K.a,{exact:!0,path:"/about"},n.a.createElement("div",{className:"about-container"},n.a.createElement("h1",{className:"about-title"},"Who we are?"),n.a.createElement("div",{className:"about-dude-wrapper"},n.a.createElement("div",{className:"about-dude about-yurii yurii_left"},n.a.createElement("div",{className:"about-dude-img about-dude-img-yurii"}),n.a.createElement("div",{className:"about-dude-info"},n.a.createElement("h2",{className:"about-dude-name"},"Yurii Smal'"),n.a.createElement("div",{className:"about-dude-social-container"},n.a.createElement("a",{className:"about-dude-social-wrapper about-dude-social-btn",href:"https://www.linkedin.com/in/yurii-smal-74570319a/",target:"_blank"},n.a.createElement(ie.a,{className:"about-fa-icon",icon:le.a}),n.a.createElement("p",null,"Linkedin")),n.a.createElement("a",{className:"about-dude-social-wrapper about-dude-social-btn",target:"_blank",href:ue},n.a.createElement(ie.a,{className:"about-fa-icon",icon:se.b}),"CV")))),n.a.createElement("div",{className:"about-dude about-vito vito_right"},n.a.createElement("div",{className:"about-dude-img about-dude-img-vito"}),n.a.createElement("div",{className:"about-dude-info"},n.a.createElement("h2",{className:"about-dude-name"},"Vitalii Yakovyshyn"),n.a.createElement("div",{className:"about-dude-social-container"},n.a.createElement("a",{className:"about-dude-social-wrapper about-dude-social-btn",href:"https://www.linkedin.com/in/%D0%B2%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9-%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%88%D0%B8%D0%BD-b211981ab/",target:"_blank"},n.a.createElement(ie.a,{className:"about-fa-icon",icon:le.a}),n.a.createElement("p",null,"Linkedin")),n.a.createElement("a",{className:"about-dude-social-wrapper about-dude-social-btn",target:"_blank",href:me},n.a.createElement(ie.a,{className:"about-fa-icon",icon:se.b}),"CV")))))))};var he=function(e){return n.a.createElement("div",{className:"Main-Container"},n.a.createElement("div",{className:"Main-Container_wraper"},n.a.createElement(K.c,null,n.a.createElement(K.a,{path:"/books",component:P}),n.a.createElement(K.a,{path:"/movies",component:W}),n.a.createElement(K.a,{path:"/characters",component:oe}),n.a.createElement(K.a,{exact:!0,path:"/about",component:de}),n.a.createElement("div",{className:"Main-Container_section"},n.a.createElement("h1",{className:"Main-Container_title"},"Welcome to the ",n.a.createElement("span",null,"Lords of React")," (no) website"),n.a.createElement("p",{className:"Main-Container_text"},"Welcome to our React project. Use the menu to navigate to the needed section"),n.a.createElement(d.b,{className:"about_us_link",to:"/about"},n.a.createElement(ie.a,{className:"about-fa-icon",icon:se.a}),"About us")))))};t(55);var pe=function(){return n.a.createElement("div",{className:"Footer"},n.a.createElement("div",{className:"Footer_container"},n.a.createElement("div",{className:"Footer_links"},n.a.createElement(d.b,{className:"Footer_link",to:"/"},"Home"),n.a.createElement(d.b,{className:"Footer_link",to:"/about"},"About us"),n.a.createElement("a",{className:"Footer_link",href:"https://the-one-api.dev/",target:"_blank"},"API")),n.a.createElement("div",{className:"Footer_copyright"},n.a.createElement("p",{className:"Footer_copyright_text"},"MADE WITH LOVE BY YURII SMAL' & VITALII YAKOVYSHYN"),n.a.createElement("p",{className:"Footer_copyright_text"},"2020"))))};var ge=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("section",null," ",n.a.createElement(h,null)),n.a.createElement("section",null," ",n.a.createElement(he,null)),n.a.createElement("section",null," ",n.a.createElement(pe,null)))},Ae=t(16),ve=(t(56),t(33)),Ee={books:{isLoading:!1,error:!1,data:[]}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(U.a)(Object(U.a)({},e),{},{books:{isLoading:!0,error:!1,data:!1}});case A:return Object(U.a)(Object(U.a)({},e),{},{books:{isLoading:!1,error:!1,data:a.payload}});case v:return Object(U.a)(Object(U.a)({},e),{},{books:{isLoading:!1,error:a.payload,data:!1}});default:return e}},fe={films:{isLoading:!1,error:!1,data:!1}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(U.a)(Object(U.a)({},e),{},{films:{isLoading:!0,error:!1,data:!1}});case b:return Object(U.a)(Object(U.a)({},e),{},{films:{isLoading:!1,error:!1,data:a.payload}});case f:return Object(U.a)(Object(U.a)({},e),{},{films:{isLoading:!1,error:a.payload,data:!1}});default:return e}},qe=(t(57),{heroes:{isLoading:!1,error:!1,data:{docs:[]},filteredHeroes:{docs:[]},currentPage:0},particularHero:{isLoading:!1,error:!1,data:!1}}),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(U.a)(Object(U.a)({},e),{},{heroes:Object(U.a)(Object(U.a)({},e.heroes),{},{isLoading:!0,error:!1})});case q:return Object(U.a)(Object(U.a)({},e),{},{heroes:{isLoading:!1,error:!1,data:a.payload,filteredHeroes:a.payload,currentPage:e.heroes.currentPage}});case O:return Object(U.a)(Object(U.a)({},e),{},{heroes:{isLoading:!1,error:a.payload,data:!1}});case C:return Object(U.a)(Object(U.a)({},e),{},{particularHero:{isLoading:!0,error:!1,data:!1}});case B:return Object(U.a)(Object(U.a)({},e),{},{particularHero:{isLoading:!1,error:!1,data:a.payload}});case k:return Object(U.a)(Object(U.a)({},e),{},{particularHero:{isLoading:!1,error:a.payload,data:!1}});case w:return Object(U.a)(Object(U.a)({},e),{},{heroes:{isLoading:!1,error:!1,data:e.heroes.data,filteredHeroes:a.payload,currentPage:e.heroes.currentPage}});case y:return Object(U.a)(Object(U.a)({},e),{},{heroes:{isLoading:!1,error:!1,data:e.heroes.data,filteredHeroes:e.heroes.filteredHeroes,currentPage:a.payload}});default:return e}},we=Object(Ae.c)({books:be,films:Ne,characters:Oe}),Ce=[ve.a];var Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,ke=Object(Ae.e)(we,Be(Ae.a.apply(void 0,Ce)));o.a.render(n.a.createElement(p.a,{store:ke},n.a.createElement(d.a,null,n.a.createElement(ge,null))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.44ebd04f.chunk.js.map