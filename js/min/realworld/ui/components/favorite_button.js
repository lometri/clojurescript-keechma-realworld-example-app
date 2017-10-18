// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.favorite_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.util');
realworld.ui.components.favorite_button.render = (function realworld$ui$components$favorite_button$render(var_args){
var G__22532 = arguments.length;
switch (G__22532) {
case 2:
return realworld.ui.components.favorite_button.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return realworld.ui.components.favorite_button.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

realworld.ui.components.favorite_button.render.cljs$core$IFn$_invoke$arity$2 = (function (ctx,article){
return realworld.ui.components.favorite_button.render.cljs$core$IFn$_invoke$arity$3(ctx,article,cljs.core.cst$kw$small);
});

realworld.ui.components.favorite_button.render.cljs$core$IFn$_invoke$arity$3 = (function (ctx,article,size){
var favorited_QMARK_ = cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(article);
var fav_count = cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$1(article);
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
var action = (cljs.core.truth_(current_user)?((function (favorited_QMARK_,fav_count,current_user){
return (function (){
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.cst$kw$toggle_DASH_favorite,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([article], 0));
});})(favorited_QMARK_,fav_count,current_user))
:((function (favorited_QMARK_,fav_count,current_user){
return (function (){
return keechma.ui_component.redirect(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"register"], null));
});})(favorited_QMARK_,fav_count,current_user))
);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,action,cljs.core.cst$kw$class,keechma.toolbox.util.class_names(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$btn_DASH_outline_DASH_primary,cljs.core.not(favorited_QMARK_),cljs.core.cst$kw$btn_DASH_primary,favorited_QMARK_,cljs.core.cst$kw$pull_DASH_xs_DASH_right,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$small,size)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_heart], null)," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$small,size))?fav_count:[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(favorited_QMARK_)?"Unfavorite":"Favorite")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Post ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fav_count),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''))], null);
});

realworld.ui.components.favorite_button.render.cljs$lang$maxFixedArity = 3;

realworld.ui.components.favorite_button.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.components.favorite_button.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_user], null),cljs.core.cst$kw$topic,cljs.core.cst$kw$user_DASH_actions], null));