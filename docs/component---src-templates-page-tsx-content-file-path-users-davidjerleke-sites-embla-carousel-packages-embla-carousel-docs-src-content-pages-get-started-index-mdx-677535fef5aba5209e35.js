"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[752],{685:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return v}});var a=n(5392),l=n(2784);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",hr:"hr",h2:"h2",div:"div"},(0,a.ah)(),e.components),{PageChildLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PageChildLinks",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Get Started"),"\n",l.createElement(t.p,null,"Embla Carousel is a ",l.createElement(t.strong,null,"library agnostic"),", ",l.createElement(t.strong,null,"dependency free")," and ",l.createElement(t.strong,null,"lightweight")," carousel library. It aims to solve the hardest technical challenges with building carousels, and the rest is up to the user utilizing its highly extensible ",l.createElement(t.a,{href:"/api/"},"API")," and ",l.createElement(t.a,{href:"/plugins/"},"plugins"),". Embla Carousel works in all modern browsers, but you can easily add ",l.createElement(t.strong,null,"IE 11 support")," with the following ",l.createElement(t.a,{href:"/get-started/ie11-support"},"polyfill"),"."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"choose-installation-type",style:{position:"relative"}},l.createElement(t.a,{href:"#choose-installation-type","aria-label":"choose installation type permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Choose installation type"),"\n",l.createElement(t.p,null,"Choose how you would like to install Embla Carousel:"),"\n",l.createElement(n))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var o=n(4234),c=n(3785),m=n(8116),s=n(6892),d=n(4453),u=n(3376),p=n(6993),g=n(8944),E=n(9387);const h=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,m.$)(),{title:i,description:s,date:d}=t.mdx.frontmatter,u=(0,l.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return l.createElement(o.p,{title:i,description:s,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,g.P)(a)+'",\n        "description": "'+s+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+i+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+u+'",\n        "dateModified": "'+u+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+c.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:i,id:o}=t;return l.createElement(l.Fragment,null,l.createElement(u.O,{id:o}),l.createElement("article",{id:p.X},l.createElement(E.i,null,n)),l.createElement(s.e,{pageUrl:i}),l.createElement(d.t,{previous:r,next:a}))};function v(e){return l.createElement(f,e,l.createElement(i,e))}},3376:function(e,t,n){n.d(t,{O:function(){return f}});var a=n(2784),l=n(1195),r=n(5668),i=(n(7694),n(4049)),o=n(5211);var c=n(6807),m=n(7042),s=n(727),d=n(127);const u=l.default.nav.withConfig({displayName:"Breadcrumbs__Wrapper",componentId:"sc-1peavte-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.u.COMPLEMENTARY,d.v.THREE),p=(0,l.css)(["color:",";padding:"," 0;"],m.DM.TEXT_LOW_CONTRAST,d.v.ONE),g=(0,l.default)(r.S).withConfig({displayName:"Breadcrumbs__Link",componentId:"sc-1peavte-1"})(["",";"],p),E=l.default.span.withConfig({displayName:"Breadcrumbs__ActiveTitle",componentId:"sc-1peavte-2"})(["",";"],p),h=(0,l.default)(c.J).withConfig({displayName:"Breadcrumbs__Separator",componentId:"sc-1peavte-3"})(["color:",";margin:0 ",";"],m.DM.TEXT_LOW_CONTRAST,d.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,i.D)(e,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:i}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:r},i),a.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(E,{key:l},i)})))}},6892:function(e,t,n){n.d(t,{e:function(){return u}});var a=n(2784),l=n(1195),r=n(5668),i=n(7042),o=n(727),c=n(127),m=n(2657),s=n(6722);const d=(0,l.default)(r.S).withConfig({displayName:"EditPage__Wrapper",componentId:"sc-1cx5u1t-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,c.v.ONE,c.v.ONE,c.v.EIGHT,i.DM.TEXT_LOW_CONTRAST),u=e=>{const{pageUrl:t}=e,n=m.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(s.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},4453:function(e,t,n){n.d(t,{t:function(){return h}});var a=n(2784),l=n(1195),r=n(5668),i=n(7697),o=n(7042),c=n(127),m=n(6722);const s=c.v.FOUR,d=l.default.nav.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-gw2f46-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],c.v.EIGHT,s),u=l.default.div.withConfig({displayName:"Pagination__Item",componentId:"sc-gw2f46-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],s,o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),p=l.default.div.withConfig({displayName:"Pagination__ItemLabel",componentId:"sc-gw2f46-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,c.v.ONE),g=l.default.div.withConfig({displayName:"Pagination__ItemTitle",componentId:"sc-gw2f46-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),E=l.default.span.withConfig({displayName:"Pagination__GradientText",componentId:"sc-gw2f46-4"})(["",";"],i.W),h=e=>{const{next:t,previous:n}=e;return a.createElement(d,{"aria-label":"Pagination Navigation"},a.createElement(u,null,n&&a.createElement(r.S,{to:n.slug},a.createElement(p,null,"Previous"),a.createElement(g,null,a.createElement(m.M,{iconSvg:"arrowLeft"},a.createElement(E,null,n.title))))),a.createElement(u,null,t&&a.createElement(r.S,{to:t.slug},a.createElement(p,null,"Next"),a.createElement(g,null,a.createElement(m.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(E,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return i}});var a=n(2784),l=n(8116),r=n(8944);const i=e=>{const{title:t,description:n,lang:i="en",url:o,children:c}=e,m=(0,l.$)(),s=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:i}),a.createElement("title",null,t," | Embla Carousel"),a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:s}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:o}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:s}),c)}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-get-started-index-mdx-677535fef5aba5209e35.js.map