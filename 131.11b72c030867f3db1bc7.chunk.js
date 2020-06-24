(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{423:function(n,a,s){"use strict";s.r(a),a.default='<p>Adds a banner to the top of each generated chunk.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span>banner<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n\x3c!-- eslint-skip --\x3e\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  banner<span class="token punctuation">:</span> string <span class="token operator">|</span> <span class="token keyword">function</span><span class="token punctuation">,</span> <span class="token comment">// the banner as string or function, it will be wrapped in a comment</span>\n  raw<span class="token punctuation">:</span> boolean<span class="token punctuation">,</span> <span class="token comment">// if true, banner will not be wrapped in a comment</span>\n  entryOnly<span class="token punctuation">:</span> boolean<span class="token punctuation">,</span> <span class="token comment">// if true, the banner will only be added to the entry chunks</span>\n  test<span class="token punctuation">:</span> string <span class="token operator">|</span> RegExp <span class="token operator">|</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> RegExp<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  include<span class="token punctuation">:</span> string <span class="token operator">|</span> RegExp <span class="token operator">|</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> RegExp<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  exclude<span class="token punctuation">:</span> string <span class="token operator">|</span> RegExp <span class="token operator">|</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> RegExp<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> webpack <span class="token keyword">from</span> <span class="token string">\'webpack\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// string</span>\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  banner<span class="token punctuation">:</span> <span class="token string">\'hello world\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// function</span>\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  banner<span class="token punctuation">:</span> <span class="token punctuation">(</span>yourVariable<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`yourVariable: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>yourVariable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="placeholders">Placeholders<a href="#placeholders" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Since webpack 2.5.0, placeholders are evaluated in the <code>banner</code> string:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> webpack <span class="token keyword">from</span> <span class="token string">\'webpack\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  banner<span class="token punctuation">:</span> <span class="token string">\'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);