(self.webpackChunk=self.webpackChunk||[]).push([[991],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},867:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(7560),a=r(8283),i=(r(2784),r(876)),o={},l={unversionedId:"core",id:"core",isDocsHomePage:!1,title:"core",description:"guide-sdk core \u6307\u7684\u662f\u65b0\u624b\u5f15\u5bfc\u6846\u67b6\u7684\u6838\u5fc3\u5c42\uff0c\u4e3b\u8981\u5de5\u4f5c\u662f\u89e3\u91ca\u548c\u6267\u884c\u6d41\u7a0b\u8bed\u6cd5\u3002\u540c\u65f6\u63d2\u4ef6\u5f00\u53d1\u4e5f\u53ef\u4ee5\u4f7f\u7528 core \u4e2d\u7684\u76f8\u5173\u5c5e\u6027\u548c\u65b9\u6cd5\u3002",source:"@site/docs/core.md",sourceDirName:".",slug:"/core",permalink:"/docs/core",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"\u63d2\u4ef6\u673a\u5236",permalink:"/docs/plugins"},next:{title:"utils",permalink:"/docs/utils"}},u=[{value:"constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[]},{value:"methods",id:"methods",children:[{value:"trigger",id:"trigger",children:[]},{value:"activate",id:"activate",children:[]},{value:"start",id:"start",children:[]},{value:"pause",id:"pause",children:[]},{value:"resume",id:"resume",children:[]},{value:"next",id:"next",children:[]},{value:"intercept",id:"intercept",children:[]}]}],s={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"guide-sdk core \u6307\u7684\u662f\u65b0\u624b\u5f15\u5bfc\u6846\u67b6\u7684\u6838\u5fc3\u5c42\uff0c\u4e3b\u8981\u5de5\u4f5c\u662f\u89e3\u91ca\u548c\u6267\u884c\u6d41\u7a0b\u8bed\u6cd5\u3002\u540c\u65f6\u63d2\u4ef6\u5f00\u53d1\u4e5f\u53ef\u4ee5\u4f7f\u7528 core \u4e2d\u7684\u76f8\u5173\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"guide-sdk core \u652f\u6301\u4f7f\u7528\u5982\u4e0b\u53c2\u6570\u8fdb\u884c\u5b9e\u4f8b\u5316\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props = {\n    driverOptions: Driver.DriverOptions // Driver \u914d\u7f6e\u53c2\u6570\n    config?: GuideConfig                // \u57fa\u672c\u914d\u7f6e\n    services?: Services                 // \u6ce8\u518c\u4e1a\u52a1API\n    Plugins?: PluginType[]              // \u81ea\u5b9a\u4e49Plugin\n    history: History                    // \u8def\u7531\u7ba1\u7406\u5b9e\u4f8b\n    guides: Guides                      // \u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\u6ce8\u518c\n}\n\ntype GuideConfig = Partial<{\n  elementCheckMaxTimes: number\n}>\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"guide-sdk core \u4e2d\u53ef\u4ee5\u8bbf\u95ee\u5230\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"driver\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://kamranahmed.info/driver.js/"},"driver.js")," \u5b9e\u4f8b\uff1b"),(0,i.kt)("li",{parentName:"ul"},"driverOptions\uff1aDriver \u914d\u7f6e\u53c2\u6570\uff1b"),(0,i.kt)("li",{parentName:"ul"},"history\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/history"},"History"),"\u5b9e\u4f8b\uff0c\u7528\u4e8e\u7ba1\u7406\u8def\u7531\uff1b"),(0,i.kt)("li",{parentName:"ul"},"config: \u65b0\u624b\u5f15\u5bfc\u6846\u67b6\u57fa\u672c\u914d\u7f6e\uff1b"),(0,i.kt)("li",{parentName:"ul"},"services\uff1a",(0,i.kt)("a",{parentName:"li",href:"/docs/services"},"SPI"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"guides\uff1a\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\uff1b"),(0,i.kt)("li",{parentName:"ul"},"hooks\uff1a",(0,i.kt)("a",{parentName:"li",href:"/docs/hooks"},"\u751f\u547d\u5468\u671f\u94a9\u5b50"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"currentIndex\uff1a\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\u7684\u5f53\u524d\u6b65\u9aa4\uff1b")),(0,i.kt)("h2",{id:"methods"},"methods"),(0,i.kt)("p",null,"guide-sdk core \u4e2d\u53ef\u4ee5\u8bbf\u95ee\u5230\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"trigger"},"trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(name: string | Array","<","string[] | string",">",", ...args) =",">"," Promise","<","void",">")),(0,i.kt)("p",null,"\u89e6\u53d1\u6307\u5b9a\u7684 SPI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u6682\u505c1\u79d2\nguide.trigger("timeout", 1000)\n\n// \u5148\u6682\u505c1\u79d2\uff0c\u518d\u6682\u505c\u4e24\u79d2\nguide.trigger([\n    ["timeout", 1000],\n    ["timeout", 2000]\n])\n')),(0,i.kt)("h3",{id:"activate"},"activate"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"() => void")),(0,i.kt)("p",null,"\u542f\u7528\u65b0\u624b\u5f15\u5bfc\u5e76\u6ce8\u518c\u6267\u884c\u63d2\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"guide.activate()\n")),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(guide: string | GuideType) =",">"," Promise","<","void",">")),(0,i.kt)("p",null,"\u6267\u884c\u6307\u5b9a\u7684\u65b0\u624b\u5f15\u5bfc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u6267\u884c id \u4e3a 1 \u7684\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\nguide.start(1)\n\n// \u6267\u884c\u6307\u5b9a\u7684\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\nguide.start({\n    "steps": [...]\n})\n')),(0,i.kt)("h3",{id:"pause"},"pause"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"() =",">"," void")),(0,i.kt)("p",null,"\u6682\u505c\u65b0\u624b\u5f15\u5bfc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"guide.pause()\n")),(0,i.kt)("h3",{id:"resume"},"resume"),(0,i.kt)("p",null,"\u6062\u590d\u65b0\u624b\u5f15\u5bfc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"guide.resume()\n")),(0,i.kt)("h3",{id:"next"},"next"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"() =",">"," void")),(0,i.kt)("p",null,"\u6267\u884c\u65b0\u624b\u5f15\u5bfc\u7684\u4e0b\u4e00\u6b65"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"guide.next()\n")),(0,i.kt)("h3",{id:"intercept"},"intercept"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(func: Function, ...args: any[]) =",">"," Promise","<","any",">")),(0,i.kt)("p",null,"\u62e6\u622a\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"guide.intercept(async () => {\n    await new Promise((resolve, reject) => {\n        if(...) {\n            // resolve to resume\n            resolve()\n        } else {\n            // reject to abort\n            reject()\n        }\n    })\n\n    // you can return dispatcher for clean\n    return () => { ... }\n})\n")))}c.isMDXComponent=!0}}]);