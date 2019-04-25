(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{658:function(n,t){n.exports="Overlay 基础弹出层\n===\n\n这是一个基础的弹出层组件，其它弹出组件的抽象组件，都基于它来扩展比如 [`<Modal>`](#/components/modal)、[`<Dawer>`](#/components/drawer)、[`<Alert>`](#/components/alert)、[`<OverlayTrigger>`](#/components/overlay-trigger)、[`<Popover>`](#/components/popover)、[`<Tooltip>`](#/components/tooltip) 等。\n\n```jsx\nimport { Overlay } from 'uiw';\n```\n\n### 基本用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Overlay, Button, Card } from 'uiw';\n\nclass Demo extends React.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      hasBackdrop: true,\n    }\n  }\n  toggleOverlay(hasBackdrop, e) {\n    this.setState({ isOpen: !this.state.isOpen, hasBackdrop });\n  }\n  onClose(hasBackdrop, e) {\n    this.setState({ isOpen: false });\n  }\n  render() {\n    return (\n      <div>\n        <Button type=\"primary\" onClick={this.toggleOverlay.bind(this, true)}>点击弹出内容</Button>\n        <Button type=\"primary\" onClick={this.toggleOverlay.bind(this, false)}>弹出内容没有遮罩层</Button>\n        <Overlay\n          hasBackdrop={this.state.hasBackdrop}\n          isOpen={this.state.isOpen}\n          onClose={this.onClose.bind(this)}\n        >\n          <Card active bordered={!this.state.hasBackdrop} style={{ width: 500 }}>\n            <h3 style={{margin: 0}}>基础弹出层</h3>\n            <div>\n              这是一个基础的弹出层组件，其它弹出层组件基于它来扩展比如 Modal、Alert\n            </div>\n            <br />\n            <Button type=\"danger\" onClick={this.toggleOverlay.bind(this, false)}>关闭</Button>\n          </Card>\n        </Overlay>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 完全定制弹出容器\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Overlay, Button } from 'uiw';\n\nclass Demo extends React.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      hasBackdrop: true,\n    }\n  }\n  toggleOverlay(hasBackdrop, e) {\n    this.setState({ isOpen: !this.state.isOpen, hasBackdrop });\n  }\n  onClose(hasBackdrop, e) {\n    this.setState({ isOpen: false });\n  }\n  render() {\n    return (\n      <div>\n        <Button type=\"primary\" onClick={this.toggleOverlay.bind(this, true)}>点击弹出内容</Button>\n        <Overlay\n          backdropProps={{\n            style: { backgroundColor: 'rgba(0, 0, 0, .5)' }\n          }}\n          hasBackdrop={this.state.hasBackdrop}\n          isOpen={this.state.isOpen} onClose={this.onClose.bind(this)}\n        >\n          <div style={{ backgroundColor: '#fff', minWidth: 500 }} >\n            <Icon onClick={this.onClose.bind(this)} type=\"circle-close\" style={{ position: 'absolute', right: 0, top: '-20px', color: '#fff', cursor: 'pointer' }}/>\n            <div style={{ backgroundColor: 'rgb(0, 204, 180)', color: 'rgb(255, 255, 255)', textAlign: 'center', padding: '34px 24px' }}>\n              <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(255, 255, 255)', lineHeight: '1.2', margin: '0px' }}>\n                下次预订可享 5 ￥ 优惠\n              </h1>\n              <div style={{ padding: '5px 0' }}>(5 ￥ ~ ¥38)</div>\n              <div style={{ fontSize: '18px' }}>使用促销码： <b style={{ color: '#f8e71c', margin: '0px 4px' }}>KSGI5</b></div>\n            </div>\n            <div style={{ padding: '24px' }}>\n              <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 27, 30)', lineHeight: '1.2', margin: '0px 0px 4px' }}>订阅 uiw 组件新闻通讯</h1>\n              <div style={{ color: 'rgb(70, 81, 94)' }}>在收件箱中接收独家更新信息</div>\n            </div>\n          </div>\n        </Overlay>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### usePortal\n\n[`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals) 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在 DOM 树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 `usePortal` 设置为 `false` 将对话框生成在父组件层级挂载的 DOM 树中。 \n\n\x3c!--DemoStart,bgWhite,noScroll,codePen--\x3e \n```js\nimport { Overlay, Button, Card } from 'uiw';\n\nclass Demo extends React.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n    }\n  }\n  toggleOverlay(e) {\n    this.setState({ isOpen: !this.state.isOpen });\n  }\n  render() {\n    return (\n      <div>\n        <Button type=\"primary\" onClick={this.toggleOverlay.bind(this)}>点击弹出内容</Button>\n        <Overlay usePortal={false} isOpen={this.state.isOpen} onClose={this.toggleOverlay.bind(this)}>\n          <Card active style={{ width: 500 }}>\n            <h3 style={{marginTop: 0}}>基础弹出层</h3>\n            <p>Portals 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在DOM树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 usePortal 设置为 false 将对话框生成在父组件层级挂载的DOM树中。</p>\n            <Button type=\"danger\" onClick={this.toggleOverlay.bind(this)}>关闭</Button>\n          </Card>\n        </Overlay>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 自定义动画\n\n动画过渡效果是根据 [`react-transition-group`](https://github.com/reactjs/react-transition-group) 组件封装。动画时长参数 `transitionDuration={1000}` 是根据 CSS 动画样式持续时长来定义。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Overlay, Button, Card } from 'uiw';\n\nclass Demo extends React.PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n    }\n  }\n  toggleOverlay(e) {\n    this.setState({ isOpen: !this.state.isOpen });\n  }\n  render() {\n    return (\n    <div>\n      <Button type=\"primary\" onClick={this.toggleOverlay.bind(this)}>点击弹出内容</Button>\n      <Overlay\n        transitionName=\"animation-flipX\"\n        transitionDuration={1000}\n        isOpen={this.state.isOpen}\n        onClose={this.toggleOverlay.bind(this)}\n      >\n        <Card style={{ width: 500 }}>\n          <h3 style={{marginTop: 0}}>基础弹出层</h3>\n          <p>Portals 是 react 16 提供的官方解决方案，使得组件可以脱离父组件层级挂载在DOM树的任何位置，我们利用这个方法，可将模态对话框生成到根节点的外面，默认情况生成到跟节点的外面，通过将 usePortal 设置为 false 将对话框生成在父组件层级挂载的DOM树中。</p>\n          <Button type=\"danger\" onClick={this.toggleOverlay.bind(this)}>关闭</Button>\n        </Card>\n      </Overlay>\n    </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n你可以根据动画样式库 [**`animate.css`**](https://daneden.github.io/animate.css/) 添加不同的出入动画。默认通过的 [`Less`](http://lesscss.org/) 生成 CSS 动画的实例代码，定义 `transitionName` 动画样式名字为 `animation-bouce`，下面是上面实例的样式：\n\n```less\n@animation-prefix:~\"animation-flipX\";\n// 遮罩层动画\n// Background animation\n.@{animation-prefix}-enter .w-overlay-backdrop {\n  opacity: 0.01;\n}\n.@{animation-prefix}-enter-active .w-overlay-backdrop {\n  opacity: 1;\n  transition: opacity 1s ease-in;\n}\n.@{animation-prefix}-exit .w-overlay-backdrop {\n  opacity: 1;\n}\n.@{animation-prefix}-exit-active .w-overlay-backdrop {\n  opacity: 0.01;\n  transition: opacity 1s ease-in;\n}\n// 对话框动画\n// Content animation\n.@{animation-prefix}-enter-active .w-overlay-content {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: flipInX\n}\n.@{animation-prefix}-exit-active .w-overlay-content {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: flipOutX\n}\n\n@keyframes flipOutX {\n  0% {\n      transform: perspective(400px)\n  }\n\n  30% {\n      transform: perspective(400px) rotateX(-20deg);\n      opacity: 1\n  }\n\n  to {\n      transform: perspective(400px) rotateX(90deg);\n      opacity: 0\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotateX(90deg);\n    animation-timing-function: ease-in;\n    opacity: 0\n  }\n\n  40% {\n    transform: perspective(400px) rotateX(-20deg);\n    animation-timing-function: ease-in\n  }\n\n  60% {\n    transform: perspective(400px) rotateX(10deg);\n    opacity: 1\n  }\n\n  80% {\n    transform: perspective(400px) rotateX(-5deg)\n  }\n\n  to {\n    transform: perspective(400px)\n  }\n}\n```\n\n## Overlay\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| isOpen | 对话框是否可见 | boolean | `false` |\n| usePortal | 使用 react 16 提供的官方解决方案 [`Portals`](https://reactjs.org/docs/portals.html#event-bubbling-through-portals)，将模态对话框生成到根节点的外面。 |  boolean | `true` |\n| maskClosable | 点击遮罩层是否允许关闭 | boolean | `true` |\n| portalProps | 设置 [`Portal`](#/components/portal) 组件属性 | object | `{}` |\n| backdropProps | 遮罩层 HTML 属性设置 | object | `{}` |\n| dialogProps | 弹出目标(对话框) HTML 属性设置 | object | - |\n| unmountOnExit | 默认 `true` 退出动画卸载组件 | boolean | `true` |\n| hasBackdrop | 是否有背景，是否向 `<body>` 添加样式 `.w-overlay-open` 防止滚动条出现 | boolean | `true` |\n| transitionName | 内部 [`CSSTransitionsss`](http://reactcommunity.org/react-transition-group/css-transition/) 的转换名称。在此提供您自己的名称将需要定义新的 CSS 过渡属性。 | string | `w-overlay` |\n| transitionDuration | 持续时间 | number | `300` |\n| onClose | 点击遮罩层回调函数，通过这个函数设置 `isOpen=false` 关闭。**`onClosed`** 是弹出框关闭动画执行完成后的回调函数，有明显区别容易混淆。 | Function | - |\n| onEnter | 顺序 `1`，应用 `enter` 或 `appear` 后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。。 | Function(node: HtmlElement, isAppearing: bool) | - |\n| onOpening | 顺序 `2`，**`打开`**立即执行，在应用 `enter-active` 或 `appear-active` 类后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement, isAppearing: bool) | - |\n| onOpened | 顺序 `3`，**`打开`**动画播放完成执行，在应用 `exiting` 状态之前启动回调。 | Function(node: HtmlElement, isAppearing: bool) | - |\n| onClosing | 顺序 `4`，**`关闭`**立即执行，应用 `exit-active` 后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调。 | Function(node: HtmlElement) | - |\n| onClosed | 顺序 `5`，**`关闭`**动画播放完成立即执行，删除 `exit` 类后立即触发 [`<Transition>`](http://reactcommunity.org/react-transition-group/transition/) 回调，并将 `exit-done` 类添加到 DOM 节点。 | Function(node: HtmlElement) | - |"}}]);