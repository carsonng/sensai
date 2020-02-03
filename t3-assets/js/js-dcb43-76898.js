

/*===============================
/media/system/js/core.js
================================================================================*/;
Joomla=window.Joomla||{},Joomla.editors=Joomla.editors||{},Joomla.editors.instances=Joomla.editors.instances||{},function(e,t){"use strict";e.submitform=function(e,o,n){o||(o=t.getElementById("adminForm")),e&&(o.task.value=e),o.noValidate=!n,n?o.hasAttribute("novalidate")&&o.removeAttribute("novalidate"):o.setAttribute("novalidate","");var r=t.createElement("input");r.style.display="none",r.type="submit",o.appendChild(r).click(),o.removeChild(r)},e.submitbutton=function(t){e.submitform(t)},e.Text={strings:{},_:function(t,o){var n=e.getOptions("joomla.jtext");return n&&(this.load(n),e.loadOptions({"joomla.jtext":null})),o=void 0===o?"":o,t=t.toUpperCase(),void 0!==this.strings[t]?this.strings[t]:o},load:function(e){for(var t in e)e.hasOwnProperty(t)&&(this.strings[t.toUpperCase()]=e[t]);return this}},e.JText=e.Text,e.optionsStorage=e.optionsStorage||null,e.getOptions=function(t,o){return e.optionsStorage||e.loadOptions(),void 0!==e.optionsStorage[t]?e.optionsStorage[t]:o},e.loadOptions=function(o){if(!o){for(var n,r,a,i=t.querySelectorAll(".joomla-script-options.new"),s=0,l=0,d=i.length;l<d;l++)n=(r=i[l]).text||r.textContent,(a=JSON.parse(n))&&(e.loadOptions(a),s++),r.className=r.className.replace(" new"," loaded");if(s)return}if(e.optionsStorage){if(o)for(var c in o)o.hasOwnProperty(c)&&(e.optionsStorage[c]=o[c])}else e.optionsStorage=o||{}},e.replaceTokens=function(e){if(/^[0-9A-F]{32}$/i.test(e)){var o,n,r,a=t.getElementsByTagName("input");for(o=0,r=a.length;o<r;o++)"hidden"==(n=a[o]).type&&"1"==n.value&&32==n.name.length&&(n.name=e)}},e.isEmail=function(e){console.warn("Joomla.isEmail() is deprecated, use the formvalidator instead");return/^[\w.!#$%&‚Äô*+\/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,})+$/i.test(e)},e.checkAll=function(e,t){if(!e.form)return!1;t=t||"cb";var o,n,r,a=0;for(o=0,r=e.form.elements.length;o<r;o++)(n=e.form.elements[o]).type==e.type&&0===n.id.indexOf(t)&&(n.checked=e.checked,a+=n.checked?1:0);return e.form.boxchecked&&(e.form.boxchecked.value=a),!0},e.renderMessages=function(o){e.removeMessages();var n,r,a,i,s,l,d,c=t.getElementById("system-message-container");for(n in o)if(o.hasOwnProperty(n)){r=o[n],a=t.createElement("div"),d="notice"===n?"alert-info":"alert-"+n,d="message"===n?"alert-success":d,d="error"===n?"alert-error alert-danger":d,a.className="alert "+d;var u=t.createElement("button");for(u.setAttribute("type","button"),u.setAttribute("data-dismiss","alert"),u.className="close",u.innerHTML="×",a.appendChild(u),void 0!==e.JText._(n)&&((i=t.createElement("h4")).className="alert-heading",i.innerHTML=e.JText._(n),a.appendChild(i)),s=r.length-1;s>=0;s--)(l=t.createElement("div")).innerHTML=r[s],a.appendChild(l);c.appendChild(a)}},e.removeMessages=function(){for(var e=t.getElementById("system-message-container");e.firstChild;)e.removeChild(e.firstChild);e.style.display="none",e.offsetHeight,e.style.display=""},e.ajaxErrorsMessages=function(t,o,n){var r={};if("parsererror"===o){for(var a=t.responseText.trim(),i=[],s=a.length-1;s>=0;s--)i.unshift(["&#",a[s].charCodeAt(),";"].join(""));a=i.join(""),r.error=[e.JText._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s",a)]}else"nocontent"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_NO_CONTENT")]:"timeout"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_TIMEOUT")]:"abort"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")]:t.responseJSON&&t.responseJSON.message?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)+" <em>"+t.responseJSON.message+"</em>"]:t.statusText?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)+" <em>"+t.statusText+"</em>"]:r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)];return r},e.isChecked=function(e,o){if(void 0===o&&(o=t.getElementById("adminForm")),o.boxchecked.value=e?parseInt(o.boxchecked.value)+1:parseInt(o.boxchecked.value)-1,o.elements["checkall-toggle"]){var n,r,a,i=!0;for(n=0,a=o.elements.length;n<a;n++)if("checkbox"==(r=o.elements[n]).type&&"checkall-toggle"!=r.name&&!r.checked){i=!1;break}o.elements["checkall-toggle"].checked=i}},e.popupWindow=function(e,t,o,n,r){console.warn("Joomla.popupWindow() is deprecated without a replacement!");var a=(screen.width-o)/2,i="height="+n+",width="+o+",top="+(screen.height-n)/2+",left="+a+",scrollbars="+r+",resizable";window.open(e,t,i).window.focus()},e.tableOrdering=function(o,n,r,a){void 0===a&&(a=t.getElementById("adminForm")),a.filter_order.value=o,a.filter_order_Dir.value=n,e.submitform(r,a)},window.writeDynaList=function(e,o,n,r,a,i){console.warn("window.writeDynaList() is deprecated without a replacement!");for(var s=t.createElement("select"),l=e.split(" "),d=0;d<l.length;d++){var c=l[d].split("=");"on"!==c[0].trim().substr(0,2).toLowerCase()&&"href"!==c[0].trim().toLowerCase()&&s.setAttribute(c[0],c[1].replace(/\"/g,""))}var u,m,p,h=n==r;for(u=0;u<o.length;u++)if((p=o[u])[0]==n){m=h?a==p[1]:0===u;var f=t.createElement("option");f.setAttribute("value",p[1]),f.innerText=p[2],m&&f.setAttribute("selected","selected"),s.appendChild(f)}i?i.appendChild(s):t.body.appendChild(s)},window.changeDynaList=function(e,o,n,r,a){console.warn("window.changeDynaList() is deprecated without a replacement!");for(var i,s,l,d,c=t.adminForm[e],u=n==r;c.firstChild;)c.removeChild(c.firstChild);i=0;for(s in o)o.hasOwnProperty(s)&&(l=o[s])[0]==n&&((d=new Option).value=l[1],d.text=l[2],(u&&a==d.value||!u&&0===i)&&(d.selected=!0),c.options[i++]=d);c.length=i},window.radioGetCheckedValue=function(e){if(console.warn("window.radioGetCheckedValue() is deprecated without a replacement!"),!e)return"";var t,o=e.length;if(void 0===o)return e.checked?e.value:"";for(t=0;t<o;t++)if(e[t].checked)return e[t].value;return""},window.getSelectedValue=function(e,o){console.warn("window.getSelectedValue() is deprecated without a replacement!");var n=t[e][o],r=n.selectedIndex;return null!==r&&r>-1?n.options[r].value:null},window.listItemTask=function(t,o){return console.warn("window.listItemTask() is deprecated use Joomla.listItemTask() instead"),e.listItemTask(t,o)},e.listItemTask=function(e,o){var n,r=t.adminForm,a=0,i=r[e];if(!i)return!1;for(;n=r["cb"+a];)n.checked=!1,a++;return i.checked=!0,r.boxchecked.value=1,window.submitform(o),!1},window.submitbutton=function(t){console.warn("window.submitbutton() is deprecated use Joomla.submitbutton() instead"),e.submitbutton(t)},window.submitform=function(t){console.warn("window.submitform() is deprecated use Joomla.submitform() instead"),e.submitform(t)},window.saveorder=function(e,t){console.warn("window.saveorder() is deprecated without a replacement!"),window.checkAll_button(e,t)},window.checkAll_button=function(o,n){var r,a;for(console.warn("window.checkAll_button() is deprecated without a replacement!"),n=n||"saveorder",r=0;r<=o;r++){if(!(a=t.adminForm["cb"+r]))return void alert("You cannot change the order of items, as an item in the list is `Checked Out`");a.checked=!0}e.submitform(n)},e.loadingLayer=function(o,n){if(o=o||"show",n=n||t.body,"load"===o){var r=(e.getOptions("system.paths")||{}).root||"",a=t.createElement("div");a.id="loading-logo",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.opacity="0.8",a.style.filter="alpha(opacity=80)",a.style.overflow="hidden",a.style["z-index"]="10000",a.style.display="none",a.style["background-color"]="#fff",a.style["background-image"]='url("'+r+'/media/jui/images/ajax-loader.gif")',a.style["background-position"]="center",a.style["background-repeat"]="no-repeat",a.style["background-attachment"]="fixed",n.appendChild(a)}else t.getElementById("loading-logo")||e.loadingLayer("load",n),t.getElementById("loading-logo").style.display="show"==o?"block":"none";return t.getElementById("loading-logo")},e.extend=function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},e.request=function(t){(t=e.extend({url:"",method:"GET",data:null,perform:!0},t)).method=t.data?"POST":t.method.toUpperCase();try{var o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");if(o.open(t.method,t.url,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-Ajax-Engine","Joomla!"),"POST"===t.method){var n=e.getOptions("csrf.token","");n&&o.setRequestHeader("X-CSRF-Token",n),t.headers&&t.headers["Content-Type"]||o.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(t.headers)for(var r in t.headers)t.headers.hasOwnProperty(r)&&o.setRequestHeader(r,t.headers[r]);if(o.onreadystatechange=function(){4===o.readyState&&(200===o.status?t.onSuccess&&t.onSuccess.call(window,o.responseText,o):t.onError&&t.onError.call(window,o))},t.perform){if(t.onBefore&&!1===t.onBefore.call(window,o))return o;o.send(t.data)}}catch(e){return window.console&&console.log(e),!1}return o}}(Joomla,document);


/*===============================
/media/system/js/polyfill.event.js
================================================================================*/;
(function(e){"Window"in this||!function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this),"Document"in this||(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document)),"Element"in this&&"HTMLElement"in this||!function(){function e(){return s--||clearTimeout(t),document.body&&!document.body.prototype&&/(complete|interactive)/.test(document.readyState)?(a(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype):!1}if(window.Element&&!window.HTMLElement)return void(window.HTMLElement=window.Element);window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")),r=o.contentWindow.document,i=Element.prototype=r.appendChild(r.createElement("*")),c={},a=function(e,t){var n,o,r,i=e.childNodes||[],u=-1;if(1===e.nodeType&&e.constructor!==Element){e.constructor=Element;for(n in c)o=c[n],e[n]=o}for(;r=t&&i[++u];)a(r,t);return e},u=document.getElementsByTagName("*"),l=document.createElement,s=100;i.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),r=i[n],a=c[n],l=-1;t=u[++l];)1===t.nodeType&&(o||t[n]===a)&&(t[n]=r);c[n]=r}),i.constructor=Element,i.hasAttribute||(i.hasAttribute=function(e){return null!==this.getAttribute(e)}),e(!0)||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function(e){var t=l(String(e).toLowerCase());return a(t)},document.removeChild(n)}(),"defineProperty"in Object&&function(){try{var e={};return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()||!function(e){var t=Object.prototype.hasOwnProperty("__defineGetter__"),n="Getters & setters cannot be defined on this javascript engine",o="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function(r,i,c){if(e&&(r===window||r===document||r===Element.prototype||r instanceof Element))return e(r,i,c);if(null===r||!(r instanceof Object||"object"==typeof r))throw new TypeError("Object must be an object (Object.defineProperty polyfill)");if(!(c instanceof Object))throw new TypeError("Descriptor must be an object (Object.defineProperty polyfill)");var a=String(i),u="value"in c||"writable"in c,l="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(l){if("function"!==l)throw new TypeError("Getter expected a function (Object.defineProperty polyfill)");if(!t)throw new TypeError(n);if(u)throw new TypeError(o);r.__defineGetter__(a,c.get)}else r[a]=c.value;if(s){if("function"!==s)throw new TypeError("Setter expected a function (Object.defineProperty polyfill)");if(!t)throw new TypeError(n);if(u)throw new TypeError(o);r.__defineSetter__(a,c.set)}return"value"in c&&(r[a]=c.value),r}}(Object.defineProperty),function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}}(this)||!function(){function t(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}var n={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1},o=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");if("createEvent"in document){var o=document.createEvent("Event"),r=n&&n.bubbles!==e?n.bubbles:!1,i=n&&n.cancelable!==e?n.cancelable:!1;return o.initEvent(t,r,i),o}var o=document.createEventObject();return o.type=t,o.bubbles=n&&n.bubbles!==e?n.bubbles:!1,o.cancelable=n&&n.cancelable!==e?n.cancelable:!1,o},o&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:o}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,o=arguments[0],r=arguments[1];if(e===window&&o in n)throw new Error("In IE8 the event: "+o+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[o]||(e._events[o]=function(n){var o,r=e._events[n.type].list,i=r.slice(),c=-1,a=i.length;for(n.preventDefault=function(){n.cancelable!==!1&&(n.returnValue=!1)},n.stopPropagation=function(){n.cancelBubble=!0},n.stopImmediatePropagation=function(){n.cancelBubble=!0,n.cancelImmediate=!0},n.currentTarget=e,n.relatedTarget=n.fromElement||null,n.target=n.target||n.srcElement||e,n.timeStamp=(new Date).getTime(),n.clientX&&(n.pageX=n.clientX+document.documentElement.scrollLeft,n.pageY=n.clientY+document.documentElement.scrollTop);++c<a&&!n.cancelImmediate;)c in i&&(o=i[c],-1!==t(r,o)&&"function"==typeof o&&o.call(e,n))},e._events[o].list=[],e.attachEvent&&e.attachEvent("on"+o,e._events[o])),e._events[o].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,n=this,o=arguments[0],r=arguments[1];n._events&&n._events[o]&&n._events[o].list&&(e=t(n._events[o].list,r),-1!==e&&(n._events[o].list.splice(e,1),n._events[o].list.length||(n.detachEvent&&n.detachEvent("on"+o,n._events[o]),delete n._events[o])))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(r){e.target=t;do e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode;while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}()}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});



/*===============================
/media/system/js/keepalive.js
================================================================================*/;
!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var o=Joomla.getOptions("system.keepalive"),n=o&&o.uri?o.uri.replace(/&amp;/g,"&"):"",t=o&&o.interval?o.interval:45e3;if(""===n){var e=Joomla.getOptions("system.paths");n=(e?e.root+"/index.php":window.location.pathname)+"?option=com_ajax&format=json"}window.setInterval(function(){Joomla.request({url:n,onSuccess:function(){},onError:function(){}})},t)})}(window,document,Joomla);



/*===============================
/media/system/js/mootools-core.js
================================================================================*/;
(function(){this.MooTools={version:"1.4.5",build:"74e34796f5f76640cdb98853004650aea1499d69"};var b=this.typeOf=function(b){if(null==b)return"null";if(null!=b.$family)return b.$family();if(b.nodeName){if(1==b.nodeType)return"element";if(3==b.nodeType)return/\S/.test(b.nodeValue)?"textnode":"whitespace"}else if("number"==typeof b.length){if(b.callee)return"arguments";if("item"in b)return"collection"}return typeof b};this.instanceOf=function(b,a){if(null==b)return!1;for(var c=b.$constructor||b.constructor;c;){if(c===
a)return!0;c=c.parent}return!b.hasOwnProperty?!1:b instanceof a};var a=this.Function,c=!0,d;for(d in{toString:1})c=null;c&&(c="hasOwnProperty,valueOf,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,constructor".split(","));a.prototype.overloadSetter=function(b){var a=this;return function(h,k){if(null==h)return this;if(b||"string"!=typeof h){for(var e in h)a.call(this,e,h[e]);if(c)for(var d=c.length;d--;)e=c[d],h.hasOwnProperty(e)&&a.call(this,e,h[e])}else a.call(this,h,k);return this}};
a.prototype.overloadGetter=function(b){var a=this;return function(c){var h,k;"string"!=typeof c?h=c:1<arguments.length?h=arguments:b&&(h=[c]);if(h){k={};for(var e=0;e<h.length;e++)k[h[e]]=a.call(this,h[e])}else k=a.call(this,c);return k}};a.prototype.extend=function(b,a){this[b]=a}.overloadSetter();a.prototype.implement=function(b,a){this.prototype[b]=a}.overloadSetter();var e=Array.prototype.slice;a.from=function(a){return"function"==b(a)?a:function(){return a}};Array.from=function(a){return null==
a?[]:f.isEnumerable(a)&&"string"!=typeof a?"array"==b(a)?a:e.call(a):[a]};Number.from=function(b){b=parseFloat(b);return isFinite(b)?b:null};String.from=function(b){return b+""};a.implement({hide:function(){this.$hidden=!0;return this},protect:function(){this.$protected=!0;return this}});var f=this.Type=function(a,c){if(a){var h=a.toLowerCase();f["is"+a]=function(a){return b(a)==h};null!=c&&(c.prototype.$family=function(){return h}.hide())}if(null==c)return null;c.extend(this);c.$constructor=f;return c.prototype.$constructor=
c},g=Object.prototype.toString;f.isEnumerable=function(b){return null!=b&&"number"==typeof b.length&&"[object Function]"!=g.call(b)};var i={},j=function(a){a=b(a.prototype);return i[a]||(i[a]=[])},m=function(a,c){if(!c||!c.$hidden){for(var k=j(this),d=0;d<k.length;d++){var o=k[d];"type"==b(o)?m.call(o,a,c):o.call(this,a,c)}k=this.prototype[a];if(null==k||!k.$protected)this.prototype[a]=c;null==this[a]&&"function"==b(c)&&h.call(this,a,function(b){return c.apply(b,e.call(arguments,1))})}},h=function(b,
a){if(!a||!a.$hidden){var c=this[b];if(null==c||!c.$protected)this[b]=a}};f.implement({implement:m.overloadSetter(),extend:h.overloadSetter(),alias:function(b,a){m.call(this,b,this.prototype[a])}.overloadSetter(),mirror:function(b){j(this).push(b);return this}});new f("Type",f);var k=function(b,a,c){var h=a!=Object,e=a.prototype;h&&(a=new f(b,a));for(var b=0,d=c.length;b<d;b++){var o=c[b],q=a[o],g=e[o];q&&q.protect();h&&g&&a.implement(o,g.protect())}if(h){var j=e.propertyIsEnumerable(c[0]);a.forEachMethod=
function(b){if(!j)for(var a=0,h=c.length;a<h;a++)b.call(e,e[c[a]],c[a]);for(var k in e)b.call(e,e[k],k)}}return k};k("String",String,"charAt,charCodeAt,concat,indexOf,lastIndexOf,match,quote,replace,search,slice,split,substr,substring,trim,toLowerCase,toUpperCase".split(","))("Array",Array,"pop,push,reverse,shift,sort,splice,unshift,concat,join,slice,indexOf,lastIndexOf,filter,forEach,every,map,some,reduce,reduceRight".split(","))("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",
a,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,"create,defineProperty,defineProperties,keys,getPrototypeOf,getOwnPropertyDescriptor,getOwnPropertyNames,preventExtensions,isExtensible,seal,isSealed,freeze,isFrozen".split(","))("Date",Date,["now"]);Object.extend=h.overloadSetter();Date.extend("now",function(){return+new Date});new f("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null"}.hide();Number.extend("random",function(b,a){return Math.floor(Math.random()*
(a-b+1)+b)});var o=Object.prototype.hasOwnProperty;Object.extend("forEach",function(b,a,c){for(var h in b)o.call(b,h)&&a.call(c,b[h],h,b)});Object.each=Object.forEach;Array.implement({forEach:function(b,a){for(var c=0,h=this.length;c<h;c++)c in this&&b.call(a,this[c],c,this)},each:function(b,a){Array.forEach(this,b,a);return this}});var q=function(a){switch(b(a)){case "array":return a.clone();case "object":return Object.clone(a);default:return a}};Array.implement("clone",function(){for(var b=this.length,
a=Array(b);b--;)a[b]=q(this[b]);return a});var u=function(a,c,h){switch(b(h)){case "object":"object"==b(a[c])?Object.merge(a[c],h):a[c]=Object.clone(h);break;case "array":a[c]=h.clone();break;default:a[c]=h}return a};Object.extend({merge:function(a,c,h){if("string"==b(c))return u(a,c,h);for(var k=1,e=arguments.length;k<e;k++){var d=arguments[k],o;for(o in d)u(a,o,d[o])}return a},clone:function(b){var a={},c;for(c in b)a[c]=q(b[c]);return a},append:function(b){for(var a=1,c=arguments.length;a<c;a++){var h=
arguments[a]||{},k;for(k in h)b[k]=h[k]}return b}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(b){new f(b)});var r=Date.now();String.extend("uniqueID",function(){return(r++).toString(36)})})();
Array.implement({every:function(b,a){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&!b.call(a,this[c],c,this))return!1;return!0},filter:function(b,a){for(var c=[],d,e=0,f=this.length>>>0;e<f;e++)e in this&&(d=this[e],b.call(a,d,e,this)&&c.push(d));return c},indexOf:function(b,a){for(var c=this.length>>>0,d=0>a?Math.max(0,c+a):a||0;d<c;d++)if(this[d]===b)return d;return-1},map:function(b,a){for(var c=this.length>>>0,d=Array(c),e=0;e<c;e++)e in this&&(d[e]=b.call(a,this[e],e,this));return d},some:function(b,
a){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&b.call(a,this[c],c,this))return!0;return!1},clean:function(){return this.filter(function(b){return null!=b})},invoke:function(b){var a=Array.slice(arguments,1);return this.map(function(c){return c[b].apply(c,a)})},associate:function(b){for(var a={},c=Math.min(this.length,b.length),d=0;d<c;d++)a[b[d]]=this[d];return a},link:function(b){for(var a={},c=0,d=this.length;c<d;c++)for(var e in b)if(b[e](this[c])){a[e]=this[c];delete b[e];break}return a},
contains:function(b,a){return-1!=this.indexOf(b,a)},append:function(b){this.push.apply(this,b);return this},getLast:function(){return this.length?this[this.length-1]:null},getRandom:function(){return this.length?this[Number.random(0,this.length-1)]:null},include:function(b){this.contains(b)||this.push(b);return this},combine:function(b){for(var a=0,c=b.length;a<c;a++)this.include(b[a]);return this},erase:function(b){for(var a=this.length;a--;)this[a]===b&&this.splice(a,1);return this},empty:function(){this.length=
0;return this},flatten:function(){for(var b=[],a=0,c=this.length;a<c;a++){var d=typeOf(this[a]);"null"!=d&&(b=b.concat("array"==d||"collection"==d||"arguments"==d||instanceOf(this[a],Array)?Array.flatten(this[a]):this[a]))}return b},pick:function(){for(var b=0,a=this.length;b<a;b++)if(null!=this[b])return this[b];return null},hexToRgb:function(b){if(3!=this.length)return null;var a=this.map(function(b){1==b.length&&(b+=b);return b.toInt(16)});return b?a:"rgb("+a+")"},rgbToHex:function(b){if(3>this.length)return null;
if(4==this.length&&0==this[3]&&!b)return"transparent";for(var a=[],c=0;3>c;c++){var d=(this[c]-0).toString(16);a.push(1==d.length?"0"+d:d)}return b?a:"#"+a.join("")}});
String.implement({test:function(b,a){return("regexp"==typeOf(b)?b:RegExp(""+b,a)).test(this)},contains:function(b,a){return a?-1<(a+this+a).indexOf(a+b+a):-1<(""+this).indexOf(b)},trim:function(){return(""+this).replace(/^\s+|\s+$/g,"")},clean:function(){return(""+this).replace(/\s+/g," ").trim()},camelCase:function(){return(""+this).replace(/-\D/g,function(b){return b.charAt(1).toUpperCase()})},hyphenate:function(){return(""+this).replace(/[A-Z]/g,function(b){return"-"+b.charAt(0).toLowerCase()})},
capitalize:function(){return(""+this).replace(/\b[a-z]/g,function(b){return b.toUpperCase()})},escapeRegExp:function(){return(""+this).replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},toInt:function(b){return parseInt(this,b||10)},toFloat:function(){return parseFloat(this)},hexToRgb:function(b){var a=(""+this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return a?a.slice(1).hexToRgb(b):null},rgbToHex:function(b){var a=(""+this).match(/\d{1,3}/g);return a?a.rgbToHex(b):null},substitute:function(b,a){return(""+
this).replace(a||/\\?\{([^{}]+)\}/g,function(a,d){return"\\"==a.charAt(0)?a.slice(1):null!=b[d]?b[d]:""})}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this))},round:function(b){b=Math.pow(10,b||0).toFixed(0>b?-b:0);return Math.round(this*b)/b},times:function(b,a){for(var c=0;c<this;c++)b.call(a,c,this)},toFloat:function(){return parseFloat(this)},toInt:function(b){return parseInt(this,b||10)}});Number.alias("each","times");
(function(b){var a={};b.each(function(b){Number[b]||(a[b]=function(){return Math[b].apply(null,[this].concat(Array.from(arguments)))})});Number.implement(a)})("abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,max,min,pow,sin,sqrt,tan".split(","));Function.extend({attempt:function(){for(var b=0,a=arguments.length;b<a;b++)try{return arguments[b]()}catch(c){}return null}});
Function.implement({attempt:function(b,a){try{return this.apply(a,Array.from(b))}catch(c){}return null},bind:function(b){var a=this,c=1<arguments.length?Array.slice(arguments,1):null,d=function(){},e=function(){var f=b,g=arguments.length;this instanceof e&&(d.prototype=a.prototype,f=new d);g=!c&&!g?a.call(f):a.apply(f,c&&g?c.concat(Array.slice(arguments)):c||arguments);return f==b?g:f};return e},pass:function(b,a){var c=this;null!=b&&(b=Array.from(b));return function(){return c.apply(a,b||arguments)}},
delay:function(b,a,c){return setTimeout(this.pass(null==c?[]:c,a),b)},periodical:function(b,a,c){return setInterval(this.pass(null==c?[]:c,a),b)}});
(function(){var b=Object.prototype.hasOwnProperty;Object.extend({subset:function(b,c){for(var d={},e=0,f=c.length;e<f;e++){var g=c[e];g in b&&(d[g]=b[g])}return d},map:function(a,c,d){var e={},f;for(f in a)b.call(a,f)&&(e[f]=c.call(d,a[f],f,a));return e},filter:function(a,c,d){var e={},f;for(f in a){var g=a[f];b.call(a,f)&&c.call(d,g,f,a)&&(e[f]=g)}return e},every:function(a,c,d){for(var e in a)if(b.call(a,e)&&!c.call(d,a[e],e))return!1;return!0},some:function(a,c,d){for(var e in a)if(b.call(a,e)&&
c.call(d,a[e],e))return!0;return!1},keys:function(a){var c=[],d;for(d in a)b.call(a,d)&&c.push(d);return c},values:function(a){var c=[],d;for(d in a)b.call(a,d)&&c.push(a[d]);return c},getLength:function(b){return Object.keys(b).length},keyOf:function(a,c){for(var d in a)if(b.call(a,d)&&a[d]===c)return d;return null},contains:function(b,c){return null!=Object.keyOf(b,c)},toQueryString:function(b,c){var d=[];Object.each(b,function(b,a){c&&(a=c+"["+a+"]");var g;switch(typeOf(b)){case "object":g=Object.toQueryString(b,
a);break;case "array":var i={};b.each(function(b,a){i[a]=b});g=Object.toQueryString(i,a);break;default:g=a+"="+encodeURIComponent(b)}null!=b&&d.push(g)});return d.join("&")}})})();
(function(){var b=this.document,a=b.window=this,c=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),e=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],f=this.Browser={extend:Function.prototype.extend,name:"version"==e[1]?e[3]:e[1],version:"ie"==e[1]&&b.documentMode||parseFloat("opera"==e[1]&&e[4]?e[4]:e[2]),Platform:{name:c.match(/ip(?:ad|od|hone)/)?"ios":(c.match(/(?:webos|android)/)||d.match(/mac|win|linux/)||
["other"])[0]},Features:{xpath:!!b.evaluate,air:!!a.runtime,query:!!b.querySelector,json:!!a.JSON},Plugins:{}};f[f.name]=!0;f[f.name+parseInt(f.version,10)]=!0;f.Platform[f.Platform.name]=!0;f.Request=function(){var b=function(){return new XMLHttpRequest},a=function(){return new ActiveXObject("MSXML2.XMLHTTP")},c=function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Function.attempt(function(){b();return b},function(){a();return a},function(){c();return c})}();f.Features.xhr=!!f.Request;
c=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description},function(){return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")})||"0 r0").match(/\d+/g);f.Plugins.Flash={version:Number(c[0]||"0."+c[1])||0,build:Number(c[2])||0};f.exec=function(c){if(!c)return c;if(a.execScript)a.execScript(c);else{var h=b.createElement("script");h.setAttribute("type","text/javascript");h.text=c;b.head.appendChild(h);b.head.removeChild(h)}return c};String.implement("stripScripts",
function(b){var a="",c=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(b,c){a+=c+"\n";return""});!0===b?f.exec(a):"function"==typeOf(b)&&b(a,c);return c});f.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(b,c){a[b]=c});this.Document=b.$constructor=new Type("Document",function(){});b.$family=Function.from("document").hide();
Document.mirror(function(a,c){b[a]=c});b.html=b.documentElement;b.head||(b.head=b.getElementsByTagName("head")[0]);if(b.execCommand)try{b.execCommand("BackgroundImageCache",!1,!0)}catch(g){}if(this.attachEvent&&!this.addEventListener){var i=function(){this.detachEvent("onunload",i);b.head=b.html=b.window=null};this.attachEvent("onunload",i)}var j=Array.from;try{j(b.html.childNodes)}catch(m){Array.from=function(b){if(typeof b!="string"&&Type.isEnumerable(b)&&typeOf(b)!="array"){for(var a=b.length,
c=Array(a);a--;)c[a]=b[a];return c}return j(b)};var h=Array.prototype,k=h.slice;"pop,push,reverse,shift,sort,splice,unshift,concat,join,slice".split(",").each(function(b){var a=h[b];Array[b]=function(b){return a.apply(Array.from(b),k.call(arguments,1))}})}})();
(function(){var b={},a=this.DOMEvent=new Type("DOMEvent",function(a,d){d||(d=window);a=a||d.event;if(a.$extended)return a;this.event=a;this.$extended=!0;this.shift=a.shiftKey;this.control=a.ctrlKey;this.alt=a.altKey;this.meta=a.metaKey;for(var e=this.type=a.type,f=a.target||a.srcElement;f&&3==f.nodeType;)f=f.parentNode;this.target=document.id(f);if(0==e.indexOf("key")){if(f=this.code=a.which||a.keyCode,this.key=b[f],"keydown"==e&&(111<f&&124>f?this.key="f"+(f-111):95<f&&106>f&&(this.key=f-96)),null==
this.key)this.key=String.fromCharCode(f).toLowerCase()}else if("click"==e||"dblclick"==e||"contextmenu"==e||"DOMMouseScroll"==e||0==e.indexOf("mouse")){f=d.document;f=!f.compatMode||"CSS1Compat"==f.compatMode?f.html:f.body;this.page={x:null!=a.pageX?a.pageX:a.clientX+f.scrollLeft,y:null!=a.pageY?a.pageY:a.clientY+f.scrollTop};this.client={x:null!=a.pageX?a.pageX-d.pageXOffset:a.clientX,y:null!=a.pageY?a.pageY-d.pageYOffset:a.clientY};if("DOMMouseScroll"==e||"mousewheel"==e)this.wheel=a.wheelDelta?
a.wheelDelta/120:-(a.detail||0)/3;this.rightClick=3==a.which||2==a.button;if("mouseover"==e||"mouseout"==e){for(e=a.relatedTarget||a[("mouseover"==e?"from":"to")+"Element"];e&&3==e.nodeType;)e=e.parentNode;this.relatedTarget=document.id(e)}}else if(0==e.indexOf("touch")||0==e.indexOf("gesture"))if(this.rotation=a.rotation,this.scale=a.scale,this.targetTouches=a.targetTouches,this.changedTouches=a.changedTouches,(e=this.touches=a.touches)&&e[0])e=e[0],this.page={x:e.pageX,y:e.pageY},this.client={x:e.clientX,
y:e.clientY};this.client||(this.client={});this.page||(this.page={})});a.implement({stop:function(){return this.preventDefault().stopPropagation()},stopPropagation:function(){this.event.stopPropagation?this.event.stopPropagation():this.event.cancelBubble=!0;return this},preventDefault:function(){this.event.preventDefault?this.event.preventDefault():this.event.returnValue=!1;return this}});a.defineKey=function(a,d){b[a]=d;return this};a.defineKeys=a.defineKey.overloadSetter(!0);a.defineKeys({38:"up",
40:"down",37:"left",39:"right",27:"esc",32:"space",8:"backspace",9:"tab",46:"delete",13:"enter"})})();
(function(){var b=this.Class=new Type("Class",function(e){instanceOf(e,Function)&&(e={initialize:e});var d=function(){c(this);if(d.$prototyping)return this;this.$caller=null;var a=this.initialize?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;return a}.extend(this).implement(e);d.$constructor=b;d.prototype.$constructor=d;d.prototype.parent=a;return d}),a=function(){if(!this.$caller)throw Error('The method "parent" cannot be called.');var a=this.$caller.$name,b=this.$caller.$owner.parent,
b=b?b.prototype[a]:null;if(!b)throw Error('The method "'+a+'" has no parent.');return b.apply(this,arguments)},c=function(a){for(var b in a){var e=a[b];switch(typeOf(e)){case "object":var d=function(){};d.prototype=e;a[b]=c(new d);break;case "array":a[b]=e.clone()}}return a},d=function(a,b,c){c.$origin&&(c=c.$origin);var e=function(){if(c.$protected&&this.$caller==null)throw Error('The method "'+b+'" cannot be called.');var a=this.caller,h=this.$caller;this.caller=h;this.$caller=e;var k=c.apply(this,
arguments);this.$caller=h;this.caller=a;return k}.extend({$owner:a,$origin:c,$name:b});return e},e=function(a,c,e){if(b.Mutators.hasOwnProperty(a)&&(c=b.Mutators[a].call(this,c),null==c))return this;if("function"==typeOf(c)){if(c.$hidden)return this;this.prototype[a]=e?c:d(this,a,c)}else Object.merge(this.prototype,a,c);return this};b.implement("implement",e.overloadSetter());b.Mutators={Extends:function(a){this.parent=a;a.$prototyping=!0;var b=new a;delete a.$prototyping;this.prototype=b},Implements:function(a){Array.from(a).each(function(a){var a=
new a,b;for(b in a)e.call(this,b,a[b],!0)},this)}}})();
(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));return this},callChain:function(){return this.$chain.length?this.$chain.shift().apply(this,arguments):!1},clearChain:function(){this.$chain.empty();return this}});var b=function(a){return a.replace(/^on([A-Z])/,function(a,b){return b.toLowerCase()})};this.Events=new Class({$events:{},addEvent:function(a,c,d){a=b(a);this.$events[a]=(this.$events[a]||[]).include(c);d&&(c.internal=!0);return this},
addEvents:function(a){for(var b in a)this.addEvent(b,a[b]);return this},fireEvent:function(a,c,d){a=b(a);a=this.$events[a];if(!a)return this;c=Array.from(c);a.each(function(a){d?a.delay(d,this,c):a.apply(this,c)},this);return this},removeEvent:function(a,c){var a=b(a),d=this.$events[a];if(d&&!c.internal){var e=d.indexOf(c);-1!=e&&delete d[e]}return this},removeEvents:function(a){var c;if("object"==typeOf(a)){for(c in a)this.removeEvent(c,a[c]);return this}a&&(a=b(a));for(c in this.$events)if(!(a&&
a!=c))for(var d=this.$events[c],e=d.length;e--;)e in d&&this.removeEvent(c,d[e]);return this}});this.Options=new Class({setOptions:function(){var a=this.options=Object.merge.apply(null,[{},this.options].append(arguments));if(this.addEvent)for(var b in a)"function"==typeOf(a[b])&&/^on[A-Z]/.test(b)&&(this.addEvent(b,a[b]),delete a[b]);return this}})})();
(function(){function b(b,h,o,l,f,q,j,g,x,F,t,B,A,D,v,z){if(h||-1===c)if(a.expressions[++c]=[],d=-1,h)return"";if(o||l||-1===d)o=o||" ",b=a.expressions[c],e&&b[d]&&(b[d].reverseCombinator=m(o)),b[++d]={combinator:o,tag:"*"};o=a.expressions[c][d];if(f)o.tag=f.replace(i,"");else if(q)o.id=q.replace(i,"");else if(j)j=j.replace(i,""),o.classList||(o.classList=[]),o.classes||(o.classes=[]),o.classList.push(j),o.classes.push({value:j,regexp:RegExp("(^|\\s)"+k(j)+"(\\s|$)")});else if(A)z=(z=z||v)?z.replace(i,
""):null,o.pseudos||(o.pseudos=[]),o.pseudos.push({key:A.replace(i,""),value:z,type:1==B.length?"class":"element"});else if(g){var g=g.replace(i,""),t=(t||"").replace(i,""),y,E;switch(x){case "^=":E=RegExp("^"+k(t));break;case "$=":E=RegExp(k(t)+"$");break;case "~=":E=RegExp("(^|\\s)"+k(t)+"(\\s|$)");break;case "|=":E=RegExp("^"+k(t)+"(-|$)");break;case "=":y=function(a){return t==a};break;case "*=":y=function(a){return a&&-1<a.indexOf(t)};break;case "!=":y=function(a){return t!=a};break;default:y=
function(a){return!!a}}""==t&&/^[*$^]=$/.test(x)&&(y=function(){return!1});y||(y=function(a){return a&&E.test(a)});o.attributes||(o.attributes=[]);o.attributes.push({key:g,operator:x,value:t,test:y})}return""}var a,c,d,e,f={},g={},i=/\\/g,j=function(k,d){if(null==k)return null;if(!0===k.Slick)return k;var k=(""+k).replace(/^\s+|\s+$/g,""),q=(e=!!d)?g:f;if(q[k])return q[k];a={Slick:!0,expressions:[],raw:k,reverse:function(){return j(this.raw,!0)}};for(c=-1;k!=(k=k.replace(o,b)););a.length=a.expressions.length;
return q[a.raw]=e?h(a):a},m=function(a){return"!"===a?" ":" "===a?"!":/^!/.test(a)?a.replace(/^!/,""):"!"+a},h=function(a){for(var b=a.expressions,c=0;c<b.length;c++){for(var h=b[c],k={parts:[],tag:"*",combinator:m(h[0].combinator)},e=0;e<h.length;e++){var d=h[e];d.reverseCombinator||(d.reverseCombinator=" ");d.combinator=d.reverseCombinator;delete d.reverseCombinator}h.reverse().push(k)}return a},k=function(a){return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(a){return"\\"+a})},o=RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,
"["+k(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),q=this.Slick||{};q.parse=function(a){return j(a)};q.escapeRegExp=k;this.Slick||(this.Slick=q)}).apply("undefined"!=typeof exports?exports:this);
(function(){var b={},a={},c=Object.prototype.toString;b.isNativeCode=function(a){return/\{\s*\[native code\]\s*\}/.test(""+a)};b.isXML=function(a){return!!a.xmlVersion||!!a.xml||"[object XMLDocument]"==c.call(a)||9==a.nodeType&&"HTML"!=a.documentElement.nodeName};b.setDocument=function(b){var c=b.nodeType;if(9!=c)if(c)b=b.ownerDocument;else if(b.navigator)b=b.document;else return;if(this.document!==b){this.document=b;var c=b.documentElement,e=this.getUIDXML(c),d=a[e],f;if(!d){d=a[e]={};d.root=c;d.isXMLDocument=
this.isXML(b);d.brokenStarGEBTN=d.starSelectsClosedQSA=d.idGetsName=d.brokenMixedCaseQSA=d.brokenGEBCN=d.brokenCheckedQSA=d.brokenEmptyAttributeQSA=d.isHTMLDocument=d.nativeMatchesSelector=!1;var j,m,l,s,g,n=b.createElement("div"),i=b.body||b.getElementsByTagName("body")[0]||c;i.appendChild(n);try{n.innerHTML='<a id="slick_uniqueid"></a>',d.isHTMLDocument=!!b.getElementById("slick_uniqueid")}catch(x){}if(d.isHTMLDocument){n.style.display="none";n.appendChild(b.createComment(""));e=1<n.getElementsByTagName("*").length;
try{n.innerHTML="foo</foo>",j=(g=n.getElementsByTagName("*"))&&!!g.length&&"/"==g[0].nodeName.charAt(0)}catch(F){}d.brokenStarGEBTN=e||j;try{n.innerHTML='<a name="slick_uniqueid"></a><b id="slick_uniqueid"></b>',d.idGetsName=b.getElementById("slick_uniqueid")===n.firstChild}catch(t){}if(n.getElementsByClassName){try{n.innerHTML='<a class="f"></a><a class="b"></a>',n.getElementsByClassName("b").length,n.firstChild.className="b",l=2!=n.getElementsByClassName("b").length}catch(B){}try{n.innerHTML='<a class="a"></a><a class="f b a"></a>',
m=2!=n.getElementsByClassName("a").length}catch(A){}d.brokenGEBCN=l||m}if(n.querySelectorAll){try{n.innerHTML="foo</foo>",g=n.querySelectorAll("*"),d.starSelectsClosedQSA=g&&!!g.length&&"/"==g[0].nodeName.charAt(0)}catch(D){}try{n.innerHTML='<a class="MiX"></a>',d.brokenMixedCaseQSA=!n.querySelectorAll(".MiX").length}catch(v){}try{n.innerHTML='<select><option selected="selected">a</option></select>',d.brokenCheckedQSA=0==n.querySelectorAll(":checked").length}catch(z){}try{n.innerHTML='<a class=""></a>',
d.brokenEmptyAttributeQSA=0!=n.querySelectorAll('[class*=""]').length}catch(y){}}try{n.innerHTML='<form action="s"><input id="action"/></form>',s="s"!=n.firstChild.getAttribute("action")}catch(E){}d.nativeMatchesSelector=c.matchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector;if(d.nativeMatchesSelector)try{d.nativeMatchesSelector.call(c,":slick"),d.nativeMatchesSelector=null}catch(G){}}try{c.slick_expando=1,delete c.slick_expando,d.getUID=this.getUIDHTML}catch(H){d.getUID=this.getUIDXML}i.removeChild(n);
n=g=i=null;d.getAttribute=d.isHTMLDocument&&s?function(a,b){var c=this.attributeGetters[b];return c?c.call(a):(c=a.getAttributeNode(b))?c.nodeValue:null}:function(a,b){var c=this.attributeGetters[b];return c?c.call(a):a.getAttribute(b)};d.hasAttribute=c&&this.isNativeCode(c.hasAttribute)?function(a,b){return a.hasAttribute(b)}:function(a,b){a=a.getAttributeNode(b);return!(!a||!a.specified&&!a.nodeValue)};j=c&&this.isNativeCode(c.contains);m=b&&this.isNativeCode(b.contains);d.contains=j&&m?function(a,
b){return a.contains(b)}:j&&!m?function(a,c){return a===c||(a===b?b.documentElement:a).contains(c)}:c&&c.compareDocumentPosition?function(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)}:function(a,b){if(b){do if(b===a)return!0;while(b=b.parentNode)}return!1};d.documentSorter=c.compareDocumentPosition?function(a,b){return!a.compareDocumentPosition||!b.compareDocumentPosition?0:a.compareDocumentPosition(b)&4?-1:a===b?0:1}:"sourceIndex"in c?function(a,b){return!a.sourceIndex||!b.sourceIndex?
0:a.sourceIndex-b.sourceIndex}:b.createRange?function(a,b){if(!a.ownerDocument||!b.ownerDocument)return 0;var c=a.ownerDocument.createRange(),h=b.ownerDocument.createRange();c.setStart(a,0);c.setEnd(a,0);h.setStart(b,0);h.setEnd(b,0);return c.compareBoundaryPoints(Range.START_TO_END,h)}:null;c=null}for(f in d)this[f]=d[f]}};var d=/^([#.]?)((?:[\w-]+|\*))$/,e=/\[.+[*$^]=(?:""|'')?\]/,f={};b.search=function(a,b,c,j){var g=this.found=j?null:c||[];if(a)if(a.navigator)a=a.document;else{if(!a.nodeType)return g}else return g;
var r,i,l=this.uniques={},c=!(!c||!c.length),s=9==a.nodeType;this.document!==(s?a:a.ownerDocument)&&this.setDocument(a);if(c)for(i=g.length;i--;)l[this.getUID(g[i])]=!0;if("string"==typeof b){var p=b.match(d);a:if(p){i=p[1];var n=p[2];if(i)if("#"==i){if(!this.isHTMLDocument||!s)break a;p=a.getElementById(n);if(!p)return g;if(this.idGetsName&&p.getAttributeNode("id").nodeValue!=n)break a;if(j)return p||null;(!c||!l[this.getUID(p)])&&g.push(p)}else{if("."==i){if(!this.isHTMLDocument||(!a.getElementsByClassName||
this.brokenGEBCN)&&a.querySelectorAll)break a;if(a.getElementsByClassName&&!this.brokenGEBCN){r=a.getElementsByClassName(n);if(j)return r[0]||null;for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p)}else{var C=RegExp("(^|\\s)"+m.escapeRegExp(n)+"(\\s|$)");r=a.getElementsByTagName("*");for(i=0;p=r[i++];)if((className=p.className)&&C.test(className)){if(j)return p;(!c||!l[this.getUID(p)])&&g.push(p)}}}}else{if("*"==n&&this.brokenStarGEBTN)break a;r=a.getElementsByTagName(n);if(j)return r[0]||null;
for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p)}c&&this.sort(g);return j?null:g}a:if(a.querySelectorAll&&this.isHTMLDocument&&!f[b]&&!this.brokenMixedCaseQSA&&!(this.brokenCheckedQSA&&-1<b.indexOf(":checked")||this.brokenEmptyAttributeQSA&&e.test(b)||!s&&-1<b.indexOf(",")||m.disableQSA)){i=b;p=a;if(!s){var x=p.getAttribute("id");p.setAttribute("id","slickid__");i="#slickid__ "+i;a=p.parentNode}try{if(j)return a.querySelector(i)||null;r=a.querySelectorAll(i)}catch(F){f[b]=1;break a}finally{s||
(x?p.setAttribute("id",x):p.removeAttribute("id"),a=p)}if(this.starSelectsClosedQSA)for(i=0;p=r[i++];)"@"<p.nodeName&&(!c||!l[this.getUID(p)])&&g.push(p);else for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p);c&&this.sort(g);return g}r=this.Slick.parse(b);if(!r.length)return g}else{if(null==b)return g;if(b.Slick)r=b;else{if(this.contains(a.documentElement||a,b))g?g.push(b):g=b;return g}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=!c&&(j||1==r.length&&
1==r.expressions[0].length)?this.pushArray:this.pushUID;null==g&&(g=[]);var t,B,A,D,v,z,y=r.expressions;i=0;a:for(;z=y[i];i++)for(b=0;v=z[b];b++){x="combinator:"+v.combinator;if(!this[x])continue a;s=this.isXMLDocument?v.tag:v.tag.toUpperCase();p=v.id;n=v.classList;A=v.classes;D=v.attributes;v=v.pseudos;t=b===z.length-1;this.bitUniques={};t?(this.uniques=l,this.found=g):(this.uniques={},this.found=[]);if(0===b){if(this[x](a,s,p,A,D,v,n),j&&t&&g.length)break a}else if(j&&t){t=0;for(B=C.length;t<B;t++)if(this[x](C[t],
s,p,A,D,v,n),g.length)break a}else{t=0;for(B=C.length;t<B;t++)this[x](C[t],s,p,A,D,v,n)}C=this.found}(c||1<r.expressions.length)&&this.sort(g);return j?g[0]||null:g};b.uidx=1;b.uidk="slick-uniqueid";b.getUIDXML=function(a){var b=a.getAttribute(this.uidk);b||(b=this.uidx++,a.setAttribute(this.uidk,b));return b};b.getUIDHTML=function(a){return a.uniqueNumber||(a.uniqueNumber=this.uidx++)};b.sort=function(a){if(!this.documentSorter)return a;a.sort(this.documentSorter);return a};b.cacheNTH={};b.matchNTH=
/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;b.parseNTHArgument=function(a){var b=a.match(this.matchNTH);if(!b)return!1;var c=b[2]||!1,d=b[1]||1;"-"==d&&(d=-1);b=+b[3]||0;b="n"==c?{a:d,b:b}:"odd"==c?{a:2,b:1}:"even"==c?{a:2,b:0}:{a:0,b:d};return this.cacheNTH[a]=b};b.createNTHPseudo=function(a,b,c,d){return function(e,f){var g=this.getUID(e);if(!this[c][g]){var l=e.parentNode;if(!l)return!1;var l=l[a],s=1;if(d){var j=e.nodeName;do l.nodeName==j&&(this[c][this.getUID(l)]=s++);while(l=l[b])}else{do 1==l.nodeType&&
(this[c][this.getUID(l)]=s++);while(l=l[b])}}f=f||"n";s=this.cacheNTH[f]||this.parseNTHArgument(f);if(!s)return!1;l=s.a;s=s.b;g=this[c][g];if(0==l)return s==g;if(0<l){if(g<s)return!1}else if(s<g)return!1;return 0==(g-s)%l}};b.pushArray=function(a,b,c,d,e,f){this.matchSelector(a,b,c,d,e,f)&&this.found.push(a)};b.pushUID=function(a,b,c,d,e,f){var g=this.getUID(a);!this.uniques[g]&&this.matchSelector(a,b,c,d,e,f)&&(this.uniques[g]=!0,this.found.push(a))};b.matchNode=function(a,b){if(this.isHTMLDocument&&
this.nativeMatchesSelector)try{return this.nativeMatchesSelector.call(a,b.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(c){}var d=this.Slick.parse(b);if(!d)return!0;var e=d.expressions,f=0,g;for(g=0;currentExpression=e[g];g++)if(1==currentExpression.length){var l=currentExpression[0];if(this.matchSelector(a,this.isXMLDocument?l.tag:l.tag.toUpperCase(),l.id,l.classes,l.attributes,l.pseudos))return!0;f++}if(f==d.length)return!1;d=this.search(this.document,d);for(g=0;e=d[g++];)if(e===
a)return!0;return!1};b.matchPseudo=function(a,b,c){var d="pseudo:"+b;if(this[d])return this[d](a,c);a=this.getAttribute(a,b);return c?c==a:!!a};b.matchSelector=function(a,b,c,d,e,f){if(b){var g=this.isXMLDocument?a.nodeName:a.nodeName.toUpperCase();if("*"==b){if("@">g)return!1}else if(g!=b)return!1}if(c&&a.getAttribute("id")!=c)return!1;if(d)for(b=d.length;b--;)if(c=this.getAttribute(a,"class"),!c||!d[b].regexp.test(c))return!1;if(e)for(b=e.length;b--;)if(d=e[b],d.operator?!d.test(this.getAttribute(a,
d.key)):!this.hasAttribute(a,d.key))return!1;if(f)for(b=f.length;b--;)if(d=f[b],!this.matchPseudo(a,d.key,d.value))return!1;return!0};var g={" ":function(a,b,c,d,e,f,g){var l;if(this.isHTMLDocument){if(c){l=this.document.getElementById(c);if(!l&&a.all||this.idGetsName&&l&&l.getAttributeNode("id").nodeValue!=c){g=a.all[c];if(!g)return;g[0]||(g=[g]);for(a=0;l=g[a++];){var s=l.getAttributeNode("id");if(s&&s.nodeValue==c){this.push(l,b,null,d,e,f);break}}return}if(l){if(this.document!==a&&!this.contains(a,
l))return;this.push(l,b,null,d,e,f);return}if(this.contains(this.root,a))return}if(d&&a.getElementsByClassName&&!this.brokenGEBCN&&(g=a.getElementsByClassName(g.join(" ")))&&g.length){for(a=0;l=g[a++];)this.push(l,b,c,null,e,f);return}}if((g=a.getElementsByTagName(b))&&g.length){this.brokenStarGEBTN||(b=null);for(a=0;l=g[a++];)this.push(l,b,c,d,e,f)}},">":function(a,b,c,d,e,f){if(a=a.firstChild){do 1==a.nodeType&&this.push(a,b,c,d,e,f);while(a=a.nextSibling)}},"+":function(a,b,c,d,e,f){for(;a=a.nextSibling;)if(1==
a.nodeType){this.push(a,b,c,d,e,f);break}},"^":function(a,b,c,d,e,f){if(a=a.firstChild)if(1==a.nodeType)this.push(a,b,c,d,e,f);else this["combinator:+"](a,b,c,d,e,f)},"~":function(a,b,c,d,e,f){for(;a=a.nextSibling;)if(1==a.nodeType){var g=this.getUID(a);if(this.bitUniques[g])break;this.bitUniques[g]=!0;this.push(a,b,c,d,e,f)}},"++":function(a,b,c,d,e,f){this["combinator:+"](a,b,c,d,e,f);this["combinator:!+"](a,b,c,d,e,f)},"~~":function(a,b,c,d,e,f){this["combinator:~"](a,b,c,d,e,f);this["combinator:!~"](a,
b,c,d,e,f)},"!":function(a,b,c,d,e,f){for(;a=a.parentNode;)a!==this.document&&this.push(a,b,c,d,e,f)},"!>":function(a,b,c,d,e,f){a=a.parentNode;a!==this.document&&this.push(a,b,c,d,e,f)},"!+":function(a,b,c,d,e,f){for(;a=a.previousSibling;)if(1==a.nodeType){this.push(a,b,c,d,e,f);break}},"!^":function(a,b,c,d,e,f){if(a=a.lastChild)if(1==a.nodeType)this.push(a,b,c,d,e,f);else this["combinator:!+"](a,b,c,d,e,f)},"!~":function(a,b,c,d,e,f){for(;a=a.previousSibling;)if(1==a.nodeType){var g=this.getUID(a);
if(this.bitUniques[g])break;this.bitUniques[g]=!0;this.push(a,b,c,d,e,f)}}},i;for(i in g)b["combinator:"+i]=g[i];var g={empty:function(a){var b=a.firstChild;return!(b&&1==b.nodeType)&&!(a.innerText||a.textContent||"").length},not:function(a,b){return!this.matchNode(a,b)},contains:function(a,b){return-1<(a.innerText||a.textContent||"").indexOf(b)},"first-child":function(a){for(;a=a.previousSibling;)if(1==a.nodeType)return!1;return!0},"last-child":function(a){for(;a=a.nextSibling;)if(1==a.nodeType)return!1;
return!0},"only-child":function(a){for(var b=a;b=b.previousSibling;)if(1==b.nodeType)return!1;for(;a=a.nextSibling;)if(1==a.nodeType)return!1;return!0},"nth-child":b.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":b.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":b.createNTHPseudo("firstChild","nextSibling","posNTHType",!0),"nth-last-of-type":b.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",!0),index:function(a,b){return this["pseudo:nth-child"](a,
""+(b+1))},even:function(a){return this["pseudo:nth-child"](a,"2n")},odd:function(a){return this["pseudo:nth-child"](a,"2n+1")},"first-of-type":function(a){for(var b=a.nodeName;a=a.previousSibling;)if(a.nodeName==b)return!1;return!0},"last-of-type":function(a){for(var b=a.nodeName;a=a.nextSibling;)if(a.nodeName==b)return!1;return!0},"only-of-type":function(a){for(var b=a,c=a.nodeName;b=b.previousSibling;)if(b.nodeName==c)return!1;for(;a=a.nextSibling;)if(a.nodeName==c)return!1;return!0},enabled:function(a){return!a.disabled},
disabled:function(a){return a.disabled},checked:function(a){return a.checked||a.selected},focus:function(a){return this.isHTMLDocument&&this.document.activeElement===a&&(a.href||a.type||this.hasAttribute(a,"tabindex"))},root:function(a){return a===this.root},selected:function(a){return a.selected}},j;for(j in g)b["pseudo:"+j]=g[j];j=b.attributeGetters={"for":function(){return"htmlFor"in this?this.htmlFor:this.getAttribute("for")},href:function(){return"href"in this?this.getAttribute("href",2):this.getAttribute("href")},
style:function(){return this.style?this.style.cssText:this.getAttribute("style")},tabindex:function(){var a=this.getAttributeNode("tabindex");return a&&a.specified?a.nodeValue:null},type:function(){return this.getAttribute("type")},maxlength:function(){var a=this.getAttributeNode("maxLength");return a&&a.specified?a.nodeValue:null}};j.MAXLENGTH=j.maxLength=j.maxlength;var m=b.Slick=this.Slick||{};m.version="1.1.7";m.search=function(a,c,d){return b.search(a,c,d)};m.find=function(a,c){return b.search(a,
c,null,!0)};m.contains=function(a,c){b.setDocument(a);return b.contains(a,c)};m.getAttribute=function(a,c){b.setDocument(a);return b.getAttribute(a,c)};m.hasAttribute=function(a,c){b.setDocument(a);return b.hasAttribute(a,c)};m.match=function(a,c){if(!a||!c)return!1;if(!c||c===a)return!0;b.setDocument(a);return b.matchNode(a,c)};m.defineAttributeGetter=function(a,c){b.attributeGetters[a]=c;return this};m.lookupAttributeGetter=function(a){return b.attributeGetters[a]};m.definePseudo=function(a,c){b["pseudo:"+
a]=function(a,b){return c.call(a,b)};return this};m.lookupPseudo=function(a){var c=b["pseudo:"+a];return c?function(a){return c.call(this,a)}:null};m.override=function(a,c){b.override(a,c);return this};m.isXML=b.isXML;m.uidOf=function(a){return b.getUIDHTML(a)};this.Slick||(this.Slick=m)}).apply("undefined"!=typeof exports?exports:this);
var Element=function(b,a){var c=Element.Constructors[b];if(c)return c(a);if("string"!=typeof b)return document.id(b).set(a);a||(a={});if(!/^[\w-]+$/.test(b)){c=Slick.parse(b).expressions[0][0];b="*"==c.tag?"div":c.tag;c.id&&null==a.id&&(a.id=c.id);var d=c.attributes;if(d)for(var e,f=0,g=d.length;f<g;f++)e=d[f],null==a[e.key]&&(null!=e.value&&"="==e.operator?a[e.key]=e.value:!e.value&&!e.operator&&(a[e.key]=!0));c.classList&&null==a["class"]&&(a["class"]=c.classList.join(" "))}return document.newElement(b,
a)};Browser.Element&&(Element.prototype=Browser.Element.prototype,Element.prototype._fireEvent=function(b){return function(a,c){return b.call(this,a,c)}}(Element.prototype.fireEvent));(new Type("Element",Element)).mirror(function(b){if(!Array.prototype[b]){var a={};a[b]=function(){for(var a=[],d=arguments,e=true,f=0,g=this.length;f<g;f++)var i=this[f],i=a[f]=i[b].apply(i,d),e=e&&typeOf(i)=="element";return e?new Elements(a):a};Elements.implement(a)}});
Browser.Element||(Element.parent=Object,Element.Prototype={$constructor:Element,$family:Function.from("element").hide()},Element.mirror(function(b,a){Element.Prototype[b]=a}));Element.Constructors={};
var IFrame=new Type("IFrame",function(){var b=Array.link(arguments,{properties:Type.isObject,iframe:function(a){return a!=null}}),a=b.properties||{},c;b.iframe&&(c=document.id(b.iframe));var d=a.onload||function(){};delete a.onload;a.id=a.name=[a.id,a.name,c?c.id||c.name:"IFrame_"+String.uniqueID()].pick();c=new Element(c||"iframe",a);b=function(){d.call(c.contentWindow)};window.frames[a.id]?b():c.addListener("load",b);return c}),Elements=this.Elements=function(b){if(b&&b.length)for(var a={},c,d=
0;c=b[d++];){var e=Slick.uidOf(c);if(!a[e]){a[e]=true;this.push(c)}}};Elements.prototype={length:0};Elements.parent=Array;
(new Type("Elements",Elements)).implement({filter:function(b,a){return!b?this:new Elements(Array.filter(this,typeOf(b)=="string"?function(a){return a.match(b)}:b,a))}.protect(),push:function(){for(var b=this.length,a=0,c=arguments.length;a<c;a++){var d=document.id(arguments[a]);d&&(this[b++]=d)}return this.length=b}.protect(),unshift:function(){for(var b=[],a=0,c=arguments.length;a<c;a++){var d=document.id(arguments[a]);d&&b.push(d)}return Array.prototype.unshift.apply(this,b)}.protect(),concat:function(){for(var b=
new Elements(this),a=0,c=arguments.length;a<c;a++){var d=arguments[a];Type.isEnumerable(d)?b.append(d):b.push(d)}return b}.protect(),append:function(b){for(var a=0,c=b.length;a<c;a++)this.push(b[a]);return this}.protect(),empty:function(){for(;this.length;)delete this[--this.length];return this}.protect()});
(function(){var b=Array.prototype.splice,a={"0":0,1:1,length:2};b.call(a,1,1);a[1]==1&&Elements.implement("splice",function(){for(var a=this.length,c=b.apply(this,arguments);a>=this.length;)delete this[a--];return c}.protect());Array.forEachMethod(function(a,b){Elements.implement(b,a)});Array.mirror(Elements);var c;try{c=document.createElement("<input name=x>").name=="x"}catch(d){}var e=function(a){return(""+a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")};Document.implement({newElement:function(a,
b){if(b&&b.checked!=null)b.defaultChecked=b.checked;if(c&&b){a="<"+a;b.name&&(a=a+(' name="'+e(b.name)+'"'));b.type&&(a=a+(' type="'+e(b.type)+'"'));a=a+">";delete b.name;delete b.type}return this.id(this.createElement(a)).set(b)}})})();
(function(){Slick.uidOf(window);Slick.uidOf(document);Document.implement({newTextNode:function(a){return this.createTextNode(a)},getDocument:function(){return this},getWindow:function(){return this.window},id:function(){var a={string:function(b,c,d){return(b=Slick.find(d,"#"+b.replace(/(\W)/g,"\\$1")))?a.element(b,c):null},element:function(a,b){Slick.uidOf(a);if(!b&&!a.$family&&!/^(?:object|embed)$/i.test(a.tagName)){var c=a.fireEvent;a._fireEvent=function(a,b){return c(a,b)};Object.append(a,Element.Prototype)}return a},
object:function(b,c,d){return b.toElement?a.element(b.toElement(d),c):null}};a.textnode=a.whitespace=a.window=a.document=function(a){return a};return function(b,c,d){if(b&&b.$family&&b.uniqueNumber)return b;var e=typeOf(b);return a[e]?a[e](b,c,d||document):null}}()});window.$==null&&Window.implement("$",function(a,b){return document.id(a,b,this.document)});Window.implement({getDocument:function(){return this.document},getWindow:function(){return this}});[Document,Element].invoke("implement",{getElements:function(a){return Slick.search(this,
a,new Elements)},getElement:function(a){return document.id(Slick.find(this,a))}});var b={contains:function(a){return Slick.contains(this,a)}};document.contains||Document.implement(b);document.createElement("div").contains||Element.implement(b);var a=function(a,b){if(!a)return b;for(var a=Object.clone(Slick.parse(a)),c=a.expressions,d=c.length;d--;)c[d][0].combinator=b;return a};Object.forEach({getNext:"~",getPrevious:"!~",getParent:"!"},function(b,c){Element.implement(c,function(c){return this.getElement(a(c,
b))})});Object.forEach({getAllNext:"~",getAllPrevious:"!~",getSiblings:"~~",getChildren:">",getParents:"!"},function(b,c){Element.implement(c,function(c){return this.getElements(a(c,b))})});Element.implement({getFirst:function(b){return document.id(Slick.search(this,a(b,">"))[0])},getLast:function(b){return document.id(Slick.search(this,a(b,">")).getLast())},getWindow:function(){return this.ownerDocument.window},getDocument:function(){return this.ownerDocument},getElementById:function(a){return document.id(Slick.find(this,
"#"+(""+a).replace(/(\W)/g,"\\$1")))},match:function(a){return!a||Slick.match(this,a)}});window.$$==null&&Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string")return Slick.search(this.document,a,new Elements);if(Type.isEnumerable(a))return new Elements(a)}return new Elements(arguments)});var c={before:function(a,b){var c=b.parentNode;c&&c.insertBefore(a,b)},after:function(a,b){var c=b.parentNode;c&&c.insertBefore(a,b.nextSibling)},bottom:function(a,b){b.appendChild(a)},
top:function(a,b){b.insertBefore(a,b.firstChild)}};c.inside=c.bottom;var d={},e={},f={};Array.forEach(["type","value","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","rowSpan","tabIndex","useMap"],function(a){f[a.toLowerCase()]=a});f.html="innerHTML";f.text=document.createElement("div").textContent==null?"innerText":"textContent";Object.forEach(f,function(a,b){e[b]=function(b,c){b[a]=c};d[b]=function(b){return b[a]}});Array.forEach(["compact","nowrap","ismap","declare",
"noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked","autofocus","controls","autoplay","loop"],function(a){var b=a.toLowerCase();e[b]=function(b,c){b[a]=!!c};d[b]=function(b){return!!b[a]}});Object.append(e,{"class":function(a,b){"className"in a?a.className=b||"":a.setAttribute("class",b)},"for":function(a,b){"htmlFor"in a?a.htmlFor=b:a.setAttribute("for",b)},style:function(a,b){a.style?a.style.cssText=b:a.setAttribute("style",b)},value:function(a,b){a.value=
b!=null?b:""}});d["class"]=function(a){return"className"in a?a.className||null:a.getAttribute("class")};b=document.createElement("button");try{b.type="button"}catch(g){}if(b.type!="button")e.type=function(a,b){a.setAttribute("type",b)};b=null;b=document.createElement("input");b.value="t";b.type="submit";if(b.value!="t")e.type=function(a,b){var c=a.value;a.type=b;a.value=c};var b=null,i=function(a){a.random="attribute";return a.getAttribute("random")=="attribute"}(document.createElement("div"));Element.implement({setProperty:function(a,
b){var c=e[a.toLowerCase()];if(c)c(this,b);else{if(i)var d=this.retrieve("$attributeWhiteList",{});if(b==null){this.removeAttribute(a);i&&delete d[a]}else{this.setAttribute(a,""+b);i&&(d[a]=true)}}return this},setProperties:function(a){for(var b in a)this.setProperty(b,a[b]);return this},getProperty:function(a){var b=d[a.toLowerCase()];if(b)return b(this);if(i){var c=this.getAttributeNode(a),b=this.retrieve("$attributeWhiteList",{});if(!c)return null;if(c.expando&&!b[a]){c=this.outerHTML;if(c.substr(0,
c.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(a)<0)return null;b[a]=true}}b=Slick.getAttribute(this,a);return!b&&!Slick.hasAttribute(this,a)?null:b},getProperties:function(){var a=Array.from(arguments);return a.map(this.getProperty,this).associate(a)},removeProperty:function(a){return this.setProperty(a,null)},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this},set:function(a,b){var c=Element.Properties[a];c&&c.set?c.set.call(this,b):this.setProperty(a,b)}.overloadSetter(),
get:function(a){var b=Element.Properties[a];return b&&b.get?b.get.apply(this):this.getProperty(a)}.overloadGetter(),erase:function(a){var b=Element.Properties[a];b&&b.erase?b.erase.apply(this):this.removeProperty(a);return this},hasClass:function(a){return this.className.clean().contains(a," ")},addClass:function(a){if(!this.hasClass(a))this.className=(this.className+" "+a).clean();return this},removeClass:function(a){this.className=this.className.replace(RegExp("(^|\\s)"+a+"(?:\\s|$)"),"$1");return this},
toggleClass:function(a,b){b==null&&(b=!this.hasClass(a));return b?this.addClass(a):this.removeClass(a)},adopt:function(){var a=this,b,c=Array.flatten(arguments),d=c.length;d>1&&(a=b=document.createDocumentFragment());for(var e=0;e<d;e++){var f=document.id(c[e],true);f&&a.appendChild(f)}b&&this.appendChild(b);return this},appendText:function(a,b){return this.grab(this.getDocument().newTextNode(a),b)},grab:function(a,b){c[b||"bottom"](document.id(a,true),this);return this},inject:function(a,b){c[b||
"bottom"](this,document.id(a,true));return this},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this,a);return this},wraps:function(a,b){a=document.id(a,true);return this.replaces(a).grab(a,b)},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(a){return a.selected}))},toQueryString:function(){var a=[];this.getElements("input, select, textarea").each(function(b){var c=b.type;if(b.name&&!b.disabled&&!(c=="submit"||c=="reset"||
c=="file"||c=="image")){c=b.get("tag")=="select"?b.getSelected().map(function(a){return document.id(a).get("value")}):(c=="radio"||c=="checkbox")&&!b.checked?null:b.get("value");Array.from(c).each(function(c){typeof c!="undefined"&&a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(c))})}});return a.join("&")}});var j={},m={},h=function(a){return m[a]||(m[a]={})},k=function(a){var b=a.uniqueNumber;a.removeEvents&&a.removeEvents();a.clearAttributes&&a.clearAttributes();if(b!=null){delete j[b];
delete m[b]}return a},o={input:"checked",option:"selected",textarea:"value"};Element.implement({destroy:function(){var a=k(this).getElementsByTagName("*");Array.each(a,k);Element.dispose(this);return null},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this},dispose:function(){return this.parentNode?this.parentNode.removeChild(this):this},clone:function(a,b){var a=a!==false,c=this.cloneNode(a),d=[c],e=[this],f;if(a){d.append(Array.from(c.getElementsByTagName("*")));e.append(Array.from(this.getElementsByTagName("*")))}for(f=
d.length;f--;){var k=d[f],g=e[f];b||k.removeAttribute("id");if(k.clearAttributes){k.clearAttributes();k.mergeAttributes(g);k.removeAttribute("uniqueNumber");if(k.options)for(var j=k.options,m=g.options,h=j.length;h--;)j[h].selected=m[h].selected}(j=o[g.tagName.toLowerCase()])&&g[j]&&(k[j]=g[j])}if(Browser.ie){d=c.getElementsByTagName("object");e=this.getElementsByTagName("object");for(f=d.length;f--;)d[f].outerHTML=e[f].outerHTML}return document.id(c)}});[Element,Window,Document].invoke("implement",
{addListener:function(a,b,c){if(a=="unload")var d=b,e=this,b=function(){e.removeListener("unload",b);d()};else j[Slick.uidOf(this)]=this;this.addEventListener?this.addEventListener(a,b,!!c):this.attachEvent("on"+a,b);return this},removeListener:function(a,b,c){this.removeEventListener?this.removeEventListener(a,b,!!c):this.detachEvent("on"+a,b);return this},retrieve:function(a,b){var c=h(Slick.uidOf(this)),d=c[a];b!=null&&d==null&&(d=c[a]=b);return d!=null?d:null},store:function(a,b){h(Slick.uidOf(this))[a]=
b;return this},eliminate:function(a){delete h(Slick.uidOf(this))[a];return this}});window.attachEvent&&!window.addEventListener&&window.addListener("unload",function(){Object.each(j,k);window.CollectGarbage&&CollectGarbage()});Element.Properties={};Element.Properties.style={set:function(a){this.style.cssText=a},get:function(){return this.style.cssText},erase:function(){this.style.cssText=""}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase()}};Element.Properties.html={set:function(a){a==
null?a="":typeOf(a)=="array"&&(a=a.join(""));this.innerHTML=a},erase:function(){this.innerHTML=""}};b=document.createElement("div");b.innerHTML="<nav></nav>";var q=b.childNodes.length==1;if(!q)for(var b=["abbr","article","aside","audio","canvas","datalist","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],u=document.createDocumentFragment(),r=b.length;r--;)u.createElement(b[r]);b=null;b=Function.attempt(function(){document.createElement("table").innerHTML=
"<tr><td></td></tr>";return true});r=document.createElement("tr");r.innerHTML="<td></td>";var w=r.innerHTML=="<td></td>",r=null;if(!b||!w||!q)Element.Properties.html.set=function(a){var b={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};b.thead=b.tfoot=b.tbody;return function(c){var d=b[this.get("tag")];!d&&!q&&(d=[0,"",""]);if(!d)return a.call(this,c);var e=d[0],f=document.createElement("div"),
k=f;q||u.appendChild(f);for(f.innerHTML=[d[1],c,d[2]].flatten().join("");e--;)k=k.firstChild;this.empty().adopt(k.childNodes);q||u.removeChild(f)}}(Element.Properties.html.set);b=document.createElement("form");b.innerHTML="<select><option>s</option></select>";if(b.firstChild.value!="s")Element.Properties.value={set:function(a){if(this.get("tag")!="select")return this.setProperty("value",a);for(var b=this.getElements("option"),c=0;c<b.length;c++){var d=b[c],e=d.getAttributeNode("value");if((e&&e.specified?
d.value:d.get("text"))==a)return d.selected=true}},get:function(){var a=this,b=a.get("tag");if(b!="select"&&b!="option")return this.getProperty("value");if(b=="select"&&!(a=a.getSelected()[0]))return"";return(b=a.getAttributeNode("value"))&&b.specified?a.value:a.get("text")}};b=null;if(document.createElement("div").getAttributeNode("id"))Element.Properties.id={set:function(a){this.id=this.getAttributeNode("id").value=a},get:function(){return this.id||null},erase:function(){this.id=this.getAttributeNode("id").value=
""}}})();
(function(){var b=document.html,a=document.createElement("div");a.style.color="red";a.style.color=null;var c=a.style.color=="red",a=null;Element.Properties.styles={set:function(a){this.setStyles(a)}};var a=b.style.opacity!=null,d=b.style.filter!=null,e=/alpha\(opacity=([\d.]+)\)/i,f=a?function(a,b){a.style.opacity=b}:d?function(a,b){var c=a.style;if(!a.currentStyle||!a.currentStyle.hasLayout)c.zoom=1;var b=b==null||b==1?"":"alpha(opacity="+(b*100).limit(0,100).round()+")",d=c.filter||a.getComputedStyle("filter")||"";
c.filter=e.test(d)?d.replace(e,b):d+b;c.filter||c.removeAttribute("filter")}:function(a,b){a.store("$opacity",b);a.style.visibility=b>0||b==null?"visible":"hidden"},g=a?function(a){a=a.style.opacity||a.getComputedStyle("opacity");return a==""?1:a.toFloat()}:d?function(a){var a=a.style.filter||a.getComputedStyle("filter"),b;a&&(b=a.match(e));return b==null||a==null?1:b[1]/100}:function(a){var b=a.retrieve("$opacity");b==null&&(b=a.style.visibility=="hidden"?0:1);return b},i=b.style.cssFloat==null?
"styleFloat":"cssFloat";Element.implement({getComputedStyle:function(a){if(this.currentStyle)return this.currentStyle[a.camelCase()];var b=Element.getDocument(this).defaultView;return(b=b?b.getComputedStyle(this,null):null)?b.getPropertyValue(a==i?"float":a.hyphenate()):null},setStyle:function(a,b){if(a=="opacity"){b!=null&&(b=parseFloat(b));f(this,b);return this}a=(a=="float"?i:a).camelCase();if(typeOf(b)!="string")var d=(Element.Styles[a]||"@").split(" "),b=Array.from(b).map(function(a,b){return!d[b]?
"":typeOf(a)=="number"?d[b].replace("@",Math.round(a)):a}).join(" ");else b==""+Number(b)&&(b=Math.round(b));this.style[a]=b;(b==""||b==null)&&c&&this.style.removeAttribute&&this.style.removeAttribute(a);return this},getStyle:function(a){if(a=="opacity")return g(this);var a=(a=="float"?i:a).camelCase(),b=this.style[a];if(!b||a=="zIndex"){var b=[],c;for(c in Element.ShortStyles)if(a==c){for(var d in Element.ShortStyles[c])b.push(this.getStyle(d));return b.join(" ")}b=this.getComputedStyle(a)}if(b){b=
""+b;(c=b.match(/rgba?\([\d\s,]+\)/))&&(b=b.replace(c[0],c[0].rgbToHex()))}if(Browser.ie&&isNaN(parseFloat(b))){if(/^(height|width)$/.test(a)){var e=0;(a=="width"?["left","right"]:["top","bottom"]).each(function(a){e=e+(this.getStyle("border-"+a+"-width").toInt()+this.getStyle("padding-"+a).toInt())},this);return this["offset"+a.capitalize()]-e+"px"}if(Browser.opera&&(""+b).indexOf("px")!=-1)return b;if(/^border(.+)Width|margin|padding/.test(a))return"0px"}return b},setStyles:function(a){for(var b in a)this.setStyle(b,
a[b]);return this},getStyles:function(){var a={};Array.flatten(arguments).each(function(b){a[b]=this.getStyle(b)},this);return a}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",
borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(a){var b=Element.ShortStyles,c=Element.Styles;["margin","padding"].each(function(d){var e=d+a;b[d][e]=c[e]="@px"});var d="border"+a;b.border[d]=c[d]="@px @ rgb(@, @, @)";var e=
d+"Width",f=d+"Style",g=d+"Color";b[d]={};b.borderWidth[e]=b[d][e]=c[e]="@px";b.borderStyle[f]=b[d][f]=c[f]="@";b.borderColor[g]=b[d][g]=c[g]="rgb(@, @, @)"})})();
(function(){Element.Properties.events={set:function(a){this.addEvents(a)}};[Element,Window,Document].invoke("implement",{addEvent:function(a,b,d){var e=this.retrieve("events",{});e[a]||(e[a]={keys:[],values:[]});if(e[a].keys.contains(b))return this;e[a].keys.push(b);var f=a,g=Element.Events[a],i=b,j=this;if(g){g.onAdd&&g.onAdd.call(this,b,a);g.condition&&(i=function(d){return g.condition.call(this,d,a)?b.call(this,d):true});g.base&&(f=Function.from(g.base).call(this,a))}var m=function(){return b.call(j)},
h=Element.NativeEvents[f];if(h){h==2&&(m=function(a){a=new DOMEvent(a,j.getWindow());i.call(j,a)===false&&a.stop()});this.addListener(f,m,d)}e[a].values.push(m);return this},removeEvent:function(a,b,d){var e=this.retrieve("events");if(!e||!e[a])return this;var f=e[a],g=f.keys.indexOf(b);if(g==-1)return this;e=f.values[g];delete f.keys[g];delete f.values[g];if(f=Element.Events[a]){f.onRemove&&f.onRemove.call(this,b,a);f.base&&(a=Function.from(f.base).call(this,a))}return Element.NativeEvents[a]?this.removeListener(a,
e,d):this},addEvents:function(a){for(var b in a)this.addEvent(b,a[b]);return this},removeEvents:function(a){var b;if(typeOf(a)=="object"){for(b in a)this.removeEvent(b,a[b]);return this}var d=this.retrieve("events");if(!d)return this;if(a){if(d[a]){d[a].keys.each(function(b){this.removeEvent(a,b)},this);delete d[a]}}else{for(b in d)this.removeEvents(b);this.eliminate("events")}return this},fireEvent:function(a,b,d){var e=this.retrieve("events");if(!e||!e[a])return this;b=Array.from(b);e[a].keys.each(function(a){d?
a.delay(d,this,b):a.apply(this,b)},this);return this},cloneEvents:function(a,b){var a=document.id(a),d=a.retrieve("events");if(!d)return this;if(b)d[b]&&d[b].keys.each(function(a){this.addEvent(b,a)},this);else for(var e in d)this.cloneEvents(a,e);return this}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,
touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,input:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};Element.Events={mousewheel:{base:Browser.firefox?"DOMMouseScroll":"mousewheel"}};if("onmouseenter"in document.documentElement)Element.NativeEvents.mouseenter=Element.NativeEvents.mouseleave=2;else{var b=function(a){a=a.relatedTarget;return a==null?true:!a?
false:a!=this&&a.prefix!="xul"&&typeOf(this)!="document"&&!this.contains(a)};Element.Events.mouseenter={base:"mouseover",condition:b};Element.Events.mouseleave={base:"mouseout",condition:b}}if(!window.addEventListener){Element.NativeEvents.propertychange=2;Element.Events.change={base:function(){var a=this.type;return this.get("tag")=="input"&&(a=="radio"||a=="checkbox")?"propertychange":"change"},condition:function(a){return this.type!="radio"||a.event.propertyName=="checked"&&this.checked}}}})();
(function(){var b,a=!!window.addEventListener;Element.NativeEvents.focusin=Element.NativeEvents.focusout=2;var c=function(a,b,c,d,e){for(;e&&e!=a;){if(b(e,d))return c.call(e,d,e);e=document.id(e.parentNode)}},d={mouseenter:{base:"mouseover"},mouseleave:{base:"mouseout"},focus:{base:"focus"+(a?"":"in"),capture:true},blur:{base:a?"blur":"focusout",capture:true}},e=function(a){return{base:"focusin",remove:function(b,c){var d=b.retrieve("$delegation:"+a+"listeners",{})[c];if(d&&d.forms)for(var e=d.forms.length;e--;)d.forms[e].removeEvent(a,
d.fns[e])},listen:function(b,d,e,f,g,i){if(f=g.get("tag")=="form"?g:f.target.getParent("form")){var r=b.retrieve("$delegation:"+a+"listeners",{}),w=r[i]||{forms:[],fns:[]},l=w.forms,s=w.fns;if(l.indexOf(f)==-1){l.push(f);l=function(a){c(b,d,e,a,g)};f.addEvent(a,l);s.push(l);r[i]=w;b.store("$delegation:"+a+"listeners",r)}}}}},f=function(a){return{base:"focusin",listen:function(b,d,e,f,g){var i={blur:function(){this.removeEvents(i)}};i[a]=function(a){c(b,d,e,a,g)};f.target.addEvents(i)}}};a||Object.append(d,
{submit:e("submit"),reset:e("reset"),change:f("change"),select:f("select")});var a=Element.prototype,g=a.addEvent,i=a.removeEvent,a=function(a,b){return function(c,d,e){if(c.indexOf(":relay")==-1)return a.call(this,c,d,e);var f=Slick.parse(c).expressions[0][0];if(f.pseudos[0].key!="relay")return a.call(this,c,d,e);var g=f.tag;f.pseudos.slice(1).each(function(a){g=g+(":"+a.key+(a.value?"("+a.value+")":""))});a.call(this,c,d);return b.call(this,g,f.pseudos[0].value,d)}};b=function(a,c,e,f){var g=this.retrieve("$delegates",
{}),q=g[a];if(!q)return this;if(f){var c=a,e=q[f].delegator,u=d[a]||{},a=u.base||c;u.remove&&u.remove(this,f);delete q[f];g[c]=q;return i.call(this,a,e)}if(e)for(u in q){f=q[u];if(f.match==c&&f.fn==e)return b.call(this,a,c,e,u)}else for(u in q){f=q[u];f.match==c&&b.call(this,a,c,f.fn,u)}return this};[Element,Window,Document].invoke("implement",{addEvent:a(g,function(a,b,e){var f=this.retrieve("$delegates",{}),i=f[a];if(i)for(var q in i)if(i[q].fn==e&&i[q].match==b)return this;q=a;var u=b,r=d[a]||
{},a=r.base||q,b=function(a){return Slick.match(a,u)},w=Element.Events[q];if(w&&w.condition)var l=b,s=w.condition,b=function(b,c){return l(b,c)&&s.call(b,c,a)};var p=this,n=String.uniqueID(),w=r.listen?function(a,c){if(!c&&a&&a.target)c=a.target;c&&r.listen(p,b,e,a,c,n)}:function(a,d){if(!d&&a&&a.target)d=a.target;d&&c(p,b,e,a,d)};i||(i={});i[n]={match:u,fn:e,delegator:w};f[q]=i;return g.call(this,a,w,r.capture)}),removeEvent:a(i,b)})})();
(function(){function b(a){return h(a,"-moz-box-sizing")=="border-box"}function a(a){return h(a,"border-top-width").toInt()||0}function c(a){return h(a,"border-left-width").toInt()||0}function d(a){return/^(?:body|html)$/i.test(a.tagName)}function e(a){a=a.getDocument();return!a.compatMode||a.compatMode=="CSS1Compat"?a.html:a.body}var f=document.createElement("div"),g=document.createElement("div");f.style.height="0";f.appendChild(g);var i=g.offsetParent===f,f=g=null,j=function(a){return h(a,"position")!=
"static"||d(a)},m=function(a){return j(a)||/^(?:table|td|th)$/i.test(a.tagName)};Element.implement({scrollTo:function(a,b){if(d(this))this.getWindow().scrollTo(a,b);else{this.scrollLeft=a;this.scrollTop=b}return this},getSize:function(){return d(this)?this.getWindow().getSize():{x:this.offsetWidth,y:this.offsetHeight}},getScrollSize:function(){return d(this)?this.getWindow().getScrollSize():{x:this.scrollWidth,y:this.scrollHeight}},getScroll:function(){return d(this)?this.getWindow().getScroll():
{x:this.scrollLeft,y:this.scrollTop}},getScrolls:function(){for(var a=this.parentNode,b={x:0,y:0};a&&!d(a);){b.x=b.x+a.scrollLeft;b.y=b.y+a.scrollTop;a=a.parentNode}return b},getOffsetParent:i?function(){var a=this;if(d(a)||h(a,"position")=="fixed")return null;for(var b=h(a,"position")=="static"?m:j;a=a.parentNode;)if(b(a))return a;return null}:function(){if(d(this)||h(this,"position")=="fixed")return null;try{return this.offsetParent}catch(a){}return null},getOffsets:function(){if(this.getBoundingClientRect&&
!Browser.Platform.ios){var e=this.getBoundingClientRect(),f=document.id(this.getDocument().documentElement),g=f.getScroll(),i=this.getScrolls(),j=h(this,"position")=="fixed";return{x:e.left.toInt()+i.x+(j?0:g.x)-f.clientLeft,y:e.top.toInt()+i.y+(j?0:g.y)-f.clientTop}}e=this;f={x:0,y:0};if(d(this))return f;for(;e&&!d(e);){f.x=f.x+e.offsetLeft;f.y=f.y+e.offsetTop;if(Browser.firefox){if(!b(e)){f.x=f.x+c(e);f.y=f.y+a(e)}if((g=e.parentNode)&&h(g,"overflow")!="visible"){f.x=f.x+c(g);f.y=f.y+a(g)}}else if(e!=
this&&Browser.safari){f.x=f.x+c(e);f.y=f.y+a(e)}e=e.offsetParent}if(Browser.firefox&&!b(this)){f.x=f.x-c(this);f.y=f.y-a(this)}return f},getPosition:function(b){var d=this.getOffsets(),e=this.getScrolls(),d={x:d.x-e.x,y:d.y-e.y};if(b&&(b=document.id(b))){e=b.getPosition();return{x:d.x-e.x-c(b),y:d.y-e.y-a(b)}}return d},getCoordinates:function(a){if(d(this))return this.getWindow().getCoordinates();var a=this.getPosition(a),b=this.getSize(),a={left:a.x,top:a.y,width:b.x,height:b.y};a.right=a.left+a.width;
a.bottom=a.top+a.height;return a},computePosition:function(a){return{left:a.x-(h(this,"margin-left").toInt()||0),top:a.y-(h(this,"margin-top").toInt()||0)}},setPosition:function(a){return this.setStyles(this.computePosition(a))}});[Document,Window].invoke("implement",{getSize:function(){var a=e(this);return{x:a.clientWidth,y:a.clientHeight}},getScroll:function(){var a=this.getWindow(),b=e(this);return{x:a.pageXOffset||b.scrollLeft,y:a.pageYOffset||b.scrollTop}},getScrollSize:function(){var a=e(this),
b=this.getSize(),c=this.getDocument().body;return{x:Math.max(a.scrollWidth,c.scrollWidth,b.x),y:Math.max(a.scrollHeight,c.scrollHeight,b.y)}},getPosition:function(){return{x:0,y:0}},getCoordinates:function(){var a=this.getSize();return{top:0,left:0,bottom:a.y,right:a.x,height:a.y,width:a.x}}});var h=Element.getComputedStyle})();Element.alias({position:"setPosition"});
[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y},getWidth:function(){return this.getSize().x},getScrollTop:function(){return this.getScroll().y},getScrollLeft:function(){return this.getScroll().x},getScrollHeight:function(){return this.getScrollSize().y},getScrollWidth:function(){return this.getScrollSize().x},getTop:function(){return this.getPosition().y},getLeft:function(){return this.getPosition().x}});
(function(){var b=this.Fx=new Class({Implements:[Chain,Events,Options],options:{fps:60,unit:false,duration:500,frames:null,frameSkip:true,link:"ignore"},initialize:function(a){this.subject=this.subject||this;this.setOptions(a)},getTransition:function(){return function(a){return-(Math.cos(Math.PI*a)-1)/2}},step:function(a){if(this.options.frameSkip){var b=(this.time!=null?a-this.time:0)/this.frameInterval;this.time=a;this.frame=this.frame+b}else this.frame++;if(this.frame<this.frames)this.set(this.compute(this.from,
this.to,this.transition(this.frame/this.frames)));else{this.frame=this.frames;this.set(this.compute(this.from,this.to,1));this.stop()}},set:function(a){return a},compute:function(a,c,d){return b.compute(a,c,d)},check:function(){if(!this.isRunning())return true;switch(this.options.link){case "cancel":this.cancel();return true;case "chain":this.chain(this.caller.pass(arguments,this))}return false},start:function(a,c){if(!this.check(a,c))return this;this.from=a;this.to=c;this.frame=this.options.frameSkip?
0:-1;this.time=null;this.transition=this.getTransition();var d=this.options.frames,f=this.options.fps,h=this.options.duration;this.duration=b.Durations[h]||h.toInt();this.frameInterval=1E3/f;this.frames=d||Math.round(this.duration/this.frameInterval);this.fireEvent("start",this.subject);e.call(this,f);return this},stop:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps);if(this.frames==this.frame){this.fireEvent("complete",this.subject);this.callChain()||this.fireEvent("chainComplete",
this.subject)}else this.fireEvent("stop",this.subject)}return this},cancel:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps);this.frame=this.frames;this.fireEvent("cancel",this.subject).clearChain()}return this},pause:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps)}return this},resume:function(){this.frame<this.frames&&!this.isRunning()&&e.call(this,this.options.fps);return this},isRunning:function(){var b=a[this.options.fps];return b&&b.contains(this)}});
b.compute=function(a,b,c){return(b-a)*c+a};b.Durations={"short":250,normal:500,"long":1E3};var a={},c={},d=function(){for(var a=Date.now(),b=this.length;b--;){var c=this[b];c&&c.step(a)}},e=function(b){var e=a[b]||(a[b]=[]);e.push(this);c[b]||(c[b]=d.periodical(Math.round(1E3/b),e))},f=function(b){var d=a[b];if(d){d.erase(this);if(!d.length&&c[b]){delete a[b];c[b]=clearInterval(c[b])}}}})();
Fx.CSS=new Class({Extends:Fx,prepare:function(b,a,c){var c=Array.from(c),d=c[0],c=c[1];if(c==null){var c=d,d=b.getStyle(a),e=this.options.unit;if(e&&d.slice(-e.length)!=e&&parseFloat(d)!=0){b.setStyle(a,c+e);var f=b.getComputedStyle(a);if(!/px$/.test(f)){f=b.style[("pixel-"+a).camelCase()];if(f==null){var g=b.style.left;b.style.left=c+e;f=b.style.pixelLeft;b.style.left=g}}d=(c||1)/(parseFloat(f)||1)*(parseFloat(d)||0);b.setStyle(a,d+e)}}return{from:this.parse(d),to:this.parse(c)}},parse:function(b){b=
Function.from(b)();b=typeof b=="string"?b.split(" "):Array.from(b);return b.map(function(a){var a=""+a,b=false;Object.each(Fx.CSS.Parsers,function(d){if(!b){var e=d.parse(a);if(e||e===0)b={value:e,parser:d}}});return b=b||{value:a,parser:Fx.CSS.Parsers.String}})},compute:function(b,a,c){var d=[];Math.min(b.length,a.length).times(function(e){d.push({value:b[e].parser.compute(b[e].value,a[e].value,c),parser:b[e].parser})});d.$family=Function.from("fx:css:value");return d},serve:function(b,a){typeOf(b)!=
"fx:css:value"&&(b=this.parse(b));var c=[];b.each(function(b){c=c.concat(b.parser.serve(b.value,a))});return c},render:function(b,a,c,d){b.setStyle(a,this.serve(c,d))},search:function(b){if(Fx.CSS.Cache[b])return Fx.CSS.Cache[b];var a={},c=RegExp("^"+b.escapeRegExp()+"$");Array.each(document.styleSheets,function(b){var e=b.href;if(!e||!e.contains("://")||e.contains(document.domain))Array.each(b.rules||b.cssRules,function(b){if(b.style){var d=b.selectorText?b.selectorText.replace(/^\w+/,function(a){return a.toLowerCase()}):
null;d&&c.test(d)&&Object.each(Element.Styles,function(c,d){if(b.style[d]&&!Element.ShortStyles[d]){c=""+b.style[d];a[d]=/^rgb/.test(c)?c.rgbToHex():c}})}})});return Fx.CSS.Cache[b]=a}});Fx.CSS.Cache={};
Fx.CSS.Parsers={Color:{parse:function(b){return b.match(/^#[0-9a-f]{3,6}$/i)?b.hexToRgb(true):(b=b.match(/(\d+),\s*(\d+),\s*(\d+)/))?[b[1],b[2],b[3]]:false},compute:function(b,a,c){return b.map(function(d,e){return Math.round(Fx.compute(b[e],a[e],c))})},serve:function(b){return b.map(Number)}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return a?b+a:b}},String:{parse:Function.from(!1),compute:function(b,a){return a},serve:function(b){return b}}};
Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property}this.render(this.element,b,a,this.options.unit);return this},start:function(b,a,c){if(!this.check(b,a,c))return this;var d=Array.flatten(arguments);this.property=this.options.property||d.shift();d=this.prepare(this.element,this.property,d);return this.parent(d.from,d.to)}});
Element.Properties.tween={set:function(b){this.get("tween").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("tween");if(!b){b=new Fx.Tween(this,{link:"cancel"});this.store("tween",b)}return b}};
Element.implement({tween:function(b,a,c){this.get("tween").start(b,a,c);return this},fade:function(b){var a=this.get("tween"),c,d=["opacity"].append(arguments),e;d[1]==null&&(d[1]="toggle");switch(d[1]){case "in":c="start";d[1]=1;break;case "out":c="start";d[1]=0;break;case "show":c="set";d[1]=1;break;case "hide":c="set";d[1]=0;break;case "toggle":e=this.retrieve("fade:flag",this.getStyle("opacity")==1);c="start";d[1]=e?0:1;this.store("fade:flag",!e);e=true;break;default:c="start"}e||this.eliminate("fade:flag");
a[c].apply(a,d);d=d[d.length-1];c=="set"||d!=0?this.setStyle("visibility",d==0?"hidden":"visible"):a.chain(function(){this.element.setStyle("visibility","hidden");this.callChain()});return this},highlight:function(b,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=a=="transparent"?"#fff":a}var c=this.get("tween");c.start("background-color",b||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));c.callChain()}.bind(this));
return this}});
Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(b){typeof b=="string"&&(b=this.search(b));for(var a in b)this.render(this.element,a,b[a],this.options.unit);return this},compute:function(b,a,c){var d={},e;for(e in b)d[e]=this.parent(b[e],a[e],c);return d},start:function(b){if(!this.check(b))return this;typeof b=="string"&&(b=this.search(b));var a={},c={},d;for(d in b){var e=this.prepare(this.element,d,b[d]);a[d]=e.from;
c[d]=e.to}return this.parent(a,c)}});Element.Properties.morph={set:function(b){this.get("morph").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("morph");if(!b){b=new Fx.Morph(this,{link:"cancel"});this.store("morph",b)}return b}};Element.implement({morph:function(b){this.get("morph").start(b);return this}});
Fx.implement({getTransition:function(){var b=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof b=="string"){var a=b.split(":"),b=Fx.Transitions,b=b[a[0]]||b[a[0].capitalize()];a[1]&&(b=b["ease"+a[1].capitalize()+(a[2]?a[2].capitalize():"")])}return b}});Fx.Transition=function(b,a){var a=Array.from(a),c=function(c){return b(c,a)};return Object.append(c,{easeIn:c,easeOut:function(c){return 1-b(1-c,a)},easeInOut:function(c){return(c<=0.5?b(2*c,a):2-b(2*(1-c),a))/2}})};Fx.Transitions={linear:function(b){return b}};
Fx.Transitions.extend=function(b){for(var a in b)Fx.Transitions[a]=new Fx.Transition(b[a])};
Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a&&a[0]||6)},Expo:function(b){return Math.pow(2,8*(b-1))},Circ:function(b){return 1-Math.sin(Math.acos(b))},Sine:function(b){return 1-Math.cos(b*Math.PI/2)},Back:function(b,a){a=a&&a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a)},Bounce:function(b){for(var a,c=0,d=1;;c=c+d,d=d/2)if(b>=(7-4*c)/11){a=d*d-Math.pow((11-6*c-11*b)/4,2);break}return a},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a&&a[0]||1)/3)}});
["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(b){return Math.pow(b,a+2)})});
(function(){var b=function(){},a="onprogress"in new Browser.Request,c=this.Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,timeout:0,noCache:false},initialize:function(a){this.xhr=new Browser.Request;this.setOptions(a);
this.headers=this.options.headers},onStateChange:function(){var c=this.xhr;if(c.readyState==4&&this.running){this.running=false;this.status=0;Function.attempt(function(){var a=c.status;this.status=a==1223?204:a}.bind(this));c.onreadystatechange=b;if(a)c.onprogress=c.onloadstart=b;clearTimeout(this.timer);this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML};this.options.isSuccess.call(this,this.status)?this.success(this.response.text,this.response.xml):this.failure()}},isSuccess:function(){var a=
this.status;return a>=200&&a<300},isRunning:function(){return!!this.running},processScripts:function(a){return this.options.evalResponse||/(ecma|java)script/.test(this.getHeader("Content-type"))?Browser.exec(a):a.stripScripts(this.options.evalScripts)},success:function(a,b){this.onSuccess(this.processScripts(a),b)},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain()},failure:function(){this.onFailure()},onFailure:function(){this.fireEvent("complete").fireEvent("failure",
this.xhr)},loadstart:function(a){this.fireEvent("loadstart",[a,this.xhr])},progress:function(a){this.fireEvent("progress",[a,this.xhr])},timeout:function(){this.fireEvent("timeout",this.xhr)},setHeader:function(a,b){this.headers[a]=b;return this},getHeader:function(a){return Function.attempt(function(){return this.xhr.getResponseHeader(a)}.bind(this))},check:function(){if(!this.running)return true;switch(this.options.link){case "cancel":this.cancel();return true;case "chain":this.chain(this.caller.pass(arguments,
this))}return false},send:function(b){if(!this.check(b))return this;this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.running=true;var c=typeOf(b);if(c=="string"||c=="element")b={data:b};var c=this.options,b=Object.append({data:c.data,url:c.url,method:c.method},b),c=b.data,d=""+b.url,b=b.method.toLowerCase();switch(typeOf(c)){case "element":c=document.id(c).toQueryString();break;case "object":case "hash":c=Object.toQueryString(c)}if(this.options.format)var i="format="+this.options.format,
c=c?i+"&"+c:i;if(this.options.emulation&&!["get","post"].contains(b)){b="_method="+b;c=c?b+"&"+c:b;b="post"}this.options.urlEncoded&&["post","put"].contains(b)&&(this.headers["Content-type"]="application/x-www-form-urlencoded"+(this.options.encoding?"; charset="+this.options.encoding:""));if(!d)d=document.location.pathname;i=d.lastIndexOf("/");if(i>-1&&(i=d.indexOf("#"))>-1)d=d.substr(0,i);this.options.noCache&&(d=d+((d.contains("?")?"&":"?")+String.uniqueID()));if(c&&b=="get"){d=d+((d.contains("?")?
"&":"?")+c);c=null}var j=this.xhr;if(a){j.onloadstart=this.loadstart.bind(this);j.onprogress=this.progress.bind(this)}j.open(b.toUpperCase(),d,this.options.async,this.options.user,this.options.password);if(this.options.user&&"withCredentials"in j)j.withCredentials=true;j.onreadystatechange=this.onStateChange.bind(this);Object.each(this.headers,function(a,b){try{j.setRequestHeader(b,a)}catch(c){this.fireEvent("exception",[b,a])}},this);this.fireEvent("request");j.send(c);if(this.options.async){if(this.options.timeout)this.timer=
this.timeout.delay(this.options.timeout,this)}else this.onStateChange();return this},cancel:function(){if(!this.running)return this;this.running=false;var c=this.xhr;c.abort();clearTimeout(this.timer);c.onreadystatechange=b;if(a)c.onprogress=c.onloadstart=b;this.xhr=new Browser.Request;this.fireEvent("cancel");return this}}),d={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(a){d[a]=function(b){var c={method:a};if(b!=null)c.data=b;return this.send(c)}});c.implement(d);Element.Properties.send=
{set:function(a){this.get("send").cancel().setOptions(a);return this},get:function(){var a=this.retrieve("send");if(!a){a=new c({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")});this.store("send",a)}return a}};Element.implement({send:function(a){var b=this.get("send");b.send({data:this,url:a||b.options.url});return this}})})();
Request.HTML=new Class({Extends:Request,options:{update:!1,append:!1,evalScripts:!0,filter:!1,headers:{Accept:"text/html, application/xml, text/xml, */*"}},success:function(b){var a=this.options,c=this.response;c.html=b.stripScripts(function(a){c.javascript=a});if(b=c.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i))c.html=b[1];b=(new Element("div")).set("html",c.html);c.tree=b.childNodes;c.elements=b.getElements(a.filter||"*");if(a.filter)c.tree=c.elements;if(a.update){b=document.id(a.update).empty();
a.filter?b.adopt(c.elements):b.set("html",c.html)}else if(a.append){var d=document.id(a.append);a.filter?c.elements.reverse().inject(d):d.adopt(b.getChildren())}a.evalScripts&&Browser.exec(c.javascript);this.onSuccess(c.tree,c.elements,c.html,c.javascript)}});Element.Properties.load={set:function(b){this.get("load").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("load");if(!b){b=new Request.HTML({data:this,link:"cancel",update:this,method:"get"});this.store("load",b)}return b}};
Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Type.isObject,url:Type.isString}));return this}});"undefined"==typeof JSON&&(this.JSON={});
(function(){var b={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},a=function(a){return b[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)};JSON.validate=function(a){a=a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");return/^[\],:{}\s]*$/.test(a)};JSON.encode=JSON.stringify?function(a){return JSON.stringify(a)}:function(b){b&&b.toJSON&&
(b=b.toJSON());switch(typeOf(b)){case "string":return'"'+b.replace(/[\x00-\x1f\\"]/g,a)+'"';case "array":return"["+b.map(JSON.encode).clean()+"]";case "object":case "hash":var d=[];Object.each(b,function(a,b){var c=JSON.encode(a);c&&d.push(JSON.encode(b)+":"+c)});return"{"+d+"}";case "number":case "boolean":return""+b;case "null":return"null"}return null};JSON.decode=function(a,b){if(!a||typeOf(a)!="string")return null;if(b||JSON.secure){if(JSON.parse)return JSON.parse(a);if(!JSON.validate(a))throw Error("JSON could not decode the input; security is enabled and the value is not secure.");
}return eval("("+a+")")}})();Request.JSON=new Class({Extends:Request,options:{secure:!0},initialize:function(b){this.parent(b);Object.append(this.headers,{Accept:"application/json","X-Request":"JSON"})},success:function(b){var a;try{a=this.response.json=JSON.decode(b,this.options.secure)}catch(c){this.fireEvent("error",[b,c]);return}if(a==null)this.onFailure();else this.onSuccess(a,b)}});
var Cookie=new Class({Implements:Options,options:{path:"/",domain:!1,duration:!1,secure:!1,document:document,encode:!0},initialize:function(b,a){this.key=b;this.setOptions(a)},write:function(b){this.options.encode&&(b=encodeURIComponent(b));this.options.domain&&(b=b+("; domain="+this.options.domain));this.options.path&&(b=b+("; path="+this.options.path));if(this.options.duration){var a=new Date;a.setTime(a.getTime()+this.options.duration*864E5);b=b+("; expires="+a.toGMTString())}this.options.secure&&
(b=b+"; secure");this.options.document.cookie=this.key+"="+b;return this},read:function(){var b=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return b?decodeURIComponent(b[1]):null},dispose:function(){(new Cookie(this.key,Object.merge({},this.options,{duration:-1}))).write("");return this}});Cookie.write=function(b,a,c){return(new Cookie(b,c)).write(a)};Cookie.read=function(b){return(new Cookie(b)).read()};Cookie.dispose=function(b,a){return(new Cookie(b,a)).dispose()};
(function(b,a){var c,d,e=[],f,g,i=a.createElement("div"),j=function(){clearTimeout(g);if(!c){Browser.loaded=c=true;a.removeListener("DOMContentLoaded",j).removeListener("readystatechange",m);a.fireEvent("domready");b.fireEvent("domready")}},m=function(){for(var a=e.length;a--;)if(e[a]()){j();return true}return false},h=function(){clearTimeout(g);m()||(g=setTimeout(h,10))};a.addListener("DOMContentLoaded",j);var k=function(){try{i.doScroll();return true}catch(a){}return false};if(i.doScroll&&!k()){e.push(k);
f=true}a.readyState&&e.push(function(){var b=a.readyState;return b=="loaded"||b=="complete"});"onreadystatechange"in a?a.addListener("readystatechange",m):f=true;f&&h();Element.Events.domready={onAdd:function(a){c&&a.call(this)}};Element.Events.load={base:"load",onAdd:function(a){d&&this==b&&a.call(this)},condition:function(){if(this==b){j();delete Element.Events.load}return true}};b.addEvent("load",function(){d=true})})(window,document);
(function(){var b=this.Swiff=new Class({Implements:Options,options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"window",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object},initialize:function(a,c){this.instance="Swiff_"+String.uniqueID();this.setOptions(c);var c=this.options,d=this.id=c.id||this.instance,e=document.id(c.container);b.CallBacks[this.instance]={};var f=c.params,g=c.vars,i=c.callBacks,j=
Object.append({height:c.height,width:c.width},c.properties),m=this,h;for(h in i){b.CallBacks[this.instance][h]=function(a){return function(){return a.apply(m.object,arguments)}}(i[h]);g[h]="Swiff.CallBacks."+this.instance+"."+h}f.flashVars=Object.toQueryString(g);if(Browser.ie){j.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";f.movie=a}else j.type="application/x-shockwave-flash";j.data=a;var d='<object id="'+d+'"',k;for(k in j)d=d+(" "+k+'="'+j[k]+'"');var d=d+">",o;for(o in f)f[o]&&(d=d+('<param name="'+
o+'" value="'+f[o]+'" />'));this.object=(e?e.empty():new Element("div")).set("html",d+"</object>").firstChild},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this.toElement(),a);return this},inject:function(a){document.id(a,true).appendChild(this.toElement());return this},remote:function(){return b.remote.apply(b,[this.toElement()].append(arguments))}});b.CallBacks={};b.remote=function(a,b){var d=a.CallFunction('<invoke name="'+b+'" returntype="javascript">'+__flash__argumentsToXML(arguments,
2)+"</invoke>");return eval(d)}})();


/*===============================
/media/system/js/punycode.js
================================================================================*/;
/*! https://mths.be/punycode v1.4.1 by @mathias - do not update to v2 */
!function(a){function b(a){throw new RangeError(E[a])}function c(a,b){for(var c=a.length,d=[];c--;)d[c]=b(a[c]);return d}function d(a,b){var d=a.split("@"),e="";d.length>1&&(e=d[0]+"@",a=d[1]),a=a.replace(D,".");var f=a.split("."),g=c(f,b).join(".");return e+g}function e(a){for(var b,c,d=[],e=0,f=a.length;f>e;)b=a.charCodeAt(e++),b>=55296&&56319>=b&&f>e?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function f(a){return c(a,function(a){var b="";return a>65535&&(a-=65536,b+=H(a>>>10&1023|55296),a=56320|1023&a),b+=H(a)}).join("")}function g(a){return 10>a-48?a-22:26>a-65?a-65:26>a-97?a-97:t}function h(a,b){return a+22+75*(26>a)-((0!=b)<<5)}function i(a,b,c){var d=0;for(a=c?G(a/x):a>>1,a+=G(a/b);a>F*v>>1;d+=t)a=G(a/F);return G(d+(F+1)*a/(a+w))}function j(a){var c,d,e,h,j,k,l,m,n,o,p=[],q=a.length,r=0,w=z,x=y;for(d=a.lastIndexOf(A),0>d&&(d=0),e=0;d>e;++e)a.charCodeAt(e)>=128&&b("not-basic"),p.push(a.charCodeAt(e));for(h=d>0?d+1:0;q>h;){for(j=r,k=1,l=t;h>=q&&b("invalid-input"),m=g(a.charCodeAt(h++)),(m>=t||m>G((s-r)/k))&&b("overflow"),r+=m*k,n=x>=l?u:l>=x+v?v:l-x,!(n>m);l+=t)o=t-n,k>G(s/o)&&b("overflow"),k*=o;c=p.length+1,x=i(r-j,c,0==j),G(r/c)>s-w&&b("overflow"),w+=G(r/c),r%=c,p.splice(r++,0,w)}return f(p)}function k(a){var c,d,f,g,j,k,l,m,n,o,p,q,r,w,x,B=[];for(a=e(a),q=a.length,c=z,d=0,j=y,k=0;q>k;++k)p=a[k],128>p&&B.push(H(p));for(f=g=B.length,g&&B.push(A);q>f;){for(l=s,k=0;q>k;++k)p=a[k],p>=c&&l>p&&(l=p);for(r=f+1,l-c>G((s-d)/r)&&b("overflow"),d+=(l-c)*r,c=l,k=0;q>k;++k)if(p=a[k],c>p&&++d>s&&b("overflow"),p==c){for(m=d,n=t;o=j>=n?u:n>=j+v?v:n-j,!(o>m);n+=t)x=m-o,w=t-o,B.push(H(h(o+x%w,0))),m=G(x/w);B.push(H(h(m,0))),j=i(d,r,f==g),d=0,++f}++d,++c}return B.join("")}function l(a){return d(a,function(a){return B.test(a)?j(a.slice(4).toLowerCase()):a})}function m(a){return d(a,function(a){return C.test(a)?"xn--"+k(a):a})}var n="object"==typeof exports&&exports&&!exports.nodeType&&exports,o="object"==typeof module&&module&&!module.nodeType&&module,p="object"==typeof global&&global;(p.global===p||p.window===p||p.self===p)&&(a=p);var q,r,s=2147483647,t=36,u=1,v=26,w=38,x=700,y=72,z=128,A="-",B=/^xn--/,C=/[^\x20-\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},F=t-u,G=Math.floor,H=String.fromCharCode;if(q={version:"1.4.1",ucs2:{decode:e,encode:f},decode:j,encode:k,toASCII:m,toUnicode:l},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return q});else if(n&&o)if(module.exports==n)o.exports=q;else for(r in q)q.hasOwnProperty(r)&&(n[r]=q[r]);else a.punycode=q}(this);


/*===============================
/media/system/js/validate.js
================================================================================*/;
var JFormValidator=function(){"use strict";var t,e,a,r=function(e,a,r){r=""===r||r,t[e]={enabled:r,exec:a}},n=function(t,e){var a,r,n,i,l=e.data("label");void 0===l&&(a=e.attr("id"),r=e.get(0).form,i=jQuery(r),l=!!a&&((n=i.find("#"+a+"-lbl")).length?n:!!(n=i.find('label[for="'+a+'"]')).length&&n),e.data("label",l)),!1===t?(e.addClass("invalid").attr("aria-invalid","true"),l&&l.addClass("invalid")):(e.removeClass("invalid").attr("aria-invalid","false"),l&&l.removeClass("invalid"))},i=function(e){var a,r=jQuery(e);if(r.attr("disabled"))return n(!0,r),!0;if(r.attr("required")||r.hasClass("required"))if("fieldset"===r.prop("tagName").toLowerCase()&&(r.hasClass("radio")||r.hasClass("checkboxes"))){if(!r.find("input:checked").length)return n(!1,r),!1}else if(!r.val()||r.hasClass("placeholder")||"checkbox"===r.attr("type")&&!r.is(":checked"))return n(!1,r),!1;return a=r.attr("class")&&r.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)?r.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)[1]:"",r.attr("pattern")&&""!=r.attr("pattern")?r.val().length?(l=new RegExp("^"+r.attr("pattern")+"$").test(r.val()),n(l,r),l):r.attr("required")||r.hasClass("required")?(n(!1,r),!1):(n(!0,r),!0):""===a?(n(!0,r),!0):a&&"none"!==a&&t[a]&&r.val()&&!0!==t[a].exec(r.val(),r)?(n(!1,r),!1):(n(!0,r),!0)},l=function(t){var e,r,n,l,s,u,o=!0,d=[];for(s=0,u=(e=jQuery(t).find("input, textarea, select, fieldset")).length;s<u;s++)jQuery(e[s]).hasClass("novalidate")||!1===i(e[s])&&(o=!1,d.push(e[s]));if(jQuery.each(a,function(t,e){!0!==e.exec()&&(o=!1)}),!o&&d.length>0){for(r=Joomla.JText._("JLIB_FORM_FIELD_INVALID"),n={error:[]},s=d.length-1;s>=0;s--)(l=jQuery(d[s]).data("label"))&&n.error.push(r+l.text().replace("*",""));Joomla.renderMessages(n)}return o},s=function(t){for(var a,r=[],n=jQuery(t),s=0,u=(a=n.find("input, textarea, select, fieldset, button")).length;s<u;s++){var o=jQuery(a[s]),d=o.prop("tagName").toLowerCase();"input"!==d&&"button"!==d||"submit"!==o.attr("type")&&"image"!==o.attr("type")?"button"===d||"input"===d&&"button"===o.attr("type")||(o.hasClass("required")&&o.attr("aria-required","true").attr("required","required"),"fieldset"!==d&&(o.on("blur",function(){return i(this)}),o.hasClass("validate-email")&&e&&a[s].setAttribute("type","email")),r.push(o)):o.hasClass("validate")&&o.on("click",function(){return l(t)})}n.data("inputfields",r)};return function(){var n;t={},a=a||{},(n=document.createElement("input")).setAttribute("type","email"),e="text"!==n.type,r("username",function(t,e){return!new RegExp("[<|>|\"|'|%|;|(|)|&]","i").test(t)}),r("password",function(t,e){return/^\S[\S ]{2,98}\S$/.test(t)}),r("numeric",function(t,e){return/^(\d|-)?(\d|,)*\.?\d*$/.test(t)}),r("email",function(t,e){return t=punycode.toASCII(t),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)});for(var i=jQuery("form.form-validate"),l=0,u=i.length;l<u;l++)s(i[l])}(),{isValid:l,validate:i,setHandler:r,attachToForm:s,custom:a}};document.formvalidator=null,jQuery(function(){document.formvalidator=new JFormValidator});



/*===============================
/media/system/js/html5fallback.js
================================================================================*/;
!function(a,b,c){"use strict";"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b});var d=function(a,b){for(var c=["required","pattern","placeholder","autofocus","formnovalidate"],d=["email","url","number","range"],e={attributes:{},types:{}};b=c.pop();)e.attributes[b]=!!(b in a);for(;b=d.pop();)a.setAttribute("type",b),e.types[b]=a.type==b;return e}(b.createElement("input")),e={init:function(b,c){var d=this;d.elem=c,d.$elem=a(c),c.H5Form=d,d.options=a.extend({},a.fn.h5f.options,b),"form"===c.nodeName.toLowerCase()&&d.bindWithForm(d.elem,d.$elem)},bindWithForm:function(a,b){var i,e=this,f=!!b.attr("novalidate"),g=a.elements,h=g.length;for("onSubmit"===e.options.formValidationEvent&&b.on("submit",function(a){i=this.H5Form.donotValidate!==c&&this.H5Form.donotValidate,i||f||e.validateForm(e)?b.find(":input").each(function(){e.placeholder(e,this,"submit")}):(a.preventDefault(),this.donotValidate=!1)}),b.on("focusout focusin",function(a){e.placeholder(e,a.target,a.type)}),b.on("focusout change",e.validateField),b.find("fieldset").on("change",function(){e.validateField(this)}),d.attributes.formnovalidate||b.find(":submit[formnovalidate]").on("click",function(){e.donotValidate=!0});h--;)e.polyfill(g[h]),e.autofocus(e,g[h])},polyfill:function(a){if("form"===a.nodeName.toLowerCase())return!0;var b=a.form.H5Form;b.placeholder(b,a),b.numberType(b,a)},validateForm:function(){var f,g,a=this,b=a.elem,c=b.elements,d=c.length,e=!0;for(b.isValid=!0,f=0;f<d;f++)g=c[f],g.isRequired=!!g.required,g.isDisabled&&(g.isDisabled=!!g.disabled),g.isDisabled||(e=a.validateField(g),b.isValid&&!e&&a.setFocusOn(g),b.isValid=e&&b.isValid);return a.options.doRenderMessage&&a.renderErrorMessages(a,b),b.isValid},validateField:function(b){var j,k,l,e=b.target||b,f=!1,g=!1,h=!1,i=!1;return e.form===c?null:(j=e.form.H5Form,k=a(e),g=!!k.attr("required"),h=!!k.attr("disabled"),e.isDisabled||(f=!d.attributes.required&&g&&j.isValueMissing(j,e),i=!d.attributes.pattern&&j.matchPattern(j,e)),e.validityState={valueMissing:f,patternMismatch:i,valid:e.isDisabled||!(f||i)},d.attributes.required||(e.validityState.valueMissing?k.addClass(j.options.requiredClass):k.removeClass(j.options.requiredClass)),d.attributespattern||(e.validityState.patternMismatch?k.addClass(j.options.patternClass):k.removeClass(j.options.patternClass)),e.validityState.valid?(k.removeClass(j.options.invalidClass),l=j.findLabel(k),l.removeClass(j.options.invalidClass),l.attr("aria-invalid","false")):(k.addClass(j.options.invalidClass),l=j.findLabel(k),l.addClass(j.options.invalidClass),l.attr("aria-invalid","true")),e.validityState.valid)},isValueMissing:function(e,f){var k,l,m,g=a(f),h=f.type!==c?f.type:f.tagName.toLowerCase(),i=/^(checkbox|radio|fieldset)$/i.test(h),j=/^submit$/i.test(h);if(j)return!1;if(i){if("checkbox"===h)return!g.is(":checked");for(k="fieldset"===h?g.find("input"):b.getElementsByName(f.name),l=0,m=k.length;l<m;l++)if(a(k[l]).is(":checked"))return!1;return!0}return!(""!==g.val()&&(d.attributes.placeholder||!g.hasClass(e.options.placeholderClass)))},matchPattern:function(b,e){var j,k,f=a(e),g=f.attr("value"),h=f.attr("pattern"),i=f.attr("type");if(!d.attributes.placeholder&&f.attr("placeholder")&&f.hasClass(b.options.placeholderClass)||(g=f.attr("value")),""===g)return!1;if("email"===i){if(f.attr("multiple")===c)return!b.options.emailPatt.test(g);for(g=g.split(b.options.mutipleDelimiter),j=0,k=g.length;j<k;j++)if(!b.options.emailPatt.test(g[j].replace(/[ ]*/g,"")))return!0}else{if("url"===i)return!b.options.urlPatt.test(g);if("text"===i&&h!==c)return usrPatt=new RegExp("^(?:"+h+")$"),!usrPatt.test(g)}return!1},placeholder:function(b,e,f){var g=a(e),h=g.attr("placeholder"),i=/^(focusin|submit)$/i.test(f),j=/^(input|textarea)$/i.test(e.nodeName),k=/^password$/i.test(e.type),l=d.attributes.placeholder;l||!j||k||h===c||(""!==e.value||i?e.value===h&&i&&(e.value="",g.removeClass(b.options.placeholderClass)):(e.value=h,g.addClass(b.options.placeholderClass)))},numberType:function(b,c){var i,j,k,l,m,n,o,p,e=a(c),f=e.attr("type"),g=/^input$/i.test(c.nodeName),h=/^(number|range)$/i.test(f);if(!(!g||!h||"number"==f&&d.types.number||"range"==f&&d.types.range)){for(i=parseInt(e.attr("min")),j=parseInt(e.attr("max")),k=parseInt(e.attr("step")),l=parseInt(e.attr("value")),m=e.prop("attributes"),n=a("<select>"),i=isNaN(i)?-100:i,p=i;p<=j;p+=k)o=a('<option value="'+p+'">'+p+"</option>"),(l==p||l>p&&l<p+k)&&o.attr("selected",""),n.append(o);a.each(m,function(){n.attr(this.name,this.value)}),e.replaceWith(n)}},autofocus:function(b,c){var e=a(c),f=!!e.attr("autofocus"),g=/^(input|textarea|select|fieldset)$/i.test(c.nodeName),h=/^submit$/i.test(c.type),i=d.attributes.autofocus;!i&&g&&!h&&f&&a(function(){b.setFocusOn(c)})},findLabel:function(b){var d,c=a('label[for="'+b.attr("id")+'"]');return c.length<=0&&(d=b.parent(),"label"==d.get(0).tagName.toLowerCase()&&(c=d)),c},setFocusOn:function(b){"fieldset"===b.tagName.toLowerCase()?a(b).find(":first").focus():a(b).focus()},renderErrorMessages:function(b,c){for(var g,h,d=c.elements,e=d.length,f={errors:[]};e--;)g=a(d[e]),h=b.findLabel(g),g.hasClass(b.options.requiredClass)&&(f.errors[e]=h.text().replace("*","")+b.options.requiredMessage),g.hasClass(b.options.patternClass)&&(f.errors[e]=h.text().replace("*","")+b.options.patternMessage);f.errors.length>0&&Joomla.renderMessages(f)}};a.fn.h5f=function(a){return this.each(function(){Object.create(e).init(a,this)})},a.fn.h5f.options={invalidClass:"invalid",requiredClass:"required",requiredMessage:" is required.",placeholderClass:"placeholder",patternClass:"pattern",patternMessage:" doesn't match pattern.",doRenderMessage:!1,formValidationEvent:"onSubmit",emailPatt:/^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,urlPatt:/[a-z][\-\.+a-z]*:\/\//i},a(function(){a("form").h5f({doRenderMessage:!0,requiredClass:"musthavevalue"})})}(jQuery,document);


/*===============================
/media/jui/js/jquery.min.js
================================================================================*/;
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=e.document,i=n.slice,o=n.concat,a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f={},d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,g=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()};function v(e){var t=!!e&&"length"in e&&e.length,n=d.type(e);return"function"!==n&&!d.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}d.fn=d.prototype={jquery:"1.12.4",constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return d.each(this,e)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||d.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],"__proto__"!==r&&a!==n&&(l&&n&&(d.isPlainObject(n)||(t=d.isArray(n)))?(t?(t=!1,o=e&&d.isArray(e)?e:[]):o=e&&d.isPlainObject(e)?e:{},a[r]=d.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},d.extend({expando:"jQuery"+("1.12.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray||function(e){return"array"===d.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!d.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==d.type(e)||e.nodeType||d.isWindow(e))return!1;try{if(e.constructor&&!c.call(e,"constructor")&&!c.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!f.ownFirst)for(t in e)return c.call(e,t);for(t in e);return void 0===t||c.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e},globalEval:function(t){t&&d.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(g,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?d.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(s)return s.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o.apply([],s)},guid:1,proxy:function(e,t){var n,r,o;if("string"==typeof t&&(o=e[t],t=e,e=o),d.isFunction(e))return n=i.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(i.call(arguments)))}).guid=e.guid=e.guid||d.guid++,r},now:function(){return+new Date},support:f}),"function"==typeof Symbol&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,u,l,c,f,d,p,h,g,m,v,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=oe(),N=oe(),k=oe(),S=function(e,t){return e===t&&(f=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P="\\["+O+"*("+R+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+O+"*\\]",B=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",W=new RegExp(O+"+","g"),I=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),$=new RegExp("^"+O+"*,"+O+"*"),z=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),X=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),U=new RegExp(B),V=new RegExp("^"+R+"$"),Y={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){d()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,f,h,v,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=b),s=(v=a(e)).length,f=V.test(c)?"#"+c:"[id='"+c+"']";s--;)v[s]=f+" "+ge(v[s]);y=v.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return q.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(I,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[b]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,g=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+O+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",B)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&x(w,e)?-1:t===p||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(X,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),x(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(x=(p=(l=(c=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[T,p,x];break}}else if(y&&(x=p=(l=(c=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++x||(y&&((c=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[T,x]),d!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=F(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[b]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function he(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[b]||(t[b]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ve(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),ae(function(o,a,s,u){var l,c,f,d=[],p=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:ye(g,d,e,s,u),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,u),r)for(l=ye(v,p),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(m[p[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?F(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else v=ye(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):q.apply(a,v)})}function be(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return F(t,e)>-1},s,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])d=[me(ve(d),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return xe(u>1&&ve(d),u>1&&ge(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(I,"$1"),n,u<i&&be(e.slice(u,i)),i<o&&be(e=e.slice(i)),i<o&&ge(e))}d.push(n)}return ve(d)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=$.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):N(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=k[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=be(t[n]))[b]?i.push(s):o.push(s);(s=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,m,v=0,y="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,N=C.length;for(c&&(l=a===p||a||c);y!==N&&null!=(f=C[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument===p||(d(f),s=!g);m=e[h++];)if(m(f,a||p,s)){u.push(f);break}c&&(T=E)}n&&((f=!m&&f)&&v--,o&&x.push(f))}if(v+=y,n&&y!==v){for(h=0;m=t[h++];)m(x,b,a,s);if(o){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=L.call(u));b=ye(b)}q.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&ie.uniqueSort(u)}return c&&(T=E,l=w),x};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,f,d,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=Y.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((d=r.find[f])&&(o=d(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ge(l)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!g,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(M,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(e);d.find=y,d.expr=y.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=y.uniqueSort,d.text=y.getText,d.isXMLDoc=y.isXML,d.contains=y.contains;var x=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&d(e).is(n))break;r.push(e)}return r},b=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},w=d.expr.match.needsContext,T=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,C=/^.[^:#\[\.,]*$/;function E(e,t,n){if(d.isFunction(t))return d.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return d.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(C.test(t))return d.filter(t,e,n);t=d.filter(t,e)}return d.grep(e,function(e){return d.inArray(e,t)>-1!==n})}d.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?d.find.matchesSelector(r,e)?[r]:[]:d.find.matches(e,d.grep(t,function(e){return 1===e.nodeType}))},d.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(d(e).filter(function(){for(t=0;t<i;t++)if(d.contains(r[t],this))return!0}));for(t=0;t<i;t++)d.find(e,r[t],n);return(n=this.pushStack(i>1?d.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&w.test(e)?d(e):e||[],!1).length}});var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(d.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:k.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof d?t[0]:t,d.merge(this,d.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),T.test(i[1])&&d.isPlainObject(t))for(i in t)d.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}if((o=r.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return N.find(e);this.length=1,this[0]=o}return this.context=r,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):d.isFunction(e)?void 0!==n.ready?n.ready(e):e(d):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),d.makeArray(e,this))}).prototype=d.fn,N=d(r);var S=/^(?:parents|prev(?:Until|All))/,A={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}d.fn.extend({has:function(e){var t,n=d(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(d.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=w.test(e)||"string"!=typeof e?d(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&d.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?d.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.inArray(this[0],d(e)):d.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),d.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return b((e.parentNode||{}).firstChild,e)},children:function(e){return b(e.firstChild)},contents:function(e){return d.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,r){var i=d.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=d.filter(r,i)),this.length>1&&(A[e]||(i=d.uniqueSort(i)),S.test(e)&&(i=i.reverse())),this.pushStack(i)}});var j,L,H=/\S+/g;function q(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_)):(r.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))}function _(){(r.addEventListener||"load"===e.event.type||"complete"===r.readyState)&&(q(),d.ready())}for(L in d.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return d.each(e.match(H)||[],function(e,n){t[n]=!0}),t}(e):d.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){d.each(n,function(n,r){d.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==d.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return d.each(arguments,function(e,t){for(var n;(n=d.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?d.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=!0,n||l.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return d.Deferred(function(n){d.each(t,function(t,o){var a=d.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&d.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?d.extend(e,r):r}},i={};return r.pipe=r.then,d.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,o=0,a=i.call(arguments),s=a.length,u=1!==s||e&&d.isFunction(e.promise)?s:0,l=1===u?e:d.Deferred(),c=function(e,n,r){return function(o){n[e]=this,r[e]=arguments.length>1?i.call(arguments):o,r===t?l.notifyWith(n,r):--u||l.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);o<s;o++)a[o]&&d.isFunction(a[o].promise)?a[o].promise().progress(c(o,n,t)).done(c(o,r,a)).fail(l.reject):--u;return u||l.resolveWith(r,a),l.promise()}}),d.fn.ready=function(e){return d.ready.promise().done(e),this},d.extend({isReady:!1,readyWait:1,holdReady:function(e){e?d.readyWait++:d.ready(!0)},ready:function(e){(!0===e?--d.readyWait:d.isReady)||(d.isReady=!0,!0!==e&&--d.readyWait>0||(j.resolveWith(r,[d]),d.fn.triggerHandler&&(d(r).triggerHandler("ready"),d(r).off("ready"))))}}),d.ready.promise=function(t){if(!j)if(j=d.Deferred(),"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll)e.setTimeout(d.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_);else{r.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var n=!1;try{n=null==e.frameElement&&r.documentElement}catch(e){}n&&n.doScroll&&function t(){if(!d.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}q(),d.ready()}}()}return j.promise(t)},d.ready.promise(),d(f))break;f.ownFirst="0"===L,f.inlineBlockNeedsLayout=!1,d(function(){var e,t,n,i;(n=r.getElementsByTagName("body")[0])&&n.style&&(t=r.createElement("div"),(i=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),void 0!==t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",f.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))}),function(){var e=r.createElement("div");f.deleteExpando=!0;try{delete e.test}catch(e){f.deleteExpando=!1}e=null}();var F,M=function(e){var t=d.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)},O=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function P(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:O.test(n)?d.parseJSON(n):n)}catch(e){}d.data(e,t,n)}else n=void 0}return n}function B(e){var t;for(t in e)if(("data"!==t||!d.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function W(e,t,r,i){if(M(e)){var o,a,s=d.expando,u=e.nodeType,l=u?d.cache:e,c=u?e[s]:e[s]&&s;if(c&&l[c]&&(i||l[c].data)||void 0!==r||"string"!=typeof t)return c||(c=u?e[s]=n.pop()||d.guid++:s),l[c]||(l[c]=u?{}:{toJSON:d.noop}),"object"!=typeof t&&"function"!=typeof t||(i?l[c]=d.extend(l[c],t):l[c].data=d.extend(l[c].data,t)),a=l[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[d.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[d.camelCase(t)]):o=a,o}}function I(e,t,n){if(M(e)){var r,i,o=e.nodeType,a=o?d.cache:e,s=o?e[d.expando]:d.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=d.isArray(t)?t.concat(d.map(t,d.camelCase)):t in r?[t]:(t=d.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!B(r):!d.isEmptyObject(r))return}(n||(delete a[s].data,B(a[s])))&&(o?d.cleanData([e],!0):f.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}d.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?d.cache[e[d.expando]]:e[d.expando])&&!B(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)}}),d.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=d.data(o),1===o.nodeType&&!d._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&P(o,r=d.camelCase(r.slice(5)),i[r]);d._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){d.data(this,e)}):arguments.length>1?this.each(function(){d.data(this,e,t)}):o?P(o,e,d.data(o,e)):void 0},removeData:function(e){return this.each(function(){d.removeData(this,e)})}}),d.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=d._data(e,t),n&&(!r||d.isArray(n)?r=d._data(e,t,d.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=d.queue(e,t),r=n.length,i=n.shift(),o=d._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){d.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return d._data(e,n)||d._data(e,n,{empty:d.Callbacks("once memory").add(function(){d._removeData(e,t+"queue"),d._removeData(e,n)})})}}),d.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?d.queue(this[0],e):void 0===t?this:this.each(function(){var n=d.queue(this,e,t);d._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&d.dequeue(this,e)})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=d.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=d._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),f.shrinkWrapBlocks=function(){return null!=F?F:(F=!1,(t=r.getElementsByTagName("body")[0])&&t.style?(e=r.createElement("div"),(n=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(r.createElement("div")).style.width="5px",F=3!==e.offsetWidth),t.removeChild(n),F):void 0);var e,t,n};var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),X=["Top","Right","Bottom","Left"],U=function(e,t){return e=t||e,"none"===d.css(e,"display")||!d.contains(e.ownerDocument,e)};function V(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return d.css(e,t,"")},u=s(),l=n&&n[3]||(d.cssNumber[t]?"":"px"),c=(d.cssNumber[t]||"px"!==l&&+u)&&z.exec(d.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",d.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Y,J,G,Q=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===d.type(n))for(s in i=!0,n)Q(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,d.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(d(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},K=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,ee=/^$|\/(?:java|ecma)script/i,te=/^\s+/,ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function re(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}Y=r.createElement("div"),J=r.createDocumentFragment(),G=r.createElement("input"),Y.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",f.leadingWhitespace=3===Y.firstChild.nodeType,f.tbody=!Y.getElementsByTagName("tbody").length,f.htmlSerialize=!!Y.getElementsByTagName("link").length,f.html5Clone="<:nav></:nav>"!==r.createElement("nav").cloneNode(!0).outerHTML,G.type="checkbox",G.checked=!0,J.appendChild(G),f.appendChecked=G.checked,Y.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!Y.cloneNode(!0).lastChild.defaultValue,J.appendChild(Y),(G=r.createElement("input")).setAttribute("type","radio"),G.setAttribute("checked","checked"),G.setAttribute("name","t"),Y.appendChild(G),f.checkClone=Y.cloneNode(!0).cloneNode(!0).lastChild.checked,f.noCloneEvent=!!Y.addEventListener,Y[d.expando]=1,f.attributes=!Y.getAttribute(d.expando);var ie={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:f.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};function oe(e,t){var n,r,i=0,o=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||d.nodeName(r,t)?o.push(r):d.merge(o,oe(r,t));return void 0===t||t&&d.nodeName(e,t)?d.merge([e],o):o}function ae(e,t){for(var n,r=0;null!=(n=e[r]);r++)d._data(n,"globalEval",!t||d._data(t[r],"globalEval"))}ie.optgroup=ie.option,ie.tbody=ie.tfoot=ie.colgroup=ie.caption=ie.thead,ie.th=ie.td;var se=/<|&#?\w+;/,ue=/<tbody/i;function le(e){K.test(e.type)&&(e.defaultChecked=e.checked)}function ce(e,t,n,r,i){for(var o,a,s,u,l,c,p,h=e.length,g=re(t),m=[],v=0;v<h;v++)if((a=e[v])||0===a)if("object"===d.type(a))d.merge(m,a.nodeType?[a]:a);else if(se.test(a)){for(u=u||g.appendChild(t.createElement("div")),l=(Z.exec(a)||["",""])[1].toLowerCase(),p=ie[l]||ie._default,u.innerHTML=p[1]+d.htmlPrefilter(a)+p[2],o=p[0];o--;)u=u.lastChild;if(!f.leadingWhitespace&&te.test(a)&&m.push(t.createTextNode(te.exec(a)[0])),!f.tbody)for(o=(a="table"!==l||ue.test(a)?"<table>"!==p[1]||ue.test(a)?0:u:u.firstChild)&&a.childNodes.length;o--;)d.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(d.merge(m,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=g.lastChild}else m.push(t.createTextNode(a));for(u&&g.removeChild(u),f.appendChecked||d.grep(oe(m,"input"),le),v=0;a=m[v++];)if(r&&d.inArray(a,r)>-1)i&&i.push(a);else if(s=d.contains(a.ownerDocument,a),u=oe(g.appendChild(a),"script"),s&&ae(u),n)for(o=0;a=u[o++];)ee.test(a.type||"")&&n.push(a);return u=null,g}!function(){var t,n,i=r.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(f[t]=n in e)||(i.setAttribute(n,"t"),f[t]=!1===i.attributes[n].expando);i=null}();var fe=/^(?:input|select|textarea)$/i,de=/^key/,pe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,he=/^(?:focusinfocus|focusoutblur)$/,ge=/^([^.]*)(?:\.(.+)|)/;function me(){return!0}function ve(){return!1}function ye(){try{return r.activeElement}catch(e){}}function xe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)xe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ve;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return d().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=d.guid++)),e.each(function(){d.event.add(this,t,i,r,n)})}d.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d._data(e);if(v){for(n.handler&&(n=(u=n).handler,i=u.selector),n.guid||(n.guid=d.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return void 0===d||e&&d.event.triggered===e.type?void 0:d.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(H)||[""]).length;s--;)h=m=(o=ge.exec(t[s])||[])[1],g=(o[2]||"").split(".").sort(),h&&(l=d.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=d.event.special[h]||{},f=d.extend({type:h,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&d.expr.match.needsContext.test(i),namespace:g.join(".")},u),(p=a[h])||((p=a[h]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(e,r,g,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),d.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d.hasData(e)&&d._data(e);if(v&&(c=v.events)){for(l=(t=(t||"").match(H)||[""]).length;l--;)if(h=m=(s=ge.exec(t[l])||[])[1],g=(s[2]||"").split(".").sort(),h){for(f=d.event.special[h]||{},p=c[h=(r?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||d.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)d.event.remove(e,h+t[l],n,r,!0);d.isEmptyObject(c)&&(delete v.handle,d._removeData(e,"events"))}},trigger:function(t,n,i,o){var a,s,u,l,f,p,h,g=[i||r],m=c.call(t,"type")?t.type:t,v=c.call(t,"namespace")?t.namespace.split("."):[];if(u=p=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!he.test(m+d.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),s=m.indexOf(":")<0&&"on"+m,(t=t[d.expando]?t:new d.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:d.makeArray(n,[t]),f=d.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!d.isWindow(i)){for(l=f.delegateType||m,he.test(l+m)||(u=u.parentNode);u;u=u.parentNode)g.push(u),p=u;p===(i.ownerDocument||r)&&g.push(p.defaultView||p.parentWindow||e)}for(h=0;(u=g[h++])&&!t.isPropagationStopped();)t.type=h>1?l:f.bindType||m,(a=(d._data(u,"events")||{})[t.type]&&d._data(u,"handle"))&&a.apply(u,n),(a=s&&u[s])&&a.apply&&M(u)&&(t.result=a.apply(u,n),!1===t.result&&t.preventDefault());if(t.type=m,!o&&!t.isDefaultPrevented()&&(!f._default||!1===f._default.apply(g.pop(),n))&&M(i)&&s&&i[m]&&!d.isWindow(i)){(p=i[s])&&(i[s]=null),d.event.triggered=m;try{i[m]()}catch(e){}d.event.triggered=void 0,p&&(i[s]=p)}return t.result}},dispatch:function(e){e=d.event.fix(e);var t,n,r,o,a,s,u=i.call(arguments),l=(d._data(this,"events")||{})[e.type]||[],c=d.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=d.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(a=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,e.data=a.data,void 0!==(r=((d.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?d(i,this).index(u)>-1:d.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[d.expando])return e;var t,n,i,o=e.type,a=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=pe.test(o)?this.mouseHooks:de.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new d.Event(a),t=i.length;t--;)e[n=i[t]]=a[n];return e.target||(e.target=a.srcElement||r),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(i=e.target.ownerDocument||r).documentElement,n=i.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ye()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===ye()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(d.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=d.extend(new d.Event,n,{type:e,isSimulated:!0});d.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},d.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},d.Event=function(e,t){if(!(this instanceof d.Event))return new d.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?me:ve):this.type=e,t&&d.extend(this,t),this.timeStamp=e&&e.timeStamp||d.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=me,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=me,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=me,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||d.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),f.submit||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=d.nodeName(t,"input")||d.nodeName(t,"button")?d.prop(t,"form"):void 0;n&&!d._data(n,"submit")&&(d.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),d._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&d.event.simulate("submit",this.parentNode,e))},teardown:function(){if(d.nodeName(this,"form"))return!1;d.event.remove(this,"._submit")}}),f.change||(d.event.special.change={setup:function(){if(fe.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(d.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),d.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),d.event.simulate("change",this,e)})),!1;d.event.add(this,"beforeactivate._change",function(e){var t=e.target;fe.test(t.nodeName)&&!d._data(t,"change")&&(d.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||d.event.simulate("change",this.parentNode,e)}),d._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return d.event.remove(this,"._change"),!fe.test(this.nodeName)}}),f.focusin||d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e))};d.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=d._data(r,t);i||r.addEventListener(e,n,!0),d._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=d._data(r,t)-1;i?d._data(r,t,i):(r.removeEventListener(e,n,!0),d._removeData(r,t))}}}),d.fn.extend({on:function(e,t,n,r){return xe(this,e,t,n,r)},one:function(e,t,n,r){return xe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,d(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ve),this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return d.event.trigger(e,t,n,!0)}});var be=/ jQuery\d+="(?:null|\d+)"/g,we=new RegExp("<(?:"+ne+")[\\s/>]","i"),Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Se=re(r).appendChild(r.createElement("div"));function Ae(e,t){return d.nodeName(e,"table")&&d.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==d.find.attr(e,"type"))+"/"+e.type,e}function je(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){if(1===t.nodeType&&d.hasData(e)){var n,r,i,o=d._data(e),a=d._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;r<i;r++)d.event.add(t,n,s[n][r]);a.data&&(a.data=d.extend({},a.data))}}function He(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!f.noCloneEvent&&t[d.expando]){for(r in(i=d._data(t)).events)d.removeEvent(t,r,i.handle);t.removeAttribute(d.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,je(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),f.html5Clone&&e.innerHTML&&!d.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&K.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function qe(e,t,n,r){t=o.apply([],t);var i,a,s,u,l,c,p=0,h=e.length,g=h-1,m=t[0],v=d.isFunction(m);if(v||h>1&&"string"==typeof m&&!f.checkClone&&Ee.test(m))return e.each(function(i){var o=e.eq(i);v&&(t[0]=m.call(this,i,o.html())),qe(o,t,n,r)});if(h&&(i=(c=ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===c.childNodes.length&&(c=i),i||r)){for(s=(u=d.map(oe(c,"script"),De)).length;p<h;p++)a=c,p!==g&&(a=d.clone(a,!0,!0),s&&d.merge(u,oe(a,"script"))),n.call(e[p],a,p);if(s)for(l=u[u.length-1].ownerDocument,d.map(u,je),p=0;p<s;p++)a=u[p],ee.test(a.type||"")&&!d._data(a,"globalEval")&&d.contains(l,a)&&(a.src?d._evalUrl&&d._evalUrl(a.src):d.globalEval((a.text||a.textContent||a.innerHTML||"").replace(ke,"")));c=i=null}return e}function _e(e,t,n){for(var r,i=t?d.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||d.cleanData(oe(r)),r.parentNode&&(n&&d.contains(r.ownerDocument,r)&&ae(oe(r,"script")),r.parentNode.removeChild(r));return e}d.extend({htmlPrefilter:function(e){return e.replace(Te,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=d.contains(e.ownerDocument,e);if(f.html5Clone||d.isXMLDoc(e)||!we.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Se.innerHTML=e.outerHTML,Se.removeChild(o=Se.firstChild)),!(f.noCloneEvent&&f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||d.isXMLDoc(e)))for(r=oe(o),s=oe(e),a=0;null!=(i=s[a]);++a)r[a]&&He(i,r[a]);if(t)if(n)for(s=s||oe(e),r=r||oe(o),a=0;null!=(i=s[a]);a++)Le(i,r[a]);else Le(e,o);return(r=oe(o,"script")).length>0&&ae(r,!u&&oe(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var r,i,o,a,s=0,u=d.expando,l=d.cache,c=f.attributes,p=d.event.special;null!=(r=e[s]);s++)if((t||M(r))&&(a=(o=r[u])&&l[o])){if(a.events)for(i in a.events)p[i]?d.event.remove(r,i):d.removeEvent(r,i,a.handle);l[o]&&(delete l[o],c||void 0===r.removeAttribute?r[u]=void 0:r.removeAttribute(u),n.push(o))}}}),d.fn.extend({domManip:qe,detach:function(e){return _e(this,e,!0)},remove:function(e){return _e(this,e)},text:function(e){return Q(this,function(e){return void 0===e?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&d.cleanData(oe(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&d.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return d.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(be,""):void 0;if("string"==typeof e&&!Ce.test(e)&&(f.htmlSerialize||!we.test(e))&&(f.leadingWhitespace||!te.test(e))&&!ie[(Z.exec(e)||["",""])[1].toLowerCase()]){e=d.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(d.cleanData(oe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,function(t){var n=this.parentNode;d.inArray(this,e)<0&&(d.cleanData(oe(this)),n&&n.replaceChild(t,this))},e)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){for(var n,r=0,i=[],o=d(e),s=o.length-1;r<=s;r++)n=r===s?this:this.clone(!0),d(o[r])[t](n),a.apply(i,n.get());return this.pushStack(i)}});var Fe,Me={HTML:"block",BODY:"block"};function Oe(e,t){var n=d(t.createElement(e)).appendTo(t.body),r=d.css(n[0],"display");return n.detach(),r}function Re(e){var t=r,n=Me[e];return n||("none"!==(n=Oe(e,t))&&n||((t=((Fe=(Fe||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write(),t.close(),n=Oe(e,t),Fe.detach()),Me[e]=n),n}var Pe=/^margin/,Be=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),We=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},Ie=r.documentElement;!function(){var t,n,i,o,a,s,u=r.createElement("div"),l=r.createElement("div");function c(){var c,f,d=r.documentElement;d.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",t=i=s=!1,n=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(l),t="1%"!==(f||{}).top,s="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,l.style.marginRight="50%",n="4px"===(f||{marginRight:"4px"}).marginRight,(c=l.appendChild(r.createElement("div"))).style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(c)||{}).marginRight),l.removeChild(c)),l.style.display="none",(o=0===l.getClientRects().length)&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",(c=l.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",o=0===c[0].offsetHeight)),d.removeChild(u)}l.style&&(l.style.cssText="float:left;opacity:.5",f.opacity="0.5"===l.style.opacity,f.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===l.style.backgroundClip,(u=r.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),f.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,d.extend(f,{reliableHiddenOffsets:function(){return null==t&&c(),o},boxSizingReliable:function(){return null==t&&c(),i},pixelMarginRight:function(){return null==t&&c(),n},pixelPosition:function(){return null==t&&c(),t},reliableMarginRight:function(){return null==t&&c(),a},reliableMarginLeft:function(){return null==t&&c(),s}}))}();var $e,ze,Xe=/^(top|right|bottom|left)$/;function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}e.getComputedStyle?($e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ze=function(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||$e(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||d.contains(e.ownerDocument,e)||(a=d.style(e,t)),n&&!f.pixelMarginRight()&&Be.test(a)&&Pe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):Ie.currentStyle&&($e=function(e){return e.currentStyle},ze=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||$e(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),Be.test(a)&&!Xe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var Ve=/alpha\([^)]*\)/i,Ye=/opacity\s*=\s*([^)]*)/i,Je=/^(none|table(?!-c[ea]).+)/,Ge=new RegExp("^("+$+")(.*)$","i"),Qe={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Ze=["Webkit","O","Moz","ms"],et=r.createElement("div").style;function tt(e){if(e in et)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ze.length;n--;)if((e=Ze[n]+t)in et)return e}function nt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=d._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&U(r)&&(o[a]=d._data(r,"olddisplay",Re(r.nodeName)))):(i=U(r),(n&&"none"!==n||!i)&&d._data(r,"olddisplay",i?n:d.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function rt(e,t,n){var r=Ge.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function it(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=d.css(e,n+X[o],!0,i)),r?("content"===n&&(a-=d.css(e,"padding"+X[o],!0,i)),"margin"!==n&&(a-=d.css(e,"border"+X[o]+"Width",!0,i))):(a+=d.css(e,"padding"+X[o],!0,i),"padding"!==n&&(a+=d.css(e,"border"+X[o]+"Width",!0,i)));return a}function ot(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=$e(e),a=f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=ze(e,t,o))<0||null==i)&&(i=e.style[t]),Be.test(i))return i;r=a&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+it(e,t,n||(a?"border":"content"),r,o)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:f.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d.camelCase(t),u=e.style;if(t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),a=d.cssHooks[t]||d.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if("string"===(o=typeof n)&&(i=z.exec(n))&&i[1]&&(n=V(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(d.cssNumber[s]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=d.camelCase(t);return t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),(a=d.cssHooks[t]||d.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ze(e,t,r)),"normal"===o&&t in Ke&&(o=Ke[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,r){if(n)return Je.test(d.css(e,"display"))&&0===e.offsetWidth?We(e,Qe,function(){return ot(e,t,r)}):ot(e,t,r)},set:function(e,n,r){var i=r&&$e(e);return rt(0,n,r?it(e,t,r,f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,i),i):0)}}}),f.opacity||(d.cssHooks.opacity={get:function(e,t){return Ye.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=d.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===d.trim(o.replace(Ve,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ve.test(o)?o.replace(Ve,i):o+" "+i)}}),d.cssHooks.marginRight=Ue(f.reliableMarginRight,function(e,t){if(t)return We(e,{display:"inline-block"},ze,[e,"marginRight"])}),d.cssHooks.marginLeft=Ue(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||(d.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+X[r]+t]=o[r]||o[r-2]||o[0];return i}},Pe.test(e)||(d.cssHooks[e+t].set=rt)}),d.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var r,i,o={},a=0;if(d.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=d.css(e,t[a],!1,r);return o}return void 0!==n?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return nt(this,!0)},hide:function(){return nt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){U(this)?d(this).show():d(this).hide()})}}),d.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||d.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=d.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){d.fx.step[e.prop]?d.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[d.cssProps[e.prop]]&&!d.cssHooks[e.prop]?e.elem[e.prop]=e.now:d.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},d.fx=at.prototype.init,d.fx.step={};var st,ut,lt=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ft(){return e.setTimeout(function(){st=void 0}),st=d.now()}function dt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=X[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var r,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ht(e,t,n){var r,i,o=0,a=ht.prefilters.length,s=d.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=st||ft(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:d.extend({},t),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=d.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=d.camelCase(n)],o=e[n],d.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=d.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ht.prefilters[o].call(l,e,c,l.opts))return d.isFunction(r.stop)&&(d._queueHooks(l.elem,l.opts.queue).stop=d.proxy(r.stop,r)),r;return d.map(c,pt,l),d.isFunction(l.opts.start)&&l.opts.start.call(e,l),d.fx.timer(d.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}d.Animation=d.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return V(n.elem,e,z.exec(t),n),n}]},tweener:function(e,t){d.isFunction(e)?(t=e,e=["*"]):e=e.match(H);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,p={},h=e.style,g=e.nodeType&&U(e),m=d._data(e,"fxshow");for(r in n.queue||(null==(s=d._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,d.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===("none"===(l=d.css(e,"display"))?d._data(e,"olddisplay")||Re(e.nodeName):l)&&"none"===d.css(e,"float")&&(f.inlineBlockNeedsLayout&&"inline"!==Re(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.shrinkWrapBlocks()||c.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],lt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||d.style(e,r)}else l=void 0;if(d.isEmptyObject(p))"inline"===("none"===l?Re(e.nodeName):l)&&(h.display=l);else for(r in m?"hidden"in m&&(g=m.hidden):m=d._data(e,"fxshow",{}),o&&(m.hidden=!g),g?d(e).show():c.done(function(){d(e).hide()}),c.done(function(){var t;for(t in d._removeData(e,"fxshow"),p)d.style(e,t,p[t])}),p)a=pt(g?m[r]:0,r,c),r in m||(m[r]=a.start,g&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),d.speed=function(e,t,n){var r=e&&"object"==typeof e?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t};return r.duration=d.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in d.fx.speeds?d.fx.speeds[r.duration]:d.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){d.isFunction(r.old)&&r.old.call(this),r.queue&&d.dequeue(this,r.queue)},r},d.fn.extend({fadeTo:function(e,t,n,r){return this.filter(U).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=d.isEmptyObject(e),o=d.speed(t,n,r),a=function(){var t=ht(this,d.extend({},e),o);(i||d._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=d.timers,a=d._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ct.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||d.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=d._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=d.timers,a=r?r.length:0;for(n.finish=!0,d.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t];d.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(dt(t,!0),e,r,i)}}),d.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),d.timers=[],d.fx.tick=function(){var e,t=d.timers,n=0;for(st=d.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||d.fx.stop(),st=void 0},d.fx.timer=function(e){d.timers.push(e),e()?d.fx.start():d.timers.pop()},d.fx.interval=13,d.fx.start=function(){ut||(ut=e.setInterval(d.fx.tick,d.fx.interval))},d.fx.stop=function(){e.clearInterval(ut),ut=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(t,n){return t=d.fx&&d.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=r.createElement("input"),n=r.createElement("div"),i=r.createElement("select"),o=i.appendChild(r.createElement("option"));(n=r.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),(e=n.getElementsByTagName("a")[0]).style.cssText="top:1px",f.getSetAttribute="t"!==n.className,f.style=/top/.test(e.getAttribute("style")),f.hrefNormalized="/a"===e.getAttribute("href"),f.checkOn=!!t.value,f.optSelected=o.selected,f.enctype=!!r.createElement("form").enctype,i.disabled=!0,f.optDisabled=!o.disabled,(t=r.createElement("input")).setAttribute("value",""),f.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),f.radioValue="t"===t.value}();var gt=/\r/g,mt=/[\x20\t\r\n\f]+/g;d.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=d.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,d(this).val()):e)?i="":"number"==typeof i?i+="":d.isArray(i)&&(i=d.map(i,function(e){return null==e?"":e+""})),(t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=d.valHooks[i.type]||d.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(gt,""):null==n?"":n:void 0}}),d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value");return null!=t?t:d.trim(d.text(e)).replace(mt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(f.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){if(t=d(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=d.makeArray(t),a=i.length;a--;)if(r=i[a],d.inArray(d.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t))return e.checked=d.inArray(d(e).val(),t)>-1}},f.checkOn||(d.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt,yt,xt=d.expr.attrHandle,bt=/^(?:checked|selected)$/i,wt=f.getSetAttribute,Tt=f.input;d.fn.extend({attr:function(e,t){return Q(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}}),d.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?d.prop(e,t,n):(1===o&&d.isXMLDoc(e)||(t=t.toLowerCase(),i=d.attrHooks[t]||(d.expr.match.bool.test(t)?yt:vt)),void 0!==n?null===n?void d.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=d.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&d.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(H);if(o&&1===e.nodeType)for(;n=o[i++];)r=d.propFix[n]||n,d.expr.match.bool.test(n)?Tt&&wt||!bt.test(n)?e[r]=!1:e[d.camelCase("default-"+n)]=e[r]=!1:d.attr(e,n,""),e.removeAttribute(wt?n:r)}}),yt={set:function(e,t,n){return!1===t?d.removeAttr(e,n):Tt&&wt||!bt.test(n)?e.setAttribute(!wt&&d.propFix[n]||n,n):e[d.camelCase("default-"+n)]=e[n]=!0,n}},d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||d.find.attr;Tt&&wt||!bt.test(t)?xt[t]=function(e,t,r){var i,o;return r||(o=xt[t],xt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,xt[t]=o),i}:xt[t]=function(e,t,n){if(!n)return e[d.camelCase("default-"+t)]?t.toLowerCase():null}}),Tt&&wt||(d.attrHooks.value={set:function(e,t,n){if(!d.nodeName(e,"input"))return vt&&vt.set(e,t,n);e.defaultValue=t}}),wt||(vt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},xt.id=xt.name=xt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},d.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:vt.set},d.attrHooks.contenteditable={set:function(e,t,n){vt.set(e,""!==t&&t,n)}},d.each(["width","height"],function(e,t){d.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),f.style||(d.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ct=/^(?:input|select|textarea|button|object)$/i,Et=/^(?:a|area)$/i;d.fn.extend({prop:function(e,t){return Q(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return e=d.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),d.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&d.isXMLDoc(e)||(t=d.propFix[t]||t,i=d.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=d.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.hrefNormalized||d.each(["href","src"],function(e,t){d.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),f.optSelected||(d.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),f.enctype||(d.propFix.enctype="encoding");var Nt=/[\t\r\n\f]/g;function kt(e){return d.attr(e,"class")||""}d.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).addClass(e.call(this,t,kt(this)))});if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).removeClass(e.call(this,t,kt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):d.isFunction(e)?this.each(function(n){d(this).toggleClass(e.call(this,n,kt(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=d(this),o=e.match(H)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=kt(this))&&d._data(this,"__className__",t),d.attr(this,"class",t||!1===e?"":d._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+kt(n)+" ").replace(Nt," ").indexOf(t)>-1)return!0;return!1}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var St=e.location,At=d.now(),Dt=/\?/,jt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;d.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=d.trim(t+"");return i&&!d.trim(i.replace(jt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():d.error("Invalid JSON: "+t)},d.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new e.DOMParser).parseFromString(t,"text/xml"):((n=new e.ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+t),n};var Lt=/#.*$/,Ht=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,_t=/^(?:GET|HEAD)$/,Ft=/^\/\//,Mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ot={},Rt={},Pt="*/".concat("*"),Bt=St.href,Wt=Mt.exec(Bt.toLowerCase())||[];function It(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(H)||[];if(d.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function $t(e,t,n,r){var i={},o=e===Rt;function a(s){var u;return i[s]=!0,d.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=d.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&d.extend(!0,e,n),e}function Xt(e){return e.style&&e.style.display||d.css(e,"display")}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,d.ajaxSettings),t):zt(d.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f=d.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?d(p):d.event,g=d.Deferred(),m=d.Callbacks("once memory"),v=f.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=qt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return l&&l.abort(t),C(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Bt)+"").replace(Lt,"").replace(Ft,Wt[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=d.trim(f.dataType||"*").toLowerCase().match(H)||[""],null==f.crossDomain&&(r=Mt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Wt[1]&&r[2]===Wt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Wt[3]||("http:"===Wt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=d.param(f.data,f.traditional)),$t(Ot,f,n,T),2===b)return T;for(i in(u=d.event&&f.global)&&0==d.active++&&d.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!_t.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Dt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Ht.test(o)?o.replace(Ht,"$1_="+At++):o+(Dt.test(o)?"&":"?")+"_="+At++)),f.ifModified&&(d.lastModified[o]&&T.setRequestHeader("If-Modified-Since",d.lastModified[o]),d.etag[o]&&T.setRequestHeader("If-None-Match",d.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Pt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||2===b))return T.abort();for(i in w="abort",{success:1,error:1,complete:1})T[i](f[i]);if(l=$t(Rt,f,n,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===b)return T;f.async&&f.timeout>0&&(s=e.setTimeout(function(){T.abort("timeout")},f.timeout));try{b=1,l.send(y,C)}catch(e){if(!(b<2))throw e;C(-1,e)}}else C(-1,"No Transport");function C(t,n,r,i){var c,y,x,w,C,E=n;2!==b&&(b=2,s&&e.clearTimeout(s),l=void 0,a=i||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}(f,T,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(e.crossDomain&&"script"===o)continue;if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(f,w,T,c),c?(f.ifModified&&((C=T.getResponseHeader("Last-Modified"))&&(d.lastModified[o]=C),(C=T.getResponseHeader("etag"))&&(d.etag[o]=C)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,y=w.data,c=!(x=w.error))):(x=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?g.resolveWith(p,[y,E,T]):g.rejectWith(p,[T,E,x]),T.statusCode(v),v=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,f,c?y:x]),m.fireWith(p,[T,E]),u&&(h.trigger("ajaxComplete",[T,f]),--d.active||d.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,void 0,t,"script")}}),d.each(["get","post"],function(e,t){d[t]=function(e,n,r,i){return d.isFunction(n)&&(i=i||r,r=n,n=void 0),d.ajax(d.extend({url:e,type:t,dataType:i,data:n,success:r},d.isPlainObject(e)&&e))}}),d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},d.fn.extend({wrapAll:function(e){if(d.isFunction(e))return this.each(function(t){d(this).wrapAll(e.call(this,t))});if(this[0]){var t=d(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return d.isFunction(e)?this.each(function(t){d(this).wrapInner(e.call(this,t))}):this.each(function(){var t=d(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=d.isFunction(e);return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()}}),d.expr.filters.hidden=function(e){return f.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:function(e){if(!d.contains(e.ownerDocument||r,e))return!0;for(;e&&1===e.nodeType;){if("none"===Xt(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}(e)},d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)};var Ut=/%20/g,Vt=/\[\]$/,Yt=/\r?\n/g,Jt=/^(?:submit|button|image|reset|file)$/i,Gt=/^(?:input|select|textarea|keygen)/i;function Qt(e,t,n,r){var i;if(d.isArray(t))d.each(t,function(t,i){n||Vt.test(e)?r(e,i):Qt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==d.type(t))r(e,t);else for(i in t)Qt(e+"["+i+"]",t[i],n,r)}d.param=function(e,t){var n,r=[],i=function(e,t){t=d.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=d.ajaxSettings&&d.ajaxSettings.traditional),d.isArray(e)||e.jquery&&!d.isPlainObject(e))d.each(e,function(){i(this.name,this.value)});else for(n in e)Qt(n,e[n],t,i);return r.join("&").replace(Ut,"+")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements");return e?d.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!d(this).is(":disabled")&&Gt.test(this.nodeName)&&!Jt.test(e)&&(this.checked||!K.test(e))}).map(function(e,t){var n=d(this).val();return null==n?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,value:n.replace(Yt,"\r\n")}}).get()}}),d.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?nn():r.documentMode>8?tn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&tn()||nn()}:tn;var Kt=0,Zt={},en=d.ajaxSettings.xhr();function tn(){try{return new e.XMLHttpRequest}catch(e){}}function nn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Zt)Zt[e](void 0,!0)}),f.cors=!!en&&"withCredentials"in en,(en=f.ajax=!!en)&&d.ajaxTransport(function(t){var n;if(!t.crossDomain||f.cors)return{send:function(r,i){var o,a=t.xhr(),s=++Kt;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete Zt[s],n=void 0,a.onreadystatechange=d.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=Zt[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return d.globalEval(e),e}}}),d.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=r.head||d("head")[0]||r.documentElement;return{send:function(i,o){(t=r.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||o(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var rn=[],on=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||d.expando+"_"+At++;return this[e]=!0,e}}),d.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||d.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?d(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,rn.push(i)),a&&d.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),d.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||r;var i=T.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=ce([e],t,o),o&&o.length&&d(o).remove(),d.merge([],i.childNodes))};var an=d.fn.load;function sn(e){return d.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}d.fn.load=function(e,t,n){if("string"!=typeof e&&an)return an.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=d.trim(e.slice(s,e.length)),e=e.slice(0,s)),d.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&d.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?d("<div>").append(d.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}}),d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length},d.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=d.css(e,"position"),c=d(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=d.css(e,"top"),u=d.css(e,"left"),("absolute"===l||"fixed"===l)&&d.inArray("auto",[o,u])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),d.isFunction(t)&&(t=t.call(e,n,d.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},d.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){d.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,d.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=sn(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===d.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),d.nodeName(e[0],"html")||(n=e.offset()),n.top+=d.css(e[0],"borderTopWidth",!0),n.left+=d.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-d.css(r,"marginTop",!0),left:t.left-n.left-d.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!d.nodeName(e,"html")&&"static"===d.css(e,"position");)e=e.offsetParent;return e||Ie})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);d.fn[e]=function(r){return Q(this,function(e,r,i){var o=sn(e);if(void 0===i)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?d(o).scrollLeft():i,n?i:d(o).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),d.each(["top","left"],function(e,t){d.cssHooks[t]=Ue(f.pixelPosition,function(e,n){if(n)return n=ze(e,t),Be.test(n)?d(e).position()[t]+"px":n})}),d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){d.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Q(this,function(t,n,r){var i;return d.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?d.css(t,n,a):d.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),d.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),d.fn.size=function(){return this.length},d.fn.andSelf=d.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return d});var un=e.jQuery,ln=e.$;return d.noConflict=function(t){return e.$===d&&(e.$=ln),t&&e.jQuery===d&&(e.jQuery=un),d},t||(e.jQuery=e.$=d),d});


/*===============================
/media/jui/js/jquery-noconflict.js
================================================================================*/;
jQuery.noConflict();



/*===============================
/media/jui/js/jquery-migrate.min.js
================================================================================*/;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);


/*===============================
/plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
================================================================================*/;
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.4.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    selector    = selector === '#' ? [] : selector
    var $parent = $(document).find(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.4.1'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.4.1'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      if (typeof $next === 'object' && $next.length) {
        $next[0].offsetWidth // force reflow
      }
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    if (href) {
      href = href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    }

    var target  = $this.attr('data-target') || href
    var $target = $(document).find(target)

    if (!$target.hasClass('carousel')) return

    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#modals
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options
    this.$body = $(document.body)
    this.$element = $(element)
    this.$dialog = this.$element.find('.modal-dialog')
    this.$backdrop = null
    this.isShown = null
    this.originalBodyPad = null
    this.scrollbarWidth = 0
    this.ignoreBackdropClick = false
    this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom'

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION = '3.4.1'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
          this.$element[0] !== e.target &&
          !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    var scrollbarWidth = this.scrollbarWidth
    if (this.bodyIsOverflowing) {
      this.$body.css('padding-right', bodyPad + scrollbarWidth)
      $(this.fixedContent).each(function (index, element) {
        var actualPadding = element.style.paddingRight
        var calculatedPadding = $(element).css('padding-right')
        $(element)
          .data('padding-right', actualPadding)
          .css('padding-right', parseFloat(calculatedPadding) + scrollbarWidth + 'px')
      })
    }
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
    $(this.fixedContent).each(function (index, element) {
      var padding = $(element).data('padding-right')
      $(element).removeData('padding-right')
      element.style.paddingRight = padding ? padding : ''
    })
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
    var href = $this.attr('href')
    var target = $this.attr('data-target') ||
      (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7

    var $target = $(document).find(target)
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml)
    }

    // IE 8 and below don't support createHTMLDocument
    if (!document.implementation || !document.implementation.createHTMLDocument) {
      return unsafeHtml
    }

    var createdDocument = document.implementation.createHTMLDocument('sanitization')
    createdDocument.body.innerHTML = unsafeHtml

    var whitelistKeys = $.map(whiteList, function (el, i) { return i })
    var elements = $(createdDocument.body).find('*')

    for (var i = 0, len = elements.length; i < len; i++) {
      var el = elements[i]
      var elName = el.nodeName.toLowerCase()

      if ($.inArray(elName, whitelistKeys) === -1) {
        el.parentNode.removeChild(el)

        continue
      }

      var attributeList = $.map(el.attributes, function (el) { return el })
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])

      for (var j = 0, len2 = attributeList.length; j < len2; j++) {
        if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
          el.removeAttribute(attributeList[j].nodeName)
        }
      }
    }

    return createdDocument.body.innerHTML
  }

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    },
    sanitize : true,
    sanitizeFn : null,
    whiteList : DefaultWhitelist
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    var dataAttributes = this.$element.data()

    for (var dataAttr in dataAttributes) {
      if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
        delete dataAttributes[dataAttr]
      }
    }

    options = $.extend({}, this.getDefaults(), dataAttributes, options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    if (options.sanitize) {
      options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn)
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    if (this.options.html) {
      if (this.options.sanitize) {
        title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn)
      }

      $tip.find('.tooltip-inner').html(title)
    } else {
      $tip.find('.tooltip-inner').text(title)
    }

    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

  Tooltip.prototype.sanitizeHtml = function (unsafeHtml) {
    return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn)
  }

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.4.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    if (this.options.html) {
      var typeContent = typeof content

      if (this.options.sanitize) {
        title = this.sanitizeHtml(title)

        if (typeContent === 'string') {
          content = this.sanitizeHtml(content)
        }
      }

      $tip.find('.popover-title').html(title)
      $tip.find('.popover-content').children().detach().end()[
        typeContent === 'string' ? 'html' : 'append'
      ](content)
    } else {
      $tip.find('.popover-title').text(title)
      $tip.find('.popover-content').children().detach().end().text(content)
    }

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
        o.content.call($e[0]) :
        o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.4.1'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.4.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(document).find(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
          .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#affix
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    var target = this.options.target === Affix.DEFAULTS.target ? $(this.options.target) : $(document).find(this.options.target)

    this.$target = target
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.4.1'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);



/*===============================
/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/off-canvas.js
================================================================================*/;
/**
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org
 *------------------------------------------------------------------------------
 */
jQuery (document).ready(function($){
    function getAndroidVersion(ua) {
        var ua = ua || navigator.userAgent;
        var match = ua.match(/Android\s([0-9\.]*)/);
        return match ? match[1] : false;
    };

    if (parseInt(getAndroidVersion()) == 4) {
        $('#t3-mainnav').addClass('t3-mainnav-android');
    }
    var JA_isLoading = false;
    // fix for old ie
    if (/MSIE\s([\d.]+)/.test(navigator.userAgent) ? new Number(RegExp.$1) < 10 : false) {
        $('html').addClass ('old-ie');
    } else if(/constructor/i.test(window.HTMLElement)){
        $('html').addClass('safari');
    }

    var $wrapper = $('body'),
        $inner = $('.t3-wrapper'),
        $toggles = $('.off-canvas-toggle'),
        $offcanvas = $('.t3-off-canvas'),
        $close = $('.t3-off-canvas .close'),
        $btn=null,
        $nav=null,
        direction = 'left',
        $fixed = null;
    // no wrapper, just exit
    if (!$wrapper.length) return ;

    // add effect class for nav
    $toggles.each (function () {
        var $this = $(this),
            $nav = $($this.data('nav')),
            effect = $this.data('effect'),
            direction = ($('html').attr('dir') == 'rtl' && $this.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $this.data('pos')=='right')  ? 'right':'left';
        $nav.addClass (effect).addClass ('off-canvas-'+direction);

        // move to outside wrapper-content
        var inside_effect = ['off-canvas-effect-3','off-canvas-effect-16','off-canvas-effect-7','off-canvas-effect-8','off-canvas-effect-14'];
        if ($.inArray(effect, inside_effect) == -1) {
            $inner.before($nav);
        } else {
            $inner.prepend($nav);
        }
    });

    $toggles.on('tap', function(e){
        // detect direction

        stopBubble (e);

        if ($wrapper.hasClass ('off-canvas-open')) {
            oc_hide (e);
            return false;
        }

        $btn = $(this);
        $nav = $($btn.data('nav'));
        if (!$fixed) $fixed = $inner.find('*').filter (function() {return $(this).css("position") === 'fixed';});
        else $fixed = $fixed.filter (function() {return $(this).css("position") === 'fixed';}).add($inner.find('.affix'));

        $nav.addClass ('off-canvas-current');

        direction = ($('html').attr('dir') == 'rtl' && $btn.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $btn.data('pos')=='right')  ? 'right':'left';

        // add direction class to body
        // $('html').removeClass ('off-canvas-left off-canvas-right').addClass ('off-canvas-' + direction);

        $offcanvas.height($(window).height());

        // disable scroll event
        var events = $(window).data('events');
        if (events && events.scroll && events.scroll.length) {
          // store current handler for scroll
          var handlers = [];
          for (var i=0; i<events.scroll.length; i++){
            handlers[i] = events.scroll[i].handler;
          }
          $(window).data('scroll-events', handlers);
          $(window).off ('scroll');
        }
        // disable scroll on page
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('noscroll').css('top',-scrollTop).data('top', scrollTop);
        $('.t3-off-canvas').css('top',scrollTop);

        // make the fixed element become absolute
        $fixed.each (function () {
            var $this = $(this),
                $parent = $this.parent(),
                mtop = 0;
            // find none static parent
            while (!$parent.is($inner) && $parent.css("position") === 'static') $parent = $parent.parent();
            mtop = -$parent.offset().top;
            $this.css ({'position': 'absolute', 'margin-top': mtop});
        });

        $wrapper.scrollTop (scrollTop);
        // update effect class
        $wrapper[0].className = $.trim($wrapper[0].className.replace (/\s*off\-canvas\-effect\-\d+\s*/g, ' ')) +
            ' ' + $btn.data('effect') + ' ' + 'off-canvas-' + direction;

        setTimeout(oc_show, 50);

        return false;
    });
    var oc_show = function () {
        if (JA_isLoading == true) {
            return;
        }
        JA_isLoading=true;
        $wrapper.addClass ('off-canvas-open');
        $inner.on ('click', oc_hide);
        $close.on ('click', oc_hide);
        $offcanvas.on ('click', handleClick);

        // fix for old ie
        if ($.browser.msie && $.browser.version < 10) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = $('.t3-off-canvas').width();
            p2[direction] = 0;
            $inner.animate (p1);
            $nav.animate (p2);
        }
        setTimeout (function (){JA_isLoading=false;}, 200);
    };

    var oc_hide = function () {
        if (JA_isLoading == true) {
            return;
        }
        JA_isLoading=true;

        //remove events
        $inner.off ('click', oc_hide);
        $close.off ('click', oc_hide);
        $offcanvas.off ('click', handleClick);

        //delay for click action
        setTimeout(function(){
            $wrapper.removeClass ('off-canvas-open');
        }, 100);

        setTimeout (function (){
            $wrapper.removeClass ($btn.data('effect')).removeClass ('off-canvas-'+direction);
            $wrapper.scrollTop (0);
            // enable scroll
            $('html').removeClass ('noscroll').css('top', '');
            $('html,body').scrollTop ($('html').data('top'));
            $nav.removeClass ('off-canvas-current');
            // restore fixed elements
            $fixed.css ({'position': '', 'margin-top': ''});
            // re-enable scroll
            if ($(window).data('scroll-events')) {
              var handlers = $(window).data('scroll-events');
              for (var i=0; i<handlers.length; i++) {
                $(window).on ('scroll', handlers[i]);
              }
              $(window).data('scroll-events', null);
            }
            JA_isLoading=false;
        }, 700);

        // fix for old ie
        if ($('html').hasClass ('old-ie')) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = 0;
            p2[direction] = -$('.t3-off-canvas').width();
            $inner.animate (p1);
            $nav.animate (p2);
        }

    };

    var handleClick = function (e) {        
        if ($(e.target).closest('a').length) {
            if (!e.target.href) return;
            // handle the anchor link
            var arr1 = e.target.href.split('#'),
                arr2 = location.href.split('#');
            if (arr1[0] == arr2[0] && arr1.length > 1 && arr1[1].length) {
                oc_hide();
                setTimeout(function(){
                    var anchor = $("a[name='"+ arr1[1] +"']");
                    if (!anchor.length) anchor = $('#' + arr1[1]);
                    if (anchor.length) 
                        $('html,body').animate({scrollTop: anchor.offset().top},'slow');
                }, 1000);
            }
            // prevent only if anchor same page.
            if (e.target.href.search('#') !== -1) return;
        }
        stopBubble(e);
        return true;
    }

    var stopBubble = function (e) {
        e.stopPropagation();
    }

    // preload fixed items
    $(window).load(function() {
      setTimeout(function(){
        $fixed = $inner.find('*').filter (function() {return $(this).css("position") === 'fixed';});
      }, 100);
    });
})



/*===============================
/plugins/system/t3/base-bs3/js/script.js
================================================================================*/;
/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */

!function($){

  // legacy for $.browser to detect IE
  if ($.browser == undefined || $.browser.msie == undefined) {
    $.browser={msie:false,version:0};
    if (match = navigator.userAgent.match (/MSIE ([0-9]{1,}[\.0-9]{0,})/) || navigator.userAgent.match (/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)) {
      $.browser.msie=true;
      $.browser.version=match[1];
    }
  }
	// add ie version to html tag
  if ($.browser.msie) {
    $('html').addClass('ie'+ Math.floor($.browser.version));
  }

	// Detect grid-float-breakpoint value and put to $(body) data
	$(document).ready(function(){
			if (!window.getComputedStyle) {
					window.getComputedStyle = function(el, pseudo) {
							this.el = el;
							this.getPropertyValue = function(prop) {
									var re = /(\-([a-z]){1})/g;
									if (prop == 'float') prop = 'styleFloat';
									if (re.test(prop)) {
											prop = prop.replace(re, function () {
													return arguments[2].toUpperCase();
											});
									}
									return el.currentStyle[prop] ? el.currentStyle[prop] : null;
							}
							return this;
					}
			}
			var fromClass = 'body-data-holder',
					prop = 'content',
					$inspector = $('<div>').css('display', 'none').addClass(fromClass).appendTo($('body'));

			try {
				
				var computedStyle = window.getComputedStyle(
							$inspector[0], ':before'
					);
				if (computedStyle) {
					var attrs = computedStyle.getPropertyValue(prop);
					if(attrs){
							var matches = attrs.match(/([\da-z\-]+)/gi),
									data = {};
							if (matches && matches.length) {
									for (var i=0; i<matches.length; i++) {
											data[matches[i++]] = i<matches.length ? matches[i] : null;
									}
							}
							$('body').data (data);
					}
				}
			} finally {
					$inspector.remove(); // and remove from DOM
			}
	});
	
	
	//detect transform (https://github.com/cubiq/)
	(function(){
		$.support.t3transform = (function () {
			var style = document.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform, i = 0, l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in style ) {
					return transform;
				}
			}

			return false;
		})();

	})();
	
	//basic detect touch
	(function(){
		$('html').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
	})();
	
	//document ready
	$(document).ready(function(){

		//remove conflict of mootools more show/hide function of element
		(function(){
			if(window.MooTools && window.MooTools.More && Element && Element.implement){

				var mthide = Element.prototype.hide,
					mtshow = Element.prototype.show,
					mtslide = Element.prototype.slide;

				Element.implement({
					show: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtshow) && mtshow.apply(this, args);
					},

					hide: function(){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mthide) && mthide.apply(this, arguments);
					},

					slide: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtslide) && mtslide.apply(this, args);
					}
				})
			}
		})();

		// overwrite default tooltip/popover behavior (same as Joomla 3.1.5)
		$.fn.tooltip.Constructor && $.fn.tooltip.Constructor.DEFAULTS && ($.fn.tooltip.Constructor.DEFAULTS.html = true);
		$.fn.popover.Constructor && $.fn.popover.Constructor.DEFAULTS && ($.fn.popover.Constructor.DEFAULTS.html = true);
		$.fn.tooltip.defaults && ($.fn.tooltip.defaults.html = true);
		$.fn.popover.defaults && ($.fn.popover.defaults.html = true);

		//fix JomSocial navbar-collapse toggle
		(function(){
			if(window.jomsQuery && jomsQuery.fn.collapse){
			
				$('[data-toggle="collapse"]').on('click', function(e){
					
					//toggle manual
					$($(this).attr('data-target')).eq(0).collapse('toggle');
					
					//stop
					e.stopPropagation();

					return false;
				});

				//remove conflict on touch screen
				jomsQuery('html, body').off('touchstart.dropdown.data-api');
			}	
		})();


		//fix chosen select
		(function(){
			if($.fn.chosen && $(document.documentElement).attr('dir') == 'rtl'){
				$('select').addClass('chzn-rtl');
			}	
		})();

	});

	$(window).load(function(){

		//fix animation for navbar-collapse-fixed-top||bottom
		if(!$(document.documentElement).hasClass('off-canvas-ready') &&
			($('.navbar-collapse-fixed-top').length ||
			$('.navbar-collapse-fixed-bottom').length)){

			var btn = $('.btn-navbar[data-toggle="collapse"]');
			if (!btn.length){
				return;
			}

			if(btn.data('target')){
				var nav = $(btn.data('target'));
				if(!nav.length){
					return;
				}

				var fixedtop = nav.closest('.navbar-collapse-fixed-top').length;

				btn.on('click', function(){

					var wheight = (window.innerHeight || $(window).height());

					if(!$.support.transition){
						nav.parent().css('height', !btn.hasClass('collapsed') && btn.data('t3-clicked') ? '' : wheight);
						btn.data('t3-clicked', 1);
					}

					nav
						.addClass('animate')
						.css('max-height', wheight -
							(fixedtop ? (parseFloat(nav.css('top')) || 0) : (parseFloat(nav.css('bottom')) || 0)));
				});
				nav.on('shown hidden', function(){
					nav.removeClass('animate');
				});
			}
		}

	});

}(jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/menu.js
================================================================================*/;
/**
 * ------------------------------------------------------------------------------
 * 
 * @package T3 Framework for Joomla!
 *          ------------------------------------------------------------------------------
 * @copyright Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license GNU General Public License version 2 or later; see LICENSE.txt
 * @authors JoomlArt, JoomlaBamboo, (contribute to this project at github &
 *          Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link: http://t3-framework.org
 *        ------------------------------------------------------------------------------
 */

;
(function($) {

	var T3Menu = function(elm, options) {
		this.$menu = $(elm);
		if (!this.$menu.length) {
			return;
		}

		this.options = $.extend({}, $.fn.t3menu.defaults, options);
		this.child_open = [];
		this.loaded = false;

		this.start();
	};

	T3Menu.prototype = {
		constructor : T3Menu,

		start : function() {
			// init once
			if (this.loaded) {
				return;
			}
			this.loaded = true;

			// start
			var self = this, options = this.options, $menu = this.$menu;

			this.$items = $menu.find('li');
			this.$items
					.each(function(idx, li) {

						var $item = $(this), $child = $item
								.children('.dropdown-menu'), $link = $item
								.children('a'), item = {
							$item : $item,
							child : $child.length,
							link : $link.length,
							clickable : !($link.length && $child.length),
							mega : $item.hasClass('mega'),
							status : 'close',
							timer : null,
							atimer : null
						};

						// store
						$item.data('t3menu.item', item);

						// click action
						if ($child.length && !options.hover) {
							$item.on('click', function(e) {
								e.stopPropagation();

								if ($item.hasClass('group')) {
									return;
								}

								if (item.status == 'close') {
									e.preventDefault();
									self.show(item);
								}
							});
						} else {

							// stop if click on menu item - prevent bubble event
							$item.on('click', function(e) {
								// ignore if this is toggle button
								if ($(e.target).data('toggle')) return;
								e.stopPropagation()
							});
						}

						// click on caret, no action on link
						$item.find('a > .caret').on('click tap', function(e) {
							item.clickable = false;
						});

						if (options.hover) {
							$item.on('mouseover', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('show-processed'))
									return;
								$target.data('show-processed', true);
								setTimeout(function() {
									$target.data('show-processed', false);
								}, 10);

								self.show(item);

							}).on('mouseleave', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('hide-processed'))
									return;
								$target.data('hide-processed', true);
								setTimeout(function() {
									$target.data('hide-processed', false);
								}, 10);

								self.hide(item, $target);
							});

							// if has child, don't goto link before open child -
							// fix for touch screen
							if ($link.length && $child.length) {
								$link.on('click', function(e) {
									if (item.clickable) {
										e.stopPropagation();
									}
									return item.clickable;
								});
							}
						}

					});

			$(document.body)
					.on(
							'tap hideall.t3menu',
							function(e) {
								clearTimeout(self.timer);
								self.timer = setTimeout($.proxy(self.hide_alls,
										self), e.type == 'tap' ? 500
										: self.options.hidedelay);
							});

			// ignore click on direct child
			$menu.find('.mega-dropdown-menu').on('hideall.t3menu', function(e) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			});

			// prevent close menu if click on form element
			$menu.find('input, select, textarea, label').on('click tap',
					function(e) {
						e.stopPropagation();
					});

			// update mega-tab height
			var $megatab = $menu.find('.mega-tab');
			if ($megatab.length) {
				$megatab.each(function() {
					var $tabul = $(this).find('>div>ul'), 
						$tabItems = $tabul.children('.dropdown-submenu'),
						$tabs = $tabul.find('>li>.dropdown-menu'), 
						tabheight = 0,
						$parentItem = $(this).closest('li');
					// mark item as tab-item
					$tabItems.data('mega-tab-item', 1);
					// add this tabs to parent item
					var megatabs = $parentItem.data('mega-tabs') ? $parentItem.data('mega-tabs') : [];
					megatabs.push($tabul);
					$parentItem.data('mega-tabs', megatabs);

					// default active the first
					// $tabul.data('mega-tab', 0);
					$tabItems.first().data('mega-tab-active', true).addClass('open');
					// make all parent visible to get height
					var $p = $tabul.parents('.dropdown-menu');
					$p.each(function() {
						var $this = $(this);
						$this.data('prev-style', $this.attr('style')).css({
							visibility : "visible",
							display : "block"
						});
					})
					$tabs.each(function() {
						var $this = $(this), thisstyle = $this.attr('style');
						$this.css({
							visibility : "hidden",
							display : "block"
						});
						tabheight = Math.max(tabheight, $this.children()
								.innerHeight());
						// restore style
						if (thisstyle) {
							$this.attr('style', thisstyle);
						} else {
							$this.removeAttr('style');
						}
					});
					$tabul.css('min-height', tabheight);
					// restore
					$p.each(function() {
						var $this = $(this);
						if ($this.data('prev-style'))
							$this.attr('style', $this.data('prev-style'));
						else
							$this.removeAttr('style');
						$this.removeData('prev-style');
					})
				})
			}
			// fix for modal in menu
			$menu.find('.modal').appendTo('body');
		},

		show : function(item) {
			// check if current item is mega-tab
			if (item.$item.data('mega-tab-item')) {
				item.$item.parent().children().removeClass('open').data('mega-tab-active', false);
				item.$item.addClass('open').data('mega-tab-active', true);
			}			
			// hide all others menu of this instance
			if ($.inArray(item, this.child_open) < this.child_open.length - 1) {
				this.hide_others(item);
			}

			// hide all for other instances as well
			$(document.body).trigger('hideall.t3menu', [ this ]);

			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.ftimer); // on hidden
			clearTimeout(item.ctimer); // on hidden

			if (item.status != 'open' || !item.$item.hasClass('open')
					|| !this.child_open.length) {
				if (item.mega) {
					// remove timer
					clearTimeout(item.astimer); // animate
					clearTimeout(item.atimer); // animate

					// place menu
					this.position(item.$item);

					// add class animate
					item.astimer = setTimeout(function() {
						item.$item.addClass('animating')
					}, 10);
					item.atimer = setTimeout(function() {
						item.$item.removeClass('animating')
					}, this.options.duration + 50);
					item.timer = setTimeout(function() {
						item.$item.addClass('open');
					}, 100);
				} else {
					item.$item.addClass('open');
				}

				item.status = 'open';
				if (item.child && $.inArray(item, this.child_open) == -1) {
					this.child_open.push(item);
				}
			}

			item.ctimer = setTimeout($.proxy(this.clickable, this, item), 300);

		},

		hide : function(item, $target) {
			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.astimer); // animate timer
			clearTimeout(item.atimer); // animate timer
			clearTimeout(item.ftimer); // on hidden

			// cancel hide if still in menu
			if ($target && $target.is('input', item.$item)) {
				return;
			}

			if (item.mega) {
				// animate out
				item.$item.addClass('animating');
				item.atimer = setTimeout(function() {
					item.$item.removeClass('animating')
				}, this.options.duration);
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open')
				}, 100);
			} else {
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open');
				}, 100);
			}

			item.status = 'close';
			for (var i = this.child_open.length; i--;) {
				if (this.child_open[i] === item) {
					this.child_open.splice(i, 1);
				}
			}

			item.ftimer = setTimeout($.proxy(this.hidden, this, item),
					this.options.duration);
			this.timer = setTimeout($.proxy(this.hide_alls, this),
					this.options.hidedelay);
		},

		hidden : function(item) {
			// hide done
			if (item.status == 'close') {
				item.clickable = false;
			}
		},

		hide_others : function(item) {
			var self = this;
			$
					.each(this.child_open.slice(),
							function(idx, open) {
								if (!item
										|| (open != item && !open.$item
												.has(item.$item).length)) {
									self.hide(open);
								}
							});
		},

		hide_alls : function(e, inst) {
			if (!e || e.type == 'tap' || (e.type == 'hideall' && this != inst)) {
				var self = this;
				$.each(this.child_open.slice(), function(idx, item) {
					item && self.hide(item);
				});
			}
		},

		clickable : function(item) {
			item.clickable = true;
		},

		position : function($item) {
			var sub = $item.children('.mega-dropdown-menu'), is_show = sub
					.is(':visible');

			if (!is_show) {
				sub.show();
			}

			var offset = $item.offset(), width = $item.outerWidth(), screen_width = $(
					window).width()
					- this.options.sb_width, sub_width = sub.outerWidth(), level = $item
					.data('level');

			if (!is_show) {
				sub.css('display', '');
			}

			// reset custom align
			sub.css({
				left : '',
				right : ''
			});

			if (level == 1) {

				var align = $item.data('alignsub'), align_offset = 0, align_delta = 0, align_trans = 0;

				if (align == 'justify') {
					return; // do nothing
				}

				if (!align) {
					align = 'left';
				}

				if (align == 'center') {
					align_offset = offset.left + (width / 2);

					if (!$.support.t3transform) {
						align_trans = -sub_width / 2;
						sub.css(this.options.rtl ? 'right' : 'left',
								align_trans + width / 2);
					}

				} else {
					align_offset = offset.left
							+ ((align == 'left' && this.options.rtl || align == 'right'
									&& !this.options.rtl) ? width : 0);
				}

				if (this.options.rtl) {

					if (align == 'right') {
						if (align_offset + sub_width > screen_width) {
							align_delta = screen_width - align_offset
									- sub_width;
							sub.css('left', align_delta);

							if (screen_width < sub_width) {
								sub.css('left', align_delta + sub_width
										- screen_width);
							}
						}
					} else {
						if (align_offset < (align == 'center' ? sub_width / 2
								: sub_width)) {
							align_delta = align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('right', align_delta + align_trans);
						}

						if (align_offset
								+ (align == 'center' ? sub_width / 2 : 0)
								- align_delta > screen_width) {
							sub
									.css(
											'right',
											align_offset
													+ (align == 'center' ? (sub_width + width) / 2
															: 0) + align_trans
													- screen_width);
						}
					}

				} else {

					if (align == 'right') {
						if (align_offset < sub_width) {
							align_delta = align_offset - sub_width;
							sub.css('right', align_delta);

							if (sub_width > screen_width) {
								sub.css('right', sub_width - screen_width
										+ align_delta);
							}
						}
					} else {

						if (align_offset
								+ (align == 'center' ? sub_width / 2
										: sub_width) > screen_width) {
							align_delta = screen_width
									- align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('left', align_delta + align_trans);
						}

						if (align_offset
								- (align == 'center' ? sub_width / 2 : 0)
								+ align_delta < 0) {
							sub
									.css(
											'left',
											(align == 'center' ? (sub_width + width) / 2
													: 0)
													+ align_trans
													- align_offset);
						}
					}
				}
			} else {

				if (this.options.rtl) {
					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {

						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					} else {
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					}
				} else {

					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {
						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					} else {

						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					}
				}
			}
		}
	};

	$.fn.t3menu = function(option) {
		return this
				.each(function() {
					var $this = $(this), data = $this.data('megamenu'), options = typeof option == 'object'
							&& option;

					// Ignore off-canvas navigation
					if ($this.parents('#off-canvas-nav').length)
						return;
					if ($this.parents('#t3-off-canvas').length)
						return;

					if (!data) {
						$this.data('megamenu',
								(data = new T3Menu(this, options)));

					} else {
						if (typeof option == 'string' && data[option]) {
							data[option]()
						}
					}
				})
	};

	$.fn.t3menu.defaults = {
		duration : 400,
		timeout : 100,
		hidedelay : 200,
		hover : true,
		sb_width : 20
	};

	// apply script
	$(document)
			.ready(
					function() {

						// detect settings
						var mm_duration = $('.t3-megamenu').data('duration') || 0;
						if (mm_duration) {

							$(
									'<style type="text/css">'
											+ '.t3-megamenu.animate .animating > .mega-dropdown-menu,'
											+ '.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
											+ 'transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '-webkit-transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '}' + '</style>')
									.appendTo('head');
						}

						var mm_timeout = mm_duration ? 100 + mm_duration : 500, mm_rtl = $(
								document.documentElement).attr('dir') == 'rtl', mm_trigger = $(
								document.documentElement).hasClass('mm-hover'), sb_width = (function() {
							var parent = $(
									'<div style="width:50px;height:50px;overflow:auto"><div/></div>')
									.appendTo('body'), child = parent
									.children(), width = child.innerWidth()
									- child.height(100).innerWidth();

							parent.remove();

							return width;
						})();

						// lt IE 10
						if (!$.support.transition) {
							// it is not support animate
							$('.t3-megamenu').removeClass('animate');

							mm_timeout = 100;
						}

						// get ready
						$('ul.nav').has('.dropdown-menu').t3menu({
							duration : mm_duration,
							timeout : mm_timeout,
							rtl : mm_rtl,
							sb_width : sb_width,
							hover : mm_trigger
						});

						$(window).load(function() {

							// check we miss any nav
							$('ul.nav').has('.dropdown-menu').t3menu({
								duration : mm_duration,
								timeout : mm_timeout,
								rtl : mm_rtl,
								sb_width : sb_width,
								hover : mm_trigger
							});

						});
					});

})(jQuery);



/*===============================
/templates/crafty/js/script.js
================================================================================*/;
/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */
jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});



/*===============================
/plugins/system/t3/base-bs3/js/nav-collapse.js
================================================================================*/;
/**
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org
 *------------------------------------------------------------------------------
 */

jQuery(document).ready(function ($) {

    // clone the collapse menu from mainnav (.t3-navbar)
    $('.t3-navbar').each(function(){
        var $navwrapper  = $(this),
            $menu        = null,
            $placeholder = null;

        if ($navwrapper.find('.t3-megamenu').length) {
            
            // clone for megamenu
            $menu        = $navwrapper.find('ul.level0').clone(),
            $placeholder = $navwrapper.prev('.navbar-collapse');

            if(!$placeholder.length){
                //get the empty one
                $placeholder = $navwrapper.closest('.container, .t3-mainnav').find('.navbar-collapse:empty');
            }
            
            var lis = $menu.find('li[data-id]'),
                liactive = lis.filter('.current');
            
            // clean class
            lis.removeClass('mega dropdown mega-align-left mega-align-right mega-align-center mega-align-adjust');
            // rebuild
            lis.each(function () {

                // get firstchild - a or span
                var $li = $(this),
                    $child = $li.find('>:first-child');

                if ($child[0].nodeName == 'DIV') {
                    $child.find('>:first-child').prependTo($li);
                    $child.remove();
                }

                // remove caret
                if($li.data('hidewcol')){
                    $child.find('.caret').remove();
                    $child.nextAll().remove();

                    return; //that is all for this item
                }

                // find subnav and inject into one ul
                var subul = $li.find('ul.level' + $li.data('level'));
                if (subul.length) {
                    // create subnav
                    $ul = $('<ul class="level' + $li.data('level') + ' dropdown-menu">');
                    subul.each(function () {
                        // check if the ul not in a hide when collapsed column
                        if ($(this).parents('.mega-col-nav').data('hidewcol')) return ;
                        $(this).find('>li').appendTo($ul);
                    });
                    if ($ul.children().length) {
                        $ul.appendTo($li);
                    }
                }

                // remove all child div
                $li.find('>div').remove();

                // clean caret if there was no real submenu
                if(!$li.children('ul').length){
                    $child.find('.caret').remove();
                }

                var divider = $li.hasClass('divider');

                // clear all attributes
                // $li.removeAttr('class');
                for (var x in $li.data()) {
                    $li.removeAttr('data-' + x)
                }
                $child.removeAttr('class');
                for (var x in $child.data()) {
                    $child.removeAttr('data-' + x)
                }

                if(divider){
                    $li.addClass('divider');
                }
            });

            // update class current
            liactive.addClass('current active');
            
        } else {
            // clone for bootstrap menu
            $menu = $navwrapper.find ('ul.nav').clone();
            $placeholder = $('.t3-navbar-collapse:empty, .navbar-collapse:empty').eq(0);
        }
        
        //so we have all structure, add standard bootstrap class
        $menu.find ('a[data-toggle="dropdown"]').removeAttr('data-toggle').removeAttr('data-target');
        $menu
            .find('> li > ul.dropdown-menu')
            .prev('a').attr('data-toggle', 'dropdown').attr('data-target', '#')
            .parent('li')
            .addClass(function(){
                return 'dropdown' + ($(this).data('level') > 1 ? ' dropdown-submenu' : '');
            });

        // inject into .t3-navbar-collapse
        $menu.appendTo ($placeholder);

    });
});
