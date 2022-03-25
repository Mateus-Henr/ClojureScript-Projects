// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.color');
cljs.core.enable_console_print_BANG_();
if((typeof colors !== 'undefined') && (typeof colors.core !== 'undefined') && (typeof colors.core.rgbh !== 'undefined')){
} else {
colors.core.rgbh = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(0),cljs.core.cst$kw$hex,"#ffff00"], null));
}
/**
 * This component is a rectangle whose background color
 *   is controlled by the value of the :hex key in the rgbh atom
 */
colors.core.color_square = (function colors$core$color_square(){
var map__4967 = cljs.core.deref(colors.core.rgbh);
var map__4967__$1 = ((((!((map__4967 == null)))?(((((map__4967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4967):map__4967);
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4967__$1,cljs.core.cst$kw$hex);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$margin_DASH_left,"auto",cljs.core.cst$kw$margin_DASH_right,"auto",cljs.core.cst$kw$height,"150px",cljs.core.cst$kw$background_DASH_color,hex,cljs.core.cst$kw$border,"1px solid black"], null)], null)," "], null);
});
colors.core.hex_change = (function colors$core$hex_change(event){
var hex = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.value)].join('');
if(cljs.core.truth_(goog.color.isValidColor(hex))){
var vec__4969 = goog.color.hexToRgb(hex);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4969,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4969,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4969,(2),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(colors.core.rgbh,cljs.core.assoc,cljs.core.cst$kw$r,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$g,g,cljs.core.cst$kw$b,b,cljs.core.cst$kw$hex,hex], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors.core.rgbh,cljs.core.assoc,cljs.core.cst$kw$hex,hex);
}
});
colors.core.hex_input = (function colors$core$hex_input(){
var map__4972 = cljs.core.deref(colors.core.rgbh);
var map__4972__$1 = ((((!((map__4972 == null)))?(((((map__4972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4972):map__4972);
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4972__$1,cljs.core.cst$kw$hex);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$size,(9),cljs.core.cst$kw$value,hex.substr((1)),cljs.core.cst$kw$on_DASH_change,colors.core.hex_change], null)], null);
});
/**
 * Restrict a value to a minimum and maximum; the empty string
 *   remains unchanged
 */
colors.core.in_range = (function colors$core$in_range(value,minval,maxval){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
var v = window.parseInt(value,(10));
var x__4037__auto__ = minval;
var y__4038__auto__ = (function (){var x__4040__auto__ = v;
var y__4041__auto__ = maxval;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}
});
colors.core.rgb_change = (function colors$core$rgb_change(event,rgb_part){
var map__4974 = cljs.core.deref(colors.core.rgbh);
var map__4974__$1 = ((((!((map__4974 == null)))?(((((map__4974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4974):map__4974);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4974__$1,cljs.core.cst$kw$r);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4974__$1,cljs.core.cst$kw$g);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4974__$1,cljs.core.cst$kw$b);
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4974__$1,cljs.core.cst$kw$hex);
var v = colors.core.in_range(event.target.value,(0),(255));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors.core.rgbh,cljs.core.assoc,rgb_part,v);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors.core.rgbh,cljs.core.assoc,cljs.core.cst$kw$hex,(function (){var G__4976 = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
var G__4977 = cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
var G__4978 = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
return goog.color.rgbToHex(G__4976,G__4977,G__4978);
})());
});
colors.core.rgbfield = (function colors$core$rgbfield(rgb_part,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$size,(5),cljs.core.cst$kw$value,val,cljs.core.cst$kw$on_DASH_change,(function (event){
return colors.core.rgb_change(event,rgb_part);
})], null)], null);
});
colors.core.percent_change = (function colors$core$percent_change(event,rgb_part){
var map__4979 = cljs.core.deref(colors.core.rgbh);
var map__4979__$1 = ((((!((map__4979 == null)))?(((((map__4979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4979):map__4979);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4979__$1,cljs.core.cst$kw$r);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4979__$1,cljs.core.cst$kw$g);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4979__$1,cljs.core.cst$kw$b);
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4979__$1,cljs.core.cst$kw$hex);
var v = colors.core.in_range(event.target.value,(0),(100));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors.core.rgbh,cljs.core.assoc,rgb_part,((255) * (v / (100))).toFixed((0)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors.core.rgbh,cljs.core.assoc,cljs.core.cst$kw$hex,(function (){var G__4981 = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
var G__4982 = cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
var G__4983 = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors.core.rgbh));
return goog.color.rgbToHex(G__4981,G__4982,G__4983);
})());
});
colors.core.percentfield = (function colors$core$percentfield(rgb_part,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$size,(4),cljs.core.cst$kw$value,((100) * (val / (255))).toFixed((0)),cljs.core.cst$kw$on_DASH_change,(function (event){
return colors.core.percent_change(event,rgb_part);
})], null)], null);
});
colors.core.everything = (function colors$core$everything(){
var map__4984 = cljs.core.deref(colors.core.rgbh);
var map__4984__$1 = ((((!((map__4984 == null)))?(((((map__4984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4984):map__4984);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4984__$1,cljs.core.cst$kw$r);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4984__$1,cljs.core.cst$kw$g);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4984__$1,cljs.core.cst$kw$b);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.color_square], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Hex: #",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.hex_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"RGB: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,cljs.core.cst$kw$r,r], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,cljs.core.cst$kw$g,g], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,cljs.core.cst$kw$b,b], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"RGB Percent: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,cljs.core.cst$kw$r,r], null),"%, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,cljs.core.cst$kw$g,g], null),"%, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,cljs.core.cst$kw$b,b], null),"%"], null);
});
var G__4986_4988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.everything], null);
var G__4987_4989 = document.getElementById("dynamic");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__4986_4988,G__4987_4989) : reagent.core.render_component.call(null,G__4986_4988,G__4987_4989));
