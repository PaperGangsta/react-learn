import React from 'react';

// React 和 Web Components 为了解决不同的问题而生。
// Web Components 为可复用组件提供了强大的封装，
// 而 React 则提供了声明式的解决方案，使 DOM 与数据保持同步。
// 两者旨在互补。
// 作为开发人员，可以自由选择在 Web Components 中使用 React，
// 或者在 React 中使用 Web Components，或者两者共存。

/**
 * 在 React 中使用 Web Components
 */
class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}!</x-search></div>;
  }
}

export default HelloMessage;
// 大多数开发者在使用 React 时，不使用 Web Components，但可能你会需要使用，尤其是在使用 Web Components 编写的第三方 UI 组件时。


/*
注意：

Web Components 通常暴露的是命令式 API。例如，Web Components 的组件 video 可能会公开 play() 和 pause() 方法。要访问 Web Components 的命令式 API，你需要使用 ref 直接与 DOM 节点进行交互。如果你使用的是第三方 Web Components，那么最好的解决方案是编写 React 组件包装该 Web Components。

Web Components 触发的事件可能无法通过 React 渲染树正确的传递。 你需要在 React 组件中手动添加事件处理器来处理这些事件。
 */
