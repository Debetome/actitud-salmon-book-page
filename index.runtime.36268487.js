
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireab40"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireab40"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("TeuAC", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $0a60610db2d809a1$export$6503ec6e8aabbaf; }, function (v) { return $0a60610db2d809a1$export$6503ec6e8aabbaf = v; });
var $0a60610db2d809a1$export$6503ec6e8aabbaf;
var $0a60610db2d809a1$export$f7ad0328861e2f03;
"use strict";
var $0a60610db2d809a1$var$mapping = new Map();
function $0a60610db2d809a1$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$0a60610db2d809a1$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $0a60610db2d809a1$var$resolve(id) {
    var resolved = $0a60610db2d809a1$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$0a60610db2d809a1$export$6503ec6e8aabbaf = $0a60610db2d809a1$var$register;
$0a60610db2d809a1$export$f7ad0328861e2f03 = $0a60610db2d809a1$var$resolve;

});

var $ec77f9e1c47239d8$exports = {};

(parcelRequire("TeuAC")).register(new URL("", import.meta.url).toString(), JSON.parse('["ffrB2","index.aa36eb9e.js","kGzms","introduction.50aeafe0.txt","lnrih","part1.8f8e7f98.txt","l0rAr","part2.b7a30028.txt","kAVv7","part3.032594e7.txt","4WWjE","conclusion.1b88b4ee.txt"]'));


