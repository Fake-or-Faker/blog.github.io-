
/*
*项目名: 个人简历
*创建者: p-peng
*创建时间:2022-03-26
*联系方式:19866228664(微信同号)
*描述: 个人简历
*/

let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：p-peng'
            },{
                name: 'div',
                text: '年龄：23'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '毕业院校：中山大学南方学院'
            },{
                name: 'div',
                text: '联系电话：19866228664'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：中山大学南方学院'
        }, {
            name: 'span',
            text: '专业：软件工程'
        }, {
            name: 'div',
            text: '主修课程：HTML、CSS、JavaScript、Vue、Nest.js、MySQL,Express',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'H5、CSS3、ES6'
            }]
        }, {
            name: 'li',
            text:'能熟练运用不同主流UI框架ElementUI及多个移动端UI框架'
        }, {
            name: 'li',
            text:'掌握前端主流',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue框架'
            }]
        }, {
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'H5混合APP开发'
            }, {
                name: 'span',
                text: '，跨多端技术uni-app、redis'
            }]
        }, {
            name: 'li',
            text:'了解微信小程序开发'
        }, {
            name: 'li',
            text:'熟悉后端语言Nest.js'
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'css预处理器'
            }, {
                name: 'span',
                text: '以及前端构建工具webpack和npm包管理库,git分布式系统'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '工作经历'
    }, {
        name: 'div',
        class: 'work', 
        children:[{
            name: 'span',
            class: 'mr',
            text: '2019.03 — 2020.06'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'担任学校it部门的开发人员',
            children: [{
                name: 'span',
                class: 'tag',
                text: '项目安排、UI页面设计及其布局、定期开展技术交流会议'
            }]
        }, {
            name: 'li',
            text: '负责学校it项目开发（微信小程序），如数字管理系统,微信公众号(NFCA)'
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：校园管理系统,公众号:NFCA'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: '微信原生框架'
                }]
            }, {
                name: 'li',
                text: '项目描述：基于微信原生框架利用微信端口进行登录注册功能,NFCA课程表公众号推送'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：国潮美妆微信小程序'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'Uni-app,Express,Mysql'
                },]
            }, {
                name: 'li',
                text: '项目描述：基于uni-app框架实现的网上商城小程序,主要负责项目设计等等'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：Nest.js仿小米商城(开源项目)'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: ' ejs + Nest.js  +MongoDB + axios + redis '
                }, {
                    name: 'span',
                    text: 'TypeScript'
                }]
            }, {
                name: 'li',
                text: '项目描述：1. Vue-cli脚手架搭建项目'
            }, {
                name: 'li',
                text: '2. 用户不同角色用户登录后台显示不同菜单'
            }, {
                name: 'li',
                text: '3. Nest生成验证码'
            }, {
                name: 'li',
                text: '4. 公共的Ajax改变状态、Ajax双击更改数量'
            }, {
                name: 'li',
                text: '5. 独立完成Nest中Md5的使用'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'具有',
            children: [{
                name: 'span',
                class: 'tag',
                text: '团队管理经验'
            }, {
                name: 'span',
                text: '，拥有良好的'
            }, {
                name: 'span',
                class: 'tag',
                text: '团队协调能力'
            }, {
                name: 'span',
                text: '，工作当中和同事融洽相处'
            }]
        }, {
            name: 'li',
            text:'常混迹于',
            children: [{
                name: 'span',
                class: 'tag',
                text: '前端主流社区'
            }, {
                name: 'span',
                text: '（github、CSDN），翻阅前端'
            }, {
                name: 'span',
                class: 'tag',
                text: '大咖'
            }, {
                name: 'span',
                text: '博客（张鑫旭、阮一峰、黄轶）'
            }]
        }, {
            name: 'li',
            text:'热爱前端、思维活跃、学习能力强，抗压能力强。'
        }, {
            name: 'li',
            text:'性格随和、诚恳稳重、身体素质较好、能够很快地适应新环境。'
        }]
    }
]
let style = `
    /*
    * 面试官你好，我是p-peng，广东河源人
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="images/balloon.png" id="bg-balloon-small">
        <img src="images/balloon.png" id="bg-balloon-large">
        <img src="images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


