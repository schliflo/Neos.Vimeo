function arrayIncludes(e,t){return e.indexOf(t)!==-1}function toArray(e){return Array.prototype.slice.call(e)}function sortByDate(e){return e.getAttribute("data-release")}function sortVideoItemsByDate(e){return e.sort(function(e,t){return new Date(t.releaseTime)-new Date(e.releaseTime)}),e}function createVideoElementFromObject(e){var t=document.createElement("div"),i=document.createElement("a"),r=document.createElement("img"),n=document.createElement("img"),s=document.createElement("div"),o=document.createElement("span");return t.setAttribute("class",window.window.onedropVimeoGridData.itemClasses),t.setAttribute("data-album",JSON.stringify(e.albums)),t.setAttribute("data-release",e.releaseTime),t.setAttribute("data-title",e.title),i.setAttribute("href",e.link),i.setAttribute("class","item__inner embed-responsive embed-responsive-16by9"),r.setAttribute("src",e.thumbnail.link),r.setAttribute("width",e.thumbnail.width),r.setAttribute("height",e.thumbnail.height),r.setAttribute("alt",e.title),r.setAttribute("class","embed-responsive-item"),n.setAttribute("src",e.thumbnail.link),n.setAttribute("width",e.thumbnail.width),n.setAttribute("height",e.thumbnail.height),n.setAttribute("alt",e.title),n.setAttribute("class","embed-responsive-item hover-effect"),s.setAttribute("class","item-overlay"),o.setAttribute("class","title"),o.textContent=e.title,s.appendChild(o),i.appendChild(r),i.appendChild(n),i.appendChild(s),t.appendChild(i),t}function addVideoItems(e){for(var t=[],i=0;i<e;i++)if(window.window.onedropVimeoGridData.items.length>currentVideoItemCount+i){var r=createVideoElementFromObject(window.window.onedropVimeoGridData.items[currentVideoItemCount+i]);shuffleItemsContainer.appendChild(r),t.push(r)}else shuffleLoadMoreButton.classList.add("disabled");return currentVideoItemCount+=t.length,t}var Shuffle=window.shuffle,Viewport=window.Viewport,shuffleItemsContainer=document.querySelector("#vimeo-grid"),shuffleLoadMoreButton=document.querySelector("#loadmore"),currentVideoItemCount=0,OnedropVimeoGrid=function(e){this.albums=toArray(document.querySelectorAll("#vimeo-filters button")),this.shuffle=new Shuffle(e,{easing:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",itemSelector:".item"}),this.shuffle.sort({reverse:!0,by:sortByDate}),this.filters={albums:[]},this._bindEventListeners()};OnedropVimeoGrid.prototype._bindEventListeners=function(){this._onAlbumChange=this._handleAlbumChange.bind(this),this.albums.forEach(function(e){e.addEventListener("click",this._onAlbumChange)},this)},OnedropVimeoGrid.prototype._getCurrentAlbumFilters=function(){return this.albums.filter(function(e){return e.classList.contains("active")}).map(function(e){return e.getAttribute("data-value")})},OnedropVimeoGrid.prototype._handleAlbumChange=function(e){var t=e.currentTarget;t.classList.contains("active")?t.classList.remove("active"):(this.albums.forEach(function(e){e.classList.remove("active")}),"*"!==t.getAttribute("data-filter")&&t.classList.add("active")),this.filters.albums=this._getCurrentAlbumFilters(),this.filter()},OnedropVimeoGrid.prototype.filter=function(){this.hasActiveFilters()?this.shuffle.filter(this.itemPassesFilters.bind(this)):this.shuffle.filter(Shuffle.ALL_ITEMS)},OnedropVimeoGrid.prototype.hasActiveFilters=function(){return Object.keys(this.filters).some(function(e){return this.filters[e].length>0},this)},OnedropVimeoGrid.prototype.itemPassesFilters=function(e){var t=this.filters.albums,i=JSON.parse(e.getAttribute("data-album"));if(null!=t[0]&&t.length>0){for(var r=!1,n=0;n<i.length;n++)arrayIncludes(t,i[n].ID)&&(r=!0);return r}return!0},window.window.onedropVimeoGridData.items=sortVideoItemsByDate(window.window.onedropVimeoGridData.items),addVideoItems(9),window.onedropVimeoGrid=new OnedropVimeoGrid(shuffleItemsContainer),shuffleLoadMoreButton.addEventListener("click",function(e){e.preventDefault();var t=addVideoItems(9);window.onedropVimeoGrid.shuffle.add(t)});
//# sourceMappingURL=main.js.map
