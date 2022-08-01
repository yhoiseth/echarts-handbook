(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{304:function(n,e,t){"use strict";t.r(e),e.default="# Use Apache ECharts with bundler and NPM\n\nIf your development environment uses a package management tool like `npm` or `yarn` and builds with a packaging tool like Webpack, this article will describe how to get a minimal bundle of Apache ECharts<sup>TM</sup> via treeshaking.\n\n## Install ECharts via NPM\n\nYou can install ECharts via npm using the following command\n\n```shell\nnpm install echarts --save\n```\n\n## Import ECharts\n\n```js\nimport * as echarts from 'echarts';\n\n// initialize the echarts instance\nvar myChart = echarts.init(document.getElementById('main'));\n// Draw the chart\nmyChart.setOption({\n  title: {\n    text: 'ECharts Getting Started Example'\n  },\n  tooltip: {},\n  xAxis: {\n    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']\n  },\n  yAxis: {},\n  series: [\n    {\n      name: 'sales',\n      type: 'bar',\n      data: [5, 20, 36, 10, 10, 20]\n    }\n  ]\n});\n```\n\n## Importing Required Charts and Components to Have Minimal Bundle\n\nThe above code will import all the charts and components in ECharts, but if you don't want to bring in all the components, you can use the tree-shakeable interface provided by ECharts to bundle the required components and get a minimal bundle.\n\n```js\n// Import the echarts core module, which provides the necessary interfaces for using echarts.\nimport * as echarts from 'echarts/core';\n// Import bar charts, all suffixed with Chart\nimport { BarChart } from 'echarts/charts';\n// Import the tooltip, title, rectangular coordinate system, dataset and transform components\n// all suffixed with Component\nimport {\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent\n} from 'echarts/components';\n// Features like Universal Transition and Label Layout\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\n// Import the Canvas renderer\n// Note that including the CanvasRenderer or SVGRenderer is a required step\nimport { CanvasRenderer } from 'echarts/renderers';\n\n// Register the required components\necharts.use([\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent,\n  BarChart,\n  LabelLayout,\n  UniversalTransition,\n  CanvasRenderer\n]);\n\n// The next step is the same as before, initialize the chart and set the configuration items\nvar myChart = echarts.init(document.getElementById('main'));\nmyChart.setOption({\n  // ...\n});\n```\n\n> Note that in order to keep the size of the package to a minimum, ECharts does not provide any renderer in tree-shakeable interface, so you need to choose to import `CanvasRenderer` or `SVGRenderer` as the renderer. The advantage of this is that if you only need to use the svg rendering mode, the bundle will not include the `CanvasRenderer` module, which is not needed.\n\nThe \"Full Code\" tab on our sample editor page provides a very convenient way to generate a tree-shakable code. It will generate tree-shakable code based on the current option dynamically. You can use it directly in your project.\n\n## Minimal Option Type in TypeScript\n\nFor developers who are using TypeScript to develop ECharts, we provide a type interface to combine the minimal `EChartsOption` type. This stricter type can effectively help you check for missing components or charts.\n\n```ts\nimport * as echarts from 'echarts/core';\nimport {\n  BarChart,\n  // The series types are defined with the SeriesOption suffix\n  BarSeriesOption,\n  LineChart,\n  LineSeriesOption\n} from 'echarts/charts';\nimport {\n  TitleComponent,\n  // The component types are defined with the suffix ComponentOption\n  TitleComponentOption,\n  TooltipComponent,\n  TooltipComponentOption,\n  GridComponent,\n  GridComponentOption,\n  // Dataset\n  DatasetComponent,\n  DatasetComponentOption,\n  // Built-in transform (filter, sort)\n  TransformComponent\n} from 'echarts/components';\nimport { LabelLayout, UniversalTransition } from 'echarts/features';\nimport { CanvasRenderer } from 'echarts/renderers';\n\n// Combine an Option type with only required components and charts via ComposeOption\ntype ECOption = echarts.ComposeOption<\n  | BarSeriesOption\n  | LineSeriesOption\n  | TitleComponentOption\n  | TooltipComponentOption\n  | GridComponentOption\n  | DatasetComponentOption\n>;\n\n// Register the required components\necharts.use([\n  TitleComponent,\n  TooltipComponent,\n  GridComponent,\n  DatasetComponent,\n  TransformComponent,\n  BarChart,\n  LineChart,\n  LabelLayout,\n  UniversalTransition,\n  CanvasRenderer\n]);\n\nconst option: ECOption = {\n  // ...\n};\n```\n"}}]);