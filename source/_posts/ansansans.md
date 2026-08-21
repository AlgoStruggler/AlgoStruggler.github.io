---
title: ansansans
date: 2026-08-21 10:36:52
tags:
---

# [CSP-J 2023] 公路（road）

```c++
#include <bits/stdc++.h>
using namespace std;

using ll = long long;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    ll d;
    cin >> n >> d;

    vector<ll> v(n);
    for (int i = 1; i < n; i++) {
        cin >> v[i];
    }

    vector<ll> a(n + 1);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    ll ans = 0;
    ll oil = 0;
    ll price = a[1];
    for (int i = 1; i < n; i++) {
        ll need = (v[i] + d - 1) / d;
        if (oil < need) {
            ans += (need - oil) * a[i];
            oil = need;
        }
        oil -= need;
        if (a[i + 1] < a[i]) {
            price = a[i + 1];
        }
    }

    cout << ans << endl;

    return 0;
}
```

# [GESP202409二级] 数位之和-T1

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0;

    while (n--) {
        int x;
        cin >> x;
        sum += __builtin_popcount(x);
    }

    cout << sum << ' ' << sum % 2 << '\n';

    return 0;
}
```

# [GESP202506三级] 奇偶校验-T1

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;

        while (x > 0) {
            sum += x & 1;
            x >>= 1;
        }
    }

    cout << sum << " " << sum % 2 << '\n';

    return 0;
}
```

# [GESP202406四级] 黑白方块-T1

```cpp
#include <bits/stdc++.h>
using namespace std;

using ll = long long;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    vector<string> a(n + 1);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] = " " + a[i];
    }
    
    int sum[15][15] = {};
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            int val = (a[i][j] == '1' ? 1 : -1);

            sum[i][j] =
                sum[i - 1][j]
                + sum[i][j - 1]
                - sum[i - 1][j - 1]
                + val;
        }
    }

    int ans = 0;
    for (int x1 = 1; x1 <= n; x1++) {
        for (int x2 = x1; x2 <= n; x2++) {
            for (int y1 = 1; y1 <= m; y1++) {
                for (int y2 = y1; y2 <= m; y2++) {

                    int s =
                        sum[x2][y2]
                        - sum[x1 - 1][y2]
                        - sum[x2][y1 - 1]
                        + sum[x1 - 1][y1 - 1];

                    if (s == 0) {
                        int area = (x2 - x1 + 1) * (y2 - y1 + 1);
                        ans = max(ans, area);
                    }
                }
            }
        }
    }

    cout << ans << '\n';

    return 0;
}
```

# [GESP202409三级] 回文拼接-T2

```c++
#include <bits/stdc++.h>
using namespace std;

bool ckck(const string& s, int l, int r) {
    while (l < r) {
        if (s[l] != s[r])
            return false;
        l++;
        r--;
    }
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    while (n--) {
        string s;
        cin >> s;

        int len = s.size();
        bool ok = false;
        for (int i = 2; i <= len - 2; i++) {
            if (ckck(s, 0, i - 1) &&
                ckck(s, i, len - 1)) {
                ok = true;
                break;
            }
        }

        cout << (ok ? "Yes" : "No") << '\n';
    }

    return 0;
}
```

# [GESP202412五级] 奇妙数字-T1

这个题目就不写对了，写了个看着对但是错的版本。

```c++
#include <bits/stdc++.h>
using namespace std;

using long long ll;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    ll n;
    cin >> n;

    int ans = 0;

    for (ll p = 2; p * p <= n; ++p) {
        if (n % p == 0) {
            int cnt = 0;

            while (n % p == 0) {
                n /= p;
                cnt++;
            }
            ans += cnt;
        }
    }
    if (n > 1) {
        ans++;
    }

    cout << ans << '\n';

    return 0;
}
```

