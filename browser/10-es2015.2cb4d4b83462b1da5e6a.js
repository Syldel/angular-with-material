(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+1Nq":function(e,t,i){"use strict";i.r(t),i.d(t,"ImagesPageModule",(function(){return f}));var o=i("ofXK"),r=i("sQLz"),a=i("xJgJ"),s=i("tyNb"),c=i("fXoL");let n=(()=>{class e{constructor(e,t,i,o){this.loaderSrc=e,this.errorSrc=t,this.renderer=i,this.el=o}ngOnInit(){this.loadImage()}loadImage(){if(this.imgSrc&&""!==this.imgSrc){const e=new Image;e.onload=()=>{this.renderer.setAttribute(this.el.nativeElement,"src",this.imgSrc)},e.onerror=()=>{this.renderer.setAttribute(this.el.nativeElement,"src",this.errorSrc)},e.src=this.imgSrc,this.renderer.setAttribute(this.el.nativeElement,"src",this.loaderSrc)}}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275injectAttribute"]("loaderSrc"),c["\u0275\u0275injectAttribute"]("errorSrc"),c["\u0275\u0275directiveInject"](c.Renderer2),c["\u0275\u0275directiveInject"](c.ElementRef))},e.\u0275dir=c["\u0275\u0275defineDirective"]({type:e,selectors:[["img","appImageLoader",""]],inputs:{imgSrc:"imgSrc"}}),e})();function d(e,t){if(1&e&&c["\u0275\u0275element"](0,"img",3),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275propertyInterpolate"]("imgSrc",e.url)}}function l(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",1),c["\u0275\u0275listener"]("deferLoad",(function(){return t.$implicit.show=!0})),c["\u0275\u0275template"](1,d,1,1,"img",2),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.show)}}const p=[{path:"",component:(()=>{class e{constructor(){this.imageItemCollection=[]}ngOnInit(){this.imageItemCollection=[{url:"https://images.unsplash.com/photo-1512672378591-74fbb56b1d28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=111881731843c98860fd6ede341337d7&auto=format&fit=crop&w=1350&q=80",show:!1},{url:"https://images.unsplash.com/photo-1486495939893-f384c2860f55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf36a4694839666ab094bcdd0bb88651&auto=format&fit=crop&w=1350&q=80",show:!1},{url:"https://images.unsplash.com/photo-1514913274516-4aa04f176f8c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6940b0c53d64fc564bed31bb6aa8d9b&auto=format&fit=crop&w=1760&q=80",show:!1},{url:"https://images.unsplash.com/photo-1523286877159-d9636545890c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f44497f72d77b9e8e27e87521e025edc&auto=format&fit=crop&w=1351&q=80",show:!1},{url:"https://images.unsplash.com/photo-1459886757952-87e191b82aeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c977d9f0c074c220a31f1e89449c3aa&auto=format&fit=crop&w=1350&q=80",show:!1},{url:"https://images.unsplash.com/photo-1519423961530-9131478718db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6132d79c5060ba00caa99cf39457da6&auto=format&fit=crop&w=1350&q=80",show:!1},{url:"https://images.unsplash.com/photo-1482510356941-d087154c2931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd6c067c548407960ec92f1e820775ee&auto=format&fit=crop&w=1355&q=80",show:!1},{url:"https://images.unsplash.com/photo-1520507215037-061ed0f37178?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b0ee4f4dcd684859da448cc26c707a2&auto=format&fit=crop&w=1350&q=80",show:!1},{url:"https://images.unsplash.com/photo-1522447984233-657d56c465d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2efa4e73b38094995897590487ba5b4&auto=format&fit=crop&w=1350&q=80",show:!1}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-images-page"]],decls:5,vars:1,consts:[["class","app-images-page__image-container",3,"deferLoad",4,"ngFor","ngForOf"],[1,"app-images-page__image-container",3,"deferLoad"],["appImageLoader","","src","","alt","photo","errorSrc","/assets/svg/undraw_default_photo.svg","loaderSrc","/assets/svg/loading.svg",3,"imgSrc",4,"ngIf"],["appImageLoader","","src","","alt","photo","errorSrc","/assets/svg/undraw_default_photo.svg","loaderSrc","/assets/svg/loading.svg",3,"imgSrc"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"h1"),c["\u0275\u0275text"](1,"Images page"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275text"](3,"Lazy loading of images example"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](4,l,2,1,"div",0)),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",t.imageItemCollection))},directives:[o.NgForOf,r.DeferLoadDirective,o.NgIf,n],styles:["[_nghost-%COMP%]{display:block;background-color:#cfc}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-width:500px}[_nghost-%COMP%]   .app-images-page__image-container[_ngcontent-%COMP%], [_nghost-%COMP%]   img[_ngcontent-%COMP%]{height:350px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c.forChild(p)],s.c]}),e})(),f=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,m,r.DeferLoadModule,a.a]]}),e})()}}]);