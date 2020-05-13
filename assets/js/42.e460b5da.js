(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{364:function(t,a,s){"use strict";s.r(a);var n=s(33),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),s("h2",{attrs:{id:"入门指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入门指引"}},[t._v("#")]),t._v(" 入门指引")]),t._v(" "),s("p",[t._v("本文档将以部署一台Web应用服务器为场景，帮助您学习如何创建和使用裸金属服务器。通过本文档，您可以学习到如何挑选合适的服务器，如何登录服务器，以及部署Nginx软件。")]),t._v(" "),s("p",[t._v("您将按以下流程学习如何使用裸金属服务器。")]),t._v(" "),s("h4",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("p",[t._v("在使用裸金属服务器前，您需要注册万维讯通会员帐号。")]),t._v(" "),s("h4",{attrs:{id:"注册万维讯通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册万维讯通"}},[t._v("#")]),t._v(" 注册万维讯通")]),t._v(" "),s("p",[t._v("如果您已有一个万维讯通账号，请跳到下一个任务。如果您还没有万维讯通账号，请参考以下步骤创建。")]),t._v(" "),s("ol",[s("li",[t._v("打开"),s("a",{attrs:{href:"https://www.bmsidc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("万维讯通官网"),s("OutboundLink")],1),t._v("，单击“"),s("strong",[t._v("登录/注册")]),t._v("”。")]),t._v(" "),s("li",[t._v("根据提示信息完成注册。")]),t._v(" "),s("li",[t._v("注册成功后，系统会自动跳转至您的个人信息界面。")])]),t._v(" "),s("h2",{attrs:{id:"步骤1：创建裸金属服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤1：创建裸金属服务器"}},[t._v("#")]),t._v(" 步骤1：创建裸金属服务器")]),t._v(" "),s("h4",{attrs:{id:"操作场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作场景"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),s("p",[t._v("您可以根据以下步骤使用管理控制台创建一个裸金属服务器实例。本教程以部署一台Web应用服务器为场景，旨在帮助您快速创建一个实例，因此不会涵盖所有可能的选项。")]),t._v(" "),s("h4",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("登录"),s("a",{attrs:{href:"https://www.bmsidc.com/#!/main/general-situation",target:"_blank",rel:"noopener noreferrer"}},[t._v("云服务器控制台"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("在左侧导航栏，选择“裸金属服务器 BMS”")])]),t._v(" "),s("li",[s("p",[t._v("单击上方的“创建”")])]),t._v(" "),s("li",[s("p",[t._v("完成参数配置")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("选择机房和数据中心")]),t._v("，如“Hong Kong- BMSIDC-Hong Kong”，可用区保持默认值。"),s("br"),t._v("\n说明： 裸金属服务器创建完成后，不可更改区域和可用区。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("选择“机型”")]),s("br"),t._v("\n可供选择的规格由您所选择的区域和可用区决定。Web服务器以满足网页访问为主，不需要很强的计算能力。我们选择“BMS_D1528C16”。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("添加“磁盘”")]),s("br"),t._v("\n创建服务器会免费赠送128G的系统盘，可以根据自身需求，选择添加云盘。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("选择“镜像”")]),s("br"),t._v("\n选择“公共镜像”，“CentOS 7.6 64bit”。 系统自动分配随机登录密码，您也可以指定设置，建议采用复杂的密码方案。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("选择“网络”")]),s("br"),t._v("\n您第一次使用云服务时，系统将自动为您创建一个虚拟专有网络 VPC和物理NAT网关，保持默认值即可。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("选择“带宽”")]),s("br"),t._v("\n根据您的业务需要选择合适的线路。并购买带宽供裸金属服务器使用。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("添加“弹性公网IP”")]),s("br"),t._v("\n不使用弹性公网IP的裸金属服务器不能与互联网互通，仅可作为私有网络中部署业务或者集群所需裸金属服务器进行使用。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("设置“购买时长”")]),s("br"),t._v("\n范围：1天~3年。1天仅供测试使用，建议续费采用最低月付的方式。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("设置“购买数量”")])])])])]),t._v(" "),s("li",[s("p",[t._v("点击 “立即购买”，确认规格无误后，再次点击 “立即购买”。创建订单。选择一种支付方式，单击“确认付款”。")])]),t._v(" "),s("li",[s("p",[t._v("执行结果"),s("br"),t._v("\n一般需要10s~30s完成裸金属服务器创建。单击刷新按钮，裸金属服务器状态由“创建中”变为“运行中”，表示创建成功。")])]),t._v(" "),s("li",[s("p",[t._v("后续操作"),s("br"),t._v("\n裸金属服务器作为Web服务器对外提供服务，还需要放通80、443端口以及ICMP协议，默认系统防火墙是关闭的，无需操作。"),s("strong",[t._v("对安全有要求的客户可以参看安全组设置。")])])])]),t._v(" "),s("h2",{attrs:{id:"步骤2：登录裸金属服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤2：登录裸金属服务器"}},[t._v("#")]),t._v(" 步骤2：登录裸金属服务器")]),t._v(" "),s("h4",{attrs:{id:"操作场景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作场景-2"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),s("p",[t._v("创建裸金属服务器后，您可以通过多种方式进行登录。"),s("br"),t._v("\n本文介绍在管理控制台使用管理终端快速登录裸金属服务器。更多登录方式，请参阅Linux服务器登录方式说明或Windows服务器登录方式说明。")]),t._v(" "),s("h4",{attrs:{id:"操作步骤-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("ol",[s("li",[t._v("登录云服务器"),s("a",{attrs:{href:"https://www.bmsidc.com/#!/main/general-situation",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("在左侧导航栏，选择“裸金属服务器”。")]),t._v(" "),s("li",[t._v("在裸金属服务器列表中，找到已创建的实例“bms-xxxxx”。在“更多操作”列，单击“远程桌面”。 开始建立连接，大约几秒后后进入系统界面。出现如下信息表示登录成功。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@Centos76-Yx4PdGGT ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("默认会以创建时的默认登录信息进行连接，如果您有修改过，需要填写正确的登录信息。")])]),t._v(" "),s("h2",{attrs:{id:"步骤3：部署应用环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤3：部署应用环境"}},[t._v("#")]),t._v(" 步骤3：部署应用环境")]),t._v(" "),s("ol",[s("li",[t._v("安装及启动Nginx"),s("br"),t._v("\n输入"),s("code",[t._v("yum install nginx")]),t._v("命令安装Nginx，当需要确认时输入“y”确认。"),s("br"),t._v("\n出现下图表示Nginx安装成功。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Installed:\n  nginx.x86_64 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":1.16.1-1.el7\n\nDependency Installed:\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nComplete"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@Centos76-Yx4PdGGT ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("输入"),s("code",[t._v("systemctl start nginx.service")]),t._v("启动Nginx服务。"),s("br"),t._v("\n此处以CentOS 7.6 64bit为例，其他操作系统的Nginx启动命令请您自行查阅。")])]),t._v(" "),s("li",[s("p",[t._v("访问Web默认页面"),s("br"),t._v("\n使用浏览器访问“http://裸金属服务器的弹性公网IP地址”，看到Nginx的欢迎页面即表示安装成功。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);