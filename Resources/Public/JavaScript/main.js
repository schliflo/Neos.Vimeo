function arrayIncludes(t,e){return t.indexOf(e)!==-1}function toArray(t){return Array.prototype.slice.call(t)}function sortByDate(t){return t.getAttribute("data-release")}var Shuffle=window.shuffle,Demo=function(t){this.albums=toArray(document.querySelectorAll("#vimeo-filters button")),this.shuffle=new Shuffle(t,{easing:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",itemSelector:".item"}),this.shuffle.sort({reverse:!0,by:sortByDate}),this.filters={albums:[]},this._bindEventListeners()};Demo.prototype._bindEventListeners=function(){this._onAlbumChange=this._handleAlbumChange.bind(this),this.albums.forEach(function(t){t.addEventListener("click",this._onAlbumChange)},this)},Demo.prototype._getCurrentAlbumFilters=function(){return this.albums.filter(function(t){return t.classList.contains("active")}).map(function(t){return t.getAttribute("data-value")})},Demo.prototype._handleAlbumChange=function(t){var e=t.currentTarget;e.classList.contains("active")?e.classList.remove("active"):(this.albums.forEach(function(t){t.classList.remove("active")}),e.classList.add("active")),this.filters.albums=this._getCurrentAlbumFilters(),this.filter()},Demo.prototype.filter=function(){this.hasActiveFilters()?this.shuffle.filter(this.itemPassesFilters.bind(this)):this.shuffle.filter(Shuffle.ALL_ITEMS)},Demo.prototype.hasActiveFilters=function(){return Object.keys(this.filters).some(function(t){return this.filters[t].length>0},this)},Demo.prototype.itemPassesFilters=function(t){var e=this.filters.albums,i=t.getAttribute("data-album");return!(null!=e[0]&&e.length>0&&!arrayIncludes(e,i))},window.demo=new Demo(document.querySelector("#vimeo-grid"));
//# sourceMappingURL=main.js.map
