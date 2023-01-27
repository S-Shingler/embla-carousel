"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[7009],{752:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return f}});var a=n(5392),l=n(2784);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",h2:"h2",a:"a",div:"div"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Svelte"),"\n",l.createElement(t.p,null,"Start by installing the Embla Carousel ",l.createElement(t.strong,null,"npm package")," and add it to your dependencies."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-svelte --save\n")),"\n",l.createElement(t.p,null,"Embla Carousel provides the handy ",l.createElement(t.code,null,"emblaCarouselSvelte")," action for seamless integration with Svelte. A minimal setup requires an ",l.createElement(t.strong,null,"overflow wrapper")," and a ",l.createElement(t.strong,null,"scroll container"),". Start by adding the following structure to your carousel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script>\n  import emblaCarouselSvelte from \'embla-carousel-svelte\'\n<\/script>\n\n<div class="embla" use:emblaCarouselSvelte>\n  <div class="embla__container">\n    <div class="embla__slide">Slide 1</div>\n    <div class="embla__slide">Slide 2</div>\n    <div class="embla__slide">Slide 3</div>\n  </div>\n</div>\n')),"\n",l.createElement(t.h2,{id:"styling-the-carousel",style:{position:"relative"}},l.createElement(t.a,{href:"#styling-the-carousel","aria-label":"styling the carousel permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Styling the carousel"),"\n",l.createElement(t.p,null,"The element with the classname ",l.createElement(t.code,null,"embla")," is needed to cover the scroll overflow. Its child element with the ",l.createElement(t.code,null,"container")," classname is the scroll body that scrolls the slides. Continue by adding the following ",l.createElement(t.strong,null,"CSS")," to these elements:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},"<style>\n  .embla {\n    overflow: hidden;\n  }\n  .embla__container {\n    display: flex;\n  }\n  .embla__slide {\n    flex: 0 0 100%;\n    min-width: 0;\n  }\n</style>\n")),"\n",l.createElement(t.h2,{id:"accessing-the-carousel-api",style:{position:"relative"}},l.createElement(t.a,{href:"#accessing-the-carousel-api","aria-label":"accessing the carousel api permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Accessing the carousel API"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselSvelte")," action takes the Embla Carousel ",l.createElement(t.a,{href:"/api/options/"},"options")," as part of its parameter. Additionally, you can access the ",l.createElement(t.a,{href:"/api/"},"API")," by using the ",l.createElement(t.code,null,"init")," event to store the carousel instance in a variable:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{6-8,10-13,16}"},'<script>\n  import emblaCarouselSvelte from \'embla-carousel-svelte\'\n\n  let emblaApi\n\n  const emblaConfig = {\n    options: { loop: false },\n  }\n\n  const onInit = (event) => {\n    emblaApi = event.detail\n    // Embla API is ready\n  }\n<\/script>\n\n<div class="embla" use:emblaCarouselSvelte={emblaConfig} on:init={onInit}>\n  <div class="embla__container">\n    <div class="embla__slide">Slide 1</div>\n    <div class="embla__slide">Slide 2</div>\n    <div class="embla__slide">Slide 3</div>\n  </div>\n</div>\n')),"\n",l.createElement(t.h2,{id:"adding-plugins",style:{position:"relative"}},l.createElement(t.a,{href:"#adding-plugins","aria-label":"adding plugins permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding plugins"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselSvelte")," action parameter also accepts ",l.createElement(t.a,{href:"/plugins/"},"plugins"),". Note that plugins need to be passed in an array like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html{3,7}"},'<script>\n  import emblaCarouselSvelte from \'embla-carousel-svelte\'\n  import Autoplay from \'embla-carousel-autoplay\'\n\n  const emblaConfig = {\n    options: { loop: false },\n    plugins: [Autoplay()],\n  }\n<\/script>\n\n<div class="embla" use:emblaCarouselSvelte={emblaConfig}>\n  <div class="embla__container">\n    <div class="embla__slide">Slide 1</div>\n    <div class="embla__slide">Slide 2</div>\n    <div class="embla__slide">Slide 3</div>\n  </div>\n</div>\n')),"\n",l.createElement(t.p,null,"Congratulations! You just created your first Embla Carousel component."))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},c=n(4234),o=n(3785),s=n(8116),m=n(6892),d=n(4453),u=n(3376),p=n(6993),g=n(8944),h=n(9387);const v=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:i}=(0,s.$)(),{title:r,description:m,date:d}=t.mdx.frontmatter,u=(0,l.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return l.createElement(c.p,{title:r,description:m,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,g.P)(a)+'",\n        "description": "'+m+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+r+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+u+'",\n        "dateModified": "'+u+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+i+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+i+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+o.Z+'"\n          }\n        }\n      }\n    '))},E=e=>{const{pageContext:t,children:n}=e,{next:a,previous:i,filePath:r,id:c}=t;return l.createElement(l.Fragment,null,l.createElement(u.O,{id:c}),l.createElement("article",{id:p.X},l.createElement(h.i,null,n)),l.createElement(m.e,{pageUrl:r}),l.createElement(d.t,{previous:i,next:a}))};function f(e){return l.createElement(E,e,l.createElement(r,e))}},3376:function(e,t,n){n.d(t,{O:function(){return E}});var a=n(2784),l=n(1195),i=n(5668),r=(n(7694),n(4049)),c=n(5211);var o=n(6807),s=n(7042),m=n(727),d=n(127);const u=l.default.nav.withConfig({displayName:"Breadcrumbs__Wrapper",componentId:"sc-1peavte-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,d.v.THREE),p=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),g=(0,l.default)(i.S).withConfig({displayName:"Breadcrumbs__Link",componentId:"sc-1peavte-1"})(["",";"],p),h=l.default.span.withConfig({displayName:"Breadcrumbs__ActiveTitle",componentId:"sc-1peavte-2"})(["",";"],p),v=(0,l.default)(o.J).withConfig({displayName:"Breadcrumbs__Separator",componentId:"sc-1peavte-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,d.v.ONE),E=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,c.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,r.D)(e,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:i,title:r}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:i},r),a.createElement(v,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},r)})))}},6892:function(e,t,n){n.d(t,{e:function(){return u}});var a=n(2784),l=n(1195),i=n(5668),r=n(7042),c=n(727),o=n(127),s=n(2657),m=n(6722);const d=(0,l.default)(i.S).withConfig({displayName:"EditPage__Wrapper",componentId:"sc-1cx5u1t-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.u.COMPLEMENTARY,o.v.ONE,o.v.ONE,o.v.EIGHT,r.DM.TEXT_LOW_CONTRAST),u=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(m.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},4453:function(e,t,n){n.d(t,{t:function(){return v}});var a=n(2784),l=n(1195),i=n(5668),r=n(7697),c=n(7042),o=n(127),s=n(6722);const m=o.v.FOUR,d=l.default.nav.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-gw2f46-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],o.v.EIGHT,m),u=l.default.div.withConfig({displayName:"Pagination__Item",componentId:"sc-gw2f46-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],m,c.DM.BRAND_PRIMARY,c.DM.BRAND_SECONDARY),p=l.default.div.withConfig({displayName:"Pagination__ItemLabel",componentId:"sc-gw2f46-2"})(["color:",";padding-bottom:",";"],c.DM.TEXT_LOW_CONTRAST,o.v.ONE),g=l.default.div.withConfig({displayName:"Pagination__ItemTitle",componentId:"sc-gw2f46-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),h=l.default.span.withConfig({displayName:"Pagination__GradientText",componentId:"sc-gw2f46-4"})(["",";"],r.W),v=e=>{const{next:t,previous:n}=e;return a.createElement(d,{"aria-label":"Pagination Navigation"},a.createElement(u,null,n&&a.createElement(i.S,{to:n.slug},a.createElement(p,null,"Previous"),a.createElement(g,null,a.createElement(s.M,{iconSvg:"arrowLeft"},a.createElement(h,null,n.title))))),a.createElement(u,null,t&&a.createElement(i.S,{to:t.slug},a.createElement(p,null,"Next"),a.createElement(g,null,a.createElement(s.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(h,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return r}});var a=n(2784),l=n(8116),i=n(8944);const r=e=>{const{title:t,description:n,lang:r="en",url:c,children:o}=e,s=(0,l.$)(),m=n||s.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:r}),a.createElement("title",null,t," | Embla Carousel"),a.createElement("link",{rel:"canonical",href:c}),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:m}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:c}),a.createElement("meta",{name:"og:site_name",content:(0,i.P)(s.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:s.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:m}),o)}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-get-started-svelte-md-a58edcea48b292400d8e.js.map