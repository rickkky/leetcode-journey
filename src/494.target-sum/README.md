# [494. 目标和](https://leetcode-cn.com/problems/target-sum/)

## [动态规划](./solution_dynamic-programming.ts)

用 `schemes[i][j]` 表示“用数组中的前 `i` 个元素，组成和为 `j` 的方案数”。对于第 `i` 个数 `nums[i]`，状态转移方程如下：

```javascript
schemes[i][j] = schemes[i - 1][j - nums[i]] + schemes[i - 1][j + nums[i]];
```

也可以写成递推的形式：

```javascript
schemes[i][j + nums[i]] += schemes[i - 1][j];
schemes[i][j - nums[i]] += schemes[i - 1][j];
```

最终的解为 `schemes[nums.length][target]`。

需要注意的是，`j` 有可能是负数，而在很多语言中，数组的下标是不允许为负数的。由于 `nums` 中元素（皆为非负数）的和不超过 1000，因此可以确定数组的整体范围，用 `j + 1000` 来表示原来的 `j`。

在上面的状态转移方程中，可以发现 `schemes[i][...]` 只和 `schemes[i - 1][...]` 有关，因此我们可以不需要一个二维数组，只需要两个一维数组，以此来优化空间使用。
