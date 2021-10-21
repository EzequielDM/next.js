module.exports=(()=>{var e={715:(e,t,o)=>{var a,s=(a=o(191))&&"object"==typeof a&&"default"in a?a.default:a,p=/https?|ftp|gopher|file/;function r(e){"string"==typeof e&&(e=d(e));var t=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",p=e.pathname||"",n=e.hash||"",c=e.query||"",h=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?h=o+e.host:a&&(h=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(h+=":"+e.port)),c&&"object"==typeof c&&(c=t.encode(c));var l=e.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(e,s,p);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var n="http://",c="w.w",i=n+c,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,f=/https?|ftp|gopher|file/;function h(e,t){var o="string"==typeof e?d(e):e;e="object"==typeof e?r(e):e;var a=d(t),s="";o.protocol&&!o.slashes&&(s=o.protocol,e=e.replace(o.protocol,""),s+="/"===t[0]||"/"===e[0]?"/":""),s&&a.protocol&&(s="",a.slashes||(s=a.protocol,t=t.replace(a.protocol,"")));var p=e.match(u);p&&!a.protocol&&(e=e.substr((s=p[1]+(p[2]||"")).length),/^\/\/[^/]/.test(t)&&(s=s.slice(0,-1)));var c=new URL(e,i+"/"),h=new URL(t,c).toString().replace(i,""),l=a.protocol||o.protocol;return l+=o.slashes||a.slashes?"//":"",!s&&l?h=h.replace(n,l):s&&(h=h.replace(n,"")),f.test(h)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==h.slice(-1)||(h=h.slice(0,-1)),s&&(h=s+("/"===h[0]?h.substr(1):h)),h}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var m=/^https?|ftp|gopher|file/,v=/^(.*?)([#?].*)/,_=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,b=/^([a-z0-9.+-]*:)?\/\/\/*/i,g=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e,t,o){if(void 0===t&&(t=!1),void 0===o&&(o=!1),e&&"object"==typeof e&&e instanceof l)return e;var a=(e=e.trim()).match(v);e=a?a[1].replace(/\\/g,"/")+a[2]:e.replace(/\\/g,"/"),g.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(_),n=b.test(e),h="";p&&(m.test(p[1])||(h=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,m.test(p[1])?(h=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(h=p[1],e="/"+p[3]));var u,f=(a?a[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),d=f&&f[1],y=new l,w="",C="";try{u=new URL(e)}catch(t){w=t,h||o||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(C="/",e=e.substr(1));try{u=new URL(e,i)}catch(e){return y.protocol=h,y.href=h,y}}y.slashes=n&&!C,y.host=u.host===c?"":u.host,y.hostname=u.hostname===c?"":u.hostname.replace(/(\[|\])/g,""),y.protocol=w?h||null:u.protocol,y.search=u.search.replace(/\\/g,"%5C"),y.hash=u.hash.replace(/\\/g,"%5C");var U=e.split("#");!y.search&&~U[0].indexOf("?")&&(y.search="?"),y.hash||""!==U[1]||(y.hash="#"),y.query=t?s.decode(u.search.substr(1)):y.search.substr(1),y.pathname=C+(p?function(e){return e.replace(/['^|`]/g,function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(e,t){try{return decodeURIComponent(t).split("").map(function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()}).join("")}catch(e){return t}})}(u.pathname):u.pathname),"about:"===y.protocol&&"blank"===y.pathname&&(y.protocol="",y.pathname=""),w&&"/"!==e[0]&&(y.pathname=y.pathname.substr(1)),h&&!m.test(h)&&"/"!==e.slice(-1)&&"/"===y.pathname&&(y.pathname=""),y.path=y.pathname+y.search,y.auth=[u.username,u.password].map(decodeURIComponent).filter(Boolean).join(":"),y.port=u.port,d&&!y.host.endsWith(d)&&(y.host+=d,y.port=d.slice(1)),y.href=C?""+y.pathname+y.search+y.hash:r(y);var j=/^(file)/.test(y.href)?["host","hostname"]:[];return Object.keys(y).forEach(function(e){~j.indexOf(e)||(y[e]=y[e]||null)}),y}t.parse=d,t.format=r,t.resolve=h,t.resolveObject=function(e,t){return d(h(e,t))},t.Url=l},191:e=>{"use strict";e.exports=require("querystring")}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var a=true;try{e[r](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(715)})();