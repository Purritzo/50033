(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[5208],{55208:(e,n,t)=>{e=t.nmd(e),ace.define("ace/ext/searchbox-css",["require","exports","module"],(function(e,n,t){t.exports='\n\n/* ------------------------------------------------------------------------------------------\n * Editor Search Form\n * --------------------------------------------------------------------------------------- */\n.ace_search {\n    background-color: #ddd;\n    color: #666;\n    border: 1px solid #cbcbcb;\n    border-top: 0 none;\n    overflow: hidden;\n    margin: 0;\n    padding: 4px 6px 0 4px;\n    position: absolute;\n    top: 0;\n    z-index: 99;\n    white-space: normal;\n}\n.ace_search.left {\n    border-left: 0 none;\n    border-radius: 0px 0px 5px 0px;\n    left: 0;\n}\n.ace_search.right {\n    border-radius: 0px 0px 0px 5px;\n    border-right: 0 none;\n    right: 0;\n}\n\n.ace_search_form, .ace_replace_form {\n    margin: 0 20px 4px 0;\n    overflow: hidden;\n    line-height: 1.9;\n}\n.ace_replace_form {\n    margin-right: 0;\n}\n.ace_search_form.ace_nomatch {\n    outline: 1px solid red;\n}\n\n.ace_search_field {\n    border-radius: 3px 0 0 3px;\n    background-color: white;\n    color: black;\n    border: 1px solid #cbcbcb;\n    border-right: 0 none;\n    outline: 0;\n    padding: 0;\n    font-size: inherit;\n    margin: 0;\n    line-height: inherit;\n    padding: 0 6px;\n    min-width: 17em;\n    vertical-align: top;\n    min-height: 1.8em;\n    box-sizing: content-box;\n}\n.ace_searchbtn {\n    border: 1px solid #cbcbcb;\n    line-height: inherit;\n    display: inline-block;\n    padding: 0 6px;\n    background: #fff;\n    border-right: 0 none;\n    border-left: 1px solid #dcdcdc;\n    cursor: pointer;\n    margin: 0;\n    position: relative;\n    color: #666;\n}\n.ace_searchbtn:last-child {\n    border-radius: 0 3px 3px 0;\n    border-right: 1px solid #cbcbcb;\n}\n.ace_searchbtn:disabled {\n    background: none;\n    cursor: default;\n}\n.ace_searchbtn:hover {\n    background-color: #eef1f6;\n}\n.ace_searchbtn.prev, .ace_searchbtn.next {\n     padding: 0px 0.7em\n}\n.ace_searchbtn.prev:after, .ace_searchbtn.next:after {\n     content: "";\n     border: solid 2px #888;\n     width: 0.5em;\n     height: 0.5em;\n     border-width:  2px 0 0 2px;\n     display:inline-block;\n     transform: rotate(-45deg);\n}\n.ace_searchbtn.next:after {\n     border-width: 0 2px 2px 0 ;\n}\n.ace_searchbtn_close {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;\n    border-radius: 50%;\n    border: 0 none;\n    color: #656565;\n    cursor: pointer;\n    font: 16px/16px Arial;\n    padding: 0;\n    height: 14px;\n    width: 14px;\n    top: 9px;\n    right: 7px;\n    position: absolute;\n}\n.ace_searchbtn_close:hover {\n    background-color: #656565;\n    background-position: 50% 100%;\n    color: white;\n}\n\n.ace_button {\n    margin-left: 2px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden;\n    opacity: 0.7;\n    border: 1px solid rgba(100,100,100,0.23);\n    padding: 1px;\n    box-sizing:    border-box!important;\n    color: black;\n}\n\n.ace_button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_button:active {\n    background-color: #ddd;\n}\n\n.ace_button.checked {\n    border-color: #3399ff;\n    opacity:1;\n}\n\n.ace_search_options{\n    margin-bottom: 3px;\n    text-align: right;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    clear: both;\n}\n\n.ace_search_counter {\n    float: left;\n    font-family: arial;\n    padding: 0 8px;\n}'})),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],(function(e,n,t){"use strict";var i=e("../lib/dom"),c=e("../lib/lang"),s=e("../lib/event"),o=e("./searchbox-css"),a=e("../keyboard/hash_handler").HashHandler,r=e("../lib/keys"),h=e("../config").nls;i.importCssString(o,"ace_searchbox",!1);var l=function(){function e(e,n,t){var c=i.createElement("div");i.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:h("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"\u200b"],["span",{action:"findNext",class:"ace_searchbtn next"},"\u200b"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},h("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:h("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},h("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},h("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:h("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:h("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:h("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:h("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:h("Search In Selection")},"S"]]],c),this.element=c.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(e),i.importCssString(o,"ace_searchbox",e.container)}return e.prototype.setEditor=function(e){e.searchBox=this,e.renderer.scroller.appendChild(this.element),this.editor=e},e.prototype.setSession=function(e){this.searchRange=null,this.$syncOptions(!0)},e.prototype.$initElements=function(e){this.searchBox=e.querySelector(".ace_search_form"),this.replaceBox=e.querySelector(".ace_replace_form"),this.searchOption=e.querySelector("[action=searchInSelection]"),this.replaceOption=e.querySelector("[action=toggleReplace]"),this.regExpOption=e.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=e.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=e.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=e.querySelector(".ace_search_counter")},e.prototype.$init=function(){var e=this.element;this.$initElements(e);var n=this;s.addListener(e,"mousedown",(function(e){setTimeout((function(){n.activeInput.focus()}),0),s.stopPropagation(e)})),s.addListener(e,"click",(function(e){var t=(e.target||e.srcElement).getAttribute("action");t&&n[t]?n[t]():n.$searchBarKb.commands[t]&&n.$searchBarKb.commands[t].exec(n),s.stopPropagation(e)})),s.addCommandKeyListener(e,(function(e,t,i){var c=r.keyCodeToString(i),o=n.$searchBarKb.findKeyCommand(t,c);o&&o.exec&&(o.exec(n),s.stopEvent(e))})),this.$onChange=c.delayedCall((function(){n.find(!1,!1)})),s.addListener(this.searchInput,"input",(function(){n.$onChange.schedule(20)})),s.addListener(this.searchInput,"focus",(function(){n.activeInput=n.searchInput,n.searchInput.value&&n.highlight()})),s.addListener(this.replaceInput,"focus",(function(){n.activeInput=n.replaceInput,n.searchInput.value&&n.highlight()}))},e.prototype.setSearchRange=function(e){this.searchRange=e,e?this.searchRangeMarker=this.editor.session.addMarker(e,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},e.prototype.$syncOptions=function(e){i.setCssClass(this.replaceOption,"checked",this.searchRange),i.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",i.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),i.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),i.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var n=this.editor.getReadOnly();this.replaceOption.style.display=n?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!n?"":"none",this.find(!1,!1,e)},e.prototype.highlight=function(e){this.editor.session.highlight(e||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},e.prototype.find=function(e,n,t){var c=!this.editor.find(this.searchInput.value,{skipCurrent:e,backwards:n,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:t,range:this.searchRange})&&this.searchInput.value;i.setCssClass(this.searchBox,"ace_nomatch",c),this.editor._emit("findSearchBox",{match:!c}),this.highlight(),this.updateCounter()},e.prototype.updateCounter=function(){var e=this.editor,n=e.$search.$options.re,t=0,i=0;if(n){var c=this.searchRange?e.session.getTextRange(this.searchRange):e.getValue(),s=e.session.doc.positionToIndex(e.selection.anchor);this.searchRange&&(s-=e.session.doc.positionToIndex(this.searchRange.start));for(var o,a=n.lastIndex=0;(o=n.exec(c))&&(t++,(a=o.index)<=s&&i++,!(t>999))&&(o[0]||(n.lastIndex=a+=1,!(a>=c.length))););}this.searchCounter.textContent=h("$0 of $1",[i,t>999?"999+":t])},e.prototype.findNext=function(){this.find(!0,!1)},e.prototype.findPrev=function(){this.find(!0,!0)},e.prototype.findAll=function(){var e=!this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked})&&this.searchInput.value;i.setCssClass(this.searchBox,"ace_nomatch",e),this.editor._emit("findSearchBox",{match:!e}),this.highlight(),this.hide()},e.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},e.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},e.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},e.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},e.prototype.show=function(e,n){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=n,e&&(this.searchInput.value=e),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},e.prototype.isFocused=function(){var e=document.activeElement;return e==this.searchInput||e==this.replaceInput},e}(),p=new a;p.bindKeys({"Ctrl-f|Command-f":function(e){var n=e.isReplace=!e.isReplace;e.replaceBox.style.display=n?"":"none",e.replaceOption.checked=!1,e.$syncOptions(),e.searchInput.focus()},"Ctrl-H|Command-Option-F":function(e){e.editor.getReadOnly()||(e.replaceOption.checked=!0,e.$syncOptions(),e.replaceInput.focus())},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout((function(){e.hide()}))},Return:function(e){e.activeInput==e.replaceInput&&e.replace(),e.findNext()},"Shift-Return":function(e){e.activeInput==e.replaceInput&&e.replace(),e.findPrev()},"Alt-Return":function(e){e.activeInput==e.replaceInput&&e.replaceAll(),e.findAll()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}}),p.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked,e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked,e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked,e.$syncOptions()}},{name:"toggleReplace",exec:function(e){e.replaceOption.checked=!e.replaceOption.checked,e.$syncOptions()}},{name:"searchInSelection",exec:function(e){e.searchOption.checked=!e.searchRange,e.setSearchRange(e.searchOption.checked&&e.editor.getSelectionRange()),e.$syncOptions()}}]);var d=new a([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}]);l.prototype.$searchBarKb=p,l.prototype.$closeSearchBarKb=d,n.SearchBox=l,n.Search=function(e,n){(e.searchBox||new l(e)).show(e.session.getTextRange(),n)}})),ace.require(["ace/ext/searchbox"],(function(n){e&&(e.exports=n)}))}}]);