(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{545:function(e,t,o){"use strict";o.r(t);o(158);var r=o(77),n=o.n(r),c={data:function(){return{}},computed:{redirect:function(){try{return n.a.get("redirect-url")}catch(e){return"/"}}},methods:{},mounted:function(){var e=this,t=new URLSearchParams(window.location.search),code=t.get("code"),o=t.get("state");if(code&&o&&o===window.localStorage.getItem("state")){var r={grant_type:"authorization_code",client_id:"9",redirect_uri:"http://localhost:3000/login/callback",code_verifier:window.localStorage.getItem("verifier"),code:code};this.$axios.$post("https://auth.test.chileatiende.gob.cl/oauth/token",r).then((function(t){localStorage.removeItem("state"),localStorage.removeItem("verifier");t.token_type;var o=t.expires_in,r=t.access_token;t.refresh_token;e.$store.dispatch("setToken",{token:r,expires:o}),e.$router.push(e.redirect)})).catch((function(t){e.$router.push("/login/claveunica")}))}}},l=o(9),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-loading",[this._v("Validando...")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);