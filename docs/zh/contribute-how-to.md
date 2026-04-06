---
title: 如何贡献
hidden: true
mentions:
    - TheItsNameless
    - QuazChick
description: 做出你的第一个贡献！
---

## 关于本指南

本指南将引导你了解如何开始编辑 Wiki。虽然可以直接在 GitHub 网站上"原地"编辑 Wiki，但本指南将教你正确的技术。这是一项有价值的可转移技能，它将为你提供超出仅编辑 Wiki 的额外知识。

本文将教你如何使用 GitHub Desktop，这是管理本地仓库的最简单方式。也可以不使用 GitHub Desktop 而只使用 Git 来完成，但这更高级，我们不会在本指南中介绍。

如果你已经了解本指南中的一些步骤，可以随意使用右侧的目录跳到你不知道的部分！

如果你想了解更多关于我们精美的样式功能，请继续阅读我们的[贡献样式指南](/contribute-style)！

## 编辑 Wiki 的步骤

编辑 Wiki 有 5 个主要步骤需要遵循（下载和设置软件只在第一次做）：

1.  Fork 仓库
2.  Clone 仓库
3.  编辑 Wiki
4.  提交你的本地更改并与 GitHub 同步
5.  创建 Pull Request

如果你第一次看到这些，可能会觉得有点不知所措，但别担心！这非常简单，我们会一步一步地引导你完成。

## 设置软件

要编辑我们的 Wiki，你需要下载并安装以下软件：

-   GitHub Desktop
-   NodeJS
-   Visual Studio Code

如果你更频繁地编辑 Wiki，你可能想开始使用 Git，因为它比 GitHub Desktop 更强大。但别担心，GitHub Desktop 对我们来说就足够了！

### Visual Studio Code

[Visual Studio Code (VSCode)](https://code.visualstudio.com/Download) 是一个很棒的环境，可以编辑所有文件、编写代码等。你也可以使用其他编辑器，但在本教程中我们将引导你完成 VSCode 的安装。

![](/assets/images/contribute/setting_up_software/vscode/vsc_download.png)

#### 安装

转到你保存 .exe 文件的文件夹并双击它。设置窗口会打开。大多数时候可以点击 `next`，只要确保在"附加任务"窗口中选择了 `add to PATH`。

在最后一页，只需点击 `install`。

安装完成后，只需点击 `Finish`。VSCode 现在应该会启动。如果没有启动，请手动打开它。

现在你可以自定义 VSCode 的外观。如果你完成了或不想自定义它，请点击"Next Section"。

<WikiImage src="/assets/images/contribute/setting_up_software/vscode/vsc_look.png" width="210" />

现在你可以学习一些 VSCode 的基础知识。和之前一样，如果你完成了，只需点击"Next Section"。

<WikiImage
    src="/assets/images/contribute/setting_up_software/vscode/vsc_fundamentals.png"
    width="210"
/>

在最后一页，和之前一样，如果你准备好了请点击"Mark Done"。

<WikiImage
    src="/assets/images/contribute/setting_up_software/vscode/vsc_productivity.png"
    width="210"
/>

VSCode 的安装完成了。现在你可以关闭它。

### GitHub Desktop

[GitHub Desktop](https://desktop.github.com) 用于下载 GitHub 仓库，这样你就可以在本地编辑它们。也可以使用 Git（一个命令行工具）来做到这一点，但这更高级，不会本教程中介绍。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_download.png)

#### 安装

和之前一样，转到你保存 .exe 文件的文件夹并双击它。设置将打开并自动安装 GitHub Desktop。完成后，GitHub Desktop 将自动启动。

<WikiImage
    src="/assets/images/contribute/setting_up_software/ghdesktop/ghd_install.png"
    width="210"
/>

接下来它要求你登录。如果你已经有 GitHub 账户，只需点击 `Sign in to GitHub.com`。在浏览器标签中，只需登录你的账户。如果你没有 GitHub 账户，点击 `Create your free account` 创建一个账户。然后正常继续。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_login.png)

现在在 GitHub Desktop 中，不要更改任何内容，点击"Finish"。

![](/assets/images/contribute/setting_up_software/ghdesktop/ghd_configure.png)

目前，你可以关闭 GitHub Desktop。

### NodeJS

通过 [NodeJS](https://www.nodejs.org) 我们可以在本地预览 Wiki，就像它在网络上显示的那样。这很棒，可以在推送之前发现拼写错误或错误，从而避免在合并时出现错误。

![](/assets/images/contribute/setting_up_software/nodejs/njs_download.png)

#### 安装

现在，再次转到你的下载文件夹并双击 nodejs 设置文件。对于我们的设置，你不需要更改任何东西。只需确保你没有添加 `Tools for native modules`，因为我们不需要它们。在最后一页，只需点击 `Install`。等待安装完成，然后点击 `Finish`。

## 设置本地环境

现在我们已经安装了所有必要的程序，我们可以开始为 Wiki 做贡献了。首先，我们必须设置本地工作环境。别担心，这非常简单。只需按照以下步骤操作：

打开我们的 [GitHub 仓库](https://github.com/Bedrock-OSS/bedrock-wiki) 并点击 `Fork`。如果你已经 Fork 了，没问题！继续往下操作。

![](/assets/images/contribute/setting_up_local/setup_fork.png)

打开 GitHub Desktop 并点击 `Clone a repository from the Internet`。

![](/assets/images/contribute/setting_up_local/setup_clone.png)

现在选择你的 fork 并点击"Clone"。你的仓库将自动被 clone。

![](/assets/images/contribute/setting_up_local/setup_clone_2.png)

之后，你将看到你的 clone 的概览。要处理它，只需点击"Open in Visual Studio Code"。VSCode 将自动打开我们的 Wiki。如果 VSCode 询问你是否应该信任该文件夹，只需点击 `Yes, I trust the authors`。

![](/assets/images/contribute/setting_up_local/setup_vsc.png)

现在你已成功将 Wiki clone 到你的本地设备，你可以编辑所有文件了！

## 提交你的更改

完成 Wiki 的编辑后，你可以直接将更改提交并推送到我们的仓库！

切换到 GitHub Desktop，你应该能看到你的更改。如果你看不到它们，请确保你已保存文件并在 GitHub Desktop 中打开了正确的仓库。

在 GitHub Desktop 中确认你的更改后，你可以给你的提交一个名称和描述（但两者都不是必需的），然后点击 `commit to main`。

![](/assets/images/contribute/committing_changes/committing.png)

提交你的更改后，你需要将你的本地 clone 推送到 GitHub。只需点击 `Push commits to the origin remote`。

![](/assets/images/contribute/committing_changes/committing_push.png)

GitHub 现在会将你的本地 clone 发送到他们的服务器。

## 创建 Pull Request

现在 GitHub 已经有了你的编辑，你需要创建一个"Pull Request"（PR），这样我们才能合并你的更改。

有很多方法可以做到这一点。现在，只需点击 GitHub Desktop 中的 `Create Pull Request`。

![](/assets/images/contribute/creating_pr/pr.png)

GitHub Desktop 将在浏览器中打开你的 PR。你可以编辑你的 PR，但你不需要。一切应该已经正确并且足以让我们合并它。只需点击 `Create Pull Request`。

![](/assets/images/contribute/creating_pr/pr_2.png)

完成了！现在轮到我们在我们的 Wiki 中合并你的更改了！

## 更新本地环境

因为你不是唯一在 Wiki 上工作的人，你当前的本地 clone 可能有一些更改。要更新你的本地 clone，你需要更新你的 fork。别担心，这非常简单！

在浏览器中打开 GitHub，打开你的 fork。你会看到一个字段显示你已过期。只需点击 `Fetch upstream`，然后点击 `Fetch and merge`。

![](/assets/images/contribute/updating_local/updating.png)

现在在 GitHub Desktop 中你需要通过点击 `Pull Origin` 来拉取 origin。你的本地 clone 应该会自动更新。

![](/assets/images/contribute/updating_local/updating_pull.png)

你的本地 clone 现在是最新的了！

### 故障排除

每次其他人更新我们的 Wiki 时都必须执行此操作。如果你忘记了这一点，你可能会遇到一些问题，比如我们无法自动合并你的 PR。（你可以在尝试打开 PR 时看到这一点）

![](/assets/images/contribute/troubleshooting/merge/merge_merge.png)

如果发生这种情况，别担心。你可以很容易地解决这个问题。

#### 修复

像上一步一样更新你的 fork。之后，你不能只是将更改 pull 到你的本地 clone，因为这会导致问题。相反，点击 `Current branch`。

![](/assets/images/contribute/troubleshooting/merge/merge_branch.png)

现在点击 `Choose a branch to merge into ...`。

<WikiImage
    src="/assets/images/contribute/troubleshooting/merge/merge_choose_branch.png"
    width="250"
/>

选择默认分支（它应该已经选中）并点击 `Create a merge commit`。

<WikiImage src="/assets/images/contribute/troubleshooting/merge/merge_commit.png" width="260" />

现在在 VSCode 中打开。

![](/assets/images/contribute/troubleshooting/merge/merge_open.png]

点击 `Accept Current Change`，因为你想更新你的更改，而不是其他人的更改。这一步必须为每个存在的问题完成。如果你没有为每个问题都这样做，我们就无法合并你的 PR。

![](/assets/images/contribute/troubleshooting/merge/merge_accept.png]

否则，你可以 `Accept Incoming Change` 来接受其他人所做的更改。然后保存并返回 GitHub Desktop。在那里你只需点击 `continue merge`。

![](/assets/images/contribute/troubleshooting/merge/merge_continue.png]

现在这个问题解决了！你可以安全地继续，提交到你的分支并创建 PR。

## 结论

现在你已安装所有软件并学习了我们编辑 Wiki 所需的所有技能！如果你想了解更多关于为文章添加样式的内容，请阅读我们的指南

<Button link="/contribute-style">如何编辑我们 Wiki 上的页面</Button>
