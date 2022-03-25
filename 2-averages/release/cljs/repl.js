// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5884){
var map__5885 = p__5884;
var map__5885__$1 = ((((!((map__5885 == null)))?(((((map__5885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5885):map__5885);
var m = map__5885__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5885__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5885__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__5887_5909 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__5888_5910 = null;
var count__5889_5911 = (0);
var i__5890_5912 = (0);
while(true){
if((i__5890_5912 < count__5889_5911)){
var f_5913 = chunk__5888_5910.cljs$core$IIndexed$_nth$arity$2(null,i__5890_5912);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_5913], 0));


var G__5914 = seq__5887_5909;
var G__5915 = chunk__5888_5910;
var G__5916 = count__5889_5911;
var G__5917 = (i__5890_5912 + (1));
seq__5887_5909 = G__5914;
chunk__5888_5910 = G__5915;
count__5889_5911 = G__5916;
i__5890_5912 = G__5917;
continue;
} else {
var temp__5457__auto___5918 = cljs.core.seq(seq__5887_5909);
if(temp__5457__auto___5918){
var seq__5887_5919__$1 = temp__5457__auto___5918;
if(cljs.core.chunked_seq_QMARK_(seq__5887_5919__$1)){
var c__4351__auto___5920 = cljs.core.chunk_first(seq__5887_5919__$1);
var G__5921 = cljs.core.chunk_rest(seq__5887_5919__$1);
var G__5922 = c__4351__auto___5920;
var G__5923 = cljs.core.count(c__4351__auto___5920);
var G__5924 = (0);
seq__5887_5909 = G__5921;
chunk__5888_5910 = G__5922;
count__5889_5911 = G__5923;
i__5890_5912 = G__5924;
continue;
} else {
var f_5925 = cljs.core.first(seq__5887_5919__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_5925], 0));


var G__5926 = cljs.core.next(seq__5887_5919__$1);
var G__5927 = null;
var G__5928 = (0);
var G__5929 = (0);
seq__5887_5909 = G__5926;
chunk__5888_5910 = G__5927;
count__5889_5911 = G__5928;
i__5890_5912 = G__5929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5930 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_5930], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_5930)))?cljs.core.second(arglists_5930):arglists_5930)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__5891_5931 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__5892_5932 = null;
var count__5893_5933 = (0);
var i__5894_5934 = (0);
while(true){
if((i__5894_5934 < count__5893_5933)){
var vec__5895_5935 = chunk__5892_5932.cljs$core$IIndexed$_nth$arity$2(null,i__5894_5934);
var name_5936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5895_5935,(0),null);
var map__5898_5937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5895_5935,(1),null);
var map__5898_5938__$1 = ((((!((map__5898_5937 == null)))?(((((map__5898_5937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5898_5937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5898_5937):map__5898_5937);
var doc_5939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5898_5938__$1,cljs.core.cst$kw$doc);
var arglists_5940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5898_5938__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_5936], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_5940], 0));

if(cljs.core.truth_(doc_5939)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_5939], 0));
} else {
}


var G__5941 = seq__5891_5931;
var G__5942 = chunk__5892_5932;
var G__5943 = count__5893_5933;
var G__5944 = (i__5894_5934 + (1));
seq__5891_5931 = G__5941;
chunk__5892_5932 = G__5942;
count__5893_5933 = G__5943;
i__5894_5934 = G__5944;
continue;
} else {
var temp__5457__auto___5945 = cljs.core.seq(seq__5891_5931);
if(temp__5457__auto___5945){
var seq__5891_5946__$1 = temp__5457__auto___5945;
if(cljs.core.chunked_seq_QMARK_(seq__5891_5946__$1)){
var c__4351__auto___5947 = cljs.core.chunk_first(seq__5891_5946__$1);
var G__5948 = cljs.core.chunk_rest(seq__5891_5946__$1);
var G__5949 = c__4351__auto___5947;
var G__5950 = cljs.core.count(c__4351__auto___5947);
var G__5951 = (0);
seq__5891_5931 = G__5948;
chunk__5892_5932 = G__5949;
count__5893_5933 = G__5950;
i__5894_5934 = G__5951;
continue;
} else {
var vec__5900_5952 = cljs.core.first(seq__5891_5946__$1);
var name_5953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5900_5952,(0),null);
var map__5903_5954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5900_5952,(1),null);
var map__5903_5955__$1 = ((((!((map__5903_5954 == null)))?(((((map__5903_5954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5903_5954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5903_5954):map__5903_5954);
var doc_5956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5903_5955__$1,cljs.core.cst$kw$doc);
var arglists_5957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5903_5955__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_5953], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_5957], 0));

if(cljs.core.truth_(doc_5956)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_5956], 0));
} else {
}


var G__5958 = cljs.core.next(seq__5891_5946__$1);
var G__5959 = null;
var G__5960 = (0);
var G__5961 = (0);
seq__5891_5931 = G__5958;
chunk__5892_5932 = G__5959;
count__5893_5933 = G__5960;
i__5894_5934 = G__5961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__5905 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__5906 = null;
var count__5907 = (0);
var i__5908 = (0);
while(true){
if((i__5908 < count__5907)){
var role = chunk__5906.cljs$core$IIndexed$_nth$arity$2(null,i__5908);
var temp__5457__auto___5962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___5962__$1)){
var spec_5963 = temp__5457__auto___5962__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_5963)], 0));
} else {
}


var G__5964 = seq__5905;
var G__5965 = chunk__5906;
var G__5966 = count__5907;
var G__5967 = (i__5908 + (1));
seq__5905 = G__5964;
chunk__5906 = G__5965;
count__5907 = G__5966;
i__5908 = G__5967;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__5905);
if(temp__5457__auto____$1){
var seq__5905__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__5905__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5905__$1);
var G__5968 = cljs.core.chunk_rest(seq__5905__$1);
var G__5969 = c__4351__auto__;
var G__5970 = cljs.core.count(c__4351__auto__);
var G__5971 = (0);
seq__5905 = G__5968;
chunk__5906 = G__5969;
count__5907 = G__5970;
i__5908 = G__5971;
continue;
} else {
var role = cljs.core.first(seq__5905__$1);
var temp__5457__auto___5972__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___5972__$2)){
var spec_5973 = temp__5457__auto___5972__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_5973)], 0));
} else {
}


var G__5974 = cljs.core.next(seq__5905__$1);
var G__5975 = null;
var G__5976 = (0);
var G__5977 = (0);
seq__5905 = G__5974;
chunk__5906 = G__5975;
count__5907 = G__5976;
i__5908 = G__5977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
