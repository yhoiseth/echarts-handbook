(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{372:function(n,t,e){"use strict";e.r(t),t.default="# 用颜色增强可视化效果\n\n在数据可视化所有的视觉通道中，色彩作为视觉的第一感知因素，对数据进行的视觉编码和传达是很有效的。如果使用得当，颜色可以非常有效地增强可视化效果。接下来，我们来看看具体有哪些使用颜色来增强可视化效果的的技巧和方法。\n\n## 颜色的情感共鸣\n\n颜色感知是一个复杂的物理和心理相互作用的结果。为了证明了人们感知到的色彩有冷与暖之分，日本色彩学家大智浩曾做过一个实验，将一个工作场地涂灰青色，另一个工作场地涂红橙色，两个工作场地的客观温度劳动强度相同，在灰青色工作场地工作的员工相对更容易感觉到冷。人们进一步研究发现，除了冷与暖的不同感受，色彩还有轻与重、远与近、活泼与忧郁等区分。所以，色彩之所以强大之处在于不同的色彩会使人的心理与生理产生不同的感受，从而引起情感反应和影响人们的情绪。\n\n在可视化的颜色选择上，如果我们选用的颜色与我们数据本身的特点以及想要传达的情绪吻合的话，就可以伴随着颜色的视觉传达而引起情感上的共鸣。\n\n例如某个甜品店各类甜品的销售占比，数据如下：\n\n<img max-width=\"830\" width=\"50%\" height=\"100%\" src=\"images/design/color/color01.png\" />\n\n针对这份数据，下面两个相同样式的图表，我们采用了两种不同配色方案，对比来看很明显，右图的配色更适合用来展示甜品数据。\n\n<img max-width=\"830\" width=\"100%\" height=\"100%\" src=\"images/design/color/color02.png\" />\n\n因为相较于蓝色、紫色而言，橙色、黄色、粉色、绿色都是有利于提升食欲的颜色，而且更容易使人们产生温暖、幸福的情感，而这种情感与吃甜品时人们产生的感觉是一致的。另一方面，甜品本身的面向用户大多数是儿童和女性，针对这部分用户，比较明快、可爱的图表颜色也是更好的选择。而左侧的图表的配色更适合用于展示某种商务、男性群体的数据，因为左图的配色更容易使人产生理性和冷静的情感。\n\n## 颜色的语义共鸣\n\n不同的颜色可以帮助我们识别和区分不同的类别。我们已经习惯将颜色和各种事物或概念绑定在一起。当提到某些事物时我们经常会迅速的在心中匹配其对应的颜色，例如提到“云朵”会想到白色，“爱情”会想到粉红色。这些自然的、与语义一致的颜色被称为\"语义共鸣色\"。\n\n研究表明，对于有固定颜色的词，匹配其具有语义共鸣的颜色，能有效的加速认知过程，反之则会阻碍认知，这种有趣的现象称为\"斯特鲁普效应\"。我们可以做个的对比试验，分别在上图两行文字中找到“黄”字。这个过程中，第一行的“黄”可以被快速定位到，因为对应使用了黄色。而在第二行寻找的时候，可能有人最早定位到的会是“紫”字，因为此处“紫”字使用了黄色，这就阻碍了我们寻找的速度和准确性。\n\n<img max-width=\"830\" width=\"100%\" height=\"100%\" src=\"images/design/color/color03.png\" />\n\n有效地利用语义共鸣色，即采用与数据本身意义一致的颜色，也可以提高可视化的认知效率。例如可以使用蓝色的来显示\"海洋\"的数据、使用黄色来显示“沙漠”的数据。\n\n视觉效果应该尽可能容易地解释，因此请尝试找到与观众的先入为主和文化联想相匹配的配色方案。如下示例中展示了猕猴桃、香蕉、橙子、草莓四种水果的销售数据，分别选择了与水果本身一致的颜色绿色、黄色、橙色、红色。这样，我们在辨别和记忆每个柱状所对应的水果时就轻而易举了。\n\n```js live\noption = {\n  color: ['#6E9D4E', '#EDDB4F', '#F7923A', '#F14747'],\n  title: {\n    text: '7月水果销量',\n    x: '2%',\n    y: '1%',\n    textStyle: {\n      color: '#fff',\n      fontSize: '26'\n    }\n  },\n  tooltip: {\n    trigger: 'axis'\n  },\n  legend: {\n    data: ['猕猴桃', '香蕉', '橙子', '草莓'],\n    align: 'right'\n  },\n  grid: {\n    left: '3%',\n    right: '3%',\n    top: '15%',\n    bottom: '3%',\n    containLabel: true\n  },\n  xAxis: [\n    {\n      type: 'category',\n      data: ['第一周', '第二周', '第三周', '第四周']\n    }\n  ],\n  yAxis: [\n    {\n      type: 'value',\n      axisLabel: {\n        formatter: '{value}'\n      }\n    }\n  ],\n  series: [\n    {\n      name: '猕猴桃',\n      type: 'bar',\n      data: [60, 110, 180, 100]\n    },\n    {\n      name: '香蕉',\n      type: 'bar',\n      data: [90, 130, 170, 130]\n    },\n    {\n      name: '橙子',\n      type: 'bar',\n      data: [120, 160, 140, 160]\n    },\n    {\n      name: '草莓',\n      type: 'bar',\n      data: [110, 190, 90, 100]\n    }\n  ]\n};\n```\n\n## 图表颜色要吻合常识\n\n在数据可视化的过程中，颜色的使用与图表的数据、展示环境、受众人群、社会背景等因素直接相关，我们不可以把颜色作为独立的因素去设计。在开始选择可视化作品的颜色时，请先克制住自由创作的热情，查看一下这是否是一份特殊的数据，再去选择对的颜色。例如一个股票数据的图表中，红色和绿色都有独特的含义。所以可视化图表颜色的选择吻合认知的常识，可以帮助我们更好地理解和区分数据。\n\n<iframe max-width=\"830\" width=\"100%\" height=\"400\"\nsrc=\"https://gallery.echartsjs.com/view-lite.html?cid=xp1oqJoQqG\">\n</iframe>\n\n再例如查看天气温度。蓝色和红色易于理解，无需任何解释，并且易于区分。\n\n<iframe max-width=\"830\" width=\"100%\" height=\"400\"\nsrc=\"https://gallery.echartsjs.com/view-lite.html?cid=xIVoX5gZcT&v=1\">\n</iframe>\n\n## 用颜色来区分数据\n\n我们通常会使用折线图来分析趋势，但是有的时候有需要明确的知道某个数据是否在某个区间范围内，因此我们可以主动地去配置定义区域。例如我们设定 25%-75% 这个范围内为我们计划完成的销售额，那我们可以在这个定义区域的范围内，给每个区域设置成一个底色，这样就可以高效的识别出每个数据处于哪个区间范围内，未达到、达到、超额完成的值。\n\n所以，颜色可以被用来作为提高图表的可阅读性和有效工具。\n\n<img max-width=\"830\" width=\"80%\" height=\"100%\" src=\"images/design/color/color04.png\" />\n"}}]);