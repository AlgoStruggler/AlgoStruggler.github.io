---
title: "第五课：JavaScript 核心"
date: 2026-09-29 17:54:32
categories:
  - 工程
tags:
  - JavaScript
  - 前端
---
> 一句话总结：`HTML` 是结构，`CSS` 是样式，`JavaScript` 是行为；前两者是静态的，`JS` 让页面动起来。

## JavsScript 基础

### 1. 为什么需要 JavaScript

`HTML` 描述页面有什么，`CSS` 描述页面长什么样。
但页面还需要：

- 响应用户操作：点击、输入、滚动
- 动态修改内容：不刷新页面就能更新数据
- 与后端通信：发请求、收数据
- 控制浏览器行为：跳转、存储、动画

这些都由 `JavaScript` 完成。

类比：

| 角色         | 对应                   |
| :----------- | :--------------------- |
| `HTML`       | 建筑骨架               |
| `CSS`        | 装修                   |
| `JavaScript` | 水电、电梯、门禁、交互 |

真实场景：

- 第三课你在 `DevTools Network` 里看到请求，那些请求很多是 `JS` 发起的
- 第四课你写的登录表单，点击按钮后的校验、提交，默认行为是浏览器做的；如果要自定义，就要用 `JS`
- 第五课之后，你写的页面才真正“活”起来

------

### 2. 变量与类型

**声明变量：**

```js
let count = 0;        // 可重新赋值
const name = 'Alice'; // 不可重新赋值
var old = 1;          // 旧写法，不推荐
```

**对比：**

| 关键字  | 可重新赋值 | 作用域 | 推荐       |
| :------ | :--------- | :----- | :--------- |
| `let`   | 是         | 块级   | 是         |
| `const` | 否         | 块级   | 是，优先用 |
| `var`   | 是         | 函数级 | 否         |

**真实场景：**

```js
const btn = document.querySelector('button');
let clicks = 0;

btn.addEventListener('click', () => {
  clicks++;
  console.log(clicks);
});
```

浏览器里看到：

- 每点一次按钮，控制台数字加一

> 一句话总结：默认用 `const`，需要改再用 `let` ， `var` 别用。

**类型：**

```js
const n = 42;              // number
const s = 'hello';         // string
const b = true;            // boolean
const u = undefined;       // undefined
const nul = null;          // null
const obj = { a: 1 };      // object
const arr = [1, 2, 3];     // object（数组也是对象）
const fn = () => {};       // function
```

**对比：**

| 类型        | 例子              | 说明                    |
| :---------- | :---------------- | :---------------------- |
| `number`    | `42`、`3.14`      | 整数和浮点都是 `number` |
| `string`    | `'hello'`、`"hi"` | 单双引号都行            |
| `boolean`   | `true`、`false`   |                         |
| `undefined` | `undefined`       | 声明了没赋值            |
| `null`      | `null`            | 主动置空                |
| `object`    | `{}`、`[]`        | 引用类型                |
| `function`  | `() => {}`        | 可调用对象              |

**真实场景：**

```js
console.log(typeof 42);        // "number"
console.log(typeof 'hello');   // "string"
console.log(typeof []);        // "object"
console.log(typeof null);      // "object"（历史 bug）
```

**控制台里看到：**

```plaintext
number
string
object
object
```

> 一句话总结：`typeof null` 是 `"object"`，这是 `JS` 的历史遗留 `bug` ，记住就行。

**类型转换:**

```JS
console.log('1' + 1);   // "11"（字符串拼接）
console.log('1' - 1);   // 0（字符串转数字）
console.log(1 == '1');  // true（宽松相等，会转换类型）
console.log(1 === '1'); // false（严格相等，不转换）
```

真实场景：

```js
const input = document.querySelector('input').value;
// input 永远是 string，即使用户输入的是数字

const num = Number(input); // 显式转数字
```

> 一句话总结：永远用 `===`，不用 `==`。

### 3. 函数

**三种写法：**

```js
// 函数声明
function add(a, b) {
  return a + b;
}

// 函数表达式
const add2 = function(a, b) {
  return a + b;
};

// 箭头函数
const add3 = (a, b) => a + b;
```

**对比：**

| 写法       | 特点                   |
| :--------- | :--------------------- |
| 函数声明   | 会提升，可在定义前调用 |
| 函数表达式 | 不提升                 |
| 箭头函数   | 不绑定 `this`，更短    |

**真实场景：**

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

**控制台里看到：**

```plaintext
[2, 4, 6]
```

> 一句话总结：回调优先用箭头函数，需要 `this` 时用普通函数。

**参数与返回值：**

```js
function greet(name = 'world') {
  return `hello, ${name}`;
}

console.log(greet());        // "hello, world"
console.log(greet('Alice')); // "hello, Alice"
```

**真实场景：**

```js
function fetchUser(id) {
  if (!id) {
    return null; // 提前返回
  }
  // ...
}
```

### 4. 数组与对象

**常用数组方法:**

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);        		 // [2, 4, 6, 8, 10]
nums.filter(n => n > 2);     		 // [3, 4, 5]
nums.reduce((sum, n) => sum + n, 0); // 15
nums.find(n => n > 3);       		 // 4
nums.includes(3);            		 // true
```

**对比：**

| 方法       | 作用           | 返回               |
| :--------- | :------------- | :----------------- |
| `map`      | 每个元素转换   | 新数组             |
| `filter`   | 筛选           | 新数组             |
| `reduce`   | 累积           | 单个值             |
| `find`     | 找第一个满足的 | 元素或 `undefined` |
| `includes` | 是否包含       | `boolean`          |

**真实场景：**

```js
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 25 },
];

const names = users.map(u => u.name);          // ['Alice', 'Bob']
const adults = users.filter(u => u.age >= 21); // [{ name: 'Bob', age: 25 }]
```

> 一句话总结：`map` 转换，`filter` 筛选，`reduce` 汇总。

**对象：**

```js
const user = {
  name: 'Alice',
  age: 20,
  greet() {
    return `hi, ${this.name}`;
  },
};

console.log(user.name);    // "Alice"
console.log(user['age']);  // 20
console.log(user.greet()); // "hi, Alice"
```

**解构：**

```js
const { name, age } = user;
console.log(name, age); // "Alice" 20
```

**展开：**

```js
const updated = { ...user, age: 21 };
console.log(updated.age); // 21
```

**真实场景：**

```js
const res = await fetch('/api/user');
const data = await res.json();
const { name } = data;
```

## 二、DOM 与事件

### 1. 选中元素

```js
const el = document.querySelector('.btn');     // 第一个
const els = document.querySelectorAll('.btn'); // 所有
```

对比：

| 方法               | 返回              | 说明       |
| :----------------- | :---------------- | :--------- |
| `querySelector`    | 单个元素或 `null` | 第一个匹配 |
| `querySelectorAll` | `NodeList`        | 所有匹配   |

**真实场景：**

```js
const btn = document.querySelector('#submit');
btn.textContent = '提交中...';
```

**浏览器里看到：**

- 按钮文字变成“提交中...”

### 2. 修改内容与样式

```js
const el = document.querySelector('h1');

el.textContent = '新标题';         // 改文字
el.innerHTML = '<span>新</span>'; // 改 HTML
el.style.color = 'red';           // 改行内样式
el.classList.add('active');       // 加类
el.classList.remove('active');    // 删类
el.classList.toggle('active');    // 切换类
```

**对比：**

| 操作   | 方法          | 说明                          |
| :----- | :------------ | :---------------------------- |
| 文字   | `textContent` | 安全，不解析 `HTML`           |
| `HTML` | `innerHTML`   | 会解析 `HTML` ，有 `XSS` 风险 |
| 样式   | `style.xxx`   | 行内样式，优先级高            |
| 类     | `classList`   | 推荐，样式交给 `CSS`          |

**真实场景：**

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});
```

**浏览器里看到：**

- 点按钮，类名切换，样式跟着变

> 一句话总结：改样式优先用 `classList`，别直接写 `style`。

------

### 3. 事件

```js
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  console.log('clicked', e.target);
});
```

**常见事件：**

| 事件      | 触发时机       |
| :-------- | :------------- |
| `click`   | 点击           |
| `input`   | 输入框内容变化 |
| `submit`  | 表单提交       |
| `keydown` | 按下键盘       |
| `load`    | 资源加载完     |

**真实场景：**

```js
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // 阻止默认提交
  console.log('自定义提交');
});
```

**浏览器里看到：**

- 点提交，页面不刷新，控制台输出“自定义提交”

> 一句话总结：`e.preventDefault()` 阻止默认行为，表单、链接常用。

## 三、异步

### 1. 事件循环

`JS` 是单线程的，但能处理异步任务。
原因是事件循环（`Event Loop`）：

```plaintext
调用栈（Call Stack）
   ↓
微任务队列（Microtask Queue）：Promise.then、queueMicrotask
   ↓
宏任务队列（Macrotask Queue）：setTimeout、setInterval、I/O
```

**真实场景：**

```js
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

**控制台里看到：**

```plaintext
1
4
3
2
```

> 一句话总结：同步 → 微任务 → 宏任务。

------

### 2. Promise

```js
fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

**三种状态：**

| 状态        | 说明   |
| :---------- | :----- |
| `pending`   | 进行中 |
| `fulfilled` | 成功   |
| `rejected`  | 失败   |

**真实场景：**

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('1 秒后'));
```

### 3. async/await

```js
async function loadUser() {
  try {
    const res = await fetch('/api/user');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

**对比：**

| 写法          | 特点                 |
| :------------ | :------------------- |
| `.then`       | 链式，回调多时嵌套深 |
| `async/await` | 同步写法，可读性好   |

**真实场景：**

```js
async function loadUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();
  return users.map(u => u.name);
}
```

> 一句话总结：`async/await` 是 `Promise` 的语法糖，优先用它。

## 四、模块化与 fetch

### 1. ES Module

```js
// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;

// main.js
import { add, PI } from './math.js';

console.log(add(1, 2)); // 3
console.log(PI);        // 3.14
```

**对比：**

| 方式        | 特点                                         |
| :---------- | :------------------------------------------- |
| `ES Module` | 官方标准，`import`/`export`                  |
| `CommonJS`  | `Node.js` 旧写法，`require`/`module.exports` |

**真实场景：**

```html
<script type="module" src="main.js"></script>
```

> 一句话总结：浏览器和现代 `Node.js` 都用 `ES Module`。

### 2. fetch

**GET**

```js
async function getUser() {
  const res = await fetch('/api/user');
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const data = await res.json();
  return data;
}
```

**POST**

```js
async function login(username, password) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}
```

**对比：**

| 方法     | 用途     | Body |
| :------- | :------- | :--- |
| `GET`    | 获取数据 | 无   |
| `POST`   | 提交数据 | 有   |
| `PUT`    | 全量更新 | 有   |
| `PATCH`  | 部分更新 | 有   |
| `DELETE` | 删除     | 无   |

**真实场景：**

```js
const res = await fetch('https://api.github.com/users/AlgoStruggler');
const user = await res.json();
console.log(user.name);
```

**控制台里看到：**

- 输出你的 `GitHub` 用户名

> 一句话总结：`fetch` 返回 `Promise`，用 `await` 拿结果，先检查 `res.ok`。

## 五、真实场景

### 1：为什么 `0.1 + 0.2 !== 0.3`

```js
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

原因：`JS` 用 `IEEE 754` 双精度浮点数，`0.1` 和 `0.2` 无法精确表示。

**解决：**

```js
const a = 0.1 + 0.2;
console.log(Math.abs(a - 0.3) < Number.EPSILON); // true
```

> 一句话总结：浮点数比较用误差范围，别用 `===`。

------

### 2：为什么 `setTimeout(fn, 0)` 不立刻执行

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
```

**控制台里看到：**

```plaintext
1
3
2
```

原因：`setTimeout` 是宏任务，要等同步代码和微任务跑完。

------

### 3：为什么 `this` 会变

```js
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  },
};

const fn = obj.greet;
fn(); // undefined（this 是 undefined 或 window）
obj.greet(); // "Alice"
```

**解决：**

```js
const fn = obj.greet.bind(obj);
fn(); // "Alice"
```

**或者用箭头函数：**

```js
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // this 不是 obj
  },
};
```

> 一句话总结：普通函数的 `this` 看调用方式，箭头函数的 `this` 看定义位置。
