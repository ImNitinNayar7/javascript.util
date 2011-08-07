/*
  javascript.util is a port of selected parts of java.util to JavaScript which
  main purpose is to ease porting Java code to JavaScript.

  Copyright (C) 2011 by Björn Harrtell

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
(function() {var b=null;function d(){return function(){}}function e(a,c){var r=a.split("."),l=window;!(r[0]in l)&&l.execScript&&l.execScript("var "+r[0]);for(var s;r.length&&(s=r.shift());)!r.length&&c!==void 0?l[s]=c:l=l[s]?l[s]:l[s]={}}e("javascript.util.version","0.2.0");function f(a){this.message=a||""}e("javascript.util.OperationNotSupported",f);f.prototype=Error();f.prototype.name="OperationNotSupported";f.prototype.name=f.prototype.name;function g(a){this.message=a||""}
e("javascript.util.IndexOutOfBoundsException",g);g.prototype=Error();g.prototype.name="IndexOutOfBoundsException";g.prototype.name=g.prototype.name;function h(a){this.message=a||""}e("javascript.util.NoSuchElementException",h);h.prototype=Error();h.prototype.name="NoSuchElementException";h.prototype.name=h.prototype.name;e("javascript.util.SortedMap",d());function i(){}e("javascript.util.Map",i);i.prototype.get=d();i.prototype.get=i.prototype.get;i.prototype.put=d();i.prototype.put=i.prototype.put;
i.prototype.size=d();i.prototype.size=i.prototype.size;i.prototype.a=d();i.prototype.values=i.prototype.a;function j(){}e("javascript.util.Iterator",j);j.prototype.d=d();j.prototype.hasNext=j.prototype.d;j.prototype.next=d();j.prototype.next=j.prototype.next;j.prototype.remove=d();j.prototype.remove=j.prototype.remove;function k(){}e("javascript.util.Collection",k);k.prototype.add=d();k.prototype.add=k.prototype.add;k.prototype.e=d();k.prototype.isEmpty=k.prototype.e;k.prototype.f=d();
k.prototype.iterator=k.prototype.f;k.prototype.size=d();k.prototype.size=k.prototype.size;function m(){}e("javascript.util.List",m);m.prototype=new k;m.prototype.get=d();m.prototype.get=m.prototype.get;function n(){this.b=[]}e("javascript.util.ArrayList",n);n.prototype=new m;n.prototype.b=b;n.prototype.add=function(a){this.b.push(a);return!0};n.prototype.add=n.prototype.add;n.prototype.f=function(){return new o(this)};n.prototype.iterator=n.prototype.f;
n.prototype.get=function(a){if(a<0||a>=this.size())throw new g;return this.b[a]};n.prototype.get=n.prototype.get;n.prototype.e=function(){return this.b.length===0};n.prototype.isEmpty=n.prototype.e;n.prototype.size=function(){return this.b.length};n.prototype.size=n.prototype.size;function o(a){this.c=a}n.Iterator=o;o.prototype.c=b;o.prototype.position=0;o.prototype.next=function(){if(this.position===this.c.size())throw new h;return this.c.get(this.position++)};o.prototype.next=o.prototype.next;
o.prototype.d=function(){return this.position<this.c.size()?!0:!1};o.prototype.hasNext=o.prototype.d;o.prototype.remove=function(){throw new f;};o.prototype.remove=o.prototype.remove;function p(){this.object={}}e("javascript.util.HashMap",p);p.prototype.object=b;p.prototype.get=function(a){return this.object[a]||b};p.prototype.get=p.prototype.get;p.prototype.put=function(a,c){return this.object[a]=c};p.prototype.put=p.prototype.put;
p.prototype.a=function(){var a=new n,c;for(c in this.object)this.object.hasOwnProperty(c)&&a.add(this.object[c]);return a};p.prototype.values=p.prototype.a;p.prototype.size=function(){return this.a().size()};p.prototype.size=p.prototype.size;function q(){this.keys=[];this.object={}}e("javascript.util.TreeMap",q);q.prototype.keys=b;q.prototype.object=b;q.prototype.get=function(a){return this.object[a]||b};q.prototype.get=q.prototype.get;
q.prototype.put=function(a,c){this.keys.push(a);return this.object[a]=c};q.prototype.put=q.prototype.put;q.prototype.a=function(){this.keys.length>0&&(this.keys[0].g instanceof Function?this.keys.sort(function(a,c){return a.g(c)}):this.keys.sort());for(var a=new n,c=0;c<this.keys.length;c++)a.add(this.object[this.keys[c]]);return a};q.prototype.values=q.prototype.a;q.prototype.size=function(){return this.a().size()};q.prototype.size=q.prototype.size;})();
