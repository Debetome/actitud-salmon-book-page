(function () {

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
parcelRegister("2YYA6", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $22c02d8b37537ae9$export$6503ec6e8aabbaf; }, function (v) { return $22c02d8b37537ae9$export$6503ec6e8aabbaf = v; });
var $22c02d8b37537ae9$export$6503ec6e8aabbaf;
var $22c02d8b37537ae9$export$f7ad0328861e2f03;
"use strict";
var $22c02d8b37537ae9$var$mapping = new Map();
function $22c02d8b37537ae9$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$22c02d8b37537ae9$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $22c02d8b37537ae9$var$resolve(id) {
    var resolved = $22c02d8b37537ae9$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$22c02d8b37537ae9$export$6503ec6e8aabbaf = $22c02d8b37537ae9$var$register;
$22c02d8b37537ae9$export$f7ad0328861e2f03 = $22c02d8b37537ae9$var$resolve;

});

parcelRegister("77BDW", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $52f663007a700e7a$export$bdfd709ae4826697; }, function (v) { return $52f663007a700e7a$export$bdfd709ae4826697 = v; });
var $52f663007a700e7a$export$bdfd709ae4826697;
var $52f663007a700e7a$export$c9e73fbda7da57b6;
var $52f663007a700e7a$export$5a759dc7a1cfb72a;
"use strict";
var $52f663007a700e7a$var$bundleURL = {};
function $52f663007a700e7a$var$getBundleURLCached(id) {
    var value = $52f663007a700e7a$var$bundleURL[id];
    if (!value) {
        value = $52f663007a700e7a$var$getBundleURL();
        $52f663007a700e7a$var$bundleURL[id] = value;
    }
    return value;
}
function $52f663007a700e7a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $52f663007a700e7a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $52f663007a700e7a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $52f663007a700e7a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$52f663007a700e7a$export$bdfd709ae4826697 = $52f663007a700e7a$var$getBundleURLCached;
$52f663007a700e7a$export$c9e73fbda7da57b6 = $52f663007a700e7a$var$getBaseURL;
$52f663007a700e7a$export$5a759dc7a1cfb72a = $52f663007a700e7a$var$getOrigin;

});

var $b7e51db4878cf9bb$exports = {};


(parcelRequire("2YYA6")).register((parcelRequire("77BDW")).getBundleURL("l1TdG"), JSON.parse('["l1TdG","index.075153e3.js","3BYIr","introduction.e9b8e669.txt","6q8Ow","part1.9ea5eb0e.txt","k9w1x","part2.6a2014a5.txt","zOf4v","part3.1b77381b.txt","hwHVV","conclusion.a420c527.txt"]'));

})();
