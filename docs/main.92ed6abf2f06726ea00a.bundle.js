(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(429),module.exports=__webpack_require__(430)},345:function(module,exports){},430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(34),__webpack_require__(27),__webpack_require__(20),__webpack_require__(35),__webpack_require__(36);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(166),req=__webpack_require__(620);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(431)(module))},620:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":621};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=620},621:function(module,exports,__webpack_require__){"use strict";(function(module){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(0)),react_2=__webpack_require__(166),_1=__importDefault(__webpack_require__(622)),images=["https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],onSlideChange=function(index){console.log("Slide changed to: "+index)},imageStyle=function(src){return{backgroundSize:"cover",backgroundImage:"url("+src+")",height:"100%",width:"100%"}};react_2.storiesOf("Slider",module).add("Default",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,onSlideChange:onSlideChange},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("Smaller than 100%",(function(){return react_1.default.createElement("div",{style:{width:"500px",height:"500px"}},react_1.default.createElement(_1.default,{hasBullets:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With auto sliding",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,auto:2e3},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With activeIndex (2)",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,activeIndex:2},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With activeIndex (interval)",(function(){var _a=react_1.useState(2),activeIndex=_a[0],setActiveIndex=_a[1];return react_1.useEffect((function(){var id=setInterval((function(){var index=activeIndex+1%images.length;setActiveIndex(index)}),2e3);return function(){clearInterval(id)}})),react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,activeIndex:activeIndex},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom setSlide function",(function(){var _a=react_1.useState(0),activeIndex=_a[0];_a[1];return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,activeIndex:activeIndex,setSlideCustom:function(slide){return 1}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With different `bulletStyle`",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,bulletStyle:{backgroundColor:"#fff"}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom `bullets`",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,BulletComponent:function(_a){var onClick=_a.onClick,isActive=_a.isActive;return react_1.default.createElement("li",{style:{width:"25px",height:"25px",backgroundColor:"red",margin:"0 2px",opacity:isActive?"0.5":void 0},onClick:onClick})}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With arrows",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom arrow style",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,arrowStyle:{border:"solid red",borderWidth:"0 5px 5px 0"}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom arrow component",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,ArrowComponent:function(_a){var onClick=_a.onClick,direction=_a.direction;return react_1.default.createElement("div",{style:{border:"1px solid black",padding:"1em",backgroundColor:"white"},onClick:onClick},direction)}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With arrows and bullets",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,hasBullets:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With onClick",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,onSlideChange:onSlideChange},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image),onClick:function(){return console.log("click")}})}))))})).add("With slidesAtOnce 2",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{slidesAtOnce:2,hasArrows:!0,hasBullets:!0,onSlideChange:onSlideChange},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))}))}).call(this,__webpack_require__(78)(module))},622:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,react_1=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(165)),react_spring_1=__webpack_require__(627),react_use_gesture_1=__webpack_require__(624),arrow_1=__importDefault(__webpack_require__(625)),bullet_1=__importDefault(__webpack_require__(626)),StyledSliderArrows=styled_components_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"],["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),StyledBulletList=styled_components_1.default.ul(templateObject_2||(templateObject_2=__makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 15px 0;\n"],["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 15px 0;\n"]))),StyledBullets=styled_components_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"],["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"]))),StyledWrapper=styled_components_1.default.div(templateObject_4||(templateObject_4=__makeTemplateObject(["\n\twidth: 100%;\n\theight: 100%;\n"],["\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlider=styled_components_1.default.div(templateObject_5||(templateObject_5=__makeTemplateObject(["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"],["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlide=styled_components_1.default.div(templateObject_6||(templateObject_6=__makeTemplateObject(["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n\tpointer-events: none;\n"],["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n\tpointer-events: none;\n"])));exports.default=function(_a){var _b=_a.activeIndex,activeIndex=void 0===_b?0:_b,ArrowComponent=_a.ArrowComponent,_c=_a.arrowStyle,arrowStyle=void 0===_c?{}:_c,_d=_a.auto,auto=void 0===_d?0:_d,BulletComponent=_a.BulletComponent,_e=_a.bulletStyle,bulletStyle=void 0===_e?{}:_e,_f=_a.children,children=void 0===_f?[]:_f,_g=_a.hasArrows,hasArrows=void 0!==_g&&_g,_h=_a.hasBullets,hasBullets=void 0!==_h&&_h,_j=_a.onSlideChange,onSlideChange=void 0===_j?function(){}:_j,_k=_a.setSlideCustom,setSlideCustom=void 0===_k?void 0:_k,_l=_a.slidesAtOnce,slidesAtOnce=void 0===_l?1:_l,sliderRef=react_1.useRef(null),_m=react_1.useState(0),slide=_m[0],setSlideOriginal=_m[1],setSlide=setSlideCustom?function(index){return setSlideOriginal(setSlideCustom(index))}:setSlideOriginal,_o=react_1.useState(!1),isDragging=_o[0],setDragging=_o[1],_p=react_spring_1.useSprings(children.length,(function(index){return{offset:index}})),springProps=_p[0],setSpringProps=_p[1],gestureBinds=react_use_gesture_1.useGesture({onDrag:function(_a){var input,lower,upper,down=_a.down,xDelta=_a.movement[0],xDir=_a.direction[0],distance=_a.distance,cancel=_a.cancel;if(_a.first&&setDragging(!0),sliderRef&&sliderRef.current&&sliderRef.current.parentElement){var width_1=sliderRef.current.parentElement.getBoundingClientRect().width;down&&distance>width_1/2&&(cancel&&cancel(),setSlide((input=slide+(xDir>0?-1:1),lower=0,upper=children.length-slidesAtOnce,Math.min(Math.max(input,lower),upper)))),setSpringProps((function(index){return{offset:(down?xDelta:0)/width_1+(index-slide)}}))}},onClick:function(){isDragging?setDragging(!1):clickOnSlide(slide)}},{drag:{delay:200}});react_1.useEffect((function(){setSpringProps((function(index){return{offset:index-slide}})),onSlideChange(slide)}),[slide,setSpringProps,onSlideChange]),react_1.useEffect((function(){var interval;return auto>0&&(interval=setInterval((function(){var targetIndex=(slide+1)%children.length;setSlide(targetIndex)}),auto)),function(){interval&&clearInterval(interval)}}),[auto,children.length,slide]),react_1.useEffect((function(){setSlide(activeIndex%children.length)}),[activeIndex,children.length]);var childs=children.map((function(child,index){return react_1.default.createElement(StyledSlide,{key:index},child)})),clickOnSlide=function(slideIndex){childs[slideIndex].props.children.props.onClick&&childs[slideIndex].props.children.props.onClick()};return react_1.default.createElement(StyledWrapper,{ref:sliderRef},react_1.default.createElement(StyledSlider,null,hasArrows&&react_1.default.createElement(StyledSliderArrows,null,react_1.default.createElement(arrow_1.default,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"left",onClick:function(){setSlide(0!==slide?slide-1:children.length-slidesAtOnce)}}),react_1.default.createElement(arrow_1.default,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"right",onClick:function(){slide!==children.length-slidesAtOnce?setSlide(slide+1):setSlide(0)}})),hasBullets&&react_1.default.createElement(StyledBullets,null,react_1.default.createElement(StyledBulletList,null,function(){for(var arr=[],index=0;index<=children.length-slidesAtOnce;index++)arr.push(react_1.default.createElement(bullet_1.default,{key:index,index:index,BulletComponent:BulletComponent,setSlide:setSlide,activeIndex:slide,bulletStyle:bulletStyle}));return arr}())),springProps.map((function(_a,index){var offset=_a.offset;return react_1.default.createElement(react_spring_1.animated.div,__assign({},gestureBinds(),{key:index,className:"slider__slide",style:{transform:offset.interpolate((function(offsetX){return"translate3d("+100*offsetX+"%, 0, 0)"})),position:"absolute",width:100/slidesAtOnce+"%",height:"100%",willChange:"transform"}}),childs[index])}))))}},625:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),StyledI=__importDefault(__webpack_require__(165)).default.i(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\ttransform: ",";\n\n\t","\n"],["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\ttransform: ",";\n\n\t","\n"])),(function(_a){return"left"===_a.direction?"rotate(135deg)":"rotate(-45deg)"}),(function(_a){return"left"===_a.direction?"margin-left: 1em;":"margin-right: 1em;"})),Arrow=function(_a){var ArrowComponent=_a.ArrowComponent,arrowStyle=_a.arrowStyle,onClick=_a.onClick,direction=_a.direction;return ArrowComponent?react_1.default.createElement(ArrowComponent,{direction:direction,onClick:onClick}):react_1.default.createElement("a",{onClick:onClick},react_1.default.createElement(StyledI,{style:arrowStyle,direction:direction}))};Arrow.defaultProps={ArrowComponent:void 0,arrowStyle:{}},exports.default=Arrow},626:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),StyledBullet=__importDefault(__webpack_require__(165)).default.li(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"],["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"])),(function(_a){return _a.active?"opacity: 0.5":""})),Bullet=function(_a){var index=_a.index,BulletComponent=_a.BulletComponent,setSlide=_a.setSlide,activeIndex=_a.activeIndex,bulletStyle=_a.bulletStyle,updateSlide=function(){setSlide(index)};return BulletComponent?react_1.default.createElement(BulletComponent,{key:index,isActive:index===activeIndex,onClick:updateSlide}):react_1.default.createElement(StyledBullet,{key:index,active:index===activeIndex,style:bulletStyle,onClick:updateSlide})};Bullet.defaultProps={BulletComponent:void 0,bulletStyle:{}},exports.default=Bullet}},[[277,1,2]]]);
//# sourceMappingURL=main.92ed6abf2f06726ea00a.bundle.js.map