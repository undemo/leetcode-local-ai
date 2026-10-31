<p align="center">
  <img src="assets/banner.svg" alt="Leet Local AI · 原生界面，自带 API" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/undemo/leetcode-local-ai/releases/tag/v2.5.1"><img src="https://img.shields.io/badge/version-2.5.1-8b5cf6?style=flat-square" alt="v2.5.1" /></a>
  <img src="https://img.shields.io/badge/LeetCode-CN-f59e0b?style=flat-square&amp;logo=leetcode&amp;logoColor=white" alt="LeetCode CN" />
  <img src="https://img.shields.io/badge/API-Chat_Completions-64748b?style=flat-square" alt="Chat Completions API" />
  <a href="https://github.com/undemo/leetcode-local-ai/stargazers"><img src="https://img.shields.io/github/stars/undemo/leetcode-local-ai?style=flat-square&amp;color=8b5cf6" alt="GitHub stars" /></a>
</p>

<p align="center">
  在力扣原生 Leet 侧栏里，用自己的 API 聊题、解释代码、分析提交。
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/undemo/leetcode-local-ai/main/leetcode-local-ai.user.js"><img src="https://img.shields.io/badge/一键安装-Tampermonkey-8b5cf6?style=for-the-badge&amp;logo=tampermonkey&amp;logoColor=white" alt="一键安装油猴脚本" /></a>
</p>

<p align="center">
  <a href="#安装与配置">安装配置</a> · <a href="#功能">功能</a> · <a href="#更新记录">更新记录</a> · <a href="docs/IMPLEMENTATION.md">技术说明</a> · <a href="https://github.com/undemo/leetcode-local-ai/issues">反馈问题</a>
</p>

## 功能

- **原生界面**：复用 Leet 输入框、消息、历史、代码块和工作流。
- **自己的 API**：自定义 Base URL、Key、模型，支持 DeepSeek 及兼容接口。
- **流式对话**：逐段显示思考与正文，支持追问、停止和重新生成。
- **思考控制**：全局开关与强度，Leet 面板可单独覆盖。
- **提交分析**：原生方法、效率与代码风格卡片，支持复杂度曲线和本地缓存。
- **最新上下文**：按本次运行配对输入、实际输出、预期结果，避免混入旧提交错误。

## 安装与配置

1. 安装并启用 [Tampermonkey](https://www.tampermonkey.net/)，点击上方 **一键安装**，在扩展页面确认安装。
2. 打开或完整刷新 [力扣题目页](https://leetcode.cn/problems/maximum-product-subarray/)，从油猴菜单设置以下三项：

   | 设置 | DeepSeek 示例 |
   | --- | --- |
   | Leet · Base URL | `https://api.deepseek.com` |
   | Leet · API Key | 你自己的 Key |
   | Leet · 模型 | `deepseek-flash`，也可填写服务商支持的模型名 |

3. 点击顶部紫色 **问下 Leet** 开始对话；在提交详情中点击 **分析** 生成卡片。

**思考与流式输出**在油猴菜单「Leet · 设置」调整。输入区模型旁的思考选项只影响 Leet 对话；提交分析使用全局设置。Base URL 也可填写 `/v1` 或完整的 `/chat/completions` 地址。

升级可重新点击安装按钮；安装后的版本检查使用本仓库的固定更新地址。升级后请完整刷新力扣页面。

## 更新记录

| 版本 | 更新内容 |
| --- | --- |
| **2.5.1** | 适配新版用户状态模块，修复 Agent 开关；移除自定义 API 模式的会员与演示视频提示。 |
| **2.5** | 修复最新运行混入旧提交失败信息；区分历史结果与当前执行代码。 |
| **2.4** | 修复回答结束后仍显示思考中，以及关闭思考后的提交分析超时。 |
| **2.3** | 增加全局／Leet 独立思考设置，修复流式内容一次性出现的问题。 |
| **2.2** | 支持多变量复杂度曲线，分析建议改为短句与编号换行。 |
| **2.1** | 接入原生提交分析卡片、复杂度图表和本地缓存。 |
| **2.0** | 接入原生 Leet 对话、历史和工作流。 |

## 使用说明

- Key、聊天记录和分析缓存保存在本机油猴存储。题干、代码和运行结果会发送给你配置的 API，调用费用由该服务商计算。
- Agent 开关用于本地提示工作流；当前不包含自动运行测试的工具执行器。原站提示词位于服务端，提交分析使用本项目的中文提示词。
- 适配力扣中文站，原站改版后可能需要更新脚本。遇到问题可提交 [Issue](https://github.com/undemo/leetcode-local-ai/issues)，请勿附上 API Key。

更多接入方式、缓存行为与验证记录见 [技术说明](docs/IMPLEMENTATION.md)。
