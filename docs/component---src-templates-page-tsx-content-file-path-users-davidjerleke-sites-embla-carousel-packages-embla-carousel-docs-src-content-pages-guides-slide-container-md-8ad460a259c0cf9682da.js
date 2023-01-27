"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[3315],{3998:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return v}});var a=n(5392),l=n(2784);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",div:"div",pre:"pre",code:"code"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Slide Container"),"\n",l.createElement(t.p,null,"Embla Carousel allows you to use ",l.createElement(t.strong,null,"any CSS to stack your slides")," in the chosen scroll ",l.createElement(t.a,{href:"/api/options/#axis"},"axis"),", whether it's CSS Grid, flexbox, inline-blocks or anything else. This guide will show you ",l.createElement(t.strong,null,"how to setup")," your ",l.createElement(t.strong,null,"slide container")," with flexbox and CSS Grid."),"\n",l.createElement(t.h2,{id:"using-flexbox",style:{position:"relative"}},l.createElement(t.a,{href:"#using-flexbox","aria-label":"using flexbox permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Using Flexbox"),"\n",l.createElement(t.p,null,"With the minimal ",l.createElement(t.a,{href:"/get-started/module/#the-html-structure"},"HTML setup")," in place, we're going use flexbox to style our slide container. First, we need to stack our slides in our chosen scroll direction. This is an example of a container with slides stacked ",l.createElement(t.strong,null,"horizontally"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__container {\n  display: flex;\n}\n")),"\n",l.createElement(t.p,null,"In order to create a ",l.createElement(t.strong,null,"vertical")," carousel, we can modify our container by setting the ",l.createElement(t.code,null,"flex-direction")," to ",l.createElement(t.code,null,"column"),". Additionally, a vertical carousel needs a ",l.createElement(t.strong,null,"specified height"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css{3-4}"},".embla__container {\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n}\n")),"\n",l.createElement(t.p,null,"Now we're ready to declare slide sizes using the ",l.createElement(t.code,null,"flex")," property:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__slide {\n  flex: 0 0 80%; /* Slide covers 80% of the viewport */\n}\n")),"\n",l.createElement(t.h2,{id:"using-css-grid",style:{position:"relative"}},l.createElement(t.a,{href:"#using-css-grid","aria-label":"using css grid permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Using CSS Grid"),"\n",l.createElement(t.p,null,"Creating a CSS Grid container based on the minimal ",l.createElement(t.a,{href:"/get-started/module/#the-html-structure"},"HTML setup")," gives us the power to declare everyting, including slide sizes together with our container styles. Here's an example of a ",l.createElement(t.strong,null,"horizontal")," container setup:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 80%; /* Each slide covers 80% of the viewport */\n}\n")),"\n",l.createElement(t.p,null,"We can easily modify our CSS Grid container to create a ",l.createElement(t.strong,null,"vertical")," carousel by changing our ",l.createElement(t.code,null,"column")," declarations to ",l.createElement(t.code,null,"row"),". Don't forget that a vertical carousel also needs a ",l.createElement(t.strong,null,"specified height"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css{3-5}"},".embla__container {\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: 80%; /* Each slide covers 80% of the viewport */\n  height: 200px;\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(4234),c=n(3785),s=n(8116),m=n(6892),d=n(4453),u=n(3376),g=n(6993),p=n(8944),h=n(9387);const E=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,s.$)(),{title:i,description:m,date:d}=t.mdx.frontmatter,u=(0,l.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return l.createElement(o.p,{title:i,description:m,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,p.P)(a)+'",\n        "description": "'+m+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+i+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+u+'",\n        "dateModified": "'+u+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+c.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:i,id:o}=t;return l.createElement(l.Fragment,null,l.createElement(u.O,{id:o}),l.createElement("article",{id:g.X},l.createElement(h.i,null,n)),l.createElement(m.e,{pageUrl:i}),l.createElement(d.t,{previous:r,next:a}))};function v(e){return l.createElement(f,e,l.createElement(i,e))}},3376:function(e,t,n){n.d(t,{O:function(){return f}});var a=n(2784),l=n(1195),r=n(5668),i=(n(7694),n(4049)),o=n(5211);var c=n(6807),s=n(7042),m=n(727),d=n(127);const u=l.default.nav.withConfig({displayName:"Breadcrumbs__Wrapper",componentId:"sc-1peavte-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,d.v.THREE),g=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),p=(0,l.default)(r.S).withConfig({displayName:"Breadcrumbs__Link",componentId:"sc-1peavte-1"})(["",";"],g),h=l.default.span.withConfig({displayName:"Breadcrumbs__ActiveTitle",componentId:"sc-1peavte-2"})(["",";"],g),E=(0,l.default)(c.J).withConfig({displayName:"Breadcrumbs__Separator",componentId:"sc-1peavte-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,i.D)(e,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:i}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(p,{to:r},i),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},i)})))}},6892:function(e,t,n){n.d(t,{e:function(){return u}});var a=n(2784),l=n(1195),r=n(5668),i=n(7042),o=n(727),c=n(127),s=n(2657),m=n(6722);const d=(0,l.default)(r.S).withConfig({displayName:"EditPage__Wrapper",componentId:"sc-1cx5u1t-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,c.v.ONE,c.v.ONE,c.v.EIGHT,i.DM.TEXT_LOW_CONTRAST),u=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(m.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},4453:function(e,t,n){n.d(t,{t:function(){return E}});var a=n(2784),l=n(1195),r=n(5668),i=n(7697),o=n(7042),c=n(127),s=n(6722);const m=c.v.FOUR,d=l.default.nav.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-gw2f46-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],c.v.EIGHT,m),u=l.default.div.withConfig({displayName:"Pagination__Item",componentId:"sc-gw2f46-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],m,o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),g=l.default.div.withConfig({displayName:"Pagination__ItemLabel",componentId:"sc-gw2f46-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,c.v.ONE),p=l.default.div.withConfig({displayName:"Pagination__ItemTitle",componentId:"sc-gw2f46-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),h=l.default.span.withConfig({displayName:"Pagination__GradientText",componentId:"sc-gw2f46-4"})(["",";"],i.W),E=e=>{const{next:t,previous:n}=e;return a.createElement(d,{"aria-label":"Pagination Navigation"},a.createElement(u,null,n&&a.createElement(r.S,{to:n.slug},a.createElement(g,null,"Previous"),a.createElement(p,null,a.createElement(s.M,{iconSvg:"arrowLeft"},a.createElement(h,null,n.title))))),a.createElement(u,null,t&&a.createElement(r.S,{to:t.slug},a.createElement(g,null,"Next"),a.createElement(p,null,a.createElement(s.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(h,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return i}});var a=n(2784),l=n(8116),r=n(8944);const i=e=>{const{title:t,description:n,lang:i="en",url:o,children:c}=e,s=(0,l.$)(),m=n||s.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:i}),a.createElement("title",null,t," | Embla Carousel"),a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:m}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:o}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(s.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:s.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:m}),c)}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-guides-slide-container-md-8ad460a259c0cf9682da.js.map