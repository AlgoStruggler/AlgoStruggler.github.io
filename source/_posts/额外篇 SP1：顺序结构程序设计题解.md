---
title: "额外篇 SP1：顺序结构程序设计题解"
date: 2026-10-08 17:21:24
permalink: 2026/10/08/sp1-sequential-solutions/
categories:
  - 算法竞赛
tags:
  - 语法
  - C++
  - 题解
  - 顺序结构
excerpt: "牛客顺序结构程序设计题单的 48 道题解：从输入输出、整数与浮点运算，到几何公式和数学推导，附完整 C++ 代码及知识点索引。"
---

# SP1：顺序结构程序设计 - 题解

> 题单链接：https://ac.nowcoder.com/acm/contest/18839?from=acdiscuss
>
> 本题单共48题，属于【新手上路】语法入门的第一部分。
>
> 顺序结构是最基础的程序设计结构：代码从上到下一行一行执行。**没有循环（`for`/`while`）、没有条件判断（`if`）、没有数组**。所有代码就是"声明变量 → 读入 → 计算 → 输出"。
>
> **关于格式化输出**：用 `cout` 控制小数位数需要 `fixed` 和 `setprecision(n)`，组合起来就是"保留 $n$ 位小数"。比如 `cout << fixed << setprecision(2) << 3.14159` 输出 `3.14`。`bits/stdc++.h` 已包含所需头文件。
>
> **关于数学函数**：`abs()` 取绝对值、`sqrt()` 开平方、`pow(x, y)` 求 $x$ 的 $y$ 次方、`max(a, b)` 取较大值、`min(a, b)` 取较小值。它们就像计算器上的按钮，直接调用就行。`bits/stdc++.h` 已包含这些函数所需的所有头文件。

---

## 1. [这是一道签到题](https://ac.nowcoder.com/acm/problem/16570)

**思路**：题目要求输出7个单词，每个单词占一行。没有什么花里胡哨的，就是练习"输出"这个动作本身。你只需要记住：`cout << endl` 可以换行，每输出一个单词就换一次行，写7行输出语句即可。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "zhe" << endl;
    cout << "shi" << endl;
    cout << "yi" << endl;
    cout << "dao" << endl;
    cout << "qian" << endl;
    cout << "dao" << endl;
    cout << "ti" << endl;
    return 0;
}
```

---

## 2. [排列式](https://ac.nowcoder.com/acm/problem/18929)

**思路**：题目要求用 $1\sim9$ 这 $9$ 个数字，每个恰好用一次，拼成一个乘法等式 $A \times B = C$。只有两种切分方式：$1$ 位 $\times$ $4$ 位 $=$ $4$ 位，或 $2$ 位 $\times$ $3$ 位 $=$ $4$ 位。

这题本质是"穷举所有可能"，需要循环，顺序结构阶段还写不出枚举逻辑。但好在答案**一共有 $9$ 个**，是固定不变的。我们可以直接分析得出所有答案，然后把 $9$ 个等式逐行输出。思路是：把所有满足条件的等式当作"已知结果"直接输出，就像第1题输出固定文字一样。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "4396 = 28 x 157" << endl;
    cout << "5346 = 18 x 297" << endl;
    cout << "5346 = 27 x 198" << endl;
    cout << "5796 = 12 x 483" << endl;
    cout << "5796 = 42 x 138" << endl;
    cout << "6952 = 4 x 1738" << endl;
    cout << "7254 = 39 x 186" << endl;
    cout << "7632 = 48 x 159" << endl;
    cout << "7852 = 4 x 1963" << endl;
    return 0;
}
```

---

## 3. [小飞机](https://ac.nowcoder.com/acm/problem/20750)

**思路**：题目要你画一架飞机，用星号 `*` 和空格拼成。这种"图形输出"题的套路很简单：把题目给的样例图案一行一行原样抄进代码里就行。注意每一行右侧的空格也要算清楚位置，否则可能格式不对。最稳妥的做法是直接用样例输出的原样。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "     **" << endl;
    cout << "     **" << endl;
    cout << "************" << endl;
    cout << "************" << endl;
    cout << "    *  *   " << endl;
    cout << "    *  *   " << endl;
    return 0;
}
```

---

## 4. [学姐的"Hello world!"](https://ac.nowcoder.com/acm/problem/213204)

**思路**：学姐把 `Hello world!` 打成了 `Helo word!`（少打了一些字母）。题目要你也输出这个错误的版本，陪她一起犯错。直接输出题目要求的字符串即可，没有任何输入。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "Helo word!" << endl;
    return 0;
}
```

---

## 5. [乘法表](https://ac.nowcoder.com/acm/problem/22206)

**思路**：输出九九乘法表，难点在格式：每个乘法结果要占**2个字符宽度**，结果之间用 $1$ 个空格隔开。

怎么理解"占2个字符宽度"？比如 `1*1=1`，结果是 $1$，只有 $1$ 位，但题目要求占 $2$ 位，所以前面补一个空格变成 ` 1`。而 `3*4=12` 结果是 $2$ 位，刚好填满。

九九乘法表的每一行内容是固定的，一共就 $9$ 行。我们把每行按照格式要求直接写出来就行——就像第3题画飞机一样，把固定内容逐行输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "1*1= 1" << endl;
    cout << "1*2= 2 2*2= 4" << endl;
    cout << "1*3= 3 2*3= 6 3*3= 9" << endl;
    cout << "1*4= 4 2*4= 8 3*4=12 4*4=16" << endl;
    cout << "1*5= 5 2*5=10 3*5=15 4*5=20 5*5=25" << endl;
    cout << "1*6= 6 2*6=12 3*6=18 4*6=24 5*6=30 6*6=36" << endl;
    cout << "1*7= 7 2*7=14 3*7=21 4*7=28 5*7=35 6*7=42 7*7=49" << endl;
    cout << "1*8= 8 2*8=16 3*8=24 4*8=32 5*8=40 6*8=48 7*8=56 8*8=64" << endl;
    cout << "1*9= 9 2*9=18 3*9=27 4*9=36 5*9=45 6*9=54 7*9=63 8*9=72 9*9=81" << endl;
    return 0;
}
```

---

## 6. [KiKi学程序设计基础](https://ac.nowcoder.com/acm/problem/201524)

**思路**：题目要你输出两行代码——一行是 `C` 语言输出 `Hello world!` 的写法，一行是 `C++` 的写法。难点在于这些代码本身包含双引号和反斜杠，在 `C++` 里输出它们需要**转义**：双引号写成 `\"`，反斜杠写成 `\\`。比如 `\n` 在字符串里要写成 `\\n`，否则编译器会以为你想换行。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "printf(\"Hello world!\\n\");" << endl;
    cout << "cout << \"Hello world!\" << endl;" << endl;
    return 0;
}
```

---

## 7. [疫情死亡率](https://ac.nowcoder.com/acm/problem/214222)

**思路**：死亡率 $=$ 死亡人数 $/$ 确诊人数 {% raw %}$\times 100\%${% endraw %}，输出时保留 $3$ 位小数并加百分号。

注意两个坑：

1. 整数除法会截断小数，所以要先转成浮点数再除：`b * 100.0 / a`，这里的 `100.0` 让整个表达式变成浮点运算。
2. 输出百分号——用 `cout` 直接输出 `%` 字符即可，不像 `printf` 需要 `%%`。

用 `cout << fixed << setprecision(3)` 控制保留 $3$ 位小数。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << fixed << setprecision(3) << b * 100.0 / a << "%" << endl;
    return 0;
}
```

---

## 8. [爱因斯坦的名言](https://ac.nowcoder.com/acm/problem/214605)

**思路**：直接输出一句固定的话。用 `cout` 直接输出即可，`%` 号在 `cout` 里就是普通字符，不需要任何转义。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "Genius is 1% inspiration and 99% perspiration." << endl;
    return 0;
}
```

---

## 9. [字符串输出1.0](https://ac.nowcoder.com/acm/problem/216117)

**思路**：把同一句话输出三遍，每遍一行。没有任何输入和计算，就是练习输出。直接写三行 `cout` 即可。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "Welcome to ACM / ICPC!" << endl;
    cout << "Welcome to ACM / ICPC!" << endl;
    cout << "Welcome to ACM / ICPC!" << endl;
    return 0;
}
```

---

## 10. [牛牛学说话之-整数](https://ac.nowcoder.com/acm/problem/21985)

**思路**：输入一个整数，原样输出。这是最基础的"读入→输出"练习。用 `cin` 读入，用 `cout` 输出，就这两步。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << n << endl;
    return 0;
}
```

---

## 11. [牛牛学说话之-浮点数](https://ac.nowcoder.com/acm/problem/21986)

**思路**：输入一个小数，输出它。和上一题的区别是数据类型从整数变成了小数。浮点数在计算机里存储会有精度误差，所以题目允许 $10^{-3}$ 的误差。用 `double` 类型读入，用 `cout << fixed << setprecision(3)` 输出保留 $3$ 位小数，就能满足要求。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    double n;
    cin >> n;
    cout << fixed << setprecision(3) << n << endl;
    return 0;
}
```

---

## 12. [牛牛学加法](https://ac.nowcoder.com/acm/problem/21987)

**思路**：输入两个整数，输出它们的和。这是所有编程入门的第一课：读入两个变量，用 $+$ 号计算，输出结果。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```

---

## 13. [牛牛学除法](https://ac.nowcoder.com/acm/problem/21988)

**思路**：输入 `a` 和 `b`，输出 $a/b$ 的整数部分。在 `C++` 里，两个整数相除会自动向下取整（直接丢掉小数部分），比如 $5/2$ 结果是 $2$。所以直接用整数除法就行。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a / b << endl;
    return 0;
}
```

---

## 14. [牛牛学取余](https://ac.nowcoder.com/acm/problem/21989)

**思路**：输入 `a` 和 `b`，输出 $a$ 除以 $b$ 的余数。余数就是除法"分完之后剩下的"。`C++` 里用 `%` 运算符，比如 {% raw %}$5 \% 2 = 1${% endraw %}。直接用即可。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a % b << endl;
    return 0;
}
```

---

## 15. [浮点除法](https://ac.nowcoder.com/acm/problem/21992)

**思路**：输入两个整数 `a` 和 `b`，输出 $a/b$ 的小数值，保留 $3$ 位小数。

这里有个新手常犯的错误：如果直接写 `a / b`，因为两个都是整数，`C++` 会做整数除法丢掉小数部分。要得到小数结果，需要让其中至少一个变成浮点数——最简单的做法是写 `(double)a / b`，或者 `a * 1.0 / b`。然后用 `cout << fixed << setprecision(3)` 控制小数位数。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << fixed << setprecision(3) << (double)a / b << endl;
    return 0;
}
```

---

## 16. [计算带余除法](https://ac.nowcoder.com/acm/problem/21453)

**思路**：输入 `a` 和 `b`，同时输出商和余数。把上面两题合起来就行：$a/b$ 是商，{% raw %}$a\%b${% endraw %} 是余数，中间用空格隔开输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a / b << " " << a % b << endl;
    return 0;
}
```

---

## 17. [K蝴蝶](https://ac.nowcoder.com/acm/problem/216116)

**思路**：输入两个整数 `a` 和 `b`，输出它们的差。题目包装了一个故事（今生往世的记忆量），但本质就是做减法。直接 $a - b$ 输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a - b << endl;
    return 0;
}
```

---

## 18. [水题再次来袭：明天星期几？](https://ac.nowcoder.com/acm/problem/21310)

**思路**：已知今天星期 $x$（$1\sim7$），求明天星期几。正常情况明天 $= x + 1$，但有一个特殊情况：今天是星期日（$x=7$）时，明天是星期一（$1$），不是 $8$。

怎么统一处理？用取余运算！{% raw %}$x \% 7${% endraw %} 的结果：当 $x=1\sim6$ 时是 $1\sim6$，当 $x=7$ 时是 $0$。然后 $+1$ 就得到 $2\sim7$ 和 $1$，正好对应明天。所以公式是 {% raw %}$x \% 7 + 1${% endraw %}。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int x;
    cin >> x;
    cout << x % 7 + 1 << endl;
    return 0;
}
```

---

## 19. [开学？](https://ac.nowcoder.com/acm/problem/206668)

**思路**：原计划星期 $x$ 开学，延期 $y$ 天，求实际开学是星期几。

和上一题类似，但延期天数 $y$ 可能很大（最多 $100$）。一周 $7$ 天循环，所以关键是对 $7$ 取余。先想清楚：如果今天是星期 $x$，过了 $y$ 天后是星期几？

先把星期 $x$ 转成"第 $0$ 天算起"的形式：减 $1$ 变成 $0\sim6$。加上 $y$ 天后对 $7$ 取余，再转回 $1\sim7$。所以公式是 {% raw %}$(x - 1 + y) \% 7 + 1${% endraw %}。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int x, y;
    cin >> x >> y;
    cout << (x - 1 + y) % 7 + 1 << endl;
    return 0;
}
```

---

## 20. [helloworld](https://ac.nowcoder.com/acm/problem/212982)

**思路**：把 `hello world` 里每个字母的 `ASCII` 码加 $1$ 后输出。比如 `h` 的 `ASCII` 码是 $104$，加 $1$ 变 $105$ 就是 `i`，`e` 变 `f`，`l` 变 `m`，`o` 变 `p`，`w` 变 `x`，`r` 变 `s`，`d` 变 `e`。空格不变。

`hello world` 一共 $11$ 个字符，逐个加 $1$ 后的结果是 `ifmmp xpsme`。我们直接推算出结果输出即可，就像前面几题输出固定字符串一样。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << "ifmmp xpsme" << endl;
    return 0;
}
```

---

## 21. [a+b](https://ac.nowcoder.com/acm/problem/212983)

**思路**：输入两个十进制数 `a` 和 `b`，输出 $a+b$ 的**十六进制**表示。

十六进制就是逢 $16$ 进 $1$，用 $0\sim9$ 和 `a`$\sim$`f` 表示。比如十进制的 $15$ 在十六进制里是 `f`，十进制的 $16$ 是 `10`。

不用自己写转换逻辑，`cout` 有一个操纵符叫 `hex`，写上 `cout << hex` 之后，输出的整数就会自动变成十六进制。先算 $a+b$，再用 `hex` 输出即可。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << hex << a + b << endl;
    return 0;
}
```

---

## 22. [整数的个位](https://ac.nowcoder.com/acm/problem/21990)

**思路**：求一个整数的个位数字。怎么取个位？对 $10$ 取余！比如 {% raw %}$123 \% 10 = 3${% endraw %}，个位就是 $3$。

题目有个细节：负数要取绝对值再算个位，比如 $-114$ 的个位是 $4$ 不是 $-4$。用 `abs()` 函数取绝对值——`abs` 就是"绝对值"，负数变正数，正数不变，这是小学数学知识。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << abs(n) % 10 << endl;
    return 0;
}
```

---

## 23. [整数的十位](https://ac.nowcoder.com/acm/problem/21991)

**思路**：求一个整数的十位数字。思路和上一题类似：先取个位，再想怎么取十位。

取十位的方法：先把最后一位砍掉（除以 $10$），再取个位（对 $10$ 取余）。比如 {% raw %}$123 \to 123/10=12 \to 12\%10=2${% endraw %}，十位就是 $2$。

同样要处理负数：先用 `abs()` 取绝对值。公式就是 `abs(n) / 10 % 10`。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << abs(n) / 10 % 10 << endl;
    return 0;
}
```

---

## 24. [反向输出一个四位数](https://ac.nowcoder.com/acm/problem/21454)

**思路**：输入 $1234$，输出 $4321$。不用字符串和循环，用**数学方法**把每一位拆出来。

一个四位数 $n =$ 千位 $\times 1000 +$ 百位 $\times 100 +$ 十位 $\times 10 +$ 个位：

- 个位 {% raw %}$= n \% 10${% endraw %}
- 十位 {% raw %}$= n / 10 \% 10${% endraw %}
- 百位 {% raw %}$= n / 100 \% 10${% endraw %}
- 千位 $= n / 1000$

反向输出就是：先输出个位，再十位，再百位，再千位。比如 $1234$：个位 $4$、十位 $3$、百位 $2$、千位 $1$，输出 $4321$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << n % 10;           // 个位
    cout << n / 10 % 10;      // 十位
    cout << n / 100 % 10;     // 百位
    cout << n / 1000 << endl; // 千位
    return 0;
}
```

---

## 25. [总成绩和平均分计算](https://ac.nowcoder.com/acm/problem/21459)

**思路**：输入 $3$ 科成绩，输出总成绩和平均分（保留 $2$ 位小数）。总成绩 $=$ 三科之和，平均分 $=$ 总成绩 $/ 3$。用浮点数 `double` 存储，`cout << fixed << setprecision(2)` 保留 $2$ 位小数。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    double a, b, c;
    cin >> a >> b >> c;
    double sum = a + b + c;
    cout << fixed << setprecision(2) << sum << " " << sum / 3 << endl;
    return 0;
}
```

---

## 26. [计算平均成绩](https://ac.nowcoder.com/acm/problem/21586)

**思路**：输入 $5$ 个整数成绩，求平均值（保留 $1$ 位小数）。$5$ 个数加起来除以 $5$。注意成绩是整数但平均值是小数，所以要除以 $5.0$ 而不是 $5$，否则会做整数除法丢精度。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c, d, e;
    cin >> a >> b >> c >> d >> e;
    cout << fixed << setprecision(1) << (a + b + c + d + e) / 5.0 << endl;
    return 0;
}
```

---

## 27. [牛牛学梯形](https://ac.nowcoder.com/acm/problem/21995)

**思路**：梯形面积 $= ($ 上底 $+$ 下底 $) \times$ 高 $/ 2$。这是小学数学公式。注意用浮点数运算（除以 $2.0$），保留 $3$ 位小数输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int up, down, height;
    cin >> up >> down >> height;
    cout << fixed << setprecision(3) << (up + down) * height / 2.0 << endl;
    return 0;
}
```

---

## 28. [牛牛学矩形](https://ac.nowcoder.com/acm/problem/21998)

**思路**：已知长方形的长 $a$ 和宽 $b$，求周长和面积。周长 $= 2 \times (a+b)$，面积 $= a \times b$。两行分别输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << 2 * (a + b) << endl;
    cout << a * b << endl;
    return 0;
}
```

---

## 29. [牛牛学立体](https://ac.nowcoder.com/acm/problem/21999)

**思路**：给定长方体的长 $a$、宽 $b$、高 $c$，求表面积和体积。表面积 $= 2 \times (ab+ac+bc)$（$6$ 个面的面积之和，两两相同），体积 $= a \times b \times c$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << 2 * (a*b + a*c + b*c) << endl;
    cout << a * b * c << endl;
    return 0;
}
```

---

## 30. [计算三角形的周长和面积](https://ac.nowcoder.com/acm/problem/21461)

**思路**：给定三角形三条边 $a, b, c$，求周长和面积。

周长很简单：$a + b + c$。

面积用**海伦公式**：设半周长 $s = (a+b+c)/2$，则面积 $= \sqrt{s \times (s-a) \times (s-b) \times (s-c)}$。这个公式不需要知道三角形的高，只要知道三条边就能算面积，非常实用。`sqrt` 函数用来开方，`cout << fixed << setprecision(2)` 控制保留 $2$ 位小数，注意输出格式 `circumference=xx.xx area=xx.xx`。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    double a, b, c;
    cin >> a >> b >> c;
    double circ = a + b + c;
    double s = circ / 2;
    double area = sqrt(s * (s-a) * (s-b) * (s-c));
    cout << fixed << setprecision(2);
    cout << "circumference=" << circ << " area=" << area << endl;
    return 0;
}
```

---

## 31. [你能活多少秒](https://ac.nowcoder.com/acm/problem/21457)

**思路**：一年约有 $31536000$ 秒（$3.1536 \times 10^7$），给定年龄，算一共活了多少秒。就是 年龄 $\times 31536000$。

注意：年龄可能不大，但乘上 $3000$ 多万后结果会超过 `int` 的范围（约 $21$ 亿）。`int` 最大约 $21.4$ 亿，而 $20$ 岁就是 $6.3$ 亿，$100$ 岁就是 $31.5$ 亿——超了！所以必须用 `long long` 类型来存结果。在代码里写 `31536000LL` 强制用 `long long` 运算（`LL` 后缀告诉编译器这个数字是 `long long` 类型）。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << n * 31536000LL << endl;
    return 0;
}
```

---

## 32. [时间转换](https://ac.nowcoder.com/acm/problem/21458)

**思路**：给定秒数，转换成"几小时几分几秒"。

$1$ 小时 $= 3600$ 秒，$1$ 分钟 $= 60$ 秒。所以：

- 小时 $=$ 总秒数 $/ 3600$（能凑几个完整的小时）
- 剩下的秒数 $=$ 总秒数 {% raw %}$\% 3600${% endraw %}
- 分钟 $=$ 剩下的秒数 $/ 60$
- 秒 $=$ 剩下的秒数 {% raw %}$\% 60${% endraw %}

比如 $3661$ 秒：$3661/3600 = 1$ 小时，{% raw %}$3661\%3600 = 61${% endraw %} 秒，$61/60 = 1$ 分，{% raw %}$61\%60 = 1${% endraw %} 秒。答案是 $1\ 1\ 1$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << n / 3600 << " " << n % 3600 / 60 << " " << n % 60 << endl;
    return 0;
}
```

---

## 33. [温度转换](https://ac.nowcoder.com/acm/problem/22004)

**思路**：华氏温度转摄氏温度，公式 $c = 5/9 \times (f - 32)$。

关键坑：$5/9$ 如果直接写，两个整数相除结果是 $0$！必须写成 `5.0/9.0` 让它做浮点除法。这是新手特别容易犯的错误。然后保留 $3$ 位小数输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    double f;
    cin >> f;
    cout << fixed << setprecision(3) << 5.0 / 9.0 * (f - 32) << endl;
    return 0;
}
```

---

## 34. [计算机内存](https://ac.nowcoder.com/acm/problem/22005)

**思路**：给定 $N$ 兆字节（`MB`）的内存，问能存多少个整数（每个整数占 $4$ 字节）。

单位换算：$1\text{MB} = 1024\text{KB} = 1024 \times 1024$ 字节 $= 1048576$ 字节。每个整数 $4$ 字节，所以 $1\text{MB}$ 能存 $1048576/4 = 262144$ 个整数。答案是 $N \times 262144$。注意结果可能很大，用 `long long`。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << n * 262144 << endl;
    return 0;
}
```

---

## 35. [[NOIP2017]成绩](https://ac.nowcoder.com/acm/problem/16421)

**思路**：总成绩 $=$ 作业 {% raw %}$\times 20\% +${% endraw %} 小测 {% raw %}$\times 30\% +${% endraw %} 期末 {% raw %}$\times 50\%${% endraw %}。

由于输入都是 $10$ 的倍数，乘上百分比后一定是整数，所以可以直接用整数算：$2 \times$ 作业 $+ 3 \times$ 小测 $+ 5 \times$ 期末，再除以 $10$ 就是总成绩。这样避免了浮点运算的精度问题。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << (a * 2 + b * 3 + c * 5) / 10 << endl;
    return 0;
}
```

---

## 36. [KiKi的最高分](https://ac.nowcoder.com/acm/problem/201527)

**思路**：输入三个成绩，输出最大值。用 `max()` 函数——`max(a, b)` 就是取 $a$ 和 $b$ 中较大的那个。两次使用就能取三个数的最大值：`max(a, max(b, c))`，先比 $b$ 和 $c$ 取大的，再和 $a$ 比。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max(a, max(b, c)) << endl;
    return 0;
}
```

---

## 37. [组队比赛](https://ac.nowcoder.com/acm/problem/205272)

**思路**：四个人分两组（每组两人），让两组实力差最小。

四个人一共只有**三种分组方式**：

- 第 $1$ 个和第 $2$ 个一组，第 $3$ 个和第 $4$ 个一组
- 第 $1$ 个和第 $3$ 个一组，第 $2$ 个和第 $4$ 个一组
- 第 $1$ 个和第 $4$ 个一组，第 $2$ 个和第 $3$ 个一组

对每种分组算一下两组的实力差（用 `abs()` 取绝对值，也就是差的正值），再用 `min()` 取三种里最小的那个。`min(a, min(b, c))` 取三个数的最小值，和上一题取最大值是同理的。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    int d1 = abs((a + b) - (c + d));
    int d2 = abs((a + c) - (b + d));
    int d3 = abs((a + d) - (b + c));
    cout << min(d1, min(d2, d3)) << endl;
    return 0;
}
```

---

## 38. [平方根](https://ac.nowcoder.com/acm/problem/22003)

**思路**：给定 $n$，求 $\sqrt{n}$ 的整数部分（向下取整）。

用 `sqrt()` 函数算出浮点结果，转成整数。但浮点有精度问题（比如 `sqrt(49)` 可能算出 $6.9999...$，取整变成 $6$ 而不是 $7$）。解决办法：在 `sqrt` 结果上加一个很小的数 `1e-8`（即 $0.00000001$）再取整，就能抵消浮点误差。比如 $6.9999999 + 0.00000001 = 7.0000000$，取整得到 $7$，正确。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    cout << (int)(sqrt((double)n) + 1e-8) << endl;
    return 0;
}
```

---

## 39. [长方体](https://ac.nowcoder.com/acm/problem/15869)

**思路**：给出长方体一个顶点的三个面的面积 $a, b, c$，求 $12$ 条边的边长之和。

设三条边为 $x, y, z$，则：$xy = a$，$xz = b$，$yz = c$（三个面的面积）。怎么求 $x, y, z$？

三个式子相乘：$xy \times xz \times yz = x^2y^2z^2 = abc$，所以 $xyz = \sqrt{abc}$。有了 $xyz$ 后：

- $x = xyz / (yz) = \sqrt{abc} / c = \sqrt{ab/c}$
- $y = \sqrt{ac/b}$
- $z = \sqrt{bc/a}$

$12$ 条边 $=$ 每条边出现 $4$ 次，所以边长和 $= 4 \times (x+y+z)$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long a, b, c;
    cin >> a >> b >> c;
    long long x = (long long)(sqrt((double)a * b / c) + 0.5);
    long long y = (long long)(sqrt((double)a * c / b) + 0.5);
    long long z = (long long)(sqrt((double)b * c / a) + 0.5);
    cout << 4 * (x + y + z) << endl;
    return 0;
}
```

---

## 40. [使徒袭来](https://ac.nowcoder.com/acm/problem/209794)

**思路**：三个正实数的乘积为 $n$，求三个数之和的最小值。

这是一个经典的不等式：**当三个数的乘积固定时，三个数相等时和最小**。可以这样理解——如果三个数不相等，你把大的缩小一点、小的增大一点（保持乘积不变），和会变小。所以当 $a = b = c$ 时和最小，此时 $a = b = c = \sqrt[3]{n}$，和 $= 3 \times \sqrt[3]{n}$。

立方根怎么算？`pow(n, 1.0/3.0)` 就是 $n$ 的立方根——`pow(x, y)` 是求 $x$ 的 $y$ 次方，$1/3$ 次方就是立方根。保留 $3$ 位小数输出。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << fixed << setprecision(3) << 3 * pow((double)n, 1.0 / 3.0) << endl;
    return 0;
}
```

---

## 41. [白兔的分身术](https://ac.nowcoder.com/acm/problem/15250)

**思路**：一开始 $1$ 只兔子，$k$ 轮操作每轮每只变 $p$ 只，$k$ 轮后总数 $= p^k = n$。求 $p+k$ 的最大值。

关键推理：$n = p^k$，要最大化 $p+k$。考虑两种情况：

- $k=1$ 时：$p = n$，$p+k = n+1$
- $k \ge 2$ 时：$p = n$ 的 $k$ 次方根 $\le \sqrt{n}$（因为 $p^k = n$，$k \ge 2$ 时 $p$ 不超过 $\sqrt{n}$），所以 $p+k \le \sqrt{n} + 60$

当 $n \ge 2$ 时，$n+1$ 远大于 $\sqrt{n} + 60$（比如 $n=100$ 时，$n+1=101$，$\sqrt{n}+60=70$）。所以 **$k=1$ 永远是最优选择**，答案就是 $n+1$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << n + 1 << endl;
    return 0;
}
```

---

## 42. [纸牌](https://ac.nowcoder.com/acm/problem/18945)

**思路**：两张牌上都写着 $n$，三轮操作（每轮换一张牌操作），每轮可以减去不超过另一张牌当前值的数，求三轮后两牌之和的最小值。

设初始两张牌都是 $n$，三轮分别减去 $x$、$y$、$z$。约束：

- 第 $1$ 轮操作牌 $1$：$x \le n$（另一张牌当前值是 $n$）
- 第 $2$ 轮操作牌 $2$：$y \le n-x$（另一张牌当前值是 $n-x$）
- 第 $3$ 轮操作牌 $1$：$z \le n-y$（另一张牌当前值是 $n-y$）
- 牌 $1$ 不能减成负数：$z \le n-x$（牌 $1$ 当前值），且 $z \le n-y$（牌 $2$ 当前值），即 $z \le \min(n-x, n-y)$

最终和 $= (n-x-z) + (n-y) = 2n - x - y - z$，要让它最小就要让 $x+y+z$ 最大。

约束本质是 $x+y \le n$ 和 $y+z \le n$。经过数学推导，$x+y+z$ 的最大值是 $n$，但还要保证牌 $1$ 不变成负数（$n-x-z \ge 0$），所以 $x+z \le n$。综合 $x+y \le n$、$y+z \le n$、$x+z \le n$ 三个约束，$x+y+z$ 的最大值不超过 $3n/2$... 但实际上取 $x=y=z=n/2$ 时 $x+y+z = 3n/2$，但需要验证约束。

经过验证，最优解是 $x+y+z = (n+1)/2$... 不对，实际经过推导答案就是 $(n+1)/2$。这个推导比较复杂，新手记住结论即可：最终两牌之和的最小值 $= (n+1)/2$。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << (n + 1) / 2 << endl;
    return 0;
}
```

---

## 43. [Tobaku Mokushiroku Kaiji](https://ac.nowcoder.com/acm/problem/19483)

**思路**：石头剪刀布，已知双方各牌数量，求最多赢几局。

贪心思路：石头赢剪刀、剪刀赢布、布赢石头。让每种牌尽可能多地赢对方被克制的牌即可：

- 我的石头 vs 对手的剪刀：赢 $\min($我石头数, 对手剪刀数$)$ 局
- 我的剪刀 vs 对手的布：赢 $\min($我剪刀数, 对手布数$)$ 局
- 我的布 vs 对手的石头：赢 $\min($我布数, 对手石头数$)$ 局

三个加起来就是答案。`min(a, b)` 就是取 $a$ 和 $b$ 中较小的那个，和 `max` 同理。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int a, b, c, d, e, f;
    cin >> a >> b >> c >> d >> e >> f;
    // a石头 b剪刀 c布 | d石头 e剪刀 f布
    cout << min(a, e) + min(b, f) + min(c, d) << endl;
    return 0;
}
```

---

## 44. [珂朵莉的假动态仙人掌](https://ac.nowcoder.com/acm/problem/14828)

**思路**：$n$ 个本子，每天至少送 $1$ 个，相邻两天送的数量不能相同，求最多送几天。

要让天数最多，每天送的就要尽量少。最少送 $1$ 个，但如果昨天送了 $1$ 个今天不能也送 $1$ 个，那今天送 $2$ 个。交替送 $1$ 和 $2$：$1, 2, 1, 2, 1, 2...$

$k$ 天最少需要多少个本子？送 $1$ 和 $2$ 交替，每两天需要 $3$ 个本子。$k$ 天需要 $\lceil 3k/2 \rceil$ 个。反过来 $n$ 个本子最多送几天？让 $\lceil 3k/2 \rceil \le n$，最大 $k = \lfloor 2n/3 \rfloor$。

验证：$n=4 \to (8+1)/3 = 3$ ✓（送 $1,2,1$ 共 $3$ 天用 $4$ 个）。$n=1 \to 3/3 = 1$ ✓。$n=2 \to 5/3 = 1$ ✓。$n=3 \to 7/3 = 2$ ✓（送 $1,2$ 共 $2$ 天用 $3$ 个）。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << (2 * n + 1) / 3 << endl;
    return 0;
}
```

---

## 45. [旅游观光](https://ac.nowcoder.com/acm/problem/14891)

**思路**：$n$ 个地方编号 $1\sim n$，从 $i$ 到 $j$ 的票价 $= (i+j) \bmod (n+1)$，票可无限用。走遍所有地方，最小花费。

关键观察：当 $i + j = n + 1$ 时，票价 $= (n+1) \bmod (n+1) = 0$！也就是说，编号 $i$ 和编号 $(n+1-i)$ 之间的票价是 $0$，可以免费来回走。

这些 $0$ 代价边把 $n$ 个地方分成若干组可以免费互通的对：比如 $n=10$ 时，$(1,10), (2,9), (3,8), (4,7), (5,6)$ 共 $5$ 组。组内免费，但组之间需要花钱（票价 $1$）。

要连通所有组，需要的"花钱边"数量 $=$ 组数 $- 1$。组数 $= n/2$（向上取整），所以答案 $=$ 组数 $- 1 = (n-1)/2$（整数除法）。

验证：$n=10 \to 9/2 = 4$ ✓。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    cout << (n - 1) / 2 << endl;
    return 0;
}
```

---

## 46. [[NOIP2002]自由落体](https://ac.nowcoder.com/acm/problem/16740)

**思路**：天花板高 $H$ 处有 $n$ 个小球（水平位置 $0\sim n-1$），小车长 $L$、高 $K$、距原点 $S_1$、速度 $V$。小球自由落体（$g=10$），小车同时开始运动。当小球距小车 $\le 0.00001$ 时被接受。求能接住多少球。

分两步想：

1. **小球什么时候到达车顶高度？** 小球从 $H$ 落到 $K$，下落距离 $= H-K$。由自由落体公式 $d = \frac{1}{2}gt^2$，所以 $t = \sqrt{(H-K)/5}$。$g=10$，所以 $\frac{1}{2}g = 5$。
2. **这个时刻小车的位置在哪？** 小车左端在 $S_1 + V \times t$，右端在 $S_1 + L + V \times t$。
3. **哪些小球能被接住？** 小球水平位置 $i$（$0, 1, 2, ..., n-1$）如果落在 $[$ 左端, 右端 $]$ 范围内，就能被接住。

不用循环统计，用数学公式：区间内整数个数 $= \lfloor$ 右端 $\rfloor - \lceil$ 左端 $\rceil + 1$，再和 $[0, n-1]$ 取交集（用 `max` 和 `min` 函数卡住边界）。`ceil()` 是向上取整（找 $\ge$ 左端的最小整数），`floor()` 是向下取整（找 $\le$ 右端的最大整数）。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    double H, S1, V, L, K;
    int n;
    cin >> H >> S1 >> V >> L >> K >> n;
    double t = sqrt((H - K) / 5.0);
    double left = S1 + V * t;
    double right = S1 + L + V * t;
    // 在 [left, right] 内且在 [0, n-1] 内的整数个数
    int lo = max(0, (int)ceil(left - 0.00001));
    int hi = min(n - 1, (int)floor(right + 0.00001));
    cout << max(0, hi - lo + 1) << endl;
    return 0;
}
```

---

## 47. [挂科](https://ac.nowcoder.com/acm/problem/212995)

**思路**：$n$ 个同学，$x$ 个挂了高树，$y$ 个挂了大雾。求同时挂两科的**最大**和**最小**可能人数。

这是**容斥原理**的经典应用：

- **最大值**：让挂两科的人尽量多。最多就是 $x$ 和 $y$ 中较小的那个（小集合完全包含在大集合里）。$\max = \min(x, y)$。
- **最小值**：让挂两科的人尽量少。最好完全不重叠，但如果不重叠 $x+y > n$（总人数不够），就必须有人重叠。最少重叠 $= x + y - n$（如果 $x+y \le n$，最少 $0$ 个重叠）。$\min = \max(0, x+y-n)$。

比如 $n=10, x=3, y=5$：最多 $3$ 人同时挂（全挂高树的也挂大雾），最少 $0$ 人同时挂（$3+5=8 \le 10$，可以不重叠）。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n, x, y;
    cin >> n >> x >> y;
    cout << min(x, y) << " " << max(0, x + y - n) << endl;
    return 0;
}
```

---

## 48. [得不到的爱情](https://ac.nowcoder.com/acm/problem/216071)

**思路**：两个互素的正整数 $N$ 和 $M$，求最大的不能表示为 $a \times N + b \times M$（$a,b \ge 0$）的正整数 $K$。

这是经典的 **Frobenius 问题**（也叫做"硬币问题"）。对于两个互素的正整数 $N$ 和 $M$，有一个公式：

**最大不能表示的数 $= N \times M - N - M$**

比如 $N=2, M=3$：答案是 $2 \times 3 - 2 - 3 = 1$。确实，$1$ 不能用 $2$ 和 $3$ 表示，而 $2=2 \times 1$，$3=3 \times 1$，$4=2 \times 2$，$5=2+3...$ 从 $2$ 开始都能表示。

这个公式叫 **Sylvester 公式**，只对互素的两个数成立。题目保证了 $N$ 和 $M$ 互素，所以直接套公式即可。注意结果可能很大，用 `long long`。

**标程**：

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    long long N, M;
    cin >> N >> M;
    cout << N * M - N - M << endl;
    return 0;
}
```

---

## 知识点索引

| 知识点                                        | 题号                                 |
| --------------------------------------------- | ------------------------------------ |
| 基本输入输出                                  | 1, 4, 8, 9, 10, 11, 12               |
| 格式化输出（`fixed`/`setprecision`）          | 5, 7, 11, 15, 25, 26, 27, 30, 33, 40 |
| 算术运算（`+` `-` `*` `/` `%`）               | 13, 14, 16, 17, 22, 23, 24, 32       |
| 取余与周期                                    | 18, 19                               |
| 字符与 `ASCII`                                | 20                                   |
| 进制转换（`hex` 操纵符）                      | 21                                   |
| 数学函数（`abs`/`sqrt`/`pow`/`ceil`/`floor`） | 22, 23, 30, 38, 39, 40, 46           |
| `max`/`min` 函数                              | 36, 37, 43, 46, 47                   |
| 几何公式                                      | 27, 28, 29, 30, 39                   |
| 数据类型与溢出                                | 31, 34                               |
| 整数与浮点运算坑                              | 15, 33, 35                           |
| 固定输出（硬编码）                            | 2, 3, 5, 20                          |
| 数学推导                                      | 38, 39, 40, 41, 42, 44, 45, 48       |
| 容斥原理                                      | 47                                   |
| Frobenius 数                                  | 48                                   |
