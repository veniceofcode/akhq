"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[979],{2371:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-c3080642",path:"/docs/dev.html",title:"Development Environment",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Early dev image",slug:"early-dev-image",children:[]},{level:2,title:"Development Server",slug:"development-server",children:[]},{level:2,title:"Setup local dev environment on Windows",slug:"setup-local-dev-environment-on-windows",children:[]}],filePathRelative:"docs/dev.md",git:{updatedTime:1653596463e3,contributors:[{name:"Ludovic DEHON",email:"tchiot.ludo@gmail.com",commits:1}]}}},5893:(e,n,a)=>{a.r(n),a.d(n,{default:()=>U});var s=a(6252);const t=(0,s.uE)('<h1 id="development-environment" tabindex="-1"><a class="header-anchor" href="#development-environment" aria-hidden="true">#</a> Development Environment</h1><h2 id="early-dev-image" tabindex="-1"><a class="header-anchor" href="#early-dev-image" aria-hidden="true">#</a> Early dev image</h2><p>You can have access to last feature / bug fix with docker dev image automatically build on tag <code>dev</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull tchiotludo/akhq:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The dev jar is not publish on GitHub, you have 2 solutions to have the <code>dev</code> jar :</p><p>Get it from docker image</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull tchiotludo/akhq:dev\ndocker run --rm --name<span class="token operator">=</span>akhq -it tchiotludo/akhq:dev\ndocker <span class="token function">cp</span> akhq:/app/akhq.jar <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Or build it with a <code>./gradlew shadowJar</code>, the jar will be located here <code>build/libs/akhq-*.jar</code></p><h2 id="development-server" tabindex="-1"><a class="header-anchor" href="#development-server" aria-hidden="true">#</a> Development Server</h2><p>A docker-compose is provided to start a development environment. Just install docker &amp; docker-compose, clone the repository and issue a simple <code>docker-compose -f docker-compose-dev.yml up</code> to start a dev server. Dev server is a java server &amp; webpack-dev-server with live reload.</p><p>The configuration for the dev server is in <code>application.dev.yml</code>.</p><h2 id="setup-local-dev-environment-on-windows" tabindex="-1"><a class="header-anchor" href="#setup-local-dev-environment-on-windows" aria-hidden="true">#</a> Setup local dev environment on Windows</h2><p>In case you want to develop for AKHQ on Windows with IntelliJ IDEA without Docker (for any reason) you can follow this brief guide. For the following steps, please, make sure you meet these requirements:</p>',13),o=(0,s._)("li",null,"OS: Windows (10)",-1),l=(0,s._)("li",null,"Kafka (2.6.0) is downloaded and extracted, the installation directory is referred to as $KAFKA_HOME in the latter",-1),r=(0,s._)("li",null,"Git is installed and configured",-1),i=(0,s.Uk)("IntelliJ IDEA (Community Edition 2020.2) with the following plugins installed: "),c=(0,s._)("li",null,"Gradle (bundled with IDEA)",-1),d={href:"https://plugins.jetbrains.com/plugin/6317-lombok",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("Lombok"),p=(0,s.uE)('<p>First run a Kafka server locally. Therefore, you need to start Zookeeper first by opening a CMD and doing:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$KAFKA_HOME</span><span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>windows<span class="token punctuation">\\</span>zookeeper-server-start.bat config<span class="token punctuation">\\</span>zookeper.properties\n<span class="token variable">$KAFKA_HOME</span><span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>windows<span class="token punctuation">\\</span>kafka-server-start.bat config<span class="token punctuation">\\</span>server.properties\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',2),h=(0,s.Uk)("A zero-config Kafka server should be up and running locally on your machine now. For further details or troubleshooting see "),m={href:"https://kafka.apache.org/quickstart",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Uk)("Kafka Getting started guide"),g=(0,s.Uk)(". In the next step we're going to checkout AKHQ from GitHub:"),k=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/tchiotludo/akhq.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Open the checked out directory in IntelliJ IDEA. The current version (0.16.0) of AKHQ is built with Java 11. If you don&#39;t have OpenJDK 11 installed already, do the following in IntelliJ IDEA:</p><ul><li><em>File &gt; Project Structure... &gt; Platform Settings &gt; SDKs &gt; + &gt; Download JDK... &gt;</em> select a vendor of your choice (but make sure it&#39;s version 11)</li><li>download + install. Make sure that JDK 11 is set under <em>Project Settings &gt; Project SDK</em></li><li>language level is Java 11.</li><li>Now tell Gradle to use Java 11 as well: <em>File &gt; Settings &gt; Plugins &gt; Build, Execution, Deployment &gt; Build Tools &gt; Gradle &gt; Gradle JVM</em>: any JDK 11.</li></ul><p>To configure AKHQ for using the Kafka server you set up before, edit <code>application.yml</code> by adding the following under <code>akhq</code>:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">kafka</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> <span class="token string">&quot;localhost:9092&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),b={class:"custom-container warning"},f=(0,s._)("p",{class:"custom-container-title"},"WARNING",-1),y=(0,s.Uk)("Do not commit this part of "),w=(0,s._)("code",null,"application.yml",-1),_=(0,s.Uk)(". A more secure way to configure your local development Kafka server is described in the Micronaut doc, chapter "),D={href:"https://docs.micronaut.io/2.5.13/guide/index.html#config",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)('"Application Configuration"'),K=(0,s.Uk)("."),E=(0,s._)("p",null,[(0,s.Uk)("Now you should be able to build the project with Gradle. Therefore, go to the Gradle view in IDEA, select "),(0,s._)("em",null,"Tasks > build > build"),(0,s.Uk)(". If an error occurs saying that any filename is too long: move your project directory to a root directory in your filesystem or as a fix (only for testing purposes) set the argument "),(0,s._)("code",null,"-x test"),(0,s.Uk)(" to skip tests temporarily.")],-1),I=(0,s._)("p",null,[(0,s.Uk)("To debug a running AKHQ instance, go to the Gradle tab in IntelliJ IDEA, "),(0,s._)("em",null,"Tasks > application"),(0,s.Uk)(" > right click "),(0,s._)("code",null,"run"),(0,s.Uk)(' and click "'),(0,s._)("em",null,"Debug(...)"),(0,s.Uk)('". AKHQ should start up and hit the breakpoints you set in your IDE. Happy developing/debugging!')],-1),x={},U=(0,a(3744).Z)(x,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("ul",null,[o,l,r,(0,s._)("li",null,[i,(0,s._)("ul",null,[c,(0,s._)("li",null,[(0,s._)("a",d,[u,(0,s.Wm)(a)])])])])]),p,(0,s._)("p",null,[h,(0,s._)("a",m,[v,(0,s.Wm)(a)]),g]),k,(0,s._)("div",b,[f,(0,s._)("p",null,[y,w,_,(0,s._)("a",D,[A,(0,s.Wm)(a)]),K])]),E,I],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);