"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9446],{3009:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return w}});var a=n(5392),l=n(2784),r=n(1316),c=n(6854),o=n(4234);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",a:"a",div:"div",pre:"pre",code:"code",h3:"h3",br:"br"},(0,a.ah)(),e.components),{RepositoryLink:n,BrandPrimaryText:i,BrandSecondaryText:s,Admonition:u}=t;return u||m("Admonition",!0),i||m("BrandPrimaryText",!0),s||m("BrandSecondaryText",!0),n||m("RepositoryLink",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Class Names"),"\n",l.createElement(n,{to:"https://github.com/davidjerleke/embla-carousel/tree/master/packages/embla-carousel-class-names"},l.createElement(t.p,null,"View plugin on GitHub")),"\n",l.createElement(t.p,null,"Class Names is a ",l.createElement(t.strong,null,"class name toggle")," utility plugin for Embla Carousel that enables you to automate the toggling of class names on your carousel."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"installation",style:{position:"relative"}},l.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",l.createElement(t.p,null,"First you need to install the ",l.createElement(t.strong,null,"npm package")," and save it to your dependencies:"),"\n",l.createElement(r.m,{groupId:o.JP.GROUP_ID},l.createElement(c.L,{tab:o.JP.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-class-names --save\n"))),l.createElement(c.L,{tab:o.JP.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-class-names\n")))),"\n",l.createElement(t.p,null,"Alternatively, you can use a ",l.createElement(t.strong,null,"CDN")," to include it in your project:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-class-names/embla-carousel-class-names.umd.js"><\/script>\n')),"\n",l.createElement(t.h2,{id:"usage",style:{position:"relative"}},l.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",l.createElement(t.p,null,"This plugin accepts a single ",l.createElement(t.strong,null,"optional")," parameter, which is its ",l.createElement(t.a,{href:"/plugins/class-names/#options"},"options")," object that allows you to configure it."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport ClassNames from 'embla-carousel-class-names'\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [ClassNames()]) // Add plugin\n")),"\n",l.createElement(t.h2,{id:"options",style:{position:"relative"}},l.createElement(t.a,{href:"#options","aria-label":"options permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Options"),"\n",l.createElement(t.p,null,"The Class Name plugin accepts an optional ",l.createElement(t.strong,null,"options")," object as the first argument. Here's an example of how to make use of it:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport ClassNames from 'embla-carousel-class-names'\n\nconst classNamesOptions = { selected: 'my-selected-class' }\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [\n  ClassNames(classNamesOptions) // Add plugin with options\n])\n")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"snapped",style:{position:"relative"}},l.createElement(t.a,{href:"#snapped","aria-label":"snapped permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"snapped"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(i,null,l.createElement(t.code,null,"string")),l.createElement(t.br),"\n","Default: ",l.createElement(s,null,l.createElement(t.code,null,"is-snapped"))),"\n",l.createElement(t.p,null,"Choose a classname that will be applied to the snapped slides. Pass an empty string to opt-out."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"inview",style:{position:"relative"}},l.createElement(t.a,{href:"#inview","aria-label":"inview permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"inView"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(i,null,l.createElement(t.code,null,"string")),l.createElement(t.br),"\n","Default: ",l.createElement(s,null,l.createElement(t.code,null,"is-in-view"))),"\n",l.createElement(t.p,null,"Choose a classname that will be applied to slides in view. Pass an empty string to opt-out."),"\n",l.createElement(u,{type:"note"},l.createElement(t.p,null,"This feature will honor the ",l.createElement(t.a,{href:"/api/options/#inviewthreshold"},"inViewThreshold"),"\noption.")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"draggable",style:{position:"relative"}},l.createElement(t.a,{href:"#draggable","aria-label":"draggable permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"draggable"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(i,null,l.createElement(t.code,null,"string")),l.createElement(t.br),"\n","Default: ",l.createElement(s,null,l.createElement(t.code,null,"is-draggable"))),"\n",l.createElement(t.p,null,"Choose a classname that will be applied to a draggable carousel container. Pass an empty string to opt-out."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"dragging",style:{position:"relative"}},l.createElement(t.a,{href:"#dragging","aria-label":"dragging permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"dragging"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(i,null,l.createElement(t.code,null,"string")),l.createElement(t.br),"\n","Default: ",l.createElement(s,null,l.createElement(t.code,null,"is-dragging"))),"\n",l.createElement(t.p,null,"Choose a classname that will be applied to the container when dragging. Pass an empty string to opt-out."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(4810),d=n(3785),p=n(8116),g=n(3559),h=n(7377),E=n(286),v=n(1429),f=n(8944),b=n(8147);const y=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,p.$)(),{title:c="",description:o,date:i}=t.mdx.frontmatter,s=(0,l.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return l.createElement(u.p,{title:c,description:o,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,f.P)(a)+'",\n        "description": "'+o+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+c+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+s+'",\n        "dateModified": "'+s+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+d.Z+'"\n          }\n        }\n      }\n    '))},C=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:c,id:o}=t;return l.createElement(l.Fragment,null,l.createElement(E.V,{id:o}),l.createElement("article",{id:v.O},l.createElement(b.i,null,n)),l.createElement(g.l,{pageUrl:c}),l.createElement(h.R,{previous:r,next:a}))};function w(e){return l.createElement(C,e,l.createElement(s,e))}},286:function(e,t,n){n.d(t,{V:function(){return v}});var a=n(2784),l=n(1195),r=n(9900),c=(n(7694),n(4049)),o=n(5211);var i=n(6807),s=n(3792),m=n(727),u=n(127);const d=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,u.v.THREE),p=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),g=(0,l.default)(r.t).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],p),h=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],p),E=(0,l.default)(i.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),v=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,c.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(d,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:c}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:r},c),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},c)})))}},3559:function(e,t,n){n.d(t,{l:function(){return d}});var a=n(2784),l=n(1195),r=n(9900),c=n(3792),o=n(727),i=n(127),s=n(2657),m=n(6722);const u=(0,l.default)(r.t).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,c.DM.TEXT_LOW_CONTRAST),d=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(u,{to:n},a.createElement(m.M5,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return v}});var a=n(2784),l=n(1195),r=n(9900),c=n(4097),o=n(3792),i=n(127),s=n(727),m=n(6722),u=n(6991);const d=i.v.FOUR,p=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.h)(d,"","div"),i.v.EIGHT),g=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),h=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,i.v.ONE),E=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],s.X.MEDIUM,m.EG,c.V),v=e=>{const{next:t,previous:n}=e;return a.createElement(p,{"aria-label":"Pagination Navigation"},a.createElement(g,null,n&&a.createElement(r.t,{to:n.slug},a.createElement(h,null,"Previous"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowLeft"},n.title)))),a.createElement(g,null,t&&a.createElement(r.t,{to:t.slug},a.createElement(h,null,"Next"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},4810:function(e,t,n){n.d(t,{p:function(){return o}});var a=n(2784),l=n(8116),r=n(8944),c=n(3471);const o=e=>{const{title:t,description:n,lang:o="en",url:i,children:s}=e,m=(0,l.$)(),u=t+" | "+(0,c.g)(m.title),d=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:o}),a.createElement("title",null,u),a.createElement("link",{rel:"canonical",href:i}),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:d}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:i}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:d}),s)}},3471:function(e,t,n){n.d(t,{g:function(){return a}});const a=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-plugins-class-names-mdx-3c5b02e58b2c5ada011e.js.map