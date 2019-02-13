<template>
  <div class="container pl20">
    <!-- DOM -->
    <h2>
      <strong>{{title}}</strong>
    </h2>
    <br>
    <div>
      <P>
        {{intro}}
        <br>
        <em class="danger">注意：{{warning}}</em>
      </P>
    </div>
    <br>
    <!-- 节点层次 -->
    <h3>
      <strong>{{nodeLevel}}</strong>
    </h3>
    <div>
      <p>
        {{structure}}
        <br>
        <textarea class="htmlNode" :value="code"></textarea>
        <br>
        <span>{{documentNode}}</span>
        <br>
        <em class="danger">注意：{{warning1}}</em>
      </p>
    </div>
    <br>
    <!-- Node类型 -->
    <h3>
      <strong>Node类型</strong>
    </h3>
    <div>
      <span>{{nodeType}}</span>
      <br>
      <dl>
        <dd>
          Node.ELEMENT_NODE ：
          <span class="ml10">1 (元素)</span>
        </dd>
        <dd>
          Node.ATTRIBUTE_NODE：
          <span class="ml10">2 (属性)</span>
        </dd>
        <dd>
          Node.TEXT_NODE ：
          <span class="ml10">3 (代表元素或属性中的文本内容。)</span>
        </dd>
        <dd>
          Node.CDATA_SECTION_NODE ：
          <span class="ml10">4 (代表文档中的 CDATA 部分（不会由解析器解析的文本）。)</span>
        </dd>
        <dd>
          Node.ENTITY_REFERENCE_NODE ：
          <span class="ml10">5 (代表实体引用。)</span>
        </dd>
        <dd>
          Node.ENTITY_NODE ：
          <span class="ml10">6 ( 代表实体。)</span>
        </dd>
        <dd>
          Node.PROCESSING_INSTRUCTION_NODE ：
          <span class="ml10">7 (代表处理指令。)</span>
        </dd>
        <dd>
          Node.COMMENT_NODE ：
          <span class="ml10">8 (代表注释。)</span>
        </dd>
        <dd>
          Node.DOCUMENT_NODE ：
          <span class="ml10">9 (代表整个文档（DOM 树的根节点）)</span>
        </dd>
        <dd>
          Node.DOCUMENT_TYPE_NODE ：
          <span class="ml10">10 ( 向为文档定义的实体提供接口)</span>
        </dd>
        <dd>
          Node.DOCUMENT_FRAGMENT_NODE ：
          <span class="ml10">11 ( 代表轻量级的 Document 对象，能够容纳文档的某个部分)</span>
        </dd>
        <dd>
          Node.NOTATION_NODE：
          <span class="ml10">12 (代表 DTD 中声明的符号。)</span>
        </dd>
      </dl>
      <em class="danger">注意：{{warning2}}</em>
      <br>
      <dl class="tc ml55">
        <dt>查看具体信息可用 nodeName和 nodeValue</dt>
        <dd>
          <table class="tc ml55" border="1">
            <caption>常用类型</caption>
            <tr>
              <th></th>
              <th>nodeName</th>
              <th>nodeValue</th>
            </tr>
            <tr>
              <td>&nbsp; element &nbsp;</td>
              <td>标签名字</td>
              <td>null</td>
            </tr>
            <tr>
              <td>attr</td>
              <td>属性名</td>
              <td>属性值</td>
            </tr>
            <tr>
              <td>text</td>
              <td>text</td>
              <td>文本内容</td>
            </tr>
          </table>
        </dd>
        <dd>所有节点都有childNodes属性，保留着一个NodeList对象里面是所有子节点，它是伪数组，用于保存一组有序节点，和HTMLCollection、NamedNodeMap类似；
          <br>NamedNodeMap,随属性变化而变化
          <br>HTMLCollection：会随着文档结构改变而改变，有个namedItem(name)方法可查找伪数组中对应 name 的元素并返回；
          <br>NodeList：使用document.querySelectorAll 不会是动态的
          <br>将类数组转化为数组，DOM操作是JS程序中开销最大的部分，每次访问NodeList对象，都会运行一次查询，应该尽量减少DOM操作；
          <br>
          <span class="danger">此方法IE9以前无效
            <br>Array.prototype.slice.call(arr,0)
          </span>
        </dd>
        <dd>
          所有节点都有parentNode属性，指向父节点，
          <span
            class="danger"
          >兄弟节点可通过 previousSibling 和 nextSibling 查询，查询第一个和最后一个子节点分别为 firstChild 和 lastChild 跟 childNodes[0],childNodes[leng-1] 类似</span> 如果没有即为null。
        </dd>
        <dd>
          <span class="danger">hasChildNode()</span>方法检索节点是否包含子节点 有则返回 true。
        </dd>
        <dd>
          使用
          <span class="danger">appendChild(newNode)</span> 方法向childNodes最后添加子节点。
        </dd>
        <dd>
          使用
          <span class="danger">insertBefore( newNode , someNode )</span> 方法,在某个节点前插入节点，
          <span class="danger">如果 someNode 为 null 则插入方式和 appendChild 方法一样。</span>
        </dd>
        <dd>
          使用
          <span class="danger">replaceChild(newNode , someNode)</span>替换某个子节点，替换的节点将被移除,但还在文档中。
        </dd>
        <dd>
          使用
          <span class="danger">removeChild(someNode)</span>移除某个子节点。
        </dd>
        <dd>
          <p class="danger tc">以上方法必须先取得父节点（parentNode）属性，并且须有子节点。</p>
        </dd>
        <dd>
          <span class="blue">使用 someNode.cloneNode(Boolean) 复制节点 Boolean为true复制节点及子节点
            <br>Boolean为false 仅复制自身
            <br>cloneNode方法不会复制事件处理程序，JavaScript属性等（再指定情况下可复制），
            <br>IE则会复制所有特性，所以建议复制前先移除事件处理程序。
          </span>
        </dd>
        <dd>normalize()处理合并文档树中的文本节点</dd>
        <dd>splitText(num)分割文本节点，从第 num 位置开始分割</dd>
      </dl>
      <br>
    </div>
    <br>
    <!-- document类型 -->
    <h3>
      <strong>document类型</strong>
    </h3>
    <div>
      <p v-html="documentType"></p>
      <p>
        <span class="danger">除IE 以外 其他主流浏览器都可访问Dcument 构造函数及原型；
          <br>所有浏览器都可访问 HTMLDocument 构造函数及原型
        </span>
      </p>
      <p>
        所有浏览器都支持 document.documentElement（html) 和 document.body （body） 属性
        <br>
        <span class="danger">document.doctype 取得对
          <!DOCTYPE html>的引用
        </span>
        domain与URL相关联，dimain 可以设置值但是有限制，不能将它设置为 URL 中不包含的域
        <br>
        <span class="blue">假如 document.URL ==" www.aaa.com "
          <br>document.domain=" bbb.com",将会报错，正确赋值为document.domain="aaa.com "并且不能设置回 www.aaa.com
        </span>
      </p>

      <dl>
        <dt>查找元素节点：</dt>
        <dd>
          document.getElementById('myId') 如果有则返回该元素如果没有则为null,
          <span class="danger">区分大小写</span>
          <br>document.getElementsByTagName('element') element =>标签名(HTML页面不区分大小写，XML等会区分) 返回 一个 HTMLCollection 的伪数组
        </dd>
        <dd>document.getElementsByName(name)类似于上面的方法
          <br>document.forms 获取所有form表单
          <br>document.images 获取所有img
          <br>document.links 获取所有带herf 的 a 元素
        </dd>
        <dd>
          <br>document.querySelector(name) || el.querySelector(name) 查找遇到的第一个元素并返回它
          <br>name 可以是 element、className、id、p.class、p#id
        </dd>
        <dd>
          querySelectorAll()参数和querySelector一样，但返回的是所有匹配到的元素集合 NodeList;
        </dd>
        <dd>
        </dd>
      </dl>
        
    </div>
    <h3>
      <strong>Element类型</strong>
    </h3>
    <div>
      <p>
        通过 nodeName 或 tagName属性 访问标签名 HTML页面中标签名都是大写 XML/XHTML 与源代码保持一致，所以做判断时最好使用
        <span
          class="danger"
        >toLowerCase()</span> 方法转化为小写
      </p>
      <p>所有HTML元素都有 id,title (提示),lang,dir (对齐方式 ltr/rtl),className (与 class 对应)属性并且可修改</p>
      <h4>元素属性</h4>
      <p>
        通过 getAttribute(name) 来获取元素属性值
        <span class="danger">不区分大小写</span>; 公认属性可直接以对象的方式访问，自定义属性则不行（IE除外）
        <br>通过 setAttribute(name,value) 来设置属性，name将全部转化为小写，如果属性存在则替换值，如果不存在则新增属性
        <br>
      </p>
      <p>通过removeAttribute(name)来删除属性</p>
      <dl>
        <dt>attributes 属性</dt>
        <dd>每个元素都有attr</dd>
        <dd>他们保存再NamedNodeMap对象中 与NodeList 类似也是个伪数组</dd>
      </dl>
      <h4>创建元素</h4>
      <ol>
        <li>通过 document.createElement(el)方法来创建元素，创建的元素未添加到文档数中，需要利用appendChild、 insertBefore 、repelaceChild方法插入文档书中才会呈现</li>
        <li>&nbsp; document.createTextNode(el)创建文本节点</li>
      </ol>
      <h4>DocumentFragment 节点</h4>
      <p>DocumentFragment 文档碎片，可以包含和控制节点，不会呈现在文档中，不会占用文档额外资源，nodeType == 1 ,我们把他当作仓库来存储
        <br>通过 document.createDocumentFargment() 创建文档碎片
      </p>加载外部文件过程是异步的
      <p></p>
    </div>
     <h3>classList</h3>
      <div>
          元素 class类名的集合 （DOMTokenList） 
          <dl>
            <dd>具有length属性</dd>
            <dd>具有add(name)方法  如果存在类则不添加</dd>
            <dd>contains(value) 是否存在value  返回true/false</dd>
            <dd>remove() 删除指定类</dd>
            <dd>toggle() 有则删除无则添加</dd>
            <dd>
              <span class="danger">el.classList.toggle('active')</span>
            </dd>
          </dl>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class DOM extends Vue {
  protected title: string = 'DOM(文档对象类型)';
  protected intro: string =
    '是针对HTML和XML文档的API(应用程序接口)。它将文档转化成一个有层次的节点数，运行开发人员增删改查某一部分。它脱胎于网景公司及微软创始的DHTML(动态HTML)';

  protected warning: string =
    'IE中所有DOM对象都是以COM对象形式实现，那么IE中DOM对象与元素js对象会有差异';

  protected nodeLevel: string = '节点层次';

  protected structure: string =
    'DOM可以将任何HTML/XML文档描绘成一个有多层节点构成的结构。节点分几种不同类型，每种节点表示文档不同信息及标记，同时有各自的特点，数据和方法，节点之间也存在某种联系所有页面标记表现为一个以特定节点为根节点的树形结构：';

  protected code: string = ` <!DOCTYPE html>
           <html lang="en">
           <head>
             <meta charset="UTF-8">
             <title>Document</title>
           </head>
           <body>
           </body>
           </html>`;

  protected documentNode: string =
    '文档节点是每个文档的根节点。上例中文档节点只有一个字节的，<html>文档元素，即根元素，且每个文档只能有一个文档元素';

  protected warning1: string =
    '在HTML页面中，文档始终是html元素，在XML中，没有预定义的元素，所以任何元素都可能是文档元素';

  protected nodeType: string = `
   在javascript中DOM1级定义Node类，所以节点类继承自Node，共享相同的基本属性和方法。
     总共有12种节点，每种节点都有一个nodeType属性，来表示节点类型。下列将列出对于节点表示的常量
  `;

  protected warning2: string = `除了IE，其他浏览器都可访问Node类`;

  protected documentType: string = `document 是HTMLDocument（继承于Document） 的一个实列，表示整个HTML页面，同时还是window对象的一个属性，为全局对象`;
}
</script>
<style lang='less' scoped>
strong {
  font-weight: 700;
}
p {
  text-indent: 2em;
}
.htmlNode {
  width: 300px;
  height: 150px;
  background: #f8f8f8;
}
dl dd {
  width: 50%;
  padding-left: 15%;
  line-height: 32px;
  text-emphasis: none;
  text-align: left;
}
</style>

