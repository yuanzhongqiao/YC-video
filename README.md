<div class="Box-sc-g0xbh4-0 bJMeLZ js-snippet-clipboard-copy-unpositioned" data-hpc="true"><article class="markdown-body entry-content container-lg" itemprop="text"><br>
<p align="center" dir="auto">
  <a href="https://re.video" rel="nofollow">
    <themed-picture data-catalyst-inline="true" data-catalyst=""><picture>
      <source media="(prefers-color-scheme: dark)" srcset="/redotvideo/revideo/raw/main/logo_dark.svg">
      <img width="360" alt="重新视频标志" src="/redotvideo/revideo/raw/main/logo.svg" style="visibility:visible;max-width:100%;">
    </picture></themed-picture>
  </a>
</p>
<p align="center" dir="auto">
  <a href="https://lerna.js.org" rel="nofollow"><img src="https://camo.githubusercontent.com/b571635460742aca2ea51bd97605e07b77d0eab420b7b2cb6c8c1bf28ffe6c53/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7075626c6973686564253230776974682d6c65726e612d6330383466633f7374796c653d666c6174" alt="与 lerna 一起发表" data-canonical-src="https://img.shields.io/badge/published%20with-lerna-c084fc?style=flat" style="max-width: 100%;"></a>
  <a href="https://vitejs.dev" rel="nofollow"><img src="https://camo.githubusercontent.com/680f523164e3b85654f193c2b921457a85669e42682dc19bf0fc057e1ad09e17/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f776572656425323062792d766974652d3634366366663f7374796c653d666c6174" alt="由 vite 提供支持" data-canonical-src="https://img.shields.io/badge/powered%20by-vite-646cff?style=flat" style="max-width: 100%;"></a>
  <a href="https://www.npmjs.com/package/@revideo/core" rel="nofollow"><img src="https://camo.githubusercontent.com/6ec1827e2139c8fe93f8262080c72bdce485423d9a1a42b7c1c73762cabdabf5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407265766964656f2f636f72653f7374796c653d666c6174" alt="npm 包版本" data-canonical-src="https://img.shields.io/npm/v/@revideo/core?style=flat" style="max-width: 100%;"></a>
  <a href="https://discord.com/invite/JDjbfp6q2G" rel="nofollow"><img src="https://camo.githubusercontent.com/a7bddf0d10924f59bdfd2f96178b83f2705c40110216ff592d312e19db04c6c7/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f313037313032393538313030393635373839363f7374796c653d666c6174266c6f676f3d646973636f7264266c6f676f436f6c6f723d66666626636f6c6f723d343034656564" alt="不和谐" data-canonical-src="https://img.shields.io/discord/1071029581009657896?style=flat&amp;logo=discord&amp;logoColor=fff&amp;color=404eed" style="max-width: 100%;"></a>
</p>
<br>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Revideo - 使用代码创建视频</font></font></h1><a id="user-content-revideo---create-videos-with-code" class="anchor" aria-label="永久链接：Revideo - 使用代码创建视频" href="#revideo---create-videos-with-code"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Revideo 可让您使用 Typescript 创建视频。它是从令人惊叹的
</font></font><a href="https://motioncanvas.io/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Motion Canvas</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库中分叉出来的，并经过扩展以提供视频必需的功能，例如：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成和编辑音频的能力</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于渲染参数化视频的 API</font></font></li>
</ul>
<p dir="auto"><font style="vertical-align: inherit;"></font><a href="https://www.remotion.dev/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Revideo 旨在成为Remotion</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的开源替代品
</font><font style="vertical-align: inherit;">，Remotion 具有
</font></font><a href="https://github.com/remotion-dev/remotion/blob/main/LICENSE.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">限制性许可证</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不适合许多项目。虽然 Remotion 构建在 React 之上，但 Revideo 使用 HTML Canvas API 并使用生成器函数。</font></font><br></p>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门</font></font></h2><a id="user-content-getting-started" class="anchor" aria-label="永久链接：开始使用" href="#getting-started"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要创建示例项目，请运行以下命令：</font></font></p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre>npm init @revideo@latest</pre><div class="zeroclipboard-container">
    
  </div></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该示例项目将具有以下代码，它定义了如下所示的视频。</font></font></p>
<div class="highlight highlight-source-tsx notranslate position-relative overflow-auto" dir="auto"><pre><span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">Audio</span><span class="pl-kos">,</span> <span class="pl-smi">Img</span><span class="pl-kos">,</span> <span class="pl-smi">Video</span><span class="pl-kos">,</span> <span class="pl-s1">makeScene2D</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'@revideo/2d'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-s1">all</span><span class="pl-kos">,</span> <span class="pl-s1">chain</span><span class="pl-kos">,</span> <span class="pl-s1">createRef</span><span class="pl-kos">,</span> <span class="pl-s1">waitFor</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'@revideo/core'</span><span class="pl-kos">;</span>

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-en">makeScene2D</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-c1">*</span> <span class="pl-kos">(</span><span class="pl-s1">view</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-s1">logoRef</span> <span class="pl-c1">=</span> <span class="pl-en">createRef</span><span class="pl-kos">&lt;</span><span class="pl-smi">Img</span><span class="pl-kos">&gt;</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-k">yield</span> <span class="pl-s1">view</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span>
    <span class="pl-c1">&lt;</span><span class="pl-c1">&gt;</span>
      <span class="pl-c1">&lt;</span><span class="pl-smi">Video</span>
        <span class="pl-c1">src</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s">'https://revideo-example-assets.s3.amazonaws.com/stars.mp4'</span><span class="pl-kos">}</span>
        <span class="pl-c1">size</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-kos">[</span><span class="pl-s">'100%'</span><span class="pl-kos">,</span> <span class="pl-s">'100%'</span><span class="pl-kos">]</span><span class="pl-kos">}</span>
        <span class="pl-c1">play</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">true</span><span class="pl-kos">}</span>
      <span class="pl-c1">/</span><span class="pl-c1">&gt;</span>
      <span class="pl-c1">&lt;</span><span class="pl-smi">Audio</span>
        <span class="pl-c1">src</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s">'https://revideo-example-assets.s3.amazonaws.com/chill-beat.mp3'</span><span class="pl-kos">}</span>
        <span class="pl-c1">play</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">true</span><span class="pl-kos">}</span>
        <span class="pl-c1">time</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-c1">17.0</span><span class="pl-kos">}</span>
      <span class="pl-c1">/</span><span class="pl-c1">&gt;</span>
    <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-c1">&gt;</span><span class="pl-kos">,</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-k">yield</span><span class="pl-c1">*</span> <span class="pl-en">waitFor</span><span class="pl-kos">(</span><span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-s1">view</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span>
    <span class="pl-c1">&lt;</span><span class="pl-smi">Img</span>
      <span class="pl-c1">width</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s">'1%'</span><span class="pl-kos">}</span>
      <span class="pl-c1">ref</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">logoRef</span><span class="pl-kos">}</span>
      <span class="pl-c1">src</span><span class="pl-c1">=</span><span class="pl-kos">{</span>
        <span class="pl-s">'https://revideo-example-assets.s3.amazonaws.com/revideo-logo-white.png'</span>
      <span class="pl-kos">}</span>
    <span class="pl-c1">/</span><span class="pl-c1">&gt;</span><span class="pl-kos">,</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-k">yield</span><span class="pl-c1">*</span> <span class="pl-en">chain</span><span class="pl-kos">(</span>
    <span class="pl-en">all</span><span class="pl-kos">(</span><span class="pl-en">logoRef</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">scale</span><span class="pl-kos">(</span><span class="pl-c1">40</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">,</span> <span class="pl-en">logoRef</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">rotation</span><span class="pl-kos">(</span><span class="pl-c1">360</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
    <span class="pl-en">logoRef</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">scale</span><span class="pl-kos">(</span><span class="pl-c1">60</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre><div class="zeroclipboard-container">
     
  </div></div>
<details open="" class="details-reset border rounded-2">
  <summary class="px-3 py-2">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-camera-video">
    <path d="M16 3.75v8.5a.75.75 0 0 1-1.136.643L11 10.575v.675A1.75 1.75 0 0 1 9.25 13h-7.5A1.75 1.75 0 0 1 0 11.25v-6.5C0 3.784.784 3 1.75 3h7.5c.966 0 1.75.784 1.75 1.75v.675l3.864-2.318A.75.75 0 0 1 16 3.75Zm-6.5 1a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-6.5ZM11 8.825l3.5 2.1v-5.85l-3.5 2.1Z"></path>
</svg>
    <span aria-label="视频描述 revideo-example.mp4" class="m-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">revideo-example.mp4</font></font></span>
    <span class="dropdown-caret"></span>
  </summary>

  <video src="https://private-user-images.githubusercontent.com/122226645/316335996-4d4e56ba-5143-4e4b-9acf-d8a04330d162.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUwMDgyOTAsIm5iZiI6MTcxNTAwNzk5MCwicGF0aCI6Ii8xMjIyMjY2NDUvMzE2MzM1OTk2LTRkNGU1NmJhLTUxNDMtNGU0Yi05YWNmLWQ4YTA0MzMwZDE2Mi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwNlQxNTA2MzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYjgzODY4NGEyNDU2YzNiY2UyYmJmYmUzNzIzNTEyNjhhMWIxOGQwZmFjNTEwYTRlODIwYzA4MmZhNzA1ZGRiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uP7xJY6NqI_PdQJycoB4QyRg2AdYKdLrlZC91sP3rlU" data-canonical-src="https://private-user-images.githubusercontent.com/122226645/316335996-4d4e56ba-5143-4e4b-9acf-d8a04330d162.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUwMDgyOTAsIm5iZiI6MTcxNTAwNzk5MCwicGF0aCI6Ii8xMjIyMjY2NDUvMzE2MzM1OTk2LTRkNGU1NmJhLTUxNDMtNGU0Yi05YWNmLWQ4YTA0MzMwZDE2Mi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwNlQxNTA2MzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYjgzODY4NGEyNDU2YzNiY2UyYmJmYmUzNzIzNTEyNjhhMWIxOGQwZmFjNTEwYTRlODIwYzA4MmZhNzA1ZGRiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uP7xJY6NqI_PdQJycoB4QyRg2AdYKdLrlZC91sP3rlU" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px">

  </video>
</details>

<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遥测</font></font></h2><a id="user-content-telemetry" class="anchor" aria-label="永久链接：遥测" href="#telemetry"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了了解人们如何使用 Revideo，我们</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪使用开源工具
</font></font><a href="https://github.com/PostHog/posthog"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Posthog</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染的视频数量。您可以</font></font><a href="https://github.com/redotvideo/revideo/tree/main/packages/ffmpeg/server/telemetry"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到我们实现 Posthog 的代码
</font><font style="vertical-align: inherit;">。</font></font></p>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要禁用遥测，只需设置以下环境变量：</font></font></p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre>DISABLE_TELEMETRY=true</pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="DISABLE_TELEMETRY=true" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多</font></font></h2><a id="user-content-learn-more" class="anchor" aria-label="永久链接：了解更多" href="#learn-more"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要了解有关 Revideo 的更多信息，请随时查看我们的
</font></font><a href="http://docs.re.video/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或加入我们的
</font></font><a href="https://discord.gg/hexYBZGBY8" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Discord 服务器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</article></div>
