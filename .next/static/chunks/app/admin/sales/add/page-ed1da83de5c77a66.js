(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9019],{2330:function(e,r,a){Promise.resolve().then(a.bind(a,941))},6167:function(e,r,a){"use strict";a.d(r,{Z:function(){return i}});var t=a(3955),l=a(2235);function i(e){let{options:r,defaultValue:a,value:i,getLabel:s,name:n,id:o,getValue:c,onChange:d}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.ZP,{defaultValue:a||null,isClearable:!0,isSearchable:!0,id:o,name:n,options:r,getOptionLabel:s,getOptionValue:c,value:i,onChange:e=>{"function"==typeof d&&d(e)}})})}},941:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return d}});var t=a(3955),l=a(207);a(1491),a(1014);var i=(0,a(9838).Z)("e17eb27bec35daf9740676d48fc48764de044164"),s=a(6167),n=a(2310),o=a(474),c=a(6008),d=e=>{let{clients:r,products:a,partners:d}=e,[u,m]=(0,n.useState)([]),[p,g]=(0,n.useState)(""),[x,y]=(0,n.useState)(null),[h,f]=(0,n.useState)(null),[b,v]=(0,n.useState)(null),[j,N]=(0,n.useState)(!1),k=(0,n.useRef)(null),w=(0,c.useRouter)();async function S(){N(!0);try{if(x&&p){console.log("url","".concat("https://ayurarogyam.co.in/api","/filteredPrices?productId=").concat(null==x?void 0:x.id,"&clientTypeId=").concat(null==h?void 0:h.clientTypeId,"&qty=").concat(p));let e=await fetch("".concat("https://ayurarogyam.co.in/api","/filteredPrices?productId=").concat(null==x?void 0:x.id,"&clientTypeId=").concat(null==h?void 0:h.clientTypeId,"&qty=").concat(p),{cache:"no-cache"});if(e.ok){let r=await e.json();console.log("response filtered prices: ".concat(r));let a={product:x,productId:x.id,price:Number(r.amount),total:r.amount*Number(p),qty:Number(p)};m([...u,a]),g(""),y(null),N(!1)}else N(!1),o.toast.error("Error adding items!",{position:o.toast.POSITION.TOP_CENTER}),console.error("Error fetching data")}}catch(e){N(!1),console.log("filteres prices",e),o.toast.error("Error adding items!",{position:o.toast.POSITION.TOP_CENTER})}}async function _(e){let{client:r,date:a,visitType:t,remarks:l}=Object.fromEntries(e),s={clientId:r.toString(),visitType:t.toString(),remarks:l.toString(),date:a.toString(),partnerId:b?b.toString():"",partner:b,productWithPrices:u};console.log("sales Input:"),console.log(s.partner);try{N(!0),console.log("sales add call");let e=await i(s);void 0!=e&&(N(!1),w.push("/admin/sales/list"))}catch(e){N(!1),o.toast.error(e.message,{position:o.toast.POSITION.TOP_CENTER})}}return(0,t.jsxs)("section",{className:"bg-white dark:bg-gray-900",children:[(0,t.jsx)(o.ToastContainer,{}),j&&(0,t.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-gray-300 opacity-75 flex items-center justify-center z-50",children:(0,t.jsx)(l.$j,{"aria-label":"Info spinner example",color:"info"})}),(0,t.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-2xl lg:py-16",children:[(0,t.jsx)("h2",{className:"mb-4 text-xl font-bold text-gray-900 dark:text-white",children:"New Sale /  Follow - up"}),(0,t.jsxs)("form",{className:"space-y-4 md:space-y-6 ",action:_,children:[(0,t.jsxs)("div",{className:"max-w-lg",id:"selectDate",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.__,{htmlFor:"date",value:"Select Date",id:"date"})}),(0,t.jsx)(l.aN,{name:"date",id:"date",required:!0})]}),(0,t.jsxs)("div",{className:"max-w-lg",id:"client",children:[(0,t.jsx)(l.__,{htmlFor:"client",value:"Select Client",id:"client"}),(0,t.jsx)(s.Z,{id:"client",name:"client",value:h,options:r,getLabel:e=>"".concat(e.name),getValue:e=>"".concat(e.id),onChange:function(e){f(e)}})]}),(0,t.jsxs)("div",{className:"max-w-lg",id:"partner",children:[(0,t.jsx)(l.__,{htmlFor:"partner",value:"Select Partner",id:"partner"}),(0,t.jsx)(s.Z,{id:"partner",name:"partner",value:b,options:d,getLabel:e=>"".concat(e.name),getValue:e=>"".concat(e),onChange:function(e){console.log(e),v(e)}})]}),(0,t.jsxs)("div",{className:"max-w-lg",id:"visitType",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.__,{htmlFor:"visitType",value:"Select Visit Type"})}),(0,t.jsx)(l.Ph,{id:"visitType",name:"visitType",required:!0,children:[{label:"Sale",value:"0"},{label:"follow-up",value:"1"}].map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)("div",{className:"max-w-lg",id:"remarks",children:[(0,t.jsx)(l.__,{htmlFor:"remarks",value:"Remarks",id:"remarks"}),(0,t.jsx)("textarea",{name:"remarks",rows:4,id:"remarks",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Remarks"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-y-2 md:gap-x-2 md:grid-cols-3 justify-between  max-w-xl",children:[(0,t.jsxs)("div",{className:"max-w-md",children:[(0,t.jsx)(l.__,{htmlFor:"product",value:"Select Product",id:"product"}),(0,t.jsx)(s.Z,{name:"product",id:"product",options:a,getLabel:e=>"".concat(e.name),getValue:e=>"".concat(e.id),onChange:function(e){y(e)},value:x})]}),(0,t.jsxs)("div",{className:"max-w-md",children:[(0,t.jsx)(l.__,{htmlFor:"qty",value:"Enter Quantity",id:"qty"}),(0,t.jsx)("input",{type:"text",name:"qty",onChange:e=>g(e.target.value),value:p,id:"qty",ref:k,className:"bg-gray-50  max-w-md border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Quantity"})]}),(0,t.jsx)(l.zx,{size:"xs",onClick:S,className:" w-1/4 md:w-full bg-primary-600 hover:bg-primary-700 self-end  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg h-10  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:(0,t.jsx)("p",{className:"text-white font-medium  text-sm",children:"Add Item"})})]}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"divide-y divide-gray-200",children:u.map((e,r)=>{var a;return(0,t.jsx)("li",{className:"py-2",children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-lg font-semibold",children:null===(a=e.product)||void 0===a?void 0:a.name}),(0,t.jsxs)("p",{children:["Qty: ",e.qty.toString()]})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("p",{className:"text-lg font-semibold",children:["₹",e.price]})})]})},r)})})}),(0,t.jsx)(l.zx,{size:"xs",type:"submit",className:"w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:(0,t.jsx)("p",{className:"text-white font-medium  text-sm",children:"Add Sale"})})]})]})]})}}},function(e){e.O(0,[3296,6877,8874,6279,9094,792,2704,5801,1744],function(){return e(e.s=2330)}),_N_E=e.O()}]);