!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t,r){r(3),e.exports=r(4)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){console.log("Starting server..."),r(5)},function(e,t,r){var n=r(0),u=n(r(6)),o=n(r(7)),a=n(r(17)),i=n(r(25)),l=n(r(26)),f=n(r(29));(0,o.default)({orm:a.default}),(0,i.default)({getHead:function(e){return"\n    <title>HelloWorld</title>\n    \x3c!-- Put vendor JS and CSS here --\x3e\n  "},appRoutes:(0,u.default)((0,f.default)())},(function(e){e.on("routes",(function(e){e.use("/api",l.default)}))}))},function(e,t){e.exports=require("@babel/runtime/helpers/toConsumableArray")},function(e,t,r){e.exports=r(8)},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}});var u=n(r(9))},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(10)),o=n(r(11));t.default=function(e){(0,o.default)(u.default,e)}},function(e,t){e.exports=require("sharedb")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(12)),o=n(r(13)),a=n(r(14)),i=n(r(15)),l=n(r(16));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.orm;e.types.register(u.default.type);var n=a.default.prototype._onOp;a.default.prototype._onOp=function(){if(this.shareDoc.type!==u.default.type)return n.apply(this,arguments)},o.default.Model.prototype.batch=i.default,r&&(o.default.use(l.default),o.default.use(r))}},function(e,t){e.exports=require("rich-text")},function(e,t){e.exports=require("racer")},function(e,t){e.exports=require("racer/lib/Model/RemoteDoc")},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return e()}},function(e,t){e.exports=require("@startupjs/orm")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.orm("testThings.*",u.default)};var u=n(r(18))},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(1)),o=n(r(19)),a=n(r(20)),i=n(r(21)),l=n(r(22)),f=n(r(23));function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.default)(e);if(t){var u=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return(0,l.default)(this,r)}}var s=function(e){(0,i.default)(r,e);var t=c(r);function r(){return(0,o.default)(this,r),t.apply(this,arguments)}return(0,a.default)(r,[{key:"addSelf",value:function(){return u.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.awrap(this.root.add(this.getCollection(),{id:this.getId(),counter:0}));case 2:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"reset",value:function(){return u.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.awrap(this.set("counter",0));case 2:case"end":return e.stop()}}),null,this,null,Promise)}}]),r}(r(24).BaseModel);t.default=s},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("startupjs/orm")},function(e,t){e.exports=require("startupjs/server")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(27)),o=n(r(28)),a=u.default.Router();a.get("/test-thing",o.default);var i=a;t.default=i},function(e,t){e.exports=require("express")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(1));t.default=function(e,t){var r,n;return u.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.model,n=r.at("testThings.first"),o.next=4,u.default.awrap(n.subscribe());case 4:t.json({name:"Test API",testThing:n.get()});case 5:case"end":return o.stop()}}),null,null,null,Promise)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{path:"/",exact:!0,component:e.PHome},{path:"/about",exact:!0,component:e.PAbout}]}}]);
//# sourceMappingURL=server.js.map