(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),i=n.n(a),o=n(16),c=n.n(o),r=(n(23),n(3)),l=n(4),u=n(6),d=n(5),v=n(17),h=n.n(v),p=(n(41),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={title:s.props.contents.title,release_date:s.props.contents.release_date,poster_path:s.props.contents.poster_path},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"movieContainer",children:[Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+this.state.poster_path,className:"poster"}),Object(s.jsx)("div",{className:"movieInfo",children:Object(s.jsxs)("h2",{children:[this.state.title," (",this.state.release_date,")"]})})]})}}]),n}(i.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={movies:[]},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"loadMovies",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").then((function(t){e.setState({movies:t.data.results})}))}},{key:"voteAverage",value:function(e){console.log(this.state.movies[e].vote_average)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("marquee",{class:"GeneratedMarquee",direction:"left",scrollamount:"50",behavior:"scroll",children:"CHECK OUT THESE MOVIES!!"}),Object(s.jsx)("div",{className:"bigContainer",children:this.state.movies.map((function(e){return Object(s.jsx)(p,{contents:e})}))})]})}}]),n}(i.a.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),j()}},[[42,1,2]]]);
//# sourceMappingURL=main.d6c44c63.chunk.js.map