// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && (!(((window["document"]) == null))));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if(!((v == null))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__4684 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__4685 = cljs.core.seq(vec__4684);
var first__4686 = cljs.core.first(seq__4685);
var seq__4685__$1 = cljs.core.next(seq__4685);
var start = first__4686;
var parts = seq__4685__$1;
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__4688__delegate = function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var or__3949__auto___4689 = self__.p;
if(cljs.core.truth_(or__3949__auto___4689)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__4688 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__4690__i = 0, G__4690__a = new Array(arguments.length -  1);
while (G__4690__i < G__4690__a.length) {G__4690__a[G__4690__i] = arguments[G__4690__i + 1]; ++G__4690__i;}
  a = new cljs.core.IndexedSeq(G__4690__a,0,null);
} 
return G__4688__delegate.call(this,self__,a);};
G__4688.cljs$lang$maxFixedArity = 1;
G__4688.cljs$lang$applyTo = (function (arglist__4691){
var self__ = cljs.core.first(arglist__4691);
var a = cljs.core.rest(arglist__4691);
return G__4688__delegate(self__,a);
});
G__4688.cljs$core$IFn$_invoke$arity$variadic = G__4688__delegate;
return G__4688;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args4687){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args4687)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__4692__delegate = function (a){
var self__ = this;
var _ = this;
var or__3949__auto___4693 = self__.p;
if(cljs.core.truth_(or__3949__auto___4693)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__4692 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__4694__i = 0, G__4694__a = new Array(arguments.length -  0);
while (G__4694__i < G__4694__a.length) {G__4694__a[G__4694__i] = arguments[G__4694__i + 0]; ++G__4694__i;}
  a = new cljs.core.IndexedSeq(G__4694__a,0,null);
} 
return G__4692__delegate.call(this,a);};
G__4692.cljs$lang$maxFixedArity = 0;
G__4692.cljs$lang$applyTo = (function (arglist__4695){
var a = cljs.core.seq(arglist__4695);
return G__4692__delegate(a);
});
G__4692.cljs$core$IFn$_invoke$arity$variadic = G__4692__delegate;
return G__4692;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.impl.util/partial-ifn");
});

/**
 * Positional factory function for reagent.impl.util/partial-ifn.
 */
reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__5457__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var c1 = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var c2 = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5457__auto__ = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var s1 = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var s2 = temp__5457__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.util !== 'undefined') && (typeof reagent.impl.util.roots !== 'undefined')){
} else {
reagent.impl.util.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e4696){if((e4696 instanceof Object)){
var e = e4696;
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Error unmounting:"].join(''));
} else {
}

if((typeof console !== 'undefined')){
return console.log(e);
} else {
return null;
}
} else {
throw e4696;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_4698 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_4698){
return (function (){
var _STAR_always_update_STAR_4699 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_4699;
}});})(_STAR_always_update_STAR_4698))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_4698;
}}catch (e4697){if((e4697 instanceof Object)){
var e = e4697;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e4697;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__4700_4704 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.impl.util.roots)));
var chunk__4701_4705 = null;
var count__4702_4706 = (0);
var i__4703_4707 = (0);
while(true){
if((i__4703_4707 < count__4702_4706)){
var v_4708 = chunk__4701_4705.cljs$core$IIndexed$_nth$arity$2(null,i__4703_4707);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_4708);


var G__4709 = seq__4700_4704;
var G__4710 = chunk__4701_4705;
var G__4711 = count__4702_4706;
var G__4712 = (i__4703_4707 + (1));
seq__4700_4704 = G__4709;
chunk__4701_4705 = G__4710;
count__4702_4706 = G__4711;
i__4703_4707 = G__4712;
continue;
} else {
var temp__5457__auto___4713 = cljs.core.seq(seq__4700_4704);
if(temp__5457__auto___4713){
var seq__4700_4714__$1 = temp__5457__auto___4713;
if(cljs.core.chunked_seq_QMARK_(seq__4700_4714__$1)){
var c__4351__auto___4715 = cljs.core.chunk_first(seq__4700_4714__$1);
var G__4716 = cljs.core.chunk_rest(seq__4700_4714__$1);
var G__4717 = c__4351__auto___4715;
var G__4718 = cljs.core.count(c__4351__auto___4715);
var G__4719 = (0);
seq__4700_4704 = G__4716;
chunk__4701_4705 = G__4717;
count__4702_4706 = G__4718;
i__4703_4707 = G__4719;
continue;
} else {
var v_4720 = cljs.core.first(seq__4700_4714__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_4720);


var G__4721 = cljs.core.next(seq__4700_4714__$1);
var G__4722 = null;
var G__4723 = (0);
var G__4724 = (0);
seq__4700_4704 = G__4721;
chunk__4701_4705 = G__4722;
count__4702_4706 = G__4723;
i__4703_4707 = G__4724;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
