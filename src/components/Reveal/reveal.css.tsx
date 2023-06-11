import React from 'react'

export const RevealCss = () => {
  return (
    <>
      <style global jsx>{`
        .reveal .r-stretch,
        .reveal .stretch {
          max-width: none;
          max-height: none;
        }
        .reveal pre.r-stretch code,
        .reveal pre.stretch code {
          height: 100%;
          max-height: 100%;
          box-sizing: border-box;
        }
        .reveal .r-fit-text {
          display: inline-block;
          white-space: nowrap;
        }
        .reveal .r-stack {
          display: grid;
        }
        .reveal .r-stack > * {
          grid-area: 1/1;
          margin: auto;
        }
        .reveal .r-hstack,
        .reveal .r-vstack {
          display: flex;
        }
        .reveal .r-hstack img,
        .reveal .r-hstack video,
        .reveal .r-vstack img,
        .reveal .r-vstack video {
          min-width: 0;
          min-height: 0;
          object-fit: contain;
        }
        .reveal .r-vstack {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .reveal .r-hstack {
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .reveal .items-stretch {
          align-items: stretch;
        }
        .reveal .items-start {
          align-items: flex-start;
        }
        .reveal .items-center {
          align-items: center;
        }
        .reveal .items-end {
          align-items: flex-end;
        }
        .reveal .justify-between {
          justify-content: space-between;
        }
        .reveal .justify-around {
          justify-content: space-around;
        }
        .reveal .justify-start {
          justify-content: flex-start;
        }
        .reveal .justify-center {
          justify-content: center;
        }
        .reveal .justify-end {
          justify-content: flex-end;
        }
        html.reveal-full-page {
          width: 100%;
          height: 100%;
          height: 100vh;
          height: calc(var(--vh, 1vh) * 100);
          overflow: hidden;
        }
        .reveal-viewport {
          height: 100%;
          overflow: hidden;
          position: relative;
          line-height: 1;
          margin: 0;
          {/* background-color: #fff; */}
          {/* color: #000; */}
        }
        .reveal-viewport:fullscreen {
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transform: none !important;
        }
        .reveal .fragment {
          transition: all 0.2s ease;
        }
        .reveal .fragment:not(.custom) {
          opacity: 0;
          visibility: hidden;
          will-change: opacity;
        }
        .reveal .fragment.visible {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.disabled {
          transition: none;
        }
        .reveal .fragment.grow {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.grow.visible {
          transform: scale(1.3);
        }
        .reveal .fragment.shrink {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.shrink.visible {
          transform: scale(0.7);
        }
        .reveal .fragment.zoom-in {
          transform: scale(0.1);
        }
        .reveal .fragment.zoom-in.visible {
          transform: none;
        }
        .reveal .fragment.fade-out {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.fade-out.visible {
          opacity: 0;
          visibility: hidden;
        }
        .reveal .fragment.semi-fade-out {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.semi-fade-out.visible {
          opacity: 0.5;
          visibility: inherit;
        }
        .reveal .fragment.strike {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.strike.visible {
          text-decoration: line-through;
        }
        .reveal .fragment.fade-up {
          transform: translate(0, 40px);
        }
        .reveal .fragment.fade-up.visible {
          transform: translate(0, 0);
        }
        .reveal .fragment.fade-down {
          transform: translate(0, -40px);
        }
        .reveal .fragment.fade-down.visible {
          transform: translate(0, 0);
        }
        .reveal .fragment.fade-right {
          transform: translate(-40px, 0);
        }
        .reveal .fragment.fade-right.visible {
          transform: translate(0, 0);
        }
        .reveal .fragment.fade-left {
          transform: translate(40px, 0);
        }
        .reveal .fragment.fade-left.visible {
          transform: translate(0, 0);
        }
        .reveal .fragment.current-visible,
        .reveal .fragment.fade-in-then-out {
          opacity: 0;
          visibility: hidden;
        }
        .reveal .fragment.current-visible.current-fragment,
        .reveal .fragment.fade-in-then-out.current-fragment {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.fade-in-then-semi-out {
          opacity: 0;
          visibility: hidden;
        }
        .reveal .fragment.fade-in-then-semi-out.visible {
          opacity: 0.5;
          visibility: inherit;
        }
        .reveal .fragment.fade-in-then-semi-out.current-fragment {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.highlight-blue,
        .reveal .fragment.highlight-current-blue,
        .reveal .fragment.highlight-current-green,
        .reveal .fragment.highlight-current-red,
        .reveal .fragment.highlight-green,
        .reveal .fragment.highlight-red {
          opacity: 1;
          visibility: inherit;
        }
        .reveal .fragment.highlight-red.visible {
          color: #ff2c2d;
        }
        .reveal .fragment.highlight-green.visible {
          color: #17ff2e;
        }
        .reveal .fragment.highlight-blue.visible {
          color: #1b91ff;
        }
        .reveal .fragment.highlight-current-red.current-fragment {
          color: #ff2c2d;
        }
        .reveal .fragment.highlight-current-green.current-fragment {
          color: #17ff2e;
        }
        .reveal .fragment.highlight-current-blue.current-fragment {
          color: #1b91ff;
        }
        .reveal:after {
          content: '';
          font-style: italic;
        }
        .reveal iframe {
          z-index: 1;
        }
        .reveal a {
          position: relative;
        }
        @keyframes bounce-right {
          0%,
          10%,
          25%,
          40%,
          50% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(10px);
          }
          30% {
            transform: translateX(-5px);
          }
        }
        @keyframes bounce-left {
          0%,
          10%,
          25%,
          40%,
          50% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-10px);
          }
          30% {
            transform: translateX(5px);
          }
        }
        @keyframes bounce-down {
          0%,
          10%,
          25%,
          40%,
          50% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(10px);
          }
          30% {
            transform: translateY(-5px);
          }
        }
        .reveal .controls {
          display: none;
          position: absolute;
          top: auto;
          bottom: 12px;
          right: 12px;
          left: auto;
          z-index: 11;
          color: #000;
          pointer-events: none;
          font-size: 10px;
        }
        .reveal .controls button {
          position: absolute;
          padding: 0;
          background-color: transparent;
          border: 0;
          outline: 0;
          cursor: pointer;
          color: currentColor;
          transform: scale(0.9999);
          transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
          z-index: 2;
          pointer-events: auto;
          font-size: inherit;
          visibility: hidden;
          opacity: 0;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
        }
        .reveal .controls .controls-arrow:after,
        .reveal .controls .controls-arrow:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 2.6em;
          height: 0.5em;
          border-radius: 0.25em;
          background-color: currentColor;
          transition: all 0.15s ease, background-color 0.8s ease;
          transform-origin: 0.2em 50%;
          will-change: transform;
        }
        .reveal .controls .controls-arrow {
          position: relative;
          width: 3.6em;
          height: 3.6em;
        }
        .reveal .controls .controls-arrow:before {
          transform: translateX(0.5em) translateY(1.55em) rotate(45deg);
        }
        .reveal .controls .controls-arrow:after {
          transform: translateX(0.5em) translateY(1.55em) rotate(-45deg);
        }
        .reveal .controls .controls-arrow:hover:before {
          transform: translateX(0.5em) translateY(1.55em) rotate(40deg);
        }
        .reveal .controls .controls-arrow:hover:after {
          transform: translateX(0.5em) translateY(1.55em) rotate(-40deg);
        }
        .reveal .controls .controls-arrow:active:before {
          transform: translateX(0.5em) translateY(1.55em) rotate(36deg);
        }
        .reveal .controls .controls-arrow:active:after {
          transform: translateX(0.5em) translateY(1.55em) rotate(-36deg);
        }
        .reveal .controls .navigate-left {
          right: 6.4em;
          bottom: 3.2em;
          transform: translateX(-10px);
        }
        .reveal .controls .navigate-left.highlight {
          animation: bounce-left 2s 50 both ease-out;
        }
        .reveal .controls .navigate-right {
          right: 0;
          bottom: 3.2em;
          transform: translateX(10px);
        }
        .reveal .controls .navigate-right .controls-arrow {
          transform: rotate(180deg);
        }
        .reveal .controls .navigate-right.highlight {
          animation: bounce-right 2s 50 both ease-out;
        }
        .reveal .controls .navigate-up {
          right: 3.2em;
          bottom: 6.4em;
          transform: translateY(-10px);
        }
        .reveal .controls .navigate-up .controls-arrow {
          transform: rotate(90deg);
        }
        .reveal .controls .navigate-down {
          right: 3.2em;
          bottom: -1.4em;
          padding-bottom: 1.4em;
          transform: translateY(10px);
        }
        .reveal .controls .navigate-down .controls-arrow {
          transform: rotate(-90deg);
        }
        .reveal .controls .navigate-down.highlight {
          animation: bounce-down 2s 50 both ease-out;
        }
        .reveal
          .controls[data-controls-back-arrows='faded']
          .navigate-up.enabled {
          opacity: 0.3;
        }
        .reveal
          .controls[data-controls-back-arrows='faded']
          .navigate-up.enabled:hover {
          opacity: 1;
        }
        .reveal
          .controls[data-controls-back-arrows='hidden']
          .navigate-up.enabled {
          opacity: 0;
          visibility: hidden;
        }
        .reveal .controls .enabled {
          visibility: visible;
          opacity: 0.9;
          cursor: pointer;
          transform: none;
        }
        .reveal .controls .enabled.fragmented {
          opacity: 0.5;
        }
        .reveal .controls .enabled.fragmented:hover,
        .reveal .controls .enabled:hover {
          opacity: 1;
        }
        .reveal:not(.rtl)
          .controls[data-controls-back-arrows='faded']
          .navigate-left.enabled {
          opacity: 0.3;
        }
        .reveal:not(.rtl)
          .controls[data-controls-back-arrows='faded']
          .navigate-left.enabled:hover {
          opacity: 1;
        }
        .reveal:not(.rtl)
          .controls[data-controls-back-arrows='hidden']
          .navigate-left.enabled {
          opacity: 0;
          visibility: hidden;
        }
        .reveal.rtl
          .controls[data-controls-back-arrows='faded']
          .navigate-right.enabled {
          opacity: 0.3;
        }
        .reveal.rtl
          .controls[data-controls-back-arrows='faded']
          .navigate-right.enabled:hover {
          opacity: 1;
        }
        .reveal.rtl
          .controls[data-controls-back-arrows='hidden']
          .navigate-right.enabled {
          opacity: 0;
          visibility: hidden;
        }
        .reveal[data-navigation-mode='linear'].has-horizontal-slides
          .navigate-down,
        .reveal[data-navigation-mode='linear'].has-horizontal-slides
          .navigate-up {
          display: none;
        }
        .reveal:not(.has-vertical-slides) .controls .navigate-left,
        .reveal[data-navigation-mode='linear'].has-horizontal-slides
          .navigate-left {
          bottom: 1.4em;
          right: 5.5em;
        }
        .reveal:not(.has-vertical-slides) .controls .navigate-right,
        .reveal[data-navigation-mode='linear'].has-horizontal-slides
          .navigate-right {
          bottom: 1.4em;
          right: 0.5em;
        }
        .reveal:not(.has-horizontal-slides) .controls .navigate-up {
          right: 1.4em;
          bottom: 5em;
        }
        .reveal:not(.has-horizontal-slides) .controls .navigate-down {
          right: 1.4em;
          bottom: 0.5em;
        }
        .reveal.has-dark-background .controls {
          color: #fff;
        }
        .reveal.has-light-background .controls {
          color: #000;
        }
        .reveal.no-hover .controls .controls-arrow:active:before,
        .reveal.no-hover .controls .controls-arrow:hover:before {
          transform: translateX(0.5em) translateY(1.55em) rotate(45deg);
        }
        .reveal.no-hover .controls .controls-arrow:active:after,
        .reveal.no-hover .controls .controls-arrow:hover:after {
          transform: translateX(0.5em) translateY(1.55em) rotate(-45deg);
        }
        @media screen and (min-width: 500px) {
          .reveal .controls[data-controls-layout='edges'] {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .reveal .controls[data-controls-layout='edges'] .navigate-down,
          .reveal .controls[data-controls-layout='edges'] .navigate-left,
          .reveal .controls[data-controls-layout='edges'] .navigate-right,
          .reveal .controls[data-controls-layout='edges'] .navigate-up {
            bottom: auto;
            right: auto;
          }
          .reveal .controls[data-controls-layout='edges'] .navigate-left {
            top: 50%;
            left: 0.8em;
            margin-top: -1.8em;
          }
          .reveal .controls[data-controls-layout='edges'] .navigate-right {
            top: 50%;
            right: 0.8em;
            margin-top: -1.8em;
          }
          .reveal .controls[data-controls-layout='edges'] .navigate-up {
            top: 0.8em;
            left: 50%;
            margin-left: -1.8em;
          }
          .reveal .controls[data-controls-layout='edges'] .navigate-down {
            bottom: -0.3em;
            left: 50%;
            margin-left: -1.8em;
          }
        }
        .reveal .progress {
          position: absolute;
          display: none;
          height: 3px;
          width: 100%;
          bottom: 0;
          left: 0;
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.2);
          color: #fff;
        }
        .reveal .progress:after {
          content: '';
          display: block;
          position: absolute;
          height: 10px;
          width: 100%;
          top: -10px;
        }
        .reveal .progress span {
          display: block;
          height: 100%;
          width: 100%;
          background-color: currentColor;
          transition: transform 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985);
          transform-origin: 0 0;
          transform: scaleX(0);
        }
        .reveal .slide-number {
          position: absolute;
          display: block;
          right: 8px;
          bottom: 8px;
          z-index: 31;
          font-family: Helvetica, sans-serif;
          font-size: 12px;
          line-height: 1;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 5px;
        }
        .reveal .slide-number a {
          color: currentColor;
        }
        .reveal .slide-number-delimiter {
          margin: 0 3px;
        }
        .reveal {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          touch-action: pinch-zoom;
        }
        .reveal.embedded {
          touch-action: pan-y;
        }
        .reveal .slides {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
          text-align: center;
          perspective: 600px;
          perspective-origin: 50% 40%;
        }
        .reveal .slides > section {
          perspective: 600px;
        }
        .reveal .slides > section,
        .reveal .slides > section > section {
          display: none;
          position: absolute;
          width: 100%;
          pointer-events: auto;
          z-index: 10;
          transform-style: flat;
          transition: transform-origin 0.8s
              cubic-bezier(0.26, 0.86, 0.44, 0.985),
            transform 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985),
            visibility 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985),
            opacity 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985);
        }
        .reveal[data-transition-speed='fast'] .slides section {
          transition-duration: 0.4s;
        }
        .reveal[data-transition-speed='slow'] .slides section {
          transition-duration: 1.2s;
        }
        .reveal .slides section[data-transition-speed='fast'] {
          transition-duration: 0.4s;
        }
        .reveal .slides section[data-transition-speed='slow'] {
          transition-duration: 1.2s;
        }
        .reveal .slides > section.stack {
          padding-top: 0;
          padding-bottom: 0;
          pointer-events: none;
          height: 100%;
        }
        .reveal .slides > section.present,
        .reveal .slides > section > section.present {
          display: block;
          z-index: 11;
          opacity: 1;
        }
        .reveal .slides > section:empty,
        .reveal .slides > section > section:empty,
        .reveal .slides > section > section[data-background-interactive],
        .reveal .slides > section[data-background-interactive] {
          pointer-events: none;
        }
        .reveal.center,
        .reveal.center .slides,
        .reveal.center .slides section {
          min-height: 0 !important;
        }
        .reveal .slides > section:not(.present),
        .reveal .slides > section > section:not(.present) {
          pointer-events: none;
        }
        .reveal.overview .slides > section,
        .reveal.overview .slides > section > section {
          pointer-events: auto;
        }
        .reveal .slides > section.future,
        .reveal .slides > section.future > section,
        .reveal .slides > section.past,
        .reveal .slides > section.past > section,
        .reveal .slides > section > section.future,
        .reveal .slides > section > section.past {
          opacity: 0;
        }
        .reveal .slides > section[data-transition='slide'].past,
        .reveal .slides > section[data-transition~='slide-out'].past,
        .reveal.slide .slides > section:not([data-transition]).past {
          transform: translate(-150%, 0);
        }
        .reveal .slides > section[data-transition='slide'].future,
        .reveal .slides > section[data-transition~='slide-in'].future,
        .reveal.slide .slides > section:not([data-transition]).future {
          transform: translate(150%, 0);
        }
        .reveal .slides > section > section[data-transition='slide'].past,
        .reveal .slides > section > section[data-transition~='slide-out'].past,
        .reveal.slide .slides > section > section:not([data-transition]).past {
          transform: translate(0, -150%);
        }
        .reveal .slides > section > section[data-transition='slide'].future,
        .reveal .slides > section > section[data-transition~='slide-in'].future,
        .reveal.slide
          .slides
          > section
          > section:not([data-transition]).future {
          transform: translate(0, 150%);
        }
        .reveal .slides > section[data-transition='linear'].past,
        .reveal .slides > section[data-transition~='linear-out'].past,
        .reveal.linear .slides > section:not([data-transition]).past {
          transform: translate(-150%, 0);
        }
        .reveal .slides > section[data-transition='linear'].future,
        .reveal .slides > section[data-transition~='linear-in'].future,
        .reveal.linear .slides > section:not([data-transition]).future {
          transform: translate(150%, 0);
        }
        .reveal .slides > section > section[data-transition='linear'].past,
        .reveal .slides > section > section[data-transition~='linear-out'].past,
        .reveal.linear .slides > section > section:not([data-transition]).past {
          transform: translate(0, -150%);
        }
        .reveal .slides > section > section[data-transition='linear'].future,
        .reveal
          .slides
          > section
          > section[data-transition~='linear-in'].future,
        .reveal.linear
          .slides
          > section
          > section:not([data-transition]).future {
          transform: translate(0, 150%);
        }
        .reveal .slides section[data-transition='default'].stack,
        .reveal.default .slides section.stack {
          transform-style: preserve-3d;
        }
        .reveal .slides > section[data-transition='default'].past,
        .reveal .slides > section[data-transition~='default-out'].past,
        .reveal.default .slides > section:not([data-transition]).past {
          transform: translate3d(-100%, 0, 0) rotateY(-90deg)
            translate3d(-100%, 0, 0);
        }
        .reveal .slides > section[data-transition='default'].future,
        .reveal .slides > section[data-transition~='default-in'].future,
        .reveal.default .slides > section:not([data-transition]).future {
          transform: translate3d(100%, 0, 0) rotateY(90deg)
            translate3d(100%, 0, 0);
        }
        .reveal .slides > section > section[data-transition='default'].past,
        .reveal
          .slides
          > section
          > section[data-transition~='default-out'].past,
        .reveal.default
          .slides
          > section
          > section:not([data-transition]).past {
          transform: translate3d(0, -300px, 0) rotateX(70deg)
            translate3d(0, -300px, 0);
        }
        .reveal .slides > section > section[data-transition='default'].future,
        .reveal
          .slides
          > section
          > section[data-transition~='default-in'].future,
        .reveal.default
          .slides
          > section
          > section:not([data-transition]).future {
          transform: translate3d(0, 300px, 0) rotateX(-70deg)
            translate3d(0, 300px, 0);
        }
        .reveal .slides section[data-transition='convex'].stack,
        .reveal.convex .slides section.stack {
          transform-style: preserve-3d;
        }
        .reveal .slides > section[data-transition='convex'].past,
        .reveal .slides > section[data-transition~='convex-out'].past,
        .reveal.convex .slides > section:not([data-transition]).past {
          transform: translate3d(-100%, 0, 0) rotateY(-90deg)
            translate3d(-100%, 0, 0);
        }
        .reveal .slides > section[data-transition='convex'].future,
        .reveal .slides > section[data-transition~='convex-in'].future,
        .reveal.convex .slides > section:not([data-transition]).future {
          transform: translate3d(100%, 0, 0) rotateY(90deg)
            translate3d(100%, 0, 0);
        }
        .reveal .slides > section > section[data-transition='convex'].past,
        .reveal .slides > section > section[data-transition~='convex-out'].past,
        .reveal.convex .slides > section > section:not([data-transition]).past {
          transform: translate3d(0, -300px, 0) rotateX(70deg)
            translate3d(0, -300px, 0);
        }
        .reveal .slides > section > section[data-transition='convex'].future,
        .reveal
          .slides
          > section
          > section[data-transition~='convex-in'].future,
        .reveal.convex
          .slides
          > section
          > section:not([data-transition]).future {
          transform: translate3d(0, 300px, 0) rotateX(-70deg)
            translate3d(0, 300px, 0);
        }
        .reveal .slides section[data-transition='concave'].stack,
        .reveal.concave .slides section.stack {
          transform-style: preserve-3d;
        }
        .reveal .slides > section[data-transition='concave'].past,
        .reveal .slides > section[data-transition~='concave-out'].past,
        .reveal.concave .slides > section:not([data-transition]).past {
          transform: translate3d(-100%, 0, 0) rotateY(90deg)
            translate3d(-100%, 0, 0);
        }
        .reveal .slides > section[data-transition='concave'].future,
        .reveal .slides > section[data-transition~='concave-in'].future,
        .reveal.concave .slides > section:not([data-transition]).future {
          transform: translate3d(100%, 0, 0) rotateY(-90deg)
            translate3d(100%, 0, 0);
        }
        .reveal .slides > section > section[data-transition='concave'].past,
        .reveal
          .slides
          > section
          > section[data-transition~='concave-out'].past,
        .reveal.concave
          .slides
          > section
          > section:not([data-transition]).past {
          transform: translate3d(0, -80%, 0) rotateX(-70deg)
            translate3d(0, -80%, 0);
        }
        .reveal .slides > section > section[data-transition='concave'].future,
        .reveal
          .slides
          > section
          > section[data-transition~='concave-in'].future,
        .reveal.concave
          .slides
          > section
          > section:not([data-transition]).future {
          transform: translate3d(0, 80%, 0) rotateX(70deg)
            translate3d(0, 80%, 0);
        }
        .reveal .slides section[data-transition='zoom'],
        .reveal.zoom .slides section:not([data-transition]) {
          transition-timing-function: ease;
        }
        .reveal .slides > section[data-transition='zoom'].past,
        .reveal .slides > section[data-transition~='zoom-out'].past,
        .reveal.zoom .slides > section:not([data-transition]).past {
          visibility: hidden;
          transform: scale(16);
        }
        .reveal .slides > section[data-transition='zoom'].future,
        .reveal .slides > section[data-transition~='zoom-in'].future,
        .reveal.zoom .slides > section:not([data-transition]).future {
          visibility: hidden;
          transform: scale(0.2);
        }
        .reveal .slides > section > section[data-transition='zoom'].past,
        .reveal .slides > section > section[data-transition~='zoom-out'].past,
        .reveal.zoom .slides > section > section:not([data-transition]).past {
          transform: scale(16);
        }
        .reveal .slides > section > section[data-transition='zoom'].future,
        .reveal .slides > section > section[data-transition~='zoom-in'].future,
        .reveal.zoom .slides > section > section:not([data-transition]).future {
          transform: scale(0.2);
        }
        .reveal.cube .slides {
          perspective: 1300px;
        }
        .reveal.cube .slides section {
          padding: 30px;
          min-height: 700px;
          backface-visibility: hidden;
          box-sizing: border-box;
          transform-style: preserve-3d;
        }
        .reveal.center.cube .slides section {
          min-height: 0;
        }
        .reveal.cube .slides section:not(.stack):before {
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transform: translateZ(-20px);
        }
        .reveal.cube .slides section:not(.stack):after {
          content: '';
          position: absolute;
          display: block;
          width: 90%;
          height: 30px;
          left: 5%;
          bottom: 0;
          background: 0 0;
          z-index: 1;
          border-radius: 4px;
          box-shadow: 0 95px 25px rgba(0, 0, 0, 0.2);
          transform: translateZ(-90px) rotateX(65deg);
        }
        .reveal.cube .slides > section.stack {
          padding: 0;
          background: 0 0;
        }
        .reveal.cube .slides > section.past {
          transform-origin: 100% 0;
          transform: translate3d(-100%, 0, 0) rotateY(-90deg);
        }
        .reveal.cube .slides > section.future {
          transform-origin: 0 0;
          transform: translate3d(100%, 0, 0) rotateY(90deg);
        }
        .reveal.cube .slides > section > section.past {
          transform-origin: 0 100%;
          transform: translate3d(0, -100%, 0) rotateX(90deg);
        }
        .reveal.cube .slides > section > section.future {
          transform-origin: 0 0;
          transform: translate3d(0, 100%, 0) rotateX(-90deg);
        }
        .reveal.page .slides {
          perspective-origin: 0 50%;
          perspective: 3000px;
        }
        .reveal.page .slides section {
          padding: 30px;
          min-height: 700px;
          box-sizing: border-box;
          transform-style: preserve-3d;
        }
        .reveal.page .slides section.past {
          z-index: 12;
        }
        .reveal.page .slides section:not(.stack):before {
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, 0.1);
          transform: translateZ(-20px);
        }
        .reveal.page .slides section:not(.stack):after {
          content: '';
          position: absolute;
          display: block;
          width: 90%;
          height: 30px;
          left: 5%;
          bottom: 0;
          background: 0 0;
          z-index: 1;
          border-radius: 4px;
          box-shadow: 0 95px 25px rgba(0, 0, 0, 0.2);
          -webkit-transform: translateZ(-90px) rotateX(65deg);
        }
        .reveal.page .slides > section.stack {
          padding: 0;
          background: 0 0;
        }
        .reveal.page .slides > section.past {
          transform-origin: 0 0;
          transform: translate3d(-40%, 0, 0) rotateY(-80deg);
        }
        .reveal.page .slides > section.future {
          transform-origin: 100% 0;
          transform: translate3d(0, 0, 0);
        }
        .reveal.page .slides > section > section.past {
          transform-origin: 0 0;
          transform: translate3d(0, -40%, 0) rotateX(80deg);
        }
        .reveal.page .slides > section > section.future {
          transform-origin: 0 100%;
          transform: translate3d(0, 0, 0);
        }
        .reveal .slides section[data-transition='fade'],
        .reveal.fade .slides section:not([data-transition]),
        .reveal.fade .slides > section > section:not([data-transition]) {
          transform: none;
          transition: opacity 0.5s;
        }
        .reveal.fade.overview .slides section,
        .reveal.fade.overview .slides > section > section {
          transition: none;
        }
        .reveal .slides section[data-transition='none'],
        .reveal.none .slides section:not([data-transition]) {
          transform: none;
          transition: none;
        }
        .reveal .pause-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          visibility: hidden;
          opacity: 0;
          z-index: 100;
          transition: all 1s ease;
        }
        .reveal .pause-overlay .resume-button {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: #ccc;
          border-radius: 2px;
          padding: 6px 14px;
          border: 2px solid #ccc;
          font-size: 16px;
          background: 0 0;
          cursor: pointer;
        }
        .reveal .pause-overlay .resume-button:hover {
          color: #fff;
          border-color: #fff;
        }
        .reveal.paused .pause-overlay {
          visibility: visible;
          opacity: 1;
        }
        .reveal .no-transition,
        .reveal .no-transition *,
        .reveal .slides.disable-slide-transitions section {
          transition: none !important;
        }
        .reveal .slides.disable-slide-transitions section {
          transform: none !important;
        }
        .reveal .backgrounds {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          perspective: 600px;
        }
        .reveal .slide-background {
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0);
          transition: all 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985);
        }
        .reveal .slide-background-content {
          position: absolute;
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .reveal .slide-background.stack {
          display: block;
        }
        .reveal .slide-background.present {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }
        .print-pdf .reveal .slide-background {
          opacity: 1 !important;
          visibility: visible !important;
        }
        .reveal .slide-background video {
          position: absolute;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        .reveal .slide-background[data-background-size='contain'] video {
          object-fit: contain;
        }
        .reveal
          > .backgrounds
          .slide-background[data-background-transition='none'],
        .reveal[data-background-transition='none']
          > .backgrounds
          .slide-background:not([data-background-transition]) {
          transition: none;
        }
        .reveal
          > .backgrounds
          .slide-background[data-background-transition='slide'],
        .reveal[data-background-transition='slide']
          > .backgrounds
          .slide-background:not([data-background-transition]) {
          opacity: 1;
        }
        .reveal
          > .backgrounds
          .slide-background.past[data-background-transition='slide'],
        .reveal[data-background-transition='slide']
          > .backgrounds
          .slide-background.past:not([data-background-transition]) {
          transform: translate(-100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background.future[data-background-transition='slide'],
        .reveal[data-background-transition='slide']
          > .backgrounds
          .slide-background.future:not([data-background-transition]) {
          transform: translate(100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.past[data-background-transition='slide'],
        .reveal[data-background-transition='slide']
          > .backgrounds
          .slide-background
          > .slide-background.past:not([data-background-transition]) {
          transform: translate(0, -100%);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.future[data-background-transition='slide'],
        .reveal[data-background-transition='slide']
          > .backgrounds
          .slide-background
          > .slide-background.future:not([data-background-transition]) {
          transform: translate(0, 100%);
        }
        .reveal
          > .backgrounds
          .slide-background.past[data-background-transition='convex'],
        .reveal[data-background-transition='convex']
          > .backgrounds
          .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(-100%, 0, 0) rotateY(-90deg)
            translate3d(-100%, 0, 0);
        }
        .reveal
          > .backgrounds
          .slide-background.future[data-background-transition='convex'],
        .reveal[data-background-transition='convex']
          > .backgrounds
          .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(100%, 0, 0) rotateY(90deg)
            translate3d(100%, 0, 0);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.past[data-background-transition='convex'],
        .reveal[data-background-transition='convex']
          > .backgrounds
          .slide-background
          > .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(0, -100%, 0) rotateX(90deg)
            translate3d(0, -100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.future[data-background-transition='convex'],
        .reveal[data-background-transition='convex']
          > .backgrounds
          .slide-background
          > .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(0, 100%, 0) rotateX(-90deg)
            translate3d(0, 100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background.past[data-background-transition='concave'],
        .reveal[data-background-transition='concave']
          > .backgrounds
          .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(-100%, 0, 0) rotateY(90deg)
            translate3d(-100%, 0, 0);
        }
        .reveal
          > .backgrounds
          .slide-background.future[data-background-transition='concave'],
        .reveal[data-background-transition='concave']
          > .backgrounds
          .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(100%, 0, 0) rotateY(-90deg)
            translate3d(100%, 0, 0);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.past[data-background-transition='concave'],
        .reveal[data-background-transition='concave']
          > .backgrounds
          .slide-background
          > .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(0, -100%, 0) rotateX(-90deg)
            translate3d(0, -100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.future[data-background-transition='concave'],
        .reveal[data-background-transition='concave']
          > .backgrounds
          .slide-background
          > .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          transform: translate3d(0, 100%, 0) rotateX(90deg)
            translate3d(0, 100%, 0);
        }
        .reveal
          > .backgrounds
          .slide-background[data-background-transition='zoom'],
        .reveal[data-background-transition='zoom']
          > .backgrounds
          .slide-background:not([data-background-transition]) {
          transition-timing-function: ease;
        }
        .reveal
          > .backgrounds
          .slide-background.past[data-background-transition='zoom'],
        .reveal[data-background-transition='zoom']
          > .backgrounds
          .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          visibility: hidden;
          transform: scale(16);
        }
        .reveal
          > .backgrounds
          .slide-background.future[data-background-transition='zoom'],
        .reveal[data-background-transition='zoom']
          > .backgrounds
          .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.2);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.past[data-background-transition='zoom'],
        .reveal[data-background-transition='zoom']
          > .backgrounds
          .slide-background
          > .slide-background.past:not([data-background-transition]) {
          opacity: 0;
          visibility: hidden;
          transform: scale(16);
        }
        .reveal
          > .backgrounds
          .slide-background
          > .slide-background.future[data-background-transition='zoom'],
        .reveal[data-background-transition='zoom']
          > .backgrounds
          .slide-background
          > .slide-background.future:not([data-background-transition]) {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.2);
        }
        .reveal[data-transition-speed='fast'] > .backgrounds .slide-background {
          transition-duration: 0.4s;
        }
        .reveal[data-transition-speed='slow'] > .backgrounds .slide-background {
          transition-duration: 1.2s;
        }
        .reveal [data-auto-animate-target^='unmatched'] {
          will-change: opacity;
        }
        .reveal
          section[data-auto-animate]:not(.stack):not(
            [data-auto-animate='running']
          )
          [data-auto-animate-target^='unmatched'] {
          opacity: 0;
        }
        .reveal.overview {
          perspective-origin: 50% 50%;
          perspective: 700px;
        }
        .reveal.overview .slides {
          -moz-transform-style: preserve-3d;
        }
        .reveal.overview .slides section {
          height: 100%;
          top: 0 !important;
          opacity: 1 !important;
          overflow: hidden;
          visibility: visible !important;
          cursor: pointer;
          box-sizing: border-box;
        }
        .reveal.overview .slides section.present,
        .reveal.overview .slides section:hover {
          outline: 10px solid rgba(150, 150, 150, 0.4);
          outline-offset: 10px;
        }
        .reveal.overview .slides section .fragment {
          opacity: 1;
          transition: none;
        }
        .reveal.overview .slides section:after,
        .reveal.overview .slides section:before {
          display: none !important;
        }
        .reveal.overview .slides > section.stack {
          padding: 0;
          top: 0 !important;
          background: 0 0;
          outline: 0;
          overflow: visible;
        }
        .reveal.overview .backgrounds {
          perspective: inherit;
          -moz-transform-style: preserve-3d;
        }
        .reveal.overview .backgrounds .slide-background {
          opacity: 1;
          visibility: visible;
          outline: 10px solid rgba(150, 150, 150, 0.1);
          outline-offset: 10px;
        }
        .reveal.overview .backgrounds .slide-background.stack {
          overflow: visible;
        }
        .reveal.overview .slides section,
        .reveal.overview-deactivating .slides section {
          transition: none;
        }
        .reveal.overview .backgrounds .slide-background,
        .reveal.overview-deactivating .backgrounds .slide-background {
          transition: none;
        }
        .reveal.rtl .slides,
        .reveal.rtl .slides h1,
        .reveal.rtl .slides h2,
        .reveal.rtl .slides h3,
        .reveal.rtl .slides h4,
        .reveal.rtl .slides h5,
        .reveal.rtl .slides h6 {
          direction: rtl;
          font-family: sans-serif;
        }
        .reveal.rtl code,
        .reveal.rtl pre {
          direction: ltr;
        }
        .reveal.rtl ol,
        .reveal.rtl ul {
          text-align: right;
        }
        .reveal.rtl .progress span {
          transform-origin: 100% 0;
        }
        .reveal.has-parallax-background .backgrounds {
          transition: all 0.8s ease;
        }
        .reveal.has-parallax-background[data-transition-speed='fast']
          .backgrounds {
          transition-duration: 0.4s;
        }
        .reveal.has-parallax-background[data-transition-speed='slow']
          .backgrounds {
          transition-duration: 1.2s;
        }
        .reveal > .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.9);
          transition: all 0.3s ease;
        }
        .reveal > .overlay .spinner {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          width: 32px;
          height: 32px;
          margin: -16px 0 0 -16px;
          z-index: 10;
          background-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);
          visibility: visible;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .reveal > .overlay header {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          padding: 5px;
          z-index: 2;
          box-sizing: border-box;
        }
        .reveal > .overlay header a {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 36px;
          padding: 0 10px;
          float: right;
          opacity: 0.6;
          box-sizing: border-box;
        }
        .reveal > .overlay header a:hover {
          opacity: 1;
        }
        .reveal > .overlay header a .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-position: 50% 50%;
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .reveal > .overlay header a.close .icon {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC);
        }
        .reveal > .overlay header a.external .icon {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==);
        }
        .reveal > .overlay .viewport {
          position: absolute;
          display: flex;
          top: 50px;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .reveal > .overlay.overlay-preview .viewport iframe {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          border: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .reveal > .overlay.overlay-preview.loaded .viewport iframe {
          opacity: 1;
          visibility: visible;
        }
        .reveal > .overlay.overlay-preview.loaded .viewport-inner {
          position: absolute;
          z-index: -1;
          left: 0;
          top: 45%;
          width: 100%;
          text-align: center;
          letter-spacing: normal;
        }
        .reveal > .overlay.overlay-preview .x-frame-error {
          opacity: 0;
          transition: opacity 0.3s ease 0.3s;
        }
        .reveal > .overlay.overlay-preview.loaded .x-frame-error {
          opacity: 1;
        }
        .reveal > .overlay.overlay-preview.loaded .spinner {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.2);
        }
        .reveal > .overlay.overlay-help .viewport {
          overflow: auto;
          color: #fff;
        }
        .reveal > .overlay.overlay-help .viewport .viewport-inner {
          width: 600px;
          margin: auto;
          padding: 20px 20px 80px 20px;
          text-align: center;
          letter-spacing: normal;
        }
        .reveal > .overlay.overlay-help .viewport .viewport-inner .title {
          font-size: 20px;
        }
        .reveal > .overlay.overlay-help .viewport .viewport-inner table {
          border: 1px solid #fff;
          border-collapse: collapse;
          font-size: 16px;
        }
        .reveal > .overlay.overlay-help .viewport .viewport-inner table td,
        .reveal > .overlay.overlay-help .viewport .viewport-inner table th {
          width: 200px;
          padding: 14px;
          border: 1px solid #fff;
          vertical-align: middle;
        }
        .reveal > .overlay.overlay-help .viewport .viewport-inner table th {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .reveal .playback {
          position: absolute;
          left: 15px;
          bottom: 20px;
          z-index: 30;
          cursor: pointer;
          transition: all 0.4s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .reveal.overview .playback {
          opacity: 0;
          visibility: hidden;
        }
        .reveal .hljs {
          min-height: 100%;
        }
        .reveal .hljs table {
          margin: initial;
        }
        .reveal .hljs-ln-code,
        .reveal .hljs-ln-numbers {
          padding: 0;
          border: 0;
        }
        .reveal .hljs-ln-numbers {
          opacity: 0.6;
          padding-right: 0.75em;
          text-align: right;
          vertical-align: top;
        }
        .reveal .hljs.has-highlights tr:not(.highlight-line) {
          opacity: 0.4;
        }
        .reveal .hljs:not(:first-child).fragment {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          box-sizing: border-box;
        }
        .reveal pre[data-auto-animate-target] {
          overflow: hidden;
        }
        .reveal pre[data-auto-animate-target] code {
          height: 100%;
        }
        .reveal .roll {
          display: inline-block;
          line-height: 1.2;
          overflow: hidden;
          vertical-align: top;
          perspective: 400px;
          perspective-origin: 50% 50%;
        }
        .reveal .roll:hover {
          background: 0 0;
          text-shadow: none;
        }
        .reveal .roll span {
          display: block;
          position: relative;
          padding: 0 2px;
          pointer-events: none;
          transition: all 0.4s ease;
          transform-origin: 50% 0;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .reveal .roll:hover span {
          background: rgba(0, 0, 0, 0.5);
          transform: translate3d(0, 0, -45px) rotateX(90deg);
        }
        .reveal .roll span:after {
          content: attr(data-title);
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          padding: 0 2px;
          backface-visibility: hidden;
          transform-origin: 50% 0;
          transform: translate3d(0, 110%, 0) rotateX(-90deg);
        }
        .reveal aside.notes {
          display: none;
        }
        .reveal .speaker-notes {
          display: none;
          position: absolute;
          width: 33.3333333333%;
          height: 100%;
          top: 0;
          left: 100%;
          padding: 14px 18px 14px 18px;
          z-index: 1;
          font-size: 18px;
          line-height: 1.4;
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #222;
          background-color: #f5f5f5;
          overflow: auto;
          box-sizing: border-box;
          text-align: left;
          font-family: Helvetica, sans-serif;
          -webkit-overflow-scrolling: touch;
        }
        .reveal .speaker-notes .notes-placeholder {
          color: #ccc;
          font-style: italic;
        }
        .reveal .speaker-notes:focus {
          outline: 0;
        }
        .reveal .speaker-notes:before {
          content: 'Speaker notes';
          display: block;
          margin-bottom: 10px;
          opacity: 0.5;
        }
        .reveal.show-notes {
          max-width: 75%;
          overflow: visible;
        }
        .reveal.show-notes .speaker-notes {
          display: block;
        }
        @media screen and (min-width: 1600px) {
          .reveal .speaker-notes {
            font-size: 20px;
          }
        }
        @media screen and (max-width: 1024px) {
          .reveal.show-notes {
            border-left: 0;
            max-width: none;
            max-height: 70%;
            max-height: 70vh;
            overflow: visible;
          }
          .reveal.show-notes .speaker-notes {
            top: 100%;
            left: 0;
            width: 100%;
            height: 30vh;
            border: 0;
          }
        }
        @media screen and (max-width: 600px) {
          .reveal.show-notes {
            max-height: 60%;
            max-height: 60vh;
          }
          .reveal.show-notes .speaker-notes {
            top: 100%;
            height: 40vh;
          }
          .reveal .speaker-notes {
            font-size: 14px;
          }
        }
        .reveal .jump-to-slide {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 30;
          font-size: 32px;
          -webkit-tap-highlight-color: transparent;
        }
        .reveal .jump-to-slide-input {
          background: 0 0;
          padding: 8px;
          font-size: inherit;
          color: currentColor;
          border: 0;
        }
        .reveal .jump-to-slide-input::placeholder {
          color: currentColor;
          opacity: 0.5;
        }
        .reveal.has-dark-background .jump-to-slide-input {
          color: #fff;
        }
        .reveal.has-light-background .jump-to-slide-input {
          color: #222;
        }
        .reveal .jump-to-slide-input:focus {
          outline: 0;
        }
        .zoomed .reveal *,
        .zoomed .reveal :after,
        .zoomed .reveal :before {
          backface-visibility: visible !important;
        }
        .zoomed .reveal .controls,
        .zoomed .reveal .progress {
          opacity: 0;
        }
        .zoomed .reveal .roll span {
          background: 0 0;
        }
        .zoomed .reveal .roll span:after {
          visibility: hidden;
        }
        html.print-pdf * {
          -webkit-print-color-adjust: exact;
        }
        html.print-pdf {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        html.print-pdf body {
          margin: 0 auto !important;
          border: 0;
          padding: 0;
          float: none !important;
          overflow: visible;
        }
        html.print-pdf .nestedarrow,
        html.print-pdf .reveal .controls,
        html.print-pdf .reveal .playback,
        html.print-pdf .reveal .progress,
        html.print-pdf .reveal.overview,
        html.print-pdf .state-background {
          display: none !important;
        }
        html.print-pdf .reveal pre code {
          overflow: hidden !important;
          font-family: Courier, 'Courier New', monospace !important;
        }
        html.print-pdf .reveal {
          width: auto !important;
          height: auto !important;
          overflow: hidden !important;
        }
        html.print-pdf .reveal .slides {
          position: static;
          width: 100% !important;
          height: auto !important;
          zoom: 1 !important;
          pointer-events: initial;
          left: auto;
          top: auto;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible;
          display: block;
          perspective: none;
          perspective-origin: 50% 50%;
        }
        html.print-pdf .reveal .slides .pdf-page {
          position: relative;
          overflow: hidden;
          z-index: 1;
          page-break-after: always;
        }
        html.print-pdf .reveal .slides section {
          visibility: visible !important;
          display: block !important;
          position: absolute !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
          min-height: 1px;
          opacity: 1 !important;
          transform-style: flat !important;
          transform: none !important;
        }
        html.print-pdf .reveal section.stack {
          position: relative !important;
          margin: 0 !important;
          padding: 0 !important;
          page-break-after: avoid !important;
          height: auto !important;
          min-height: auto !important;
        }
        html.print-pdf .reveal img {
          box-shadow: none;
        }
        html.print-pdf .reveal .backgrounds {
          display: none;
        }
        html.print-pdf .reveal .slide-background {
          display: block !important;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: auto !important;
        }
        html.print-pdf .reveal.show-notes {
          max-width: none;
          max-height: none;
        }
        html.print-pdf .reveal .speaker-notes-pdf {
          display: block;
          width: 100%;
          height: auto;
          max-height: none;
          top: auto;
          right: auto;
          bottom: auto;
          left: auto;
          z-index: 100;
        }
        html.print-pdf .reveal .speaker-notes-pdf[data-layout='separate-page'] {
          position: relative;
          color: inherit;
          background-color: transparent;
          padding: 20px;
          page-break-after: always;
          border: 0;
        }
        html.print-pdf .reveal .slide-number-pdf {
          display: block;
          position: absolute;
          font-size: 14px;
        }
        html.print-pdf .aria-status {
          display: none;
        }
        @media print {
          html:not(.print-pdf) {
            overflow: visible;
            width: auto;
            height: auto;
          }
          html:not(.print-pdf) body {
            margin: 0;
            padding: 0;
            overflow: visible;
          }
          html:not(.print-pdf) .reveal {
            background: #fff;
            font-size: 20pt;
          }
          html:not(.print-pdf) .reveal .backgrounds,
          html:not(.print-pdf) .reveal .controls,
          html:not(.print-pdf) .reveal .progress,
          html:not(.print-pdf) .reveal .slide-number,
          html:not(.print-pdf) .reveal .state-background {
            display: none !important;
          }
          html:not(.print-pdf) .reveal li,
          html:not(.print-pdf) .reveal p,
          html:not(.print-pdf) .reveal td {
            font-size: 20pt !important;
            color: #000;
          }
          html:not(.print-pdf) .reveal h1,
          html:not(.print-pdf) .reveal h2,
          html:not(.print-pdf) .reveal h3,
          html:not(.print-pdf) .reveal h4,
          html:not(.print-pdf) .reveal h5,
          html:not(.print-pdf) .reveal h6 {
            color: #000 !important;
            height: auto;
            line-height: normal;
            text-align: left;
            letter-spacing: normal;
          }
          html:not(.print-pdf) .reveal h1 {
            font-size: 28pt !important;
          }
          html:not(.print-pdf) .reveal h2 {
            font-size: 24pt !important;
          }
          html:not(.print-pdf) .reveal h3 {
            font-size: 22pt !important;
          }
          html:not(.print-pdf) .reveal h4 {
            font-size: 22pt !important;
            font-variant: small-caps;
          }
          html:not(.print-pdf) .reveal h5 {
            font-size: 21pt !important;
          }
          html:not(.print-pdf) .reveal h6 {
            font-size: 20pt !important;
            font-style: italic;
          }
          html:not(.print-pdf) .reveal a:link,
          html:not(.print-pdf) .reveal a:visited {
            color: #000 !important;
            font-weight: 700;
            text-decoration: underline;
          }
          html:not(.print-pdf) .reveal div,
          html:not(.print-pdf) .reveal ol,
          html:not(.print-pdf) .reveal p,
          html:not(.print-pdf) .reveal ul {
            visibility: visible;
            position: static;
            width: auto;
            height: auto;
            display: block;
            overflow: visible;
            margin: 0;
            text-align: left !important;
          }
          html:not(.print-pdf) .reveal pre,
          html:not(.print-pdf) .reveal table {
            margin-left: 0;
            margin-right: 0;
          }
          html:not(.print-pdf) .reveal pre code {
            padding: 20px;
          }
          html:not(.print-pdf) .reveal blockquote {
            margin: 20px 0;
          }
          html:not(.print-pdf) .reveal .slides {
            position: static !important;
            width: auto !important;
            height: auto !important;
            left: 0 !important;
            top: 0 !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            padding: 0 !important;
            zoom: 1 !important;
            transform: none !important;
            overflow: visible !important;
            display: block !important;
            text-align: left !important;
            perspective: none;
            perspective-origin: 50% 50%;
          }
          html:not(.print-pdf) .reveal .slides section {
            visibility: visible !important;
            position: static !important;
            width: auto !important;
            height: auto !important;
            display: block !important;
            overflow: visible !important;
            left: 0 !important;
            top: 0 !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            padding: 60px 20px !important;
            z-index: auto !important;
            opacity: 1 !important;
            page-break-after: always !important;
            transform-style: flat !important;
            transform: none !important;
            transition: none !important;
          }
          html:not(.print-pdf) .reveal .slides section.stack {
            padding: 0 !important;
          }
          html:not(.print-pdf) .reveal .slides section:last-of-type {
            page-break-after: avoid !important;
          }
          html:not(.print-pdf) .reveal .slides section .fragment {
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
          }
          html:not(.print-pdf) .reveal .r-fit-text {
            white-space: normal !important;
          }
          html:not(.print-pdf) .reveal section img {
            display: block;
            margin: 15px 0;
            background: #fff;
            border: 1px solid #666;
            box-shadow: none;
          }
          html:not(.print-pdf) .reveal section small {
            font-size: 0.8em;
          }
          html:not(.print-pdf) .reveal .hljs {
            max-height: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
            word-break: break-word;
            font-size: 15pt;
          }
          html:not(.print-pdf) .reveal .hljs .hljs-ln-numbers {
            white-space: nowrap;
          }
          html:not(.print-pdf) .reveal .hljs td {
            font-size: inherit !important;
            color: inherit !important;
          }
        }
      `}</style>
    </>
  )
}