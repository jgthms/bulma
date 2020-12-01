# [Bulma](https://bulma.io)

> 基于[Bulma](https://bulma.io)，后续会添加一些自己的样式。

- #### `bulma-original`：Bulma原本分支

- #### `bulma-me`：自定义的分支

### 样式工具类-色彩
参照Ant Design色彩设计和ng-alain，依 [色彩](https://ant.design/docs/spec/colors-cn) 章节，产生了一种运用于文本、背景的色系类。

| 名称       | 基本色  | 说明                     |
| :--------- | :------ | :----------------------- |
| `red`      | #f5222d | 薄暮：斗志、奔放         |
| `volcano`  | #fa541c | 火山：醒目、澎湃         |
| `orange`   | #fa8c16 | 日暮：温暖、欢快         |
| `gold`     | #faad14 | 金盏花：活力、积极       |
| `yellow`   | #fadb14 | 日出：出生、阳光         |
| `lime`     | #a0d911 | 青柠：自然、生机         |
| `green`    | #f5222d | 极光绿：健康、创新       |
| `cyan`     | #13c2c2 | 明青：希望、坚强         |
| `blue`     | #1890ff | 拂晓蓝：包容、科技、普惠 |
| `geekblue` | #2f54eb | 极客蓝：探索、钻研       |
| `purple`   | #722ed1 | 酱紫：优雅、浪漫         |
| `magenta`  | #eb2f96 | 法式洋红：平稳、中性     |

Ant Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。

**分类**

| 名称     | 色号 |
| :------- | :--- |
| `light`  | 5号  |
| `normal` | 6号  |
| `dark`   | 7号  |

**命名格式**

```regex
ming-ant-[<类型>text|bg]-[<色彩名>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
```

> `normal` 本身即是基本色，所以可以被忽略 `grey` 可能会更常用，所以额外增加 `grey-lighter`、`grey-darker` 别名表示深度

示例：

```less
// Text color
.ming-ant-text-red-light { color: #ff4d4f !important; }
.ming-ant-text-red { color: #f5222d !important; }
.ming-ant-text-red-dark { color: #c51c2a !important; }

// background-color color
.ming-ant-bg-red-light { background-color: #ff4d4f !important; }
.ming-ant-bg-red { background-color: #f5222d !important; }
.ming-ant-bg-red-dark { background-color: #c51c2a !important;}

// hover color
.ming-ant-bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }
.ming-ant-bg-red-h { &:hover { background-color: #f04134 !important; } }
.ming-ant-bg-red-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 全量颜色

所有 120 个颜色的规则。

```less
.ming-ant-text-red-1 { color: #fff1f0 !important; }
.ming-ant-text-red-6 { color: #f04134 !important; }
.ming-ant-text-red-10 { color: #5c0011 !important; }

.ming-ant-bg-red-6 { color: #f04134 !important; }
.ming-ant-bg-red-6-h { color: #f04134 !important; }
```

> **由于Ant Design是使用Less实现的颜色算法，这里使用Sass重写的，由于在两者存在一定的差别，所以在色值上和Ant Design存在一定的差异。**
>
> 转换的细节借鉴于此文章：[使用sass打造 antd色板系统](https://zhuanlan.zhihu.com/p/68646055)
### 样式工具类-色彩
参照Ant Design色彩设计和ng-alain，依 [色彩](https://ant.design/docs/spec/colors-cn) 章节，产生了一种运用于文本、背景的色系类。

| 名称       | 基本色  | 说明                     |
| :--------- | :------ | :----------------------- |
| `red`      | #f5222d | 薄暮：斗志、奔放         |
| `volcano`  | #fa541c | 火山：醒目、澎湃         |
| `orange`   | #fa8c16 | 日暮：温暖、欢快         |
| `gold`     | #faad14 | 金盏花：活力、积极       |
| `yellow`   | #fadb14 | 日出：出生、阳光         |
| `lime`     | #a0d911 | 青柠：自然、生机         |
| `green`    | #f5222d | 极光绿：健康、创新       |
| `cyan`     | #13c2c2 | 明青：希望、坚强         |
| `blue`     | #1890ff | 拂晓蓝：包容、科技、普惠 |
| `geekblue` | #2f54eb | 极客蓝：探索、钻研       |
| `purple`   | #722ed1 | 酱紫：优雅、浪漫         |
| `magenta`  | #eb2f96 | 法式洋红：平稳、中性     |

Ant Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。

**分类**

| 名称     | 色号 |
| :------- | :--- |
| `light`  | 5号  |
| `normal` | 6号  |
| `dark`   | 7号  |

**命名格式**

```regex
ming-ant-[<类型>text|bg]-[<色彩名>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
```

> `normal` 本身即是基本色，所以可以被忽略 `grey` 可能会更常用，所以额外增加 `grey-lighter`、`grey-darker` 别名表示深度

示例：

```less
// Text color
.ming-ant-text-red-light { color: #ff4d4f !important; }
.ming-ant-text-red { color: #f5222d !important; }
.ming-ant-text-red-dark { color: #c51c2a !important; }

// background-color color
.ming-ant-bg-red-light { background-color: #ff4d4f !important; }
.ming-ant-bg-red { background-color: #f5222d !important; }
.ming-ant-bg-red-dark { background-color: #c51c2a !important;}

// hover color
.ming-ant-bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }
.ming-ant-bg-red-h { &:hover { background-color: #f04134 !important; } }
.ming-ant-bg-red-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 全量颜色

所有 120 个颜色的规则。

```less
.ming-ant-text-red-1 { color: #fff1f0 !important; }
.ming-ant-text-red-6 { color: #f04134 !important; }
.ming-ant-text-red-10 { color: #5c0011 !important; }

.ming-ant-bg-red-6 { color: #f04134 !important; }
.ming-ant-bg-red-6-h { color: #f04134 !important; }
```

> **由于Ant Design是使用Less实现的颜色算法，这里使用Sass重写的，由于在两者存在一定的差别，所以在色值上和Ant Design存在一定的差异。**
>
> 转换的细节借鉴于此文章：[使用sass打造 antd色板系统](https://zhuanlan.zhihu.com/p/68646055)
