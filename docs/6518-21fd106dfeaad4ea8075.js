"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6518],{6518:function(_,n,e){e.r(n),n.default="import EmblaCarousel from 'embla-carousel';\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nimport { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons';\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nimport { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton';\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nimport { updateSelectedSnapDisplay } from './EmblaCarouselSelectedSnapDisplay';\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n/*__AUTOPLAY_REPLACE_START__*/\nimport Autoplay from 'embla-carousel-autoplay';\n/*__AUTOPLAY_REPLACE_END__*/\n/*__CLASS_NAMES_REPLACE_START__*/\nimport ClassNames from 'embla-carousel-class-names';\n/*__CLASS_NAMES_REPLACE_END__*/\nimport '../css/base.css';\nimport '../css/sandbox.css';\nimport '../css/embla.css';\n\nconst OPTIONS = {};\n\nconst emblaNode = document.querySelector('.embla');\nconst viewportNode = emblaNode.querySelector('.embla__viewport');\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nconst prevBtnNode = emblaNode.querySelector('.embla__button--prev');\nconst nextBtnNode = emblaNode.querySelector('.embla__button--next');\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nconst dotsNode = emblaNode.querySelector('.embla__dots');\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nconst snapDisplayNode = (emblaNode.querySelector('.embla__selected-snap-display'));\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n\nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS, \n/*__PLUGINS_REPLACE_START__*/\n[\n    /*__AUTOPLAY_REPLACE_START__*/\n    Autoplay(),\n    /*__AUTOPLAY_REPLACE_END__*/\n    \n    /*__CLASS_NAMES_REPLACE_START__*/\n    ClassNames()\n    /*__CLASS_NAMES_REPLACE_END__*/\n]\n/*__PLUGINS_REPLACE_END__*/\n);\n\n/*__NAV_AUTOPLAY_REPLACE_START__*/\nconst onNavButtonClick = (emblaApi) => {\n    const autoplay = emblaApi?.plugins()?.autoplay;\n    if (!autoplay)\n        return;\n    \n    const resetOrStop = autoplay.options.stopOnInteraction === false\n        ? autoplay.reset\n        : autoplay.stop;\n    \n    resetOrStop();\n};\n/*__NAV_AUTOPLAY_REPLACE_END__*/\n\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nconst removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode, \n/*__NAV_AUTOPLAY_REPLACE_START__*/ onNavButtonClick /*__NAV_AUTOPLAY_REPLACE_END__*/);\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nconst removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode, \n/*__NAV_AUTOPLAY_REPLACE_START__*/ onNavButtonClick /*__NAV_AUTOPLAY_REPLACE_END__*/);\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nupdateSelectedSnapDisplay(emblaApi, snapDisplayNode);\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nemblaApi.on('destroy', removePrevNextBtnsClickHandlers);\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nemblaApi.on('destroy', removeDotBtnsAndClickHandlers);\n/*__DOT_BUTTONS_REPLACE_END__*/\n"}}]);
//# sourceMappingURL=6518-21fd106dfeaad4ea8075.js.map