/**
 *  自定义网站配置 
 */
const config = {
  title: "自定义导航",                 // 网站标题，显示在页面头部和浏览器标签中
  subtitle: "Cloudflare Workers Dir", // 网站副标题，显示在页面头部
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
      name:"信息收集",
      icon:"globe",
      list:[
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
          name:"Bundesregierung",
          desc:"德国联邦政府官方网站"
        },
        {
          url:"https://www.gov.cn/",
          name:"中国政府网",
          desc:"中华人民共和国中央人民政府"
        },
        {
          url:"https://japan.kantei.go.jp/",
          name:"首相官邸",
          desc:"日本首相官邸官方网站"
        }
      ]
    },
    {
      name:"数据公布",
      icon:"chart line",
      list:[
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
          desc:"法国国家统计与经济研究所"
        },
        {
          url:"https://www.destatis.de/",
          name:"Destatis",
          desc:"德国联邦统计局"
        },
        {
          url:"http://www.stats.gov.cn/",
          name:"国家统计局",
          desc:"中国国家统计局"
        },
        {
          url:"https://www.stat.go.jp/",
          name:"日本统计局",
          desc:"日本总务省统计局"
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
          name:"The New York Times",
          desc:"纽约时报"
        },
        {
          url:"https://www.wsj.com/",
          name:"The Wall Street Journal",
          desc:"华尔街日报"
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
  const domain = url.match(/https?:\/\/([^/]+)/)?.[1] || url;
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
}

/** Render Functions */
function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"'], 
    'Powered by ' + el('a', ['class="ui label"', 'href="https://github.com/chinaliyue/CF-Worker-Dir"', 'target="_blank"'], 
    el('i', ['class="github icon"'], "") + 'Cf-Worker-Dir') + 
    ' &copy; Base on ' + el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], "") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);
  const title = el('h1', ['class="ui inverted header"'], 
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
  const titleBelowSearch = el('div', ['class="ui text container"'], title);
  return el('header', [], el('div', [
    'id="head"', 
    'class="ui inverted vertical masthead center aligned segment"', 
    'style="max-width: 1200px; margin: 0 auto; height: 230px; padding: 0;"' // 控制头部高度和布局
  ], 
    el('div', ['id="title"', 'class="ui text container"'], (config.search ? input + menu + titleBelowSearch : ""))));
}

function renderMain() {
  return el('main', [], el('div', ['class="ui container"'], config.lists.map(item => {
    const card = (url, name, desc) => el('a', ['class="card"', `href="${url}"`, 'target="_blank"'], 
      el('div', ['class="content"'], 
        el('img', ['class="left floated avatar ui image"', `src="${getFavicon(url)}"`], "") + 
        el('div', ['class="header"'], name) + 
        el('div', ['class="meta"'], desc)));
    const divider = el('h4', ['class="ui horizontal divider header"'], 
      el('i', [`class="${item.icon} icon"`], "") + item.name);
    const content = el('div', ['class="ui four stackable cards"'], item.list.map(link => 
      card(link.url, link.name, link.desc)).join(""));
    return el('div', ['class="ui basic segment"'], divider + content);
  }).join("")));
}

function renderHTML(index) {
  return `<!DOCTYPE html>
  <html lang="en">
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
  <body>
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
