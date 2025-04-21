/**
 *  自定义网站配置 
 */
const config = {
  title: "个人常用网站导航",                 // 网站标题，显示在页面头部和浏览器标签中
  subtitle: "Cloudflare Workers部署的自定义导航", // 网站副标题，显示在页面头部
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"GitHub",
      template:"https://github.com/search?q=$s&type=repositories"
    },
    {
      name:"liteapks",
      template:"https://liteapks.com/?s=$s"
    }
  ],

  lists: [                            //Url list
  {
    name:"常用网站",
    icon:"chart line",
    list:[
      {
        url:"https://cn.tradingview.com/chart/myNx0mwc/",
        name:"Tradingview",
        desc:"图表技术分析"
      },
      {
        url:"https://www.myfxbook.com/forex-economic-calendar",
        name:"经济日历",
        desc:"经济和贸易日历"
      },
      {
        url:"https://www.xe.com/zh-cn/currencyconverter/convert/?Amount=100&From=USD&To=CNY",
        name:"汇率换算",
        desc:"汇率换算工具"
      },
      {

        url:"https://www.weather.com.cn/weather1dn/101260909.shtml",
        name:"天气查询",
        desc:"天气预报"
      },

      {
        url:"https://chatgpt.com/",
        name:"ChatGPT",
        desc:"全球第一家AI公司"
      },
      {
        url:"https://chat.deepseek.com/",
        name:"deepseek",
        desc:"中国最好的AI公司"
      },
      {
        url:"https://github.com/copilot",
        name:"Copilot",
        desc:"写代码的AI工具"
      },
      {
        url:"https://gemini.google.com/app",
        name:"Gemini",
        desc:"Google的AI公司"
      },

      {
        url:"https://fofa.info/",
        name:"FOFA",
        desc:"FOFA搜索引擎"
      },
      {
        url:"https://dash.cloudflare.com/",
        name:"Cloudflare",
        desc:"部署节点"
      },
      {
        url:"https://ipv4.ping0.cc/ipleak",
        name:"IP泄漏检测",
        desc:"IP工具"
      },
      {
        url:"https://bulianglin.com/archives/cdn.html",
        name:"节点批量添加",
        desc:"代理节点工具"
      },
      {
        url:"https://github.com/search",
        name:"GitHub",
        desc:"全球最大代码托管网站"
      },
      {
        url:"https://nic.eu.org/",
        name:"EU.org",
        desc:"免费二级域名"
      },
      {
        url:"https://dash.domain.digitalplat.org/panel/main?page=%2Fpanel%2Foverview",
        name:"dpdns.org",
        desc:"免费二级域名"
      },
      {
        url:"https://www.itdog.cn/find_ping/162.159.152.0/24",
        name:"IP段扫描",
        desc:"IP工具"
      }
      
    ]
  },

  {
    name:"数据公布",
    icon:"chart line",
    list:[
      {
        url:"http://www.stats.gov.cn/",
        name:"中国国家统计局",
        desc:"国家统计局"
      },

      {
        url:"https://www.bea.gov/",
        name:"BEA",
        desc:"美国经济分析局"
      },
      {
        url:"https://www.ons.gov.uk/",
        name:"ONS",
        desc:"英国国家统计局"
      },
      {
        url:"https://www.insee.fr/",
        name:"INSEE",
        desc:"法国统计与经济研究所"
      },
      {
        url:"https://www.destatis.de/",
        name:"Destatis",
        desc:"德国联邦统计局"
      },

      {
        url:"https://www.stat.go.jp/",
        name:"日本统计局",
        desc:"日本总务省统计局"
      },
      {
        url:"https://data.worldbank.org/",
        name:"世界银行",
        desc:"世界银行数据"
      },
      {
        url:"https://data.oecd.org/",
        name:"OECD Data",
        desc:"经济合作发展组织数据"
      },
      {
        url:"https://www.imf.org/en/Data",
        name:"IMF Data",
        desc:"国际货币基金组织数据"
      }
    ]
  },
  
  {
      name:"信息收集",
      icon:"globe",
      list:[
        {
          url:"https://www.gov.cn/",
          name:"中国政府网",
          desc:"中华人民共和国中央人民政府"
        },

        {
          url:"https://www.whitehouse.gov/",
          name:"White House",
          desc:"美国白宫官方网站"
        },
        {
          url:"https://www.gov.uk/",
          name:"GOV.UK",
          desc:"英国政府官方网站"
        },
        {
          url:"https://www.gouvernement.fr/",
          name:"Gouvernement",
          desc:"法国政府官方网站"
        },
        {
          url:"https://www.bundesregierung.de/",
          name:"德国联邦政府",
          desc:"德国联邦政府官方网站"
        },

        {
          url:"https://japan.kantei.go.jp/",
          name:"首相官邸",
          desc:"日本首相官邸官方网站"
        },
        {
          url:"https://www.un.org/",
          name:"United Nations",
          desc:"联合国官方网站"
        },
        {
          url:"https://www.who.int/",
          name:"WHO",
          desc:"世界卫生组织"
        },
        {
          url:"https://www.nato.int/",
          name:"NATO",
          desc:"北大西洋公约组织"
        }
      ]
    },

    {
      name:"新闻网站",
      icon:"newspaper",
      list:[
        {
          url:"https://www.bbc.com/news",
          name:"BBC News",
          desc:"英国广播公司新闻"
        },
        {
          url:"https://www.cnn.com/",
          name:"CNN",
          desc:"美国有线电视新闻网"
        },
        {
          url:"https://www.reuters.com/",
          name:"Reuters",
          desc:"路透社"
        },
        {
          url:"https://www.ft.com/",
          name:"Financial Times",
          desc:"英国金融时报"
        },
        {
          url:"https://www.economist.com/",
          name:"The Economist",
          desc:"经济学人"
        },
        {
          url:"https://www.nytimes.com/",
          name:"纽约时报",
          desc:"纽约时报"
        },
        {
          url:"https://www.wsj.com/",
          name:"华尔街日报",
          desc:"华尔街日报"
        },
        {
          url:"https://www.aljazeera.com/",
          name:"Al Jazeera",
          desc:"半岛电视台"
        },
        {
          url:"https://www.nbcnews.com/",
          name:"NBC News",
          desc:"美国全国广播公司新闻"
        },
        {
          url:"https://www.scmp.com/",
          name:"SCMP",
          desc:"南华早报"
        }
      ]
    },
    {
      name:"工具类网站",
      icon:"tools",
      list:[
        {
          url:"https://github.com/search",
          name:"GitHub",
          desc:"全球最大代码托管网站"
        },
        {
          url:"https://www.iloveimg.com/",
          name:"iLoveIMG",
          desc:"图片编辑工具集合"
        },
        {
          url:"https://www.ilovepdf.com/",
          name:"iLovePDF",
          desc:"PDF编辑工具集合"
        },
        {
          url:"https://www.canva.com/",
          name:"Canva",
          desc:"在线设计工具"
        },
        {
          url:"https://www.pexels.com/",
          name:"Pexels",
          desc:"免费高质量图片素材"
        },
        {
          url:"https://www.pixabay.com/",
          name:"Pixabay",
          desc:"免费图片和视频素材"
        },
        {
          url:"https://www.speedtest.net/",
          name:"Speedtest",
          desc:"网络速度测试工具"
        },
        {
          url:"https://regex101.com/",
          name:"Regex101",
          desc:"正则表达式测试工具"
        },
        {
          url:"https://codebeautify.org/",
          name:"Code Beautify",
          desc:"代码格式化和转换工具"
        },
        {
          url:"https://jsonformatter.org/",
          name:"JSON格式工具",
          desc:"JSON格式化验证工具"
        }
      ]
    }
  ]
};

const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  };
  return new Response(renderHTML(renderIndex()), init);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/* 通过分析链接实时获取 favicon */
function getFavicon(url) {
  const domain = new URL(url).hostname;
  // 新接口：https://www.faviconextractor.com/favicon/
  // 备用接口：https://api.iowen.cn/favicon (项目地址：https://github.com/owen0o0/getFavicon)
  return `https://www.faviconextractor.com/favicon/${domain}`;
}

/** Render Functions */
function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"', 'style="max-width: 1130px; margin: 0 auto;"'], 
    '项目地址： ' + el('a', ['class="ui label"', 'href="https://github.com/chinaliyue/CF-Worker-Dir"', 'target="_blank"'], 
    el('i', ['class="github icon"'], "") + 'Cf-Worker-Dir') + 
    ' &copy; Base on ' + el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], "") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);
  const title = el('h1', ['class="ui inverted header"', 'style="font-size:1.5em;"'], 
    el('i', [`class="${config.logo_icon} icon"`], "") + 
    el('div', ['class="content"'], config.title + el('div', ['class="sub header"'], config.subtitle)));
  const menu = el('div', ['id="sengine"', 'class="ui bottom attached tabular inverted secondary menu"', 'style="z-index: 1;"'], 
    el('div', ['class="header item"'], '&nbsp;') + config.search_engine.map((link, key) => 
      el('a', [`class="${key === 0 ? 'active' : ''} item"`, `data-url="${link.template}"`], link.name)
    ).join(""));
  const input = el('div', ['class="ui left corner labeled right icon fluid small input"', 'style="z-index: 2;"'], 
    el('div', ['class="ui left corner label"'], 
      el('img', ['id="search-fav"', 'class="left floated avatar ui image"', 'src="https://www.baidu.com/favicon.ico"'], "")) + 
    el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索你想要知道的……"', 'autocomplete="off"'], "") + 
    el('i', ['class="inverted circular search link icon"'], ""));
  // 修改后将标题块放在左下角且靠近最左边
  const titleLeft = el('div', ['id="title"', 'style="position: absolute; left: 0; bottom: 0; margin: 0; padding: 0;"'], title);
  return el('header', [], 
    el('div', [
      'id="head"', 
      'class="ui inverted vertical masthead center aligned segment"', 
      'style="position: relative; max-width: 1130px; margin: 0 auto; height: 225px; padding: 0; background-color:  #f0f0f0;"'
    ], 
      (config.search ? input + menu : "") + titleLeft
    )
  );
}

function renderMain() {
  return el('main', [], el('div', ['class="ui container"', 'style="max-width: 1130px !important; margin: 0 auto; background-color: #f0f0f0;"'], 
    config.lists.map(item => {
      // 修改 card 函数, 所有 desc 都添加内联样式 "font-size:0.9em;"，统一缩小1个点
      const card = (url, name, desc) => el('a', ['class="card"', `href="${url}"`, 'target="_blank"', 'style="width:200px; height:60px;"'], 
        el('div', ['class="content"'], 
          el('img', ['class="left floated avatar ui image"', `src="${getFavicon(url)}"`], "") + 
          el('div', ['class="header"'], name) + 
          el('div', ['class="meta"', 'style="font-size:0.9em;"'], desc)));
      const divider = el('h4', ['class="ui horizontal divider header"'], 
        el('i', [`class="${item.icon} icon"`], "") + item.name);
      const content = el('div', ['class="ui five stackable cards"'], item.list.map(link => 
        card(link.url, link.name, link.desc)).join(""));
      return el('div', ['class="ui basic segment"'], divider + content);
    }).join("")));
}

function renderHTML(index) {
  return `<!DOCTYPE html>
  <html lang="en" style="background-color: white;">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body style="background-color: white;">   
    ${index}
    <script>
      $(document).ready(function () {
        $('#sengine a').on('click', function () {
          $('#sengine a.active').removeClass('active');
          $(this).addClass('active');
          $('#search-fav').attr('src', new URL($(this).data('url')).origin + '/favicon.ico');
        });
        $('.search').on('click', function () {
          const url = $('#sengine a.active').data('url').replace('$s', $('#searchinput').val());
          window.open(url);
        });
        $('#searchinput').on('keypress', function (e) {
          if (e.keyCode === 13) $('.search').click();
        });
      });
    </script>
  </body>
  </html>`;
}
