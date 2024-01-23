"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[4459],{7666:function(e,t,n){n.r(t),n.d(t,{Head:function(){return S},default:function(){return w}});var l=n(5392),a=n(2784),r=n(1316),c=n(6854),o=n(4234);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",a:"a",div:"div",h3:"h3",pre:"pre",code:"code"},(0,l.ah)(),e.components),{Admonition:n,BrandPrimaryText:i}=t;return n||m("Admonition",!0),i||m("BrandPrimaryText",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Events"),"\n",a.createElement(t.p,null,"Embla Carousel exposes ",a.createElement(t.strong,null,"custom events")," that can be hooked on to. Listening to events allows for extending the carousel."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"usage",style:{position:"relative"}},a.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",a.createElement(t.p,null,"You need an ",a.createElement(t.strong,null,"initialized carousel")," in order to ",a.createElement(t.strong,null,"make use of events"),". Events will only be fired during the lifecycle of a carousel and added event listeners will persist even when you hard reset the carousel with the ",a.createElement(t.a,{href:"/api/methods/#reinit"},"reInit")," method."),"\n",a.createElement(t.h3,{id:"adding-event-listeners",style:{position:"relative"}},a.createElement(t.a,{href:"#adding-event-listeners","aria-label":"adding event listeners permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding event listeners"),"\n",a.createElement(t.p,null,"After initializing a carousel, we're going to ",a.createElement(t.strong,null,"subscribe")," to the ",a.createElement(t.a,{href:"/api/events/#select"},"select")," ",a.createElement(t.strong,null,"event")," in the following example:"),"\n",a.createElement(r.m,{groupId:o.c9.GROUP_ID},a.createElement(c.L,{tab:o.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={9}"},"import EmblaCarousel from 'embla-carousel'\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true })\n\nconst onSelect = (emblaApi, eventName) => {\n  console.log(`Embla just triggered ${eventName}!`)\n}\n\nemblaApi.on('select', onSelect)\n"))),a.createElement(c.L,{tab:o.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={12}"},"import { useCallback, useEffect } from 'react'\nimport useEmblaCarousel from 'embla-carousel-react'\n\nexport const EmblaCarousel = () => {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })\n\n  const onSelect = useCallback((emblaApi, eventName) => {\n    console.log(`Embla just triggered ${eventName}!`)\n  }, [])\n\n  useEffect(() => {\n    if (emblaApi) emblaApi.on('select', onSelect)\n  }, [emblaApi, onSelect])\n\n  // ...\n}\n"))),a.createElement(c.L,{tab:o.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={14}"},"<script>\n  import { watchEffect } from 'vue'\n  import emblaCarouselVue from 'embla-carousel-vue'\n\n  export default {\n    setup() {\n      const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true })\n\n      const onSelect = (emblaApi, eventName) => {\n        console.log(`Embla just triggered ${eventName}!`)\n      }\n\n      watchEffect(() => {\n        if (emblaApi.value) emblaApi.value.on('select', onSelect)\n      })\n\n      // ...\n    }\n  }\n<\/script>\n")))),"\n",a.createElement(t.h3,{id:"removing-event-listeners",style:{position:"relative"}},a.createElement(t.a,{href:"#removing-event-listeners","aria-label":"removing event listeners permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Removing event listeners"),"\n",a.createElement(t.p,null,"In order to remove an event listener, you'll have to call the ",a.createElement(t.a,{href:"/api/methods/#off"},"off")," method and make sure to pass the ",a.createElement(t.strong,null,"same callback reference")," you passed to the ",a.createElement(t.a,{href:"/api/methods/#off"},"on")," method:"),"\n",a.createElement(r.m,{groupId:o.c9.GROUP_ID},a.createElement(c.L,{tab:o.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={9-11}"},"import EmblaCarousel from 'embla-carousel'\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true })\n\nconst onSelect = (emblaApi, eventName) => {\n  console.log(`Embla just triggered ${eventName}!`)\n}\n\nconst removeOnSelectListener = () => {\n  emblaApi.off('select', onSelect)\n}\n\nemblaApi.on('select', onSelect)\n"))),a.createElement(c.L,{tab:o.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={11-13}"},"import { useCallback, useEffect } from 'react'\nimport useEmblaCarousel from 'embla-carousel-react'\n\nexport const EmblaCarousel = () => {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })\n\n  const onSelect = useCallback((emblaApi, eventName) => {\n    console.log(`Embla just triggered ${eventName}!`)\n  }, [])\n\n  const removeOnSelectListener = useCallback(() => {\n    if (emblaApi) emblaApi.off('select', onSelect)\n  }, [emblaApi, onSelect])\n\n  useEffect(() => {\n    if (emblaApi) emblaApi.on('select', onSelect)\n  }, [emblaApi, onSelect])\n\n  // ...\n}\n"))),a.createElement(c.L,{tab:o.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={13-15}"},"<script>\n  import { watchEffect } from 'vue'\n  import emblaCarouselVue from 'embla-carousel-vue'\n\n  export default {\n    setup() {\n      const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true })\n\n      const onSelect = (emblaApi, eventName) => {\n        console.log(`Embla just triggered ${eventName}!`)\n      }\n\n      const removeOnSelectListener = () => {\n        if (emblaApi.value) emblaApi.value.off('select', onSelect)\n      }\n\n      watchEffect(() => {\n        if (emblaApi.value) emblaApi.value.on('select', onSelect)\n      })\n\n      // ...\n    }\n  }\n<\/script>\n")))),"\n",a.createElement(t.h3,{id:"typescript",style:{position:"relative"}},a.createElement(t.a,{href:"#typescript","aria-label":"typescript permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"TypeScript"),"\n",a.createElement(t.p,null,"The ",a.createElement(t.code,null,"EmblaEventType")," is obtained directly from the ",a.createElement(t.strong,null,"core package")," ",a.createElement(t.code,null,"embla-carousel")," and used like so:"),"\n",a.createElement(r.m,{groupId:o.c9.GROUP_ID},a.createElement(c.L,{tab:o.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-ts___highlight={3,8}"},"import EmblaCarousel, {\n  EmblaCarouselType,\n  EmblaEventType\n} from 'embla-carousel'\n\nfunction onSlidesInView(\n  emblaApi: EmblaCarouselType,\n  eventName: EmblaEventType\n): void {\n  console.log(`Embla just triggered ${eventName}!`)\n}\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true })\nemblaApi.on('slidesInView', onSlidesInView)\n"))),a.createElement(c.L,{tab:o.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx___highlight={2,9}"},"import React, { useCallback } from 'react'\nimport { EmblaCarouselType, EmblaEventType } from 'embla-carousel'\nimport useEmblaCarousel from 'embla-carousel-react'\n\nexport function EmblaCarousel() {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })\n\n  const onSlidesInView = useCallback(\n    (emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {\n      console.log(`Embla just triggered ${eventName}!`)\n    },\n    []\n  )\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    emblaApi.on('slidesInView', onSlidesInView)\n  }, [onSlidesInView])\n\n  // ...\n}\n")),a.createElement(n,{type:"warning"},a.createElement(t.p,null,"If you're using ",a.createElement(t.code,null,"pnpm"),", you need to install ",a.createElement(t.code,null,"embla-carousel")," as a ",a.createElement(t.strong,null,"devDependency")," when importing types from it like demonstrated above."),a.createElement("br"),a.createElement(t.p,null,"This is because even though ",a.createElement(t.code,null,"embla-carousel-react")," has ",a.createElement(t.code,null,"embla-carousel")," as a dependency, ",a.createElement(t.code,null,"pnpm")," makes nested dependencies inaccessible by design."))),a.createElement(c.L,{tab:o.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={3,10}"},"<script lang=\"ts\">\n  import { watchEffect } from 'vue'\n  import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'\n  import emblaCarouselVue from 'embla-carousel-vue'\n\n  const [emblaNode] = emblaCarouselVue({ loop: true })\n\n  function onSlidesInView(\n    emblaApi: EmblaCarouselType,\n    eventName: EmblaEventType\n  ): void {\n    console.log(`Embla just triggered ${eventName}!`)\n  }\n\n  watchEffect(() => {\n    if (!emblaApi.value) return\n    emblaApi.value.on('slidesInView', onSlidesInView)\n  })\n\n  // ...\n<\/script>\n")),a.createElement(n,{type:"warning"},a.createElement(t.p,null,"If you're using ",a.createElement(t.code,null,"pnpm"),", you need to install ",a.createElement(t.code,null,"embla-carousel")," as a ",a.createElement(t.strong,null,"devDependency")," when importing types from it like demonstrated above."),a.createElement("br"),a.createElement(t.p,null,"This is because even though ",a.createElement(t.code,null,"embla-carousel-vue")," has ",a.createElement(t.code,null,"embla-carousel")," as a dependency, ",a.createElement(t.code,null,"pnpm")," makes nested dependencies inaccessible by design.")))),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"reference",style:{position:"relative"}},a.createElement(t.a,{href:"#reference","aria-label":"reference permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Reference"),"\n",a.createElement(t.p,null,"Below follows an exhaustive ",a.createElement(t.strong,null,"list of all")," Embla Carousel ",a.createElement(t.strong,null,"events")," together with information about how they work."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"init",style:{position:"relative"}},a.createElement(t.a,{href:"#init","aria-label":"init permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"init"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"yes"))),"\n",a.createElement(t.p,null,"Runs when the carousel mounts for the first time. This only fires once which means that it won't fire when the carousel is re-initialized using the ",a.createElement(t.a,{href:"/api/methods/#reinit"},"reInit")," method."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"reinit",style:{position:"relative"}},a.createElement(t.a,{href:"#reinit","aria-label":"reinit permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"reInit"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the ",a.createElement(t.a,{href:"/api/methods/#reinit"},"reInit")," method is called. When the window is resized, Embla Carousel automatically calls the ",a.createElement(t.a,{href:"/api/methods/#reinit"},"reInit")," method which will also fire this event."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"destroy",style:{position:"relative"}},a.createElement(t.a,{href:"#destroy","aria-label":"destroy permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"destroy"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"yes"))),"\n",a.createElement(t.p,null,"Runs when the carousel has been destroyed using the ",a.createElement(t.a,{href:"/api/methods/#destroy"},"destroy")," method. This only fires once and will be the last event the carousel fires."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"select",style:{position:"relative"}},a.createElement(t.a,{href:"#select","aria-label":"select permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"select"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the selected scroll snap changes. The select event is triggered by drag interactions or the ",a.createElement(t.a,{href:"/api/methods/#scrollnext"},"scrollNext"),", ",a.createElement(t.a,{href:"/api/methods/#scrollPrev"},"scrollPrev")," or ",a.createElement(t.a,{href:"/api/methods/#scrollto"},"scrollTo")," methods."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"scroll",style:{position:"relative"}},a.createElement(t.a,{href:"#scroll","aria-label":"scroll permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"scroll"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the carousel is scrolling. It might be a good idea to throttle this if you're doing expensive stuff in your callback function."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"settle",style:{position:"relative"}},a.createElement(t.a,{href:"#settle","aria-label":"settle permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"settle"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the carousel has settled after scroll has been triggered. Please note that this can take longer than you think when ",a.createElement(t.a,{href:"/api/options/#dragfree"},"dragFree")," is enabled or when using slow ",a.createElement(t.a,{href:"/api/options/#duration"},"transitions"),"."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"resize",style:{position:"relative"}},a.createElement(t.a,{href:"#resize","aria-label":"resize permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"resize"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the carousel container or the slide sizes change. It's using ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver")," under the hood."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"slidesinview",style:{position:"relative"}},a.createElement(t.a,{href:"#slidesinview","aria-label":"slidesinview permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"slidesInView"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when any slide has ",a.createElement(t.strong,null,"entered")," or ",a.createElement(t.strong,null,"exited")," the viewport. This event is intended to be used together with the ",a.createElement(t.a,{href:"/api/methods/#slidesinview"},"slidesInView")," and/or ",a.createElement(t.a,{href:"/api/methods/#slidesnotinview"},"slidesNotInView")," methods."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"slideschanged",style:{position:"relative"}},a.createElement(t.a,{href:"#slideschanged","aria-label":"slideschanged permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"slidesChanged"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when slides are added to, or removed from the carousel ",a.createElement(t.a,{href:"/api/options/#container"},"container"),". It's using ",a.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"},"MutationObserver")," under the hood."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"pointerdown",style:{position:"relative"}},a.createElement(t.a,{href:"#pointerdown","aria-label":"pointerdown permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"pointerDown"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the user has a pointer down on the carousel. It's triggered by a ",a.createElement(t.code,null,"touchstart")," or a ",a.createElement(t.code,null,"mousedown")," event."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"pointerup",style:{position:"relative"}},a.createElement(t.a,{href:"#pointerup","aria-label":"pointerup permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"pointerUp"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Runs when the user has released the pointer from the carousel. It's triggered by a ",a.createElement(t.code,null,"touchend")," or a ",a.createElement(t.code,null,"mouseup")," event."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(4810),h=n(3785),d=n(8116),p=n(3559),E=n(7377),g=n(286),v=n(1429),f=n(8944),b=n(8147);const S=e=>{const{data:t,pageContext:n}=e,{siteUrl:l,author:r}=(0,d.$)(),{title:c="",description:o,date:i}=t.mdx.frontmatter,s=(0,a.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return a.createElement(u.p,{title:c,description:o,url:""+l+n.slug},a.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,f.P)(l)+'",\n        "description": "'+o+'",\n        "url": "'+l+n.slug+'",\n        "headline": "'+c+'",\n        "image": "'+l+'/share-image.png",\n        "datePublished": "'+s+'",\n        "dateModified": "'+s+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+l+h.Z+'"\n          }\n        }\n      }\n    '))},y=e=>{const{pageContext:t,children:n}=e,{next:l,previous:r,filePath:c,id:o}=t;return a.createElement(a.Fragment,null,a.createElement(g.V,{id:o}),a.createElement("article",{id:v.O},a.createElement(b.i,null,n)),a.createElement(p.l,{pageUrl:c}),a.createElement(E.R,{previous:r,next:l}))};function w(e){return a.createElement(y,e,a.createElement(s,e))}},286:function(e,t,n){n.d(t,{V:function(){return v}});var l=n(2784),a=n(1195),r=n(9900),c=(n(7694),n(4049)),o=n(5211);var i=n(6807),s=n(3792),m=n(727),u=n(127);const h=a.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,u.v.THREE),d=(0,a.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),p=(0,a.default)(r.t).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],d),E=a.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],d),g=(0,a.default)(i.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),v=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,c.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:l.createElement(h,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:a,slug:r,title:c}=e;return t!==n.length-1?l.createElement(l.Fragment,{key:a},l.createElement(p,{to:r},c),l.createElement(g,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):l.createElement(E,{key:a},c)})))}},3559:function(e,t,n){n.d(t,{l:function(){return h}});var l=n(2784),a=n(1195),r=n(9900),c=n(3792),o=n(727),i=n(127),s=n(2657),m=n(6722);const u=(0,a.default)(r.t).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,c.DM.TEXT_LOW_CONTRAST),h=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return l.createElement(u,{to:n},l.createElement(m.M5,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return v}});var l=n(2784),a=n(1195),r=n(9900),c=n(4097),o=n(3792),i=n(127),s=n(727),m=n(6722),u=n(6991);const h=i.v.FOUR,d=a.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.h)(h,"","div"),i.v.EIGHT),p=a.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),E=a.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,i.v.ONE),g=a.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],s.X.MEDIUM,m.EG,c.V),v=e=>{const{next:t,previous:n}=e;return l.createElement(d,{"aria-label":"Pagination Navigation"},l.createElement(p,null,n&&l.createElement(r.t,{to:n.slug},l.createElement(E,null,"Previous"),l.createElement(g,null,l.createElement(m.M5,{iconSvg:"arrowLeft"},n.title)))),l.createElement(p,null,t&&l.createElement(r.t,{to:t.slug},l.createElement(E,null,"Next"),l.createElement(g,null,l.createElement(m.M5,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},4810:function(e,t,n){n.d(t,{p:function(){return o}});var l=n(2784),a=n(8116),r=n(8944),c=n(3471);const o=e=>{const{title:t,description:n,lang:o="en",url:i,children:s}=e,m=(0,a.$)(),u=t+" | "+(0,c.g)(m.title),h=n||m.description;return l.createElement(l.Fragment,null,l.createElement("html",{lang:o}),l.createElement("title",null,u),l.createElement("link",{rel:"canonical",href:i}),l.createElement("meta",{name:"description",content:h}),l.createElement("meta",{name:"og:title",content:t}),l.createElement("meta",{name:"og:description",content:h}),l.createElement("meta",{name:"og:type",content:"article"}),l.createElement("meta",{name:"og:locale",content:"en_EN"}),l.createElement("meta",{name:"og:url",content:i}),l.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:m.author}),l.createElement("meta",{name:"twitter:title",content:t}),l.createElement("meta",{name:"twitter:description",content:h}),s)}},3471:function(e,t,n){n.d(t,{g:function(){return l}});const l=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return l}});const l=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-api-events-mdx-6d17683a172f8c40c602.js.map