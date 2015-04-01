/* Created at 2010/04/27 10:17:20, Includes files: [tools.js, data.js, jquery-1.3.2.min.js, jquery.autocomplete.js, default-top.js]*/
now = new Date();
random = now.getTime();



function onBodyLoad() {}
function letterStyleOn(letterId) {
    var letterElement = document.getElementById(letterId);
    letterElement.style.backgroundColor = "#adadad";
    letterElement.style.color = "#fff"
}
function JSONscriptRequest(fullUrl) {
    this.fullUrl = fullUrl;
    this.noCacheIE = "&noCacheIE=" + (new Date()).getTime();
    this.headLoc = document.getElementsByTagName("head").item(0);
    this.scriptId = "YJscriptId" + JSONscriptRequest.scriptCounter++
}
JSONscriptRequest.scriptCounter = 1;
JSONscriptRequest.prototype.buildScriptTag = function () {
    this.scriptObj = document.createElement("script");
    this.scriptObj.setAttribute("type", "text/javascript");
    this.scriptObj.setAttribute("src", this.fullUrl + this.noCacheIE);
    this.scriptObj.setAttribute("id", this.scriptId)
};
JSONscriptRequest.prototype.removeScriptTag = function () {
    this.headLoc.removeChild(this.scriptObj)
};
JSONscriptRequest.prototype.addScriptTag = function () {
    this.headLoc.appendChild(this.scriptObj)
};

function getSubmittedData(url) {
    aObj = new JSONscriptRequest(url);
    aObj.buildScriptTag();
    aObj.addScriptTag()
}
var cookieBeacon = "";
var checkedBeacon = false;
var cookieIgnlogin = "";
var checkedIgnlogin = false;
var cookieFrogger = "";
var checkedFrogger = false;
var cookieAta = "";
var checkedAta = false;
var cookieFavTab = "";
var checkedFavTab = false;

function getCookieData(label) {
    var labelLen = label.length;
    var cookie = document.cookie;
    if (cookie) {
        var cLen = document.cookie.length;
        if (cLen > 0) {
            var x = cookie.indexOf(label + "=");
            if (x > -1) {
                var y = cookie.indexOf(";", x);
                y = (y == -1 ? cLen : y);
                return (unescape(cookie.substring(x + labelLen + 1, y)))
            }
        }
    }
    return ("")
}

var dbits;
var canary = 244837814094590;
var j_lm = ((canary & 16777215) == 15715070);

function BigInteger(a, b, c) {
    if (a != null) {
        if ("number" == typeof a) {
            this.fromNumber(a, b, c)
        } else {
            if (b == null && "string" != typeof a) {
                this.fromString(a, 256)
            } else {
                this.fromString(a, b)
            }
        }
    }
}
function nbi() {
    return new BigInteger(null)
}
function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 67108864);
        w[j++] = v & 67108863
    }
    return c
}
function am2(i, x, w, j, c, n) {
    var xl = x & 32767,
        xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 32767;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 1073741823
    }
    return c
}
function am3(i, x, w, j, c, n) {
    var xl = x & 16383,
        xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 16383;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 16383) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 268435455
    }
    return c
}
if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30
} else {
    if (j_lm && (navigator.appName != "Netscape")) {
        BigInteger.prototype.am = am1;
        dbits = 26
    } else {
        BigInteger.prototype.am = am3;
        dbits = 28
    }
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv
}
function int2char(n) {
    return BI_RM.charAt(n)
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c
}
function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i) {
        r[i] = this[i]
    }
    r.t = this.t;
    r.s = this.s
}
function bnpFromInt(x) {
    this.t = 1;
    this.s = (x < 0) ? -1 : 0;
    if (x > 0) {
        this[0] = x
    } else {
        if (x < -1) {
            this[0] = x + DV
        } else {
            this.t = 0
        }
    }
}
function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r
}
function bnpFromString(s, b) {
    var k;
    if (b == 16) {
        k = 4
    } else {
        if (b == 8) {
            k = 3
        } else {
            if (b == 256) {
                k = 8
            } else {
                if (b == 2) {
                    k = 1
                } else {
                    if (b == 32) {
                        k = 5
                    } else {
                        if (b == 4) {
                            k = 2
                        } else {
                            this.fromRadix(s, b);
                            return
                        }
                    }
                }
            }
        }
    }
    this.t = 0;
    this.s = 0;
    var i = s.length,
        mi = false,
        sh = 0;
    while (--i >= 0) {
        var x = (k == 8) ? s[i] & 255 : intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-") {
                mi = true
            }
            continue
        }
        mi = false;
        if (sh == 0) {
            this[this.t++] = x
        } else {
            if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh))
            } else {
                this[this.t - 1] |= x << sh
            }
        }
        sh += k;
        if (sh >= this.DB) {
            sh -= this.DB
        }
    }
    if (k == 8 && (s[0] & 128) != 0) {
        this.s = -1;
        if (sh > 0) {
            this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh
        }
    }
    this.clamp();
    if (mi) {
        BigInteger.ZERO.subTo(this, this)
    }
}
function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) {
        --this.t
    }
}
function bnToString(b) {
    if (this.s < 0) {
        return "-" + this.negate().toString(b)
    }
    var k;
    if (b == 16) {
        k = 4
    } else {
        if (b == 8) {
            k = 3
        } else {
            if (b == 2) {
                k = 1
            } else {
                if (b == 32) {
                    k = 5
                } else {
                    if (b == 4) {
                        k = 2
                    } else {
                        return this.toRadix(b)
                    }
                }
            }
        }
    }
    var km = (1 << k) - 1,
        d, m = false,
        r = "",
        i = this.t;
    var p = this.DB - (i * this.DB) % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d)
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & ((1 << p) - 1)) << (k - p);
                d |= this[--i] >> (p += this.DB - k)
            } else {
                d = (this[i] >> (p -= k)) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i
                }
            }
            if (d > 0) {
                m = true
            }
            if (m) {
                r += int2char(d)
            }
        }
    }
    return m ? r : "0"
}
function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r
}
function bnAbs() {
    return (this.s < 0) ? this.negate() : this
}
function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0) {
        return r
    }
    var i = this.t;
    r = i - a.t;
    if (r != 0) {
        return r
    }
    while (--i >= 0) {
        if ((r = this[i] - a[i]) != 0) {
            return r
        }
    }
    return 0
}
function nbits(x) {
    var r = 1,
        t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1
    }
    return r
}
function bnBitLength() {
    if (this.t <= 0) {
        return 0
    }
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM))
}
function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + n] = this[i]
    }
    for (i = n - 1; i >= 0; --i) {
        r[i] = 0
    }
    r.t = this.t + n;
    r.s = this.s
}
function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i) {
        r[i - n] = this[i]
    }
    r.t = Math.max(this.t - n, 0);
    r.s = this.s
}
function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB),
        c = (this.s << bs) & this.DM,
        i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = (this[i] >> cbs) | c;
        c = (this[i] & bm) << bs
    }
    for (i = ds - 1; i >= 0; --i) {
        r[i] = 0
    }
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp()
}
function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs
    }
    if (bs > 0) {
        r[this.t - ds - 1] |= (this.s & bm) << cbs
    }
    r.t = this.t - ds;
    r.clamp()
}
function bnpSubTo(a, r) {
    var i = 0,
        c = 0,
        m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += this.s
    } else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c -= a.s
    }
    r.s = (c < 0) ? -1 : 0;
    if (c < -1) {
        r[i++] = this.DV + c
    } else {
        if (c > 0) {
            r[i++] = c
        }
    }
    r.t = i;
    r.clamp()
}
function bnpMultiplyTo(a, r) {
    var x = this.abs(),
        y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) {
        r[i] = 0
    }
    for (i = 0; i < y.t; ++i) {
        r[i + x.t] = x.am(0, y[i], r, i, 0, x.t)
    }
    r.s = 0;
    r.clamp();
    if (this.s != a.s) {
        BigInteger.ZERO.subTo(r, r)
    }
}
function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0) {
        r[i] = 0
    }
    for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1
        }
    }
    if (r.t > 0) {
        r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1)
    }
    r.s = 0;
    r.clamp()
}
function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) {
        return
    }
    var pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) {
            q.fromInt(0)
        }
        if (r != null) {
            this.copyTo(r)
        }
        return
    }
    if (r == null) {
        r = nbi()
    }
    var y = nbi(),
        ts = this.s,
        ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r)
    } else {
        pm.copyTo(y);
        pt.copyTo(r)
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) {
        return
    }
    var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt,
        d2 = (1 << this.F1) / yt,
        e = 1 << this.F2;
    var i = r.t,
        j = i - ys,
        t = (q == null) ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r)
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys) {
        y[y.t++] = 0
    }
    while (--j >= 0) {
        var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) {
                r.subTo(t, r)
            }
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) {
            BigInteger.ZERO.subTo(q, q)
        }
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) {
        r.rShiftTo(nsh, r)
    }
    if (ts < 0) {
        BigInteger.ZERO.subTo(r, r)
    }
}
function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        a.subTo(r, r)
    }
    return r
}
function Classic(m) {
    this.m = m
}
function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) {
        return x.mod(this.m)
    } else {
        return x
    }
}
function cRevert(x) {
    return x
}
function cReduce(x) {
    x.divRemTo(this.m, null, x)
}
function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

function bnpInvDigit() {
    if (this.t < 1) {
        return 0
    }
    var x = this[0];
    if ((x & 1) == 0) {
        return 0
    }
    var y = x & 3;
    y = (y * (2 - (x & 15) * y)) & 15;
    y = (y * (2 - (x & 255) * y)) & 255;
    y = (y * (2 - (((x & 65535) * y) & 65535))) & 65535;
    y = (y * (2 - x * y % this.DV)) % this.DV;
    return (y > 0) ? this.DV - y : -y
}
function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t
}
function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        this.m.subTo(r, r)
    }
    return r
}
function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r
}
function montReduce(x) {
    while (x.t <= this.mt2) {
        x[x.t++] = 0
    }
    for (var i = 0; i < this.m.t; ++i) {
        var j = x[i] & 32767;
        var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x)
    }
}
function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

function bnpIsEven() {
    return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
}
function bnpExp(e, z) {
    if (e > 4294967295 || e < 1) {
        return BigInteger.ONE
    }
    var r = nbi(),
        r2 = nbi(),
        g = z.convert(this),
        i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & (1 << i)) > 0) {
            z.mulTo(r2, g, r)
        } else {
            var t = r;
            r = r2;
            r2 = t
        }
    }
    return z.revert(r)
}
function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) {
        z = new Classic(m)
    } else {
        z = new Montgomery(m)
    }
    return this.exp(e, z)
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r
}
function bnIntValue() {
    if (this.s < 0) {
        if (this.t == 1) {
            return this[0] - this.DV
        } else {
            if (this.t == 0) {
                return -1
            }
        }
    } else {
        if (this.t == 1) {
            return this[0]
        } else {
            if (this.t == 0) {
                return 0
            }
        }
    }
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
}
function bnByteValue() {
    return (this.t == 0) ? this.s : (this[0] << 24) >> 24
}
function bnShortValue() {
    return (this.t == 0) ? this.s : (this[0] << 16) >> 16
}
function bnpChunkSize(r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r))
}
function bnSigNum() {
    if (this.s < 0) {
        return -1
    } else {
        if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
            return 0
        } else {
            return 1
        }
    }
}
function bnpToRadix(b) {
    if (b == null) {
        b = 10
    }
    if (this.signum() == 0 || b < 2 || b > 36) {
        return "0"
    }
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a),
        y = nbi(),
        z = nbi(),
        r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z)
    }
    return z.intValue().toString(b) + r
}
function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null) {
        b = 10
    }
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs),
        mi = false,
        j = 0,
        w = 0;
    for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0) {
                mi = true
            }
            continue
        }
        w = b * w + x;
        if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0
        }
    }
    if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0)
    }
    if (mi) {
        BigInteger.ZERO.subTo(this, this)
    }
}
function bnpFromNumber(a, b, c) {
    if ("number" == typeof b) {
        if (a < 2) {
            this.fromInt(1)
        } else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1)) {
                this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this)
            }
            if (this.isEven()) {
                this.dAddOffset(1, 0)
            }
            while (!this.isProbablePrime(b)) {
                this.dAddOffset(2, 0);
                if (this.bitLength() > a) {
                    this.subTo(BigInteger.ONE.shiftLeft(a - 1), this)
                }
            }
        }
    } else {
        var x = new Array(),
            t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0) {
            x[0] &= ((1 << t) - 1)
        } else {
            x[0] = 0
        }
        this.fromString(x, 256)
    }
}
function bnToByteArray() {
    var i = this.t,
        r = new Array();
    r[0] = this.s;
    var p = this.DB - (i * this.DB) % 8,
        d, k = 0;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
            r[k++] = d | (this.s << (this.DB - p))
        }
        while (i >= 0) {
            if (p < 8) {
                d = (this[i] & ((1 << p) - 1)) << (8 - p);
                d |= this[--i] >> (p += this.DB - 8)
            } else {
                d = (this[i] >> (p -= 8)) & 255;
                if (p <= 0) {
                    p += this.DB;
                    --i
                }
            }
            if ((d & 128) != 0) {
                d |= -256
            }
            if (k == 0 && (this.s & 128) != (d & 128)) {
                ++k
            }
            if (k > 0 || d != this.s) {
                r[k++] = d
            }
        }
    }
    return r
}
function bnEquals(a) {
    return (this.compareTo(a) == 0)
}
function bnMin(a) {
    return (this.compareTo(a) < 0) ? this : a
}
function bnMax(a) {
    return (this.compareTo(a) > 0) ? this : a
}
function bnpBitwiseTo(a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) {
        r[i] = op(this[i], a[i])
    }
    if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i) {
            r[i] = op(this[i], f)
        }
        r.t = this.t
    } else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i) {
            r[i] = op(f, a[i])
        }
        r.t = a.t
    }
    r.s = op(this.s, a.s);
    r.clamp()
}
function op_and(x, y) {
    return x & y
}
function bnAnd(a) {
    var r = nbi();
    this.bitwiseTo(a, op_and, r);
    return r
}
function op_or(x, y) {
    return x | y
}
function bnOr(a) {
    var r = nbi();
    this.bitwiseTo(a, op_or, r);
    return r
}
function op_xor(x, y) {
    return x ^ y
}
function bnXor(a) {
    var r = nbi();
    this.bitwiseTo(a, op_xor, r);
    return r
}
function op_andnot(x, y) {
    return x & ~y
}
function bnAndNot(a) {
    var r = nbi();
    this.bitwiseTo(a, op_andnot, r);
    return r
}
function bnNot() {
    var r = nbi();
    for (var i = 0; i < this.t; ++i) {
        r[i] = this.DM & ~this[i]
    }
    r.t = this.t;
    r.s = ~this.s;
    return r
}
function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0) {
        this.rShiftTo(-n, r)
    } else {
        this.lShiftTo(n, r)
    }
    return r
}
function bnShiftRight(n) {
    var r = nbi();
    if (n < 0) {
        this.lShiftTo(-n, r)
    } else {
        this.rShiftTo(n, r)
    }
    return r
}
function lbit(x) {
    if (x == 0) {
        return -1
    }
    var r = 0;
    if ((x & 65535) == 0) {
        x >>= 16;
        r += 16
    }
    if ((x & 255) == 0) {
        x >>= 8;
        r += 8
    }
    if ((x & 15) == 0) {
        x >>= 4;
        r += 4
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2
    }
    if ((x & 1) == 0) {
        ++r
    }
    return r
}
function bnGetLowestSetBit() {
    for (var i = 0; i < this.t; ++i) {
        if (this[i] != 0) {
            return i * this.DB + lbit(this[i])
        }
    }
    if (this.s < 0) {
        return this.t * this.DB
    }
    return -1
}
function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r
    }
    return r
}
function bnBitCount() {
    var r = 0,
        x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) {
        r += cbit(this[i] ^ x)
    }
    return r
}
function bnTestBit(n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) {
        return (this.s != 0)
    }
    return ((this[j] & (1 << (n % this.DB))) != 0)
}
function bnpChangeBit(n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r
}
function bnSetBit(n) {
    return this.changeBit(n, op_or)
}
function bnClearBit(n) {
    return this.changeBit(n, op_andnot)
}
function bnFlipBit(n) {
    return this.changeBit(n, op_xor)
}
function bnpAddTo(a, r) {
    var i = 0,
        c = 0,
        m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB
    }
    if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += this.s
    } else {
        c += this.s;
        while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += a.s
    }
    r.s = (c < 0) ? -1 : 0;
    if (c > 0) {
        r[i++] = c
    } else {
        if (c < -1) {
            r[i++] = this.DV + c
        }
    }
    r.t = i;
    r.clamp()
}
function bnAdd(a) {
    var r = nbi();
    this.addTo(a, r);
    return r
}
function bnSubtract(a) {
    var r = nbi();
    this.subTo(a, r);
    return r
}
function bnMultiply(a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r
}
function bnDivide(a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r
}
function bnRemainder(a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r
}
function bnDivideAndRemainder(a) {
    var q = nbi(),
        r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r)
}
function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp()
}
function bnpDAddOffset(n, w) {
    while (this.t <= w) {
        this[this.t++] = 0
    }
    this[w] += n;
    while (this[w] >= this.DV) {
        this[w] -= this.DV;
        if (++w >= this.t) {
            this[this.t++] = 0
        }++this[w]
    }
}
function NullExp() {}
function nNop(x) {
    return x
}
function nMulTo(x, y, r) {
    x.multiplyTo(y, r)
}
function nSqrTo(x, r) {
    x.squareTo(r)
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

function bnPow(e) {
    return this.exp(e, new NullExp())
}
function bnpMultiplyLowerTo(a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0;
    r.t = i;
    while (i > 0) {
        r[--i] = 0
    }
    var j;
    for (j = r.t - this.t; i < j; ++i) {
        r[i + this.t] = this.am(0, a[i], r, i, 0, this.t)
    }
    for (j = Math.min(a.t, n); i < j; ++i) {
        this.am(0, a[i], r, i, 0, n - i)
    }
    r.clamp()
}
function bnpMultiplyUpperTo(a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0;
    while (--i >= 0) {
        r[i] = 0
    }
    for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n)
    }
    r.clamp();
    r.drShiftTo(1, r)
}
function Barrett(m) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m
}
function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t) {
        return x.mod(this.m)
    } else {
        if (x.compareTo(this.m) < 0) {
            return x
        } else {
            var r = nbi();
            x.copyTo(r);
            this.reduce(r);
            return r
        }
    }
}
function barrettRevert(x) {
    return x
}
function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp()
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) {
        x.dAddOffset(1, this.m.t + 1)
    }
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x)
    }
}
function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

function bnModPow(e, m) {
    var i = e.bitLength(),
        k, r = nbv(1),
        z;
    if (i <= 0) {
        return r
    } else {
        if (i < 18) {
            k = 1
        } else {
            if (i < 48) {
                k = 3
            } else {
                if (i < 144) {
                    k = 4
                } else {
                    if (i < 768) {
                        k = 5
                    } else {
                        k = 6
                    }
                }
            }
        }
    }
    if (i < 8) {
        z = new Classic(m)
    } else {
        if (m.isEven()) {
            z = new Barrett(m)
        } else {
            z = new Montgomery(m)
        }
    }
    var g = new Array(),
        n = 3,
        k1 = k - 1,
        km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2
        }
    }
    var j = e.t - 1,
        w, is1 = true,
        r2 = nbi(),
        t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
        if (i >= k1) {
            w = (e[j] >> (i - k1)) & km
        } else {
            w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
            if (j > 0) {
                w |= e[j - 1] >> (this.DB + i - k1)
            }
        }
        n = k;
        while ((w & 1) == 0) {
            w >>= 1;
            --n
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j
        }
        if (is1) {
            g[w].copyTo(r);
            is1 = false
        } else {
            while (n > 1) {
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2
            }
            if (n > 0) {
                z.sqrTo(r, r2)
            } else {
                t = r;
                r = r2;
                r2 = t
            }
            z.mulTo(r2, g[w], r)
        }
        while (j >= 0 && (e[j] & (1 << i)) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j
            }
        }
    }
    return z.revert(r)
}
function bnGCD(a) {
    var x = (this.s < 0) ? this.negate() : this.clone();
    var y = (a.s < 0) ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t
    }
    var i = x.getLowestSetBit(),
        g = y.getLowestSetBit();
    if (g < 0) {
        return x
    }
    if (i < g) {
        g = i
    }
    if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y)
    }
    while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) {
            x.rShiftTo(i, x)
        }
        if ((i = y.getLowestSetBit()) > 0) {
            y.rShiftTo(i, y)
        }
        if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x)
        } else {
            y.subTo(x, y);
            y.rShiftTo(1, y)
        }
    }
    if (g > 0) {
        y.lShiftTo(g, y)
    }
    return y
}
function bnpModInt(n) {
    if (n <= 0) {
        return 0
    }
    var d = this.DV % n,
        r = (this.s < 0) ? n - 1 : 0;
    if (this.t > 0) {
        if (d == 0) {
            r = this[0] % n
        } else {
            for (var i = this.t - 1; i >= 0; --i) {
                r = (d * r + this[i]) % n
            }
        }
    }
    return r
}
function bnModInverse(m) {
    var ac = m.isEven();
    if ((this.isEven() && ac) || m.signum() == 0) {
        return BigInteger.ZERO
    }
    var u = m.clone(),
        v = this.clone();
    var a = nbv(1),
        b = nbv(0),
        c = nbv(0),
        d = nbv(1);
    while (u.signum() != 0) {
        while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
                if (!a.isEven() || !b.isEven()) {
                    a.addTo(this, a);
                    b.subTo(m, b)
                }
                a.rShiftTo(1, a)
            } else {
                if (!b.isEven()) {
                    b.subTo(m, b)
                }
            }
            b.rShiftTo(1, b)
        }
        while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
                if (!c.isEven() || !d.isEven()) {
                    c.addTo(this, c);
                    d.subTo(m, d)
                }
                c.rShiftTo(1, c)
            } else {
                if (!d.isEven()) {
                    d.subTo(m, d)
                }
            }
            d.rShiftTo(1, d)
        }
        if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) {
                a.subTo(c, a)
            }
            b.subTo(d, b)
        } else {
            v.subTo(u, v);
            if (ac) {
                c.subTo(a, c)
            }
            d.subTo(b, d)
        }
    }
    if (v.compareTo(BigInteger.ONE) != 0) {
        return BigInteger.ZERO
    }
    if (d.compareTo(m) >= 0) {
        return d.subtract(m)
    }
    if (d.signum() < 0) {
        d.addTo(m, d)
    } else {
        return d
    }
    if (d.signum() < 0) {
        return d.add(m)
    } else {
        return d
    }
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

function bnIsProbablePrime(t) {
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i) {
            if (x[0] == lowprimes[i]) {
                return true
            }
        }
        return false
    }
    if (x.isEven()) {
        return false
    }
    i = 1;
    while (i < lowprimes.length) {
        var m = lowprimes[i],
            j = i + 1;
        while (j < lowprimes.length && m < lplim) {
            m *= lowprimes[j++]
        }
        m = x.modInt(m);
        while (i < j) {
            if (m % lowprimes[i++] == 0) {
                return false
            }
        }
    }
    return x.millerRabin(t)
}
function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) {
        return false
    }
    var r = n1.shiftRight(k);
    t = (t + 1) >> 1;
    if (t > lowprimes.length) {
        t = lowprimes.length
    }
    var a = nbi();
    for (var i = 0; i < t; ++i) {
        a.fromInt(lowprimes[i]);
        var y = a.modPow(r, this);
        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
                y = y.modPowInt(2, this);
                if (y.compareTo(BigInteger.ONE) == 0) {
                    return false
                }
            }
            if (y.compareTo(n1) != 0) {
                return false
            }
        }
    }
    return true
}
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
var froggerCookie = null;

function FroggerEntry() {
    var objId;
    var userRating;
    var listLocs;
    this.getIsInCollection = function () {
        return this.getIsIn(1)
    };
    this.getIsInWishlist = function () {
        return this.getIsIn(2)
    };
    this.getIsInEmailAlerts = function () {
        return this.getIsIn(4)
    };
    this.getIsInNowPlaying = function () {
        return this.getIsIn(8)
    };
    this.getIsInPlayed = function () {
        return this.getIsIn(16)
    };
    this.getIsInFavorites = function () {
        return this.getIsIn(32)
    };
    this.getHasReviewed = function () {
        return this.getIsIn(64)
    };
    this.getIsIn = function (listBit) {
        return (this.listLocs & listBit) != 0
    }
}
function FroggerCookie(versionNum, entries) {
    this.versionNum = versionNum;
    this.entries = entries;
    this.getEntry = function (objId) {
        if (entries == null) {
            return null
        }
        for (var ix = 0; ix < entries.length; ++ix) {
            if (entries[ix].objId == objId) {
                return entries[ix]
            }
        }
        return null
    }
}
function getFroggerCookie() {
    if (froggerCookie == null) {
        froggerCookie = parseFroggerB()
    }
    return froggerCookie
}
function getFroggerEntry(objId) {
    var theCookie = getFroggerCookie();
    return theCookie.getEntry(objId)
}
function logFroggerEntry(entry) {
    document.getElementById("log").innerHTML += "ENTRY: objId=" + entry.objId + " rating=" + entry.userRating + " listLocs=" + entry.listLocs + "<br>"
}
var COOKIE_NAME = "FroggerB";
var MAX_NUMBER_OF_COOKIES = 1;
var NUMBITS_objIdBitSize = 5;
var NUMBITS_locsBitSize = 5;

function parseFroggerB() {
    var cookieStr = getCookieStr();
    if (cookieStr == null) {
        return null
    }
    cookieStr = unescape(cookieStr);
    var versionPart3 = "v=3*";
    var versionPart4 = "v4_";
    if (versionPart3 == cookieStr.substring(0, versionPart3.length)) {
        return parseFroggerBForVersion3(cookieStr)
    } else {
        if (versionPart4 == cookieStr.substring(0, versionPart4.length)) {
            return parseFroggerBForVersion4(cookieStr)
        }
    }
    return null
}
function getCookieStr() {
    var cookieStr = null;
    for (var cookieNum = 0; cookieNum < MAX_NUMBER_OF_COOKIES; ++cookieNum) {
        var cookieStr2 = getCookie(COOKIE_NAME + cookieNum);
        if (cookieStr2 == null) {
            break
        } else {
            if (cookieStr == null) {
                cookieStr = cookieStr2
            } else {
                cookieStr += cookieStr2
            }
        }
    }
    return cookieStr
}
function parseFroggerBForVersion4(cookieStr) {
    cookieStr = cookieStr.substring(cookieStr.lastIndexOf("_") + 2);
    if (cookieStr == null || "" == cookieStr) {
        return null
    }
    var hexStr = b64tohex(cookieStr);
    var encodedCookieVal = new BigInteger(hexStr, 16);
    return parseFroggerBForVersionWithBigInteger(4, encodedCookieVal)
}
function parseFroggerBForVersion3(cookieStr) {
    cookieStr = cookieStr.substring(cookieStr.lastIndexOf("*") + 3);
    var encodedCookieVal = convertFromBase65(cookieStr);
    if (encodedCookieVal == null || encodedCookieVal == "") {
        return null
    }
    return parseFroggerBForVersionWithBigInteger(3, encodedCookieVal)
}
function parseFroggerBForVersionWithBigInteger(versionNum, encodedCookieVal) {
    var NUMBITS_locs = encodedCookieVal.and(getMask(NUMBITS_locsBitSize, 0)).intValue();
    if (encodedCookieVal.bitLength > 900 && NUMBITS_locs != 7) {
        NUMBITS_locs = 7
    } else {
        encodedCookieVal = encodedCookieVal.shiftRight(NUMBITS_locsBitSize)
    }
    var NUMBITS_objId = encodedCookieVal.and(getMask(NUMBITS_objIdBitSize, 0)).intValue();
    if (encodedCookieVal.bitLength > 900 && NUMBITS_objId != 21) {
        NUMBITS_objId = 21
    } else {
        encodedCookieVal = encodedCookieVal.shiftRight(NUMBITS_objIdBitSize)
    }
    var NUMBITS_rating = 7;
    var NUMBITS = NUMBITS_objId + NUMBITS_rating + NUMBITS_locs;
    var MASK_objId = getMask(NUMBITS_objId, NUMBITS_rating + NUMBITS_locs);
    var MASK_rating = getMask(NUMBITS_rating, NUMBITS_locs);
    var MASK_locs = getMask(NUMBITS_locs, 0);
    var entries = new Array(Math.ceil(encodedCookieVal.bitLength() / NUMBITS));
    var partIx = entries.length - 1;
    while (encodedCookieVal.compareTo(BigInteger.ZERO) > 0) {
        var entry = new FroggerEntry();
        entry.objId = MASK_objId.and(encodedCookieVal).shiftRight(NUMBITS_rating + NUMBITS_locs).intValue();
        var ratingEncoded = MASK_rating.and(encodedCookieVal).shiftRight(NUMBITS_locs).intValue();
        entry.listLocs = MASK_locs.and(encodedCookieVal).intValue();
        entry.userRating = null;
        if (ratingEncoded >= 0 && ratingEncoded <= 100) {
            entry.userRating = ratingEncoded / 10
        }
        entries[partIx] = entry;
        encodedCookieVal = encodedCookieVal.shiftRight(NUMBITS);
        --partIx
    }
    return new FroggerCookie(versionNum, entries)
}
function getMask(numBits, shiftLeft) {
    var mask = new BigInteger("1");
    mask = mask.shiftLeft(numBits);
    mask = mask.subtract(new BigInteger("1"));
    mask = mask.shiftLeft(shiftLeft);
    return mask
}
var baseDigits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-_";
var baseBig = new BigInteger("" + baseDigits.length, 10);

function convertFromBase65(numStr) {
    var multiplier = new BigInteger("1");
    var sum = new BigInteger("0");
    for (var cIx = numStr.length - 1; cIx >= 0; --cIx) {
        var c = numStr.charAt(cIx);
        var digitVal = baseDigits.indexOf(c);
        var digitValInt = new BigInteger("" + digitVal);
        sum = sum.add(multiplier.multiply(digitValInt));
        multiplier = multiplier.multiply(baseBig)
    }
    return sum
}
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/";
var b64pad = "=";

function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63)
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2)
    } else {
        if (i + 2 == h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4)
        }
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad
    }
    return ret
}
function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0;
    var slop;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) == b64pad) {
            break
        }
        v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue
        }
        if (k == 0) {
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 1
        } else {
            if (k == 1) {
                ret += int2char((slop << 2) | (v >> 4));
                slop = v & 15;
                k = 2
            } else {
                if (k == 2) {
                    ret += int2char(slop);
                    ret += int2char(v >> 2);
                    slop = v & 3;
                    k = 3
                } else {
                    ret += int2char((slop << 2) | (v >> 4));
                    ret += int2char(v & 15);
                    k = 0
                }
            }
        }
    }
    if (k == 1) {
        ret += int2char(slop << 2)
    }
    return ret
}
function b64toBA(s) {
    var h = b64tohex(s);
    var i;
    var a = new Array();
    for (i = 0; 2 * i < h.length; ++i) {
        a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16)
    }
    return a
}
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j)
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) {
            break
        }
    }
    return null
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length
    }
    return unescape(document.cookie.substring(offset, endstr))
}
function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "")
}
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT"
    }
}
var isFroggerB = false;
if (getFroggerCookie() != null) {
    if (getFroggerCookie().versionNum > 3) {
        isFroggerB = true
    }
}(function () {
    var l = this,
        g, y = l.jQuery,
        p = l.$,
        o = l.jQuery = l.$ = function (E, F) {
            return new o.fn.init(E, F)
        },
        D = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
        f = /^.[^:#\[\.,]*$/;
    o.fn = o.prototype = {
        init: function (E, H) {
            E = E || document;
            if (E.nodeType) {
                this[0] = E;
                this.length = 1;
                this.context = E;
                return this
            }
            if (typeof E === "string") {
                var G = D.exec(E);
                if (G && (G[1] || !H)) {
                    if (G[1]) {
                        E = o.clean([G[1]], H)
                    } else {
                        var I = document.getElementById(G[3]);
                        if (I && I.id != G[3]) {
                            return o().find(E)
                        }
                        var F = o(I || []);
                        F.context = document;
                        F.selector = E;
                        return F
                    }
                } else {
                    return o(H).find(E)
                }
            } else {
                if (o.isFunction(E)) {
                    return o(document).ready(E)
                }
            }
            if (E.selector && E.context) {
                this.selector = E.selector;
                this.context = E.context
            }
            return this.setArray(o.isArray(E) ? E : o.makeArray(E))
        },
        selector: "",
        jquery: "1.3.2",
        size: function () {
            return this.length
        },
        get: function (E) {
            return E === g ? Array.prototype.slice.call(this) : this[E]
        },
        pushStack: function (F, H, E) {
            var G = o(F);
            G.prevObject = this;
            G.context = this.context;
            if (H === "find") {
                G.selector = this.selector + (this.selector ? " " : "") + E
            } else {
                if (H) {
                    G.selector = this.selector + "." + H + "(" + E + ")"
                }
            }
            return G
        },
        setArray: function (E) {
            this.length = 0;
            Array.prototype.push.apply(this, E);
            return this
        },
        each: function (F, E) {
            return o.each(this, F, E)
        },
        index: function (E) {
            return o.inArray(E && E.jquery ? E[0] : E, this)
        },
        attr: function (F, H, G) {
            var E = F;
            if (typeof F === "string") {
                if (H === g) {
                    return this[0] && o[G || "attr"](this[0], F)
                } else {
                    E = {};
                    E[F] = H
                }
            }
            return this.each(function (I) {
                for (F in E) {
                    o.attr(G ? this.style : this, F, o.prop(this, E[F], G, I, F))
                }
            })
        },
        css: function (E, F) {
            if ((E == "width" || E == "height") && parseFloat(F) < 0) {
                F = g
            }
            return this.attr(E, F, "curCSS")
        },
        text: function (F) {
            if (typeof F !== "object" && F != null) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(F))
            }
            var E = "";
            o.each(F || this, function () {
                o.each(this.childNodes, function () {
                    if (this.nodeType != 8) {
                        E += this.nodeType != 1 ? this.nodeValue : o.fn.text([this])
                    }
                })
            });
            return E
        },
        wrapAll: function (E) {
            if (this[0]) {
                var F = o(E, this[0].ownerDocument).clone();
                if (this[0].parentNode) {
                    F.insertBefore(this[0])
                }
                F.map(function () {
                    var G = this;
                    while (G.firstChild) {
                        G = G.firstChild
                    }
                    return G
                }).append(this)
            }
            return this
        },
        wrapInner: function (E) {
            return this.each(function () {
                o(this).contents().wrapAll(E)
            })
        },
        wrap: function (E) {
            return this.each(function () {
                o(this).wrapAll(E)
            })
        },
        append: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.appendChild(E)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.insertBefore(E, this.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this)
            })
        },
        after: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this.nextSibling)
            })
        },
        end: function () {
            return this.prevObject || o([])
        },
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        find: function (E) {
            if (this.length === 1) {
                var F = this.pushStack([], "find", E);
                F.length = 0;
                o.find(E, this[0], F);
                return F
            } else {
                return this.pushStack(o.unique(o.map(this, function (G) {
                    return o.find(E, G)
                })), "find", E)
            }
        },
        clone: function (G) {
            var E = this.map(function () {
                if (!o.support.noCloneEvent && !o.isXMLDoc(this)) {
                    var I = this.outerHTML;
                    if (!I) {
                        var J = this.ownerDocument.createElement("div");
                        J.appendChild(this.cloneNode(true));
                        I = J.innerHTML
                    }
                    return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (G === true) {
                var H = this.find("*").andSelf(),
                    F = 0;
                E.find("*").andSelf().each(function () {
                    if (this.nodeName !== H[F].nodeName) {
                        return
                    }
                    var I = o.data(H[F], "events");
                    for (var K in I) {
                        for (var J in I[K]) {
                            o.event.add(this, K, I[K][J], I[K][J].data)
                        }
                    }
                    F++
                })
            }
            return E
        },
        filter: function (E) {
            return this.pushStack(o.isFunction(E) && o.grep(this, function (G, F) {
                return E.call(G, F)
            }) || o.multiFilter(E, o.grep(this, function (F) {
                return F.nodeType === 1
            })), "filter", E)
        },
        closest: function (E) {
            var G = o.expr.match.POS.test(E) ? o(E) : null,
                F = 0;
            return this.map(function () {
                var H = this;
                while (H && H.ownerDocument) {
                    if (G ? G.index(H) > -1 : o(H).is(E)) {
                        o.data(H, "closest", F);
                        return H
                    }
                    H = H.parentNode;
                    F++
                }
            })
        },
        not: function (E) {
            if (typeof E === "string") {
                if (f.test(E)) {
                    return this.pushStack(o.multiFilter(E, this, true), "not", E)
                } else {
                    E = o.multiFilter(E, this)
                }
            }
            var F = E.length && E[E.length - 1] !== g && !E.nodeType;
            return this.filter(function () {
                return F ? o.inArray(this, E) < 0 : this != E
            })
        },
        add: function (E) {
            return this.pushStack(o.unique(o.merge(this.get(), typeof E === "string" ? o(E) : o.makeArray(E))))
        },
        is: function (E) {
            return !!E && o.multiFilter(E, this).length > 0
        },
        hasClass: function (E) {
            return !!E && this.is("." + E)
        },
        val: function (K) {
            if (K === g) {
                var E = this[0];
                if (E) {
                    if (o.nodeName(E, "option")) {
                        return (E.attributes.value || {}).specified ? E.value : E.text
                    }
                    if (o.nodeName(E, "select")) {
                        var I = E.selectedIndex,
                            L = [],
                            M = E.options,
                            H = E.type == "select-one";
                        if (I < 0) {
                            return null
                        }
                        for (var F = H ? I : 0, J = H ? I + 1 : M.length; F < J; F++) {
                            var G = M[F];
                            if (G.selected) {
                                K = o(G).val();
                                if (H) {
                                    return K
                                }
                                L.push(K)
                            }
                        }
                        return L
                    }
                    return (E.value || "").replace(/\r/g, "")
                }
                return g
            }
            if (typeof K === "number") {
                K += ""
            }
            return this.each(function () {
                if (this.nodeType != 1) {
                    return
                }
                if (o.isArray(K) && /radio|checkbox/.test(this.type)) {
                    this.checked = (o.inArray(this.value, K) >= 0 || o.inArray(this.name, K) >= 0)
                } else {
                    if (o.nodeName(this, "select")) {
                        var N = o.makeArray(K);
                        o("option", this).each(function () {
                            this.selected = (o.inArray(this.value, N) >= 0 || o.inArray(this.text, N) >= 0)
                        });
                        if (!N.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = K
                    }
                }
            })
        },
        html: function (E) {
            return E === g ? (this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") : null) : this.empty().append(E)
        },
        replaceWith: function (E) {
            return this.after(E).remove()
        },
        eq: function (E) {
            return this.slice(E, +E + 1)
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","))
        },
        map: function (E) {
            return this.pushStack(o.map(this, function (G, F) {
                return E.call(G, F, G)
            }))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        },
        domManip: function (J, M, L) {
            if (this[0]) {
                var I = (this[0].ownerDocument || this[0]).createDocumentFragment(),
                    F = o.clean(J, (this[0].ownerDocument || this[0]), I),
                    H = I.firstChild;
                if (H) {
                    for (var G = 0, E = this.length; G < E; G++) {
                        L.call(K(this[G], H), this.length > 1 || G > 0 ? I.cloneNode(true) : I)
                    }
                }
                if (F) {
                    o.each(F, z)
                }
            }
            return this;

            function K(N, O) {
                return M && o.nodeName(N, "table") && o.nodeName(O, "tr") ? (N.getElementsByTagName("tbody")[0] || N.appendChild(N.ownerDocument.createElement("tbody"))) : N
            }
        }
    };
    o.fn.init.prototype = o.fn;

    function z(E, F) {
        if (F.src) {
            o.ajax({
                url: F.src,
                async: false,
                dataType: "script"
            })
        } else {
            o.globalEval(F.text || F.textContent || F.innerHTML || "")
        }
        if (F.parentNode) {
            F.parentNode.removeChild(F)
        }
    }
    function e() {
        return +new Date
    }
    o.extend = o.fn.extend = function () {
        var J = arguments[0] || {},
            H = 1,
            I = arguments.length,
            E = false,
            G;
        if (typeof J === "boolean") {
            E = J;
            J = arguments[1] || {};
            H = 2
        }
        if (typeof J !== "object" && !o.isFunction(J)) {
            J = {}
        }
        if (I == H) {
            J = this;
            --H
        }
        for (; H < I; H++) {
            if ((G = arguments[H]) != null) {
                for (var F in G) {
                    var K = J[F],
                        L = G[F];
                    if (J === L) {
                        continue
                    }
                    if (E && L && typeof L === "object" && !L.nodeType) {
                        J[F] = o.extend(E, K || (L.length != null ? [] : {}), L)
                    } else {
                        if (L !== g) {
                            J[F] = L
                        }
                    }
                }
            }
        }
        return J
    };
    var b = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        q = document.defaultView || {},
        s = Object.prototype.toString;
    o.extend({
        noConflict: function (E) {
            l.$ = p;
            if (E) {
                l.jQuery = y
            }
            return o
        },
        isFunction: function (E) {
            return s.call(E) === "[object Function]"
        },
        isArray: function (E) {
            return s.call(E) === "[object Array]"
        },
        isXMLDoc: function (E) {
            return E.nodeType === 9 && E.documentElement.nodeName !== "HTML" || !! E.ownerDocument && o.isXMLDoc(E.ownerDocument)
        },
        globalEval: function (G) {
            if (G && /\S/.test(G)) {
                var F = document.getElementsByTagName("head")[0] || document.documentElement,
                    E = document.createElement("script");
                E.type = "text/javascript";
                if (o.support.scriptEval) {
                    E.appendChild(document.createTextNode(G))
                } else {
                    E.text = G
                }
                F.insertBefore(E, F.firstChild);
                F.removeChild(E)
            }
        },
        nodeName: function (F, E) {
            return F.nodeName && F.nodeName.toUpperCase() == E.toUpperCase()
        },
        each: function (G, K, F) {
            var E, H = 0,
                I = G.length;
            if (F) {
                if (I === g) {
                    for (E in G) {
                        if (K.apply(G[E], F) === false) {
                            break
                        }
                    }
                } else {
                    for (; H < I;) {
                        if (K.apply(G[H++], F) === false) {
                            break
                        }
                    }
                }
            } else {
                if (I === g) {
                    for (E in G) {
                        if (K.call(G[E], E, G[E]) === false) {
                            break
                        }
                    }
                } else {
                    for (var J = G[0]; H < I && K.call(J, H, J) !== false; J = G[++H]) {}
                }
            }
            return G
        },
        prop: function (H, I, G, F, E) {
            if (o.isFunction(I)) {
                I = I.call(H, F)
            }
            return typeof I === "number" && G == "curCSS" && !b.test(E) ? I + "px" : I
        },
        className: {
            add: function (E, F) {
                o.each((F || "").split(/\s+/), function (G, H) {
                    if (E.nodeType == 1 && !o.className.has(E.className, H)) {
                        E.className += (E.className ? " " : "") + H
                    }
                })
            },
            remove: function (E, F) {
                if (E.nodeType == 1) {
                    E.className = F !== g ? o.grep(E.className.split(/\s+/), function (G) {
                        return !o.className.has(F, G)
                    }).join(" ") : ""
                }
            },
            has: function (F, E) {
                return F && o.inArray(E, (F.className || F).toString().split(/\s+/)) > -1
            }
        },
        swap: function (H, G, I) {
            var E = {};
            for (var F in G) {
                E[F] = H.style[F];
                H.style[F] = G[F]
            }
            I.call(H);
            for (var F in G) {
                H.style[F] = E[F]
            }
        },
        css: function (H, F, J, E) {
            if (F == "width" || F == "height") {
                var L, G = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                    K = F == "width" ? ["Left", "Right"] : ["Top", "Bottom"];

                function I() {
                    L = F == "width" ? H.offsetWidth : H.offsetHeight;
                    if (E === "border") {
                        return
                    }
                    o.each(K, function () {
                        if (!E) {
                            L -= parseFloat(o.curCSS(H, "padding" + this, true)) || 0
                        }
                        if (E === "margin") {
                            L += parseFloat(o.curCSS(H, "margin" + this, true)) || 0
                        } else {
                            L -= parseFloat(o.curCSS(H, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (H.offsetWidth !== 0) {
                    I()
                } else {
                    o.swap(H, G, I)
                }
                return Math.max(0, Math.round(L))
            }
            return o.curCSS(H, F, J)
        },
        curCSS: function (I, F, G) {
            var L, E = I.style;
            if (F == "opacity" && !o.support.opacity) {
                L = o.attr(E, "opacity");
                return L == "" ? "1" : L
            }
            if (F.match(/float/i)) {
                F = w
            }
            if (!G && E && E[F]) {
                L = E[F]
            } else {
                if (q.getComputedStyle) {
                    if (F.match(/float/i)) {
                        F = "float"
                    }
                    F = F.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var M = q.getComputedStyle(I, null);
                    if (M) {
                        L = M.getPropertyValue(F)
                    }
                    if (F == "opacity" && L == "") {
                        L = "1"
                    }
                } else {
                    if (I.currentStyle) {
                        var J = F.replace(/\-(\w)/g, function (N, O) {
                            return O.toUpperCase()
                        });
                        L = I.currentStyle[F] || I.currentStyle[J];
                        if (!/^\d+(px)?$/i.test(L) && /^\d/.test(L)) {
                            var H = E.left,
                                K = I.runtimeStyle.left;
                            I.runtimeStyle.left = I.currentStyle.left;
                            E.left = L || 0;
                            L = E.pixelLeft + "px";
                            E.left = H;
                            I.runtimeStyle.left = K
                        }
                    }
                }
            }
            return L
        },
        clean: function (F, K, I) {
            K = K || document;
            if (typeof K.createElement === "undefined") {
                K = K.ownerDocument || K[0] && K[0].ownerDocument || document
            }
            if (!I && F.length === 1 && typeof F[0] === "string") {
                var H = /^<(\w+)\s*\/?>$/.exec(F[0]);
                if (H) {
                    return [K.createElement(H[1])]
                }
            }
            var G = [],
                E = [],
                L = K.createElement("div");
            o.each(F, function (P, S) {
                if (typeof S === "number") {
                    S += ""
                }
                if (!S) {
                    return
                }
                if (typeof S === "string") {
                    S = S.replace(/(<(\w+)[^>]*?)\/>/g, function (U, V, T) {
                        return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? U : V + "></" + T + ">"
                    });
                    var O = S.replace(/^\s+/, "").substring(0, 10).toLowerCase();
                    var Q = !O.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !O.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || O.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !O.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!O.indexOf("<td") || !O.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !O.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !o.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    L.innerHTML = Q[1] + S + Q[2];
                    while (Q[0]--) {
                        L = L.lastChild
                    }
                    if (!o.support.tbody) {
                        var R = /<tbody/i.test(S),
                            N = !O.indexOf("<table") && !R ? L.firstChild && L.firstChild.childNodes : Q[1] == "<table>" && !R ? L.childNodes : [];
                        for (var M = N.length - 1; M >= 0; --M) {
                            if (o.nodeName(N[M], "tbody") && !N[M].childNodes.length) {
                                N[M].parentNode.removeChild(N[M])
                            }
                        }
                    }
                    if (!o.support.leadingWhitespace && /^\s/.test(S)) {
                        L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]), L.firstChild)
                    }
                    S = o.makeArray(L.childNodes)
                }
                if (S.nodeType) {
                    G.push(S)
                } else {
                    G = o.merge(G, S)
                }
            });
            if (I) {
                for (var J = 0; G[J]; J++) {
                    if (o.nodeName(G[J], "script") && (!G[J].type || G[J].type.toLowerCase() === "text/javascript")) {
                        E.push(G[J].parentNode ? G[J].parentNode.removeChild(G[J]) : G[J])
                    } else {
                        if (G[J].nodeType === 1) {
                            G.splice.apply(G, [J + 1, 0].concat(o.makeArray(G[J].getElementsByTagName("script"))))
                        }
                        I.appendChild(G[J])
                    }
                }
                return E
            }
            return G
        },
        attr: function (J, G, K) {
            if (!J || J.nodeType == 3 || J.nodeType == 8) {
                return g
            }
            var H = !o.isXMLDoc(J),
                L = K !== g;
            G = H && o.props[G] || G;
            if (J.tagName) {
                var F = /href|src|style/.test(G);
                if (G == "selected" && J.parentNode) {
                    J.parentNode.selectedIndex
                }
                if (G in J && H && !F) {
                    if (L) {
                        if (G == "type" && o.nodeName(J, "input") && J.parentNode) {
                            throw "type property can't be changed"
                        }
                        J[G] = K
                    }
                    if (o.nodeName(J, "form") && J.getAttributeNode(G)) {
                        return J.getAttributeNode(G).nodeValue
                    }
                    if (G == "tabIndex") {
                        var I = J.getAttributeNode("tabIndex");
                        return I && I.specified ? I.value : J.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : J.nodeName.match(/^(a|area)$/i) && J.href ? 0 : g
                    }
                    return J[G]
                }
                if (!o.support.style && H && G == "style") {
                    return o.attr(J.style, "cssText", K)
                }
                if (L) {
                    J.setAttribute(G, "" + K)
                }
                var E = !o.support.hrefNormalized && H && F ? J.getAttribute(G, 2) : J.getAttribute(G);
                return E === null ? g : E
            }
            if (!o.support.opacity && G == "opacity") {
                if (L) {
                    J.zoom = 1;
                    J.filter = (J.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(K) + "" == "NaN" ? "" : "alpha(opacity=" + K * 100 + ")")
                }
                return J.filter && J.filter.indexOf("opacity=") >= 0 ? (parseFloat(J.filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : ""
            }
            G = G.replace(/-([a-z])/ig, function (M, N) {
                return N.toUpperCase()
            });
            if (L) {
                J[G] = K
            }
            return J[G]
        },
        trim: function (E) {
            return (E || "").replace(/^\s+|\s+$/g, "")
        },
        makeArray: function (G) {
            var E = [];
            if (G != null) {
                var F = G.length;
                if (F == null || typeof G === "string" || o.isFunction(G) || G.setInterval) {
                    E[0] = G
                } else {
                    while (F) {
                        E[--F] = G[F]
                    }
                }
            }
            return E
        },
        inArray: function (G, H) {
            for (var E = 0, F = H.length; E < F; E++) {
                if (H[E] === G) {
                    return E
                }
            }
            return -1
        },
        merge: function (H, E) {
            var F = 0,
                G, I = H.length;
            if (!o.support.getAll) {
                while ((G = E[F++]) != null) {
                    if (G.nodeType != 8) {
                        H[I++] = G
                    }
                }
            } else {
                while ((G = E[F++]) != null) {
                    H[I++] = G
                }
            }
            return H
        },
        unique: function (K) {
            var F = [],
                E = {};
            try {
                for (var G = 0, H = K.length; G < H; G++) {
                    var J = o.data(K[G]);
                    if (!E[J]) {
                        E[J] = true;
                        F.push(K[G])
                    }
                }
            } catch (I) {
                F = K
            }
            return F
        },
        grep: function (F, J, E) {
            var G = [];
            for (var H = 0, I = F.length; H < I; H++) {
                if (!E != !J(F[H], H)) {
                    G.push(F[H])
                }
            }
            return G
        },
        map: function (E, J) {
            var F = [];
            for (var G = 0, H = E.length; G < H; G++) {
                var I = J(E[G], G);
                if (I != null) {
                    F[F.length] = I
                }
            }
            return F.concat.apply([], F)
        }
    });
    var C = navigator.userAgent.toLowerCase();
    o.browser = {
        version: (C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(C),
        opera: /opera/.test(C),
        msie: /msie/.test(C) && !/opera/.test(C),
        mozilla: /mozilla/.test(C) && !/(compatible|webkit)/.test(C)
    };
    o.each({
        parent: function (E) {
            return E.parentNode
        },
        parents: function (E) {
            return o.dir(E, "parentNode")
        },
        next: function (E) {
            return o.nth(E, 2, "nextSibling")
        },
        prev: function (E) {
            return o.nth(E, 2, "previousSibling")
        },
        nextAll: function (E) {
            return o.dir(E, "nextSibling")
        },
        prevAll: function (E) {
            return o.dir(E, "previousSibling")
        },
        siblings: function (E) {
            return o.sibling(E.parentNode.firstChild, E)
        },
        children: function (E) {
            return o.sibling(E.firstChild)
        },
        contents: function (E) {
            return o.nodeName(E, "iframe") ? E.contentDocument || E.contentWindow.document : o.makeArray(E.childNodes)
        }
    }, function (E, F) {
        o.fn[E] = function (G) {
            var H = o.map(this, F);
            if (G && typeof G == "string") {
                H = o.multiFilter(G, H)
            }
            return this.pushStack(o.unique(H), E, G)
        }
    });
    o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (E, F) {
        o.fn[E] = function (G) {
            var J = [],
                L = o(G);
            for (var K = 0, H = L.length; K < H; K++) {
                var I = (K > 0 ? this.clone(true) : this).get();
                o.fn[F].apply(o(L[K]), I);
                J = J.concat(I)
            }
            return this.pushStack(J, E, G)
        }
    });
    o.each({
        removeAttr: function (E) {
            o.attr(this, E, "");
            if (this.nodeType == 1) {
                this.removeAttribute(E)
            }
        },
        addClass: function (E) {
            o.className.add(this, E)
        },
        removeClass: function (E) {
            o.className.remove(this, E)
        },
        toggleClass: function (F, E) {
            if (typeof E !== "boolean") {
                E = !o.className.has(this, F)
            }
            o.className[E ? "add" : "remove"](this, F)
        },
        remove: function (E) {
            if (!E || o.filter(E, [this]).length) {
                o("*", this).add([this]).each(function () {
                    o.event.remove(this);
                    o.removeData(this)
                });
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            }
        },
        empty: function () {
            o(this).children().remove();
            while (this.firstChild) {
                this.removeChild(this.firstChild)
            }
        }
    }, function (E, F) {
        o.fn[E] = function () {
            return this.each(F, arguments)
        }
    });

    function j(E, F) {
        return E[0] && parseInt(o.curCSS(E[0], F, true), 10) || 0
    }
    var h = "jQuery" + e(),
        v = 0,
        A = {};
    o.extend({
        cache: {},
        data: function (F, E, G) {
            F = F == l ? A : F;
            var H = F[h];
            if (!H) {
                H = F[h] = ++v
            }
            if (E && !o.cache[H]) {
                o.cache[H] = {}
            }
            if (G !== g) {
                o.cache[H][E] = G
            }
            return E ? o.cache[H][E] : H
        },
        removeData: function (F, E) {
            F = F == l ? A : F;
            var H = F[h];
            if (E) {
                if (o.cache[H]) {
                    delete o.cache[H][E];
                    E = "";
                    for (E in o.cache[H]) {
                        break
                    }
                    if (!E) {
                        o.removeData(F)
                    }
                }
            } else {
                try {
                    delete F[h]
                } catch (G) {
                    if (F.removeAttribute) {
                        F.removeAttribute(h)
                    }
                }
                delete o.cache[H]
            }
        },
        queue: function (F, E, H) {
            if (F) {
                E = (E || "fx") + "queue";
                var G = o.data(F, E);
                if (!G || o.isArray(H)) {
                    G = o.data(F, E, o.makeArray(H))
                } else {
                    if (H) {
                        G.push(H)
                    }
                }
            }
            return G
        },
        dequeue: function (H, G) {
            var E = o.queue(H, G),
                F = E.shift();
            if (!G || G === "fx") {
                F = E[0]
            }
            if (F !== g) {
                F.call(H)
            }
        }
    });
    o.fn.extend({
        data: function (E, G) {
            var H = E.split(".");
            H[1] = H[1] ? "." + H[1] : "";
            if (G === g) {
                var F = this.triggerHandler("getData" + H[1] + "!", [H[0]]);
                if (F === g && this.length) {
                    F = o.data(this[0], E)
                }
                return F === g && H[1] ? this.data(H[0]) : F
            } else {
                return this.trigger("setData" + H[1] + "!", [H[0], G]).each(function () {
                    o.data(this, E, G)
                })
            }
        },
        removeData: function (E) {
            return this.each(function () {
                o.removeData(this, E)
            })
        },
        queue: function (E, F) {
            if (typeof E !== "string") {
                F = E;
                E = "fx"
            }
            if (F === g) {
                return o.queue(this[0], E)
            }
            return this.each(function () {
                var G = o.queue(this, E, F);
                if (E == "fx" && G.length == 1) {
                    G[0].call(this)
                }
            })
        },
        dequeue: function (E) {
            return this.each(function () {
                o.dequeue(this, E)
            })
        }
    });
    (function () {
        var R = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
            L = 0,
            H = Object.prototype.toString;
        var F = function (Y, U, ab, ac) {
            ab = ab || [];
            U = U || document;
            if (U.nodeType !== 1 && U.nodeType !== 9) {
                return []
            }
            if (!Y || typeof Y !== "string") {
                return ab
            }
            var Z = [],
                W, af, ai, T, ad, V, X = true;
            R.lastIndex = 0;
            while ((W = R.exec(Y)) !== null) {
                Z.push(W[1]);
                if (W[2]) {
                    V = RegExp.rightContext;
                    break
                }
            }
            if (Z.length > 1 && M.exec(Y)) {
                if (Z.length === 2 && I.relative[Z[0]]) {
                    af = J(Z[0] + Z[1], U)
                } else {
                    af = I.relative[Z[0]] ? [U] : F(Z.shift(), U);
                    while (Z.length) {
                        Y = Z.shift();
                        if (I.relative[Y]) {
                            Y += Z.shift()
                        }
                        af = J(Y, af)
                    }
                }
            } else {
                var ae = ac ? {
                    expr: Z.pop(),
                    set: E(ac)
                } : F.find(Z.pop(), Z.length === 1 && U.parentNode ? U.parentNode : U, Q(U));
                af = F.filter(ae.expr, ae.set);
                if (Z.length > 0) {
                    ai = E(af)
                } else {
                    X = false
                }
                while (Z.length) {
                    var ah = Z.pop(),
                        ag = ah;
                    if (!I.relative[ah]) {
                        ah = ""
                    } else {
                        ag = Z.pop()
                    }
                    if (ag == null) {
                        ag = U
                    }
                    I.relative[ah](ai, ag, Q(U))
                }
            }
            if (!ai) {
                ai = af
            }
            if (!ai) {
                throw "Syntax error, unrecognized expression: " + (ah || Y)
            }
            if (H.call(ai) === "[object Array]") {
                if (!X) {
                    ab.push.apply(ab, ai)
                } else {
                    if (U.nodeType === 1) {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && (ai[aa] === true || ai[aa].nodeType === 1 && K(U, ai[aa]))) {
                                ab.push(af[aa])
                            }
                        }
                    } else {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && ai[aa].nodeType === 1) {
                                ab.push(af[aa])
                            }
                        }
                    }
                }
            } else {
                E(ai, ab)
            }
            if (V) {
                F(V, U, ab, ac);
                if (G) {
                    hasDuplicate = false;
                    ab.sort(G);
                    if (hasDuplicate) {
                        for (var aa = 1; aa < ab.length; aa++) {
                            if (ab[aa] === ab[aa - 1]) {
                                ab.splice(aa--, 1)
                            }
                        }
                    }
                }
            }
            return ab
        };
        F.matches = function (T, U) {
            return F(T, null, null, U)
        };
        F.find = function (aa, T, ab) {
            var Z, X;
            if (!aa) {
                return []
            }
            for (var W = 0, V = I.order.length; W < V; W++) {
                var Y = I.order[W],
                    X;
                if ((X = I.match[Y].exec(aa))) {
                    var U = RegExp.leftContext;
                    if (U.substr(U.length - 1) !== "\\") {
                        X[1] = (X[1] || "").replace(/\\/g, "");
                        Z = I.find[Y](X, T, ab);
                        if (Z != null) {
                            aa = aa.replace(I.match[Y], "");
                            break
                        }
                    }
                }
            }
            if (!Z) {
                Z = T.getElementsByTagName("*")
            }
            return {
                set: Z,
                expr: aa
            }
        };
        F.filter = function (ad, ac, ag, W) {
            var V = ad,
                ai = [],
                aa = ac,
                Y, T, Z = ac && ac[0] && Q(ac[0]);
            while (ad && ac.length) {
                for (var ab in I.filter) {
                    if ((Y = I.match[ab].exec(ad)) != null) {
                        var U = I.filter[ab],
                            ah, af;
                        T = false;
                        if (aa == ai) {
                            ai = []
                        }
                        if (I.preFilter[ab]) {
                            Y = I.preFilter[ab](Y, aa, ag, ai, W, Z);
                            if (!Y) {
                                T = ah = true
                            } else {
                                if (Y === true) {
                                    continue
                                }
                            }
                        }
                        if (Y) {
                            for (var X = 0;
                            (af = aa[X]) != null; X++) {
                                if (af) {
                                    ah = U(af, Y, X, aa);
                                    var ae = W ^ !! ah;
                                    if (ag && ah != null) {
                                        if (ae) {
                                            T = true
                                        } else {
                                            aa[X] = false
                                        }
                                    } else {
                                        if (ae) {
                                            ai.push(af);
                                            T = true
                                        }
                                    }
                                }
                            }
                        }
                        if (ah !== g) {
                            if (!ag) {
                                aa = ai
                            }
                            ad = ad.replace(I.match[ab], "");
                            if (!T) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (ad == V) {
                    if (T == null) {
                        throw "Syntax error, unrecognized expression: " + ad
                    } else {
                        break
                    }
                }
                V = ad
            }
            return aa
        };
        var I = F.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (T) {
                    return T.getAttribute("href")
                }
            },
            relative: {
                "+": function (aa, T, Z) {
                    var X = typeof T === "string",
                        ab = X && !/\W/.test(T),
                        Y = X && !ab;
                    if (ab && !Z) {
                        T = T.toUpperCase()
                    }
                    for (var W = 0, V = aa.length, U; W < V; W++) {
                        if ((U = aa[W])) {
                            while ((U = U.previousSibling) && U.nodeType !== 1) {}
                            aa[W] = Y || U && U.nodeName === T ? U || false : U === T
                        }
                    }
                    if (Y) {
                        F.filter(T, aa, true)
                    }
                },
                ">": function (Z, U, aa) {
                    var X = typeof U === "string";
                    if (X && !/\W/.test(U)) {
                        U = aa ? U : U.toUpperCase();
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                var W = Y.parentNode;
                                Z[V] = W.nodeName === U ? W : false
                            }
                        }
                    } else {
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                Z[V] = X ? Y.parentNode : Y.parentNode === U
                            }
                        }
                        if (X) {
                            F.filter(U, Z, true)
                        }
                    }
                },
                "": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (!U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("parentNode", U, V, W, X, Y)
                },
                "~": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (typeof U === "string" && !U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("previousSibling", U, V, W, X, Y)
                }
            },
            find: {
                ID: function (U, V, W) {
                    if (typeof V.getElementById !== "undefined" && !W) {
                        var T = V.getElementById(U[1]);
                        return T ? [T] : []
                    }
                },
                NAME: function (V, Y, Z) {
                    if (typeof Y.getElementsByName !== "undefined") {
                        var U = [],
                            X = Y.getElementsByName(V[1]);
                        for (var W = 0, T = X.length; W < T; W++) {
                            if (X[W].getAttribute("name") === V[1]) {
                                U.push(X[W])
                            }
                        }
                        return U.length === 0 ? null : U
                    }
                },
                TAG: function (T, U) {
                    return U.getElementsByTagName(T[1])
                }
            },
            preFilter: {
                CLASS: function (W, U, V, T, Z, aa) {
                    W = " " + W[1].replace(/\\/g, "") + " ";
                    if (aa) {
                        return W
                    }
                    for (var X = 0, Y;
                    (Y = U[X]) != null; X++) {
                        if (Y) {
                            if (Z ^ (Y.className && (" " + Y.className + " ").indexOf(W) >= 0)) {
                                if (!V) {
                                    T.push(Y)
                                }
                            } else {
                                if (V) {
                                    U[X] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (T) {
                    return T[1].replace(/\\/g, "")
                },
                TAG: function (U, T) {
                    for (var V = 0; T[V] === false; V++) {}
                    return T[V] && Q(T[V]) ? U[1] : U[1].toUpperCase()
                },
                CHILD: function (T) {
                    if (T[1] == "nth") {
                        var U = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2] == "even" && "2n" || T[2] == "odd" && "2n+1" || !/\D/.test(T[2]) && "0n+" + T[2] || T[2]);
                        T[2] = (U[1] + (U[2] || 1)) - 0;
                        T[3] = U[3] - 0
                    }
                    T[0] = L++;
                    return T
                },
                ATTR: function (X, U, V, T, Y, Z) {
                    var W = X[1].replace(/\\/g, "");
                    if (!Z && I.attrMap[W]) {
                        X[1] = I.attrMap[W]
                    }
                    if (X[2] === "~=") {
                        X[4] = " " + X[4] + " "
                    }
                    return X
                },
                PSEUDO: function (X, U, V, T, Y) {
                    if (X[1] === "not") {
                        if (X[3].match(R).length > 1 || /^\w/.test(X[3])) {
                            X[3] = F(X[3], null, null, U)
                        } else {
                            var W = F.filter(X[3], U, V, true ^ Y);
                            if (!V) {
                                T.push.apply(T, W)
                            }
                            return false
                        }
                    } else {
                        if (I.match.POS.test(X[0]) || I.match.CHILD.test(X[0])) {
                            return true
                        }
                    }
                    return X
                },
                POS: function (T) {
                    T.unshift(true);
                    return T
                }
            },
            filters: {
                enabled: function (T) {
                    return T.disabled === false && T.type !== "hidden"
                },
                disabled: function (T) {
                    return T.disabled === true
                },
                checked: function (T) {
                    return T.checked === true
                },
                selected: function (T) {
                    T.parentNode.selectedIndex;
                    return T.selected === true
                },
                parent: function (T) {
                    return !!T.firstChild
                },
                empty: function (T) {
                    return !T.firstChild
                },
                has: function (V, U, T) {
                    return !!F(T[3], V).length
                },
                header: function (T) {
                    return /h\d/i.test(T.nodeName)
                },
                text: function (T) {
                    return "text" === T.type
                },
                radio: function (T) {
                    return "radio" === T.type
                },
                checkbox: function (T) {
                    return "checkbox" === T.type
                },
                file: function (T) {
                    return "file" === T.type
                },
                password: function (T) {
                    return "password" === T.type
                },
                submit: function (T) {
                    return "submit" === T.type
                },
                image: function (T) {
                    return "image" === T.type
                },
                reset: function (T) {
                    return "reset" === T.type
                },
                button: function (T) {
                    return "button" === T.type || T.nodeName.toUpperCase() === "BUTTON"
                },
                input: function (T) {
                    return /input|select|textarea|button/i.test(T.nodeName)
                }
            },
            setFilters: {
                first: function (U, T) {
                    return T === 0
                },
                last: function (V, U, T, W) {
                    return U === W.length - 1
                },
                even: function (U, T) {
                    return T % 2 === 0
                },
                odd: function (U, T) {
                    return T % 2 === 1
                },
                lt: function (V, U, T) {
                    return U < T[3] - 0
                },
                gt: function (V, U, T) {
                    return U > T[3] - 0
                },
                nth: function (V, U, T) {
                    return T[3] - 0 == U
                },
                eq: function (V, U, T) {
                    return T[3] - 0 == U
                }
            },
            filter: {
                PSEUDO: function (Z, V, W, aa) {
                    var U = V[1],
                        X = I.filters[U];
                    if (X) {
                        return X(Z, W, V, aa)
                    } else {
                        if (U === "contains") {
                            return (Z.textContent || Z.innerText || "").indexOf(V[3]) >= 0
                        } else {
                            if (U === "not") {
                                var Y = V[3];
                                for (var W = 0, T = Y.length; W < T; W++) {
                                    if (Y[W] === Z) {
                                        return false
                                    }
                                }
                                return true
                            }
                        }
                    }
                },
                CHILD: function (T, W) {
                    var Z = W[1],
                        U = T;
                    switch (Z) {
                    case "only":
                    case "first":
                        while (U = U.previousSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        if (Z == "first") {
                            return true
                        }
                        U = T;
                    case "last":
                        while (U = U.nextSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var V = W[2],
                            ac = W[3];
                        if (V == 1 && ac == 0) {
                            return true
                        }
                        var Y = W[0],
                            ab = T.parentNode;
                        if (ab && (ab.sizcache !== Y || !T.nodeIndex)) {
                            var X = 0;
                            for (U = ab.firstChild; U; U = U.nextSibling) {
                                if (U.nodeType === 1) {
                                    U.nodeIndex = ++X
                                }
                            }
                            ab.sizcache = Y
                        }
                        var aa = T.nodeIndex - ac;
                        if (V == 0) {
                            return aa == 0
                        } else {
                            return (aa % V == 0 && aa / V >= 0)
                        }
                    }
                },
                ID: function (U, T) {
                    return U.nodeType === 1 && U.getAttribute("id") === T
                },
                TAG: function (U, T) {
                    return (T === "*" && U.nodeType === 1) || U.nodeName === T
                },
                CLASS: function (U, T) {
                    return (" " + (U.className || U.getAttribute("class")) + " ").indexOf(T) > -1
                },
                ATTR: function (Y, W) {
                    var V = W[1],
                        T = I.attrHandle[V] ? I.attrHandle[V](Y) : Y[V] != null ? Y[V] : Y.getAttribute(V),
                        Z = T + "",
                        X = W[2],
                        U = W[4];
                    return T == null ? X === "!=" : X === "=" ? Z === U : X === "*=" ? Z.indexOf(U) >= 0 : X === "~=" ? (" " + Z + " ").indexOf(U) >= 0 : !U ? Z && T !== false : X === "!=" ? Z != U : X === "^=" ? Z.indexOf(U) === 0 : X === "$=" ? Z.substr(Z.length - U.length) === U : X === "|=" ? Z === U || Z.substr(0, U.length + 1) === U + "-" : false
                },
                POS: function (X, U, V, Y) {
                    var T = U[2],
                        W = I.setFilters[T];
                    if (W) {
                        return W(X, V, U, Y)
                    }
                }
            }
        };
        var M = I.match.POS;
        for (var O in I.match) {
            I.match[O] = RegExp(I.match[O].source + /(?![^\[]*\])(?![^\(]*\))/.source)
        }
        var E = function (U, T) {
            U = Array.prototype.slice.call(U);
            if (T) {
                T.push.apply(T, U);
                return T
            }
            return U
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes)
        } catch (N) {
            E = function (X, W) {
                var U = W || [];
                if (H.call(X) === "[object Array]") {
                    Array.prototype.push.apply(U, X)
                } else {
                    if (typeof X.length === "number") {
                        for (var V = 0, T = X.length; V < T; V++) {
                            U.push(X[V])
                        }
                    } else {
                        for (var V = 0; X[V]; V++) {
                            U.push(X[V])
                        }
                    }
                }
                return U
            }
        }
        var G;
        if (document.documentElement.compareDocumentPosition) {
            G = function (U, T) {
                var V = U.compareDocumentPosition(T) & 4 ? -1 : U === T ? 0 : 1;
                if (V === 0) {
                    hasDuplicate = true
                }
                return V
            }
        } else {
            if ("sourceIndex" in document.documentElement) {
                G = function (U, T) {
                    var V = U.sourceIndex - T.sourceIndex;
                    if (V === 0) {
                        hasDuplicate = true
                    }
                    return V
                }
            } else {
                if (document.createRange) {
                    G = function (W, U) {
                        var V = W.ownerDocument.createRange(),
                            T = U.ownerDocument.createRange();
                        V.selectNode(W);
                        V.collapse(true);
                        T.selectNode(U);
                        T.collapse(true);
                        var X = V.compareBoundaryPoints(Range.START_TO_END, T);
                        if (X === 0) {
                            hasDuplicate = true
                        }
                        return X
                    }
                }
            }
        }(function () {
            var U = document.createElement("form"),
                V = "script" + (new Date).getTime();
            U.innerHTML = "<input name='" + V + "'/>";
            var T = document.documentElement;
            T.insertBefore(U, T.firstChild);
            if ( !! document.getElementById(V)) {
                I.find.ID = function (X, Y, Z) {
                    if (typeof Y.getElementById !== "undefined" && !Z) {
                        var W = Y.getElementById(X[1]);
                        return W ? W.id === X[1] || typeof W.getAttributeNode !== "undefined" && W.getAttributeNode("id").nodeValue === X[1] ? [W] : g : []
                    }
                };
                I.filter.ID = function (Y, W) {
                    var X = typeof Y.getAttributeNode !== "undefined" && Y.getAttributeNode("id");
                    return Y.nodeType === 1 && X && X.nodeValue === W
                }
            }
            T.removeChild(U)
        })();
        (function () {
            var T = document.createElement("div");
            T.appendChild(document.createComment(""));
            if (T.getElementsByTagName("*").length > 0) {
                I.find.TAG = function (U, Y) {
                    var X = Y.getElementsByTagName(U[1]);
                    if (U[1] === "*") {
                        var W = [];
                        for (var V = 0; X[V]; V++) {
                            if (X[V].nodeType === 1) {
                                W.push(X[V])
                            }
                        }
                        X = W
                    }
                    return X
                }
            }
            T.innerHTML = "<a href='#'></a>";
            if (T.firstChild && typeof T.firstChild.getAttribute !== "undefined" && T.firstChild.getAttribute("href") !== "#") {
                I.attrHandle.href = function (U) {
                    return U.getAttribute("href", 2)
                }
            }
        })();
        if (document.querySelectorAll) {
            (function () {
                var T = F,
                    U = document.createElement("div");
                U.innerHTML = "<p class='TEST'></p>";
                if (U.querySelectorAll && U.querySelectorAll(".TEST").length === 0) {
                    return
                }
                F = function (Y, X, V, W) {
                    X = X || document;
                    if (!W && X.nodeType === 9 && !Q(X)) {
                        try {
                            return E(X.querySelectorAll(Y), V)
                        } catch (Z) {}
                    }
                    return T(Y, X, V, W)
                };
                F.find = T.find;
                F.filter = T.filter;
                F.selectors = T.selectors;
                F.matches = T.matches
            })()
        }
        if (document.getElementsByClassName && document.documentElement.getElementsByClassName) {
            (function () {
                var T = document.createElement("div");
                T.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (T.getElementsByClassName("e").length === 0) {
                    return
                }
                T.lastChild.className = "e";
                if (T.getElementsByClassName("e").length === 1) {
                    return
                }
                I.order.splice(1, 0, "CLASS");
                I.find.CLASS = function (U, V, W) {
                    if (typeof V.getElementsByClassName !== "undefined" && !W) {
                        return V.getElementsByClassName(U[1])
                    }
                }
            })()
        }
        function P(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1 && !ac) {
                            T.sizcache = Y;
                            T.sizset = W
                        }
                        if (T.nodeName === Z) {
                            X = T;
                            break
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        function S(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1) {
                            if (!ac) {
                                T.sizcache = Y;
                                T.sizset = W
                            }
                            if (typeof Z !== "string") {
                                if (T === Z) {
                                    X = true;
                                    break
                                }
                            } else {
                                if (F.filter(Z, [T]).length > 0) {
                                    X = T;
                                    break
                                }
                            }
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        var K = document.compareDocumentPosition ?
        function (U, T) {
            return U.compareDocumentPosition(T) & 16
        } : function (U, T) {
            return U !== T && (U.contains ? U.contains(T) : true)
        };
        var Q = function (T) {
            return T.nodeType === 9 && T.documentElement.nodeName !== "HTML" || !! T.ownerDocument && Q(T.ownerDocument)
        };
        var J = function (T, aa) {
            var W = [],
                X = "",
                Y, V = aa.nodeType ? [aa] : aa;
            while ((Y = I.match.PSEUDO.exec(T))) {
                X += Y[0];
                T = T.replace(I.match.PSEUDO, "")
            }
            T = I.relative[T] ? T + "*" : T;
            for (var Z = 0, U = V.length; Z < U; Z++) {
                F(T, V[Z], W)
            }
            return F.filter(X, W)
        };
        o.find = F;
        o.filter = F.filter;
        o.expr = F.selectors;
        o.expr[":"] = o.expr.filters;
        F.selectors.filters.hidden = function (T) {
            return T.offsetWidth === 0 || T.offsetHeight === 0
        };
        F.selectors.filters.visible = function (T) {
            return T.offsetWidth > 0 || T.offsetHeight > 0
        };
        F.selectors.filters.animated = function (T) {
            return o.grep(o.timers, function (U) {
                return T === U.elem
            }).length
        };
        o.multiFilter = function (V, T, U) {
            if (U) {
                V = ":not(" + V + ")"
            }
            return F.matches(V, T)
        };
        o.dir = function (V, U) {
            var T = [],
                W = V[U];
            while (W && W != document) {
                if (W.nodeType == 1) {
                    T.push(W)
                }
                W = W[U]
            }
            return T
        };
        o.nth = function (X, T, V, W) {
            T = T || 1;
            var U = 0;
            for (; X; X = X[V]) {
                if (X.nodeType == 1 && ++U == T) {
                    break
                }
            }
            return X
        };
        o.sibling = function (V, U) {
            var T = [];
            for (; V; V = V.nextSibling) {
                if (V.nodeType == 1 && V != U) {
                    T.push(V)
                }
            }
            return T
        };
        return;
        l.Sizzle = F
    })();
    o.event = {
        add: function (I, F, H, K) {
            if (I.nodeType == 3 || I.nodeType == 8) {
                return
            }
            if (I.setInterval && I != l) {
                I = l
            }
            if (!H.guid) {
                H.guid = this.guid++
            }
            if (K !== g) {
                var G = H;
                H = this.proxy(G);
                H.data = K
            }
            var E = o.data(I, "events") || o.data(I, "events", {}),
                J = o.data(I, "handle") || o.data(I, "handle", function () {
                    return typeof o !== "undefined" && !o.event.triggered ? o.event.handle.apply(arguments.callee.elem, arguments) : g
                });
            J.elem = I;
            o.each(F.split(/\s+/), function (M, N) {
                var O = N.split(".");
                N = O.shift();
                H.type = O.slice().sort().join(".");
                var L = E[N];
                if (o.event.specialAll[N]) {
                    o.event.specialAll[N].setup.call(I, K, O)
                }
                if (!L) {
                    L = E[N] = {};
                    if (!o.event.special[N] || o.event.special[N].setup.call(I, K, O) === false) {
                        if (I.addEventListener) {
                            I.addEventListener(N, J, false)
                        } else {
                            if (I.attachEvent) {
                                I.attachEvent("on" + N, J)
                            }
                        }
                    }
                }
                L[H.guid] = H;
                o.event.global[N] = true
            });
            I = null
        },
        guid: 1,
        global: {},
        remove: function (K, H, J) {
            if (K.nodeType == 3 || K.nodeType == 8) {
                return
            }
            var G = o.data(K, "events"),
                F, E;
            if (G) {
                if (H === g || (typeof H === "string" && H.charAt(0) == ".")) {
                    for (var I in G) {
                        this.remove(K, I + (H || ""))
                    }
                } else {
                    if (H.type) {
                        J = H.handler;
                        H = H.type
                    }
                    o.each(H.split(/\s+/), function (M, O) {
                        var Q = O.split(".");
                        O = Q.shift();
                        var N = RegExp("(^|\\.)" + Q.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (G[O]) {
                            if (J) {
                                delete G[O][J.guid]
                            } else {
                                for (var P in G[O]) {
                                    if (N.test(G[O][P].type)) {
                                        delete G[O][P]
                                    }
                                }
                            }
                            if (o.event.specialAll[O]) {
                                o.event.specialAll[O].teardown.call(K, Q)
                            }
                            for (F in G[O]) {
                                break
                            }
                            if (!F) {
                                if (!o.event.special[O] || o.event.special[O].teardown.call(K, Q) === false) {
                                    if (K.removeEventListener) {
                                        K.removeEventListener(O, o.data(K, "handle"), false)
                                    } else {
                                        if (K.detachEvent) {
                                            K.detachEvent("on" + O, o.data(K, "handle"))
                                        }
                                    }
                                }
                                F = null;
                                delete G[O]
                            }
                        }
                    })
                }
                for (F in G) {
                    break
                }
                if (!F) {
                    var L = o.data(K, "handle");
                    if (L) {
                        L.elem = null
                    }
                    o.removeData(K, "events");
                    o.removeData(K, "handle")
                }
            }
        },
        trigger: function (I, K, H, E) {
            var G = I.type || I;
            if (!E) {
                I = typeof I === "object" ? I[h] ? I : o.extend(o.Event(G), I) : o.Event(G);
                if (G.indexOf("!") >= 0) {
                    I.type = G = G.slice(0, -1);
                    I.exclusive = true
                }
                if (!H) {
                    I.stopPropagation();
                    if (this.global[G]) {
                        o.each(o.cache, function () {
                            if (this.events && this.events[G]) {
                                o.event.trigger(I, K, this.handle.elem)
                            }
                        })
                    }
                }
                if (!H || H.nodeType == 3 || H.nodeType == 8) {
                    return g
                }
                I.result = g;
                I.target = H;
                K = o.makeArray(K);
                K.unshift(I)
            }
            I.currentTarget = H;
            var J = o.data(H, "handle");
            if (J) {
                J.apply(H, K)
            }
            if ((!H[G] || (o.nodeName(H, "a") && G == "click")) && H["on" + G] && H["on" + G].apply(H, K) === false) {
                I.result = false
            }
            if (!E && H[G] && !I.isDefaultPrevented() && !(o.nodeName(H, "a") && G == "click")) {
                this.triggered = true;
                try {
                    H[G]()
                } catch (L) {}
            }
            this.triggered = false;
            if (!I.isPropagationStopped()) {
                var F = H.parentNode || H.ownerDocument;
                if (F) {
                    o.event.trigger(I, K, F, true)
                }
            }
        },
        handle: function (K) {
            var J, E;
            K = arguments[0] = o.event.fix(K || l.event);
            K.currentTarget = this;
            var L = K.type.split(".");
            K.type = L.shift();
            J = !L.length && !K.exclusive;
            var I = RegExp("(^|\\.)" + L.slice().sort().join(".*\\.") + "(\\.|$)");
            E = (o.data(this, "events") || {})[K.type];
            for (var G in E) {
                var H = E[G];
                if (J || I.test(H.type)) {
                    K.handler = H;
                    K.data = H.data;
                    var F = H.apply(this, arguments);
                    if (F !== g) {
                        K.result = F;
                        if (F === false) {
                            K.preventDefault();
                            K.stopPropagation()
                        }
                    }
                    if (K.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (H) {
            if (H[h]) {
                return H
            }
            var F = H;
            H = o.Event(F);
            for (var G = this.props.length, J; G;) {
                J = this.props[--G];
                H[J] = F[J]
            }
            if (!H.target) {
                H.target = H.srcElement || document
            }
            if (H.target.nodeType == 3) {
                H.target = H.target.parentNode
            }
            if (!H.relatedTarget && H.fromElement) {
                H.relatedTarget = H.fromElement == H.target ? H.toElement : H.fromElement
            }
            if (H.pageX == null && H.clientX != null) {
                var I = document.documentElement,
                    E = document.body;
                H.pageX = H.clientX + (I && I.scrollLeft || E && E.scrollLeft || 0) - (I.clientLeft || 0);
                H.pageY = H.clientY + (I && I.scrollTop || E && E.scrollTop || 0) - (I.clientTop || 0)
            }
            if (!H.which && ((H.charCode || H.charCode === 0) ? H.charCode : H.keyCode)) {
                H.which = H.charCode || H.keyCode
            }
            if (!H.metaKey && H.ctrlKey) {
                H.metaKey = H.ctrlKey
            }
            if (!H.which && H.button) {
                H.which = (H.button & 1 ? 1 : (H.button & 2 ? 3 : (H.button & 4 ? 2 : 0)))
            }
            return H
        },
        proxy: function (F, E) {
            E = E ||
            function () {
                return F.apply(this, arguments)
            };
            E.guid = F.guid = F.guid || E.guid || this.guid++;
            return E
        },
        special: {
            ready: {
                setup: B,
                teardown: function () {}
            }
        },
        specialAll: {
            live: {
                setup: function (E, F) {
                    o.event.add(this, F[0], c)
                },
                teardown: function (G) {
                    if (G.length) {
                        var E = 0,
                            F = RegExp("(^|\\.)" + G[0] + "(\\.|$)");
                        o.each((o.data(this, "events").live || {}), function () {
                            if (F.test(this.type)) {
                                E++
                            }
                        });
                        if (E < 1) {
                            o.event.remove(this, G[0], c)
                        }
                    }
                }
            }
        }
    };
    o.Event = function (E) {
        if (!this.preventDefault) {
            return new o.Event(E)
        }
        if (E && E.type) {
            this.originalEvent = E;
            this.type = E.type
        } else {
            this.type = E
        }
        this.timeStamp = e();
        this[h] = true
    };

    function k() {
        return false
    }
    function u() {
        return true
    }
    o.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.preventDefault) {
                E.preventDefault()
            }
            E.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.stopPropagation) {
                E.stopPropagation()
            }
            E.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u;
            this.stopPropagation()
        },
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k
    };
    var a = function (F) {
        var E = F.relatedTarget;
        while (E && E != this) {
            try {
                E = E.parentNode
            } catch (G) {
                E = this
            }
        }
        if (E != this) {
            F.type = F.data;
            o.event.handle.apply(this, arguments)
        }
    };
    o.each({
        mouseover: "mouseenter",
        mouseout: "mouseleave"
    }, function (F, E) {
        o.event.special[E] = {
            setup: function () {
                o.event.add(this, F, a, E)
            },
            teardown: function () {
                o.event.remove(this, F, a)
            }
        }
    });
    o.fn.extend({
        bind: function (F, G, E) {
            return F == "unload" ? this.one(F, G, E) : this.each(function () {
                o.event.add(this, F, E || G, E && G)
            })
        },
        one: function (G, H, F) {
            var E = o.event.proxy(F || H, function (I) {
                o(this).unbind(I, E);
                return (F || H).apply(this, arguments)
            });
            return this.each(function () {
                o.event.add(this, G, E, F && H)
            })
        },
        unbind: function (F, E) {
            return this.each(function () {
                o.event.remove(this, F, E)
            })
        },
        trigger: function (E, F) {
            return this.each(function () {
                o.event.trigger(E, F, this)
            })
        },
        triggerHandler: function (E, G) {
            if (this[0]) {
                var F = o.Event(E);
                F.preventDefault();
                F.stopPropagation();
                o.event.trigger(F, G, this[0]);
                return F.result
            }
        },
        toggle: function (G) {
            var E = arguments,
                F = 1;
            while (F < E.length) {
                o.event.proxy(G, E[F++])
            }
            return this.click(o.event.proxy(G, function (H) {
                this.lastToggle = (this.lastToggle || 0) % F;
                H.preventDefault();
                return E[this.lastToggle++].apply(this, arguments) || false
            }))
        },
        hover: function (E, F) {
            return this.mouseenter(E).mouseleave(F)
        },
        ready: function (E) {
            B();
            if (o.isReady) {
                E.call(document, o)
            } else {
                o.readyList.push(E)
            }
            return this
        },
        live: function (G, F) {
            var E = o.event.proxy(F);
            E.guid += this.selector + G;
            o(document).bind(i(G, this.selector), this.selector, E);
            return this
        },
        die: function (F, E) {
            o(document).unbind(i(F, this.selector), E ? {
                guid: E.guid + this.selector + F
            } : null);
            return this
        }
    });

    function c(H) {
        var E = RegExp("(^|\\.)" + H.type + "(\\.|$)"),
            G = true,
            F = [];
        o.each(o.data(this, "events").live || [], function (I, J) {
            if (E.test(J.type)) {
                var K = o(H.target).closest(J.data)[0];
                if (K) {
                    F.push({
                        elem: K,
                        fn: J
                    })
                }
            }
        });
        F.sort(function (J, I) {
            return o.data(J.elem, "closest") - o.data(I.elem, "closest")
        });
        o.each(F, function () {
            if (this.fn.call(this.elem, H, this.fn.data) === false) {
                return (G = false)
            }
        });
        return G
    }
    function i(F, E) {
        return ["live", F, E.replace(/\./g, "`").replace(/ /g, "|")].join(".")
    }
    o.extend({
        isReady: false,
        readyList: [],
        ready: function () {
            if (!o.isReady) {
                o.isReady = true;
                if (o.readyList) {
                    o.each(o.readyList, function () {
                        this.call(document, o)
                    });
                    o.readyList = null
                }
                o(document).triggerHandler("ready")
            }
        }
    });
    var x = false;

    function B() {
        if (x) {
            return
        }
        x = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                o.ready()
            }, false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        o.ready()
                    }
                });
                if (document.documentElement.doScroll && l == l.top) {
                    (function () {
                        if (o.isReady) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch (E) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        o.ready()
                    })()
                }
            }
        }
        o.event.add(l, "load", o.ready)
    }
    o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","), function (F, E) {
        o.fn[E] = function (G) {
            return G ? this.bind(E, G) : this.trigger(E)
        }
    });
    o(l).bind("unload", function () {
        for (var E in o.cache) {
            if (E != 1 && o.cache[E].handle) {
                o.event.remove(o.cache[E].handle.elem)
            }
        }
    });
    (function () {
        o.support = {};
        var F = document.documentElement,
            G = document.createElement("script"),
            K = document.createElement("div"),
            J = "script" + (new Date).getTime();
        K.style.display = "none";
        K.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var H = K.getElementsByTagName("*"),
            E = K.getElementsByTagName("a")[0];
        if (!H || !H.length || !E) {
            return
        }
        o.support = {
            leadingWhitespace: K.firstChild.nodeType == 3,
            tbody: !K.getElementsByTagName("tbody").length,
            objectAll: !! K.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !! K.getElementsByTagName("link").length,
            style: /red/.test(E.getAttribute("style")),
            hrefNormalized: E.getAttribute("href") === "/a",
            opacity: E.style.opacity === "0.5",
            cssFloat: !! E.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        G.type = "text/javascript";
        try {
            G.appendChild(document.createTextNode("window." + J + "=1;"))
        } catch (I) {}
        F.insertBefore(G, F.firstChild);
        if (l[J]) {
            o.support.scriptEval = true;
            delete l[J]
        }
        F.removeChild(G);
        if (K.attachEvent && K.fireEvent) {
            K.attachEvent("onclick", function () {
                o.support.noCloneEvent = false;
                K.detachEvent("onclick", arguments.callee)
            });
            K.cloneNode(true).fireEvent("onclick")
        }
        o(function () {
            var L = document.createElement("div");
            L.style.width = L.style.paddingLeft = "1px";
            document.body.appendChild(L);
            o.boxModel = o.support.boxModel = L.offsetWidth === 2;
            document.body.removeChild(L).style.display = "none"
        })
    })();
    var w = o.support.cssFloat ? "cssFloat" : "styleFloat";
    o.props = {
        "for": "htmlFor",
        "class": "className",
        "float": w,
        cssFloat: w,
        styleFloat: w,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    o.fn.extend({
        _load: o.fn.load,
        load: function (G, J, K) {
            if (typeof G !== "string") {
                return this._load(G)
            }
            var I = G.indexOf(" ");
            if (I >= 0) {
                var E = G.slice(I, G.length);
                G = G.slice(0, I)
            }
            var H = "GET";
            if (J) {
                if (o.isFunction(J)) {
                    K = J;
                    J = null
                } else {
                    if (typeof J === "object") {
                        J = o.param(J);
                        H = "POST"
                    }
                }
            }
            var F = this;
            o.ajax({
                url: G,
                type: H,
                dataType: "html",
                data: J,
                complete: function (M, L) {
                    if (L == "success" || L == "notmodified") {
                        F.html(E ? o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(E) : M.responseText)
                    }
                    if (K) {
                        F.each(K, [M.responseText, L, M])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return o.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? o.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type))
            }).map(function (E, F) {
                var G = o(this).val();
                return G == null ? null : o.isArray(G) ? o.map(G, function (I, H) {
                    return {
                        name: F.name,
                        value: I
                    }
                }) : {
                    name: F.name,
                    value: G
                }
            }).get()
        }
    });
    o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (E, F) {
        o.fn[F] = function (G) {
            return this.bind(F, G)
        }
    });
    var r = e();
    o.extend({
        get: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = null
            }
            return o.ajax({
                type: "GET",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        getScript: function (E, F) {
            return o.get(E, null, F, "script")
        },
        getJSON: function (E, F, G) {
            return o.get(E, F, G, "json")
        },
        post: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = {}
            }
            return o.ajax({
                type: "POST",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        ajaxSetup: function (E) {
            o.extend(o.ajaxSettings, E)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return l.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (M) {
            M = o.extend(true, M, o.extend(true, {}, o.ajaxSettings, M));
            var W, F = /=\?(&|$)/g,
                R, V, G = M.type.toUpperCase();
            if (M.data && M.processData && typeof M.data !== "string") {
                M.data = o.param(M.data)
            }
            if (M.dataType == "jsonp") {
                if (G == "GET") {
                    if (!M.url.match(F)) {
                        M.url += (M.url.match(/\?/) ? "&" : "?") + (M.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!M.data || !M.data.match(F)) {
                        M.data = (M.data ? M.data + "&" : "") + (M.jsonp || "callback") + "=?"
                    }
                }
                M.dataType = "json"
            }
            if (M.dataType == "json" && (M.data && M.data.match(F) || M.url.match(F))) {
                W = "jsonp" + r++;
                if (M.data) {
                    M.data = (M.data + "").replace(F, "=" + W + "$1")
                }
                M.url = M.url.replace(F, "=" + W + "$1");
                M.dataType = "script";
                l[W] = function (X) {
                    V = X;
                    I();
                    L();
                    l[W] = g;
                    try {
                        delete l[W]
                    } catch (Y) {}
                    if (H) {
                        H.removeChild(T)
                    }
                }
            }
            if (M.dataType == "script" && M.cache == null) {
                M.cache = false
            }
            if (M.cache === false && G == "GET") {
                var E = e();
                var U = M.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + E + "$2");
                M.url = U + ((U == M.url) ? (M.url.match(/\?/) ? "&" : "?") + "_=" + E : "")
            }
            if (M.data && G == "GET") {
                M.url += (M.url.match(/\?/) ? "&" : "?") + M.data;
                M.data = null
            }
            if (M.global && !o.active++) {
                o.event.trigger("ajaxStart")
            }
            var Q = /^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);
            if (M.dataType == "script" && G == "GET" && Q && (Q[1] && Q[1] != location.protocol || Q[2] != location.host)) {
                var H = document.getElementsByTagName("head")[0];
                var T = document.createElement("script");
                T.src = M.url;
                if (M.scriptCharset) {
                    T.charset = M.scriptCharset
                }
                if (!W) {
                    var O = false;
                    T.onload = T.onreadystatechange = function () {
                        if (!O && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                            O = true;
                            I();
                            L();
                            T.onload = T.onreadystatechange = null;
                            H.removeChild(T)
                        }
                    }
                }
                H.appendChild(T);
                return g
            }
            var K = false;
            var J = M.xhr();
            if (M.username) {
                J.open(G, M.url, M.async, M.username, M.password)
            } else {
                J.open(G, M.url, M.async)
            }
            try {
                if (M.data) {
                    J.setRequestHeader("Content-Type", M.contentType)
                }
                if (M.ifModified) {
                    J.setRequestHeader("If-Modified-Since", o.lastModified[M.url] || "Thu, 01 Jan 1970 00:00:00 GMT")
                }
                J.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                J.setRequestHeader("Accept", M.dataType && M.accepts[M.dataType] ? M.accepts[M.dataType] + ", */*" : M.accepts._default)
            } catch (S) {}
            if (M.beforeSend && M.beforeSend(J, M) === false) {
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
                J.abort();
                return false
            }
            if (M.global) {
                o.event.trigger("ajaxSend", [J, M])
            }
            var N = function (X) {
                if (J.readyState == 0) {
                    if (P) {
                        clearInterval(P);
                        P = null;
                        if (M.global && !--o.active) {
                            o.event.trigger("ajaxStop")
                        }
                    }
                } else {
                    if (!K && J && (J.readyState == 4 || X == "timeout")) {
                        K = true;
                        if (P) {
                            clearInterval(P);
                            P = null
                        }
                        R = X == "timeout" ? "timeout" : !o.httpSuccess(J) ? "error" : M.ifModified && o.httpNotModified(J, M.url) ? "notmodified" : "success";
                        if (R == "success") {
                            try {
                                V = o.httpData(J, M.dataType, M)
                            } catch (Z) {
                                R = "parsererror"
                            }
                        }
                        if (R == "success") {
                            var Y;
                            try {
                                Y = J.getResponseHeader("Last-Modified")
                            } catch (Z) {}
                            if (M.ifModified && Y) {
                                o.lastModified[M.url] = Y
                            }
                            if (!W) {
                                I()
                            }
                        } else {
                            o.handleError(M, J, R)
                        }
                        L();
                        if (X) {
                            J.abort()
                        }
                        if (M.async) {
                            J = null
                        }
                    }
                }
            };
            if (M.async) {
                var P = setInterval(N, 13);
                if (M.timeout > 0) {
                    setTimeout(function () {
                        if (J && !K) {
                            N("timeout")
                        }
                    }, M.timeout)
                }
            }
            try {
                J.send(M.data)
            } catch (S) {
                o.handleError(M, J, null, S)
            }
            if (!M.async) {
                N()
            }
            function I() {
                if (M.success) {
                    M.success(V, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxSuccess", [J, M])
                }
            }
            function L() {
                if (M.complete) {
                    M.complete(J, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxComplete", [J, M])
                }
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
            }
            return J
        },
        handleError: function (F, H, E, G) {
            if (F.error) {
                F.error(H, E, G)
            }
            if (F.global) {
                o.event.trigger("ajaxError", [H, F, G])
            }
        },
        active: 0,
        httpSuccess: function (F) {
            try {
                return !F.status && location.protocol == "file:" || (F.status >= 200 && F.status < 300) || F.status == 304 || F.status == 1223
            } catch (E) {}
            return false
        },
        httpNotModified: function (G, E) {
            try {
                var H = G.getResponseHeader("Last-Modified");
                return G.status == 304 || H == o.lastModified[E]
            } catch (F) {}
            return false
        },
        httpData: function (J, H, G) {
            var F = J.getResponseHeader("content-type"),
                E = H == "xml" || !H && F && F.indexOf("xml") >= 0,
                I = E ? J.responseXML : J.responseText;
            if (E && I.documentElement.tagName == "parsererror") {
                throw "parsererror"
            }
            if (G && G.dataFilter) {
                I = G.dataFilter(I, H)
            }
            if (typeof I === "string") {
                if (H == "script") {
                    o.globalEval(I)
                }
                if (H == "json") {
                    I = l["eval"]("(" + I + ")")
                }
            }
            return I
        },
        param: function (E) {
            var G = [];

            function H(I, J) {
                G[G.length] = encodeURIComponent(I) + "=" + encodeURIComponent(J)
            }
            if (o.isArray(E) || E.jquery) {
                o.each(E, function () {
                    H(this.name, this.value)
                })
            } else {
                for (var F in E) {
                    if (o.isArray(E[F])) {
                        o.each(E[F], function () {
                            H(F, this)
                        })
                    } else {
                        H(F, o.isFunction(E[F]) ? E[F]() : E[F])
                    }
                }
            }
            return G.join("&").replace(/%20/g, "+")
        }
    });
    var m = {},
        n, d = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
    ];

    function t(F, E) {
        var G = {};
        o.each(d.concat.apply([], d.slice(0, E)), function () {
            G[this] = F
        });
        return G
    }
    o.fn.extend({
        show: function (J, L) {
            if (J) {
                return this.animate(t("show", 3), J, L)
            } else {
                for (var H = 0, F = this.length; H < F; H++) {
                    var E = o.data(this[H], "olddisplay");
                    this[H].style.display = E || "";
                    if (o.css(this[H], "display") === "none") {
                        var G = this[H].tagName,
                            K;
                        if (m[G]) {
                            K = m[G]
                        } else {
                            var I = o("<" + G + " />").appendTo("body");
                            K = I.css("display");
                            if (K === "none") {
                                K = "block"
                            }
                            I.remove();
                            m[G] = K
                        }
                        o.data(this[H], "olddisplay", K)
                    }
                }
                for (var H = 0, F = this.length; H < F; H++) {
                    this[H].style.display = o.data(this[H], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (H, I) {
            if (H) {
                return this.animate(t("hide", 3), H, I)
            } else {
                for (var G = 0, F = this.length; G < F; G++) {
                    var E = o.data(this[G], "olddisplay");
                    if (!E && E !== "none") {
                        o.data(this[G], "olddisplay", o.css(this[G], "display"))
                    }
                }
                for (var G = 0, F = this.length; G < F; G++) {
                    this[G].style.display = "none"
                }
                return this
            }
        },
        _toggle: o.fn.toggle,
        toggle: function (G, F) {
            var E = typeof G === "boolean";
            return o.isFunction(G) && o.isFunction(F) ? this._toggle.apply(this, arguments) : G == null || E ? this.each(function () {
                var H = E ? G : o(this).is(":hidden");
                o(this)[H ? "show" : "hide"]()
            }) : this.animate(t("toggle", 3), G, F)
        },
        fadeTo: function (E, G, F) {
            return this.animate({
                opacity: G
            }, E, F)
        },
        animate: function (I, F, H, G) {
            var E = o.speed(F, H, G);
            return this[E.queue === false ? "each" : "queue"](function () {
                var K = o.extend({}, E),
                    M, L = this.nodeType == 1 && o(this).is(":hidden"),
                    J = this;
                for (M in I) {
                    if (I[M] == "hide" && L || I[M] == "show" && !L) {
                        return K.complete.call(this)
                    }
                    if ((M == "height" || M == "width") && this.style) {
                        K.display = o.css(this, "display");
                        K.overflow = this.style.overflow
                    }
                }
                if (K.overflow != null) {
                    this.style.overflow = "hidden"
                }
                K.curAnim = o.extend({}, I);
                o.each(I, function (O, S) {
                    var R = new o.fx(J, K, O);
                    if (/toggle|show|hide/.test(S)) {
                        R[S == "toggle" ? L ? "show" : "hide" : S](I)
                    } else {
                        var Q = S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                            T = R.cur(true) || 0;
                        if (Q) {
                            var N = parseFloat(Q[2]),
                                P = Q[3] || "px";
                            if (P != "px") {
                                J.style[O] = (N || 1) + P;
                                T = ((N || 1) / R.cur(true)) * T;
                                J.style[O] = T + P
                            }
                            if (Q[1]) {
                                N = ((Q[1] == "-=" ? -1 : 1) * N) + T
                            }
                            R.custom(T, N, P)
                        } else {
                            R.custom(T, S, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (F, E) {
            var G = o.timers;
            if (F) {
                this.queue([])
            }
            this.each(function () {
                for (var H = G.length - 1; H >= 0; H--) {
                    if (G[H].elem == this) {
                        if (E) {
                            G[H](true)
                        }
                        G.splice(H, 1)
                    }
                }
            });
            if (!E) {
                this.dequeue()
            }
            return this
        }
    });
    o.each({
        slideDown: t("show", 1),
        slideUp: t("hide", 1),
        slideToggle: t("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (E, F) {
        o.fn[E] = function (G, H) {
            return this.animate(F, G, H)
        }
    });
    o.extend({
        speed: function (G, H, F) {
            var E = typeof G === "object" ? G : {
                complete: F || !F && H || o.isFunction(G) && G,
                duration: G,
                easing: F && H || H && !o.isFunction(H) && H
            };
            E.duration = o.fx.off ? 0 : typeof E.duration === "number" ? E.duration : o.fx.speeds[E.duration] || o.fx.speeds._default;
            E.old = E.complete;
            E.complete = function () {
                if (E.queue !== false) {
                    o(this).dequeue()
                }
                if (o.isFunction(E.old)) {
                    E.old.call(this)
                }
            };
            return E
        },
        easing: {
            linear: function (G, H, E, F) {
                return E + F * G
            },
            swing: function (G, H, E, F) {
                return ((-Math.cos(G * Math.PI) / 2) + 0.5) * F + E
            }
        },
        timers: [],
        fx: function (F, E, G) {
            this.options = E;
            this.elem = F;
            this.prop = G;
            if (!E.orig) {
                E.orig = {}
            }
        }
    });
    o.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(o.fx.step[this.prop] || o.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (F) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var E = parseFloat(o.css(this.elem, this.prop, F));
            return E && E > -10000 ? E : parseFloat(o.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (I, H, G) {
            this.startTime = e();
            this.start = I;
            this.end = H;
            this.unit = G || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var E = this;

            function F(J) {
                return E.step(J)
            }
            F.elem = this.elem;
            if (F() && o.timers.push(F) && !n) {
                n = setInterval(function () {
                    var K = o.timers;
                    for (var J = 0; J < K.length; J++) {
                        if (!K[J]()) {
                            K.splice(J--, 1)
                        }
                    }
                    if (!K.length) {
                        clearInterval(n);
                        n = g
                    }
                }, 13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            o(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (H) {
            var G = e();
            if (H || G >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var E = true;
                for (var F in this.options.curAnim) {
                    if (this.options.curAnim[F] !== true) {
                        E = false
                    }
                }
                if (E) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (o.css(this.elem, "display") == "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        o(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var I in this.options.curAnim) {
                            o.attr(this.elem.style, I, this.options.orig[I])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var J = G - this.startTime;
                this.state = J / this.options.duration;
                this.pos = o.easing[this.options.easing || (o.easing.swing ? "swing" : "linear")](this.state, J, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    o.extend(o.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (E) {
                o.attr(E.elem.style, "opacity", E.now)
            },
            _default: function (E) {
                if (E.elem.style && E.elem.style[E.prop] != null) {
                    E.elem.style[E.prop] = E.now + E.unit
                } else {
                    E.elem[E.prop] = E.now
                }
            }
        }
    });
    if (document.documentElement.getBoundingClientRect) {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            var G = this[0].getBoundingClientRect(),
                J = this[0].ownerDocument,
                F = J.body,
                E = J.documentElement,
                L = E.clientTop || F.clientTop || 0,
                K = E.clientLeft || F.clientLeft || 0,
                I = G.top + (self.pageYOffset || o.boxModel && E.scrollTop || F.scrollTop) - L,
                H = G.left + (self.pageXOffset || o.boxModel && E.scrollLeft || F.scrollLeft) - K;
            return {
                top: I,
                left: H
            }
        }
    } else {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            o.offset.initialized || o.offset.initialize();
            var J = this[0],
                G = J.offsetParent,
                F = J,
                O = J.ownerDocument,
                M, H = O.documentElement,
                K = O.body,
                L = O.defaultView,
                E = L.getComputedStyle(J, null),
                N = J.offsetTop,
                I = J.offsetLeft;
            while ((J = J.parentNode) && J !== K && J !== H) {
                M = L.getComputedStyle(J, null);
                N -= J.scrollTop,
                I -= J.scrollLeft;
                if (J === G) {
                    N += J.offsetTop,
                    I += J.offsetLeft;
                    if (o.offset.doesNotAddBorder && !(o.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(J.tagName))) {
                        N += parseInt(M.borderTopWidth, 10) || 0,
                        I += parseInt(M.borderLeftWidth, 10) || 0
                    }
                    F = G,
                    G = J.offsetParent
                }
                if (o.offset.subtractsBorderForOverflowNotVisible && M.overflow !== "visible") {
                    N += parseInt(M.borderTopWidth, 10) || 0,
                    I += parseInt(M.borderLeftWidth, 10) || 0
                }
                E = M
            }
            if (E.position === "relative" || E.position === "static") {
                N += K.offsetTop,
                I += K.offsetLeft
            }
            if (E.position === "fixed") {
                N += Math.max(H.scrollTop, K.scrollTop),
                I += Math.max(H.scrollLeft, K.scrollLeft)
            }
            return {
                top: N,
                left: I
            }
        }
    }
    o.offset = {
        initialize: function () {
            if (this.initialized) {
                return
            }
            var L = document.body,
                F = document.createElement("div"),
                H, G, N, I, M, E, J = L.style.marginTop,
                K = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
            M = {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            };
            for (E in M) {
                F.style[E] = M[E]
            }
            F.innerHTML = K;
            L.insertBefore(F, L.firstChild);
            H = F.firstChild,
            G = H.firstChild,
            I = H.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (G.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (I.offsetTop === 5);
            H.style.overflow = "hidden",
            H.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (G.offsetTop === -5);
            L.style.marginTop = "1px";
            this.doesNotIncludeMarginInBodyOffset = (L.offsetTop === 0);
            L.style.marginTop = J;
            L.removeChild(F);
            this.initialized = true
        },
        bodyOffset: function (E) {
            o.offset.initialized || o.offset.initialize();
            var G = E.offsetTop,
                F = E.offsetLeft;
            if (o.offset.doesNotIncludeMarginInBodyOffset) {
                G += parseInt(o.curCSS(E, "marginTop", true), 10) || 0,
                F += parseInt(o.curCSS(E, "marginLeft", true), 10) || 0
            }
            return {
                top: G,
                left: F
            }
        }
    };
    o.fn.extend({
        position: function () {
            var I = 0,
                H = 0,
                F;
            if (this[0]) {
                var G = this.offsetParent(),
                    J = this.offset(),
                    E = /^body|html$/i.test(G[0].tagName) ? {
                        top: 0,
                        left: 0
                    } : G.offset();
                J.top -= j(this, "marginTop");
                J.left -= j(this, "marginLeft");
                E.top += j(G, "borderTopWidth");
                E.left += j(G, "borderLeftWidth");
                F = {
                    top: J.top - E.top,
                    left: J.left - E.left
                }
            }
            return F
        },
        offsetParent: function () {
            var E = this[0].offsetParent || document.body;
            while (E && (!/^body|html$/i.test(E.tagName) && o.css(E, "position") == "static")) {
                E = E.offsetParent
            }
            return o(E)
        }
    });
    o.each(["Left", "Top"], function (F, E) {
        var G = "scroll" + E;
        o.fn[G] = function (H) {
            if (!this[0]) {
                return null
            }
            return H !== g ? this.each(function () {
                this == l || this == document ? l.scrollTo(!F ? H : o(l).scrollLeft(), F ? H : o(l).scrollTop()) : this[G] = H
            }) : this[0] == l || this[0] == document ? self[F ? "pageYOffset" : "pageXOffset"] || o.boxModel && document.documentElement[G] || document.body[G] : this[0][G]
        }
    });
    o.each(["Height", "Width"], function (I, G) {
        var E = I ? "Left" : "Top",
            H = I ? "Right" : "Bottom",
            F = G.toLowerCase();
        o.fn["inner" + G] = function () {
            return this[0] ? o.css(this[0], F, false, "padding") : null
        };
        o.fn["outer" + G] = function (K) {
            return this[0] ? o.css(this[0], F, false, K ? "margin" : "border") : null
        };
        var J = G.toLowerCase();
        o.fn[J] = function (K) {
            return this[0] == l ? document.compatMode == "CSS1Compat" && document.documentElement["client" + G] || document.body["client" + G] : this[0] == document ? Math.max(document.documentElement["client" + G], document.body["scroll" + G], document.documentElement["scroll" + G], document.body["offset" + G], document.documentElement["offset" + G]) : K === g ? (this.length ? o.css(this[0], J) : null) : this.css(J, typeof K === "string" ? K : K + "px")
        }
    })
})();
(function ($) {
    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            var isUrl = typeof urlOrData == "string";
            options = $.extend({}, $.Autocompleter.defaults, {
                url: isUrl ? urlOrData : null,
                data: isUrl ? null : urlOrData,
                delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                max: options && !options.scroll ? 10 : 150
            }, options);
            options.highlight = options.highlight ||
            function (value) {
                return value
            };
            options.formatMatch = options.formatMatch || options.formatItem;
            return this.each(function () {
                new $.Autocompleter(this, options)
            })
        },
        result: function (handler) {
            return this.bind("result", handler)
        },
        search: function (handler) {
            return this.trigger("search", [handler])
        },
        flushCache: function () {
            return this.trigger("flushCache")
        },
        setOptions: function (options) {
            return this.trigger("setOptions", [options])
        },
        unautocomplete: function () {
            return this.trigger("unautocomplete")
        }
    });
    $.Autocompleter = function (input, options) {
        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };
        var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
        var timeout;
        var previousValue = "";
        var cache = $.Autocompleter.Cache(options);
        var hasFocus = 0;
        var lastKeyPressCode;
        var config = {
            mouseDownOnSelect: false
        };
        var select = $.Autocompleter.Select(options, input, selectCurrent, config);
        var blockSubmit;
        $.browser.opera && $(input.form).bind("submit.autocomplete", function () {
            if (blockSubmit) {
                blockSubmit = false;
                return false
            }
        });
        $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (event) {
            hasFocus = 1;
            lastKeyPressCode = event.keyCode;
            switch (event.keyCode) {
            case KEY.UP:
                event.preventDefault();
                if (select.visible()) {
                    select.prev()
                } else {
                    onChange(0, true)
                }
                break;
            case KEY.DOWN:
                event.preventDefault();
                if (select.visible()) {
                    select.next()
                } else {
                    onChange(0, true)
                }
                break;
            case KEY.PAGEUP:
                event.preventDefault();
                if (select.visible()) {
                    select.pageUp()
                } else {
                    onChange(0, true)
                }
                break;
            case KEY.PAGEDOWN:
                event.preventDefault();
                if (select.visible()) {
                    select.pageDown()
                } else {
                    onChange(0, true)
                }
                break;
            case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
            case KEY.RETURN:
                if (selectCurrent()) {
                    event.preventDefault();
                    blockSubmit = true;
                    return false
                }
                break;
            case KEY.ESC:
                select.hide();
                break;
            default:
                clearTimeout(timeout);
                timeout = setTimeout(onChange, options.delay);
                break
            }
        }).focus(function () {
            hasFocus++
        }).blur(function () {
            hasFocus = 0;
            if (!config.mouseDownOnSelect) {
                hideResults()
            }
        }).click(function () {
            if (hasFocus++ > 1 && !select.visible()) {
                onChange(0, true)
            }
        }).bind("search", function () {
            var fn = (arguments.length > 1) ? arguments[1] : null;

            function findValueCallback(q, data) {
                var result;
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].result.toLowerCase() == q.toLowerCase()) {
                            result = data[i];
                            break
                        }
                    }
                }
                if (typeof fn == "function") {
                    fn(result)
                } else {
                    $input.trigger("result", result && [result.data, result.value])
                }
            }
            $.each(trimWords($input.val()), function (i, value) {
                request(value, findValueCallback, findValueCallback)
            })
        }).bind("flushCache", function () {
            cache.flush()
        }).bind("setOptions", function () {
            $.extend(options, arguments[1]);
            if ("data" in arguments[1]) {
                cache.populate()
            }
        }).bind("unautocomplete", function () {
            select.unbind();
            $input.unbind();
            $(input.form).unbind(".autocomplete")
        });
        $(window).resize(function () {
            repositionResults()
        });

        function selectCurrent() {
            var selected = select.selected();
            if (!selected) {
                return false
            }
            var v = selected.result;
            previousValue = v;
            if (options.multiple) {
                var words = trimWords($input.val());
                if (words.length > 1) {
                    var seperator = options.multipleSeparator.length;
                    var cursorAt = $(input).selection().start;
                    var wordAt, progress = 0;
                    $.each(words, function (i, word) {
                        progress += word.length;
                        if (cursorAt <= progress) {
                            wordAt = i;
                            return false
                        }
                        progress += seperator
                    });
                    words[wordAt] = v;
                    v = words.join(options.multipleSeparator)
                }
                v += options.multipleSeparator
            }
            $input.val(v);
            hideResultsNow();
            $input.trigger("result", [selected.data, selected.value]);
            return true
        }
        function onChange(crap, skipPrevCheck) {
            if (lastKeyPressCode == KEY.DEL) {
                select.hide();
                return
            }
            var currentValue = $input.val();
            if (!skipPrevCheck && currentValue == previousValue) {
                return
            }
            previousValue = currentValue;
            currentValue = lastWord(currentValue);
            if (currentValue.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                if (!options.matchCase) {
                    currentValue = currentValue.toLowerCase()
                }
                request(currentValue, receiveData, hideResultsNow)
            } else {
                stopLoading();
                select.hide()
            }
        }
        function trimWords(value) {
            if (!value) {
                return [""]
            }
            if (!options.multiple) {
                return [$.trim(value)]
            }
            return $.map(value.split(options.multipleSeparator), function (word) {
                return $.trim(value).length ? $.trim(word) : null
            })
        }
        function lastWord(value) {
            if (!options.multiple) {
                return value
            }
            var words = trimWords(value);
            if (words.length == 1) {
                return words[0]
            }
            var cursorAt = $(input).selection().start;
            if (cursorAt == value.length) {
                words = trimWords(value)
            } else {
                words = trimWords(value.replace(value.substring(cursorAt), ""))
            }
            return words[words.length - 1]
        }
        function autoFill(q, sValue) {
            if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                $(input).selection(previousValue.length, previousValue.length + sValue.length)
            }
        }
        function hideResults() {
            clearTimeout(timeout);
            timeout = setTimeout(hideResultsNow, 200)
        }
        function hideResultsNow() {
            var wasVisible = select.visible();
            select.hide();
            clearTimeout(timeout);
            stopLoading();
            if (options.mustMatch) {
                $input.search(function (result) {
                    if (!result) {
                        if (options.multiple) {
                            var words = trimWords($input.val()).slice(0, -1);
                            $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""))
                        } else {
                            $input.val("");
                            $input.trigger("result", null)
                        }
                    }
                })
            }
        }
        function repositionResults() {
            select.positionResults()
        }
        function receiveData(q, data) {
            if (data && data.length && hasFocus) {
                stopLoading();
                select.display(data, q);
                autoFill(q, data[0].value);
                select.show()
            } else {
                hideResultsNow()
            }
        }
        function request(term, success, failure) {
            if (!options.matchCase) {
                term = term.toLowerCase()
            }
            var data = cache.load(term);
            if (data && data.length) {
                success(term, data)
            } else {
                if ((typeof options.url == "string") && (options.url.length > 0)) {
                    var extraParams = {
                        timestamp: +new Date()
                    };
                    $.each(options.extraParams, function (key, param) {
                        extraParams[key] = typeof param == "function" ? param() : param
                    });
                    $.ajax({
                        mode: "abort",
                        port: "autocomplete" + input.name,
                        dataType: options.dataType,
                        url: options.url,
                        data: $.extend({
                            q: lastWord(term),
                            limit: options.max
                        }, extraParams),
                        success: function (data) {
                            var parsed = options.parse && options.parse(data) || parse(data);
                            cache.add(term, parsed);
                            success(term, parsed)
                        }
                    })
                } else {
                    select.emptyList();
                    failure(term)
                }
            }
        }
        function parse(data) {
            var parsed = [];
            var rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = $.trim(rows[i]);
                if (row) {
                    row = row.split("|");
                    parsed[parsed.length] = {
                        data: row,
                        value: row[0],
                        result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                    }
                }
            }
            return parsed
        }
        function stopLoading() {
            $input.removeClass(options.loadingClass)
        }
    };
    $.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 10,
        max: 100,
        mustMatch: false,
        extraParams: {},
        selectFirst: true,
        formatItem: function (row) {
            return row[0]
        },
        formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: ", ",
        highlight: function (value, term) {
            return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
        },
        scroll: true,
        scrollHeight: 300
    };
    $.Autocompleter.Cache = function (options) {
        var data = {};
        var length = 0;

        function matchSubset(s, sub) {
            if (!options.matchCase) {
                s = s.toLowerCase()
            }
            var i = s.indexOf(sub);
            if (options.matchContains == "word") {
                i = s.toLowerCase().search("\\b" + sub.toLowerCase())
            }
            if (i == -1) {
                return false
            }
            return i == 0 || options.matchContains
        }
        function add(q, value) {
            if (length > options.cacheLength) {
                flush()
            }
            if (!data[q]) {
                length++
            }
            data[q] = value
        }
        function populate() {
            if (!options.data) {
                return false
            }
            var stMatchSets = {},
                nullData = 0;
            if (!options.url) {
                options.cacheLength = 1
            }
            stMatchSets[""] = [];
            for (var i = 0, ol = options.data.length; i < ol; i++) {
                var rawValue = options.data[i];
                rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
                var value = options.formatMatch(rawValue, i + 1, options.data.length);
                if (value === false) {
                    continue
                }
                var firstChar = value.charAt(0).toLowerCase();
                if (!stMatchSets[firstChar]) {
                    stMatchSets[firstChar] = []
                }
                var row = {
                    value: value,
                    data: rawValue,
                    result: options.formatResult && options.formatResult(rawValue) || value
                };
                stMatchSets[firstChar].push(row);
                if (nullData++ < options.max) {
                    stMatchSets[""].push(row)
                }
            }
            $.each(stMatchSets, function (i, value) {
                options.cacheLength++;
                add(i, value)
            })
        }
        setTimeout(populate, 25);

        function flush() {
            data = {};
            length = 0
        }
        return {
            flush: flush,
            add: add,
            populate: populate,
            load: function (q) {
                if (!options.cacheLength || !length) {
                    return null
                }
                if (!options.url && options.matchContains) {
                    var csub = [];
                    for (var k in data) {
                        if (k.length > 0) {
                            var c = data[k];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub.push(x)
                                }
                            })
                        }
                    }
                    return csub
                } else {
                    if (data[q]) {
                        return data[q]
                    } else {
                        if (options.matchSubset) {
                            for (var i = q.length - 1; i >= options.minChars; i--) {
                                var c = data[q.substr(0, i)];
                                if (c) {
                                    var csub = [];
                                    $.each(c, function (i, x) {
                                        if (matchSubset(x.value, q)) {
                                            csub[csub.length] = x
                                        }
                                    });
                                    return csub
                                }
                            }
                        }
                    }
                }
                return null
            }
        }
    };
    $.Autocompleter.Select = function (options, input, select, config) {
        var CLASSES = {
            ACTIVE: "ac_over"
        };
        var listItems, active = -1,
            data, term = "",
            needsInit = true,
            element, list;

        function init() {
            if (!needsInit) {
                return
            }
            element = $("<div/>").hide().addClass(options.resultsClass).css("position", "absolute").appendTo(document.body);
            list = $("<ul/>").appendTo(element).mouseover(function (event) {
                if (target(event).nodeName && target(event).nodeName.toUpperCase() == "LI") {
                    active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                    $(target(event)).addClass(CLASSES.ACTIVE)
                }
            }).click(function (event) {
                $(target(event)).addClass(CLASSES.ACTIVE);
                select();
                input.focus();
                return false
            }).mousedown(function () {
                config.mouseDownOnSelect = true
            }).mouseup(function () {
                config.mouseDownOnSelect = false
            });
            if (options.width > 0) {
                element.css("width", options.width)
            }
            needsInit = false
        }
        function target(event) {
            var element = event.target;
            while (element && element.tagName != "LI") {
                element = element.parentNode
            }
            if (!element) {
                return []
            }
            return element
        }
        function moveSelect(step) {
            listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
            movePosition(step);
            var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
            if (options.scroll) {
                var offset = 0;
                listItems.slice(0, active).each(function () {
                    offset += this.offsetHeight
                });
                if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                    list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight())
                } else {
                    if (offset < list.scrollTop()) {
                        list.scrollTop(offset)
                    }
                }
            }
        }
        function movePosition(step) {
            active += step;
            if (active < 0) {
                active = listItems.size() - 1
            } else {
                if (active >= listItems.size()) {
                    active = 0
                }
            }
        }
        function limitNumberOfItems(available) {
            return options.max && options.max < available ? options.max : available
        }
        function fillList() {
            list.empty();
            var max = limitNumberOfItems(data.length);
            for (var i = 0; i < max; i++) {
                if (!data[i]) {
                    continue
                }
                var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                if (formatted === false) {
                    continue
                }
                var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                $.data(li, "ac_data", data[i])
            }
            listItems = list.find("li");
            if (options.selectFirst) {
                listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                active = 0
            }
            if ($.fn.bgiframe) {
                list.bgiframe()
            }
        }
        return {
            display: function (d, q) {
                init();
                data = d;
                term = q;
                fillList()
            },
            next: function () {
                moveSelect(1)
            },
            prev: function () {
                moveSelect(-1)
            },
            pageUp: function () {
                if (active != 0 && active - 8 < 0) {
                    moveSelect(-active)
                } else {
                    moveSelect(-8)
                }
            },
            pageDown: function () {
                if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                    moveSelect(listItems.size() - 1 - active)
                } else {
                    moveSelect(8)
                }
            },
            hide: function () {
                element && element.hide();
                listItems && listItems.removeClass(CLASSES.ACTIVE);
                active = -1
            },
            visible: function () {
                return element && element.is(":visible")
            },
            current: function () {
                return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0])
            },
            positionResults: function () {
                if (element) {
                    var offset = $(input).offset();
                    element.css({
                        width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                        top: offset.top + input.offsetHeight,
                        left: offset.left - 6
                    });
                    if (options.scroll) {
                        list.scrollTop(0);
                        list.css({
                            maxHeight: options.scrollHeight,
                            overflow: "auto"
                        });
                        if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                            var listHeight = 0;
                            listItems.each(function () {
                                listHeight += this.offsetHeight
                            });
                            var scrollbarsVisible = listHeight > options.scrollHeight;
                            list.css("height", scrollbarsVisible ? options.scrollHeight : listHeight);
                            if (!scrollbarsVisible) {
                                listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")))
                            }
                        }
                    }
                }
            },
            show: function () {
                var offset = $(input).offset();
                element.css({
                    width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                    top: offset.top + input.offsetHeight,
                    left: offset.left - 6
                }).show();
                if (options.scroll) {
                    list.scrollTop(0);
                    list.css({
                        maxHeight: options.scrollHeight,
                        overflow: "auto"
                    });
                    if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                        var listHeight = 0;
                        listItems.each(function () {
                            listHeight += this.offsetHeight
                        });
                        var scrollbarsVisible = listHeight > options.scrollHeight;
                        list.css("height", scrollbarsVisible ? options.scrollHeight : listHeight);
                        if (!scrollbarsVisible) {
                            listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")))
                        }
                    }
                }
            },
            selected: function () {
                var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                return selected && selected.length && $.data(selected[0], "ac_data")
            },
            emptyList: function () {
                list && list.empty()
            },
            unbind: function () {
                element && element.remove()
            }
        }
    };
    $.fn.selection = function (start, end) {
        if (start !== undefined) {
            return this.each(function () {
                if (this.createTextRange) {
                    var selRange = this.createTextRange();
                    if (end === undefined || start == end) {
                        selRange.move("character", start);
                        selRange.select()
                    } else {
                        selRange.collapse(true);
                        selRange.moveStart("character", start);
                        selRange.moveEnd("character", end);
                        selRange.select()
                    }
                } else {
                    if (this.setSelectionRange) {
                        this.setSelectionRange(start, end)
                    } else {
                        if (this.selectionStart) {
                            this.selectionStart = start;
                            this.selectionEnd = end
                        }
                    }
                }
            })
        }
        var field = this[0];
        if (field.createTextRange) {
            var range = document.selection.createRange(),
                orig = field.value,
                teststring = "<->",
                textLength = range.text.length;
            range.text = teststring;
            var caretAt = field.value.indexOf(teststring);
            field.value = orig;
            this.selection(caretAt, caretAt + textLength);
            return {
                start: caretAt,
                end: caretAt + textLength
            }
        } else {
            if (field.selectionStart !== undefined) {
                return {
                    start: field.selectionStart,
                    end: field.selectionEnd
                }
            }
        }
    }
})(jQuery);
if (typeof IGN === "undefined" || !IGN) {
    var IGN = {}
}
$j = jQuery;
IGN.GlobalNav = function () {
    var MENU_HIDE_DELAY = 300;
    var timeOutId = "";
    var remove = function (el) {
        var el = $j(el);
        el.removeClass("selected");
        el.find(".left-corner").removeClass("left-corner-selected");
        el.find(".right-corner").removeClass("right-corner-selected");
        el.find(".dark").removeClass("no-bg");
        el.find(".light").removeClass("no-bg");
        $j("#first").addClass("first");
        el.find(".curve").removeClass("curve-selected")
    };
    var select = function (el) {
        var el = $j(el);
        el.addClass("selected");
        el.find(".dark").addClass("no-bg");
        el.find(".light").addClass("no-bg");
        el.find(".left-corner").addClass("left-corner-selected");
        el.removeClass("first");
        el.find(".right-corner").addClass("right-corner-selected");
        el.find(".curve").addClass("curve-selected");
        el.find(".sub-bullets ul li:first").css("list-style-type", "none");
        el.find(".sub-bullets ul li:last").css("list-style-type", "none");
        el.find(".sub-bullets ul li.all").css("margin-top", "5px")
    };
    return {
        init: function () {
            $j(".nav-item.sub-nav.hub-nav").hover(function () {
                clearTimeout(timeOutId);
                $j("#nav-global > .sub-nav").each(function () {
                    if ($j(this).hasClass("selected")) {
                        remove(this)
                    }
                });
                select(this)
            }, function () {
                var that = this;
                timeOutId = setTimeout(function () {
                    remove(that)
                }, MENU_HIDE_DELAY)
            })
        }
    }
}();
IGN.Search = function () {
    var SELECTED = "selected",
        WEB = "http://search.ign.com/web?query=",
        IGN = "http://search.ign.com/product?query=";
    var $i = $j,
        form;
    var globalSearch = function (e) {
        e.preventDefault();
        form = $j(form);
        var qry, redir = "",
            qry = $j("#search-global").val();
        selectedValue = $j("#search-domain").val();
        if (qry === "") {
            alert("Please type in your search query.");
            return false
        }
        if (selectedValue === "web") {
            redir = WEB + urlEncode(qry)
        } else {
            if (selectedValue === "ign") {
                redir = IGN + urlEncode(qry)
            } else {
                redir = IGN + urlEncode(qry)
            }
        }
        if (redir !== "") {
            document.location = redir
        }
    };
    var setSelectedIndex = function (value) {};
    return {
        init: function (formId) {
            form = formId;
            $i("#" + formId).submit(globalSearch);
            $i("#search-type").click(function (e) {
                var t = $i(e.target);
                if (t.hasClass("label")) {
                    t = t.parent();
                    if (t.hasClass(SELECTED)) {
                        t.removeClass(SELECTED)
                    } else {
                        t.addClass(SELECTED)
                    }
                } else {
                    if (t.hasClass("input")) {
                        var p = t.parent().parent();
                        selectedLabel = t.html().replace(/^\s+|\s+$/g, "");
                        $j(".label", p).html(selectedLabel);
                        selectedLabel = selectedLabel.toLowerCase();
                        $j("#search-domain").val(selectedLabel);
                        p.removeClass("selected")
                    }
                }
            })
        }
    }
}();
IGN.LoginBox = function () {
    var SELECTED = "selected";
    var URL_DEFAULT_AVATAR = "http://media.ignimgs.com/boards/img/default/icon_default_80.jpg";
    var modifyLoginLinks = function () {
        var username = getUserName();
        grabUserAvatar(username);
        $j("#username").text(username);
        $j("#lnk-logout").attr("href", "http://my.ign.com/my/sb?paction=logout&network=1&cb=" + random);
        $j("#masthead-logout").hide();
        $j("#masthead-login").show();
        $j("#account-tools-prof").attr("href", "http://club.ign.com/b/about?username-" + username);
        $j("#account-tools-alerts").attr("href", "http://club.ign.com/b/list/custom?owner=" + username + "&mode=edit&lid=100063");
        $j("#account-tools-wish").attr("href", "http://club.ign.com/b/list/custom?owner=" + username + "&mode=edit&lid=0");
        $j("#account-tools-coll").attr("href", "http://club.ign.com/b/list/custom?owner=" + username + "&mode=edit&lid=1");
        $j("#account-tools-blog").attr("href", "http://blogs.ign.com/" + username + "/");
        $j.getScript('http://boards.ign.com/PrivateMessages/NewPMCount.aspx?caption=New&zero=false&rand=0">', function () {
            if ($j("#newPmCountLayer").text() != "") {
                $j("#boards-pm").show()
            }
        })
    };
    var modifyLogoutLinks = function () {
        var loc = "" + window.location;
        $j("#lnk-logout-avatar").attr("href", "http://my.ign.com/my/sb?paction=relogin&params=" + urlEncode("#action#protect#location#" + urlEncode(loc)));
        $j("#lnk-login").attr("href", "http://my.ign.com/my/sb?paction=relogin&params=" + urlEncode("#action#protect#location#" + urlEncode(loc)));
        $j("#lnk-reg").attr("href", "http://my.ign.com/my/sb?regAction=reg&params=" + urlEncode("#action#protect#location#" + urlEncode(loc)));
        $j("#masthead-login").hide();
        $j("#masthead-logout").show()
    };
    var grabUserAvatar = function (username) {
        if (username) {
            var url = "http://boards.ign.com/ServicesV31/UserServices.asmx/JSON_GetUserIcon?username=" + username;
            $j.getJSON(url + "&callback=?", function (imgSrc) {
                if (typeof(imgSrc) != "undefined") {
                    $j("#user-avatar").attr("src", imgSrc)
                }
            })
        }
    };
    var modifyLinks = function () {
        if (checkRegistration()) {
            modifyLoginLinks()
        } else {
            modifyLogoutLinks()
        }
    };
    return {
        init: function (id) {
            $j(".container-sub-nav", $j("#" + id)).hover(function (e) {
                $j(this).addClass(SELECTED)
            }, function (e) {
                $j(this).removeClass(SELECTED)
            });
            modifyLinks()
        }
    }
}();
$j(document).ready(function () {
    IGN.LoginBox.init("masthead-login");
    IGN.GlobalNav.init();
    IGN.Search.init("masthead-search")
});
jQuery(document).ready(function () {
    jQuery("#search-global").autocomplete("http://search-api.ign.com/solr/ign.media.object/select/?wt=json&json.wrf=?", {
        dataType: "jsonp",
        selectFirst: false,
        width: 252,
        extraParams: {
            rows: 5,
            df: "title"
        },
        minChars: 1,
        parse: function (data) {
            var blah = jQuery.map(data.response.docs, function (document) {
                var plat;
                if (typeof document.platformName != "undefined") {
                    if (document.platformName[0] != "") {
                        plat = document.platformName[0]
                    } else {
                        plat = " "
                    }
                } else {
                    plat = " "
                }
                var pub;
                if (typeof document.publisher != "undefined") {
                    if (document.publisher[0] != "") {
                        pub = "by " + document.publisher[0]
                    } else {
                        pub = " "
                    }
                } else {
                    pub = " "
                }
                var obj;
                if (typeof document.objectType != "undefined") {
                    if (document.objectType[0] != "") {
                        obj = document.objectType[0]
                    } else {
                        obj = " "
                    }
                } else {
                    obj = " "
                }
                var objurl;
                if (typeof document.url != "undefined") {
                    if (document.url[0] != "") {
                        var objurl = document.url[0]
                    } else {
                        objurl = " "
                    }
                } else {
                    objurl = " "
                }
                var queryItem = {
                    title: document.title[0],
                    platform: plat,
                    publisher: pub,
                    object: obj,
                    url: objurl
                };
                return {
                    data: queryItem,
                    value: "yo",
                    result: document.title[0]
                }
            });
            return blah
        },
        formatItem: function (doc) {
            if (doc.object == "Game") {
                return "<div class='ac_itemTitle'>" + doc.title + "</div><div class='ac_itemInfo'>" + doc.platform + " " + doc.object + " " + doc.publisher + "</div>"
            } else {
                if (doc.object == "DVD" || doc.object == "TV") {
                    return "<div class='ac_itemTitle'>" + doc.title + "</div><div class='ac_itemInfo'>" + doc.platform + " " + doc.publisher + "</div>"
                } else {
                    return "<div class='ac_itemTitle'>" + doc.title + "</div><div class='ac_itemInfo'>" + doc.object + " " + doc.platform + " " + doc.publisher + "</div>"
                }
            }
        }
    }).result(function (event, doc) {
        location.href = doc.url
    })
});
