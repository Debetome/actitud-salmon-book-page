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
// Main parser class
var $9dfa02e88e21d57b$exports = {};

$parcel$export($9dfa02e88e21d57b$exports, "isString", function () { return $9dfa02e88e21d57b$export$844ec244b1367d54; });
$parcel$export($9dfa02e88e21d57b$exports, "has", function () { return $9dfa02e88e21d57b$export$a4f4bb6b1453fff5; });
$parcel$export($9dfa02e88e21d57b$exports, "assign", function () { return $9dfa02e88e21d57b$export$e6e34fd1f2686227; });
$parcel$export($9dfa02e88e21d57b$exports, "arrayReplaceAt", function () { return $9dfa02e88e21d57b$export$f78478f71955b6bc; });
$parcel$export($9dfa02e88e21d57b$exports, "isValidEntityCode", function () { return $9dfa02e88e21d57b$export$644a8f5b13b2a36d; });
$parcel$export($9dfa02e88e21d57b$exports, "fromCodePoint", function () { return $9dfa02e88e21d57b$export$73bfc63873071f74; });
$parcel$export($9dfa02e88e21d57b$exports, "unescapeMd", function () { return $9dfa02e88e21d57b$export$5ccde1ea0c14bb03; });
$parcel$export($9dfa02e88e21d57b$exports, "unescapeAll", function () { return $9dfa02e88e21d57b$export$db8a17c6655f7e2c; });
$parcel$export($9dfa02e88e21d57b$exports, "escapeHtml", function () { return $9dfa02e88e21d57b$export$4cf11838cdc2a8a8; });
$parcel$export($9dfa02e88e21d57b$exports, "escapeRE", function () { return $9dfa02e88e21d57b$export$bc616c8f7dc20d5d; });
$parcel$export($9dfa02e88e21d57b$exports, "isSpace", function () { return $9dfa02e88e21d57b$export$1d5ccafae59b4926; });
$parcel$export($9dfa02e88e21d57b$exports, "isWhiteSpace", function () { return $9dfa02e88e21d57b$export$3c52dd84024ae72c; });
$parcel$export($9dfa02e88e21d57b$exports, "isPunctChar", function () { return $9dfa02e88e21d57b$export$4888a643af800fc1; });
$parcel$export($9dfa02e88e21d57b$exports, "isMdAsciiPunct", function () { return $9dfa02e88e21d57b$export$829a0d33ae4e744; });
$parcel$export($9dfa02e88e21d57b$exports, "normalizeReference", function () { return $9dfa02e88e21d57b$export$20ef46802c8744b; });
$parcel$export($9dfa02e88e21d57b$exports, "lib", function () { return $9dfa02e88e21d57b$export$16c08b91f883959a; });
// Utilities
//
var $12131d9a9914855d$exports = {};

$parcel$export($12131d9a9914855d$exports, "decode", function () { return $2cf8e509e71c2bd4$export$2e2bcd8739ae039; });
$parcel$export($12131d9a9914855d$exports, "encode", function () { return $efc397c21a3f066f$export$2e2bcd8739ae039; });
$parcel$export($12131d9a9914855d$exports, "format", function () { return $b33c530d379d8b8e$export$2e2bcd8739ae039; });
$parcel$export($12131d9a9914855d$exports, "parse", function () { return $d6208c800cb4cc10$export$2e2bcd8739ae039; });
/* eslint-disable no-bitwise */ const $2cf8e509e71c2bd4$var$decodeCache = {};
function $2cf8e509e71c2bd4$var$getDecodeCache(exclude) {
    let cache = $2cf8e509e71c2bd4$var$decodeCache[exclude];
    if (cache) return cache;
    cache = $2cf8e509e71c2bd4$var$decodeCache[exclude] = [];
    for(let i = 0; i < 128; i++){
        const ch = String.fromCharCode(i);
        cache.push(ch);
    }
    for(let i = 0; i < exclude.length; i++){
        const ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
    }
    return cache;
}
// Decode percent-encoded string.
//
function $2cf8e509e71c2bd4$var$decode(string, exclude) {
    if (typeof exclude !== "string") exclude = $2cf8e509e71c2bd4$var$decode.defaultChars;
    const cache = $2cf8e509e71c2bd4$var$getDecodeCache(exclude);
    return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
        let result = "";
        for(let i = 0, l = seq.length; i < l; i += 3){
            const b1 = parseInt(seq.slice(i + 1, i + 3), 16);
            if (b1 < 0x80) {
                result += cache[b1];
                continue;
            }
            if ((b1 & 0xE0) === 0xC0 && i + 3 < l) {
                // 110xxxxx 10xxxxxx
                const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                if ((b2 & 0xC0) === 0x80) {
                    const chr = b1 << 6 & 0x7C0 | b2 & 0x3F;
                    if (chr < 0x80) result += "\uFFFD\uFFFD";
                    else result += String.fromCharCode(chr);
                    i += 3;
                    continue;
                }
            }
            if ((b1 & 0xF0) === 0xE0 && i + 6 < l) {
                // 1110xxxx 10xxxxxx 10xxxxxx
                const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                    const chr = b1 << 12 & 0xF000 | b2 << 6 & 0xFC0 | b3 & 0x3F;
                    if (chr < 0x800 || chr >= 0xD800 && chr <= 0xDFFF) result += "\uFFFD\uFFFD\uFFFD";
                    else result += String.fromCharCode(chr);
                    i += 6;
                    continue;
                }
            }
            if ((b1 & 0xF8) === 0xF0 && i + 9 < l) {
                // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
                const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                const b4 = parseInt(seq.slice(i + 10, i + 12), 16);
                if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
                    let chr = b1 << 18 & 0x1C0000 | b2 << 12 & 0x3F000 | b3 << 6 & 0xFC0 | b4 & 0x3F;
                    if (chr < 0x10000 || chr > 0x10FFFF) result += "\uFFFD\uFFFD\uFFFD\uFFFD";
                    else {
                        chr -= 0x10000;
                        result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
                    }
                    i += 9;
                    continue;
                }
            }
            result += "\uFFFD";
        }
        return result;
    });
}
$2cf8e509e71c2bd4$var$decode.defaultChars = ";/?:@&=+$,#";
$2cf8e509e71c2bd4$var$decode.componentChars = "";
var $2cf8e509e71c2bd4$export$2e2bcd8739ae039 = $2cf8e509e71c2bd4$var$decode;


const $efc397c21a3f066f$var$encodeCache = {};
// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function $efc397c21a3f066f$var$getEncodeCache(exclude) {
    let cache = $efc397c21a3f066f$var$encodeCache[exclude];
    if (cache) return cache;
    cache = $efc397c21a3f066f$var$encodeCache[exclude] = [];
    for(let i = 0; i < 128; i++){
        const ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) // always allow unencoded alphanumeric characters
        cache.push(ch);
        else cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
    for(let i = 0; i < exclude.length; i++)cache[exclude.charCodeAt(i)] = exclude[i];
    return cache;
}
// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function $efc397c21a3f066f$var$encode(string, exclude, keepEscaped) {
    if (typeof exclude !== "string") {
        // encode(string, keepEscaped)
        keepEscaped = exclude;
        exclude = $efc397c21a3f066f$var$encode.defaultChars;
    }
    if (typeof keepEscaped === "undefined") keepEscaped = true;
    const cache = $efc397c21a3f066f$var$getEncodeCache(exclude);
    let result = "";
    for(let i = 0, l = string.length; i < l; i++){
        const code = string.charCodeAt(i);
        if (keepEscaped && code === 0x25 /* % */  && i + 2 < l) {
            if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                result += string.slice(i, i + 3);
                i += 2;
                continue;
            }
        }
        if (code < 128) {
            result += cache[code];
            continue;
        }
        if (code >= 0xD800 && code <= 0xDFFF) {
            if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
                const nextCode = string.charCodeAt(i + 1);
                if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
                    result += encodeURIComponent(string[i] + string[i + 1]);
                    i++;
                    continue;
                }
            }
            result += "%EF%BF%BD";
            continue;
        }
        result += encodeURIComponent(string[i]);
    }
    return result;
}
$efc397c21a3f066f$var$encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
$efc397c21a3f066f$var$encode.componentChars = "-_.!~*'()";
var $efc397c21a3f066f$export$2e2bcd8739ae039 = $efc397c21a3f066f$var$encode;


function $b33c530d379d8b8e$export$2e2bcd8739ae039(url) {
    let result = "";
    result += url.protocol || "";
    result += url.slashes ? "//" : "";
    result += url.auth ? url.auth + "@" : "";
    if (url.hostname && url.hostname.indexOf(":") !== -1) // ipv6 address
    result += "[" + url.hostname + "]";
    else result += url.hostname || "";
    result += url.port ? ":" + url.port : "";
    result += url.pathname || "";
    result += url.search || "";
    result += url.hash || "";
    return result;
}


// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//
function $d6208c800cb4cc10$var$Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
}
// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
const $d6208c800cb4cc10$var$protocolPattern = /^([a-z0-9.+-]+:)/i;
const $d6208c800cb4cc10$var$portPattern = /:[0-9]*$/;
// Special case for a simple path URL
/* eslint-disable-next-line no-useless-escape */ const $d6208c800cb4cc10$var$simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
const $d6208c800cb4cc10$var$delims = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "	"
];
// RFC 2396: characters not allowed for various reasons.
const $d6208c800cb4cc10$var$unwise = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`"
].concat($d6208c800cb4cc10$var$delims);
// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
const $d6208c800cb4cc10$var$autoEscape = [
    "'"
].concat($d6208c800cb4cc10$var$unwise);
// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
const $d6208c800cb4cc10$var$nonHostChars = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat($d6208c800cb4cc10$var$autoEscape);
const $d6208c800cb4cc10$var$hostEndingChars = [
    "/",
    "?",
    "#"
];
const $d6208c800cb4cc10$var$hostnameMaxLen = 255;
const $d6208c800cb4cc10$var$hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
const $d6208c800cb4cc10$var$hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
// protocols that can allow "unsafe" and "unwise" chars.
// protocols that never have a hostname.
const $d6208c800cb4cc10$var$hostlessProtocol = {
    javascript: true,
    "javascript:": true
};
// protocols that always contain a // bit.
const $d6208c800cb4cc10$var$slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
};
function $d6208c800cb4cc10$var$urlParse(url, slashesDenoteHost) {
    if (url && url instanceof $d6208c800cb4cc10$var$Url) return url;
    const u = new $d6208c800cb4cc10$var$Url();
    u.parse(url, slashesDenoteHost);
    return u;
}
$d6208c800cb4cc10$var$Url.prototype.parse = function(url, slashesDenoteHost) {
    let lowerProto, hec, slashes;
    let rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
        // Try fast path regexp
        const simplePath = $d6208c800cb4cc10$var$simplePathPattern.exec(rest);
        if (simplePath) {
            this.pathname = simplePath[1];
            if (simplePath[2]) this.search = simplePath[2];
            return this;
        }
    }
    let proto = $d6208c800cb4cc10$var$protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    /* eslint-disable-next-line no-useless-escape */ if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && $d6208c800cb4cc10$var$hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }
    if (!$d6208c800cb4cc10$var$hostlessProtocol[proto] && (slashes || proto && !$d6208c800cb4cc10$var$slashedProtocol[proto])) {
        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c
        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.
        // find the first instance of any hostEndingChars
        let hostEnd = -1;
        for(let i = 0; i < $d6208c800cb4cc10$var$hostEndingChars.length; i++){
            hec = rest.indexOf($d6208c800cb4cc10$var$hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        let auth, atSign;
        if (hostEnd === -1) // atSign can be anywhere.
        atSign = rest.lastIndexOf("@");
        else // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf("@", hostEnd);
        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = auth;
        }
        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for(let i = 0; i < $d6208c800cb4cc10$var$nonHostChars.length; i++){
            hec = rest.indexOf($d6208c800cb4cc10$var$nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) hostEnd = rest.length;
        if (rest[hostEnd - 1] === ":") hostEnd--;
        const host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        // pull out port.
        this.parseHost(host);
        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || "";
        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        const ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        // validate a little.
        if (!ipv6Hostname) {
            const hostparts = this.hostname.split(/\./);
            for(let i = 0, l = hostparts.length; i < l; i++){
                const part = hostparts[i];
                if (!part) continue;
                if (!part.match($d6208c800cb4cc10$var$hostnamePartPattern)) {
                    let newpart = "";
                    for(let j = 0, k = part.length; j < k; j++)if (part.charCodeAt(j) > 127) // we replace non-ASCII char with a temporary placeholder
                    // we need this to make sure size of hostname is not
                    // broken by replacing non-ASCII by nothing
                    newpart += "x";
                    else newpart += part[j];
                    // we test again with ASCII char only
                    if (!newpart.match($d6208c800cb4cc10$var$hostnamePartPattern)) {
                        const validParts = hostparts.slice(0, i);
                        const notHost = hostparts.slice(i + 1);
                        const bit = part.match($d6208c800cb4cc10$var$hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) rest = notHost.join(".") + rest;
                        this.hostname = validParts.join(".");
                        break;
                    }
                }
            }
        }
        if (this.hostname.length > $d6208c800cb4cc10$var$hostnameMaxLen) this.hostname = "";
        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
    // chop off from the tail first.
    const hash = rest.indexOf("#");
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    const qm = rest.indexOf("?");
    if (qm !== -1) {
        this.search = rest.substr(qm);
        rest = rest.slice(0, qm);
    }
    if (rest) this.pathname = rest;
    if ($d6208c800cb4cc10$var$slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "";
    return this;
};
$d6208c800cb4cc10$var$Url.prototype.parseHost = function(host) {
    let port = $d6208c800cb4cc10$var$portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ":") this.port = port.substr(1);
        host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
};
var $d6208c800cb4cc10$export$2e2bcd8739ae039 = $d6208c800cb4cc10$var$urlParse;




var $bca49273b8c23865$exports = {};

$parcel$export($bca49273b8c23865$exports, "Any", function () { return $31465279c607eaff$export$2e2bcd8739ae039; });
$parcel$export($bca49273b8c23865$exports, "Cc", function () { return $f6ae7f0715f82f51$export$2e2bcd8739ae039; });
$parcel$export($bca49273b8c23865$exports, "Cf", function () { return $3dd7548453417781$export$2e2bcd8739ae039; });
$parcel$export($bca49273b8c23865$exports, "P", function () { return $3e2f5caf0974ec84$export$2e2bcd8739ae039; });
$parcel$export($bca49273b8c23865$exports, "S", function () { return $c3bf9b5a6272aa9e$export$2e2bcd8739ae039; });
$parcel$export($bca49273b8c23865$exports, "Z", function () { return $f26759cc6b878c2a$export$2e2bcd8739ae039; });
var $31465279c607eaff$export$2e2bcd8739ae039 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;


var $f6ae7f0715f82f51$export$2e2bcd8739ae039 = /[\0-\x1F\x7F-\x9F]/;


var $3dd7548453417781$export$2e2bcd8739ae039 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;


var $3e2f5caf0974ec84$export$2e2bcd8739ae039 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;


var $c3bf9b5a6272aa9e$export$2e2bcd8739ae039 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;


var $f26759cc6b878c2a$export$2e2bcd8739ae039 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;




// Generated using scripts/write-decode-map.ts
var $4327b5bb5e6cc352$export$2e2bcd8739ae039 = new Uint16Array(// prettier-ignore
'\u1D41<\xd5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803B\xc6\u40C6P\u803B&\u4026cute\u803B\xc1\u40C1reve;\u4102\u0100iyx}rc\u803B\xc2\u40C2;\u4410r;\uC000\ud835\udd04rave\u803B\xc0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9d\xa1on;\u4104f;\uC000\ud835\udd38plyFunction;\u6061ing\u803B\xc5\u40C5\u0100cs\xbe\xc3r;\uC000\ud835\udc9cign;\u6254ilde\u803B\xc3\u40C3ml\u803B\xc4\u40C4\u0400aceforsu\xe5\xfb\xfe\u0117\u011C\u0122\u0127\u012A\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\ud835\udd05pf;\uC000\ud835\udd39eve;\u42D8c\xf2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xa9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xc7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xf2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\ud835\udc9ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\ud835\udd07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\ud835\udd3b\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037B\xbb\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xe5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xd0\u40D0cute\u803B\xc9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xca\u40CA;\u442Dot;\u4116r;\uC000\ud835\udd08rave\u803B\xc8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\ud835\udd3csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xcb\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\ud835\udd09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\ud835\udd0a;\u62D9pf;\uC000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\ud835\udca2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xf2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xf0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xcd\u40CD\u0100iy\u0713\u0718rc\u803B\xce\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xcc\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xf3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xcf\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\ud835\udd0dpf;\uC000\ud835\udd41\u01E3\u07C7\0\u07CCr;\uC000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\ud835\udd0epf;\uC000\ud835\udd42cr;\uC000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xe1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\ud835\udd0f\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xe1\u03BFight\xe1\u03CAf;\uC000\ud835\udd43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xf2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\ud835\udd10nusPlus;\u6213pf;\uC000\ud835\udd44c\xf2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xeb\u0AD9eryThi\xee\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xf2\u0673essLes\xf3\u0A48Line;\u400Ar;\uC000\ud835\udd11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\ud835\udca9ilde\u803B\xd1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xd3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xd4\u40D4;\u441Eblac;\u4150r;\uC000\ud835\udd12rave\u803B\xd2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\ud835\udd46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\ud835\udcaaash\u803B\xd8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xd5\u40D5es;\u6A37ml\u803B\xd6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\ud835\udd13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xe5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\ud835\udcab;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\ud835\udd14pf;\u611Acr;\uC000\ud835\udcac\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xae\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xbb\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\ud835\udd16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xbb\u041EeftArrow\xbb\u089AightArrow\xbb\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\ud835\udd4a\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\ud835\udcaear;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xe1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xde\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\ud835\udd17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\ud835\udd4bipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\ud835\udcafrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xda\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xdb\u40DB;\u4423blac;\u4170r;\uC000\ud835\udd18rave\u803B\xd9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\ud835\udd4c\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xe1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\ud835\udcb0ilde;\u4168ml\u803B\xdc\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\ud835\udd19pf;\uC000\ud835\udd4dcr;\uC000\ud835\udcb1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\ud835\udd1apf;\uC000\ud835\udd4ecr;\uC000\ud835\udcb2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\ud835\udd1b;\u439Epf;\uC000\ud835\udd4fcr;\uC000\ud835\udcb3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xdd\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\ud835\udd1cpf;\uC000\ud835\udd50cr;\uC000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xe8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\ud835\udcb5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xe1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xe2\u40E2te\u80BB\xb4\u0306;\u4430lig\u803B\xe6\u40E6\u0100;r\xb2\u15BA;\uC000\ud835\udd1erave\u803B\xe0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xe8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\ud835\udd52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xf1\u1683ing\u803B\xe5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\ud835\udcb6;\u402Amp\u0100;e\u12C1\u16AF\xf1\u0288ilde\u803B\xe3\u40E3ml\u803B\xe4\u40E4\u0100ci\u16C2\u16C8onin\xf4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xbb\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xe9\u170Cno\xf5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\ud835\udd1fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xf0\u0760rc;\u65EFp\xbb\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xe5\u1444\xe5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\ud835\udd53\u0100;t\u13CB\u1863om\xbb\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xa6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\ud835\udcb7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xbb\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xee\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xe7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xb8\u01ADptyv;\u69B2t\u8100\xa2;e\u1A2D\u1A2E\u40A2r\xe4\u01B2r;\uC000\ud835\udd20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xbb\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xbb\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xbb\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xc7\xc6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xee\u1160e\u0100mx\u1AF1\u1AF6ent\xbb\u1AE9e\xf3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xf4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\ud835\udcb8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xe3\u1B73u\xe3\u1B75ee;\u62CEedge;\u62CFen\u803B\xa4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xbb\u1B80ight\xbb\u1BBDe\xe4\u1BDD\u0100ci\u1C01\u1C07onin\xf4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xf2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xbb\u090A\u016B\u1C61\u1C67arow;\u690Fa\xe3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xb0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\ud835\udd21ar\u0100lr\u1CB3\u1CB5\xbb\u08DC\xbb\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xf7;o\u1CE7\u1CF0ntimes;\u62C7n\xf8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\ud835\udd55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xe5\xfan\u0180adh\u112E\u1D5D\u1D67ownarrow\xf3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xf4\u1CB4igh\xf4\u1CB6\u0162\u1D7F\u1D85karo\xf7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\ud835\udcb9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xf2\u0429a\xf2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xf4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xe9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xea\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\ud835\udd22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xe8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xbb\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\ud835\udd56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xbb\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xbb\u1E2E\u0269\u1EF9\0\0\u1EFB\xed\u0548ant\u0100gl\u1F02\u1F06tr\xbb\u1E5Dess\xbb\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xf4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xf0\u40F0\u0100mr\u1F53\u1F57l\u803B\xeb\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xf4\u056E\u0100eo\u1F6C\u1F74ctatio\xee\u0559nential\xe5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xf1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\ud835\udd23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\ud835\udd57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xbd\u40BD;\u6153\u803B\xbc\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xbe\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xf4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\ud835\udd24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xbb\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\ud835\udd58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xf8\u209Er;\u6978q\u0100lq\u063F\u2196les\xf3\u2088i\xed\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xc5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xf2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xf0\u1484f\xbb\u2024il\xf4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xbb\u220Alip;\u6026con;\u62B9r;\uC000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\ud835\udd59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\ud835\udcbdas\xe8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xed\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xee\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xa1\u40A1\u0100fr\u039F\u22C9;\uC000\ud835\udd26rave\u803B\xec\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xe5\u078Ear\xf4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xf4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\ud835\udd5aa;\u43B9uest\u803B\xbf\u40BF\u0100ci\u238A\u238Fr;\uC000\ud835\udcben\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xef\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\ud835\udd27ath;\u4237pf;\uC000\ud835\udd5b\u01E3\u23EC\0\u23F1r;\uC000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\ud835\udd28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\ud835\udd5ccr;\uC000\ud835\udcc0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xf2\u09C6\xf2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xee\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xe5\u088E;\u6A85uo\u803B\xab\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xeb\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xec\u08B0\xe2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xe9\u24F6arpoon\u0100du\u25AF\u25B4own\xbb\u045Ap\xbb\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xf3\u0F98quigarro\xf7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xf4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xf8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248C\xf4\u099Bi\xed\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\ud835\udd29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xf2\u25C1orne\xf2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xbb\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xbb\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xeb\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xe1\u09F2apsto;\u67FCight\xe1\u09FDparrow\u0100lr\u2725\u2729ef\xf4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\ud835\udd5dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xe1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xf2\u08A8orne\xf2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\ud835\udcc1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xe5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xc5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xaf\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xbb\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xee\u048Cef\xf4\u090F\xf0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xbb\u1626r;\uC000\ud835\udd2ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xb5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xf4\u16A7ir;\u6AF0ot\u80BB\xb7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xf2\u2212\xf0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\ud835\udd5e\u0100ct\u28F8\u28FDr;\uC000\ud835\udcc2pos\xbb\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xbb\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xf8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xa0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xf6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xed\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\ud835\udd2b\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xf4\u0BE2i\xed\u0BEA\u0100;r\u0BB6\u2A81\xbb\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xf2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xf2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xf7\u2AC1ightarro\xf7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xf4\u0C55\u0100;s\u0C55\u2AF4\xbb\u0C36i\xed\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xe4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\ud835\udd5f\u8180\xac;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xec\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xe5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xf1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xf2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xbb\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xe5\u0D45;\uC000\ud835\udcc3ort\u026D\u2B05\0\0\u2BD6ar\xe1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xe5\u0CF8\xe5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xf1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xec\u0BD7lde\u803B\xf1\u40F1\xe7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xf1\u0C26ight\u0100;e\u0CCB\u2C65\xf1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xf3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xf4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\ud835\udd2c\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xf2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xf2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xe5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\ud835\udd60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xf2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xbb\u2DFF\u803B\xaa\u40AA\u803B\xba\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xf2\u2E01ash\u803B\xf8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xf5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xf6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xb6;l\u2E6D\u2E6E\u40B6le\xec\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\ud835\udd2d\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xf4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xbb\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xf6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xb1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\ud835\udd61nd\u803B\xa3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xe5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xf8\u2F43urlye\xf1\u0ED9\xf1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xed\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xf0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xef\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\ud835\udcc5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\ud835\udd2epf;\uC000\ud835\udd62rime;\u6057cr;\uC000\ud835\udcc6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xf3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xf1\u1F19\xf4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xf2\u10B3\xf2\u03DDail;\u691Car\xf2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xe3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xe5\u0FD1uo\u803B\xbb\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xeb\u225D\xf0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xf3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xf2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0FF2\xe2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xe5\u10BBar\xf4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xbb\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xe9\u30C8arpoon\u0100du\u31BB\u31BFow\xee\u317Ep\xbb\u1092eft\u0100ah\u31CA\u31D0rrow\xf3\u0FEAarpoon\xf3\u0551ightarrows;\u61C9quigarro\xf7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xf1\u1F32\u0180ahm\u320D\u3210\u3213r\xf2\u0FEAa\xf2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xbb\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xeb\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\ud835\udd63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xf2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\ud835\udcc7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xe5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xef\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xe5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xed\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0A36\u0A34t\u803B\xa7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uC000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xe4\u1464ara\xec\u2E6F\u803B\xad\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xf2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xe9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\ud835\udd64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xf1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xf1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xbb\u117Car\xf2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xee\u1EE0h\xe9\u2EAFs\xbb\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xf8\u32FAurlye\xf1\u11FE\xf1\u11F3\u0180aes\u3582\u3588\u331Bppro\xf8\u331Aq\xf1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xb9\u40B9\u803B\xb2\u40B2\u803B\xb3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xeb\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xdf\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xeb\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\ud835\udd31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xf8\u12C1im\xbb\u12ACs\xf0\u129E\u0100as\u36BA\u36AE\xf0\u12C1rn\u803B\xfe\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xd7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xe1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\ud835\udd65rk;\u6ADA\xe1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xbb\u1DBBeft\u0100;e\u2800\u373E\xf1\u092E;\u625Cight\u0100;e\u32AA\u374B\xf1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\ud835\udcc9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xf4\u1777head\u0100lr\u3797\u37A0eftarro\xf7\u084Fightarrow\xbb\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xf2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xfa\u40FA\xf2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xfb\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xf2\u13ADlac;\u4171a\xf2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\ud835\udd32rave\u803B\xf9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xbb\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\ud835\udd66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xe1\u13B3arpoon\u0100lr\u3888\u388Cef\xf4\u382Digh\xf4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xbb\u13FAon\xbb\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xbb\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\ud835\udcca\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xbb\u1813\u0100am\u38EF\u38F2r\xf2\u38A8l\u803B\xfc\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xf2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xe8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xe1\u2415othin\xe7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xf4\u2FB5\u0100;h\u13B7\u3962\xef\u318D\u0100iu\u3969\u396Dgm\xe1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xe1\u369Ciangle\u0100lr\u39AA\u39AFeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xf2\u1469r;\uC000\ud835\udd33tr\xe9\u39AEsu\u0100bp\u39EF\u39F1\xbb\u0D1C\xbb\u0D59pf;\uC000\ud835\udd67ro\xf0\u0EFBtr\xe9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\ud835\udccb\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xbb\u397En\u0100Ee\u3992\u3A1E\xbb\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\ud835\udd34pf;\uC000\ud835\udd68\u0100;e\u1479\u3A66at\xe8\u1479cr;\uC000\ud835\udccc\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xe9\u17D1r;\uC000\ud835\udd35\u0100Aa\u3A94\u3A97r\xf2\u03C3r\xf2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xf2\u03B8r\xf2\u09EBa\xf0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\ud835\udd69im\xe5\u17B2\u0100Aa\u3AC7\u3ACAr\xf2\u03CEr\xf2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\ud835\udccd\u0100pt\u17D6\u3ADCr\xe9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xfd\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xa5\u40A5r;\uC000\ud835\udd36cy;\u4457pf;\uC000\ud835\udd6acr;\uC000\ud835\udcce\u0100cm\u3B26\u3B29y;\u444El\u803B\xff\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xe6\u155Fa;\u43B6r;\uC000\ud835\udd37cy;\u4436grarr;\u61DDpf;\uC000\ud835\udd6bcr;\uC000\ud835\udccf\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c)=>c.charCodeAt(0)));


// Generated using scripts/write-decode-map.ts
var $46c899e3e7f28f2f$export$2e2bcd8739ae039 = new Uint16Array(// prettier-ignore
"\u0200aglq	\x15\x18\x1b\u026D\x0f\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c)=>c.charCodeAt(0)));


// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var $3e75f459745eefc6$var$_a;
const $3e75f459745eefc6$var$decodeMap = new Map([
    [
        0,
        65533
    ],
    // C1 Unicode control character reference replacements
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
const $3e75f459745eefc6$export$73bfc63873071f74 = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
($3e75f459745eefc6$var$_a = String.fromCodePoint) !== null && $3e75f459745eefc6$var$_a !== void 0 ? $3e75f459745eefc6$var$_a : function(codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function $3e75f459745eefc6$export$b978ab756102108a(codePoint) {
    var _a;
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) return 0xfffd;
    return (_a = $3e75f459745eefc6$var$decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
function $3e75f459745eefc6$export$2e2bcd8739ae039(codePoint) {
    return $3e75f459745eefc6$export$73bfc63873071f74($3e75f459745eefc6$export$b978ab756102108a(codePoint));
}


var $ba9873426d6195b3$var$CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})($ba9873426d6195b3$var$CharCodes || ($ba9873426d6195b3$var$CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */ const $ba9873426d6195b3$var$TO_LOWER_BIT = 32;
var $ba9873426d6195b3$export$6a4325c613e0faec;
(function(BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})($ba9873426d6195b3$export$6a4325c613e0faec || ($ba9873426d6195b3$export$6a4325c613e0faec = {}));
function $ba9873426d6195b3$var$isNumber(code) {
    return code >= $ba9873426d6195b3$var$CharCodes.ZERO && code <= $ba9873426d6195b3$var$CharCodes.NINE;
}
function $ba9873426d6195b3$var$isHexadecimalCharacter(code) {
    return code >= $ba9873426d6195b3$var$CharCodes.UPPER_A && code <= $ba9873426d6195b3$var$CharCodes.UPPER_F || code >= $ba9873426d6195b3$var$CharCodes.LOWER_A && code <= $ba9873426d6195b3$var$CharCodes.LOWER_F;
}
function $ba9873426d6195b3$var$isAsciiAlphaNumeric(code) {
    return code >= $ba9873426d6195b3$var$CharCodes.UPPER_A && code <= $ba9873426d6195b3$var$CharCodes.UPPER_Z || code >= $ba9873426d6195b3$var$CharCodes.LOWER_A && code <= $ba9873426d6195b3$var$CharCodes.LOWER_Z || $ba9873426d6195b3$var$isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */ function $ba9873426d6195b3$var$isEntityInAttributeInvalidEnd(code) {
    return code === $ba9873426d6195b3$var$CharCodes.EQUALS || $ba9873426d6195b3$var$isAsciiAlphaNumeric(code);
}
var $ba9873426d6195b3$var$EntityDecoderState;
(function(EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})($ba9873426d6195b3$var$EntityDecoderState || ($ba9873426d6195b3$var$EntityDecoderState = {}));
var $ba9873426d6195b3$export$8c8f129ce60f53c;
(function(DecodingMode) {
    /** Entities in text nodes that can end with any character. */ DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */ DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */ DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})($ba9873426d6195b3$export$8c8f129ce60f53c || ($ba9873426d6195b3$export$8c8f129ce60f53c = {}));
class $ba9873426d6195b3$export$15263a93ff7ec8ba {
    constructor(/** The tree used to decode entities. */ decodeTree, /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */ emitCodePoint, /** An object that is used to produce errors. */ errors){
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */ this.state = $ba9873426d6195b3$var$EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */ this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */ this.result = 0;
        /** The current index in the decode tree. */ this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */ this.excess = 1;
        /** The mode in which the decoder is operating. */ this.decodeMode = $ba9873426d6195b3$export$8c8f129ce60f53c.Strict;
    }
    /** Resets the instance to make it reusable. */ startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = $ba9873426d6195b3$var$EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ write(str, offset) {
        switch(this.state){
            case $ba9873426d6195b3$var$EntityDecoderState.EntityStart:
                if (str.charCodeAt(offset) === $ba9873426d6195b3$var$CharCodes.NUM) {
                    this.state = $ba9873426d6195b3$var$EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = $ba9873426d6195b3$var$EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            case $ba9873426d6195b3$var$EntityDecoderState.NumericStart:
                return this.stateNumericStart(str, offset);
            case $ba9873426d6195b3$var$EntityDecoderState.NumericDecimal:
                return this.stateNumericDecimal(str, offset);
            case $ba9873426d6195b3$var$EntityDecoderState.NumericHex:
                return this.stateNumericHex(str, offset);
            case $ba9873426d6195b3$var$EntityDecoderState.NamedEntity:
                return this.stateNamedEntity(str, offset);
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericStart(str, offset) {
        if (offset >= str.length) return -1;
        if ((str.charCodeAt(offset) | $ba9873426d6195b3$var$TO_LOWER_BIT) === $ba9873426d6195b3$var$CharCodes.LOWER_X) {
            this.state = $ba9873426d6195b3$var$EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = $ba9873426d6195b3$var$EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericHex(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if ($ba9873426d6195b3$var$isNumber(char) || $ba9873426d6195b3$var$isHexadecimalCharacter(char)) offset += 1;
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if ($ba9873426d6195b3$var$isNumber(char)) offset += 1;
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */ emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === $ba9873426d6195b3$var$CharCodes.SEMI) this.consumed += 1;
        else if (this.decodeMode === $ba9873426d6195b3$export$8c8f129ce60f53c.Strict) return 0;
        this.emitCodePoint((0, $3e75f459745eefc6$export$b978ab756102108a)(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== $ba9873426d6195b3$var$CharCodes.SEMI) this.errors.missingSemicolonAfterCharacterReference();
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNamedEntity(str, offset) {
        const { decodeTree: decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & $ba9873426d6195b3$export$6a4325c613e0faec.VALUE_LENGTH) >> 14;
        for(; offset < str.length; offset++, this.excess++){
            const char = str.charCodeAt(offset);
            this.treeIndex = $ba9873426d6195b3$export$44c08d99945e6276(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === $ba9873426d6195b3$export$8c8f129ce60f53c.Attribute && // We shouldn't have consumed any characters after the entity,
            (valueLength === 0 || // And there should be no invalid characters.
            $ba9873426d6195b3$var$isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            current = decodeTree[this.treeIndex];
            valueLength = (current & $ba9873426d6195b3$export$6a4325c613e0faec.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === $ba9873426d6195b3$var$CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== $ba9873426d6195b3$export$8c8f129ce60f53c.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */ emitNotTerminatedNamedEntity() {
        var _a;
        const { result: result, decodeTree: decodeTree } = this;
        const valueLength = (decodeTree[result] & $ba9873426d6195b3$export$6a4325c613e0faec.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 || _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */ emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree: decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~$ba9873426d6195b3$export$6a4325c613e0faec.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) // For multi-byte values, we need to emit the second byte.
        this.emitCodePoint(decodeTree[result + 2], consumed);
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */ end() {
        var _a;
        switch(this.state){
            case $ba9873426d6195b3$var$EntityDecoderState.NamedEntity:
                // Emit a named entity if we have one.
                return this.result !== 0 && (this.decodeMode !== $ba9873426d6195b3$export$8c8f129ce60f53c.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            // Otherwise, emit a numeric entity if we have one.
            case $ba9873426d6195b3$var$EntityDecoderState.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case $ba9873426d6195b3$var$EntityDecoderState.NumericHex:
                return this.emitNumericEntity(0, 3);
            case $ba9873426d6195b3$var$EntityDecoderState.NumericStart:
                (_a = this.errors) === null || _a === void 0 || _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            case $ba9873426d6195b3$var$EntityDecoderState.EntityStart:
                // Return 0 if we have no entity.
                return 0;
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */ function $ba9873426d6195b3$var$getDecoder(decodeTree) {
    let ret = "";
    const decoder = new $ba9873426d6195b3$export$15263a93ff7ec8ba(decodeTree, (str)=>ret += (0, $3e75f459745eefc6$export$73bfc63873071f74)(str));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while((offset = str.indexOf("&", offset)) >= 0){
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
function $ba9873426d6195b3$export$44c08d99945e6276(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & $ba9873426d6195b3$export$6a4325c613e0faec.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & $ba9873426d6195b3$export$6a4325c613e0faec.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while(lo <= hi){
        const mid = lo + hi >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) lo = mid + 1;
        else if (midVal > char) hi = mid - 1;
        else return decodeTree[mid + branchCount];
    }
    return -1;
}
const $ba9873426d6195b3$var$htmlDecoder = $ba9873426d6195b3$var$getDecoder((0, $4327b5bb5e6cc352$export$2e2bcd8739ae039));
const $ba9873426d6195b3$var$xmlDecoder = $ba9873426d6195b3$var$getDecoder((0, $46c899e3e7f28f2f$export$2e2bcd8739ae039));
function $ba9873426d6195b3$export$f045cb747ce77a19(str, mode = $ba9873426d6195b3$export$8c8f129ce60f53c.Legacy) {
    return $ba9873426d6195b3$var$htmlDecoder(str, mode);
}
function $ba9873426d6195b3$export$49f5e8089adb006a(str) {
    return $ba9873426d6195b3$var$htmlDecoder(str, $ba9873426d6195b3$export$8c8f129ce60f53c.Attribute);
}
function $ba9873426d6195b3$export$da52f4371b3f37de(str) {
    return $ba9873426d6195b3$var$htmlDecoder(str, $ba9873426d6195b3$export$8c8f129ce60f53c.Strict);
}
function $ba9873426d6195b3$export$88e3b9643a8bd06e(str) {
    return $ba9873426d6195b3$var$xmlDecoder(str, $ba9873426d6195b3$export$8c8f129ce60f53c.Strict);
}


// Generated using scripts/write-encode-map.ts
function $f401b2eb8d62a516$var$restoreDiff(arr) {
    for(let i = 1; i < arr.length; i++)arr[i][0] += arr[i - 1][0] + 1;
    return arr;
}
var // prettier-ignore
$f401b2eb8d62a516$export$2e2bcd8739ae039 = new Map(/* #__PURE__ */ $f401b2eb8d62a516$var$restoreDiff([
    [
        9,
        "&Tab;"
    ],
    [
        0,
        "&NewLine;"
    ],
    [
        22,
        "&excl;"
    ],
    [
        0,
        "&quot;"
    ],
    [
        0,
        "&num;"
    ],
    [
        0,
        "&dollar;"
    ],
    [
        0,
        "&percnt;"
    ],
    [
        0,
        "&amp;"
    ],
    [
        0,
        "&apos;"
    ],
    [
        0,
        "&lpar;"
    ],
    [
        0,
        "&rpar;"
    ],
    [
        0,
        "&ast;"
    ],
    [
        0,
        "&plus;"
    ],
    [
        0,
        "&comma;"
    ],
    [
        1,
        "&period;"
    ],
    [
        0,
        "&sol;"
    ],
    [
        10,
        "&colon;"
    ],
    [
        0,
        "&semi;"
    ],
    [
        0,
        {
            v: "&lt;",
            n: 8402,
            o: "&nvlt;"
        }
    ],
    [
        0,
        {
            v: "&equals;",
            n: 8421,
            o: "&bne;"
        }
    ],
    [
        0,
        {
            v: "&gt;",
            n: 8402,
            o: "&nvgt;"
        }
    ],
    [
        0,
        "&quest;"
    ],
    [
        0,
        "&commat;"
    ],
    [
        26,
        "&lbrack;"
    ],
    [
        0,
        "&bsol;"
    ],
    [
        0,
        "&rbrack;"
    ],
    [
        0,
        "&Hat;"
    ],
    [
        0,
        "&lowbar;"
    ],
    [
        0,
        "&DiacriticalGrave;"
    ],
    [
        5,
        {
            n: 106,
            o: "&fjlig;"
        }
    ],
    [
        20,
        "&lbrace;"
    ],
    [
        0,
        "&verbar;"
    ],
    [
        0,
        "&rbrace;"
    ],
    [
        34,
        "&nbsp;"
    ],
    [
        0,
        "&iexcl;"
    ],
    [
        0,
        "&cent;"
    ],
    [
        0,
        "&pound;"
    ],
    [
        0,
        "&curren;"
    ],
    [
        0,
        "&yen;"
    ],
    [
        0,
        "&brvbar;"
    ],
    [
        0,
        "&sect;"
    ],
    [
        0,
        "&die;"
    ],
    [
        0,
        "&copy;"
    ],
    [
        0,
        "&ordf;"
    ],
    [
        0,
        "&laquo;"
    ],
    [
        0,
        "&not;"
    ],
    [
        0,
        "&shy;"
    ],
    [
        0,
        "&circledR;"
    ],
    [
        0,
        "&macr;"
    ],
    [
        0,
        "&deg;"
    ],
    [
        0,
        "&PlusMinus;"
    ],
    [
        0,
        "&sup2;"
    ],
    [
        0,
        "&sup3;"
    ],
    [
        0,
        "&acute;"
    ],
    [
        0,
        "&micro;"
    ],
    [
        0,
        "&para;"
    ],
    [
        0,
        "&centerdot;"
    ],
    [
        0,
        "&cedil;"
    ],
    [
        0,
        "&sup1;"
    ],
    [
        0,
        "&ordm;"
    ],
    [
        0,
        "&raquo;"
    ],
    [
        0,
        "&frac14;"
    ],
    [
        0,
        "&frac12;"
    ],
    [
        0,
        "&frac34;"
    ],
    [
        0,
        "&iquest;"
    ],
    [
        0,
        "&Agrave;"
    ],
    [
        0,
        "&Aacute;"
    ],
    [
        0,
        "&Acirc;"
    ],
    [
        0,
        "&Atilde;"
    ],
    [
        0,
        "&Auml;"
    ],
    [
        0,
        "&angst;"
    ],
    [
        0,
        "&AElig;"
    ],
    [
        0,
        "&Ccedil;"
    ],
    [
        0,
        "&Egrave;"
    ],
    [
        0,
        "&Eacute;"
    ],
    [
        0,
        "&Ecirc;"
    ],
    [
        0,
        "&Euml;"
    ],
    [
        0,
        "&Igrave;"
    ],
    [
        0,
        "&Iacute;"
    ],
    [
        0,
        "&Icirc;"
    ],
    [
        0,
        "&Iuml;"
    ],
    [
        0,
        "&ETH;"
    ],
    [
        0,
        "&Ntilde;"
    ],
    [
        0,
        "&Ograve;"
    ],
    [
        0,
        "&Oacute;"
    ],
    [
        0,
        "&Ocirc;"
    ],
    [
        0,
        "&Otilde;"
    ],
    [
        0,
        "&Ouml;"
    ],
    [
        0,
        "&times;"
    ],
    [
        0,
        "&Oslash;"
    ],
    [
        0,
        "&Ugrave;"
    ],
    [
        0,
        "&Uacute;"
    ],
    [
        0,
        "&Ucirc;"
    ],
    [
        0,
        "&Uuml;"
    ],
    [
        0,
        "&Yacute;"
    ],
    [
        0,
        "&THORN;"
    ],
    [
        0,
        "&szlig;"
    ],
    [
        0,
        "&agrave;"
    ],
    [
        0,
        "&aacute;"
    ],
    [
        0,
        "&acirc;"
    ],
    [
        0,
        "&atilde;"
    ],
    [
        0,
        "&auml;"
    ],
    [
        0,
        "&aring;"
    ],
    [
        0,
        "&aelig;"
    ],
    [
        0,
        "&ccedil;"
    ],
    [
        0,
        "&egrave;"
    ],
    [
        0,
        "&eacute;"
    ],
    [
        0,
        "&ecirc;"
    ],
    [
        0,
        "&euml;"
    ],
    [
        0,
        "&igrave;"
    ],
    [
        0,
        "&iacute;"
    ],
    [
        0,
        "&icirc;"
    ],
    [
        0,
        "&iuml;"
    ],
    [
        0,
        "&eth;"
    ],
    [
        0,
        "&ntilde;"
    ],
    [
        0,
        "&ograve;"
    ],
    [
        0,
        "&oacute;"
    ],
    [
        0,
        "&ocirc;"
    ],
    [
        0,
        "&otilde;"
    ],
    [
        0,
        "&ouml;"
    ],
    [
        0,
        "&div;"
    ],
    [
        0,
        "&oslash;"
    ],
    [
        0,
        "&ugrave;"
    ],
    [
        0,
        "&uacute;"
    ],
    [
        0,
        "&ucirc;"
    ],
    [
        0,
        "&uuml;"
    ],
    [
        0,
        "&yacute;"
    ],
    [
        0,
        "&thorn;"
    ],
    [
        0,
        "&yuml;"
    ],
    [
        0,
        "&Amacr;"
    ],
    [
        0,
        "&amacr;"
    ],
    [
        0,
        "&Abreve;"
    ],
    [
        0,
        "&abreve;"
    ],
    [
        0,
        "&Aogon;"
    ],
    [
        0,
        "&aogon;"
    ],
    [
        0,
        "&Cacute;"
    ],
    [
        0,
        "&cacute;"
    ],
    [
        0,
        "&Ccirc;"
    ],
    [
        0,
        "&ccirc;"
    ],
    [
        0,
        "&Cdot;"
    ],
    [
        0,
        "&cdot;"
    ],
    [
        0,
        "&Ccaron;"
    ],
    [
        0,
        "&ccaron;"
    ],
    [
        0,
        "&Dcaron;"
    ],
    [
        0,
        "&dcaron;"
    ],
    [
        0,
        "&Dstrok;"
    ],
    [
        0,
        "&dstrok;"
    ],
    [
        0,
        "&Emacr;"
    ],
    [
        0,
        "&emacr;"
    ],
    [
        2,
        "&Edot;"
    ],
    [
        0,
        "&edot;"
    ],
    [
        0,
        "&Eogon;"
    ],
    [
        0,
        "&eogon;"
    ],
    [
        0,
        "&Ecaron;"
    ],
    [
        0,
        "&ecaron;"
    ],
    [
        0,
        "&Gcirc;"
    ],
    [
        0,
        "&gcirc;"
    ],
    [
        0,
        "&Gbreve;"
    ],
    [
        0,
        "&gbreve;"
    ],
    [
        0,
        "&Gdot;"
    ],
    [
        0,
        "&gdot;"
    ],
    [
        0,
        "&Gcedil;"
    ],
    [
        1,
        "&Hcirc;"
    ],
    [
        0,
        "&hcirc;"
    ],
    [
        0,
        "&Hstrok;"
    ],
    [
        0,
        "&hstrok;"
    ],
    [
        0,
        "&Itilde;"
    ],
    [
        0,
        "&itilde;"
    ],
    [
        0,
        "&Imacr;"
    ],
    [
        0,
        "&imacr;"
    ],
    [
        2,
        "&Iogon;"
    ],
    [
        0,
        "&iogon;"
    ],
    [
        0,
        "&Idot;"
    ],
    [
        0,
        "&imath;"
    ],
    [
        0,
        "&IJlig;"
    ],
    [
        0,
        "&ijlig;"
    ],
    [
        0,
        "&Jcirc;"
    ],
    [
        0,
        "&jcirc;"
    ],
    [
        0,
        "&Kcedil;"
    ],
    [
        0,
        "&kcedil;"
    ],
    [
        0,
        "&kgreen;"
    ],
    [
        0,
        "&Lacute;"
    ],
    [
        0,
        "&lacute;"
    ],
    [
        0,
        "&Lcedil;"
    ],
    [
        0,
        "&lcedil;"
    ],
    [
        0,
        "&Lcaron;"
    ],
    [
        0,
        "&lcaron;"
    ],
    [
        0,
        "&Lmidot;"
    ],
    [
        0,
        "&lmidot;"
    ],
    [
        0,
        "&Lstrok;"
    ],
    [
        0,
        "&lstrok;"
    ],
    [
        0,
        "&Nacute;"
    ],
    [
        0,
        "&nacute;"
    ],
    [
        0,
        "&Ncedil;"
    ],
    [
        0,
        "&ncedil;"
    ],
    [
        0,
        "&Ncaron;"
    ],
    [
        0,
        "&ncaron;"
    ],
    [
        0,
        "&napos;"
    ],
    [
        0,
        "&ENG;"
    ],
    [
        0,
        "&eng;"
    ],
    [
        0,
        "&Omacr;"
    ],
    [
        0,
        "&omacr;"
    ],
    [
        2,
        "&Odblac;"
    ],
    [
        0,
        "&odblac;"
    ],
    [
        0,
        "&OElig;"
    ],
    [
        0,
        "&oelig;"
    ],
    [
        0,
        "&Racute;"
    ],
    [
        0,
        "&racute;"
    ],
    [
        0,
        "&Rcedil;"
    ],
    [
        0,
        "&rcedil;"
    ],
    [
        0,
        "&Rcaron;"
    ],
    [
        0,
        "&rcaron;"
    ],
    [
        0,
        "&Sacute;"
    ],
    [
        0,
        "&sacute;"
    ],
    [
        0,
        "&Scirc;"
    ],
    [
        0,
        "&scirc;"
    ],
    [
        0,
        "&Scedil;"
    ],
    [
        0,
        "&scedil;"
    ],
    [
        0,
        "&Scaron;"
    ],
    [
        0,
        "&scaron;"
    ],
    [
        0,
        "&Tcedil;"
    ],
    [
        0,
        "&tcedil;"
    ],
    [
        0,
        "&Tcaron;"
    ],
    [
        0,
        "&tcaron;"
    ],
    [
        0,
        "&Tstrok;"
    ],
    [
        0,
        "&tstrok;"
    ],
    [
        0,
        "&Utilde;"
    ],
    [
        0,
        "&utilde;"
    ],
    [
        0,
        "&Umacr;"
    ],
    [
        0,
        "&umacr;"
    ],
    [
        0,
        "&Ubreve;"
    ],
    [
        0,
        "&ubreve;"
    ],
    [
        0,
        "&Uring;"
    ],
    [
        0,
        "&uring;"
    ],
    [
        0,
        "&Udblac;"
    ],
    [
        0,
        "&udblac;"
    ],
    [
        0,
        "&Uogon;"
    ],
    [
        0,
        "&uogon;"
    ],
    [
        0,
        "&Wcirc;"
    ],
    [
        0,
        "&wcirc;"
    ],
    [
        0,
        "&Ycirc;"
    ],
    [
        0,
        "&ycirc;"
    ],
    [
        0,
        "&Yuml;"
    ],
    [
        0,
        "&Zacute;"
    ],
    [
        0,
        "&zacute;"
    ],
    [
        0,
        "&Zdot;"
    ],
    [
        0,
        "&zdot;"
    ],
    [
        0,
        "&Zcaron;"
    ],
    [
        0,
        "&zcaron;"
    ],
    [
        19,
        "&fnof;"
    ],
    [
        34,
        "&imped;"
    ],
    [
        63,
        "&gacute;"
    ],
    [
        65,
        "&jmath;"
    ],
    [
        142,
        "&circ;"
    ],
    [
        0,
        "&caron;"
    ],
    [
        16,
        "&breve;"
    ],
    [
        0,
        "&DiacriticalDot;"
    ],
    [
        0,
        "&ring;"
    ],
    [
        0,
        "&ogon;"
    ],
    [
        0,
        "&DiacriticalTilde;"
    ],
    [
        0,
        "&dblac;"
    ],
    [
        51,
        "&DownBreve;"
    ],
    [
        127,
        "&Alpha;"
    ],
    [
        0,
        "&Beta;"
    ],
    [
        0,
        "&Gamma;"
    ],
    [
        0,
        "&Delta;"
    ],
    [
        0,
        "&Epsilon;"
    ],
    [
        0,
        "&Zeta;"
    ],
    [
        0,
        "&Eta;"
    ],
    [
        0,
        "&Theta;"
    ],
    [
        0,
        "&Iota;"
    ],
    [
        0,
        "&Kappa;"
    ],
    [
        0,
        "&Lambda;"
    ],
    [
        0,
        "&Mu;"
    ],
    [
        0,
        "&Nu;"
    ],
    [
        0,
        "&Xi;"
    ],
    [
        0,
        "&Omicron;"
    ],
    [
        0,
        "&Pi;"
    ],
    [
        0,
        "&Rho;"
    ],
    [
        1,
        "&Sigma;"
    ],
    [
        0,
        "&Tau;"
    ],
    [
        0,
        "&Upsilon;"
    ],
    [
        0,
        "&Phi;"
    ],
    [
        0,
        "&Chi;"
    ],
    [
        0,
        "&Psi;"
    ],
    [
        0,
        "&ohm;"
    ],
    [
        7,
        "&alpha;"
    ],
    [
        0,
        "&beta;"
    ],
    [
        0,
        "&gamma;"
    ],
    [
        0,
        "&delta;"
    ],
    [
        0,
        "&epsi;"
    ],
    [
        0,
        "&zeta;"
    ],
    [
        0,
        "&eta;"
    ],
    [
        0,
        "&theta;"
    ],
    [
        0,
        "&iota;"
    ],
    [
        0,
        "&kappa;"
    ],
    [
        0,
        "&lambda;"
    ],
    [
        0,
        "&mu;"
    ],
    [
        0,
        "&nu;"
    ],
    [
        0,
        "&xi;"
    ],
    [
        0,
        "&omicron;"
    ],
    [
        0,
        "&pi;"
    ],
    [
        0,
        "&rho;"
    ],
    [
        0,
        "&sigmaf;"
    ],
    [
        0,
        "&sigma;"
    ],
    [
        0,
        "&tau;"
    ],
    [
        0,
        "&upsi;"
    ],
    [
        0,
        "&phi;"
    ],
    [
        0,
        "&chi;"
    ],
    [
        0,
        "&psi;"
    ],
    [
        0,
        "&omega;"
    ],
    [
        7,
        "&thetasym;"
    ],
    [
        0,
        "&Upsi;"
    ],
    [
        2,
        "&phiv;"
    ],
    [
        0,
        "&piv;"
    ],
    [
        5,
        "&Gammad;"
    ],
    [
        0,
        "&digamma;"
    ],
    [
        18,
        "&kappav;"
    ],
    [
        0,
        "&rhov;"
    ],
    [
        3,
        "&epsiv;"
    ],
    [
        0,
        "&backepsilon;"
    ],
    [
        10,
        "&IOcy;"
    ],
    [
        0,
        "&DJcy;"
    ],
    [
        0,
        "&GJcy;"
    ],
    [
        0,
        "&Jukcy;"
    ],
    [
        0,
        "&DScy;"
    ],
    [
        0,
        "&Iukcy;"
    ],
    [
        0,
        "&YIcy;"
    ],
    [
        0,
        "&Jsercy;"
    ],
    [
        0,
        "&LJcy;"
    ],
    [
        0,
        "&NJcy;"
    ],
    [
        0,
        "&TSHcy;"
    ],
    [
        0,
        "&KJcy;"
    ],
    [
        1,
        "&Ubrcy;"
    ],
    [
        0,
        "&DZcy;"
    ],
    [
        0,
        "&Acy;"
    ],
    [
        0,
        "&Bcy;"
    ],
    [
        0,
        "&Vcy;"
    ],
    [
        0,
        "&Gcy;"
    ],
    [
        0,
        "&Dcy;"
    ],
    [
        0,
        "&IEcy;"
    ],
    [
        0,
        "&ZHcy;"
    ],
    [
        0,
        "&Zcy;"
    ],
    [
        0,
        "&Icy;"
    ],
    [
        0,
        "&Jcy;"
    ],
    [
        0,
        "&Kcy;"
    ],
    [
        0,
        "&Lcy;"
    ],
    [
        0,
        "&Mcy;"
    ],
    [
        0,
        "&Ncy;"
    ],
    [
        0,
        "&Ocy;"
    ],
    [
        0,
        "&Pcy;"
    ],
    [
        0,
        "&Rcy;"
    ],
    [
        0,
        "&Scy;"
    ],
    [
        0,
        "&Tcy;"
    ],
    [
        0,
        "&Ucy;"
    ],
    [
        0,
        "&Fcy;"
    ],
    [
        0,
        "&KHcy;"
    ],
    [
        0,
        "&TScy;"
    ],
    [
        0,
        "&CHcy;"
    ],
    [
        0,
        "&SHcy;"
    ],
    [
        0,
        "&SHCHcy;"
    ],
    [
        0,
        "&HARDcy;"
    ],
    [
        0,
        "&Ycy;"
    ],
    [
        0,
        "&SOFTcy;"
    ],
    [
        0,
        "&Ecy;"
    ],
    [
        0,
        "&YUcy;"
    ],
    [
        0,
        "&YAcy;"
    ],
    [
        0,
        "&acy;"
    ],
    [
        0,
        "&bcy;"
    ],
    [
        0,
        "&vcy;"
    ],
    [
        0,
        "&gcy;"
    ],
    [
        0,
        "&dcy;"
    ],
    [
        0,
        "&iecy;"
    ],
    [
        0,
        "&zhcy;"
    ],
    [
        0,
        "&zcy;"
    ],
    [
        0,
        "&icy;"
    ],
    [
        0,
        "&jcy;"
    ],
    [
        0,
        "&kcy;"
    ],
    [
        0,
        "&lcy;"
    ],
    [
        0,
        "&mcy;"
    ],
    [
        0,
        "&ncy;"
    ],
    [
        0,
        "&ocy;"
    ],
    [
        0,
        "&pcy;"
    ],
    [
        0,
        "&rcy;"
    ],
    [
        0,
        "&scy;"
    ],
    [
        0,
        "&tcy;"
    ],
    [
        0,
        "&ucy;"
    ],
    [
        0,
        "&fcy;"
    ],
    [
        0,
        "&khcy;"
    ],
    [
        0,
        "&tscy;"
    ],
    [
        0,
        "&chcy;"
    ],
    [
        0,
        "&shcy;"
    ],
    [
        0,
        "&shchcy;"
    ],
    [
        0,
        "&hardcy;"
    ],
    [
        0,
        "&ycy;"
    ],
    [
        0,
        "&softcy;"
    ],
    [
        0,
        "&ecy;"
    ],
    [
        0,
        "&yucy;"
    ],
    [
        0,
        "&yacy;"
    ],
    [
        1,
        "&iocy;"
    ],
    [
        0,
        "&djcy;"
    ],
    [
        0,
        "&gjcy;"
    ],
    [
        0,
        "&jukcy;"
    ],
    [
        0,
        "&dscy;"
    ],
    [
        0,
        "&iukcy;"
    ],
    [
        0,
        "&yicy;"
    ],
    [
        0,
        "&jsercy;"
    ],
    [
        0,
        "&ljcy;"
    ],
    [
        0,
        "&njcy;"
    ],
    [
        0,
        "&tshcy;"
    ],
    [
        0,
        "&kjcy;"
    ],
    [
        1,
        "&ubrcy;"
    ],
    [
        0,
        "&dzcy;"
    ],
    [
        7074,
        "&ensp;"
    ],
    [
        0,
        "&emsp;"
    ],
    [
        0,
        "&emsp13;"
    ],
    [
        0,
        "&emsp14;"
    ],
    [
        1,
        "&numsp;"
    ],
    [
        0,
        "&puncsp;"
    ],
    [
        0,
        "&ThinSpace;"
    ],
    [
        0,
        "&hairsp;"
    ],
    [
        0,
        "&NegativeMediumSpace;"
    ],
    [
        0,
        "&zwnj;"
    ],
    [
        0,
        "&zwj;"
    ],
    [
        0,
        "&lrm;"
    ],
    [
        0,
        "&rlm;"
    ],
    [
        0,
        "&dash;"
    ],
    [
        2,
        "&ndash;"
    ],
    [
        0,
        "&mdash;"
    ],
    [
        0,
        "&horbar;"
    ],
    [
        0,
        "&Verbar;"
    ],
    [
        1,
        "&lsquo;"
    ],
    [
        0,
        "&CloseCurlyQuote;"
    ],
    [
        0,
        "&lsquor;"
    ],
    [
        1,
        "&ldquo;"
    ],
    [
        0,
        "&CloseCurlyDoubleQuote;"
    ],
    [
        0,
        "&bdquo;"
    ],
    [
        1,
        "&dagger;"
    ],
    [
        0,
        "&Dagger;"
    ],
    [
        0,
        "&bull;"
    ],
    [
        2,
        "&nldr;"
    ],
    [
        0,
        "&hellip;"
    ],
    [
        9,
        "&permil;"
    ],
    [
        0,
        "&pertenk;"
    ],
    [
        0,
        "&prime;"
    ],
    [
        0,
        "&Prime;"
    ],
    [
        0,
        "&tprime;"
    ],
    [
        0,
        "&backprime;"
    ],
    [
        3,
        "&lsaquo;"
    ],
    [
        0,
        "&rsaquo;"
    ],
    [
        3,
        "&oline;"
    ],
    [
        2,
        "&caret;"
    ],
    [
        1,
        "&hybull;"
    ],
    [
        0,
        "&frasl;"
    ],
    [
        10,
        "&bsemi;"
    ],
    [
        7,
        "&qprime;"
    ],
    [
        7,
        {
            v: "&MediumSpace;",
            n: 8202,
            o: "&ThickSpace;"
        }
    ],
    [
        0,
        "&NoBreak;"
    ],
    [
        0,
        "&af;"
    ],
    [
        0,
        "&InvisibleTimes;"
    ],
    [
        0,
        "&ic;"
    ],
    [
        72,
        "&euro;"
    ],
    [
        46,
        "&tdot;"
    ],
    [
        0,
        "&DotDot;"
    ],
    [
        37,
        "&complexes;"
    ],
    [
        2,
        "&incare;"
    ],
    [
        4,
        "&gscr;"
    ],
    [
        0,
        "&hamilt;"
    ],
    [
        0,
        "&Hfr;"
    ],
    [
        0,
        "&Hopf;"
    ],
    [
        0,
        "&planckh;"
    ],
    [
        0,
        "&hbar;"
    ],
    [
        0,
        "&imagline;"
    ],
    [
        0,
        "&Ifr;"
    ],
    [
        0,
        "&lagran;"
    ],
    [
        0,
        "&ell;"
    ],
    [
        1,
        "&naturals;"
    ],
    [
        0,
        "&numero;"
    ],
    [
        0,
        "&copysr;"
    ],
    [
        0,
        "&weierp;"
    ],
    [
        0,
        "&Popf;"
    ],
    [
        0,
        "&Qopf;"
    ],
    [
        0,
        "&realine;"
    ],
    [
        0,
        "&real;"
    ],
    [
        0,
        "&reals;"
    ],
    [
        0,
        "&rx;"
    ],
    [
        3,
        "&trade;"
    ],
    [
        1,
        "&integers;"
    ],
    [
        2,
        "&mho;"
    ],
    [
        0,
        "&zeetrf;"
    ],
    [
        0,
        "&iiota;"
    ],
    [
        2,
        "&bernou;"
    ],
    [
        0,
        "&Cayleys;"
    ],
    [
        1,
        "&escr;"
    ],
    [
        0,
        "&Escr;"
    ],
    [
        0,
        "&Fouriertrf;"
    ],
    [
        1,
        "&Mellintrf;"
    ],
    [
        0,
        "&order;"
    ],
    [
        0,
        "&alefsym;"
    ],
    [
        0,
        "&beth;"
    ],
    [
        0,
        "&gimel;"
    ],
    [
        0,
        "&daleth;"
    ],
    [
        12,
        "&CapitalDifferentialD;"
    ],
    [
        0,
        "&dd;"
    ],
    [
        0,
        "&ee;"
    ],
    [
        0,
        "&ii;"
    ],
    [
        10,
        "&frac13;"
    ],
    [
        0,
        "&frac23;"
    ],
    [
        0,
        "&frac15;"
    ],
    [
        0,
        "&frac25;"
    ],
    [
        0,
        "&frac35;"
    ],
    [
        0,
        "&frac45;"
    ],
    [
        0,
        "&frac16;"
    ],
    [
        0,
        "&frac56;"
    ],
    [
        0,
        "&frac18;"
    ],
    [
        0,
        "&frac38;"
    ],
    [
        0,
        "&frac58;"
    ],
    [
        0,
        "&frac78;"
    ],
    [
        49,
        "&larr;"
    ],
    [
        0,
        "&ShortUpArrow;"
    ],
    [
        0,
        "&rarr;"
    ],
    [
        0,
        "&darr;"
    ],
    [
        0,
        "&harr;"
    ],
    [
        0,
        "&updownarrow;"
    ],
    [
        0,
        "&nwarr;"
    ],
    [
        0,
        "&nearr;"
    ],
    [
        0,
        "&LowerRightArrow;"
    ],
    [
        0,
        "&LowerLeftArrow;"
    ],
    [
        0,
        "&nlarr;"
    ],
    [
        0,
        "&nrarr;"
    ],
    [
        1,
        {
            v: "&rarrw;",
            n: 824,
            o: "&nrarrw;"
        }
    ],
    [
        0,
        "&Larr;"
    ],
    [
        0,
        "&Uarr;"
    ],
    [
        0,
        "&Rarr;"
    ],
    [
        0,
        "&Darr;"
    ],
    [
        0,
        "&larrtl;"
    ],
    [
        0,
        "&rarrtl;"
    ],
    [
        0,
        "&LeftTeeArrow;"
    ],
    [
        0,
        "&mapstoup;"
    ],
    [
        0,
        "&map;"
    ],
    [
        0,
        "&DownTeeArrow;"
    ],
    [
        1,
        "&hookleftarrow;"
    ],
    [
        0,
        "&hookrightarrow;"
    ],
    [
        0,
        "&larrlp;"
    ],
    [
        0,
        "&looparrowright;"
    ],
    [
        0,
        "&harrw;"
    ],
    [
        0,
        "&nharr;"
    ],
    [
        1,
        "&lsh;"
    ],
    [
        0,
        "&rsh;"
    ],
    [
        0,
        "&ldsh;"
    ],
    [
        0,
        "&rdsh;"
    ],
    [
        1,
        "&crarr;"
    ],
    [
        0,
        "&cularr;"
    ],
    [
        0,
        "&curarr;"
    ],
    [
        2,
        "&circlearrowleft;"
    ],
    [
        0,
        "&circlearrowright;"
    ],
    [
        0,
        "&leftharpoonup;"
    ],
    [
        0,
        "&DownLeftVector;"
    ],
    [
        0,
        "&RightUpVector;"
    ],
    [
        0,
        "&LeftUpVector;"
    ],
    [
        0,
        "&rharu;"
    ],
    [
        0,
        "&DownRightVector;"
    ],
    [
        0,
        "&dharr;"
    ],
    [
        0,
        "&dharl;"
    ],
    [
        0,
        "&RightArrowLeftArrow;"
    ],
    [
        0,
        "&udarr;"
    ],
    [
        0,
        "&LeftArrowRightArrow;"
    ],
    [
        0,
        "&leftleftarrows;"
    ],
    [
        0,
        "&upuparrows;"
    ],
    [
        0,
        "&rightrightarrows;"
    ],
    [
        0,
        "&ddarr;"
    ],
    [
        0,
        "&leftrightharpoons;"
    ],
    [
        0,
        "&Equilibrium;"
    ],
    [
        0,
        "&nlArr;"
    ],
    [
        0,
        "&nhArr;"
    ],
    [
        0,
        "&nrArr;"
    ],
    [
        0,
        "&DoubleLeftArrow;"
    ],
    [
        0,
        "&DoubleUpArrow;"
    ],
    [
        0,
        "&DoubleRightArrow;"
    ],
    [
        0,
        "&dArr;"
    ],
    [
        0,
        "&DoubleLeftRightArrow;"
    ],
    [
        0,
        "&DoubleUpDownArrow;"
    ],
    [
        0,
        "&nwArr;"
    ],
    [
        0,
        "&neArr;"
    ],
    [
        0,
        "&seArr;"
    ],
    [
        0,
        "&swArr;"
    ],
    [
        0,
        "&lAarr;"
    ],
    [
        0,
        "&rAarr;"
    ],
    [
        1,
        "&zigrarr;"
    ],
    [
        6,
        "&larrb;"
    ],
    [
        0,
        "&rarrb;"
    ],
    [
        15,
        "&DownArrowUpArrow;"
    ],
    [
        7,
        "&loarr;"
    ],
    [
        0,
        "&roarr;"
    ],
    [
        0,
        "&hoarr;"
    ],
    [
        0,
        "&forall;"
    ],
    [
        0,
        "&comp;"
    ],
    [
        0,
        {
            v: "&part;",
            n: 824,
            o: "&npart;"
        }
    ],
    [
        0,
        "&exist;"
    ],
    [
        0,
        "&nexist;"
    ],
    [
        0,
        "&empty;"
    ],
    [
        1,
        "&Del;"
    ],
    [
        0,
        "&Element;"
    ],
    [
        0,
        "&NotElement;"
    ],
    [
        1,
        "&ni;"
    ],
    [
        0,
        "&notni;"
    ],
    [
        2,
        "&prod;"
    ],
    [
        0,
        "&coprod;"
    ],
    [
        0,
        "&sum;"
    ],
    [
        0,
        "&minus;"
    ],
    [
        0,
        "&MinusPlus;"
    ],
    [
        0,
        "&dotplus;"
    ],
    [
        1,
        "&Backslash;"
    ],
    [
        0,
        "&lowast;"
    ],
    [
        0,
        "&compfn;"
    ],
    [
        1,
        "&radic;"
    ],
    [
        2,
        "&prop;"
    ],
    [
        0,
        "&infin;"
    ],
    [
        0,
        "&angrt;"
    ],
    [
        0,
        {
            v: "&ang;",
            n: 8402,
            o: "&nang;"
        }
    ],
    [
        0,
        "&angmsd;"
    ],
    [
        0,
        "&angsph;"
    ],
    [
        0,
        "&mid;"
    ],
    [
        0,
        "&nmid;"
    ],
    [
        0,
        "&DoubleVerticalBar;"
    ],
    [
        0,
        "&NotDoubleVerticalBar;"
    ],
    [
        0,
        "&and;"
    ],
    [
        0,
        "&or;"
    ],
    [
        0,
        {
            v: "&cap;",
            n: 65024,
            o: "&caps;"
        }
    ],
    [
        0,
        {
            v: "&cup;",
            n: 65024,
            o: "&cups;"
        }
    ],
    [
        0,
        "&int;"
    ],
    [
        0,
        "&Int;"
    ],
    [
        0,
        "&iiint;"
    ],
    [
        0,
        "&conint;"
    ],
    [
        0,
        "&Conint;"
    ],
    [
        0,
        "&Cconint;"
    ],
    [
        0,
        "&cwint;"
    ],
    [
        0,
        "&ClockwiseContourIntegral;"
    ],
    [
        0,
        "&awconint;"
    ],
    [
        0,
        "&there4;"
    ],
    [
        0,
        "&becaus;"
    ],
    [
        0,
        "&ratio;"
    ],
    [
        0,
        "&Colon;"
    ],
    [
        0,
        "&dotminus;"
    ],
    [
        1,
        "&mDDot;"
    ],
    [
        0,
        "&homtht;"
    ],
    [
        0,
        {
            v: "&sim;",
            n: 8402,
            o: "&nvsim;"
        }
    ],
    [
        0,
        {
            v: "&backsim;",
            n: 817,
            o: "&race;"
        }
    ],
    [
        0,
        {
            v: "&ac;",
            n: 819,
            o: "&acE;"
        }
    ],
    [
        0,
        "&acd;"
    ],
    [
        0,
        "&VerticalTilde;"
    ],
    [
        0,
        "&NotTilde;"
    ],
    [
        0,
        {
            v: "&eqsim;",
            n: 824,
            o: "&nesim;"
        }
    ],
    [
        0,
        "&sime;"
    ],
    [
        0,
        "&NotTildeEqual;"
    ],
    [
        0,
        "&cong;"
    ],
    [
        0,
        "&simne;"
    ],
    [
        0,
        "&ncong;"
    ],
    [
        0,
        "&ap;"
    ],
    [
        0,
        "&nap;"
    ],
    [
        0,
        "&ape;"
    ],
    [
        0,
        {
            v: "&apid;",
            n: 824,
            o: "&napid;"
        }
    ],
    [
        0,
        "&backcong;"
    ],
    [
        0,
        {
            v: "&asympeq;",
            n: 8402,
            o: "&nvap;"
        }
    ],
    [
        0,
        {
            v: "&bump;",
            n: 824,
            o: "&nbump;"
        }
    ],
    [
        0,
        {
            v: "&bumpe;",
            n: 824,
            o: "&nbumpe;"
        }
    ],
    [
        0,
        {
            v: "&doteq;",
            n: 824,
            o: "&nedot;"
        }
    ],
    [
        0,
        "&doteqdot;"
    ],
    [
        0,
        "&efDot;"
    ],
    [
        0,
        "&erDot;"
    ],
    [
        0,
        "&Assign;"
    ],
    [
        0,
        "&ecolon;"
    ],
    [
        0,
        "&ecir;"
    ],
    [
        0,
        "&circeq;"
    ],
    [
        1,
        "&wedgeq;"
    ],
    [
        0,
        "&veeeq;"
    ],
    [
        1,
        "&triangleq;"
    ],
    [
        2,
        "&equest;"
    ],
    [
        0,
        "&ne;"
    ],
    [
        0,
        {
            v: "&Congruent;",
            n: 8421,
            o: "&bnequiv;"
        }
    ],
    [
        0,
        "&nequiv;"
    ],
    [
        1,
        {
            v: "&le;",
            n: 8402,
            o: "&nvle;"
        }
    ],
    [
        0,
        {
            v: "&ge;",
            n: 8402,
            o: "&nvge;"
        }
    ],
    [
        0,
        {
            v: "&lE;",
            n: 824,
            o: "&nlE;"
        }
    ],
    [
        0,
        {
            v: "&gE;",
            n: 824,
            o: "&ngE;"
        }
    ],
    [
        0,
        {
            v: "&lnE;",
            n: 65024,
            o: "&lvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&gnE;",
            n: 65024,
            o: "&gvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&ll;",
            n: new Map(/* #__PURE__ */ $f401b2eb8d62a516$var$restoreDiff([
                [
                    824,
                    "&nLtv;"
                ],
                [
                    7577,
                    "&nLt;"
                ]
            ]))
        }
    ],
    [
        0,
        {
            v: "&gg;",
            n: new Map(/* #__PURE__ */ $f401b2eb8d62a516$var$restoreDiff([
                [
                    824,
                    "&nGtv;"
                ],
                [
                    7577,
                    "&nGt;"
                ]
            ]))
        }
    ],
    [
        0,
        "&between;"
    ],
    [
        0,
        "&NotCupCap;"
    ],
    [
        0,
        "&nless;"
    ],
    [
        0,
        "&ngt;"
    ],
    [
        0,
        "&nle;"
    ],
    [
        0,
        "&nge;"
    ],
    [
        0,
        "&lesssim;"
    ],
    [
        0,
        "&GreaterTilde;"
    ],
    [
        0,
        "&nlsim;"
    ],
    [
        0,
        "&ngsim;"
    ],
    [
        0,
        "&LessGreater;"
    ],
    [
        0,
        "&gl;"
    ],
    [
        0,
        "&NotLessGreater;"
    ],
    [
        0,
        "&NotGreaterLess;"
    ],
    [
        0,
        "&pr;"
    ],
    [
        0,
        "&sc;"
    ],
    [
        0,
        "&prcue;"
    ],
    [
        0,
        "&sccue;"
    ],
    [
        0,
        "&PrecedesTilde;"
    ],
    [
        0,
        {
            v: "&scsim;",
            n: 824,
            o: "&NotSucceedsTilde;"
        }
    ],
    [
        0,
        "&NotPrecedes;"
    ],
    [
        0,
        "&NotSucceeds;"
    ],
    [
        0,
        {
            v: "&sub;",
            n: 8402,
            o: "&NotSubset;"
        }
    ],
    [
        0,
        {
            v: "&sup;",
            n: 8402,
            o: "&NotSuperset;"
        }
    ],
    [
        0,
        "&nsub;"
    ],
    [
        0,
        "&nsup;"
    ],
    [
        0,
        "&sube;"
    ],
    [
        0,
        "&supe;"
    ],
    [
        0,
        "&NotSubsetEqual;"
    ],
    [
        0,
        "&NotSupersetEqual;"
    ],
    [
        0,
        {
            v: "&subne;",
            n: 65024,
            o: "&varsubsetneq;"
        }
    ],
    [
        0,
        {
            v: "&supne;",
            n: 65024,
            o: "&varsupsetneq;"
        }
    ],
    [
        1,
        "&cupdot;"
    ],
    [
        0,
        "&UnionPlus;"
    ],
    [
        0,
        {
            v: "&sqsub;",
            n: 824,
            o: "&NotSquareSubset;"
        }
    ],
    [
        0,
        {
            v: "&sqsup;",
            n: 824,
            o: "&NotSquareSuperset;"
        }
    ],
    [
        0,
        "&sqsube;"
    ],
    [
        0,
        "&sqsupe;"
    ],
    [
        0,
        {
            v: "&sqcap;",
            n: 65024,
            o: "&sqcaps;"
        }
    ],
    [
        0,
        {
            v: "&sqcup;",
            n: 65024,
            o: "&sqcups;"
        }
    ],
    [
        0,
        "&CirclePlus;"
    ],
    [
        0,
        "&CircleMinus;"
    ],
    [
        0,
        "&CircleTimes;"
    ],
    [
        0,
        "&osol;"
    ],
    [
        0,
        "&CircleDot;"
    ],
    [
        0,
        "&circledcirc;"
    ],
    [
        0,
        "&circledast;"
    ],
    [
        1,
        "&circleddash;"
    ],
    [
        0,
        "&boxplus;"
    ],
    [
        0,
        "&boxminus;"
    ],
    [
        0,
        "&boxtimes;"
    ],
    [
        0,
        "&dotsquare;"
    ],
    [
        0,
        "&RightTee;"
    ],
    [
        0,
        "&dashv;"
    ],
    [
        0,
        "&DownTee;"
    ],
    [
        0,
        "&bot;"
    ],
    [
        1,
        "&models;"
    ],
    [
        0,
        "&DoubleRightTee;"
    ],
    [
        0,
        "&Vdash;"
    ],
    [
        0,
        "&Vvdash;"
    ],
    [
        0,
        "&VDash;"
    ],
    [
        0,
        "&nvdash;"
    ],
    [
        0,
        "&nvDash;"
    ],
    [
        0,
        "&nVdash;"
    ],
    [
        0,
        "&nVDash;"
    ],
    [
        0,
        "&prurel;"
    ],
    [
        1,
        "&LeftTriangle;"
    ],
    [
        0,
        "&RightTriangle;"
    ],
    [
        0,
        {
            v: "&LeftTriangleEqual;",
            n: 8402,
            o: "&nvltrie;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleEqual;",
            n: 8402,
            o: "&nvrtrie;"
        }
    ],
    [
        0,
        "&origof;"
    ],
    [
        0,
        "&imof;"
    ],
    [
        0,
        "&multimap;"
    ],
    [
        0,
        "&hercon;"
    ],
    [
        0,
        "&intcal;"
    ],
    [
        0,
        "&veebar;"
    ],
    [
        1,
        "&barvee;"
    ],
    [
        0,
        "&angrtvb;"
    ],
    [
        0,
        "&lrtri;"
    ],
    [
        0,
        "&bigwedge;"
    ],
    [
        0,
        "&bigvee;"
    ],
    [
        0,
        "&bigcap;"
    ],
    [
        0,
        "&bigcup;"
    ],
    [
        0,
        "&diam;"
    ],
    [
        0,
        "&sdot;"
    ],
    [
        0,
        "&sstarf;"
    ],
    [
        0,
        "&divideontimes;"
    ],
    [
        0,
        "&bowtie;"
    ],
    [
        0,
        "&ltimes;"
    ],
    [
        0,
        "&rtimes;"
    ],
    [
        0,
        "&leftthreetimes;"
    ],
    [
        0,
        "&rightthreetimes;"
    ],
    [
        0,
        "&backsimeq;"
    ],
    [
        0,
        "&curlyvee;"
    ],
    [
        0,
        "&curlywedge;"
    ],
    [
        0,
        "&Sub;"
    ],
    [
        0,
        "&Sup;"
    ],
    [
        0,
        "&Cap;"
    ],
    [
        0,
        "&Cup;"
    ],
    [
        0,
        "&fork;"
    ],
    [
        0,
        "&epar;"
    ],
    [
        0,
        "&lessdot;"
    ],
    [
        0,
        "&gtdot;"
    ],
    [
        0,
        {
            v: "&Ll;",
            n: 824,
            o: "&nLl;"
        }
    ],
    [
        0,
        {
            v: "&Gg;",
            n: 824,
            o: "&nGg;"
        }
    ],
    [
        0,
        {
            v: "&leg;",
            n: 65024,
            o: "&lesg;"
        }
    ],
    [
        0,
        {
            v: "&gel;",
            n: 65024,
            o: "&gesl;"
        }
    ],
    [
        2,
        "&cuepr;"
    ],
    [
        0,
        "&cuesc;"
    ],
    [
        0,
        "&NotPrecedesSlantEqual;"
    ],
    [
        0,
        "&NotSucceedsSlantEqual;"
    ],
    [
        0,
        "&NotSquareSubsetEqual;"
    ],
    [
        0,
        "&NotSquareSupersetEqual;"
    ],
    [
        2,
        "&lnsim;"
    ],
    [
        0,
        "&gnsim;"
    ],
    [
        0,
        "&precnsim;"
    ],
    [
        0,
        "&scnsim;"
    ],
    [
        0,
        "&nltri;"
    ],
    [
        0,
        "&NotRightTriangle;"
    ],
    [
        0,
        "&nltrie;"
    ],
    [
        0,
        "&NotRightTriangleEqual;"
    ],
    [
        0,
        "&vellip;"
    ],
    [
        0,
        "&ctdot;"
    ],
    [
        0,
        "&utdot;"
    ],
    [
        0,
        "&dtdot;"
    ],
    [
        0,
        "&disin;"
    ],
    [
        0,
        "&isinsv;"
    ],
    [
        0,
        "&isins;"
    ],
    [
        0,
        {
            v: "&isindot;",
            n: 824,
            o: "&notindot;"
        }
    ],
    [
        0,
        "&notinvc;"
    ],
    [
        0,
        "&notinvb;"
    ],
    [
        1,
        {
            v: "&isinE;",
            n: 824,
            o: "&notinE;"
        }
    ],
    [
        0,
        "&nisd;"
    ],
    [
        0,
        "&xnis;"
    ],
    [
        0,
        "&nis;"
    ],
    [
        0,
        "&notnivc;"
    ],
    [
        0,
        "&notnivb;"
    ],
    [
        6,
        "&barwed;"
    ],
    [
        0,
        "&Barwed;"
    ],
    [
        1,
        "&lceil;"
    ],
    [
        0,
        "&rceil;"
    ],
    [
        0,
        "&LeftFloor;"
    ],
    [
        0,
        "&rfloor;"
    ],
    [
        0,
        "&drcrop;"
    ],
    [
        0,
        "&dlcrop;"
    ],
    [
        0,
        "&urcrop;"
    ],
    [
        0,
        "&ulcrop;"
    ],
    [
        0,
        "&bnot;"
    ],
    [
        1,
        "&profline;"
    ],
    [
        0,
        "&profsurf;"
    ],
    [
        1,
        "&telrec;"
    ],
    [
        0,
        "&target;"
    ],
    [
        5,
        "&ulcorn;"
    ],
    [
        0,
        "&urcorn;"
    ],
    [
        0,
        "&dlcorn;"
    ],
    [
        0,
        "&drcorn;"
    ],
    [
        2,
        "&frown;"
    ],
    [
        0,
        "&smile;"
    ],
    [
        9,
        "&cylcty;"
    ],
    [
        0,
        "&profalar;"
    ],
    [
        7,
        "&topbot;"
    ],
    [
        6,
        "&ovbar;"
    ],
    [
        1,
        "&solbar;"
    ],
    [
        60,
        "&angzarr;"
    ],
    [
        51,
        "&lmoustache;"
    ],
    [
        0,
        "&rmoustache;"
    ],
    [
        2,
        "&OverBracket;"
    ],
    [
        0,
        "&bbrk;"
    ],
    [
        0,
        "&bbrktbrk;"
    ],
    [
        37,
        "&OverParenthesis;"
    ],
    [
        0,
        "&UnderParenthesis;"
    ],
    [
        0,
        "&OverBrace;"
    ],
    [
        0,
        "&UnderBrace;"
    ],
    [
        2,
        "&trpezium;"
    ],
    [
        4,
        "&elinters;"
    ],
    [
        59,
        "&blank;"
    ],
    [
        164,
        "&circledS;"
    ],
    [
        55,
        "&boxh;"
    ],
    [
        1,
        "&boxv;"
    ],
    [
        9,
        "&boxdr;"
    ],
    [
        3,
        "&boxdl;"
    ],
    [
        3,
        "&boxur;"
    ],
    [
        3,
        "&boxul;"
    ],
    [
        3,
        "&boxvr;"
    ],
    [
        7,
        "&boxvl;"
    ],
    [
        7,
        "&boxhd;"
    ],
    [
        7,
        "&boxhu;"
    ],
    [
        7,
        "&boxvh;"
    ],
    [
        19,
        "&boxH;"
    ],
    [
        0,
        "&boxV;"
    ],
    [
        0,
        "&boxdR;"
    ],
    [
        0,
        "&boxDr;"
    ],
    [
        0,
        "&boxDR;"
    ],
    [
        0,
        "&boxdL;"
    ],
    [
        0,
        "&boxDl;"
    ],
    [
        0,
        "&boxDL;"
    ],
    [
        0,
        "&boxuR;"
    ],
    [
        0,
        "&boxUr;"
    ],
    [
        0,
        "&boxUR;"
    ],
    [
        0,
        "&boxuL;"
    ],
    [
        0,
        "&boxUl;"
    ],
    [
        0,
        "&boxUL;"
    ],
    [
        0,
        "&boxvR;"
    ],
    [
        0,
        "&boxVr;"
    ],
    [
        0,
        "&boxVR;"
    ],
    [
        0,
        "&boxvL;"
    ],
    [
        0,
        "&boxVl;"
    ],
    [
        0,
        "&boxVL;"
    ],
    [
        0,
        "&boxHd;"
    ],
    [
        0,
        "&boxhD;"
    ],
    [
        0,
        "&boxHD;"
    ],
    [
        0,
        "&boxHu;"
    ],
    [
        0,
        "&boxhU;"
    ],
    [
        0,
        "&boxHU;"
    ],
    [
        0,
        "&boxvH;"
    ],
    [
        0,
        "&boxVh;"
    ],
    [
        0,
        "&boxVH;"
    ],
    [
        19,
        "&uhblk;"
    ],
    [
        3,
        "&lhblk;"
    ],
    [
        3,
        "&block;"
    ],
    [
        8,
        "&blk14;"
    ],
    [
        0,
        "&blk12;"
    ],
    [
        0,
        "&blk34;"
    ],
    [
        13,
        "&square;"
    ],
    [
        8,
        "&blacksquare;"
    ],
    [
        0,
        "&EmptyVerySmallSquare;"
    ],
    [
        1,
        "&rect;"
    ],
    [
        0,
        "&marker;"
    ],
    [
        2,
        "&fltns;"
    ],
    [
        1,
        "&bigtriangleup;"
    ],
    [
        0,
        "&blacktriangle;"
    ],
    [
        0,
        "&triangle;"
    ],
    [
        2,
        "&blacktriangleright;"
    ],
    [
        0,
        "&rtri;"
    ],
    [
        3,
        "&bigtriangledown;"
    ],
    [
        0,
        "&blacktriangledown;"
    ],
    [
        0,
        "&dtri;"
    ],
    [
        2,
        "&blacktriangleleft;"
    ],
    [
        0,
        "&ltri;"
    ],
    [
        6,
        "&loz;"
    ],
    [
        0,
        "&cir;"
    ],
    [
        32,
        "&tridot;"
    ],
    [
        2,
        "&bigcirc;"
    ],
    [
        8,
        "&ultri;"
    ],
    [
        0,
        "&urtri;"
    ],
    [
        0,
        "&lltri;"
    ],
    [
        0,
        "&EmptySmallSquare;"
    ],
    [
        0,
        "&FilledSmallSquare;"
    ],
    [
        8,
        "&bigstar;"
    ],
    [
        0,
        "&star;"
    ],
    [
        7,
        "&phone;"
    ],
    [
        49,
        "&female;"
    ],
    [
        1,
        "&male;"
    ],
    [
        29,
        "&spades;"
    ],
    [
        2,
        "&clubs;"
    ],
    [
        1,
        "&hearts;"
    ],
    [
        0,
        "&diamondsuit;"
    ],
    [
        3,
        "&sung;"
    ],
    [
        2,
        "&flat;"
    ],
    [
        0,
        "&natural;"
    ],
    [
        0,
        "&sharp;"
    ],
    [
        163,
        "&check;"
    ],
    [
        3,
        "&cross;"
    ],
    [
        8,
        "&malt;"
    ],
    [
        21,
        "&sext;"
    ],
    [
        33,
        "&VerticalSeparator;"
    ],
    [
        25,
        "&lbbrk;"
    ],
    [
        0,
        "&rbbrk;"
    ],
    [
        84,
        "&bsolhsub;"
    ],
    [
        0,
        "&suphsol;"
    ],
    [
        28,
        "&LeftDoubleBracket;"
    ],
    [
        0,
        "&RightDoubleBracket;"
    ],
    [
        0,
        "&lang;"
    ],
    [
        0,
        "&rang;"
    ],
    [
        0,
        "&Lang;"
    ],
    [
        0,
        "&Rang;"
    ],
    [
        0,
        "&loang;"
    ],
    [
        0,
        "&roang;"
    ],
    [
        7,
        "&longleftarrow;"
    ],
    [
        0,
        "&longrightarrow;"
    ],
    [
        0,
        "&longleftrightarrow;"
    ],
    [
        0,
        "&DoubleLongLeftArrow;"
    ],
    [
        0,
        "&DoubleLongRightArrow;"
    ],
    [
        0,
        "&DoubleLongLeftRightArrow;"
    ],
    [
        1,
        "&longmapsto;"
    ],
    [
        2,
        "&dzigrarr;"
    ],
    [
        258,
        "&nvlArr;"
    ],
    [
        0,
        "&nvrArr;"
    ],
    [
        0,
        "&nvHarr;"
    ],
    [
        0,
        "&Map;"
    ],
    [
        6,
        "&lbarr;"
    ],
    [
        0,
        "&bkarow;"
    ],
    [
        0,
        "&lBarr;"
    ],
    [
        0,
        "&dbkarow;"
    ],
    [
        0,
        "&drbkarow;"
    ],
    [
        0,
        "&DDotrahd;"
    ],
    [
        0,
        "&UpArrowBar;"
    ],
    [
        0,
        "&DownArrowBar;"
    ],
    [
        2,
        "&Rarrtl;"
    ],
    [
        2,
        "&latail;"
    ],
    [
        0,
        "&ratail;"
    ],
    [
        0,
        "&lAtail;"
    ],
    [
        0,
        "&rAtail;"
    ],
    [
        0,
        "&larrfs;"
    ],
    [
        0,
        "&rarrfs;"
    ],
    [
        0,
        "&larrbfs;"
    ],
    [
        0,
        "&rarrbfs;"
    ],
    [
        2,
        "&nwarhk;"
    ],
    [
        0,
        "&nearhk;"
    ],
    [
        0,
        "&hksearow;"
    ],
    [
        0,
        "&hkswarow;"
    ],
    [
        0,
        "&nwnear;"
    ],
    [
        0,
        "&nesear;"
    ],
    [
        0,
        "&seswar;"
    ],
    [
        0,
        "&swnwar;"
    ],
    [
        8,
        {
            v: "&rarrc;",
            n: 824,
            o: "&nrarrc;"
        }
    ],
    [
        1,
        "&cudarrr;"
    ],
    [
        0,
        "&ldca;"
    ],
    [
        0,
        "&rdca;"
    ],
    [
        0,
        "&cudarrl;"
    ],
    [
        0,
        "&larrpl;"
    ],
    [
        2,
        "&curarrm;"
    ],
    [
        0,
        "&cularrp;"
    ],
    [
        7,
        "&rarrpl;"
    ],
    [
        2,
        "&harrcir;"
    ],
    [
        0,
        "&Uarrocir;"
    ],
    [
        0,
        "&lurdshar;"
    ],
    [
        0,
        "&ldrushar;"
    ],
    [
        2,
        "&LeftRightVector;"
    ],
    [
        0,
        "&RightUpDownVector;"
    ],
    [
        0,
        "&DownLeftRightVector;"
    ],
    [
        0,
        "&LeftUpDownVector;"
    ],
    [
        0,
        "&LeftVectorBar;"
    ],
    [
        0,
        "&RightVectorBar;"
    ],
    [
        0,
        "&RightUpVectorBar;"
    ],
    [
        0,
        "&RightDownVectorBar;"
    ],
    [
        0,
        "&DownLeftVectorBar;"
    ],
    [
        0,
        "&DownRightVectorBar;"
    ],
    [
        0,
        "&LeftUpVectorBar;"
    ],
    [
        0,
        "&LeftDownVectorBar;"
    ],
    [
        0,
        "&LeftTeeVector;"
    ],
    [
        0,
        "&RightTeeVector;"
    ],
    [
        0,
        "&RightUpTeeVector;"
    ],
    [
        0,
        "&RightDownTeeVector;"
    ],
    [
        0,
        "&DownLeftTeeVector;"
    ],
    [
        0,
        "&DownRightTeeVector;"
    ],
    [
        0,
        "&LeftUpTeeVector;"
    ],
    [
        0,
        "&LeftDownTeeVector;"
    ],
    [
        0,
        "&lHar;"
    ],
    [
        0,
        "&uHar;"
    ],
    [
        0,
        "&rHar;"
    ],
    [
        0,
        "&dHar;"
    ],
    [
        0,
        "&luruhar;"
    ],
    [
        0,
        "&ldrdhar;"
    ],
    [
        0,
        "&ruluhar;"
    ],
    [
        0,
        "&rdldhar;"
    ],
    [
        0,
        "&lharul;"
    ],
    [
        0,
        "&llhard;"
    ],
    [
        0,
        "&rharul;"
    ],
    [
        0,
        "&lrhard;"
    ],
    [
        0,
        "&udhar;"
    ],
    [
        0,
        "&duhar;"
    ],
    [
        0,
        "&RoundImplies;"
    ],
    [
        0,
        "&erarr;"
    ],
    [
        0,
        "&simrarr;"
    ],
    [
        0,
        "&larrsim;"
    ],
    [
        0,
        "&rarrsim;"
    ],
    [
        0,
        "&rarrap;"
    ],
    [
        0,
        "&ltlarr;"
    ],
    [
        1,
        "&gtrarr;"
    ],
    [
        0,
        "&subrarr;"
    ],
    [
        1,
        "&suplarr;"
    ],
    [
        0,
        "&lfisht;"
    ],
    [
        0,
        "&rfisht;"
    ],
    [
        0,
        "&ufisht;"
    ],
    [
        0,
        "&dfisht;"
    ],
    [
        5,
        "&lopar;"
    ],
    [
        0,
        "&ropar;"
    ],
    [
        4,
        "&lbrke;"
    ],
    [
        0,
        "&rbrke;"
    ],
    [
        0,
        "&lbrkslu;"
    ],
    [
        0,
        "&rbrksld;"
    ],
    [
        0,
        "&lbrksld;"
    ],
    [
        0,
        "&rbrkslu;"
    ],
    [
        0,
        "&langd;"
    ],
    [
        0,
        "&rangd;"
    ],
    [
        0,
        "&lparlt;"
    ],
    [
        0,
        "&rpargt;"
    ],
    [
        0,
        "&gtlPar;"
    ],
    [
        0,
        "&ltrPar;"
    ],
    [
        3,
        "&vzigzag;"
    ],
    [
        1,
        "&vangrt;"
    ],
    [
        0,
        "&angrtvbd;"
    ],
    [
        6,
        "&ange;"
    ],
    [
        0,
        "&range;"
    ],
    [
        0,
        "&dwangle;"
    ],
    [
        0,
        "&uwangle;"
    ],
    [
        0,
        "&angmsdaa;"
    ],
    [
        0,
        "&angmsdab;"
    ],
    [
        0,
        "&angmsdac;"
    ],
    [
        0,
        "&angmsdad;"
    ],
    [
        0,
        "&angmsdae;"
    ],
    [
        0,
        "&angmsdaf;"
    ],
    [
        0,
        "&angmsdag;"
    ],
    [
        0,
        "&angmsdah;"
    ],
    [
        0,
        "&bemptyv;"
    ],
    [
        0,
        "&demptyv;"
    ],
    [
        0,
        "&cemptyv;"
    ],
    [
        0,
        "&raemptyv;"
    ],
    [
        0,
        "&laemptyv;"
    ],
    [
        0,
        "&ohbar;"
    ],
    [
        0,
        "&omid;"
    ],
    [
        0,
        "&opar;"
    ],
    [
        1,
        "&operp;"
    ],
    [
        1,
        "&olcross;"
    ],
    [
        0,
        "&odsold;"
    ],
    [
        1,
        "&olcir;"
    ],
    [
        0,
        "&ofcir;"
    ],
    [
        0,
        "&olt;"
    ],
    [
        0,
        "&ogt;"
    ],
    [
        0,
        "&cirscir;"
    ],
    [
        0,
        "&cirE;"
    ],
    [
        0,
        "&solb;"
    ],
    [
        0,
        "&bsolb;"
    ],
    [
        3,
        "&boxbox;"
    ],
    [
        3,
        "&trisb;"
    ],
    [
        0,
        "&rtriltri;"
    ],
    [
        0,
        {
            v: "&LeftTriangleBar;",
            n: 824,
            o: "&NotLeftTriangleBar;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleBar;",
            n: 824,
            o: "&NotRightTriangleBar;"
        }
    ],
    [
        11,
        "&iinfin;"
    ],
    [
        0,
        "&infintie;"
    ],
    [
        0,
        "&nvinfin;"
    ],
    [
        4,
        "&eparsl;"
    ],
    [
        0,
        "&smeparsl;"
    ],
    [
        0,
        "&eqvparsl;"
    ],
    [
        5,
        "&blacklozenge;"
    ],
    [
        8,
        "&RuleDelayed;"
    ],
    [
        1,
        "&dsol;"
    ],
    [
        9,
        "&bigodot;"
    ],
    [
        0,
        "&bigoplus;"
    ],
    [
        0,
        "&bigotimes;"
    ],
    [
        1,
        "&biguplus;"
    ],
    [
        1,
        "&bigsqcup;"
    ],
    [
        5,
        "&iiiint;"
    ],
    [
        0,
        "&fpartint;"
    ],
    [
        2,
        "&cirfnint;"
    ],
    [
        0,
        "&awint;"
    ],
    [
        0,
        "&rppolint;"
    ],
    [
        0,
        "&scpolint;"
    ],
    [
        0,
        "&npolint;"
    ],
    [
        0,
        "&pointint;"
    ],
    [
        0,
        "&quatint;"
    ],
    [
        0,
        "&intlarhk;"
    ],
    [
        10,
        "&pluscir;"
    ],
    [
        0,
        "&plusacir;"
    ],
    [
        0,
        "&simplus;"
    ],
    [
        0,
        "&plusdu;"
    ],
    [
        0,
        "&plussim;"
    ],
    [
        0,
        "&plustwo;"
    ],
    [
        1,
        "&mcomma;"
    ],
    [
        0,
        "&minusdu;"
    ],
    [
        2,
        "&loplus;"
    ],
    [
        0,
        "&roplus;"
    ],
    [
        0,
        "&Cross;"
    ],
    [
        0,
        "&timesd;"
    ],
    [
        0,
        "&timesbar;"
    ],
    [
        1,
        "&smashp;"
    ],
    [
        0,
        "&lotimes;"
    ],
    [
        0,
        "&rotimes;"
    ],
    [
        0,
        "&otimesas;"
    ],
    [
        0,
        "&Otimes;"
    ],
    [
        0,
        "&odiv;"
    ],
    [
        0,
        "&triplus;"
    ],
    [
        0,
        "&triminus;"
    ],
    [
        0,
        "&tritime;"
    ],
    [
        0,
        "&intprod;"
    ],
    [
        2,
        "&amalg;"
    ],
    [
        0,
        "&capdot;"
    ],
    [
        1,
        "&ncup;"
    ],
    [
        0,
        "&ncap;"
    ],
    [
        0,
        "&capand;"
    ],
    [
        0,
        "&cupor;"
    ],
    [
        0,
        "&cupcap;"
    ],
    [
        0,
        "&capcup;"
    ],
    [
        0,
        "&cupbrcap;"
    ],
    [
        0,
        "&capbrcup;"
    ],
    [
        0,
        "&cupcup;"
    ],
    [
        0,
        "&capcap;"
    ],
    [
        0,
        "&ccups;"
    ],
    [
        0,
        "&ccaps;"
    ],
    [
        2,
        "&ccupssm;"
    ],
    [
        2,
        "&And;"
    ],
    [
        0,
        "&Or;"
    ],
    [
        0,
        "&andand;"
    ],
    [
        0,
        "&oror;"
    ],
    [
        0,
        "&orslope;"
    ],
    [
        0,
        "&andslope;"
    ],
    [
        1,
        "&andv;"
    ],
    [
        0,
        "&orv;"
    ],
    [
        0,
        "&andd;"
    ],
    [
        0,
        "&ord;"
    ],
    [
        1,
        "&wedbar;"
    ],
    [
        6,
        "&sdote;"
    ],
    [
        3,
        "&simdot;"
    ],
    [
        2,
        {
            v: "&congdot;",
            n: 824,
            o: "&ncongdot;"
        }
    ],
    [
        0,
        "&easter;"
    ],
    [
        0,
        "&apacir;"
    ],
    [
        0,
        {
            v: "&apE;",
            n: 824,
            o: "&napE;"
        }
    ],
    [
        0,
        "&eplus;"
    ],
    [
        0,
        "&pluse;"
    ],
    [
        0,
        "&Esim;"
    ],
    [
        0,
        "&Colone;"
    ],
    [
        0,
        "&Equal;"
    ],
    [
        1,
        "&ddotseq;"
    ],
    [
        0,
        "&equivDD;"
    ],
    [
        0,
        "&ltcir;"
    ],
    [
        0,
        "&gtcir;"
    ],
    [
        0,
        "&ltquest;"
    ],
    [
        0,
        "&gtquest;"
    ],
    [
        0,
        {
            v: "&leqslant;",
            n: 824,
            o: "&nleqslant;"
        }
    ],
    [
        0,
        {
            v: "&geqslant;",
            n: 824,
            o: "&ngeqslant;"
        }
    ],
    [
        0,
        "&lesdot;"
    ],
    [
        0,
        "&gesdot;"
    ],
    [
        0,
        "&lesdoto;"
    ],
    [
        0,
        "&gesdoto;"
    ],
    [
        0,
        "&lesdotor;"
    ],
    [
        0,
        "&gesdotol;"
    ],
    [
        0,
        "&lap;"
    ],
    [
        0,
        "&gap;"
    ],
    [
        0,
        "&lne;"
    ],
    [
        0,
        "&gne;"
    ],
    [
        0,
        "&lnap;"
    ],
    [
        0,
        "&gnap;"
    ],
    [
        0,
        "&lEg;"
    ],
    [
        0,
        "&gEl;"
    ],
    [
        0,
        "&lsime;"
    ],
    [
        0,
        "&gsime;"
    ],
    [
        0,
        "&lsimg;"
    ],
    [
        0,
        "&gsiml;"
    ],
    [
        0,
        "&lgE;"
    ],
    [
        0,
        "&glE;"
    ],
    [
        0,
        "&lesges;"
    ],
    [
        0,
        "&gesles;"
    ],
    [
        0,
        "&els;"
    ],
    [
        0,
        "&egs;"
    ],
    [
        0,
        "&elsdot;"
    ],
    [
        0,
        "&egsdot;"
    ],
    [
        0,
        "&el;"
    ],
    [
        0,
        "&eg;"
    ],
    [
        2,
        "&siml;"
    ],
    [
        0,
        "&simg;"
    ],
    [
        0,
        "&simlE;"
    ],
    [
        0,
        "&simgE;"
    ],
    [
        0,
        {
            v: "&LessLess;",
            n: 824,
            o: "&NotNestedLessLess;"
        }
    ],
    [
        0,
        {
            v: "&GreaterGreater;",
            n: 824,
            o: "&NotNestedGreaterGreater;"
        }
    ],
    [
        1,
        "&glj;"
    ],
    [
        0,
        "&gla;"
    ],
    [
        0,
        "&ltcc;"
    ],
    [
        0,
        "&gtcc;"
    ],
    [
        0,
        "&lescc;"
    ],
    [
        0,
        "&gescc;"
    ],
    [
        0,
        "&smt;"
    ],
    [
        0,
        "&lat;"
    ],
    [
        0,
        {
            v: "&smte;",
            n: 65024,
            o: "&smtes;"
        }
    ],
    [
        0,
        {
            v: "&late;",
            n: 65024,
            o: "&lates;"
        }
    ],
    [
        0,
        "&bumpE;"
    ],
    [
        0,
        {
            v: "&PrecedesEqual;",
            n: 824,
            o: "&NotPrecedesEqual;"
        }
    ],
    [
        0,
        {
            v: "&sce;",
            n: 824,
            o: "&NotSucceedsEqual;"
        }
    ],
    [
        2,
        "&prE;"
    ],
    [
        0,
        "&scE;"
    ],
    [
        0,
        "&precneqq;"
    ],
    [
        0,
        "&scnE;"
    ],
    [
        0,
        "&prap;"
    ],
    [
        0,
        "&scap;"
    ],
    [
        0,
        "&precnapprox;"
    ],
    [
        0,
        "&scnap;"
    ],
    [
        0,
        "&Pr;"
    ],
    [
        0,
        "&Sc;"
    ],
    [
        0,
        "&subdot;"
    ],
    [
        0,
        "&supdot;"
    ],
    [
        0,
        "&subplus;"
    ],
    [
        0,
        "&supplus;"
    ],
    [
        0,
        "&submult;"
    ],
    [
        0,
        "&supmult;"
    ],
    [
        0,
        "&subedot;"
    ],
    [
        0,
        "&supedot;"
    ],
    [
        0,
        {
            v: "&subE;",
            n: 824,
            o: "&nsubE;"
        }
    ],
    [
        0,
        {
            v: "&supE;",
            n: 824,
            o: "&nsupE;"
        }
    ],
    [
        0,
        "&subsim;"
    ],
    [
        0,
        "&supsim;"
    ],
    [
        2,
        {
            v: "&subnE;",
            n: 65024,
            o: "&varsubsetneqq;"
        }
    ],
    [
        0,
        {
            v: "&supnE;",
            n: 65024,
            o: "&varsupsetneqq;"
        }
    ],
    [
        2,
        "&csub;"
    ],
    [
        0,
        "&csup;"
    ],
    [
        0,
        "&csube;"
    ],
    [
        0,
        "&csupe;"
    ],
    [
        0,
        "&subsup;"
    ],
    [
        0,
        "&supsub;"
    ],
    [
        0,
        "&subsub;"
    ],
    [
        0,
        "&supsup;"
    ],
    [
        0,
        "&suphsub;"
    ],
    [
        0,
        "&supdsub;"
    ],
    [
        0,
        "&forkv;"
    ],
    [
        0,
        "&topfork;"
    ],
    [
        0,
        "&mlcp;"
    ],
    [
        8,
        "&Dashv;"
    ],
    [
        1,
        "&Vdashl;"
    ],
    [
        0,
        "&Barv;"
    ],
    [
        0,
        "&vBar;"
    ],
    [
        0,
        "&vBarv;"
    ],
    [
        1,
        "&Vbar;"
    ],
    [
        0,
        "&Not;"
    ],
    [
        0,
        "&bNot;"
    ],
    [
        0,
        "&rnmid;"
    ],
    [
        0,
        "&cirmid;"
    ],
    [
        0,
        "&midcir;"
    ],
    [
        0,
        "&topcir;"
    ],
    [
        0,
        "&nhpar;"
    ],
    [
        0,
        "&parsim;"
    ],
    [
        9,
        {
            v: "&parsl;",
            n: 8421,
            o: "&nparsl;"
        }
    ],
    [
        44343,
        {
            n: new Map(/* #__PURE__ */ $f401b2eb8d62a516$var$restoreDiff([
                [
                    56476,
                    "&Ascr;"
                ],
                [
                    1,
                    "&Cscr;"
                ],
                [
                    0,
                    "&Dscr;"
                ],
                [
                    2,
                    "&Gscr;"
                ],
                [
                    2,
                    "&Jscr;"
                ],
                [
                    0,
                    "&Kscr;"
                ],
                [
                    2,
                    "&Nscr;"
                ],
                [
                    0,
                    "&Oscr;"
                ],
                [
                    0,
                    "&Pscr;"
                ],
                [
                    0,
                    "&Qscr;"
                ],
                [
                    1,
                    "&Sscr;"
                ],
                [
                    0,
                    "&Tscr;"
                ],
                [
                    0,
                    "&Uscr;"
                ],
                [
                    0,
                    "&Vscr;"
                ],
                [
                    0,
                    "&Wscr;"
                ],
                [
                    0,
                    "&Xscr;"
                ],
                [
                    0,
                    "&Yscr;"
                ],
                [
                    0,
                    "&Zscr;"
                ],
                [
                    0,
                    "&ascr;"
                ],
                [
                    0,
                    "&bscr;"
                ],
                [
                    0,
                    "&cscr;"
                ],
                [
                    0,
                    "&dscr;"
                ],
                [
                    1,
                    "&fscr;"
                ],
                [
                    1,
                    "&hscr;"
                ],
                [
                    0,
                    "&iscr;"
                ],
                [
                    0,
                    "&jscr;"
                ],
                [
                    0,
                    "&kscr;"
                ],
                [
                    0,
                    "&lscr;"
                ],
                [
                    0,
                    "&mscr;"
                ],
                [
                    0,
                    "&nscr;"
                ],
                [
                    1,
                    "&pscr;"
                ],
                [
                    0,
                    "&qscr;"
                ],
                [
                    0,
                    "&rscr;"
                ],
                [
                    0,
                    "&sscr;"
                ],
                [
                    0,
                    "&tscr;"
                ],
                [
                    0,
                    "&uscr;"
                ],
                [
                    0,
                    "&vscr;"
                ],
                [
                    0,
                    "&wscr;"
                ],
                [
                    0,
                    "&xscr;"
                ],
                [
                    0,
                    "&yscr;"
                ],
                [
                    0,
                    "&zscr;"
                ],
                [
                    52,
                    "&Afr;"
                ],
                [
                    0,
                    "&Bfr;"
                ],
                [
                    1,
                    "&Dfr;"
                ],
                [
                    0,
                    "&Efr;"
                ],
                [
                    0,
                    "&Ffr;"
                ],
                [
                    0,
                    "&Gfr;"
                ],
                [
                    2,
                    "&Jfr;"
                ],
                [
                    0,
                    "&Kfr;"
                ],
                [
                    0,
                    "&Lfr;"
                ],
                [
                    0,
                    "&Mfr;"
                ],
                [
                    0,
                    "&Nfr;"
                ],
                [
                    0,
                    "&Ofr;"
                ],
                [
                    0,
                    "&Pfr;"
                ],
                [
                    0,
                    "&Qfr;"
                ],
                [
                    1,
                    "&Sfr;"
                ],
                [
                    0,
                    "&Tfr;"
                ],
                [
                    0,
                    "&Ufr;"
                ],
                [
                    0,
                    "&Vfr;"
                ],
                [
                    0,
                    "&Wfr;"
                ],
                [
                    0,
                    "&Xfr;"
                ],
                [
                    0,
                    "&Yfr;"
                ],
                [
                    1,
                    "&afr;"
                ],
                [
                    0,
                    "&bfr;"
                ],
                [
                    0,
                    "&cfr;"
                ],
                [
                    0,
                    "&dfr;"
                ],
                [
                    0,
                    "&efr;"
                ],
                [
                    0,
                    "&ffr;"
                ],
                [
                    0,
                    "&gfr;"
                ],
                [
                    0,
                    "&hfr;"
                ],
                [
                    0,
                    "&ifr;"
                ],
                [
                    0,
                    "&jfr;"
                ],
                [
                    0,
                    "&kfr;"
                ],
                [
                    0,
                    "&lfr;"
                ],
                [
                    0,
                    "&mfr;"
                ],
                [
                    0,
                    "&nfr;"
                ],
                [
                    0,
                    "&ofr;"
                ],
                [
                    0,
                    "&pfr;"
                ],
                [
                    0,
                    "&qfr;"
                ],
                [
                    0,
                    "&rfr;"
                ],
                [
                    0,
                    "&sfr;"
                ],
                [
                    0,
                    "&tfr;"
                ],
                [
                    0,
                    "&ufr;"
                ],
                [
                    0,
                    "&vfr;"
                ],
                [
                    0,
                    "&wfr;"
                ],
                [
                    0,
                    "&xfr;"
                ],
                [
                    0,
                    "&yfr;"
                ],
                [
                    0,
                    "&zfr;"
                ],
                [
                    0,
                    "&Aopf;"
                ],
                [
                    0,
                    "&Bopf;"
                ],
                [
                    1,
                    "&Dopf;"
                ],
                [
                    0,
                    "&Eopf;"
                ],
                [
                    0,
                    "&Fopf;"
                ],
                [
                    0,
                    "&Gopf;"
                ],
                [
                    1,
                    "&Iopf;"
                ],
                [
                    0,
                    "&Jopf;"
                ],
                [
                    0,
                    "&Kopf;"
                ],
                [
                    0,
                    "&Lopf;"
                ],
                [
                    0,
                    "&Mopf;"
                ],
                [
                    1,
                    "&Oopf;"
                ],
                [
                    3,
                    "&Sopf;"
                ],
                [
                    0,
                    "&Topf;"
                ],
                [
                    0,
                    "&Uopf;"
                ],
                [
                    0,
                    "&Vopf;"
                ],
                [
                    0,
                    "&Wopf;"
                ],
                [
                    0,
                    "&Xopf;"
                ],
                [
                    0,
                    "&Yopf;"
                ],
                [
                    1,
                    "&aopf;"
                ],
                [
                    0,
                    "&bopf;"
                ],
                [
                    0,
                    "&copf;"
                ],
                [
                    0,
                    "&dopf;"
                ],
                [
                    0,
                    "&eopf;"
                ],
                [
                    0,
                    "&fopf;"
                ],
                [
                    0,
                    "&gopf;"
                ],
                [
                    0,
                    "&hopf;"
                ],
                [
                    0,
                    "&iopf;"
                ],
                [
                    0,
                    "&jopf;"
                ],
                [
                    0,
                    "&kopf;"
                ],
                [
                    0,
                    "&lopf;"
                ],
                [
                    0,
                    "&mopf;"
                ],
                [
                    0,
                    "&nopf;"
                ],
                [
                    0,
                    "&oopf;"
                ],
                [
                    0,
                    "&popf;"
                ],
                [
                    0,
                    "&qopf;"
                ],
                [
                    0,
                    "&ropf;"
                ],
                [
                    0,
                    "&sopf;"
                ],
                [
                    0,
                    "&topf;"
                ],
                [
                    0,
                    "&uopf;"
                ],
                [
                    0,
                    "&vopf;"
                ],
                [
                    0,
                    "&wopf;"
                ],
                [
                    0,
                    "&xopf;"
                ],
                [
                    0,
                    "&yopf;"
                ],
                [
                    0,
                    "&zopf;"
                ]
            ]))
        }
    ],
    [
        8906,
        "&fflig;"
    ],
    [
        0,
        "&filig;"
    ],
    [
        0,
        "&fllig;"
    ],
    [
        0,
        "&ffilig;"
    ],
    [
        0,
        "&ffllig;"
    ]
]));


const $e04d4f945ec0ce29$export$5699810ce3244ab8 = /["&'<>$\x80-\uFFFF]/g;
const $e04d4f945ec0ce29$var$xmlCodeMap = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
const $e04d4f945ec0ce29$export$e02688b8085d016b = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? (str, index)=>str.codePointAt(index) : (c, index)=>(c.charCodeAt(index) & 0xfc00) === 0xd800 ? (c.charCodeAt(index) - 0xd800) * 0x400 + c.charCodeAt(index + 1) - 0xdc00 + 0x10000 : c.charCodeAt(index);
function $e04d4f945ec0ce29$export$18855ec5be97da16(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = $e04d4f945ec0ce29$export$5699810ce3244ab8.exec(str)) !== null){
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = $e04d4f945ec0ce29$var$xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        } else {
            ret += `${str.substring(lastIdx, i)}&#x${$e04d4f945ec0ce29$export$e02688b8085d016b(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = $e04d4f945ec0ce29$export$5699810ce3244ab8.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
const $e04d4f945ec0ce29$export$4e7f196112fea3c5 = $e04d4f945ec0ce29$export$18855ec5be97da16;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */ function $e04d4f945ec0ce29$var$getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while(match = regex.exec(data)){
            if (lastIdx !== match.index) result += data.substring(lastIdx, match.index);
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
const $e04d4f945ec0ce29$export$9e081872deefdcb0 = $e04d4f945ec0ce29$var$getEscaper(/[&<>'"]/g, $e04d4f945ec0ce29$var$xmlCodeMap);
const $e04d4f945ec0ce29$export$30330f3d5eb70e11 = $e04d4f945ec0ce29$var$getEscaper(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const $e04d4f945ec0ce29$export$96e6fc3a139b2555 = $e04d4f945ec0ce29$var$getEscaper(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));


const $14de9f80c8468507$var$htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function $14de9f80c8468507$export$f9d6449b9af28dc1(data) {
    return $14de9f80c8468507$var$encodeHTMLTrieRe($14de9f80c8468507$var$htmlReplacer, data);
}
function $14de9f80c8468507$export$e6e86c76506f1190(data) {
    return $14de9f80c8468507$var$encodeHTMLTrieRe((0, $e04d4f945ec0ce29$export$5699810ce3244ab8), data);
}
function $14de9f80c8468507$var$encodeHTMLTrieRe(regExp, str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = regExp.exec(str)) !== null){
        const i = match.index;
        ret += str.substring(lastIdx, i);
        const char = str.charCodeAt(i);
        let next = (0, $f401b2eb8d62a516$export$2e2bcd8739ae039).get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                const nextChar = str.charCodeAt(i + 1);
                const value = typeof next.n === "number" ? next.n === nextChar ? next.o : undefined : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        } else {
            const cp = (0, $e04d4f945ec0ce29$export$e02688b8085d016b)(str, i);
            ret += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}



var $fe99e9f315328117$export$b8c86583d9718b50;
(function(EntityLevel) {
    /** Support only XML entities. */ EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */ EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})($fe99e9f315328117$export$b8c86583d9718b50 || ($fe99e9f315328117$export$b8c86583d9718b50 = {}));
var $fe99e9f315328117$export$1851b20d614eb756;
(function(EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */ EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */ EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */ EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Text"] = 4] = "Text";
})($fe99e9f315328117$export$1851b20d614eb756 || ($fe99e9f315328117$export$1851b20d614eb756 = {}));
function $fe99e9f315328117$export$2f872c0f2117be69(data, options = $fe99e9f315328117$export$b8c86583d9718b50.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === $fe99e9f315328117$export$b8c86583d9718b50.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return (0, $ba9873426d6195b3$export$f045cb747ce77a19)(data, mode);
    }
    return (0, $ba9873426d6195b3$export$88e3b9643a8bd06e)(data);
}
function $fe99e9f315328117$export$c94669f4c7d36be4(data, options = $fe99e9f315328117$export$b8c86583d9718b50.XML) {
    var _a;
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = (0, $ba9873426d6195b3$export$8c8f129ce60f53c).Strict;
    return $fe99e9f315328117$export$2f872c0f2117be69(data, opts);
}
function $fe99e9f315328117$export$c564cdbbe6da493(data, options = $fe99e9f315328117$export$b8c86583d9718b50.XML) {
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === $fe99e9f315328117$export$1851b20d614eb756.UTF8) return (0, $e04d4f945ec0ce29$export$9e081872deefdcb0)(data);
    if (opts.mode === $fe99e9f315328117$export$1851b20d614eb756.Attribute) return (0, $e04d4f945ec0ce29$export$30330f3d5eb70e11)(data);
    if (opts.mode === $fe99e9f315328117$export$1851b20d614eb756.Text) return (0, $e04d4f945ec0ce29$export$96e6fc3a139b2555)(data);
    if (opts.level === $fe99e9f315328117$export$b8c86583d9718b50.HTML) {
        if (opts.mode === $fe99e9f315328117$export$1851b20d614eb756.ASCII) return (0, $14de9f80c8468507$export$e6e86c76506f1190)(data);
        return (0, $14de9f80c8468507$export$f9d6449b9af28dc1)(data);
    }
    // ASCII and Extensive are equivalent
    return (0, $e04d4f945ec0ce29$export$18855ec5be97da16)(data);
}


function $9dfa02e88e21d57b$var$_class(obj) {
    return Object.prototype.toString.call(obj);
}
function $9dfa02e88e21d57b$export$844ec244b1367d54(obj) {
    return $9dfa02e88e21d57b$var$_class(obj) === "[object String]";
}
const $9dfa02e88e21d57b$var$_hasOwnProperty = Object.prototype.hasOwnProperty;
function $9dfa02e88e21d57b$export$a4f4bb6b1453fff5(object, key) {
    return $9dfa02e88e21d57b$var$_hasOwnProperty.call(object, key);
}
// Merge objects
//
function $9dfa02e88e21d57b$export$e6e34fd1f2686227(obj /* from1, from2, from3, ... */ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
        if (!source) return;
        if (typeof source !== "object") throw new TypeError(source + "must be object");
        Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
        });
    });
    return obj;
}
// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function $9dfa02e88e21d57b$export$f78478f71955b6bc(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}
function $9dfa02e88e21d57b$export$644a8f5b13b2a36d(c) {
    /* eslint no-bitwise:0 */ // broken sequence
    if (c >= 0xD800 && c <= 0xDFFF) return false;
    // never used
    if (c >= 0xFDD0 && c <= 0xFDEF) return false;
    if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) return false;
    // control codes
    if (c >= 0x00 && c <= 0x08) return false;
    if (c === 0x0B) return false;
    if (c >= 0x0E && c <= 0x1F) return false;
    if (c >= 0x7F && c <= 0x9F) return false;
    // out of range
    if (c > 0x10FFFF) return false;
    return true;
}
function $9dfa02e88e21d57b$export$73bfc63873071f74(c) {
    /* eslint no-bitwise:0 */ if (c > 0xffff) {
        c -= 0x10000;
        const surrogate1 = 0xd800 + (c >> 10);
        const surrogate2 = 0xdc00 + (c & 0x3ff);
        return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
}
const $9dfa02e88e21d57b$var$UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
const $9dfa02e88e21d57b$var$ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
const $9dfa02e88e21d57b$var$UNESCAPE_ALL_RE = new RegExp($9dfa02e88e21d57b$var$UNESCAPE_MD_RE.source + "|" + $9dfa02e88e21d57b$var$ENTITY_RE.source, "gi");
const $9dfa02e88e21d57b$var$DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function $9dfa02e88e21d57b$var$replaceEntityPattern(match, name) {
    if (name.charCodeAt(0) === 0x23 /* # */  && $9dfa02e88e21d57b$var$DIGITAL_ENTITY_TEST_RE.test(name)) {
        const code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if ($9dfa02e88e21d57b$export$644a8f5b13b2a36d(code)) return $9dfa02e88e21d57b$export$73bfc63873071f74(code);
        return match;
    }
    const decoded = (0, $ba9873426d6195b3$export$f045cb747ce77a19)(match);
    if (decoded !== match) return decoded;
    return match;
}
/* function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
} */ function $9dfa02e88e21d57b$export$5ccde1ea0c14bb03(str) {
    if (str.indexOf("\\") < 0) return str;
    return str.replace($9dfa02e88e21d57b$var$UNESCAPE_MD_RE, "$1");
}
function $9dfa02e88e21d57b$export$db8a17c6655f7e2c(str) {
    if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) return str;
    return str.replace($9dfa02e88e21d57b$var$UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) return escaped;
        return $9dfa02e88e21d57b$var$replaceEntityPattern(match, entity);
    });
}
const $9dfa02e88e21d57b$var$HTML_ESCAPE_TEST_RE = /[&<>"]/;
const $9dfa02e88e21d57b$var$HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const $9dfa02e88e21d57b$var$HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
};
function $9dfa02e88e21d57b$var$replaceUnsafeChar(ch) {
    return $9dfa02e88e21d57b$var$HTML_REPLACEMENTS[ch];
}
function $9dfa02e88e21d57b$export$4cf11838cdc2a8a8(str) {
    if ($9dfa02e88e21d57b$var$HTML_ESCAPE_TEST_RE.test(str)) return str.replace($9dfa02e88e21d57b$var$HTML_ESCAPE_REPLACE_RE, $9dfa02e88e21d57b$var$replaceUnsafeChar);
    return str;
}
const $9dfa02e88e21d57b$var$REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
function $9dfa02e88e21d57b$export$bc616c8f7dc20d5d(str) {
    return str.replace($9dfa02e88e21d57b$var$REGEXP_ESCAPE_RE, "\\$&");
}
function $9dfa02e88e21d57b$export$1d5ccafae59b4926(code) {
    switch(code){
        case 0x09:
        case 0x20:
            return true;
    }
    return false;
}
// Zs (unicode class) || [\t\f\v\r\n]
function $9dfa02e88e21d57b$export$3c52dd84024ae72c(code) {
    if (code >= 0x2000 && code <= 0x200A) return true;
    switch(code){
        case 0x09:
        case 0x0A:
        case 0x0B:
        case 0x0C:
        case 0x0D:
        case 0x20:
        case 0xA0:
        case 0x1680:
        case 0x202F:
        case 0x205F:
        case 0x3000:
            return true;
    }
    return false;
}
/* eslint-disable max-len */ // Currently without astral characters support.
function $9dfa02e88e21d57b$export$4888a643af800fc1(ch) {
    return $3e2f5caf0974ec84$export$2e2bcd8739ae039.test(ch) || $c3bf9b5a6272aa9e$export$2e2bcd8739ae039.test(ch);
}
// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function $9dfa02e88e21d57b$export$829a0d33ae4e744(ch) {
    switch(ch){
        case 0x21 /* ! */ :
        case 0x22 /* " */ :
        case 0x23 /* # */ :
        case 0x24 /* $ */ :
        case 0x25 /* % */ :
        case 0x26 /* & */ :
        case 0x27 /* ' */ :
        case 0x28 /* ( */ :
        case 0x29 /* ) */ :
        case 0x2A /* * */ :
        case 0x2B /* + */ :
        case 0x2C /* , */ :
        case 0x2D /* - */ :
        case 0x2E /* . */ :
        case 0x2F /* / */ :
        case 0x3A /* : */ :
        case 0x3B /* ; */ :
        case 0x3C /* < */ :
        case 0x3D /* = */ :
        case 0x3E /* > */ :
        case 0x3F /* ? */ :
        case 0x40 /* @ */ :
        case 0x5B /* [ */ :
        case 0x5C /* \ */ :
        case 0x5D /* ] */ :
        case 0x5E /* ^ */ :
        case 0x5F /* _ */ :
        case 0x60 /* ` */ :
        case 0x7B /* { */ :
        case 0x7C /* | */ :
        case 0x7D /* } */ :
        case 0x7E /* ~ */ :
            return true;
        default:
            return false;
    }
}
// Hepler to unify [reference labels].
//
function $9dfa02e88e21d57b$export$20ef46802c8744b(str) {
    // Trim and collapse whitespace
    //
    str = str.trim().replace(/\s+/g, " ");
    // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
    // fixed in v12 (couldn't find any details).
    //
    // So treat this one as a special case
    // (remove this when node v10 is no longer supported).
    //
    if ("\u1E9E".toLowerCase() === "\u1E7E") str = str.replace(/ẞ/g, "\xdf");
    // .toLowerCase().toUpperCase() should get rid of all differences
    // between letter variants.
    //
    // Simple .toLowerCase() doesn't normalize 125 code points correctly,
    // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
    // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
    // uppercased versions).
    //
    // Here's an example showing how it happens. Lets take greek letter omega:
    // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
    //
    // Unicode entries:
    // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
    // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
    // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
    // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
    //
    // Case-insensitive comparison should treat all of them as equivalent.
    //
    // But .toLowerCase() doesn't change ϑ (it's already lowercase),
    // and .toUpperCase() doesn't change ϴ (already uppercase).
    //
    // Applying first lower then upper case normalizes any character:
    // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
    //
    // Note: this is equivalent to unicode case folding; unicode normalization
    // is a different step that is not required here.
    //
    // Final result should be uppercased, because it's later stored in an object
    // (this avoid a conflict with Object.prototype members,
    // most notably, `__proto__`)
    //
    return str.toLowerCase().toUpperCase();
}
// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
const $9dfa02e88e21d57b$export$16c08b91f883959a = {
    mdurl: $12131d9a9914855d$exports,
    ucmicro: $bca49273b8c23865$exports
};


var $a28ed8732285aa35$exports = {};

$parcel$export($a28ed8732285aa35$exports, "parseLinkLabel", function () { return $5fa8e6f03f0106d4$export$2e2bcd8739ae039; });
$parcel$export($a28ed8732285aa35$exports, "parseLinkDestination", function () { return $160eaaf9269c66f6$export$2e2bcd8739ae039; });
$parcel$export($a28ed8732285aa35$exports, "parseLinkTitle", function () { return $ad3213bd27af72dd$export$2e2bcd8739ae039; });
// Just a shortcut for bulk export
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
function $5fa8e6f03f0106d4$export$2e2bcd8739ae039(state, start, disableNested) {
    let level, found, marker, prevPos;
    const max = state.posMax;
    const oldPos = state.pos;
    state.pos = start + 1;
    level = 1;
    while(state.pos < max){
        marker = state.src.charCodeAt(state.pos);
        if (marker === 0x5D /* ] */ ) {
            level--;
            if (level === 0) {
                found = true;
                break;
            }
        }
        prevPos = state.pos;
        state.md.inline.skipToken(state);
        if (marker === 0x5B /* [ */ ) {
            if (prevPos === state.pos - 1) // increase level if we find text `[`, which is not a part of any token
            level++;
            else if (disableNested) {
                state.pos = oldPos;
                return -1;
            }
        }
    }
    let labelEnd = -1;
    if (found) labelEnd = state.pos;
    // restore old state
    state.pos = oldPos;
    return labelEnd;
}


// Parse link destination
//

function $160eaaf9269c66f6$export$2e2bcd8739ae039(str, start, max) {
    let code;
    let pos = start;
    const result = {
        ok: false,
        pos: 0,
        str: ""
    };
    if (str.charCodeAt(pos) === 0x3C /* < */ ) {
        pos++;
        while(pos < max){
            code = str.charCodeAt(pos);
            if (code === 0x0A /* \n */ ) return result;
            if (code === 0x3C /* < */ ) return result;
            if (code === 0x3E /* > */ ) {
                result.pos = pos + 1;
                result.str = (0, $9dfa02e88e21d57b$export$db8a17c6655f7e2c)(str.slice(start + 1, pos));
                result.ok = true;
                return result;
            }
            if (code === 0x5C /* \ */  && pos + 1 < max) {
                pos += 2;
                continue;
            }
            pos++;
        }
        // no closing '>'
        return result;
    }
    // this should be ... } else { ... branch
    let level = 0;
    while(pos < max){
        code = str.charCodeAt(pos);
        if (code === 0x20) break;
        // ascii control characters
        if (code < 0x20 || code === 0x7F) break;
        if (code === 0x5C /* \ */  && pos + 1 < max) {
            if (str.charCodeAt(pos + 1) === 0x20) break;
            pos += 2;
            continue;
        }
        if (code === 0x28 /* ( */ ) {
            level++;
            if (level > 32) return result;
        }
        if (code === 0x29 /* ) */ ) {
            if (level === 0) break;
            level--;
        }
        pos++;
    }
    if (start === pos) return result;
    if (level !== 0) return result;
    result.str = (0, $9dfa02e88e21d57b$export$db8a17c6655f7e2c)(str.slice(start, pos));
    result.pos = pos;
    result.ok = true;
    return result;
}


// Parse link title
//

function $ad3213bd27af72dd$export$2e2bcd8739ae039(str, start, max, prev_state) {
    let code;
    let pos = start;
    const state = {
        // if `true`, this is a valid link title
        ok: false,
        // if `true`, this link can be continued on the next line
        can_continue: false,
        // if `ok`, it's the position of the first character after the closing marker
        pos: 0,
        // if `ok`, it's the unescaped title
        str: "",
        // expected closing marker character code
        marker: 0
    };
    if (prev_state) {
        // this is a continuation of a previous parseLinkTitle call on the next line,
        // used in reference links only
        state.str = prev_state.str;
        state.marker = prev_state.marker;
    } else {
        if (pos >= max) return state;
        let marker = str.charCodeAt(pos);
        if (marker !== 0x22 /* " */  && marker !== 0x27 /* ' */  && marker !== 0x28 /* ( */ ) return state;
        start++;
        pos++;
        // if opening marker is "(", switch it to closing marker ")"
        if (marker === 0x28) marker = 0x29;
        state.marker = marker;
    }
    while(pos < max){
        code = str.charCodeAt(pos);
        if (code === state.marker) {
            state.pos = pos + 1;
            state.str += (0, $9dfa02e88e21d57b$export$db8a17c6655f7e2c)(str.slice(start, pos));
            state.ok = true;
            return state;
        } else if (code === 0x28 /* ( */  && state.marker === 0x29 /* ) */ ) return state;
        else if (code === 0x5C /* \ */  && pos + 1 < max) pos++;
        pos++;
    }
    // no closing marker found, but this link title may continue on the next line (for references)
    state.can_continue = true;
    state.str += (0, $9dfa02e88e21d57b$export$db8a17c6655f7e2c)(str.slice(start, pos));
    return state;
}




/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/ 
const $746cee2f83e00c45$var$default_rules = {};
$746cee2f83e00c45$var$default_rules.code_inline = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    return "<code" + slf.renderAttrs(token) + ">" + (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(token.content) + "</code>";
};
$746cee2f83e00c45$var$default_rules.code_block = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    return "<pre" + slf.renderAttrs(token) + "><code>" + (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(tokens[idx].content) + "</code></pre>\n";
};
$746cee2f83e00c45$var$default_rules.fence = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const info = token.info ? (0, $9dfa02e88e21d57b$export$db8a17c6655f7e2c)(token.info).trim() : "";
    let langName = "";
    let langAttrs = "";
    if (info) {
        const arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
    }
    let highlighted;
    if (options.highlight) highlighted = options.highlight(token.content, langName, langAttrs) || (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(token.content);
    else highlighted = (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(token.content);
    if (highlighted.indexOf("<pre") === 0) return highlighted + "\n";
    // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .deepClone() for token and simplify this part, but
    // now we prefer to keep things local.
    if (info) {
        const i = token.attrIndex("class");
        const tmpAttrs = token.attrs ? token.attrs.slice() : [];
        if (i < 0) tmpAttrs.push([
            "class",
            options.langPrefix + langName
        ]);
        else {
            tmpAttrs[i] = tmpAttrs[i].slice();
            tmpAttrs[i][1] += " " + options.langPrefix + langName;
        }
        // Fake token just to render attributes
        const tmpToken = {
            attrs: tmpAttrs
        };
        return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>\n`;
    }
    return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>\n`;
};
$746cee2f83e00c45$var$default_rules.image = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    // "alt" attr MUST be set, even if empty. Because it's mandatory and
    // should be placed on proper position for tests.
    //
    // Replace content with actual value
    token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
    return slf.renderToken(tokens, idx, options);
};
$746cee2f83e00c45$var$default_rules.hardbreak = function(tokens, idx, options /*, env */ ) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
$746cee2f83e00c45$var$default_rules.softbreak = function(tokens, idx, options /*, env */ ) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
$746cee2f83e00c45$var$default_rules.text = function(tokens, idx /*, options, env */ ) {
    return (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(tokens[idx].content);
};
$746cee2f83e00c45$var$default_rules.html_block = function(tokens, idx /*, options, env */ ) {
    return tokens[idx].content;
};
$746cee2f83e00c45$var$default_rules.html_inline = function(tokens, idx /*, options, env */ ) {
    return tokens[idx].content;
};
/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/ function $746cee2f83e00c45$var$Renderer() {
    /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs)
   * for more details and examples.
   **/ this.rules = (0, $9dfa02e88e21d57b$export$e6e34fd1f2686227)({}, $746cee2f83e00c45$var$default_rules);
}
/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/ $746cee2f83e00c45$var$Renderer.prototype.renderAttrs = function renderAttrs(token) {
    let i, l, result;
    if (!token.attrs) return "";
    result = "";
    for(i = 0, l = token.attrs.length; i < l; i++)result += " " + (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(token.attrs[i][0]) + '="' + (0, $9dfa02e88e21d57b$export$4cf11838cdc2a8a8)(token.attrs[i][1]) + '"';
    return result;
};
/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/ $746cee2f83e00c45$var$Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
    const token = tokens[idx];
    let result = "";
    // Tight list paragraphs
    if (token.hidden) return "";
    // Insert a newline between hidden paragraph and subsequent opening
    // block-level tag.
    //
    // For example, here we should insert a newline before blockquote:
    //  - a
    //    >
    //
    if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) result += "\n";
    // Add token name, e.g. `<img`
    result += (token.nesting === -1 ? "</" : "<") + token.tag;
    // Encode attributes, e.g. `<img src="foo"`
    result += this.renderAttrs(token);
    // Add a slash for self-closing tags, e.g. `<img src="foo" /`
    if (token.nesting === 0 && options.xhtmlOut) result += " /";
    // Check if we need to add a newline after this tag
    let needLf = false;
    if (token.block) {
        needLf = true;
        if (token.nesting === 1) {
            if (idx + 1 < tokens.length) {
                const nextToken = tokens[idx + 1];
                if (nextToken.type === "inline" || nextToken.hidden) // Block-level tag containing an inline tag.
                //
                needLf = false;
                else if (nextToken.nesting === -1 && nextToken.tag === token.tag) // Opening tag + closing tag of the same type. E.g. `<li></li>`.
                //
                needLf = false;
            }
        }
    }
    result += needLf ? ">\n" : ">";
    return result;
};
/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/ $746cee2f83e00c45$var$Renderer.prototype.renderInline = function(tokens, options, env) {
    let result = "";
    const rules = this.rules;
    for(let i = 0, len = tokens.length; i < len; i++){
        const type = tokens[i].type;
        if (typeof rules[type] !== "undefined") result += rules[type](tokens, i, options, env, this);
        else result += this.renderToken(tokens, i, options);
    }
    return result;
};
/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/ $746cee2f83e00c45$var$Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
    let result = "";
    for(let i = 0, len = tokens.length; i < len; i++)switch(tokens[i].type){
        case "text":
            result += tokens[i].content;
            break;
        case "image":
            result += this.renderInlineAsText(tokens[i].children, options, env);
            break;
        case "html_inline":
        case "html_block":
            result += tokens[i].content;
            break;
        case "softbreak":
        case "hardbreak":
            result += "\n";
            break;
        default:
    }
    return result;
};
/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/ $746cee2f83e00c45$var$Renderer.prototype.render = function(tokens, options, env) {
    let result = "";
    const rules = this.rules;
    for(let i = 0, len = tokens.length; i < len; i++){
        const type = tokens[i].type;
        if (type === "inline") result += this.renderInline(tokens[i].children, options, env);
        else if (typeof rules[type] !== "undefined") result += rules[type](tokens, i, options, env, this);
        else result += this.renderToken(tokens, i, options, env);
    }
    return result;
};
var $746cee2f83e00c45$export$2e2bcd8739ae039 = $746cee2f83e00c45$var$Renderer;


/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/ /**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/ /**
 * new Ruler()
 **/ function $26e75965c33dac46$var$Ruler() {
    // List of added rules. Each element is:
    //
    // {
    //   name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ]
    // }
    //
    this.__rules__ = [];
    // Cached rule chains.
    //
    // First level - chain name, '' for default.
    // Second level - diginal anchor for fast filtering by charcodes.
    //
    this.__cache__ = null;
}
// Helper methods, should not be used directly
// Find rule index by name
//
$26e75965c33dac46$var$Ruler.prototype.__find__ = function(name) {
    for(let i = 0; i < this.__rules__.length; i++){
        if (this.__rules__[i].name === name) return i;
    }
    return -1;
};
// Build rules lookup cache
//
$26e75965c33dac46$var$Ruler.prototype.__compile__ = function() {
    const self = this;
    const chains = [
        ""
    ];
    // collect unique names
    self.__rules__.forEach(function(rule) {
        if (!rule.enabled) return;
        rule.alt.forEach(function(altName) {
            if (chains.indexOf(altName) < 0) chains.push(altName);
        });
    });
    self.__cache__ = {};
    chains.forEach(function(chain) {
        self.__cache__[chain] = [];
        self.__rules__.forEach(function(rule) {
            if (!rule.enabled) return;
            if (chain && rule.alt.indexOf(chain) < 0) return;
            self.__cache__[chain].push(rule.fn);
        });
    });
};
/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/ $26e75965c33dac46$var$Ruler.prototype.at = function(name, fn, options) {
    const index = this.__find__(name);
    const opt = options || {};
    if (index === -1) throw new Error("Parser rule not found: " + name);
    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
};
/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/ $26e75965c33dac46$var$Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
    const index = this.__find__(beforeName);
    const opt = options || {};
    if (index === -1) throw new Error("Parser rule not found: " + beforeName);
    this.__rules__.splice(index, 0, {
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
    });
    this.__cache__ = null;
};
/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/ $26e75965c33dac46$var$Ruler.prototype.after = function(afterName, ruleName, fn, options) {
    const index = this.__find__(afterName);
    const opt = options || {};
    if (index === -1) throw new Error("Parser rule not found: " + afterName);
    this.__rules__.splice(index + 1, 0, {
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
    });
    this.__cache__ = null;
};
/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/ $26e75965c33dac46$var$Ruler.prototype.push = function(ruleName, fn, options) {
    const opt = options || {};
    this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn: fn,
        alt: opt.alt || []
    });
    this.__cache__ = null;
};
/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/ $26e75965c33dac46$var$Ruler.prototype.enable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) list = [
        list
    ];
    const result = [];
    // Search by name and enable
    list.forEach(function(name) {
        const idx = this.__find__(name);
        if (idx < 0) {
            if (ignoreInvalid) return;
            throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = true;
        result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
};
/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/ $26e75965c33dac46$var$Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) list = [
        list
    ];
    this.__rules__.forEach(function(rule) {
        rule.enabled = false;
    });
    this.enable(list, ignoreInvalid);
};
/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/ $26e75965c33dac46$var$Ruler.prototype.disable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) list = [
        list
    ];
    const result = [];
    // Search by name and disable
    list.forEach(function(name) {
        const idx = this.__find__(name);
        if (idx < 0) {
            if (ignoreInvalid) return;
            throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = false;
        result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
};
/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/ $26e75965c33dac46$var$Ruler.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) this.__compile__();
    // Chain can be empty, if rules disabled. But we still have to return Array.
    return this.__cache__[chainName] || [];
};
var $26e75965c33dac46$export$2e2bcd8739ae039 = $26e75965c33dac46$var$Ruler;


// Core state object
//
// Token class
/**
 * class Token
 **/ /**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/ function $0db6752754d3e275$var$Token(type, tag, nesting) {
    /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/ this.type = type;
    /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/ this.tag = tag;
    /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/ this.attrs = null;
    /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/ this.map = null;
    /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/ this.nesting = nesting;
    /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/ this.level = 0;
    /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/ this.children = null;
    /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/ this.content = "";
    /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/ this.markup = "";
    /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   * - The string value of the item marker for ordered-list "list_item_open" tokens
   **/ this.info = "";
    /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/ this.meta = null;
    /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/ this.block = false;
    /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/ this.hidden = false;
}
/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/ $0db6752754d3e275$var$Token.prototype.attrIndex = function attrIndex(name) {
    if (!this.attrs) return -1;
    const attrs = this.attrs;
    for(let i = 0, len = attrs.length; i < len; i++){
        if (attrs[i][0] === name) return i;
    }
    return -1;
};
/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/ $0db6752754d3e275$var$Token.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) this.attrs.push(attrData);
    else this.attrs = [
        attrData
    ];
};
/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/ $0db6752754d3e275$var$Token.prototype.attrSet = function attrSet(name, value) {
    const idx = this.attrIndex(name);
    const attrData = [
        name,
        value
    ];
    if (idx < 0) this.attrPush(attrData);
    else this.attrs[idx] = attrData;
};
/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/ $0db6752754d3e275$var$Token.prototype.attrGet = function attrGet(name) {
    const idx = this.attrIndex(name);
    let value = null;
    if (idx >= 0) value = this.attrs[idx][1];
    return value;
};
/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/ $0db6752754d3e275$var$Token.prototype.attrJoin = function attrJoin(name, value) {
    const idx = this.attrIndex(name);
    if (idx < 0) this.attrPush([
        name,
        value
    ]);
    else this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
};
var $0db6752754d3e275$export$2e2bcd8739ae039 = $0db6752754d3e275$var$Token;


function $4e22a418b98387a7$var$StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md // link to parser instance
    ;
}
// re-export Token class to use in core rules
$4e22a418b98387a7$var$StateCore.prototype.Token = (0, $0db6752754d3e275$export$2e2bcd8739ae039);
var $4e22a418b98387a7$export$2e2bcd8739ae039 = $4e22a418b98387a7$var$StateCore;


// Normalize input string
// https://spec.commonmark.org/0.29/#line-ending
const $a800e47c9ee9d127$var$NEWLINES_RE = /\r\n?|\n/g;
const $a800e47c9ee9d127$var$NULL_RE = /\0/g;
function $a800e47c9ee9d127$export$2e2bcd8739ae039(state) {
    let str;
    // Normalize newlines
    str = state.src.replace($a800e47c9ee9d127$var$NEWLINES_RE, "\n");
    // Replace NULL characters
    str = str.replace($a800e47c9ee9d127$var$NULL_RE, "\uFFFD");
    state.src = str;
}


function $09258d2bc41a53f8$export$2e2bcd8739ae039(state) {
    let token;
    if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [
            0,
            1
        ];
        token.children = [];
        state.tokens.push(token);
    } else state.md.block.parse(state.src, state.md, state.env, state.tokens);
}


function $4bc017e5bdded3ae$export$2e2bcd8739ae039(state) {
    const tokens = state.tokens;
    // Parse inlines
    for(let i = 0, l = tokens.length; i < l; i++){
        const tok = tokens[i];
        if (tok.type === "inline") state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
}


// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//

function $391c9efd70fe4730$var$isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
}
function $391c9efd70fe4730$var$isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
}
function $391c9efd70fe4730$export$2e2bcd8739ae039(state) {
    const blockTokens = state.tokens;
    if (!state.md.options.linkify) return;
    for(let j = 0, l = blockTokens.length; j < l; j++){
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) continue;
        let tokens = blockTokens[j].children;
        let htmlLinkLevel = 0;
        // We scan from the end, to keep position when new tags added.
        // Use reversed logic in links start/end match
        for(let i = tokens.length - 1; i >= 0; i--){
            const currentToken = tokens[i];
            // Skip content of markdown links
            if (currentToken.type === "link_close") {
                i--;
                while(tokens[i].level !== currentToken.level && tokens[i].type !== "link_open")i--;
                continue;
            }
            // Skip content of html tag links
            if (currentToken.type === "html_inline") {
                if ($391c9efd70fe4730$var$isLinkOpen(currentToken.content) && htmlLinkLevel > 0) htmlLinkLevel--;
                if ($391c9efd70fe4730$var$isLinkClose(currentToken.content)) htmlLinkLevel++;
            }
            if (htmlLinkLevel > 0) continue;
            if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
                const text = currentToken.content;
                let links = state.md.linkify.match(text);
                // Now split string to nodes
                const nodes = [];
                let level = currentToken.level;
                let lastPos = 0;
                // forbid escape sequence at the start of the string,
                // this avoids http\://example.com/ from being linkified as
                // http:<a href="//example.com/">//example.com/</a>
                if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") links = links.slice(1);
                for(let ln = 0; ln < links.length; ln++){
                    const url = links[ln].url;
                    const fullUrl = state.md.normalizeLink(url);
                    if (!state.md.validateLink(fullUrl)) continue;
                    let urlText = links[ln].text;
                    // Linkifier might send raw hostnames like "example.com", where url
                    // starts with domain name. So we prepend http:// in those cases,
                    // and remove it afterwards.
                    //
                    if (!links[ln].schema) urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
                    else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
                    else urlText = state.md.normalizeLinkText(urlText);
                    const pos = links[ln].index;
                    if (pos > lastPos) {
                        const token = new state.Token("text", "", 0);
                        token.content = text.slice(lastPos, pos);
                        token.level = level;
                        nodes.push(token);
                    }
                    const token_o = new state.Token("link_open", "a", 1);
                    token_o.attrs = [
                        [
                            "href",
                            fullUrl
                        ]
                    ];
                    token_o.level = level++;
                    token_o.markup = "linkify";
                    token_o.info = "auto";
                    nodes.push(token_o);
                    const token_t = new state.Token("text", "", 0);
                    token_t.content = urlText;
                    token_t.level = level;
                    nodes.push(token_t);
                    const token_c = new state.Token("link_close", "a", -1);
                    token_c.level = --level;
                    token_c.markup = "linkify";
                    token_c.info = "auto";
                    nodes.push(token_c);
                    lastPos = links[ln].lastIndex;
                }
                if (lastPos < text.length) {
                    const token = new state.Token("text", "", 0);
                    token.content = text.slice(lastPos);
                    token.level = level;
                    nodes.push(token);
                }
                // replace current node
                blockTokens[j].children = tokens = (0, $9dfa02e88e21d57b$export$f78478f71955b6bc)(tokens, i, nodes);
            }
        }
    }
}


// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4
const $af330f2488e88060$var$RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
const $af330f2488e88060$var$SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
const $af330f2488e88060$var$SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
const $af330f2488e88060$var$SCOPED_ABBR = {
    c: "\xa9",
    r: "\xae",
    tm: "\u2122"
};
function $af330f2488e88060$var$replaceFn(match, name) {
    return $af330f2488e88060$var$SCOPED_ABBR[name.toLowerCase()];
}
function $af330f2488e88060$var$replace_scoped(inlineTokens) {
    let inside_autolink = 0;
    for(let i = inlineTokens.length - 1; i >= 0; i--){
        const token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) token.content = token.content.replace($af330f2488e88060$var$SCOPED_ABBR_RE, $af330f2488e88060$var$replaceFn);
        if (token.type === "link_open" && token.info === "auto") inside_autolink--;
        if (token.type === "link_close" && token.info === "auto") inside_autolink++;
    }
}
function $af330f2488e88060$var$replace_rare(inlineTokens) {
    let inside_autolink = 0;
    for(let i = inlineTokens.length - 1; i >= 0; i--){
        const token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
            if ($af330f2488e88060$var$RARE_RE.test(token.content)) token.content = token.content.replace(/\+-/g, "\xb1")// .., ..., ....... -> …
            // but ?..... & !..... -> ?.. & !..
            .replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",")// em-dash
            .replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014")// en-dash
            .replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
        }
        if (token.type === "link_open" && token.info === "auto") inside_autolink--;
        if (token.type === "link_close" && token.info === "auto") inside_autolink++;
    }
}
function $af330f2488e88060$export$2e2bcd8739ae039(state) {
    let blkIdx;
    if (!state.md.options.typographer) return;
    for(blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--){
        if (state.tokens[blkIdx].type !== "inline") continue;
        if ($af330f2488e88060$var$SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) $af330f2488e88060$var$replace_scoped(state.tokens[blkIdx].children);
        if ($af330f2488e88060$var$RARE_RE.test(state.tokens[blkIdx].content)) $af330f2488e88060$var$replace_rare(state.tokens[blkIdx].children);
    }
}


// Convert straight quotation marks to typographic ones
//

const $763f744d376c0459$var$QUOTE_TEST_RE = /['"]/;
const $763f744d376c0459$var$QUOTE_RE = /['"]/g;
const $763f744d376c0459$var$APOSTROPHE = "\u2019" /* ’ */ ;
function $763f744d376c0459$var$replaceAt(str, index, ch) {
    return str.slice(0, index) + ch + str.slice(index + 1);
}
function $763f744d376c0459$var$process_inlines(tokens, state) {
    let j;
    const stack = [];
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i];
        const thisLevel = tokens[i].level;
        for(j = stack.length - 1; j >= 0; j--){
            if (stack[j].level <= thisLevel) break;
        }
        stack.length = j + 1;
        if (token.type !== "text") continue;
        let text = token.content;
        let pos = 0;
        let max = text.length;
        /* eslint no-labels:0,block-scoped-var:0 */ OUTER: while(pos < max){
            $763f744d376c0459$var$QUOTE_RE.lastIndex = pos;
            const t = $763f744d376c0459$var$QUOTE_RE.exec(text);
            if (!t) break;
            let canOpen = true;
            let canClose = true;
            pos = t.index + 1;
            const isSingle = t[0] === "'";
            // Find previous character,
            // default to space if it's the beginning of the line
            //
            let lastChar = 0x20;
            if (t.index - 1 >= 0) lastChar = text.charCodeAt(t.index - 1);
            else for(j = i - 1; j >= 0; j--){
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break; // lastChar defaults to 0x20
                if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                break;
            }
            // Find next character,
            // default to space if it's the end of the line
            //
            let nextChar = 0x20;
            if (pos < max) nextChar = text.charCodeAt(pos);
            else for(j = i + 1; j < tokens.length; j++){
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break; // nextChar defaults to 0x20
                if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                nextChar = tokens[j].content.charCodeAt(0);
                break;
            }
            const isLastPunctChar = (0, $9dfa02e88e21d57b$export$829a0d33ae4e744)(lastChar) || (0, $9dfa02e88e21d57b$export$4888a643af800fc1)(String.fromCharCode(lastChar));
            const isNextPunctChar = (0, $9dfa02e88e21d57b$export$829a0d33ae4e744)(nextChar) || (0, $9dfa02e88e21d57b$export$4888a643af800fc1)(String.fromCharCode(nextChar));
            const isLastWhiteSpace = (0, $9dfa02e88e21d57b$export$3c52dd84024ae72c)(lastChar);
            const isNextWhiteSpace = (0, $9dfa02e88e21d57b$export$3c52dd84024ae72c)(nextChar);
            if (isNextWhiteSpace) canOpen = false;
            else if (isNextPunctChar) {
                if (!(isLastWhiteSpace || isLastPunctChar)) canOpen = false;
            }
            if (isLastWhiteSpace) canClose = false;
            else if (isLastPunctChar) {
                if (!(isNextWhiteSpace || isNextPunctChar)) canClose = false;
            }
            if (nextChar === 0x22 /* " */  && t[0] === '"') {
                if (lastChar >= 0x30 /* 0 */  && lastChar <= 0x39 /* 9 */ ) // special case: 1"" - count first quote as an inch
                canClose = canOpen = false;
            }
            if (canOpen && canClose) {
                // Replace quotes in the middle of punctuation sequence, but not
                // in the middle of the words, i.e.:
                //
                // 1. foo " bar " baz - not replaced
                // 2. foo-"-bar-"-baz - replaced
                // 3. foo"bar"baz     - not replaced
                //
                canOpen = isLastPunctChar;
                canClose = isNextPunctChar;
            }
            if (!canOpen && !canClose) {
                // middle of word
                if (isSingle) token.content = $763f744d376c0459$var$replaceAt(token.content, t.index, $763f744d376c0459$var$APOSTROPHE);
                continue;
            }
            if (canClose) // this could be a closing quote, rewind the stack to get a match
            for(j = stack.length - 1; j >= 0; j--){
                let item = stack[j];
                if (stack[j].level < thisLevel) break;
                if (item.single === isSingle && stack[j].level === thisLevel) {
                    item = stack[j];
                    let openQuote;
                    let closeQuote;
                    if (isSingle) {
                        openQuote = state.md.options.quotes[2];
                        closeQuote = state.md.options.quotes[3];
                    } else {
                        openQuote = state.md.options.quotes[0];
                        closeQuote = state.md.options.quotes[1];
                    }
                    // replace token.content *before* tokens[item.token].content,
                    // because, if they are pointing at the same token, replaceAt
                    // could mess up indices when quote length != 1
                    token.content = $763f744d376c0459$var$replaceAt(token.content, t.index, closeQuote);
                    tokens[item.token].content = $763f744d376c0459$var$replaceAt(tokens[item.token].content, item.pos, openQuote);
                    pos += closeQuote.length - 1;
                    if (item.token === i) pos += openQuote.length - 1;
                    text = token.content;
                    max = text.length;
                    stack.length = j;
                    continue OUTER;
                }
            }
            if (canOpen) stack.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
            });
            else if (canClose && isSingle) token.content = $763f744d376c0459$var$replaceAt(token.content, t.index, $763f744d376c0459$var$APOSTROPHE);
        }
    }
}
function $763f744d376c0459$export$2e2bcd8739ae039(state) {
    /* eslint max-depth:0 */ if (!state.md.options.typographer) return;
    for(let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--){
        if (state.tokens[blkIdx].type !== "inline" || !$763f744d376c0459$var$QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) continue;
        $763f744d376c0459$var$process_inlines(state.tokens[blkIdx].children, state);
    }
}


// Join raw text tokens with the rest of the text
//
// This is set as a separate rule to provide an opportunity for plugins
// to run text replacements after text join, but before escape join.
//
// For example, `\:)` shouldn't be replaced with an emoji.
//
function $dd2f69f3c02e06da$export$2e2bcd8739ae039(state) {
    let curr, last;
    const blockTokens = state.tokens;
    const l = blockTokens.length;
    for(let j = 0; j < l; j++){
        if (blockTokens[j].type !== "inline") continue;
        const tokens = blockTokens[j].children;
        const max = tokens.length;
        for(curr = 0; curr < max; curr++)if (tokens[curr].type === "text_special") tokens[curr].type = "text";
        for(curr = last = 0; curr < max; curr++)if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        else {
            if (curr !== last) tokens[last] = tokens[curr];
            last++;
        }
        if (curr !== last) tokens.length = last;
    }
}


const $2b77d9b76040af7b$var$_rules = [
    [
        "normalize",
        (0, $a800e47c9ee9d127$export$2e2bcd8739ae039)
    ],
    [
        "block",
        (0, $09258d2bc41a53f8$export$2e2bcd8739ae039)
    ],
    [
        "inline",
        (0, $4bc017e5bdded3ae$export$2e2bcd8739ae039)
    ],
    [
        "linkify",
        (0, $391c9efd70fe4730$export$2e2bcd8739ae039)
    ],
    [
        "replacements",
        (0, $af330f2488e88060$export$2e2bcd8739ae039)
    ],
    [
        "smartquotes",
        (0, $763f744d376c0459$export$2e2bcd8739ae039)
    ],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    [
        "text_join",
        (0, $dd2f69f3c02e06da$export$2e2bcd8739ae039)
    ]
];
/**
 * new Core()
 **/ function $2b77d9b76040af7b$var$Core() {
    /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/ this.ruler = new (0, $26e75965c33dac46$export$2e2bcd8739ae039)();
    for(let i = 0; i < $2b77d9b76040af7b$var$_rules.length; i++)this.ruler.push($2b77d9b76040af7b$var$_rules[i][0], $2b77d9b76040af7b$var$_rules[i][1]);
}
/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/ $2b77d9b76040af7b$var$Core.prototype.process = function(state) {
    const rules = this.ruler.getRules("");
    for(let i = 0, l = rules.length; i < l; i++)rules[i](state);
};
$2b77d9b76040af7b$var$Core.prototype.State = (0, $4e22a418b98387a7$export$2e2bcd8739ae039);
var $2b77d9b76040af7b$export$2e2bcd8739ae039 = $2b77d9b76040af7b$var$Core;


/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/ 
// Parser state class


function $ce0f69e60f0d7b75$var$StateBlock(src, md, env, tokens) {
    this.src = src;
    // link to parser instance
    this.md = md;
    this.env = env;
    //
    // Internal state vartiables
    //
    this.tokens = tokens;
    this.bMarks = [] // line begin offsets for fast jumps
    ;
    this.eMarks = [] // line end offsets for fast jumps
    ;
    this.tShift = [] // offsets of the first non-space characters (tabs not expanded)
    ;
    this.sCount = [] // indents for each line (tabs expanded)
    ;
    // An amount of virtual spaces (tabs expanded) between beginning
    // of each line (bMarks) and real beginning of that line.
    //
    // It exists only as a hack because blockquotes override bMarks
    // losing information in the process.
    //
    // It's used only when expanding tabs, you can think about it as
    // an initial tab length, e.g. bsCount=21 applied to string `\t123`
    // means first tab should be expanded to 4-21%4 === 3 spaces.
    //
    this.bsCount = [];
    // block parser variables
    // required block content indent (for example, if we are
    // inside a list, it would be positioned after list marker)
    this.blkIndent = 0;
    this.line = 0 // line index in src
    ;
    this.lineMax = 0 // lines count
    ;
    this.tight = false // loose/tight mode for lists
    ;
    this.ddIndent = -1 // indent of the current dd block (-1 if there isn't any)
    ;
    this.listIndent = -1 // indent of the current list block (-1 if there isn't any)
    ;
    // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
    // used in lists to determine if they interrupt a paragraph
    this.parentType = "root";
    this.level = 0;
    // Create caches
    // Generate markers.
    const s = this.src;
    for(let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++){
        const ch = s.charCodeAt(pos);
        if (!indent_found) {
            if ((0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) {
                indent++;
                if (ch === 0x09) offset += 4 - offset % 4;
                else offset++;
                continue;
            } else indent_found = true;
        }
        if (ch === 0x0A || pos === len - 1) {
            if (ch !== 0x0A) pos++;
            this.bMarks.push(start);
            this.eMarks.push(pos);
            this.tShift.push(indent);
            this.sCount.push(offset);
            this.bsCount.push(0);
            indent_found = false;
            indent = 0;
            offset = 0;
            start = pos + 1;
        }
    }
    // Push fake entry to simplify cache bounds checks
    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1 // don't count last fake line
    ;
}
// Push new token to "stream".
//
$ce0f69e60f0d7b75$var$StateBlock.prototype.push = function(type, tag, nesting) {
    const token = new (0, $0db6752754d3e275$export$2e2bcd8739ae039)(type, tag, nesting);
    token.block = true;
    if (nesting < 0) this.level-- // closing tag
    ;
    token.level = this.level;
    if (nesting > 0) this.level++ // opening tag
    ;
    this.tokens.push(token);
    return token;
};
$ce0f69e60f0d7b75$var$StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
$ce0f69e60f0d7b75$var$StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for(let max = this.lineMax; from < max; from++){
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) break;
    }
    return from;
};
// Skip spaces from given position.
$ce0f69e60f0d7b75$var$StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    for(let max = this.src.length; pos < max; pos++){
        const ch = this.src.charCodeAt(pos);
        if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) break;
    }
    return pos;
};
// Skip spaces from given position in reverse.
$ce0f69e60f0d7b75$var$StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) return pos;
    while(pos > min){
        if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(this.src.charCodeAt(--pos))) return pos + 1;
    }
    return pos;
};
// Skip char codes from given position
$ce0f69e60f0d7b75$var$StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for(let max = this.src.length; pos < max; pos++){
        if (this.src.charCodeAt(pos) !== code) break;
    }
    return pos;
};
// Skip char codes reverse from given position - 1
$ce0f69e60f0d7b75$var$StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) return pos;
    while(pos > min){
        if (code !== this.src.charCodeAt(--pos)) return pos + 1;
    }
    return pos;
};
// cut lines range from source.
$ce0f69e60f0d7b75$var$StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    if (begin >= end) return "";
    const queue = new Array(end - begin);
    for(let i = 0, line = begin; line < end; line++, i++){
        let lineIndent = 0;
        const lineStart = this.bMarks[line];
        let first = lineStart;
        let last;
        if (line + 1 < end || keepLastLF) // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
        else last = this.eMarks[line];
        while(first < last && lineIndent < indent){
            const ch = this.src.charCodeAt(first);
            if ((0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) {
                if (ch === 0x09) lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
                else lineIndent++;
            } else if (first - lineStart < this.tShift[line]) // patched tShift masked characters to look like spaces (blockquotes, list markers)
            lineIndent++;
            else break;
            first++;
        }
        if (lineIndent > indent) // partially expanding tabs in code blocks, e.g '\t\tfoobar'
        // with indent=2 becomes '  \tfoobar'
        queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
        else queue[i] = this.src.slice(first, last);
    }
    return queue.join("");
};
// re-export Token class to use in block rules
$ce0f69e60f0d7b75$var$StateBlock.prototype.Token = (0, $0db6752754d3e275$export$2e2bcd8739ae039);
var $ce0f69e60f0d7b75$export$2e2bcd8739ae039 = $ce0f69e60f0d7b75$var$StateBlock;


// GFM table, https://github.github.com/gfm/#tables-extension-

// Limit the amount of empty autocompleted cells in a table,
// see https://github.com/markdown-it/markdown-it/issues/1000,
//
// Both pulldown-cmark and commonmark-hs limit the number of cells this way to ~200k.
// We set it to 65k, which can expand user input by a factor of x370
// (256x256 square is 1.8kB expanded into 650kB).
const $5b162802d0d1c4f9$var$MAX_AUTOCOMPLETED_CELLS = 0x10000;
function $5b162802d0d1c4f9$var$getLine(state, line) {
    const pos = state.bMarks[line] + state.tShift[line];
    const max = state.eMarks[line];
    return state.src.slice(pos, max);
}
function $5b162802d0d1c4f9$var$escapedSplit(str) {
    const result = [];
    const max = str.length;
    let pos = 0;
    let ch = str.charCodeAt(pos);
    let isEscaped = false;
    let lastPos = 0;
    let current = "";
    while(pos < max){
        if (ch === 0x7c /* | */ ) {
            if (!isEscaped) {
                // pipe separating cells, '|'
                result.push(current + str.substring(lastPos, pos));
                current = "";
                lastPos = pos + 1;
            } else {
                // escaped pipe, '\|'
                current += str.substring(lastPos, pos - 1);
                lastPos = pos;
            }
        }
        isEscaped = ch === 0x5c /* \ */ ;
        pos++;
        ch = str.charCodeAt(pos);
    }
    result.push(current + str.substring(lastPos));
    return result;
}
function $5b162802d0d1c4f9$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    // should have at least two lines
    if (startLine + 2 > endLine) return false;
    let nextLine = startLine + 1;
    if (state.sCount[nextLine] < state.blkIndent) return false;
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
    // first character of the second line should be '|', '-', ':',
    // and no other characters are allowed but spaces;
    // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp
    let pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) return false;
    const firstCh = state.src.charCodeAt(pos++);
    if (firstCh !== 0x7C /* | */  && firstCh !== 0x2D /* - */  && firstCh !== 0x3A /* : */ ) return false;
    if (pos >= state.eMarks[nextLine]) return false;
    const secondCh = state.src.charCodeAt(pos++);
    if (secondCh !== 0x7C /* | */  && secondCh !== 0x2D /* - */  && secondCh !== 0x3A /* : */  && !(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(secondCh)) return false;
    // if first character is '-', then second character must not be a space
    // (due to parsing ambiguity with list)
    if (firstCh === 0x2D /* - */  && (0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(secondCh)) return false;
    while(pos < state.eMarks[nextLine]){
        const ch = state.src.charCodeAt(pos);
        if (ch !== 0x7C /* | */  && ch !== 0x2D /* - */  && ch !== 0x3A /* : */  && !(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) return false;
        pos++;
    }
    let lineText = $5b162802d0d1c4f9$var$getLine(state, startLine + 1);
    let columns = lineText.split("|");
    const aligns = [];
    for(let i = 0; i < columns.length; i++){
        const t = columns[i].trim();
        if (!t) {
            // allow empty columns before and after table, but not in between columns;
            // e.g. allow ` |---| `, disallow ` ---||--- `
            if (i === 0 || i === columns.length - 1) continue;
            else return false;
        }
        if (!/^:?-+:?$/.test(t)) return false;
        if (t.charCodeAt(t.length - 1) === 0x3A /* : */ ) aligns.push(t.charCodeAt(0) === 0x3A /* : */  ? "center" : "right");
        else if (t.charCodeAt(0) === 0x3A /* : */ ) aligns.push("left");
        else aligns.push("");
    }
    lineText = $5b162802d0d1c4f9$var$getLine(state, startLine).trim();
    if (lineText.indexOf("|") === -1) return false;
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    columns = $5b162802d0d1c4f9$var$escapedSplit(lineText);
    if (columns.length && columns[0] === "") columns.shift();
    if (columns.length && columns[columns.length - 1] === "") columns.pop();
    // header row will define an amount of columns in the entire table,
    // and align row should be exactly the same (the rest of the rows can differ)
    const columnCount = columns.length;
    if (columnCount === 0 || columnCount !== aligns.length) return false;
    if (silent) return true;
    const oldParentType = state.parentType;
    state.parentType = "table";
    // use 'blockquote' lists for termination because it's
    // the most similar to tables
    const terminatorRules = state.md.block.ruler.getRules("blockquote");
    const token_to = state.push("table_open", "table", 1);
    const tableLines = [
        startLine,
        0
    ];
    token_to.map = tableLines;
    const token_tho = state.push("thead_open", "thead", 1);
    token_tho.map = [
        startLine,
        startLine + 1
    ];
    const token_htro = state.push("tr_open", "tr", 1);
    token_htro.map = [
        startLine,
        startLine + 1
    ];
    for(let i = 0; i < columns.length; i++){
        const token_ho = state.push("th_open", "th", 1);
        if (aligns[i]) token_ho.attrs = [
            [
                "style",
                "text-align:" + aligns[i]
            ]
        ];
        const token_il = state.push("inline", "", 0);
        token_il.content = columns[i].trim();
        token_il.children = [];
        state.push("th_close", "th", -1);
    }
    state.push("tr_close", "tr", -1);
    state.push("thead_close", "thead", -1);
    let tbodyLines;
    let autocompletedCells = 0;
    for(nextLine = startLine + 2; nextLine < endLine; nextLine++){
        if (state.sCount[nextLine] < state.blkIndent) break;
        let terminate = false;
        for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
        }
        if (terminate) break;
        lineText = $5b162802d0d1c4f9$var$getLine(state, nextLine).trim();
        if (!lineText) break;
        if (state.sCount[nextLine] - state.blkIndent >= 4) break;
        columns = $5b162802d0d1c4f9$var$escapedSplit(lineText);
        if (columns.length && columns[0] === "") columns.shift();
        if (columns.length && columns[columns.length - 1] === "") columns.pop();
        // note: autocomplete count can be negative if user specifies more columns than header,
        // but that does not affect intended use (which is limiting expansion)
        autocompletedCells += columnCount - columns.length;
        if (autocompletedCells > $5b162802d0d1c4f9$var$MAX_AUTOCOMPLETED_CELLS) break;
        if (nextLine === startLine + 2) {
            const token_tbo = state.push("tbody_open", "tbody", 1);
            token_tbo.map = tbodyLines = [
                startLine + 2,
                0
            ];
        }
        const token_tro = state.push("tr_open", "tr", 1);
        token_tro.map = [
            nextLine,
            nextLine + 1
        ];
        for(let i = 0; i < columnCount; i++){
            const token_tdo = state.push("td_open", "td", 1);
            if (aligns[i]) token_tdo.attrs = [
                [
                    "style",
                    "text-align:" + aligns[i]
                ]
            ];
            const token_il = state.push("inline", "", 0);
            token_il.content = columns[i] ? columns[i].trim() : "";
            token_il.children = [];
            state.push("td_close", "td", -1);
        }
        state.push("tr_close", "tr", -1);
    }
    if (tbodyLines) {
        state.push("tbody_close", "tbody", -1);
        tbodyLines[1] = nextLine;
    }
    state.push("table_close", "table", -1);
    tableLines[1] = nextLine;
    state.parentType = oldParentType;
    state.line = nextLine;
    return true;
}


// Code block (4 spaces padded)
function $7c3c4a845642ff65$export$2e2bcd8739ae039(state, startLine, endLine /*, silent */ ) {
    if (state.sCount[startLine] - state.blkIndent < 4) return false;
    let nextLine = startLine + 1;
    let last = nextLine;
    while(nextLine < endLine){
        if (state.isEmpty(nextLine)) {
            nextLine++;
            continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
            nextLine++;
            last = nextLine;
            continue;
        }
        break;
    }
    state.line = last;
    const token = state.push("code_block", "code", 0);
    token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
    token.map = [
        startLine,
        state.line
    ];
    return true;
}


// fences (``` lang, ~~~ lang)
function $29b1b3851218928e$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    if (pos + 3 > max) return false;
    const marker = state.src.charCodeAt(pos);
    if (marker !== 0x7E /* ~ */  && marker !== 0x60 /* ` */ ) return false;
    // scan marker length
    let mem = pos;
    pos = state.skipChars(pos, marker);
    let len = pos - mem;
    if (len < 3) return false;
    const markup = state.src.slice(mem, pos);
    const params = state.src.slice(pos, max);
    if (marker === 0x60 /* ` */ ) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) return false;
    }
    // Since start is found, we can report success here in validation mode
    if (silent) return true;
    // search end of block
    let nextLine = startLine;
    let haveEndMarker = false;
    for(;;){
        nextLine++;
        if (nextLine >= endLine) break;
        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max && state.sCount[nextLine] < state.blkIndent) break;
        if (state.src.charCodeAt(pos) !== marker) continue;
        if (state.sCount[nextLine] - state.blkIndent >= 4) continue;
        pos = state.skipChars(pos, marker);
        // closing code fence must be at least as long as the opening one
        if (pos - mem < len) continue;
        // make sure tail has spaces only
        pos = state.skipSpaces(pos);
        if (pos < max) continue;
        haveEndMarker = true;
        break;
    }
    // If a fence has heading spaces, they should be removed from its inner block
    len = state.sCount[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    const token = state.push("fence", "code", 0);
    token.info = params;
    token.content = state.getLines(startLine + 1, nextLine, len, true);
    token.markup = markup;
    token.map = [
        startLine,
        state.line
    ];
    return true;
}


// Block quotes

function $185b298486586765$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    const oldLineMax = state.lineMax;
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    // check the block quote marker
    if (state.src.charCodeAt(pos) !== 0x3E /* > */ ) return false;
    // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode
    if (silent) return true;
    const oldBMarks = [];
    const oldBSCount = [];
    const oldSCount = [];
    const oldTShift = [];
    const terminatorRules = state.md.block.ruler.getRules("blockquote");
    const oldParentType = state.parentType;
    state.parentType = "blockquote";
    let lastLineEmpty = false;
    let nextLine;
    // Search the end of the block
    //
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    //
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag:
    //     ```
    //     > test
    //      - - -
    //     ```
    for(nextLine = startLine; nextLine < endLine; nextLine++){
        // check if it's outdented, i.e. it's inside list item and indented
        // less than said list item:
        //
        // ```
        // 1. anything
        //    > current blockquote
        // 2. checking this line
        // ```
        const isOutdented = state.sCount[nextLine] < state.blkIndent;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos >= max) break;
        if (state.src.charCodeAt(pos++) === 0x3E /* > */  && !isOutdented) {
            // This line is inside the blockquote.
            // set offset past spaces and ">"
            let initial = state.sCount[nextLine] + 1;
            let spaceAfterMarker;
            let adjustTab;
            // skip one optional space after '>'
            if (state.src.charCodeAt(pos) === 0x20 /* space */ ) {
                // ' >   test '
                //     ^ -- position start of line here:
                pos++;
                initial++;
                adjustTab = false;
                spaceAfterMarker = true;
            } else if (state.src.charCodeAt(pos) === 0x09 /* tab */ ) {
                spaceAfterMarker = true;
                if ((state.bsCount[nextLine] + initial) % 4 === 3) {
                    // '  >\t  test '
                    //       ^ -- position start of line here (tab has width===1)
                    pos++;
                    initial++;
                    adjustTab = false;
                } else // ' >\t  test '
                //    ^ -- position start of line here + shift bsCount slightly
                //         to make extra space appear
                adjustTab = true;
            } else spaceAfterMarker = false;
            let offset = initial;
            oldBMarks.push(state.bMarks[nextLine]);
            state.bMarks[nextLine] = pos;
            while(pos < max){
                const ch = state.src.charCodeAt(pos);
                if ((0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) {
                    if (ch === 0x09) offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
                    else offset++;
                } else break;
                pos++;
            }
            lastLineEmpty = pos >= max;
            oldBSCount.push(state.bsCount[nextLine]);
            state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] = offset - initial;
            oldTShift.push(state.tShift[nextLine]);
            state.tShift[nextLine] = pos - state.bMarks[nextLine];
            continue;
        }
        // Case 2: line is not inside the blockquote, and the last line was empty.
        if (lastLineEmpty) break;
        // Case 3: another tag found.
        let terminate = false;
        for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
        }
        if (terminate) {
            // Quirk to enforce "hard termination mode" for paragraphs;
            // normally if you call `tokenize(state, startLine, nextLine)`,
            // paragraphs will look below nextLine for paragraph continuation,
            // but if blockquote is terminated by another tag, they shouldn't
            state.lineMax = nextLine;
            if (state.blkIndent !== 0) {
                // state.blkIndent was non-zero, we now set it to zero,
                // so we need to re-calculate all offsets to appear as
                // if indent wasn't changed
                oldBMarks.push(state.bMarks[nextLine]);
                oldBSCount.push(state.bsCount[nextLine]);
                oldTShift.push(state.tShift[nextLine]);
                oldSCount.push(state.sCount[nextLine]);
                state.sCount[nextLine] -= state.blkIndent;
            }
            break;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        // A negative indentation means that this is a paragraph continuation
        //
        state.sCount[nextLine] = -1;
    }
    const oldIndent = state.blkIndent;
    state.blkIndent = 0;
    const token_o = state.push("blockquote_open", "blockquote", 1);
    token_o.markup = ">";
    const lines = [
        startLine,
        0
    ];
    token_o.map = lines;
    state.md.block.tokenize(state, startLine, nextLine);
    const token_c = state.push("blockquote_close", "blockquote", -1);
    token_c.markup = ">";
    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line;
    // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.
    for(let i = 0; i < oldTShift.length; i++){
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
        state.bsCount[i + startLine] = oldBSCount[i];
    }
    state.blkIndent = oldIndent;
    return true;
}


// Horizontal rule

function $a40c46f621dc0ac2$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    const max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    const marker = state.src.charCodeAt(pos++);
    // Check hr marker
    if (marker !== 0x2A /* * */  && marker !== 0x2D /* - */  && marker !== 0x5F /* _ */ ) return false;
    // markers can be mixed with spaces, but there should be at least 3 of them
    let cnt = 1;
    while(pos < max){
        const ch = state.src.charCodeAt(pos++);
        if (ch !== marker && !(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) return false;
        if (ch === marker) cnt++;
    }
    if (cnt < 3) return false;
    if (silent) return true;
    state.line = startLine + 1;
    const token = state.push("hr", "hr", 0);
    token.map = [
        startLine,
        state.line
    ];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
    return true;
}


// Lists

// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function $14d00ae63a754984$var$skipBulletListMarker(state, startLine) {
    const max = state.eMarks[startLine];
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    const marker = state.src.charCodeAt(pos++);
    // Check bullet
    if (marker !== 0x2A /* * */  && marker !== 0x2D /* - */  && marker !== 0x2B /* + */ ) return -1;
    if (pos < max) {
        const ch = state.src.charCodeAt(pos);
        if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) // " -test " - is not a list item
        return -1;
    }
    return pos;
}
// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function $14d00ae63a754984$var$skipOrderedListMarker(state, startLine) {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    let pos = start;
    // List marker should have at least 2 chars (digit + dot)
    if (pos + 1 >= max) return -1;
    let ch = state.src.charCodeAt(pos++);
    if (ch < 0x30 /* 0 */  || ch > 0x39 /* 9 */ ) return -1;
    for(;;){
        // EOL -> fail
        if (pos >= max) return -1;
        ch = state.src.charCodeAt(pos++);
        if (ch >= 0x30 /* 0 */  && ch <= 0x39 /* 9 */ ) {
            // List marker should have no more than 9 digits
            // (prevents integer overflow in browsers)
            if (pos - start >= 10) return -1;
            continue;
        }
        // found valid marker
        if (ch === 0x29 /* ) */  || ch === 0x2e /* . */ ) break;
        return -1;
    }
    if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) // " 1.test " - is not a list item
        return -1;
    }
    return pos;
}
function $14d00ae63a754984$var$markTightParagraphs(state, idx) {
    const level = state.level + 2;
    for(let i = idx + 2, l = state.tokens.length - 2; i < l; i++)if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
    }
}
function $14d00ae63a754984$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    let max, pos, start, token;
    let nextLine = startLine;
    let tight = true;
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
    // Special case:
    //  - item 1
    //   - item 2
    //    - item 3
    //     - item 4
    //      - this one is a paragraph continuation
    if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) return false;
    let isTerminatingParagraph = false;
    // limit conditions when list can interrupt
    // a paragraph (validation mode only)
    if (silent && state.parentType === "paragraph") // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    {
        if (state.sCount[nextLine] >= state.blkIndent) isTerminatingParagraph = true;
    }
    // Detect list type and position after marker
    let isOrdered;
    let markerValue;
    let posAfterMarker;
    if ((posAfterMarker = $14d00ae63a754984$var$skipOrderedListMarker(state, nextLine)) >= 0) {
        isOrdered = true;
        start = state.bMarks[nextLine] + state.tShift[nextLine];
        markerValue = Number(state.src.slice(start, posAfterMarker - 1));
        // If we're starting a new ordered list right after
        // a paragraph, it should start with 1.
        if (isTerminatingParagraph && markerValue !== 1) return false;
    } else if ((posAfterMarker = $14d00ae63a754984$var$skipBulletListMarker(state, nextLine)) >= 0) isOrdered = false;
    else return false;
    // If we're starting a new unordered list right after
    // a paragraph, first line should not be empty.
    if (isTerminatingParagraph) {
        if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
    }
    // For validation mode we can terminate immediately
    if (silent) return true;
    // We should terminate list on style change. Remember first one to compare.
    const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
    // Start list
    const listTokIdx = state.tokens.length;
    if (isOrdered) {
        token = state.push("ordered_list_open", "ol", 1);
        if (markerValue !== 1) token.attrs = [
            [
                "start",
                markerValue
            ]
        ];
    } else token = state.push("bullet_list_open", "ul", 1);
    const listLines = [
        nextLine,
        0
    ];
    token.map = listLines;
    token.markup = String.fromCharCode(markerCharCode);
    //
    // Iterate list items
    //
    let prevEmptyEnd = false;
    const terminatorRules = state.md.block.ruler.getRules("list");
    const oldParentType = state.parentType;
    state.parentType = "list";
    while(nextLine < endLine){
        pos = posAfterMarker;
        max = state.eMarks[nextLine];
        const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
        let offset = initial;
        while(pos < max){
            const ch = state.src.charCodeAt(pos);
            if (ch === 0x09) offset += 4 - (offset + state.bsCount[nextLine]) % 4;
            else if (ch === 0x20) offset++;
            else break;
            pos++;
        }
        const contentStart = pos;
        let indentAfterMarker;
        if (contentStart >= max) // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
        else indentAfterMarker = offset - initial;
        // If we have more than 4 spaces, the indent is 1
        // (the rest is just indented code block)
        if (indentAfterMarker > 4) indentAfterMarker = 1;
        // "  -  test"
        //  ^^^^^ - calculating total length of this thing
        const indent = initial + indentAfterMarker;
        // Run subparser & write tokens
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        const itemLines = [
            nextLine,
            0
        ];
        token.map = itemLines;
        if (isOrdered) token.info = state.src.slice(start, posAfterMarker - 1);
        // change current state, then restore it after parser subcall
        const oldTight = state.tight;
        const oldTShift = state.tShift[nextLine];
        const oldSCount = state.sCount[nextLine];
        //  - example list
        // ^ listIndent position will be here
        //   ^ blkIndent position will be here
        //
        const oldListIndent = state.listIndent;
        state.listIndent = state.blkIndent;
        state.blkIndent = indent;
        state.tight = true;
        state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
        state.sCount[nextLine] = offset;
        if (contentStart >= max && state.isEmpty(nextLine + 1)) // workaround for this case
        // (list item is empty, list terminates before "foo"):
        // ~~~~~~~~
        //   -
        //
        //     foo
        // ~~~~~~~~
        state.line = Math.min(state.line + 2, endLine);
        else state.md.block.tokenize(state, nextLine, endLine, true);
        // If any of list item is tight, mark list as tight
        if (!state.tight || prevEmptyEnd) tight = false;
        // Item become loose if finish with empty line,
        // but we should filter last element, because it means list finish
        prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = state.listIndent;
        state.listIndent = oldListIndent;
        state.tShift[nextLine] = oldTShift;
        state.sCount[nextLine] = oldSCount;
        state.tight = oldTight;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = state.line;
        itemLines[1] = nextLine;
        if (nextLine >= endLine) break;
        //
        // Try to check if list is terminated or continued.
        //
        if (state.sCount[nextLine] < state.blkIndent) break;
        // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[nextLine] - state.blkIndent >= 4) break;
        // fail if terminating block found
        let terminate = false;
        for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
        }
        if (terminate) break;
        // fail if list has another type
        if (isOrdered) {
            posAfterMarker = $14d00ae63a754984$var$skipOrderedListMarker(state, nextLine);
            if (posAfterMarker < 0) break;
            start = state.bMarks[nextLine] + state.tShift[nextLine];
        } else {
            posAfterMarker = $14d00ae63a754984$var$skipBulletListMarker(state, nextLine);
            if (posAfterMarker < 0) break;
        }
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) break;
    }
    // Finalize list
    if (isOrdered) token = state.push("ordered_list_close", "ol", -1);
    else token = state.push("bullet_list_close", "ul", -1);
    token.markup = String.fromCharCode(markerCharCode);
    listLines[1] = nextLine;
    state.line = nextLine;
    state.parentType = oldParentType;
    // mark paragraphs tight if needed
    if (tight) $14d00ae63a754984$var$markTightParagraphs(state, listTokIdx);
    return true;
}



function $58d9098dc9e3b526$export$2e2bcd8739ae039(state, startLine, _endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    let nextLine = startLine + 1;
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    if (state.src.charCodeAt(pos) !== 0x5B /* [ */ ) return false;
    function getNextLine(nextLine) {
        const endLine = state.lineMax;
        if (nextLine >= endLine || state.isEmpty(nextLine)) // empty line or end of input
        return null;
        let isContinuation = false;
        // this would be a code block normally, but after paragraph
        // it's considered a lazy continuation regardless of what's there
        if (state.sCount[nextLine] - state.blkIndent > 3) isContinuation = true;
        // quirk for blockquotes, this line should already be checked by that rule
        if (state.sCount[nextLine] < 0) isContinuation = true;
        if (!isContinuation) {
            const terminatorRules = state.md.block.ruler.getRules("reference");
            const oldParentType = state.parentType;
            state.parentType = "reference";
            // Some tags can terminate paragraph without empty line.
            let terminate = false;
            for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
                terminate = true;
                break;
            }
            state.parentType = oldParentType;
            if (terminate) // terminated by another block
            return null;
        }
        const pos = state.bMarks[nextLine] + state.tShift[nextLine];
        const max = state.eMarks[nextLine];
        // max + 1 explicitly includes the newline
        return state.src.slice(pos, max + 1);
    }
    let str = state.src.slice(pos, max + 1);
    max = str.length;
    let labelEnd = -1;
    for(pos = 1; pos < max; pos++){
        const ch = str.charCodeAt(pos);
        if (ch === 0x5B /* [ */ ) return false;
        else if (ch === 0x5D /* ] */ ) {
            labelEnd = pos;
            break;
        } else if (ch === 0x0A /* \n */ ) {
            const lineContent = getNextLine(nextLine);
            if (lineContent !== null) {
                str += lineContent;
                max = str.length;
                nextLine++;
            }
        } else if (ch === 0x5C /* \ */ ) {
            pos++;
            if (pos < max && str.charCodeAt(pos) === 0x0A) {
                const lineContent = getNextLine(nextLine);
                if (lineContent !== null) {
                    str += lineContent;
                    max = str.length;
                    nextLine++;
                }
            }
        }
    }
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A /* : */ ) return false;
    // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here
    for(pos = labelEnd + 2; pos < max; pos++){
        const ch = str.charCodeAt(pos);
        if (ch === 0x0A) {
            const lineContent = getNextLine(nextLine);
            if (lineContent !== null) {
                str += lineContent;
                max = str.length;
                nextLine++;
            }
        } else if ((0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) ;
        else break;
    }
    // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this
    const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
    if (!destRes.ok) return false;
    const href = state.md.normalizeLink(destRes.str);
    if (!state.md.validateLink(href)) return false;
    pos = destRes.pos;
    // save cursor state, we could require to rollback later
    const destEndPos = pos;
    const destEndLineNo = nextLine;
    // [label]:   destination   'title'
    //                       ^^^ skipping those spaces
    const start = pos;
    for(; pos < max; pos++){
        const ch = str.charCodeAt(pos);
        if (ch === 0x0A) {
            const lineContent = getNextLine(nextLine);
            if (lineContent !== null) {
                str += lineContent;
                max = str.length;
                nextLine++;
            }
        } else if ((0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) ;
        else break;
    }
    // [label]:   destination   'title'
    //                          ^^^^^^^ parse this
    let titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
    while(titleRes.can_continue){
        const lineContent = getNextLine(nextLine);
        if (lineContent === null) break;
        str += lineContent;
        pos = max;
        max = str.length;
        nextLine++;
        titleRes = state.md.helpers.parseLinkTitle(str, pos, max, titleRes);
    }
    let title;
    if (pos < max && start !== pos && titleRes.ok) {
        title = titleRes.str;
        pos = titleRes.pos;
    } else {
        title = "";
        pos = destEndPos;
        nextLine = destEndLineNo;
    }
    // skip trailing spaces until the rest of the line
    while(pos < max){
        const ch = str.charCodeAt(pos);
        if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) break;
        pos++;
    }
    if (pos < max && str.charCodeAt(pos) !== 0x0A) {
        if (title) {
            // garbage at the end of the line after title,
            // but it could still be a valid reference if we roll back
            title = "";
            pos = destEndPos;
            nextLine = destEndLineNo;
            while(pos < max){
                const ch = str.charCodeAt(pos);
                if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) break;
                pos++;
            }
        }
    }
    if (pos < max && str.charCodeAt(pos) !== 0x0A) // garbage at the end of the line
    return false;
    const label = (0, $9dfa02e88e21d57b$export$20ef46802c8744b)(str.slice(1, labelEnd));
    if (!label) // CommonMark 0.20 disallows empty labels
    return false;
    // Reference can not terminate anything. This check is for safety only.
    /* istanbul ignore if */ if (silent) return true;
    if (typeof state.env.references === "undefined") state.env.references = {};
    if (typeof state.env.references[label] === "undefined") state.env.references[label] = {
        title: title,
        href: href
    };
    state.line = nextLine;
    return true;
}


// HTML block
// List of valid html blocks names, according to commonmark spec
// https://spec.commonmark.org/0.30/#html-blocks
var $f374074459e03a56$export$2e2bcd8739ae039 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];


// Regexps to match html elements
const $c8a6b1861f200eaa$var$attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
const $c8a6b1861f200eaa$var$unquoted = "[^\"'=<>`\\x00-\\x20]+";
const $c8a6b1861f200eaa$var$single_quoted = "'[^']*'";
const $c8a6b1861f200eaa$var$double_quoted = '"[^"]*"';
const $c8a6b1861f200eaa$var$attr_value = "(?:" + $c8a6b1861f200eaa$var$unquoted + "|" + $c8a6b1861f200eaa$var$single_quoted + "|" + $c8a6b1861f200eaa$var$double_quoted + ")";
const $c8a6b1861f200eaa$var$attribute = "(?:\\s+" + $c8a6b1861f200eaa$var$attr_name + "(?:\\s*=\\s*" + $c8a6b1861f200eaa$var$attr_value + ")?)";
const $c8a6b1861f200eaa$var$open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + $c8a6b1861f200eaa$var$attribute + "*\\s*\\/?>";
const $c8a6b1861f200eaa$var$close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const $c8a6b1861f200eaa$var$comment = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->";
const $c8a6b1861f200eaa$var$processing = "<[?][\\s\\S]*?[?]>";
const $c8a6b1861f200eaa$var$declaration = "<![A-Za-z][^>]*>";
const $c8a6b1861f200eaa$var$cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
const $c8a6b1861f200eaa$export$6db61d2c3a16e419 = new RegExp("^(?:" + $c8a6b1861f200eaa$var$open_tag + "|" + $c8a6b1861f200eaa$var$close_tag + "|" + $c8a6b1861f200eaa$var$comment + "|" + $c8a6b1861f200eaa$var$processing + "|" + $c8a6b1861f200eaa$var$declaration + "|" + $c8a6b1861f200eaa$var$cdata + ")");
const $c8a6b1861f200eaa$export$cd48660d06f74639 = new RegExp("^(?:" + $c8a6b1861f200eaa$var$open_tag + "|" + $c8a6b1861f200eaa$var$close_tag + ")");


// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
const $ea9c17c86086534d$var$HTML_SEQUENCES = [
    [
        /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
        /<\/(script|pre|style|textarea)>/i,
        true
    ],
    [
        /^<!--/,
        /-->/,
        true
    ],
    [
        /^<\?/,
        /\?>/,
        true
    ],
    [
        /^<![A-Z]/,
        />/,
        true
    ],
    [
        /^<!\[CDATA\[/,
        /\]\]>/,
        true
    ],
    [
        new RegExp("^</?(" + (0, $f374074459e03a56$export$2e2bcd8739ae039).join("|") + ")(?=(\\s|/?>|$))", "i"),
        /^$/,
        true
    ],
    [
        new RegExp((0, $c8a6b1861f200eaa$export$cd48660d06f74639).source + "\\s*$"),
        /^$/,
        false
    ]
];
function $ea9c17c86086534d$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    if (!state.md.options.html) return false;
    if (state.src.charCodeAt(pos) !== 0x3C /* < */ ) return false;
    let lineText = state.src.slice(pos, max);
    let i = 0;
    for(; i < $ea9c17c86086534d$var$HTML_SEQUENCES.length; i++){
        if ($ea9c17c86086534d$var$HTML_SEQUENCES[i][0].test(lineText)) break;
    }
    if (i === $ea9c17c86086534d$var$HTML_SEQUENCES.length) return false;
    if (silent) // true if this sequence can be a terminator, false otherwise
    return $ea9c17c86086534d$var$HTML_SEQUENCES[i][2];
    let nextLine = startLine + 1;
    // If we are here - we detected HTML block.
    // Let's roll down till block end.
    if (!$ea9c17c86086534d$var$HTML_SEQUENCES[i][1].test(lineText)) for(; nextLine < endLine; nextLine++){
        if (state.sCount[nextLine] < state.blkIndent) break;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);
        if ($ea9c17c86086534d$var$HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) nextLine++;
            break;
        }
    }
    state.line = nextLine;
    const token = state.push("html_block", "", 0);
    token.map = [
        startLine,
        nextLine
    ];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
    return true;
}


// heading (#, ##, ...)

function $880806904fb71706$export$2e2bcd8739ae039(state, startLine, endLine, silent) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    let ch = state.src.charCodeAt(pos);
    if (ch !== 0x23 /* # */  || pos >= max) return false;
    // count heading level
    let level = 1;
    ch = state.src.charCodeAt(++pos);
    while(ch === 0x23 /* # */  && pos < max && level <= 6){
        level++;
        ch = state.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && !(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch)) return false;
    if (silent) return true;
    // Let's cut tails like '    ###  ' from the end of string
    max = state.skipSpacesBack(max, pos);
    const tmp = state.skipCharsBack(max, 0x23, pos) // #
    ;
    if (tmp > pos && (0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(state.src.charCodeAt(tmp - 1))) max = tmp;
    state.line = startLine + 1;
    const token_o = state.push("heading_open", "h" + String(level), 1);
    token_o.markup = "########".slice(0, level);
    token_o.map = [
        startLine,
        state.line
    ];
    const token_i = state.push("inline", "", 0);
    token_i.content = state.src.slice(pos, max).trim();
    token_i.map = [
        startLine,
        state.line
    ];
    token_i.children = [];
    const token_c = state.push("heading_close", "h" + String(level), -1);
    token_c.markup = "########".slice(0, level);
    return true;
}


// lheading (---, ===)
function $d1d33c9e15459638$export$2e2bcd8739ae039(state, startLine, endLine /*, silent */ ) {
    const terminatorRules = state.md.block.ruler.getRules("paragraph");
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    const oldParentType = state.parentType;
    state.parentType = "paragraph" // use paragraph to match terminatorRules
    ;
    // jump line-by-line until empty one or EOF
    let level = 0;
    let marker;
    let nextLine = startLine + 1;
    for(; nextLine < endLine && !state.isEmpty(nextLine); nextLine++){
        // this would be a code block normally, but after paragraph
        // it's considered a lazy continuation regardless of what's there
        if (state.sCount[nextLine] - state.blkIndent > 3) continue;
        //
        // Check for underline in setext header
        //
        if (state.sCount[nextLine] >= state.blkIndent) {
            let pos = state.bMarks[nextLine] + state.tShift[nextLine];
            const max = state.eMarks[nextLine];
            if (pos < max) {
                marker = state.src.charCodeAt(pos);
                if (marker === 0x2D /* - */  || marker === 0x3D /* = */ ) {
                    pos = state.skipChars(pos, marker);
                    pos = state.skipSpaces(pos);
                    if (pos >= max) {
                        level = marker === 0x3D /* = */  ? 1 : 2;
                        break;
                    }
                }
            }
        }
        // quirk for blockquotes, this line should already be checked by that rule
        if (state.sCount[nextLine] < 0) continue;
        // Some tags can terminate paragraph without empty line.
        let terminate = false;
        for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
        }
        if (terminate) break;
    }
    if (!level) // Didn't find valid underline
    return false;
    const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine + 1;
    const token_o = state.push("heading_open", "h" + String(level), 1);
    token_o.markup = String.fromCharCode(marker);
    token_o.map = [
        startLine,
        state.line
    ];
    const token_i = state.push("inline", "", 0);
    token_i.content = content;
    token_i.map = [
        startLine,
        state.line - 1
    ];
    token_i.children = [];
    const token_c = state.push("heading_close", "h" + String(level), -1);
    token_c.markup = String.fromCharCode(marker);
    state.parentType = oldParentType;
    return true;
}


// Paragraph
function $2f48f721c9a2082a$export$2e2bcd8739ae039(state, startLine, endLine) {
    const terminatorRules = state.md.block.ruler.getRules("paragraph");
    const oldParentType = state.parentType;
    let nextLine = startLine + 1;
    state.parentType = "paragraph";
    // jump line-by-line until empty one or EOF
    for(; nextLine < endLine && !state.isEmpty(nextLine); nextLine++){
        // this would be a code block normally, but after paragraph
        // it's considered a lazy continuation regardless of what's there
        if (state.sCount[nextLine] - state.blkIndent > 3) continue;
        // quirk for blockquotes, this line should already be checked by that rule
        if (state.sCount[nextLine] < 0) continue;
        // Some tags can terminate paragraph without empty line.
        let terminate = false;
        for(let i = 0, l = terminatorRules.length; i < l; i++)if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
        }
        if (terminate) break;
    }
    const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    const token_o = state.push("paragraph_open", "p", 1);
    token_o.map = [
        startLine,
        state.line
    ];
    const token_i = state.push("inline", "", 0);
    token_i.content = content;
    token_i.map = [
        startLine,
        state.line
    ];
    token_i.children = [];
    state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
}


const $0b75a80bb2510d99$var$_rules = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    [
        "table",
        (0, $5b162802d0d1c4f9$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference"
        ]
    ],
    [
        "code",
        (0, $7c3c4a845642ff65$export$2e2bcd8739ae039)
    ],
    [
        "fence",
        (0, $29b1b3851218928e$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "blockquote",
        (0, $185b298486586765$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "hr",
        (0, $a40c46f621dc0ac2$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote",
            "list"
        ]
    ],
    [
        "list",
        (0, $14d00ae63a754984$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "reference",
        (0, $58d9098dc9e3b526$export$2e2bcd8739ae039)
    ],
    [
        "html_block",
        (0, $ea9c17c86086534d$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "heading",
        (0, $880806904fb71706$export$2e2bcd8739ae039),
        [
            "paragraph",
            "reference",
            "blockquote"
        ]
    ],
    [
        "lheading",
        (0, $d1d33c9e15459638$export$2e2bcd8739ae039)
    ],
    [
        "paragraph",
        (0, $2f48f721c9a2082a$export$2e2bcd8739ae039)
    ]
];
/**
 * new ParserBlock()
 **/ function $0b75a80bb2510d99$var$ParserBlock() {
    /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/ this.ruler = new (0, $26e75965c33dac46$export$2e2bcd8739ae039)();
    for(let i = 0; i < $0b75a80bb2510d99$var$_rules.length; i++)this.ruler.push($0b75a80bb2510d99$var$_rules[i][0], $0b75a80bb2510d99$var$_rules[i][1], {
        alt: ($0b75a80bb2510d99$var$_rules[i][2] || []).slice()
    });
}
// Generate tokens for input range
//
$0b75a80bb2510d99$var$ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const maxNesting = state.md.options.maxNesting;
    let line = startLine;
    let hasEmptyLines = false;
    while(line < endLine){
        state.line = line = state.skipEmptyLines(line);
        if (line >= endLine) break;
        // Termination condition for nested calls.
        // Nested calls currently used for blockquotes & lists
        if (state.sCount[line] < state.blkIndent) break;
        // If nesting level exceeded - skip tail to the end. That's not ordinary
        // situation and we should not care about content.
        if (state.level >= maxNesting) {
            state.line = endLine;
            break;
        }
        // Try all possible rules.
        // On success, rule should:
        //
        // - update `state.line`
        // - update `state.tokens`
        // - return true
        const prevLine = state.line;
        let ok = false;
        for(let i = 0; i < len; i++){
            ok = rules[i](state, line, endLine, false);
            if (ok) {
                if (prevLine >= state.line) throw new Error("block rule didn't increment state.line");
                break;
            }
        }
        // this can only happen if user disables paragraph rule
        if (!ok) throw new Error("none of the block rules matched");
        // set state.tight if we had an empty line before current tag
        // i.e. latest empty line should not count
        state.tight = !hasEmptyLines;
        // paragraph might "eat" one newline after it in nested lists
        if (state.isEmpty(state.line - 1)) hasEmptyLines = true;
        line = state.line;
        if (line < endLine && state.isEmpty(line)) {
            hasEmptyLines = true;
            line++;
            state.line = line;
        }
    }
};
/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/ $0b75a80bb2510d99$var$ParserBlock.prototype.parse = function(src, md, env, outTokens) {
    if (!src) return;
    const state = new this.State(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
};
$0b75a80bb2510d99$var$ParserBlock.prototype.State = (0, $ce0f69e60f0d7b75$export$2e2bcd8739ae039);
var $0b75a80bb2510d99$export$2e2bcd8739ae039 = $0b75a80bb2510d99$var$ParserBlock;


/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/ 
// Inline parser state


function $386c1ac49b039f3f$var$StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    // Stores { start: end } pairs. Useful for backtrack
    // optimization of pairs parse (emphasis, strikes).
    this.cache = {};
    // List of emphasis-like delimiters for current tag
    this.delimiters = [];
    // Stack of delimiter lists for upper level tags
    this._prev_delimiters = [];
    // backtick length => last seen position
    this.backticks = {};
    this.backticksScanned = false;
    // Counter used to disable inline linkify-it execution
    // inside <a> and markdown links
    this.linkLevel = 0;
}
// Flush pending text
//
$386c1ac49b039f3f$var$StateInline.prototype.pushPending = function() {
    const token = new (0, $0db6752754d3e275$export$2e2bcd8739ae039)("text", "", 0);
    token.content = this.pending;
    token.level = this.pendingLevel;
    this.tokens.push(token);
    this.pending = "";
    return token;
};
// Push new token to "stream".
// If pending text exists - flush it as text token
//
$386c1ac49b039f3f$var$StateInline.prototype.push = function(type, tag, nesting) {
    if (this.pending) this.pushPending();
    const token = new (0, $0db6752754d3e275$export$2e2bcd8739ae039)(type, tag, nesting);
    let token_meta = null;
    if (nesting < 0) {
        // closing tag
        this.level--;
        this.delimiters = this._prev_delimiters.pop();
    }
    token.level = this.level;
    if (nesting > 0) {
        // opening tag
        this.level++;
        this._prev_delimiters.push(this.delimiters);
        this.delimiters = [];
        token_meta = {
            delimiters: this.delimiters
        };
    }
    this.pendingLevel = this.level;
    this.tokens.push(token);
    this.tokens_meta.push(token_meta);
    return token;
};
// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
$386c1ac49b039f3f$var$StateInline.prototype.scanDelims = function(start, canSplitWord) {
    const max = this.posMax;
    const marker = this.src.charCodeAt(start);
    // treat beginning of the line as a whitespace
    const lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;
    let pos = start;
    while(pos < max && this.src.charCodeAt(pos) === marker)pos++;
    const count = pos - start;
    // treat end of the line as a whitespace
    const nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;
    const isLastPunctChar = (0, $9dfa02e88e21d57b$export$829a0d33ae4e744)(lastChar) || (0, $9dfa02e88e21d57b$export$4888a643af800fc1)(String.fromCharCode(lastChar));
    const isNextPunctChar = (0, $9dfa02e88e21d57b$export$829a0d33ae4e744)(nextChar) || (0, $9dfa02e88e21d57b$export$4888a643af800fc1)(String.fromCharCode(nextChar));
    const isLastWhiteSpace = (0, $9dfa02e88e21d57b$export$3c52dd84024ae72c)(lastChar);
    const isNextWhiteSpace = (0, $9dfa02e88e21d57b$export$3c52dd84024ae72c)(nextChar);
    const left_flanking = !isNextWhiteSpace && (!isNextPunctChar || isLastWhiteSpace || isLastPunctChar);
    const right_flanking = !isLastWhiteSpace && (!isLastPunctChar || isNextWhiteSpace || isNextPunctChar);
    const can_open = left_flanking && (canSplitWord || !right_flanking || isLastPunctChar);
    const can_close = right_flanking && (canSplitWord || !left_flanking || isNextPunctChar);
    return {
        can_open: can_open,
        can_close: can_close,
        length: count
    };
};
// re-export Token class to use in block rules
$386c1ac49b039f3f$var$StateInline.prototype.Token = (0, $0db6752754d3e275$export$2e2bcd8739ae039);
var $386c1ac49b039f3f$export$2e2bcd8739ae039 = $386c1ac49b039f3f$var$StateInline;


// Skip text characters for text token, place those to pending buffer
// and increment current pos
// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function $b44d9dab1d9cbded$var$isTerminatorChar(ch) {
    switch(ch){
        case 0x0A /* \n */ :
        case 0x21 /* ! */ :
        case 0x23 /* # */ :
        case 0x24 /* $ */ :
        case 0x25 /* % */ :
        case 0x26 /* & */ :
        case 0x2A /* * */ :
        case 0x2B /* + */ :
        case 0x2D /* - */ :
        case 0x3A /* : */ :
        case 0x3C /* < */ :
        case 0x3D /* = */ :
        case 0x3E /* > */ :
        case 0x40 /* @ */ :
        case 0x5B /* [ */ :
        case 0x5C /* \ */ :
        case 0x5D /* ] */ :
        case 0x5E /* ^ */ :
        case 0x5F /* _ */ :
        case 0x60 /* ` */ :
        case 0x7B /* { */ :
        case 0x7D /* } */ :
        case 0x7E /* ~ */ :
            return true;
        default:
            return false;
    }
}
function $b44d9dab1d9cbded$export$2e2bcd8739ae039(state, silent) {
    let pos = state.pos;
    while(pos < state.posMax && !$b44d9dab1d9cbded$var$isTerminatorChar(state.src.charCodeAt(pos)))pos++;
    if (pos === state.pos) return false;
    if (!silent) state.pending += state.src.slice(state.pos, pos);
    state.pos = pos;
    return true;
} // Alternative implementation, for memory.
 //
 // It costs 10% of performance, but allows extend terminators list, if place it
 // to `ParserInline` property. Probably, will switch to it sometime, such
 // flexibility required.
 /*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
}; */ 


// Process links like https://example.org/
// RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
const $d43b0c3593b2f967$var$SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function $d43b0c3593b2f967$export$2e2bcd8739ae039(state, silent) {
    if (!state.md.options.linkify) return false;
    if (state.linkLevel > 0) return false;
    const pos = state.pos;
    const max = state.posMax;
    if (pos + 3 > max) return false;
    if (state.src.charCodeAt(pos) !== 0x3A /* : */ ) return false;
    if (state.src.charCodeAt(pos + 1) !== 0x2F /* / */ ) return false;
    if (state.src.charCodeAt(pos + 2) !== 0x2F /* / */ ) return false;
    const match = state.pending.match($d43b0c3593b2f967$var$SCHEME_RE);
    if (!match) return false;
    const proto = match[1];
    const link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
    if (!link) return false;
    let url = link.url;
    // invalid link, but still detected by linkify somehow;
    // need to check to prevent infinite loop below
    if (url.length <= proto.length) return false;
    // disallow '*' at the end of the link (conflicts with emphasis)
    url = url.replace(/\*+$/, "");
    const fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) return false;
    if (!silent) {
        state.pending = state.pending.slice(0, -proto.length);
        const token_o = state.push("link_open", "a", 1);
        token_o.attrs = [
            [
                "href",
                fullUrl
            ]
        ];
        token_o.markup = "linkify";
        token_o.info = "auto";
        const token_t = state.push("text", "", 0);
        token_t.content = state.md.normalizeLinkText(url);
        const token_c = state.push("link_close", "a", -1);
        token_c.markup = "linkify";
        token_c.info = "auto";
    }
    state.pos += url.length - proto.length;
    return true;
}


// Proceess '\n'

function $c091185b8cb69dde$export$2e2bcd8739ae039(state, silent) {
    let pos = state.pos;
    if (state.src.charCodeAt(pos) !== 0x0A /* \n */ ) return false;
    const pmax = state.pending.length - 1;
    const max = state.posMax;
    // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.
    if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
            if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
                // Find whitespaces tail of pending chars.
                let ws = pmax - 1;
                while(ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20)ws--;
                state.pending = state.pending.slice(0, ws);
                state.push("hardbreak", "br", 0);
            } else {
                state.pending = state.pending.slice(0, -1);
                state.push("softbreak", "br", 0);
            }
        } else state.push("softbreak", "br", 0);
    }
    pos++;
    // skip heading spaces for next line
    while(pos < max && (0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(state.src.charCodeAt(pos)))pos++;
    state.pos = pos;
    return true;
}


// Process escaped chars and hardbreaks

const $7b0dcce7d71a292c$var$ESCAPED = [];
for(let i = 0; i < 256; i++)$7b0dcce7d71a292c$var$ESCAPED.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
    $7b0dcce7d71a292c$var$ESCAPED[ch.charCodeAt(0)] = 1;
});
function $7b0dcce7d71a292c$export$2e2bcd8739ae039(state, silent) {
    let pos = state.pos;
    const max = state.posMax;
    if (state.src.charCodeAt(pos) !== 0x5C /* \ */ ) return false;
    pos++;
    // '\' at the end of the inline block
    if (pos >= max) return false;
    let ch1 = state.src.charCodeAt(pos);
    if (ch1 === 0x0A) {
        if (!silent) state.push("hardbreak", "br", 0);
        pos++;
        // skip leading whitespaces from next line
        while(pos < max){
            ch1 = state.src.charCodeAt(pos);
            if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(ch1)) break;
            pos++;
        }
        state.pos = pos;
        return true;
    }
    let escapedStr = state.src[pos];
    if (ch1 >= 0xD800 && ch1 <= 0xDBFF && pos + 1 < max) {
        const ch2 = state.src.charCodeAt(pos + 1);
        if (ch2 >= 0xDC00 && ch2 <= 0xDFFF) {
            escapedStr += state.src[pos + 1];
            pos++;
        }
    }
    const origStr = "\\" + escapedStr;
    if (!silent) {
        const token = state.push("text_special", "", 0);
        if (ch1 < 256 && $7b0dcce7d71a292c$var$ESCAPED[ch1] !== 0) token.content = escapedStr;
        else token.content = origStr;
        token.markup = origStr;
        token.info = "escape";
    }
    state.pos = pos + 1;
    return true;
}


// Parse backticks
function $959b612fbe793e1d$export$2e2bcd8739ae039(state, silent) {
    let pos = state.pos;
    const ch = state.src.charCodeAt(pos);
    if (ch !== 0x60 /* ` */ ) return false;
    const start = pos;
    pos++;
    const max = state.posMax;
    // scan marker length
    while(pos < max && state.src.charCodeAt(pos) === 0x60 /* ` */ )pos++;
    const marker = state.src.slice(start, pos);
    const openerLength = marker.length;
    if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
        if (!silent) state.pending += marker;
        state.pos += openerLength;
        return true;
    }
    let matchEnd = pos;
    let matchStart;
    // Nothing found in the cache, scan until the end of the line (or until marker is found)
    while((matchStart = state.src.indexOf("`", matchEnd)) !== -1){
        matchEnd = matchStart + 1;
        // scan marker length
        while(matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60 /* ` */ )matchEnd++;
        const closerLength = matchEnd - matchStart;
        if (closerLength === openerLength) {
            // Found matching closer length.
            if (!silent) {
                const token = state.push("code_inline", "code", 0);
                token.markup = marker;
                token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
            }
            state.pos = matchEnd;
            return true;
        }
        // Some different length found, put it in cache as upper limit of where closer can be found
        state.backticks[closerLength] = matchStart;
    }
    // Scanned through the end, didn't find anything
    state.backticksScanned = true;
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
}


// ~~strike through~~
//
// Insert each marker as a separate text token, and add it to delimiter list
//
function $1d0f7bcc1a049606$var$strikethrough_tokenize(state, silent) {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);
    if (silent) return false;
    if (marker !== 0x7E /* ~ */ ) return false;
    const scanned = state.scanDelims(state.pos, true);
    let len = scanned.length;
    const ch = String.fromCharCode(marker);
    if (len < 2) return false;
    let token;
    if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
    }
    for(let i = 0; i < len; i += 2){
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
            marker: marker,
            length: 0,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close
        });
    }
    state.pos += scanned.length;
    return true;
}
function $1d0f7bcc1a049606$var$postProcess(state, delimiters) {
    let token;
    const loneMarkers = [];
    const max = delimiters.length;
    for(let i = 0; i < max; i++){
        const startDelim = delimiters[i];
        if (startDelim.marker !== 0x7E /* ~ */ ) continue;
        if (startDelim.end === -1) continue;
        const endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") loneMarkers.push(endDelim.token - 1);
    }
    // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    //
    // So, we have to move all those markers after subsequent s_close tags.
    //
    while(loneMarkers.length){
        const i = loneMarkers.pop();
        let j = i + 1;
        while(j < state.tokens.length && state.tokens[j].type === "s_close")j++;
        j--;
        if (i !== j) {
            token = state.tokens[j];
            state.tokens[j] = state.tokens[i];
            state.tokens[i] = token;
        }
    }
}
// Walk through delimiter list and replace text tokens with tags
//
function $1d0f7bcc1a049606$var$strikethrough_postProcess(state) {
    const tokens_meta = state.tokens_meta;
    const max = state.tokens_meta.length;
    $1d0f7bcc1a049606$var$postProcess(state, state.delimiters);
    for(let curr = 0; curr < max; curr++)if (tokens_meta[curr] && tokens_meta[curr].delimiters) $1d0f7bcc1a049606$var$postProcess(state, tokens_meta[curr].delimiters);
}
var $1d0f7bcc1a049606$export$2e2bcd8739ae039 = {
    tokenize: $1d0f7bcc1a049606$var$strikethrough_tokenize,
    postProcess: $1d0f7bcc1a049606$var$strikethrough_postProcess
};


// Process *this* and _that_
//
// Insert each marker as a separate text token, and add it to delimiter list
//
function $d9cd41704beaa8ff$var$emphasis_tokenize(state, silent) {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);
    if (silent) return false;
    if (marker !== 0x5F /* _ */  && marker !== 0x2A /* * */ ) return false;
    const scanned = state.scanDelims(state.pos, marker === 0x2A);
    for(let i = 0; i < scanned.length; i++){
        const token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
            marker: // Char code of the starting marker (number).
            //
            marker,
            // Total length of these series of delimiters.
            //
            length: scanned.length,
            // A position of the token this delimiter corresponds to.
            //
            token: state.tokens.length - 1,
            // If this delimiter is matched as a valid opener, `end` will be
            // equal to its position, otherwise it's `-1`.
            //
            end: -1,
            // Boolean flags that determine if this delimiter could open or close
            // an emphasis.
            //
            open: scanned.can_open,
            close: scanned.can_close
        });
    }
    state.pos += scanned.length;
    return true;
}
function $d9cd41704beaa8ff$var$postProcess(state, delimiters) {
    const max = delimiters.length;
    for(let i = max - 1; i >= 0; i--){
        const startDelim = delimiters[i];
        if (startDelim.marker !== 0x5F /* _ */  && startDelim.marker !== 0x2A /* * */ ) continue;
        // Process only opening markers
        if (startDelim.end === -1) continue;
        const endDelim = delimiters[startDelim.end];
        // If the previous delimiter has the same marker and is adjacent to this one,
        // merge those into one strong delimiter.
        //
        // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
        //
        const isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
        delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
        delimiters[startDelim.end + 1].token === endDelim.token + 1;
        const ch = String.fromCharCode(startDelim.marker);
        const token_o = state.tokens[startDelim.token];
        token_o.type = isStrong ? "strong_open" : "em_open";
        token_o.tag = isStrong ? "strong" : "em";
        token_o.nesting = 1;
        token_o.markup = isStrong ? ch + ch : ch;
        token_o.content = "";
        const token_c = state.tokens[endDelim.token];
        token_c.type = isStrong ? "strong_close" : "em_close";
        token_c.tag = isStrong ? "strong" : "em";
        token_c.nesting = -1;
        token_c.markup = isStrong ? ch + ch : ch;
        token_c.content = "";
        if (isStrong) {
            state.tokens[delimiters[i - 1].token].content = "";
            state.tokens[delimiters[startDelim.end + 1].token].content = "";
            i--;
        }
    }
}
// Walk through delimiter list and replace text tokens with tags
//
function $d9cd41704beaa8ff$var$emphasis_post_process(state) {
    const tokens_meta = state.tokens_meta;
    const max = state.tokens_meta.length;
    $d9cd41704beaa8ff$var$postProcess(state, state.delimiters);
    for(let curr = 0; curr < max; curr++)if (tokens_meta[curr] && tokens_meta[curr].delimiters) $d9cd41704beaa8ff$var$postProcess(state, tokens_meta[curr].delimiters);
}
var $d9cd41704beaa8ff$export$2e2bcd8739ae039 = {
    tokenize: $d9cd41704beaa8ff$var$emphasis_tokenize,
    postProcess: $d9cd41704beaa8ff$var$emphasis_post_process
};


// Process [link](<to> "stuff")

function $5e6f7abc7aa4f369$export$2e2bcd8739ae039(state, silent) {
    let code, label, res, ref;
    let href = "";
    let title = "";
    let start = state.pos;
    let parseReference = true;
    if (state.src.charCodeAt(state.pos) !== 0x5B /* [ */ ) return false;
    const oldPos = state.pos;
    const max = state.posMax;
    const labelStart = state.pos + 1;
    const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) return false;
    let pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28 /* ( */ ) {
        //
        // Inline link
        //
        // might have found a valid shortcut link, disable reference parsing
        parseReference = false;
        // [link](  <href>  "title"  )
        //        ^^ skipping these spaces
        pos++;
        for(; pos < max; pos++){
            code = state.src.charCodeAt(pos);
            if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
        }
        if (pos >= max) return false;
        // [link](  <href>  "title"  )
        //          ^^^^^^ parsing link destination
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) pos = res.pos;
            else href = "";
            // [link](  <href>  "title"  )
            //                ^^ skipping these spaces
            start = pos;
            for(; pos < max; pos++){
                code = state.src.charCodeAt(pos);
                if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
            }
            // [link](  <href>  "title"  )
            //                  ^^^^^^^ parsing link title
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
                title = res.str;
                pos = res.pos;
                // [link](  <href>  "title"  )
                //                         ^^ skipping these spaces
                for(; pos < max; pos++){
                    code = state.src.charCodeAt(pos);
                    if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
                }
            }
        }
        if (pos >= max || state.src.charCodeAt(pos) !== 0x29 /* ) */ ) // parsing a valid shortcut link failed, fallback to reference
        parseReference = true;
        pos++;
    }
    if (parseReference) {
        //
        // Link reference
        //
        if (typeof state.env.references === "undefined") return false;
        if (pos < max && state.src.charCodeAt(pos) === 0x5B /* [ */ ) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) label = state.src.slice(start, pos++);
            else pos = labelEnd + 1;
        } else pos = labelEnd + 1;
        // covers label === '' and label === undefined
        // (collapsed reference link and shortcut reference link respectively)
        if (!label) label = state.src.slice(labelStart, labelEnd);
        ref = state.env.references[(0, $9dfa02e88e21d57b$export$20ef46802c8744b)(label)];
        if (!ref) {
            state.pos = oldPos;
            return false;
        }
        href = ref.href;
        title = ref.title;
    }
    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        const token_o = state.push("link_open", "a", 1);
        const attrs = [
            [
                "href",
                href
            ]
        ];
        token_o.attrs = attrs;
        if (title) attrs.push([
            "title",
            title
        ]);
        state.linkLevel++;
        state.md.inline.tokenize(state);
        state.linkLevel--;
        state.push("link_close", "a", -1);
    }
    state.pos = pos;
    state.posMax = max;
    return true;
}


// Process ![image](<src> "title")

function $a4a711156d01e021$export$2e2bcd8739ae039(state, silent) {
    let code, content, label, pos, ref, res, title, start;
    let href = "";
    const oldPos = state.pos;
    const max = state.posMax;
    if (state.src.charCodeAt(state.pos) !== 0x21 /* ! */ ) return false;
    if (state.src.charCodeAt(state.pos + 1) !== 0x5B /* [ */ ) return false;
    const labelStart = state.pos + 2;
    const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) return false;
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28 /* ( */ ) {
        //
        // Inline link
        //
        // [link](  <href>  "title"  )
        //        ^^ skipping these spaces
        pos++;
        for(; pos < max; pos++){
            code = state.src.charCodeAt(pos);
            if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
        }
        if (pos >= max) return false;
        // [link](  <href>  "title"  )
        //          ^^^^^^ parsing link destination
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) pos = res.pos;
            else href = "";
        }
        // [link](  <href>  "title"  )
        //                ^^ skipping these spaces
        start = pos;
        for(; pos < max; pos++){
            code = state.src.charCodeAt(pos);
            if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
        }
        // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            // [link](  <href>  "title"  )
            //                         ^^ skipping these spaces
            for(; pos < max; pos++){
                code = state.src.charCodeAt(pos);
                if (!(0, $9dfa02e88e21d57b$export$1d5ccafae59b4926)(code) && code !== 0x0A) break;
            }
        } else title = "";
        if (pos >= max || state.src.charCodeAt(pos) !== 0x29 /* ) */ ) {
            state.pos = oldPos;
            return false;
        }
        pos++;
    } else {
        //
        // Link reference
        //
        if (typeof state.env.references === "undefined") return false;
        if (pos < max && state.src.charCodeAt(pos) === 0x5B /* [ */ ) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) label = state.src.slice(start, pos++);
            else pos = labelEnd + 1;
        } else pos = labelEnd + 1;
        // covers label === '' and label === undefined
        // (collapsed reference link and shortcut reference link respectively)
        if (!label) label = state.src.slice(labelStart, labelEnd);
        ref = state.env.references[(0, $9dfa02e88e21d57b$export$20ef46802c8744b)(label)];
        if (!ref) {
            state.pos = oldPos;
            return false;
        }
        href = ref.href;
        title = ref.title;
    }
    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        const tokens = [];
        state.md.inline.parse(content, state.md, state.env, tokens);
        const token = state.push("image", "img", 0);
        const attrs = [
            [
                "src",
                href
            ],
            [
                "alt",
                ""
            ]
        ];
        token.attrs = attrs;
        token.children = tokens;
        token.content = content;
        if (title) attrs.push([
            "title",
            title
        ]);
    }
    state.pos = pos;
    state.posMax = max;
    return true;
}


// Process autolinks '<protocol:...>'
/* eslint max-len:0 */ const $1d5cbcec86c5c696$var$EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
/* eslint-disable-next-line no-control-regex */ const $1d5cbcec86c5c696$var$AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function $1d5cbcec86c5c696$export$2e2bcd8739ae039(state, silent) {
    let pos = state.pos;
    if (state.src.charCodeAt(pos) !== 0x3C /* < */ ) return false;
    const start = state.pos;
    const max = state.posMax;
    for(;;){
        if (++pos >= max) return false;
        const ch = state.src.charCodeAt(pos);
        if (ch === 0x3C /* < */ ) return false;
        if (ch === 0x3E /* > */ ) break;
    }
    const url = state.src.slice(start + 1, pos);
    if ($1d5cbcec86c5c696$var$AUTOLINK_RE.test(url)) {
        const fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) return false;
        if (!silent) {
            const token_o = state.push("link_open", "a", 1);
            token_o.attrs = [
                [
                    "href",
                    fullUrl
                ]
            ];
            token_o.markup = "autolink";
            token_o.info = "auto";
            const token_t = state.push("text", "", 0);
            token_t.content = state.md.normalizeLinkText(url);
            const token_c = state.push("link_close", "a", -1);
            token_c.markup = "autolink";
            token_c.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
    }
    if ($1d5cbcec86c5c696$var$EMAIL_RE.test(url)) {
        const fullUrl = state.md.normalizeLink("mailto:" + url);
        if (!state.md.validateLink(fullUrl)) return false;
        if (!silent) {
            const token_o = state.push("link_open", "a", 1);
            token_o.attrs = [
                [
                    "href",
                    fullUrl
                ]
            ];
            token_o.markup = "autolink";
            token_o.info = "auto";
            const token_t = state.push("text", "", 0);
            token_t.content = state.md.normalizeLinkText(url);
            const token_c = state.push("link_close", "a", -1);
            token_c.markup = "autolink";
            token_c.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
    }
    return false;
}


// Process html tags

function $ec5e8c4a182b3960$var$isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
}
function $ec5e8c4a182b3960$var$isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
}
function $ec5e8c4a182b3960$var$isLetter(ch) {
    /* eslint no-bitwise:0 */ const lc = ch | 0x20 // to lower case
    ;
    return lc >= 0x61 /* a */  && lc <= 0x7a /* z */ ;
}
function $ec5e8c4a182b3960$export$2e2bcd8739ae039(state, silent) {
    if (!state.md.options.html) return false;
    // Check start
    const max = state.posMax;
    const pos = state.pos;
    if (state.src.charCodeAt(pos) !== 0x3C /* < */  || pos + 2 >= max) return false;
    // Quick fail on second char
    const ch = state.src.charCodeAt(pos + 1);
    if (ch !== 0x21 /* ! */  && ch !== 0x3F /* ? */  && ch !== 0x2F /* / */  && !$ec5e8c4a182b3960$var$isLetter(ch)) return false;
    const match = state.src.slice(pos).match((0, $c8a6b1861f200eaa$export$6db61d2c3a16e419));
    if (!match) return false;
    if (!silent) {
        const token = state.push("html_inline", "", 0);
        token.content = match[0];
        if ($ec5e8c4a182b3960$var$isLinkOpen(token.content)) state.linkLevel++;
        if ($ec5e8c4a182b3960$var$isLinkClose(token.content)) state.linkLevel--;
    }
    state.pos += match[0].length;
    return true;
}


// Process html entity - &#123;, &#xAF;, &quot;, ...


const $640ffaf99f4e02cd$var$DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
const $640ffaf99f4e02cd$var$NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
function $640ffaf99f4e02cd$export$2e2bcd8739ae039(state, silent) {
    const pos = state.pos;
    const max = state.posMax;
    if (state.src.charCodeAt(pos) !== 0x26 /* & */ ) return false;
    if (pos + 1 >= max) return false;
    const ch = state.src.charCodeAt(pos + 1);
    if (ch === 0x23 /* # */ ) {
        const match = state.src.slice(pos).match($640ffaf99f4e02cd$var$DIGITAL_RE);
        if (match) {
            if (!silent) {
                const code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
                const token = state.push("text_special", "", 0);
                token.content = (0, $9dfa02e88e21d57b$export$644a8f5b13b2a36d)(code) ? (0, $9dfa02e88e21d57b$export$73bfc63873071f74)(code) : (0, $9dfa02e88e21d57b$export$73bfc63873071f74)(0xFFFD);
                token.markup = match[0];
                token.info = "entity";
            }
            state.pos += match[0].length;
            return true;
        }
    } else {
        const match = state.src.slice(pos).match($640ffaf99f4e02cd$var$NAMED_RE);
        if (match) {
            const decoded = (0, $ba9873426d6195b3$export$f045cb747ce77a19)(match[0]);
            if (decoded !== match[0]) {
                if (!silent) {
                    const token = state.push("text_special", "", 0);
                    token.content = decoded;
                    token.markup = match[0];
                    token.info = "entity";
                }
                state.pos += match[0].length;
                return true;
            }
        }
    }
    return false;
}


// For each opening emphasis-like marker find a matching closing one
//
function $490cefde0eec7e05$var$processDelimiters(delimiters) {
    const openersBottom = {};
    const max = delimiters.length;
    if (!max) return;
    // headerIdx is the first delimiter of the current (where closer is) delimiter run
    let headerIdx = 0;
    let lastTokenIdx = -2 // needs any value lower than -1
    ;
    const jumps = [];
    for(let closerIdx = 0; closerIdx < max; closerIdx++){
        const closer = delimiters[closerIdx];
        jumps.push(0);
        // markers belong to same delimiter run if:
        //  - they have adjacent tokens
        //  - AND markers are the same
        //
        if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) headerIdx = closerIdx;
        lastTokenIdx = closer.token;
        // Length is only used for emphasis-specific "rule of 3",
        // if it's not defined (in strikethrough or 3rd party plugins),
        // we can default it to 0 to disable those checks.
        //
        closer.length = closer.length || 0;
        if (!closer.close) continue;
        // Previously calculated lower bounds (previous fails)
        // for each marker, each delimiter length modulo 3,
        // and for whether this closer can be an opener;
        // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
        /* eslint-disable-next-line no-prototype-builtins */ if (!openersBottom.hasOwnProperty(closer.marker)) openersBottom[closer.marker] = [
            -1,
            -1,
            -1,
            -1,
            -1,
            -1
        ];
        const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
        let openerIdx = headerIdx - jumps[headerIdx] - 1;
        let newMinOpenerIdx = openerIdx;
        for(; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1){
            const opener = delimiters[openerIdx];
            if (opener.marker !== closer.marker) continue;
            if (opener.open && opener.end < 0) {
                let isOddMatch = false;
                // from spec:
                //
                // If one of the delimiters can both open and close emphasis, then the
                // sum of the lengths of the delimiter runs containing the opening and
                // closing delimiters must not be a multiple of 3 unless both lengths
                // are multiples of 3.
                //
                if (opener.close || closer.open) {
                    if ((opener.length + closer.length) % 3 === 0) {
                        if (opener.length % 3 !== 0 || closer.length % 3 !== 0) isOddMatch = true;
                    }
                }
                if (!isOddMatch) {
                    // If previous delimiter cannot be an opener, we can safely skip
                    // the entire sequence in future checks. This is required to make
                    // sure algorithm has linear complexity (see *_*_*_*_*_... case).
                    //
                    const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
                    jumps[closerIdx] = closerIdx - openerIdx + lastJump;
                    jumps[openerIdx] = lastJump;
                    closer.open = false;
                    opener.end = closerIdx;
                    opener.close = false;
                    newMinOpenerIdx = -1;
                    // treat next token as start of run,
                    // it optimizes skips in **<...>**a**<...>** pathological case
                    lastTokenIdx = -2;
                    break;
                }
            }
        }
        if (newMinOpenerIdx !== -1) // If match for this delimiter run failed, we want to set lower bound for
        // future lookups. This is required to make sure algorithm has linear
        // complexity.
        //
        // See details here:
        // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
        //
        openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
}
function $490cefde0eec7e05$export$2e2bcd8739ae039(state) {
    const tokens_meta = state.tokens_meta;
    const max = state.tokens_meta.length;
    $490cefde0eec7e05$var$processDelimiters(state.delimiters);
    for(let curr = 0; curr < max; curr++)if (tokens_meta[curr] && tokens_meta[curr].delimiters) $490cefde0eec7e05$var$processDelimiters(tokens_meta[curr].delimiters);
}


// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//
function $0de6f20b90221df4$export$2e2bcd8739ae039(state) {
    let curr, last;
    let level = 0;
    const tokens = state.tokens;
    const max = state.tokens.length;
    for(curr = last = 0; curr < max; curr++){
        // re-calculate levels after emphasis/strikethrough turns some text nodes
        // into opening/closing tags
        if (tokens[curr].nesting < 0) level-- // closing tag
        ;
        tokens[curr].level = level;
        if (tokens[curr].nesting > 0) level++ // opening tag
        ;
        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        else {
            if (curr !== last) tokens[last] = tokens[curr];
            last++;
        }
    }
    if (curr !== last) tokens.length = last;
}


// Parser rules
const $428b098aaaaa433c$var$_rules = [
    [
        "text",
        (0, $b44d9dab1d9cbded$export$2e2bcd8739ae039)
    ],
    [
        "linkify",
        (0, $d43b0c3593b2f967$export$2e2bcd8739ae039)
    ],
    [
        "newline",
        (0, $c091185b8cb69dde$export$2e2bcd8739ae039)
    ],
    [
        "escape",
        (0, $7b0dcce7d71a292c$export$2e2bcd8739ae039)
    ],
    [
        "backticks",
        (0, $959b612fbe793e1d$export$2e2bcd8739ae039)
    ],
    [
        "strikethrough",
        (0, $1d0f7bcc1a049606$export$2e2bcd8739ae039).tokenize
    ],
    [
        "emphasis",
        (0, $d9cd41704beaa8ff$export$2e2bcd8739ae039).tokenize
    ],
    [
        "link",
        (0, $5e6f7abc7aa4f369$export$2e2bcd8739ae039)
    ],
    [
        "image",
        (0, $a4a711156d01e021$export$2e2bcd8739ae039)
    ],
    [
        "autolink",
        (0, $1d5cbcec86c5c696$export$2e2bcd8739ae039)
    ],
    [
        "html_inline",
        (0, $ec5e8c4a182b3960$export$2e2bcd8739ae039)
    ],
    [
        "entity",
        (0, $640ffaf99f4e02cd$export$2e2bcd8739ae039)
    ]
];
// `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//
const $428b098aaaaa433c$var$_rules2 = [
    [
        "balance_pairs",
        (0, $490cefde0eec7e05$export$2e2bcd8739ae039)
    ],
    [
        "strikethrough",
        (0, $1d0f7bcc1a049606$export$2e2bcd8739ae039).postProcess
    ],
    [
        "emphasis",
        (0, $d9cd41704beaa8ff$export$2e2bcd8739ae039).postProcess
    ],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    [
        "fragments_join",
        (0, $0de6f20b90221df4$export$2e2bcd8739ae039)
    ]
];
/**
 * new ParserInline()
 **/ function $428b098aaaaa433c$var$ParserInline() {
    /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/ this.ruler = new (0, $26e75965c33dac46$export$2e2bcd8739ae039)();
    for(let i = 0; i < $428b098aaaaa433c$var$_rules.length; i++)this.ruler.push($428b098aaaaa433c$var$_rules[i][0], $428b098aaaaa433c$var$_rules[i][1]);
    /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/ this.ruler2 = new (0, $26e75965c33dac46$export$2e2bcd8739ae039)();
    for(let i = 0; i < $428b098aaaaa433c$var$_rules2.length; i++)this.ruler2.push($428b098aaaaa433c$var$_rules2[i][0], $428b098aaaaa433c$var$_rules2[i][1]);
}
// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
$428b098aaaaa433c$var$ParserInline.prototype.skipToken = function(state) {
    const pos = state.pos;
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const maxNesting = state.md.options.maxNesting;
    const cache = state.cache;
    if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
    }
    let ok = false;
    if (state.level < maxNesting) for(let i = 0; i < len; i++){
        // Increment state.level and decrement it later to limit recursion.
        // It's harmless to do here, because no tokens are created. But ideally,
        // we'd need a separate private state variable for this purpose.
        //
        state.level++;
        ok = rules[i](state, true);
        state.level--;
        if (ok) {
            if (pos >= state.pos) throw new Error("inline rule didn't increment state.pos");
            break;
        }
    }
    else // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
    if (!ok) state.pos++;
    cache[pos] = state.pos;
};
// Generate tokens for input range
//
$428b098aaaaa433c$var$ParserInline.prototype.tokenize = function(state) {
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const end = state.posMax;
    const maxNesting = state.md.options.maxNesting;
    while(state.pos < end){
        // Try all possible rules.
        // On success, rule should:
        //
        // - update `state.pos`
        // - update `state.tokens`
        // - return true
        const prevPos = state.pos;
        let ok = false;
        if (state.level < maxNesting) for(let i = 0; i < len; i++){
            ok = rules[i](state, false);
            if (ok) {
                if (prevPos >= state.pos) throw new Error("inline rule didn't increment state.pos");
                break;
            }
        }
        if (ok) {
            if (state.pos >= end) break;
            continue;
        }
        state.pending += state.src[state.pos++];
    }
    if (state.pending) state.pushPending();
};
/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/ $428b098aaaaa433c$var$ParserInline.prototype.parse = function(str, md, env, outTokens) {
    const state = new this.State(str, md, env, outTokens);
    this.tokenize(state);
    const rules = this.ruler2.getRules("");
    const len = rules.length;
    for(let i = 0; i < len; i++)rules[i](state);
};
$428b098aaaaa433c$var$ParserInline.prototype.State = (0, $386c1ac49b039f3f$export$2e2bcd8739ae039);
var $428b098aaaaa433c$export$2e2bcd8739ae039 = $428b098aaaaa433c$var$ParserInline;



function $26629580f2ded3bd$export$2e2bcd8739ae039(opts) {
    const re = {};
    opts = opts || {};
    re.src_Any = (0, $31465279c607eaff$export$2e2bcd8739ae039).source;
    re.src_Cc = (0, $f6ae7f0715f82f51$export$2e2bcd8739ae039).source;
    re.src_Z = (0, $f26759cc6b878c2a$export$2e2bcd8739ae039).source;
    re.src_P = (0, $3e2f5caf0974ec84$export$2e2bcd8739ae039).source;
    // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
    re.src_ZPCc = [
        re.src_Z,
        re.src_P,
        re.src_Cc
    ].join("|");
    // \p{\Z\Cc} (white spaces + control)
    re.src_ZCc = [
        re.src_Z,
        re.src_Cc
    ].join("|");
    // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text
    const text_separators = "[><\uFF5C]";
    // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)
    re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
    // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
    re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
    re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")" + "(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
    re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + "|[()[\\]{}.,\"'?!\\-;]).|" + "\\[(?:(?!" + re.src_ZCc + "|\\]).)*\\]|" + "\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|" + "\\{(?:(?!" + re.src_ZCc + "|[}]).)*\\}|" + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + // allow `I'm_king` if no pair found
    "\\'(?=" + re.src_pseudo_letter + "|[-])|" + // google has many dots in "google search" links (#66, #81).
    // github has ... in commit range links,
    // Restrict to
    // - english
    // - percent-encoded
    // - parts of file path
    // - params separator
    // until more examples found.
    "\\.{2,}[a-zA-Z0-9%/&]|" + "\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" // `---` => long dash, terminate
     : "\\-+|") + // allow `,,,` in paths
    ",(?!" + re.src_ZCc + "|$)|" + // allow `;` if not followed by space-like char
    ";(?!" + re.src_ZCc + "|$)|" + // allow `!!!` in paths, but not at the end
    "\\!+(?!" + re.src_ZCc + "|[!]|$)|" + "\\?(?!" + re.src_ZCc + "|[?]|$)" + ")+" + "|\\/" + ")?";
    // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common
    re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
    re.src_xn = "xn--[a-z0-9\\-]{1,59}";
    // More to read about domain names
    // http://serverfault.com/questions/638260/
    re.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63}" + ")";
    re.src_domain = "(?:" + re.src_xn + "|" + "(?:" + re.src_pseudo_letter + ")" + "|" + "(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + ")" + ")";
    re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain /* _root */  + ")" + ")";
    re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|" + "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))" + ")";
    re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
    //
    // Main rules
    //
    // Rude test fuzzy links by host, for quick deny
    re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
    re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")" + "(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
    re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
    re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
    return re;
}


//
// Helpers
//
// Merge objects
//
function $c951b4b42a7b450c$var$assign(obj /* from1, from2, from3, ... */ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
        if (!source) return;
        Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
        });
    });
    return obj;
}
function $c951b4b42a7b450c$var$_class(obj) {
    return Object.prototype.toString.call(obj);
}
function $c951b4b42a7b450c$var$isString(obj) {
    return $c951b4b42a7b450c$var$_class(obj) === "[object String]";
}
function $c951b4b42a7b450c$var$isObject(obj) {
    return $c951b4b42a7b450c$var$_class(obj) === "[object Object]";
}
function $c951b4b42a7b450c$var$isRegExp(obj) {
    return $c951b4b42a7b450c$var$_class(obj) === "[object RegExp]";
}
function $c951b4b42a7b450c$var$isFunction(obj) {
    return $c951b4b42a7b450c$var$_class(obj) === "[object Function]";
}
function $c951b4b42a7b450c$var$escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
//
const $c951b4b42a7b450c$var$defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
};
function $c951b4b42a7b450c$var$isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce(function(acc, k) {
        /* eslint-disable-next-line no-prototype-builtins */ return acc || $c951b4b42a7b450c$var$defaultOptions.hasOwnProperty(k);
    }, false);
}
const $c951b4b42a7b450c$var$defaultSchemas = {
    "http:": {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.http) // compile lazily, because "host"-containing variables can change on tlds update.
            self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
            if (self.re.http.test(tail)) return tail.match(self.re.http)[0].length;
            return 0;
        }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.no_http) // compile lazily, because "host"-containing variables can change on tlds update.
            self.re.no_http = new RegExp("^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
            // with code comments
            "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
            if (self.re.no_http.test(tail)) {
                // should not be `://` & `///`, that protects from errors in protocol name
                if (pos >= 3 && text[pos - 3] === ":") return 0;
                if (pos >= 3 && text[pos - 3] === "/") return 0;
                return tail.match(self.re.no_http)[0].length;
            }
            return 0;
        }
    },
    "mailto:": {
        validate: function(text, pos, self) {
            const tail = text.slice(pos);
            if (!self.re.mailto) self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
            if (self.re.mailto.test(tail)) return tail.match(self.re.mailto)[0].length;
            return 0;
        }
    }
};
// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
/* eslint-disable-next-line max-len */ const $c951b4b42a7b450c$var$tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
const $c951b4b42a7b450c$var$tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function $c951b4b42a7b450c$var$resetScanCache(self) {
    self.__index__ = -1;
    self.__text_cache__ = "";
}
function $c951b4b42a7b450c$var$createValidator(re) {
    return function(text, pos) {
        const tail = text.slice(pos);
        if (re.test(tail)) return tail.match(re)[0].length;
        return 0;
    };
}
function $c951b4b42a7b450c$var$createNormalizer() {
    return function(match, self) {
        self.normalize(match);
    };
}
// Schemas compiler. Build regexps.
//
function $c951b4b42a7b450c$var$compile(self) {
    // Load & clone RE patterns.
    const re = self.re = (0, $26629580f2ded3bd$export$2e2bcd8739ae039)(self.__opts__);
    // Define dynamic patterns
    const tlds = self.__tlds__.slice();
    self.onCompile();
    if (!self.__tlds_replaced__) tlds.push($c951b4b42a7b450c$var$tlds_2ch_src_re);
    tlds.push(re.src_xn);
    re.src_tlds = tlds.join("|");
    function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
    }
    re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
    re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
    re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
    re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
    //
    // Compile each schema
    //
    const aliases = [];
    self.__compiled__ = {} // Reset compiled data
    ;
    function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }
    Object.keys(self.__schemas__).forEach(function(name) {
        const val = self.__schemas__[name];
        // skip disabled methods
        if (val === null) return;
        const compiled = {
            validate: null,
            link: null
        };
        self.__compiled__[name] = compiled;
        if ($c951b4b42a7b450c$var$isObject(val)) {
            if ($c951b4b42a7b450c$var$isRegExp(val.validate)) compiled.validate = $c951b4b42a7b450c$var$createValidator(val.validate);
            else if ($c951b4b42a7b450c$var$isFunction(val.validate)) compiled.validate = val.validate;
            else schemaError(name, val);
            if ($c951b4b42a7b450c$var$isFunction(val.normalize)) compiled.normalize = val.normalize;
            else if (!val.normalize) compiled.normalize = $c951b4b42a7b450c$var$createNormalizer();
            else schemaError(name, val);
            return;
        }
        if ($c951b4b42a7b450c$var$isString(val)) {
            aliases.push(name);
            return;
        }
        schemaError(name, val);
    });
    //
    // Compile postponed aliases
    //
    aliases.forEach(function(alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) // Silently fail on missed schemas to avoid errons on disable.
        // schemaError(alias, self.__schemas__[alias]);
        return;
        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
    });
    //
    // Fake record for guessed links
    //
    self.__compiled__[""] = {
        validate: null,
        normalize: $c951b4b42a7b450c$var$createNormalizer()
    };
    //
    // Build schema condition
    //
    const slist = Object.keys(self.__compiled__).filter(function(name) {
        // Filter disabled & fake schemas
        return name.length > 0 && self.__compiled__[name];
    }).map($c951b4b42a7b450c$var$escapeRE).join("|");
    // (?!_) cause 1.5x slowdown
    self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
    self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
    self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
    self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
    //
    // Cleanup
    //
    $c951b4b42a7b450c$var$resetScanCache(self);
}
/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/ function $c951b4b42a7b450c$var$Match(self, shift) {
    const start = self.__index__;
    const end = self.__last_index__;
    const text = self.__text_cache__.slice(start, end);
    /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/ this.schema = self.__schema__.toLowerCase();
    /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/ this.index = start + shift;
    /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/ this.lastIndex = end + shift;
    /**
   * Match#raw -> String
   *
   * Matched string.
   **/ this.raw = text;
    /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/ this.text = text;
    /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/ this.url = text;
}
function $c951b4b42a7b450c$var$createMatch(self, shift) {
    const match = new $c951b4b42a7b450c$var$Match(self, shift);
    self.__compiled__[match.schema].normalize(match, self);
    return match;
}
/**
 * class LinkifyIt
 **/ /**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/ function $c951b4b42a7b450c$var$LinkifyIt(schemas, options) {
    if (!(this instanceof $c951b4b42a7b450c$var$LinkifyIt)) return new $c951b4b42a7b450c$var$LinkifyIt(schemas, options);
    if (!options) {
        if ($c951b4b42a7b450c$var$isOptionsObj(schemas)) {
            options = schemas;
            schemas = {};
        }
    }
    this.__opts__ = $c951b4b42a7b450c$var$assign({}, $c951b4b42a7b450c$var$defaultOptions, options);
    // Cache last tested result. Used to skip repeating steps on next `match` call.
    this.__index__ = -1;
    this.__last_index__ = -1 // Next scan position
    ;
    this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = $c951b4b42a7b450c$var$assign({}, $c951b4b42a7b450c$var$defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = $c951b4b42a7b450c$var$tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    $c951b4b42a7b450c$var$compile(this);
}
/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    $c951b4b42a7b450c$var$compile(this);
    return this;
};
/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.set = function set(options) {
    this.__opts__ = $c951b4b42a7b450c$var$assign(this.__opts__, options);
    return this;
};
/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.test = function test(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;
    if (!text.length) return false;
    let m, ml, me, len, shift, next, re, tld_pos, at_pos;
    // try to scan for link with schema - that's the most simple rule
    if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while((m = re.exec(text)) !== null){
            len = this.testSchemaAt(text, m[2], re.lastIndex);
            if (len) {
                this.__schema__ = m[2];
                this.__index__ = m.index + m[1].length;
                this.__last_index__ = m.index + m[0].length + len;
                break;
            }
        }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        // guess schemaless links
        tld_pos = text.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
            // if tld is located after found link - no need to check fuzzy pattern
            if (this.__index__ < 0 || tld_pos < this.__index__) {
                if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                    shift = ml.index + ml[1].length;
                    if (this.__index__ < 0 || shift < this.__index__) {
                        this.__schema__ = "";
                        this.__index__ = shift;
                        this.__last_index__ = ml.index + ml[0].length;
                    }
                }
            }
        }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        // guess schemaless emails
        at_pos = text.indexOf("@");
        if (at_pos >= 0) // We can't skip this check, because this cases are possible:
        // 192.168.1.1@gmail.com, my.in@example.com
        {
            if ((me = text.match(this.re.email_fuzzy)) !== null) {
                shift = me.index + me[1].length;
                next = me.index + me[0].length;
                if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
                    this.__schema__ = "mailto:";
                    this.__index__ = shift;
                    this.__last_index__ = next;
                }
            }
        }
    }
    return this.__index__ >= 0;
};
/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
};
/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) return 0;
    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};
/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.match = function match(text) {
    const result = [];
    let shift = 0;
    // Try to take previous element from cache, if .test() called before
    if (this.__index__ >= 0 && this.__text_cache__ === text) {
        result.push($c951b4b42a7b450c$var$createMatch(this, shift));
        shift = this.__last_index__;
    }
    // Cut head if cache was used
    let tail = shift ? text.slice(shift) : text;
    // Scan string until end reached
    while(this.test(tail)){
        result.push($c951b4b42a7b450c$var$createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
    }
    if (result.length) return result;
    return null;
};
/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;
    if (!text.length) return null;
    const m = this.re.schema_at_start.exec(text);
    if (!m) return null;
    const len = this.testSchemaAt(text, m[2], m[0].length);
    if (!len) return null;
    this.__schema__ = m[2];
    this.__index__ = m.index + m[1].length;
    this.__last_index__ = m.index + m[0].length + len;
    return $c951b4b42a7b450c$var$createMatch(this, 0);
};
/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [
        list
    ];
    if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        $c951b4b42a7b450c$var$compile(this);
        return this;
    }
    this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
    }).reverse();
    $c951b4b42a7b450c$var$compile(this);
    return this;
};
/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.normalize = function normalize(match) {
    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1
    if (!match.schema) match.url = "http://" + match.url;
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) match.url = "mailto:" + match.url;
};
/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/ $c951b4b42a7b450c$var$LinkifyIt.prototype.onCompile = function onCompile() {};
var $c951b4b42a7b450c$export$2e2bcd8739ae039 = $c951b4b42a7b450c$var$LinkifyIt;



"use strict";
/** Highest positive signed 32-bit float value */ const $4162c697748f08e2$var$maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */ const $4162c697748f08e2$var$base = 36;
const $4162c697748f08e2$var$tMin = 1;
const $4162c697748f08e2$var$tMax = 26;
const $4162c697748f08e2$var$skew = 38;
const $4162c697748f08e2$var$damp = 700;
const $4162c697748f08e2$var$initialBias = 72;
const $4162c697748f08e2$var$initialN = 128; // 0x80
const $4162c697748f08e2$var$delimiter = "-"; // '\x2D'
/** Regular expressions */ const $4162c697748f08e2$var$regexPunycode = /^xn--/;
const $4162c697748f08e2$var$regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const $4162c697748f08e2$var$regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
/** Error messages */ const $4162c697748f08e2$var$errors = {
    "overflow": "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
};
/** Convenience shortcuts */ const $4162c697748f08e2$var$baseMinusTMin = $4162c697748f08e2$var$base - $4162c697748f08e2$var$tMin;
const $4162c697748f08e2$var$floor = Math.floor;
const $4162c697748f08e2$var$stringFromCharCode = String.fromCharCode;
/*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function $4162c697748f08e2$var$error(type) {
    throw new RangeError($4162c697748f08e2$var$errors[type]);
}
/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */ function $4162c697748f08e2$var$map(array, callback) {
    const result = [];
    let length = array.length;
    while(length--)result[length] = callback(array[length]);
    return result;
}
/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */ function $4162c697748f08e2$var$mapDomain(domain, callback) {
    const parts = domain.split("@");
    let result = "";
    if (parts.length > 1) {
        // In email addresses, only the domain name should be punycoded. Leave
        // the local part (i.e. everything up to `@`) intact.
        result = parts[0] + "@";
        domain = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    domain = domain.replace($4162c697748f08e2$var$regexSeparators, ".");
    const labels = domain.split(".");
    const encoded = $4162c697748f08e2$var$map(labels, callback).join(".");
    return result + encoded;
}
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */ function $4162c697748f08e2$export$c1700176c90f250f(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while(counter < length){
        const value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            const extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
            }
        } else output.push(value);
    }
    return output;
}
/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */ const $4162c697748f08e2$export$f999239d9b149395 = (codePoints)=>String.fromCodePoint(...codePoints);
/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */ const $4162c697748f08e2$var$basicToDigit = function(codePoint) {
    if (codePoint >= 0x30 && codePoint < 0x3A) return 26 + (codePoint - 0x30);
    if (codePoint >= 0x41 && codePoint < 0x5B) return codePoint - 0x41;
    if (codePoint >= 0x61 && codePoint < 0x7B) return codePoint - 0x61;
    return $4162c697748f08e2$var$base;
};
/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */ const $4162c697748f08e2$var$digitToBasic = function(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */ const $4162c697748f08e2$var$adapt = function(delta, numPoints, firstTime) {
    let k = 0;
    delta = firstTime ? $4162c697748f08e2$var$floor(delta / $4162c697748f08e2$var$damp) : delta >> 1;
    delta += $4162c697748f08e2$var$floor(delta / numPoints);
    for(; delta > $4162c697748f08e2$var$baseMinusTMin * $4162c697748f08e2$var$tMax >> 1; k += $4162c697748f08e2$var$base)delta = $4162c697748f08e2$var$floor(delta / $4162c697748f08e2$var$baseMinusTMin);
    return $4162c697748f08e2$var$floor(k + ($4162c697748f08e2$var$baseMinusTMin + 1) * delta / (delta + $4162c697748f08e2$var$skew));
};
/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */ const $4162c697748f08e2$export$2f872c0f2117be69 = function(input) {
    // Don't use UCS-2.
    const output = [];
    const inputLength = input.length;
    let i = 0;
    let n = $4162c697748f08e2$var$initialN;
    let bias = $4162c697748f08e2$var$initialBias;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
    let basic = input.lastIndexOf($4162c697748f08e2$var$delimiter);
    if (basic < 0) basic = 0;
    for(let j = 0; j < basic; ++j){
        // if it's not a basic code point
        if (input.charCodeAt(j) >= 0x80) $4162c697748f08e2$var$error("not-basic");
        output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
    for(let index = basic > 0 ? basic + 1 : 0; index < inputLength;){
        // `index` is the index of the next character to be consumed.
        // Decode a generalized variable-length integer into `delta`,
        // which gets added to `i`. The overflow checking is easier
        // if we increase `i` as we go, then subtract off its starting
        // value at the end to obtain `delta`.
        const oldi = i;
        for(let w = 1, k = $4162c697748f08e2$var$base;; k += $4162c697748f08e2$var$base){
            if (index >= inputLength) $4162c697748f08e2$var$error("invalid-input");
            const digit = $4162c697748f08e2$var$basicToDigit(input.charCodeAt(index++));
            if (digit >= $4162c697748f08e2$var$base) $4162c697748f08e2$var$error("invalid-input");
            if (digit > $4162c697748f08e2$var$floor(($4162c697748f08e2$var$maxInt - i) / w)) $4162c697748f08e2$var$error("overflow");
            i += digit * w;
            const t = k <= bias ? $4162c697748f08e2$var$tMin : k >= bias + $4162c697748f08e2$var$tMax ? $4162c697748f08e2$var$tMax : k - bias;
            if (digit < t) break;
            const baseMinusT = $4162c697748f08e2$var$base - t;
            if (w > $4162c697748f08e2$var$floor($4162c697748f08e2$var$maxInt / baseMinusT)) $4162c697748f08e2$var$error("overflow");
            w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = $4162c697748f08e2$var$adapt(i - oldi, out, oldi == 0);
        // `i` was supposed to wrap around from `out` to `0`,
        // incrementing `n` each time, so we'll fix that now:
        if ($4162c697748f08e2$var$floor(i / out) > $4162c697748f08e2$var$maxInt - n) $4162c697748f08e2$var$error("overflow");
        n += $4162c697748f08e2$var$floor(i / out);
        i %= out;
        // Insert `n` at position `i` of the output.
        output.splice(i++, 0, n);
    }
    return String.fromCodePoint(...output);
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */ const $4162c697748f08e2$export$c564cdbbe6da493 = function(input) {
    const output = [];
    // Convert the input in UCS-2 to an array of Unicode code points.
    input = $4162c697748f08e2$export$c1700176c90f250f(input);
    // Cache the length.
    const inputLength = input.length;
    // Initialize the state.
    let n = $4162c697748f08e2$var$initialN;
    let delta = 0;
    let bias = $4162c697748f08e2$var$initialBias;
    // Handle the basic code points.
    for (const currentValue of input)if (currentValue < 0x80) output.push($4162c697748f08e2$var$stringFromCharCode(currentValue));
    const basicLength = output.length;
    let handledCPCount = basicLength;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) output.push($4162c697748f08e2$var$delimiter);
    // Main encoding loop:
    while(handledCPCount < inputLength){
        // All non-basic code points < n have been handled already. Find the next
        // larger one:
        let m = $4162c697748f08e2$var$maxInt;
        for (const currentValue of input)if (currentValue >= n && currentValue < m) m = currentValue;
        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > $4162c697748f08e2$var$floor(($4162c697748f08e2$var$maxInt - delta) / handledCPCountPlusOne)) $4162c697748f08e2$var$error("overflow");
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input){
            if (currentValue < n && ++delta > $4162c697748f08e2$var$maxInt) $4162c697748f08e2$var$error("overflow");
            if (currentValue === n) {
                // Represent delta as a generalized variable-length integer.
                let q = delta;
                for(let k = $4162c697748f08e2$var$base;; k += $4162c697748f08e2$var$base){
                    const t = k <= bias ? $4162c697748f08e2$var$tMin : k >= bias + $4162c697748f08e2$var$tMax ? $4162c697748f08e2$var$tMax : k - bias;
                    if (q < t) break;
                    const qMinusT = q - t;
                    const baseMinusT = $4162c697748f08e2$var$base - t;
                    output.push($4162c697748f08e2$var$stringFromCharCode($4162c697748f08e2$var$digitToBasic(t + qMinusT % baseMinusT, 0)));
                    q = $4162c697748f08e2$var$floor(qMinusT / baseMinusT);
                }
                output.push($4162c697748f08e2$var$stringFromCharCode($4162c697748f08e2$var$digitToBasic(q, 0)));
                bias = $4162c697748f08e2$var$adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
                delta = 0;
                ++handledCPCount;
            }
        }
        ++delta;
        ++n;
    }
    return output.join("");
};
/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */ const $4162c697748f08e2$export$110c810e8727e62b = function(input) {
    return $4162c697748f08e2$var$mapDomain(input, function(string) {
        return $4162c697748f08e2$var$regexPunycode.test(string) ? $4162c697748f08e2$export$2f872c0f2117be69(string.slice(4).toLowerCase()) : string;
    });
};
/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */ const $4162c697748f08e2$export$69111c4ea6e0c4a0 = function(input) {
    return $4162c697748f08e2$var$mapDomain(input, function(string) {
        return $4162c697748f08e2$var$regexNonASCII.test(string) ? "xn--" + $4162c697748f08e2$export$c564cdbbe6da493(string) : string;
    });
};
/*--------------------------------------------------------------------------*/ /** Define the public API */ const $4162c697748f08e2$var$punycode = {
    /**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */ "version": "2.3.1",
    /**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */ "ucs2": {
        "decode": $4162c697748f08e2$export$c1700176c90f250f,
        "encode": $4162c697748f08e2$export$f999239d9b149395
    },
    "decode": $4162c697748f08e2$export$2f872c0f2117be69,
    "encode": $4162c697748f08e2$export$c564cdbbe6da493,
    "toASCII": $4162c697748f08e2$export$69111c4ea6e0c4a0,
    "toUnicode": $4162c697748f08e2$export$110c810e8727e62b
};
var $4162c697748f08e2$export$2e2bcd8739ae039 = $4162c697748f08e2$var$punycode;


// markdown-it default options
var $99f4a23f43037ab1$export$2e2bcd8739ae039 = {
    options: {
        // Enable HTML tags in source
        html: false,
        // Use '/' to close single tags (<br />)
        xhtmlOut: false,
        // Convert '\n' in paragraphs into <br>
        breaks: false,
        // CSS language prefix for fenced blocks
        langPrefix: "language-",
        // autoconvert URL-like texts to links
        linkify: false,
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */ // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        // Internal protection, recursion limit
        maxNesting: 100
    },
    components: {
        core: {},
        block: {},
        inline: {}
    }
};


// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.
var $bde72096f62796d6$export$2e2bcd8739ae039 = {
    options: {
        // Enable HTML tags in source
        html: false,
        // Use '/' to close single tags (<br />)
        xhtmlOut: false,
        // Convert '\n' in paragraphs into <br>
        breaks: false,
        // CSS language prefix for fenced blocks
        langPrefix: "language-",
        // autoconvert URL-like texts to links
        linkify: false,
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */ // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        // Internal protection, recursion limit
        maxNesting: 20
    },
    components: {
        core: {
            rules: [
                "normalize",
                "block",
                "inline",
                "text_join"
            ]
        },
        block: {
            rules: [
                "paragraph"
            ]
        },
        inline: {
            rules: [
                "text"
            ],
            rules2: [
                "balance_pairs",
                "fragments_join"
            ]
        }
    }
};


// Commonmark default options
var $a710613ce0e8f89c$export$2e2bcd8739ae039 = {
    options: {
        // Enable HTML tags in source
        html: true,
        // Use '/' to close single tags (<br />)
        xhtmlOut: true,
        // Convert '\n' in paragraphs into <br>
        breaks: false,
        // CSS language prefix for fenced blocks
        langPrefix: "language-",
        // autoconvert URL-like texts to links
        linkify: false,
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */ // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        // Internal protection, recursion limit
        maxNesting: 20
    },
    components: {
        core: {
            rules: [
                "normalize",
                "block",
                "inline",
                "text_join"
            ]
        },
        block: {
            rules: [
                "blockquote",
                "code",
                "fence",
                "heading",
                "hr",
                "html_block",
                "lheading",
                "list",
                "reference",
                "paragraph"
            ]
        },
        inline: {
            rules: [
                "autolink",
                "backticks",
                "emphasis",
                "entity",
                "escape",
                "html_inline",
                "image",
                "link",
                "newline",
                "text"
            ],
            rules2: [
                "balance_pairs",
                "emphasis",
                "fragments_join"
            ]
        }
    }
};


const $8f52d7c0923d415d$var$config = {
    default: (0, $99f4a23f43037ab1$export$2e2bcd8739ae039),
    zero: (0, $bde72096f62796d6$export$2e2bcd8739ae039),
    commonmark: (0, $a710613ce0e8f89c$export$2e2bcd8739ae039)
};
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//
const $8f52d7c0923d415d$var$BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
const $8f52d7c0923d415d$var$GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function $8f52d7c0923d415d$var$validateLink(url) {
    // url should be normalized at this point, and existing entities are decoded
    const str = url.trim().toLowerCase();
    return $8f52d7c0923d415d$var$BAD_PROTO_RE.test(str) ? $8f52d7c0923d415d$var$GOOD_DATA_RE.test(str) : true;
}
const $8f52d7c0923d415d$var$RECODE_HOSTNAME_FOR = [
    "http:",
    "https:",
    "mailto:"
];
function $8f52d7c0923d415d$var$normalizeLink(url) {
    const parsed = $d6208c800cb4cc10$export$2e2bcd8739ae039(url, true);
    if (parsed.hostname) {
        // Encode hostnames in urls like:
        // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
        //
        // We don't encode unknown schemas, because it's likely that we encode
        // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
        //
        if (!parsed.protocol || $8f52d7c0923d415d$var$RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) try {
            parsed.hostname = (0, $4162c697748f08e2$export$2e2bcd8739ae039).toASCII(parsed.hostname);
        } catch (er) {}
    }
    return $efc397c21a3f066f$export$2e2bcd8739ae039($b33c530d379d8b8e$export$2e2bcd8739ae039(parsed));
}
function $8f52d7c0923d415d$var$normalizeLinkText(url) {
    const parsed = $d6208c800cb4cc10$export$2e2bcd8739ae039(url, true);
    if (parsed.hostname) {
        // Encode hostnames in urls like:
        // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
        //
        // We don't encode unknown schemas, because it's likely that we encode
        // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
        //
        if (!parsed.protocol || $8f52d7c0923d415d$var$RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) try {
            parsed.hostname = (0, $4162c697748f08e2$export$2e2bcd8739ae039).toUnicode(parsed.hostname);
        } catch (er) {}
    }
    // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
    return $2cf8e509e71c2bd4$export$2e2bcd8739ae039($b33c530d379d8b8e$export$2e2bcd8739ae039(parsed), $2cf8e509e71c2bd4$export$2e2bcd8739ae039.defaultChars + "%");
}
/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/ /**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.mjs) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.mjs) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.mjs) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>` or `<code>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre><code class="hljs">' +
 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/ function $8f52d7c0923d415d$var$MarkdownIt(presetName, options) {
    if (!(this instanceof $8f52d7c0923d415d$var$MarkdownIt)) return new $8f52d7c0923d415d$var$MarkdownIt(presetName, options);
    if (!options) {
        if (!$9dfa02e88e21d57b$exports.isString(presetName)) {
            options = presetName || {};
            presetName = "default";
        }
    }
    /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/ this.inline = new (0, $428b098aaaaa433c$export$2e2bcd8739ae039)();
    /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/ this.block = new (0, $0b75a80bb2510d99$export$2e2bcd8739ae039)();
    /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/ this.core = new (0, $2b77d9b76040af7b$export$2e2bcd8739ae039)();
    /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs).
   **/ this.renderer = new (0, $746cee2f83e00c45$export$2e2bcd8739ae039)();
    /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.mjs)
   * rule.
   **/ this.linkify = new (0, $c951b4b42a7b450c$export$2e2bcd8739ae039)();
    /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/ this.validateLink = $8f52d7c0923d415d$var$validateLink;
    /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/ this.normalizeLink = $8f52d7c0923d415d$var$normalizeLink;
    /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/ this.normalizeLinkText = $8f52d7c0923d415d$var$normalizeLinkText;
    // Expose utils & helpers for easy acces from plugins
    /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.mjs).
   **/ this.utils = $9dfa02e88e21d57b$exports;
    /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/ this.helpers = $9dfa02e88e21d57b$exports.assign({}, $a28ed8732285aa35$exports);
    this.options = {};
    this.configure(presetName);
    if (options) this.set(options);
}
/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.set = function(options) {
    $9dfa02e88e21d57b$exports.assign(this.options, options);
    return this;
};
/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.configure = function(presets) {
    const self = this;
    if ($9dfa02e88e21d57b$exports.isString(presets)) {
        const presetName = presets;
        presets = $8f52d7c0923d415d$var$config[presetName];
        if (!presets) throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
    if (!presets) throw new Error("Wrong `markdown-it` preset, can't be empty");
    if (presets.options) self.set(presets.options);
    if (presets.components) Object.keys(presets.components).forEach(function(name) {
        if (presets.components[name].rules) self[name].ruler.enableOnly(presets.components[name].rules);
        if (presets.components[name].rules2) self[name].ruler2.enableOnly(presets.components[name].rules2);
    });
    return this;
};
/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
    let result = [];
    if (!Array.isArray(list)) list = [
        list
    ];
    [
        "core",
        "block",
        "inline"
    ].forEach(function(chain) {
        result = result.concat(this[chain].ruler.enable(list, true));
    }, this);
    result = result.concat(this.inline.ruler2.enable(list, true));
    const missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
    });
    if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
    return this;
};
/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
    let result = [];
    if (!Array.isArray(list)) list = [
        list
    ];
    [
        "core",
        "block",
        "inline"
    ].forEach(function(chain) {
        result = result.concat(this[chain].ruler.disable(list, true));
    }, this);
    result = result.concat(this.inline.ruler2.disable(list, true));
    const missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
    });
    if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
    return this;
};
/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.use = function(plugin /*, params, ... */ ) {
    const args = [
        this
    ].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
};
/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.parse = function(src, env) {
    if (typeof src !== "string") throw new Error("Input data should be a String");
    const state = new this.core.State(src, this, env);
    this.core.process(state);
    return state.tokens;
};
/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.render = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parse(src, env), this.options, env);
};
/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.parseInline = function(src, env) {
    const state = new this.core.State(src, this, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
};
/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/ $8f52d7c0923d415d$var$MarkdownIt.prototype.renderInline = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(src, env), this.options, env);
};
var $8f52d7c0923d415d$export$2e2bcd8739ae039 = $8f52d7c0923d415d$var$MarkdownIt;




var $1a103d458c2858db$exports = {};

$1a103d458c2858db$exports = (parcelRequire("77BDW")).getBundleURL("l1TdG") + "introduction.e9b8e669.txt";


var $c2fcc49db7e33f36$exports = {};

$c2fcc49db7e33f36$exports = (parcelRequire("77BDW")).getBundleURL("l1TdG") + "part1.9ea5eb0e.txt";


var $85137fa0c7093a7a$exports = {};

$85137fa0c7093a7a$exports = (parcelRequire("77BDW")).getBundleURL("l1TdG") + "part2.6a2014a5.txt";


var $dd0a36d370d77f29$exports = {};

$dd0a36d370d77f29$exports = (parcelRequire("77BDW")).getBundleURL("l1TdG") + "part3.1b77381b.txt";


var $afa09bc67eeb4e99$exports = {};

$afa09bc67eeb4e99$exports = (parcelRequire("77BDW")).getBundleURL("l1TdG") + "conclusion.a420c527.txt";


const $d878ba6f974f281f$var$BASE_DIR = "https://raw.githubusercontent.com/Debetome/actitud-salmon-book-webpage/master/content";
const $d878ba6f974f281f$var$bookIndex = [
    {
        "title": "INTRODUCCI\xd3N",
        "content": `${$d878ba6f974f281f$var$BASE_DIR}/introduction.txt`,
        "sections": [
            "\xbfQu\xe9 vas a encontrar en este libro?"
        ]
    },
    {
        "title": "PARTE 1: Fundamentos de la Actitud Salm\xf3n",
        "content": `${$d878ba6f974f281f$var$BASE_DIR}/part1.txt`,
        "sections": [
            "\xbfDe qui\xe9n depende el futuro de tu negocio?",
            "Lucha contra los supervillanos",
            "Tu arma secreta: la Actitud Salm\xf3n"
        ]
    },
    {
        "title": "PARTE 2: Actitud Salm\xf3n en tu negocio",
        "content": `${$d878ba6f974f281f$var$BASE_DIR}/part2.txt`,
        "sections": [
            "La Actitud Salm\xf3n genera negocio",
            "Cuatro caminos para hacer negocio a contracorriente",
            "CLIENTES: Repensando personas y necesidades",
            "OFERTA: Cuestionarme lo que ofrezco",
            "VENTA: Sacar provecho del nuevo proceso de compra",
            "COMUNICACI\xd3N: El veh\xedculo hacia el cliente"
        ]
    },
    {
        "title": "PARTE 3: Poner en marcha tu Actitud Salm\xf3n",
        "content": `${$d878ba6f974f281f$var$BASE_DIR}/part3.txt`,
        "sections": [
            "7 ingredientes para ponerse en acci\xf3n",
            "Escapa de la forma de hacer tradicional",
            "Procesos y herramientas",
            "Mejor hoy que ma\xf1ana"
        ]
    },
    {
        "title": "CONCLUSI\xd3N. Haz tu propia receta",
        "content": `${$d878ba6f974f281f$var$BASE_DIR}/conclusion.txt`,
        "sections": [
            "Agradecimientos",
            "Bibliograf\xeda",
            "Sobre m\xed. Por si quieres conocerme algo m\xe1s"
        ]
    }
];
var $d878ba6f974f281f$export$2e2bcd8739ae039 = $d878ba6f974f281f$var$bookIndex;


class $13638b070592d0bc$var$AppState {
    constructor(){
        this.states = {};
    }
    setState(key, value) {
        this.states[key] = value;
    }
    getState(key) {
        return this.states[key];
    }
}
const $13638b070592d0bc$var$AppStateInstance = new $13638b070592d0bc$var$AppState();
var $13638b070592d0bc$export$2e2bcd8739ae039 = $13638b070592d0bc$var$AppStateInstance;


const $30e7c75d6cc86606$var$md = new (0, $8f52d7c0923d415d$export$2e2bcd8739ae039)();
function $30e7c75d6cc86606$export$5185fbaa56dadb70(index) {
    const markdownContainer = document.getElementById("markdown-container");
    const selectedContent = (0, $d878ba6f974f281f$export$2e2bcd8739ae039)[index].content;
    $30e7c75d6cc86606$var$fetchMarkdownFile(selectedContent).then((markdownText)=>{
        markdownContainer.innerHTML = $30e7c75d6cc86606$var$md.render(markdownText);
        (0, $13638b070592d0bc$export$2e2bcd8739ae039).setState("contentIndex", index);
        $30e7c75d6cc86606$var$scrollTop();
    });
}
function $30e7c75d6cc86606$export$eae8b2058076558d() {
    const index = (0, $13638b070592d0bc$export$2e2bcd8739ae039).getState("contentIndex") + 1;
    if (index === (0, $d878ba6f974f281f$export$2e2bcd8739ae039).length) return;
    $30e7c75d6cc86606$export$5185fbaa56dadb70(index);
}
function $30e7c75d6cc86606$export$ee3b179c2b6294cc() {
    const index = (0, $13638b070592d0bc$export$2e2bcd8739ae039).getState("contentIndex") - 1;
    if (index < 0) return;
    $30e7c75d6cc86606$export$5185fbaa56dadb70(index);
}
function $30e7c75d6cc86606$export$d8746b696b44b9ab(title) {
    const contentContainer = document.getElementById("book-content-container");
    const markdownContainer = document.getElementById("markdown-container");
    const sectionTitle = [
        ...markdownContainer.querySelectorAll("h1,h2,h3")
    ].filter((h2)=>h2.innerText === title)[0];
    contentContainer.scrollTop = sectionTitle.offsetTop - contentContainer.offsetTop;
}
function $30e7c75d6cc86606$export$96b90a386b3f9ce3() {
    $30e7c75d6cc86606$export$5185fbaa56dadb70(0);
}
function $30e7c75d6cc86606$var$scrollTop() {
    const contentContainer = document.getElementById("book-content-container");
    contentContainer.scrollTop = 0;
}
function $30e7c75d6cc86606$var$fetchMarkdownFile(filePath) {
    return fetch(filePath).then((response)=>{
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
    }).then((markdownText)=>{
        return markdownText;
    }).catch((error)=>{
        console.error("Error fetching the Markdown file:", error);
    });
}



function $de00ef9629927082$export$f7cec2a8d97b2628() {
    window.addEventListener("resize", ()=>{
        $de00ef9629927082$var$toggleSidePanelState();
        $de00ef9629927082$export$1915eb63e746a924();
    });
    $de00ef9629927082$var$toggleSidePanelState();
    $de00ef9629927082$export$1915eb63e746a924();
}
function $de00ef9629927082$export$1915eb63e746a924() {
    const sidePanelList = document.querySelector("#side-panel #side-panel-list");
    const height = parseInt(window.getComputedStyle(sidePanelList).height.replace("px", ""));
    (0, $13638b070592d0bc$export$2e2bcd8739ae039).setState("smallSidePanel", height < 590);
    sidePanelList.style.paddingBottom = height < 590;
}
function $de00ef9629927082$var$toggleSidePanelState() {
    const sidePanel = document.getElementById("side-panel");
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 580) {
        sidePanel.classList.add("hidden");
        return;
    }
    sidePanel.classList.remove("hidden");
}




function $bd765c5d2a9b4f8c$export$295845725b6cc177() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel.classList.contains("hidden")) {
        sidePanel.classList.remove("hidden");
        return;
    }
    sidePanel.classList.add("hidden");
}
function $bd765c5d2a9b4f8c$export$a676f1953b1af384(index) {
    if (index < 0 || index >= (0, $d878ba6f974f281f$export$2e2bcd8739ae039).length) return;
    const sidePanelList = document.querySelector("#side-panel #side-panel-list");
    const childLists = document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist");
    const bookPartLinks = [
        ...document.querySelectorAll("#side-panel #side-panel-list li")
    ].filter((li)=>!li.parentElement.classList.contains("side-panel-childlist")).map((li)=>li.firstChild);
    const shownChildList = document.querySelector("#side-panel #side-panel-list .side-panel-childlist.shown");
    const partSelected = document.querySelector("#side-panel #side-panel-list li a.selected");
    if (partSelected || shownChildList) {
        shownChildList.style.height = "0";
        sidePanelList.style.height = "100%";
        shownChildList.classList.remove("shown");
        partSelected.classList.remove("selected");
        (0, $de00ef9629927082$export$1915eb63e746a924)();
        if (partSelected === bookPartLinks[index] || shownChildList === childLists[index]) return;
    }
    (0, $30e7c75d6cc86606$export$5185fbaa56dadb70)(index);
    bookPartLinks[index].classList.add("selected");
    if (index < childLists.length) childLists[index].classList.add("shown");
    const sidePanelHeight = parseInt(window.getComputedStyle(sidePanelList).height.replace("px", ""));
    const childListHeight = [
        ...childLists[index].children
    ].map((li)=>parseInt(window.getComputedStyle(li).height.replace("px", ""))).reduce((next, current)=>next + current);
    sidePanelList.style.height = `${sidePanelHeight + childListHeight + 200}px`;
    childLists[index].style.height = `${childListHeight}px`;
}
function $bd765c5d2a9b4f8c$export$2fbd9e41f8499565() {
    $bd765c5d2a9b4f8c$var$initPanelList();
    $bd765c5d2a9b4f8c$var$initPanelListEvents();
    $bd765c5d2a9b4f8c$var$initChildListEvents();
}
function $bd765c5d2a9b4f8c$var$initPanelList() {
    const sidePanelList = document.getElementById("side-panel-list");
    for(let i = 0; i < (0, $d878ba6f974f281f$export$2e2bcd8739ae039).length; i++){
        const tempContainer = document.createElement("div");
        tempContainer.innerHTML = `<li><a>${(0, $d878ba6f974f281f$export$2e2bcd8739ae039)[i].title}</a></li>`;
        sidePanelList.appendChild(tempContainer.firstChild);
        if ("sections" in (0, $d878ba6f974f281f$export$2e2bcd8739ae039)[i]) {
            const childList = document.createElement("ul");
            childList.className = "side-panel-childlist";
            (0, $d878ba6f974f281f$export$2e2bcd8739ae039)[i].sections.forEach((section, index)=>{
                const childListElement = document.createElement("li");
                const childListLink = document.createElement("a");
                childListLink.innerText = `${section}`;
                childListLink.addEventListener("click", ()=>(0, $30e7c75d6cc86606$export$d8746b696b44b9ab)(section));
                childListElement.appendChild(childListLink);
                childList.appendChild(childListElement);
            });
            sidePanelList.appendChild(childList);
        }
    }
}
function $bd765c5d2a9b4f8c$var$initPanelListEvents() {
    const bookPartLinks = [
        ...document.querySelectorAll("#side-panel #side-panel-list li")
    ].filter((li)=>!li.parentElement.classList.contains("side-panel-childlist")).map((li)=>li.firstChild);
    bookPartLinks.forEach((partLink, index)=>{
        partLink.addEventListener("click", (event)=>{
            $bd765c5d2a9b4f8c$export$a676f1953b1af384(index);
            $bd765c5d2a9b4f8c$var$scrollToSelection(index);
        });
    });
}
function $bd765c5d2a9b4f8c$var$initChildListEvents() {
    const childListsLinks = [
        ...document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist li a")
    ];
    const sidePanel = document.getElementById("side-panel");
    childListsLinks.forEach((childLink)=>{
        childLink.addEventListener("click", (event)=>{
            event.preventDefault();
            if (window.getComputedStyle(sidePanel).position === "absolute") $bd765c5d2a9b4f8c$export$295845725b6cc177();
        });
    });
}
function $bd765c5d2a9b4f8c$var$scrollToSelection(index) {
    if (!(0, $13638b070592d0bc$export$2e2bcd8739ae039).getState("smallSidePanel")) return;
    const sidePanel = document.getElementById("side-panel");
    const selection = document.getElementById("side-panel-list").children[index];
    sidePanel.scrollTop = selection.offsetTop - sidePanel.offsetTop;
}



function $b05f4c105da9051e$export$fe3401bcaf757081() {
    const topPanelBtn = document.querySelector("#sidepanel-btn a");
    topPanelBtn.addEventListener("click", ()=>{
        (0, $bd765c5d2a9b4f8c$export$295845725b6cc177)();
    });
}



function $c42880eea0ece407$export$ef4d0a6682bc1968() {
    const fullScreenBtn = document.querySelector("#fullscreen-btn a");
    const minimizeBtn = document.getElementById("minimize-btn");
    fullScreenBtn.addEventListener("click", ()=>$c42880eea0ece407$var$toggleFullscreen());
    minimizeBtn.addEventListener("click", ()=>$c42880eea0ece407$var$toggleFullscreen());
    document.addEventListener("fullscreenchange", (event)=>{
        if (!document.fullscreenElement) {
            const container = document.getElementById("book-content-container");
            const minimizeBtn = document.getElementById("minimize-btn");
            minimizeBtn.classList.remove("fullscreen");
            container.classList.remove("fullscreen");
        }
    });
}
function $c42880eea0ece407$var$toggleFullscreen() {
    const container = document.getElementById("book-content-container");
    const minimizeBtn = document.getElementById("minimize-btn");
    if (!document.fullscreenElement) container.requestFullscreen().then((_)=>{
        minimizeBtn.classList.add("fullscreen");
        container.classList.add("fullscreen");
    }).catch((err)=>{
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
    else {
        minimizeBtn.classList.remove("fullscreen");
        container.classList.add("fullscreen");
        document.exitFullscreen();
    }
}





function $aff16969246ddf31$export$8794f902b9796474() {
    const navArrowsNavs = [
        ...document.querySelectorAll(".nav-arrows")
    ];
    navArrowsNavs.forEach((nav)=>{
        const leftArrow = nav.firstElementChild;
        const rightArrow = nav.lastElementChild;
        leftArrow.addEventListener("click", ()=>{
            const prevIndex = (0, $13638b070592d0bc$export$2e2bcd8739ae039).getState("contentIndex") - 1;
            (0, $bd765c5d2a9b4f8c$export$a676f1953b1af384)(prevIndex);
            (0, $30e7c75d6cc86606$export$ee3b179c2b6294cc)();
        });
        rightArrow.addEventListener("click", ()=>{
            const nextIndex = (0, $13638b070592d0bc$export$2e2bcd8739ae039).getState("contentIndex") + 1;
            (0, $bd765c5d2a9b4f8c$export$a676f1953b1af384)(nextIndex);
            (0, $30e7c75d6cc86606$export$eae8b2058076558d)();
        });
    });
}



(0, $bd765c5d2a9b4f8c$export$2fbd9e41f8499565)();
(0, $b05f4c105da9051e$export$fe3401bcaf757081)();
(0, $30e7c75d6cc86606$export$96b90a386b3f9ce3)();
(0, $c42880eea0ece407$export$ef4d0a6682bc1968)();
(0, $aff16969246ddf31$export$8794f902b9796474)();
(0, $de00ef9629927082$export$f7cec2a8d97b2628)();

})();
