module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__vue_exports__=__webpack_require__(1);var __vue_template__=__webpack_require__(2);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"vueInstant",props:{value:{type:String,required:!0},suggestions:{type:Array,required:!0},suggestionAttribute:{type:String,required:!0},placeholder:{type:String,default:"write something..."},minMatch:{type:Number,default:2},name:{type:String,default:"vueInstant"},autofocus:{type:Boolean,default:!0},disabled:{type:Boolean},type:{type:String,default:"facebook"},showAutocomplete:{type:Boolean,default:!0}},data:function(){return{selectedEvent:null,selectedSuggest:null,inputChanged:!1,highlightedIndex:0,highlightedIndexMax:7,textVal:this.value,similiarData:[],placeholderVal:this.placeholder,types:[{name:"facebook",formClass:"searchbox sbx-facebook",classWrapper:"sbx-facebook__wrapper",classInput:"sbx-facebook__input",classInputPlaceholder:"sbx-facebook__input-placeholder",classSubmit:"sbx-facebook__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-facebook__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__facebook"},{name:"google",formClass:"searchbox sbx-google",classWrapper:"sbx-google__wrapper",classInput:"sbx-google__input",classInputPlaceholder:"sbx-google__input-placeholder",classSubmit:"sbx-google__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-google__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__google"},{name:"amazon",formClass:"searchbox sbx-amazon",classWrapper:"sbx-amazon__wrapper",classInput:"sbx-amazon__input",classInputPlaceholder:"sbx-amazon__input-placeholder",classSubmit:"sbx-amazon__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-amazon__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__amazon"},{name:"twitter",formClass:"searchbox sbx-twitter",classWrapper:"sbx-twitter__wrapper",classInput:"sbx-twitter__input",classInputPlaceholder:"sbx-twitter__input-placeholder",classSubmit:"sbx-twitter__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-twitter__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__twitter"},{name:"spotify",formClass:"searchbox sbx-spotify",classWrapper:"sbx-spotify__wrapper",classInput:"sbx-spotify__input",classInputPlaceholder:"sbx-spotify__input-placeholder",classSubmit:"sbx-spotify__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-spotify__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__spotify"},{name:"custom",formClass:"searchbox sbx-custom",classWrapper:"sbx-custom__wrapper",classInput:"sbx-custom__input",classInputPlaceholder:"sbx-custom__input-placeholder",classSubmit:"sbx-custom__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-custom__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__custom"}]}},computed:{getPlaceholder:function(){if(this.inputChanged||this.textValIsEmpty())return this.placeholderVal},modeIsFull:function(){return this.showAutocomplete},showSuggestions:function(){return this.similiarData.length>=this.minMatch},getPropertiesClass:function(){var type=this.getType();return type.properties},getFormClass:function(){var type=this.getType();return type.formClass},getClassWrapper:function(){var type=this.getType();return type.classWrapper},getClassInput:function(){var type=this.getType();return type.classInput},getClassInputPlaceholder:function(){var type=this.getType();return type.classInputPlaceholder},getClassSubmit:function(){var type=this.getType();return type.classSubmit},getSVGSearch:function(){var type=this.getType();return type.svgSearch},getClassReset:function(){var type=this.getType();return type.classReset},getSVGClear:function(){var type=this.getType();return type.svgClear}},methods:{decrementHighlightedIndex:function(){this.highlightedIndex-=1},incrementHighlightedIndex:function(){this.highlightedIndex+=1},escapeAction:function(){this.clearHighlightedIndex(),this.clearSimilarData(),this.clearSelected(),this.setBlur(),this.emitEscape()},arrowRightAction:function(){this.setPlaceholderAndTextVal(),this.emitKeyRight()},arrowDownAction:function(){this.arrowDownValidation()?(this.incrementHighlightedIndex(),this.setPlaceholderAndTextVal(),this.emitKeyDown()):this.clearHighlightedIndex()},arrowUpAction:function(){this.highlightedIndex>0?(this.decrementHighlightedIndex(),this.setPlaceholderAndTextVal(),this.emitKeyUp()):this.clearHighlightedIndex()},enterAction:function(){this.setFinalTextValue(),this.clearHighlightedIndex(),this.clearSimilarData(),this.emitEnter()},selectedAction:function(index){this.highlightedIndex=index,this.setFinalTextValue(),this.clearPlaceholder(),this.clearSimilarData(),this.emitSelected()},addRegister:function(o){this.isSimilar(o)&&this.textValIsNotEmpty()&&this.addSuggestion(o)},addSuggestion:function(o){this.findSuggestionTextIsRepited(o)||this.addToSimilarData(o)},addToSimilarData:function(o){this.canAddToSimilarData()&&(this.placeholderVal=this.letterProcess(o),this.selectedSuggest=o,this.emitSelected(),this.similiarData.unshift(o))},setTextValue:function(e){e.target.value.trim()&&(this.textVal=e.target.value,this.emitChange())},setSelectedAsTextValue:function(){this.textVal=this.selected},setInitialTextValue:function(){this.textVal=this.value},setFinalTextValue:function(){this.finalTextValueValidation()?(this.setPlaceholderAndTextVal(),this.emitChange()):this.clearAll()},setPlaceholderAndTextVal:function(){if("undefined"!=typeof this.similiarData[this.highlightedIndex]){var suggest=this.similiarData[this.highlightedIndex];this.placeholderVal=suggest[this.suggestionAttribute],this.textVal=suggest[this.suggestionAttribute],this.selectedSuggest=suggest,this.emitSelected()}},setInitialPlaceholder:function(){this.placeholderVal=this.placeholder},setBlur:function(){this.$el.blur()},getType:function(){return this.types.find(this.isSameType)},getClassHighlighted:function(index){if(this.highlightedIndex===index){var type=this.getType();return type.highlighClass}},letterProcess:function(o){var remoteText=o[this.suggestionAttribute].split(""),inputText=this.textVal.split("");return inputText.forEach(function(letter,key){letter!==remoteText[key]&&(remoteText[key]=letter)}),remoteText.join("")},findSuggests:function(){this.suggestionsPropIsDefined()&&this.suggestions.forEach(this.addRegister)},arrowDownValidation:function(){return this.highlightedIndex<this.highlightedIndexMax&&this.highlightedIndex<this.similiarData.length-1},lowerFirst:function(string){return string.charAt(0).toLowerCase()+string.slice(1)},controlEvents:function(){var uncaptz=this.lowerFirst(this.selectedEvent+"Action"),fnName=this[uncaptz];this.fnExists(fnName)&&fnName()},findRepited:function(similarItem,o){return similarItem[this.suggestionAttribute]===o[this.suggestionAttribute]},findSuggestionTextIsRepited:function(o){return this.similiarData.find(this.findRepited.bind(this,o))},finalTextValueValidation:function(){return"undefined"!=typeof this.similiarData[this.highlightedIndex]||""===this.placeholderVal&&0!==this.highlightedIndex},isSimilar:function(o){if(o)return o[this.suggestionAttribute].toLowerCase().startsWith(this.textVal.toLowerCase())},isSameType:function(o){return o.name===this.type},fnExists:function(fnName){return"function"==typeof fnName},canAddToSimilarData:function(){return this.similiarData.length<this.highlightedIndexMax},suggestionsPropIsDefined:function(){return"undefined"!=typeof this.suggestions},notArrowKeysEvent:function(){return"ArrowUp"!==this.selectedEvent&&"ArrowDown"!==this.selectedEvent&&"ArrowRight"!==this.selectedEvent},notEnterKeyEvent:function(){return"Enter"!==this.selectedEvent},textValIsEmpty:function(){return""===this.textVal},textValIsNotEmpty:function(){return""!==this.textVal},reset:function(){this.clearValue(),this.clearSelected(),this.clearPlaceholder(),this.clearSimilarData(),this.clearSelectedSuggest(),this.emitSelected()},clearAll:function(){this.clearSelected(),this.clearPlaceholder(),this.clearSimilarData(),this.clearSelectedSuggest()},clearValue:function(){this.textVal=""},clearSelected:function(){this.selected=null},clearSelectedSuggest:function(){this.selectedSuggest=null},clearSimilarData:function(){this.similiarData=[]},clearPlaceholder:function(){this.textValIsEmpty()?(this.clearSimilarData(),this.setInitialPlaceholder()):this.placeholderVal=""},clearHighlightedIndex:function(){this.highlightedIndex=0},changeText:function(e){this.selectedEvent=e.code,this.setTextValue(e),this.processChangeText(),this.controlEvents(e)},processChangeText:function(e){this.notEnterKeyEvent()&&(this.inputChanged=!0,this.clearAllAndFindSuggest())},clearAllAndFindSuggest:function(){this.notArrowKeysEvent()&&(this.clearAll(),this.findSuggests())},emitChange:function(){this.$emit("input",this.textVal)},emitClickInput:function(event){this.$emit("clickInput",event)},emitClickButton:function(event){this.$emit("clickButton",this.textVal)},emitEnter:function(){this.$emit("enter")},emitKeyUp:function(){this.$emit("keyUp")},emitKeyDown:function(){this.$emit("keyDown",this.selectedSuggest)},emitKeyRight:function(){this.$emit("keyRight")},emitClear:function(){this.$emit("clear")},emitEscape:function(){this.$emit("escape")},emitClick:function(){this.$emit("autocompleteClick",this.selectedSuggest)},emitSelected:function(){this.$emit("selected",this.selectedSuggest)}}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"main"},[_c("form",{class:_vm.getFormClass,attrs:{novalidate:"novalidate",onsubmit:"return false;"}},[_c("div",{class:_vm.getClassWrapper,attrs:{role:"search"}},[_c("input",{class:_vm.getClassInputPlaceholder,attrs:{type:"search",name:"search",placeholder:_vm.getPlaceholder,autocomplete:"off",required:"required"}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.textVal,expression:"textVal"}],class:_vm.getClassInput,attrs:{disabled:_vm.disabled,type:"search",name:_vm.name,placeholder:"",autocomplete:"off",required:"required",autofocus:_vm.autofocus},domProps:{value:_vm._s(_vm.textVal)},on:{click:_vm.emitClickInput,keyup:_vm.changeText,input:function($event){$event.target.composing||(_vm.textVal=$event.target.value)}}}),_vm._v(" "),_c("button",{class:_vm.getClassSubmit,attrs:{type:"submit"},on:{click:_vm.emitClickButton}},[_c("svg",{attrs:{role:"img","aria-label":"Search"}},[_c("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":_vm.getSVGSearch}})])]),_vm._v(" "),_c("button",{class:_vm.getClassReset,attrs:{type:"reset"},on:{click:_vm.reset}},[_c("svg",{attrs:{role:"img","aria-label":"Reset"}},[_c("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":_vm.getSVGClear}})])]),_vm._v(" "),_vm.modeIsFull?_c("div",{staticClass:"el-input-group__append"},[_vm.showSuggestions?_c("ul",{staticClass:"vue-instant__suggestions"},_vm._l(_vm.similiarData,function(item,index){return _c("li",{class:_vm.getClassHighlighted(index),on:{click:function($event){_vm.selectedAction(index)}}},[_vm._v(_vm._s(item[_vm.suggestionAttribute]))])})):_vm._e()]):_vm._e()])])]),_vm._v(" "),_c("svg",{staticStyle:{display:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg"}},[_c("symbol",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"sbx-icon-search-8",viewBox:"0 0 40 40"}},[_c("path",{attrs:{d:"M16 32c8.835 0 16-7.165 16-16 0-8.837-7.165-16-16-16C7.162 0 0 7.163 0 16c0 8.835 7.163 16 16 16zm0-5.76c5.654 0 10.24-4.586 10.24-10.24 0-5.656-4.586-10.24-10.24-10.24-5.656 0-10.24 4.584-10.24 10.24 0 5.654 4.584 10.24 10.24 10.24zM28.156 32.8c-1.282-1.282-1.278-3.363.002-4.643 1.282-1.284 3.365-1.28 4.642-.003l6.238 6.238c1.282 1.282 1.278 3.363-.002 4.643-1.283 1.283-3.366 1.28-4.643.002l-6.238-6.238z","fill-rule":"evenodd"}})]),_vm._v(" "),_c("symbol",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"sbx-icon-clear-4",viewBox:"0 0 20 20"}},[_c("path",{attrs:{d:"M11.664 9.877l4.485 4.485-1.542 1.54-4.485-4.485-4.485 4.485-1.54-1.54 4.485-4.485-4.485-4.485 1.54-1.54 4.485 4.484 4.485-4.485 1.54 1.542-4.484 4.485zM10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z","fill-rule":"evenodd"}})])])])},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component("vueInstant",__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__.d(exports,"VueInstant",function(){return __WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default.a}),exports.install=install;var plugin={version:"0.0.10",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}]);