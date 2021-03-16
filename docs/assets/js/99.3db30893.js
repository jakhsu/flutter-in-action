(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{465:function(t,a,n){t.exports=n.p+"assets/img/5-9.47017753.png"},792:function(t,a,n){"use strict";n.r(a);var s=n(45),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-3-装饰容器decoratedbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-装饰容器decoratedbox"}},[t._v("#")]),t._v(" 5.3 装饰容器DecoratedBox")]),t._v(" "),s("p",[s("code",[t._v("DecoratedBox")]),t._v("可以在其子组件绘制前(或后)绘制一些装饰（Decoration），如背景、边框、渐变等。"),s("code",[t._v("DecoratedBox")]),t._v("定义如下：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DecoratedBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Decoration decoration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  DecorationPosition position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DecorationPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("background"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Widget child\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("decoration")]),t._v("：代表将要绘制的装饰，它的类型为"),s("code",[t._v("Decoration")]),t._v("。"),s("code",[t._v("Decoration")]),t._v("是一个抽象类，它定义了一个接口 "),s("code",[t._v("createBoxPainter()")]),t._v("，子类的主要职责是需要通过实现它来创建一个画笔，该画笔用于绘制装饰。")]),t._v(" "),s("li",[s("code",[t._v("position")]),t._v("：此属性决定在哪里绘制"),s("code",[t._v("Decoration")]),t._v("，它接收"),s("code",[t._v("DecorationPosition")]),t._v("的枚举类型，该枚举类有两个值：\n"),s("ul",[s("li",[s("code",[t._v("background")]),t._v("：在子组件之后绘制，即背景装饰。")]),t._v(" "),s("li",[s("code",[t._v("foreground")]),t._v("：在子组件之上绘制，即前景。")])])])]),t._v(" "),s("h4",{attrs:{id:"boxdecoration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boxdecoration"}},[t._v("#")]),t._v(" BoxDecoration")]),t._v(" "),s("p",[t._v("我们通常会直接使用"),s("code",[t._v("BoxDecoration")]),t._v("类，它是一个Decoration的子类，实现了常用的装饰元素的绘制。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Color color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//颜色")]),t._v("\n  DecorationImage image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图片")]),t._v("\n  BoxBorder border"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//边框")]),t._v("\n  BorderRadiusGeometry borderRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//圆角")]),t._v("\n  List"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BoxShadow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" boxShadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//阴影,可以指定多个")]),t._v("\n  Gradient gradient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//渐变")]),t._v("\n  BlendMode backgroundBlendMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//背景混合模式")]),t._v("\n  BoxShape shape "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BoxShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//形状")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("各个属性名都是自解释的，详情读者可以查看API文档。下面我们实现一个带阴影的背景色渐变的按钮：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DecoratedBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    decoration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      gradient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LinearGradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//背景渐变")]),t._v("\n      borderRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BorderRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("circular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3像素圆角")]),t._v("\n      boxShadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//阴影")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BoxShadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("black54"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Offset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            blurRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("symmetric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("horizontal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("运行后效果如图5-9所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(465),alt:"图5-9"}})]),t._v(" "),s("p",[t._v("怎么样，通过"),s("code",[t._v("BoxDecoration")]),t._v("我们实现了一个渐变按钮的外观，但此示例还不是一个标准的按钮，因为它还不能响应点击事件，我们将在后面“自定义组件”一章中实现一个完整功能的"),s("code",[t._v("GradientButton")]),t._v("。另外，上面的例子中使用了"),s("code",[t._v("LinearGradient")]),t._v("类，它用于定义线性渐变的类，Flutter中还提供了其它渐变配置类，如"),s("code",[t._v("RadialGradient")]),t._v("、"),s("code",[t._v("SweepGradient")]),t._v("，读者若有需要可以自行查看API文档。")])])}),[],!1,null,null,null);a.default=e.exports}}]);