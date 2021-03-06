// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$comp], null);
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(comp){
return (new reagent.impl.template.NativeWrapper(comp));
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
var or__3949__auto__ = reagent.impl.template.named_QMARK_(x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return typeof x === 'string';
}
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
var or__3949__auto__ = reagent.impl.template.hiccup_tag_QMARK_(x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
}
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.obj_get = (function reagent$impl$template$obj_get(o,k){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(cljs.core.truth_(reagent.impl.template.named_QMARK_(k))){
var temp__5459__auto__ = reagent.impl.template.obj_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5459__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5459__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(((typeof x === 'string') || (typeof x === 'number') || (cljs.core.fn_QMARK_(x)))){
return x;
} else {
if(cljs.core.truth_(reagent.impl.template.named_QMARK_(x))){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (o,k,v){
var G__4903 = o;
(G__4903[reagent.impl.template.cached_prop_name(k)] = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v)));

return G__4903;
}),({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__4904__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__4904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4905__i = 0, G__4905__a = new Array(arguments.length -  0);
while (G__4905__i < G__4905__a.length) {G__4905__a[G__4905__i] = arguments[G__4905__i + 0]; ++G__4905__i;}
  args = new cljs.core.IndexedSeq(G__4905__a,0,null);
} 
return G__4904__delegate.call(this,args);};
G__4904.cljs$lang$maxFixedArity = 0;
G__4904.cljs$lang$applyTo = (function (arglist__4906){
var args = cljs.core.seq(arglist__4906);
return G__4904__delegate(args);
});
G__4904.cljs$core$IFn$_invoke$arity$variadic = G__4904__delegate;
return G__4904;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id,class$){
var p = (((props == null))?({}):props);
if(((!((id == null))) && (((p["id"]) == null)))){
(p["id"] = id);
} else {
}

if(!((class$ == null))){
var old_4907 = (p["className"]);
(p["className"] = ((!((old_4907 == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_4907)].join(''):class$));
} else {
}

return p;
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["className"]);
var no_id_class = (((id == null)) && ((class$ == null)));
if(((no_id_class) && (cljs.core.empty_QMARK_(props)))){
return null;
} else {
var objprops = reagent.impl.template.convert_prop_value(props);
if(no_id_class){
return objprops;
} else {
return reagent.impl.template.set_id_class(objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__5461__auto__ = (this$["cljsInputValue"]);
if((temp__5461__auto__ == null)){
return null;
} else {
var value = temp__5461__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later(((function (res){
return (function (){
return reagent.impl.template.input_set_value(this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3938__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__3938__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__3938__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__4909 = jsprops;
(G__4909["defaultValue"] = value);

(G__4909["onChange"] = ((function (G__4909,v,value,on_change){
return (function (p1__4908_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__4908_SHARP_);
});})(G__4909,v,value,on_change))
);

return G__4909;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
return (((x === "input")) || ((x === "textarea")));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"ReagentInput",cljs.core.cst$kw$component_DASH_did_DASH_update,reagent.impl.template.input_set_value,cljs.core.cst$kw$component_DASH_will_DASH_unmount,reagent.impl.template.input_unmount,cljs.core.cst$kw$reagent_DASH_render,(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

return (reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.reagent_input_class.call(null,argv,comp,jsprops,first_child));
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__4910 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4910,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4910,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4910,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class_SINGLEQUOTE_});
});
reagent.impl.template.fn_to_class = (function reagent$impl$template$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))].join('')),"\n","(ifn? f)"].join('')));
}

if(((!(!(((cljs.core.fn_QMARK_(f)) && (!(((f["type"]) == null))))))) && ((typeof console !== 'undefined')))){
console.warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((f["type"])),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join(''));
} else {
}

var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$reagent_DASH_render,f);
var res = reagent.impl.component.create_class(withrender);
var wrapf = reagent.impl.util.cached_react_class(res);
reagent.impl.util.cache_react_class(f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function reagent$impl$template$as_class(tag){
var temp__5459__auto__ = reagent.impl.util.cached_react_class(tag);
if((temp__5459__auto__ == null)){
return reagent.impl.template.fn_to_class(tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$key);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5459__auto__ = (function (){var G__4913 = cljs.core.meta(v);
if((G__4913 == null)){
return null;
} else {
return reagent.impl.template.get_key(G__4913);
}
})();
if((temp__5459__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5459__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.template.as_class(tag);
var jsprops = ({"argv": v});
var G__4914_4915 = v;
var G__4914_4916__$1 = (((G__4914_4915 == null))?null:reagent.impl.template.key_from_vec(G__4914_4915));
if((G__4914_4916__$1 == null)){
} else {
(jsprops["key"] = G__4914_4916__$1);
}

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return (new reagent.impl.template.NativeWrapper(({"name": c, "id": null, "class": null})));
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
if(cljs.core.truth_(reagent.impl.template.hiccup_tag_QMARK_(x))){
var temp__5459__auto__ = reagent.impl.template.obj_get(reagent.impl.template.tag_name_cache,cljs.core.name(x));
if((temp__5459__auto__ == null)){
return (reagent.impl.template.tag_name_cache[cljs.core.name(x)] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__5459__auto__;
return s;
}
} else {
if((x instanceof reagent.impl.template.NativeWrapper)){
return x.comp;
} else {
return null;
}
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(tag,argv){
var temp__5457__auto__ = reagent.impl.template.cached_parse(tag);
if(cljs.core.truth_(temp__5457__auto__)){
var parsed = temp__5457__auto__;
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = ((hasprops)?(2):(1));
if(cljs.core.truth_(reagent.impl.template.input_component_QMARK_(comp))){
var G__4917 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__4917) : reagent.impl.template.as_element.call(null,G__4917));
} else {
var p = (function (){var temp__5459__auto__ = (function (){var G__4918 = cljs.core.meta(argv);
if((G__4918 == null)){
return null;
} else {
return reagent.impl.template.get_key(G__4918);
}
})();
if((temp__5459__auto__ == null)){
return jsprops;
} else {
var key = temp__5459__auto__;
var G__4919 = (((jsprops == null))?({}):jsprops);
(G__4919["key"] = key);

return G__4919;
}
})();
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Hiccup form should not be empty: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join('')),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if(cljs.core.truth_(reagent.impl.template.valid_tag_QMARK_(tag))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid Hiccup form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join('')),"\n","(valid-tag? tag)"].join('')));
}

var temp__5459__auto__ = reagent.impl.template.native_element(tag,v);
if((temp__5459__auto__ == null)){
return reagent.impl.template.reag_element(tag,v);
} else {
var ne = temp__5459__auto__;
return ne;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : reagent.impl.template.expand_seq_check.call(null,x));

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4408__auto___4920 = a.length;
var i_4921 = (0);
while(true){
if((i_4921 < n__4408__auto___4920)){
(a[i_4921] = reagent.impl.template.as_element((a[i_4921])));

var G__4922 = (i_4921 + (1));
i_4921 = G__4922;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4408__auto___4923 = a.length;
var i_4924 = (0);
while(true){
if((i_4924 < n__4408__auto___4923)){
var val_4925 = (a[i_4924]);
if(((cljs.core.vector_QMARK_(val_4925)) && ((reagent.impl.template.key_from_vec(val_4925) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_4924] = reagent.impl.template.as_element(val_4925));

var G__4926 = (i_4924 + (1));
i_4924 = G__4926;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev(x,ctx):reagent.ratom.capture_derefed(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
,ctx));
if(cljs.core.truth_(reagent.ratom.captured(ctx))){
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Reactive deref not supported in lazy seq, ","it should be wrapped in doall",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name()),". Value:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Every element in a seq should have a unique ",":key",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name()),". Value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__4927 = (cljs.core.count(argv) - first_child);
switch (G__4927) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,cljs.core.reduce_kv(((function (G__4927){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__4927))
,[comp,jsprops],argv));

}
});
