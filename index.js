/*Developed by Turnt Ducky*/
const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();

client.config = require('./config');

client.on('ready', () => {
  console.log('I am ready! Current time is ' + moment().format('LT'));

});

client.on('message', (message) => {
  let catcher = isStockChartsInterceptor(message.content);
  if (catcher) {
    console.log('caught intercept');
    console.log('catcher sent');
    message.channel
      .send('', {
        files: [catcher.ticker.url]
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$help') {
    console.log('Help menu');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "HELP MENU",
          fields: [{
              name: "**EXAMPLE COMMANDS**",
              value: "This is a list of example commands"
            },
            {
              name: "**$lcid**",
              value: "Shows the 5 min LCID chart"
            },
            {
              name: "**$aapl w**",
              value: "Shows weekly AAPL chart"
            },
            {
              name: "**$tsla rsi macd**",
              value: "Shows the RSI and MACD indicators on the TSLA daily chart"
            },
            {
              name: "**$spy line**",
              value: "Shows the 5 min SPY line chart"
            },
            {
              name: "**$/es**",
              value: "Shows the 5 min futures chart for S&P500"
            },
            {
              name: "**$.btc**",
              value: "Shows the BTC 5 min chart"
            },
            {
              name: "**$usd/jpy w**",
              value: "Shows the USD/JPY weekly chart"
            },
            {
              name: "**$sectors ytd**",
              value: "Shows the sector performance YTP chart"
            },
            {
              name: "**$futureslist1**",
              value: "Shows the first list of my supported futures"
            },
            {
              name: "**$futureslist2**",
              value: "Shows the second list of my supported futures"
            },
            {
              name: "**$crytpolist**",
              value: "List of my supported cryptos"
            },
            {
              name: "**$forexlist**",
              value: "List of my supported currency pairs"
            },
            {
              name: "**$i.help**",
              value: "Find the available indicator parameters"
            },
            {
              name: "**$c.help**",
              value: "Find the available chart parameters"
            },
            {
              name: "**$t.help**",
              value: "Find the available time parameters"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$futureslist1') {
    console.log('Futures List 1');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "SUPPORTED FUTURES (PAGE 1 OF 2)",
          fields: [{
              name: "**ym**",
              value: "DJIA"
            },
            {
              name: "**es**",
              value: "S&P 500"
            },
            {
              name: "**nq**",
              value: "Nasdaq 100"
            },
            {
              name: "**er2**",
              value: "Russle 200"
            },
            {
              name: "**nkd**",
              value: "Nikkie 225"
            },
            {
              name: "**ex**",
              value: "Euro Stoxx 50"
            },
            {
              name: "**dy**",
              value: "DAX"
            },
            {
              name: "**vx**",
              value: "VIX"
            },
            {
              name: "**cl**",
              value: "Crude Oil WTI"
            },
            {
              name: "**rb**",
              value: "Gasoline RBOB"
            },
            {
              name: "**ho**",
              value: "Heating Oil"
            },
            {
              name: "**ng**",
              value: "Natural Gas"
            },
            {
              name: "**zk**",
              value: "Ethanol"
            },
            {
              name: "**gc**",
              value: "Gold"
            },
            {
              name: "**sl**",
              value: "Silver"
            },
            {
              name: "**pl**",
              value: "Platinum"
            },
            {
              name: "**lc**",
              value: "Live Cattle"
            },
            {
              name: "**fc**",
              value: "Feeder Cattle"
            },
            {
              name: "**lh**",
              value: "Lean Hogs"
            },
            {
              name: "**zc**",
              value: "Corn"
            },
            {
              name: "**zl**",
              value: "Soybean Oil"
            },
            {
              name: "**zm**",
              value: "Soybean Meal"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$futureslist2') {
    console.log('Futures List 2');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "SUPPORTED FUTURES (PAGE 2 OF 2)",
          fields: [{
              name: "**zo**",
              value: "Oats"
            },
            {
              name: "**zr**",
              value: "Rough Rice"
            },
            {
              name: "**zw**",
              value: "Wheat"
            },
            {
              name: "**rs**",
              value: "Canola"
            },
            {
              name: "**cc**",
              value: "Cocoa"
            },
            {
              name: "**ct**",
              value: "Cotton"
            },
            {
              name: "**jo**",
              value: "Orange Juice"
            },
            {
              name: "**kc**",
              value: "Coffee"
            },
            {
              name: "**lb**",
              value: "Lumber"
            },
            {
              name: "**sb**",
              value: "Sugar"
            },
            {
              name: "**zb**",
              value: "30 Year Bond"
            },
            {
              name: "**zn**",
              value: "10 Year Note"
            },
            {
              name: "**zf**",
              value: "5 Year Note"
            },
            {
              name: "**zt**",
              value: "2 Year Note"
            },
            {
              name: "**dx**",
              value: "USD"
            },
            {
              name: "**6e**",
              value: "EUR"
            },
            {
              name: "**6j**",
              value: "JPY"
            },
            {
              name: "**6b**",
              value: "GBP"
            },
            {
              name: "**6c**",
              value: "CAD"
            },
            {
              name: "**6s**",
              value: "CHF"
            },
            {
              name: "**6a**",
              value: "AUD"
            },
            {
              name: "**6n**",
              value: "NZD"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$forexlist') {
    console.log('Forex List');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "SUPPORTED CURRENCY PAIRS",
          fields: [{
              name: "**eur/usd**",
              value: "Euro dollar compared to the US dollar"
            },
            {
              name: "**gbp/usd**",
              value: "Gross domestic product compared to the US dollar"
            },
            {
              name: "**usd/jpy**",
              value: "US dollar compared to the Japanese Yen"
            },
            {
              name: "**usd/cad**",
              value: "US dollar compared to the Canadian dollar"
            },
            {
              name: "**usd/chf**",
              value: "US dollar compared to the Confoederatio Helvetica franc"
            },
            {
              name: "**aud/usd**",
              value: "Australian dollar compared to the US dollar"
            },
            {
              name: "**nzd/usd**",
              value: "New Zealand dollar compared to the US dollar"
            },
            {
              name: "**eur/gbp**",
              value: "Euro dollar compared to Gross domestic product"
            },
            {
              name: "**gbp/jpy**",
              value: "Gross domestic product compared to the Japanese Yen"
            },
            {
              name: "**btc/usd**",
              value: "Bitcoin compared to the US dollar"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$cryptolist') {
    console.log('Crypto List');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "SUPPORTED CRYPTOS",
          fields: [{
              name: "**btc**",
              value: "Bitcoin"
            },
            {
              name: "**ltc**",
              value: "LiteCoin"
            },
            {
              name: "**eth**",
              value: "Ethereum"
            },
            {
              name: "**xrp**",
              value: "Ripple"
            },
            {
              name: "**bch**",
              value: "Bitcoin Cash"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$i.help') {
    console.log('Indicators menu');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "AVALIABLE PARAMETERS MENU",
          fields: [{
              name: "**INDICATORS**",
              value: "List of the available indicators"
            },
            {
              name: "rsi",
              value: "Relative Strength Index. Default settings are 14"
            },
            {
              name: "macd",
              value: "Moving Average Convergence / Divergense. Default settings are 12, 26, 9"
            },
            {
              name: "adx",
              value: "Average Directional Index. Default settings are 14"
            },
            {
              name: "atr",
              value: "Average True Rage. Default settings are 14"
            },
            {
              name: "cci",
              value: "Commodity Channel Index. Default settings are 20"
            },
            {
              name: "fi",
              value: "Force Index. Default settings are 14"
            },
            {
              name: "mfi",
              value: "Money Flow Index. Default settings are 14"
            },
            {
              name: "ppi",
              value: "Price Performance %. Default settings are SPY and QQQ"
            },
            {
              name: "rwi",
              value: "Random Walk Index. Default settings are 9"
            },
            {
              name: "roc",
              value: "Rate of Change. Default settings are 12"
            },
            {
              name: "rmi",
              value: "Relative Momentum Index. Default settings are 20"
            },
            {
              name: "stofu",
              value: "Stochastics Full. Default settings are 14, 3, 3"
            },
            {
              name: "stofsl",
              value: "Stochastics Slow. Default settings are 14, 3"
            },
            {
              name: "stofa",
              value: "Stochastics Fast. Default settings are 14, 3"
            },
            {
              name: "trix",
              value: "Triple Exponential Moving Average. Default settings are 9"
            },
            {
              name: "ult",
              value: "Ultimate Oscillator. Default settings are 7, 14, 28"
            },
            {
              name: "wr",
              value: "Williams %R. Default settings are 14"
            },
            {
              name: "ema",
              value: "Exponential Moving Average. Default settings are 9, 21"
            },
            {
              name: "bb_20",
              value: "20 Period Bollinger Bands. Default settings are 2"
            },
            {
              name: "bb_50",
              value: "50 Period Bollinger Bands. Default settings are 2"
            },
            {
              name: "hilo",
              value: "High / Low Channel. Default settings are 20"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$c.help') {
    console.log('chart menu');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "AVALIABLE PARAMETERS MENU",
          fields: [{
              name: "**CHART TYPES**",
              value: "List of the different chart types I support"
            },
            {
              name: "candle",
              value: "default"
            },
            {
              name: "bar",
              value: "Shows the line chart rather than the candle chart"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content == '$t.help') {
    console.log('Time menu');
    message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username
          },
          title: "AVALIABLE PARAMETERS MENU",
          fields: [{
              name: "**Time Intervals**",
              value: "List of the available time intervals"
            },
            {
              name: "3",
              value: "3 minute"
            },
            {
              name: "5",
              value: "5 minute (Default)"
            },
            {
              name: "15",
              value: "15 minute"
            },
            {
              name: "d",
              value: "Daily"
            },
            {
              name: "w",
              value: "Weekly"
            },
            {
              name: "m",
              value: "Monthly"
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "_Contact turnt ducky for more info and any feature requests_"
          }
        }
      })
      .then((msg) => {
        msg.react('❌');
      });

  } else if (message.content.startsWith('$.')) {
    console.log('CRYPTO');
    let ticker = message.content.toLowerCase().split(' ')[0].substring(2);
    let rawOptions = message.content.toLowerCase().split(ticker)[1].substring(1).split(' ');
    let options = [];
    for (var i = 0; i < rawOptions.length; i++) options.push(rawOptions[i]);
    let timePeriod = extractFromOptions('time_period_forex', options);
    console.log('https://elite.finviz.com/fx_image.ashx?' + ticker + 'usd_' + timePeriod + '_l.png');
    if (checkTicker(ticker, 'crypto')) {
      message.channel
        .send('', {
          files: ['https://elite.finviz.com/fx_image.ashx?' + ticker + 'usd_' + timePeriod + '_l.png']
        })
        .then((msg) => {
          msg.react('❌');
        });
    }
  } else if (message.content.includes('/') && message.content.indexOf('/') != 1) {
    let ticker = message.content.toLowerCase().split(' ')[0].substring(1);
    let rawOptions = message.content.toLowerCase().split(ticker)[1].substring(1).split(' ');
    let options = [];
    for (var i = 0; i < rawOptions.length; i++) options.push(rawOptions[i]);
    let timePeriod = extractFromOptions('time_period_forex', options);
    if (checkTicker(ticker, 'forex')) {
      console.log('FOREX RESULT SENT ');
      message.channel
        .send('', {
          files: [
            'https://elite.finviz.com/fx_image.ashx?' +
            ticker.split('/').join('') +
            '_' +
            timePeriod +
            '_l.png'
          ]
        })
        .then((msg) => {
          msg.react('❌');
        });
    }
  } else if (message.content.startsWith('$sectors')) {
    console.log('SECTORS');
    let rawOptions = message.content.toLowerCase().split(' ');
    let rawTimePeriod = 'day';
    if (rawOptions.length > 1) {
      rawTimePeriod = rawOptions[1];
    }
    let formattedTimePeriod = extractFromOptions('time_period_sector', rawTimePeriod);

    message.channel.send('Finviz has cut support for this feature. RIP $sectors', {});
  } else if (message.content.startsWith('$/')) {
    console.log('FUTURES');
    let ticker = message.content.toLowerCase().split(' ')[0].substring(1);
    let rawOptions = message.content.toLowerCase().split(ticker)[1].substring(1).split(' ');
    console.log(rawOptions);
    let options = [];
    for (var i = 0; i < rawOptions.length; i++) options.push(rawOptions[i]);
    //get time period
    let timePeriod = extractFromOptions('time_period_futures', options);
    console.log(`timePeriod: ${timePeriod}`);
    if (checkTicker(ticker)) {
      message.channel
        .send(
          formatFancyMessage(
            `Futures ${ticker.toUpperCase()}`,
            'https://elite.finviz.com/fut_chart.ashx?t=' +
            ticker +
            '&p=' +
            timePeriod +
            '&f=1' +
            `x=${Math.random()}.png`
          )
        )
        .then((msg) => {
          msg.react('❌');
        });
    }
  } else if (message.content.startsWith('$')) {
    let ticker = message.content.toLowerCase().split(' ')[0].substring(1);
    let rawOptions = message.content.toLowerCase().split(ticker)[1].split(' ');
    let options = [];
    for (var i = 1; i < rawOptions.length; i++) options.push(rawOptions[i]);
    console.log(options);
    let timePeriod = extractFromOptions('time_period', options);
    let chartType = extractFromOptions('chart_type', options);
    let additionalIndicators = extractFromOptions('indicators', options);
    if (additionalIndicators.length != 0) timePeriod = 'd';

    let rand = Math.random();
    console.log(
      'https://elite.finviz.com/chart.ashx?t=' +
      ticker +
      '&ty=' +
      chartType +
      (timePeriod == 'd' ? '&ta=st_c,sch_200p' + additionalIndicators : '') +
      '&p=' +
      timePeriod +
      '&s=l' +
      `x=${Math.random()}.png`
    );
    if (checkTicker(ticker)) {
      message.channel
        .send(
          formatFancyMessage(
            `${ticker.toUpperCase()}`,
            'https://elite.finviz.com/chart.ashx?t=' +
            ticker +
            '&ty=' +
            chartType +
            (timePeriod == 'd' ? '&ta=st_c,sch_200p' + additionalIndicators : '') +
            '&p=' +
            timePeriod +
            '&s=l' +
            `x=${Math.random()}.png`
          )
        )
        .then((msg) => {
          msg.react('❌');
        });
    }
  }
});

function checkTicker(ticker, type_check = null) {
  if (type_check != null) {
    if (type_check == 'forex') {
      return /^(eur\/usd|gbp\/usd|usd\/jpy|usd\/cad|usd\/chf|aud\/usd|nzd\/usd|eur\/gbp|gbp\/jpy)/g.test(ticker);
    } else if (type_check == 'crypto') {
      return /^(btc|ltc|eth|xrp|bch)/g.test(ticker);
    }
  }
  return !/.*\d+.*/g.test(ticker);
}

function isStockChartsInterceptor(content) {
  //$SSEC, $HSCEI, $NIKK, $DAX, $USB_T
  let VALID_INTERCEPTORS = [{
      ticker: 'SSEC',
      url: 'https://c.stockcharts.com/c-sc/sc?s=%24SSEC&p=D&b=5&g=0&i=t2208916711c&h=0.png'
    },
    {
      ticker: 'HSCEI',
      url: 'https://c.stockcharts.com/c-sc/sc?s=%24HSCEI&p=D&b=5&g=0&i=t2208916711c&h=0.png'
    },
    {
      ticker: 'NIKK',
      url: 'https://c.stockcharts.com/c-sc/sc?s=%24NIKK&p=D&b=5&g=0&i=t2208916711c&h=0.png'
    },
    {
      ticker: 'DAX',
      url: 'https://c.stockcharts.com/c-sc/sc?s=%24DAX&p=D&b=5&g=0&i=t2208916711c&h=0.png'
    },
    {
      ticker: 'USB_T',
      url: 'https://c.stockcharts.com/c-sc/sc?s=%24USB&p=D&b=5&g=0&i=t2208916711c&h=0.png'
    }
  ];

  if (!content.includes('$')) return false;

  //$ssec 15 rsi
  //$ups
  let tickerName = content.split('$')[1].split(' ')[0].toUpperCase();
  console.log('163:' + tickerName);
  for (let i = 0; i < VALID_INTERCEPTORS.length; i++) {
    let intec = VALID_INTERCEPTORS[i];
    if (intec.ticker === tickerName) {
      return {
        valid: true,
        ticker: intec
      };
    }
  }

  return false;
}

const urlExists = (url) =>
  new Promise((resolve, reject) =>
    request.head(url).on('response', (res) => resolve(res.statusCode.toString()[0] === '2'))
  );

function extractFromOptions(key, options) {
  if (key == 'indicators') {
    var tempIndicator = '';

    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      switch (item) {
        case 'rsi':
          tempIndicator += ',' + 'rsi_b_14';
          break;
        case 'macd':
          tempIndicator += ',' + 'macd_b_12_26_9';
          break;
        case 'adx':
          tempIndicator += ',' + 'adx_b_14';
          break;
        case 'atr':
          tempIndicator += ',' + 'atr_b_14';
          break;
        case 'cci':
          tempIndicator += ',' + 'cci_b_20';
          break;
        case 'fi':
          tempIndicator += ',' + 'fi_b_14';
          break;
        case 'mfi':
          tempIndicator += ',' + 'mfi_b_14';
          break;
        case 'ppi':
          tempIndicator += ',' + 'perf_b_SPY_QQQ';
          break;
        case 'rwi':
          tempIndicator += ',' + 'rwi_b_9';
          break;
        case 'roc':
          tempIndicator += ',' + 'roc_b_12';
          break;
        case 'rmi':
          tempIndicator += ',' + 'rmi_b_20';
          break;
        case 'stofu':
          tempIndicator += ',' + 'stofu_b_14_3_3';
          break;
        case 'stosl':
          tempIndicator += ',' + 'stosl_b_14_3';
          break;
        case 'stofa':
          tempIndicator += ',' + 'stofa_b_14_3';
          break;
        case 'trix':
          tempIndicator += ',' + 'trix_b_9';
          break;
        case 'ult':
          tempIndicator += ',' + 'ult_b_7_14_28';
          break;
        case 'wr':
          tempIndicator += ',' + 'wr_b_14';
          break;
        case 'bb20':
          tempIndicator += ',' + 'bb_20_2';
          break;
        case 'bb50':
          tempIndicator += ',' + 'bb_50_2';
          break;
        case 'borc':
          tempIndicator += ',' + 'bb_20_2,bb_50_2';
          break;
        case 'hilo':
          tempIndicator += ',' + 'hilo_20';
          break;
        case 'ema':
          tempIndicator += ',' + 'ema_9,ema_21';
          break;
      }
    }
    if (options.includes('d') || tempIndicator != '') {
      if (
        !options.includes('bb20') &&
        !options.includes('bb50') &&
        !options.includes('borc') &&
        !options.includes('ema')
      ) {
        tempIndicator += ',sma_50,sma_200,sma_20';
      }
    }

    return tempIndicator;
  } else if (key == 'chart_type') {
    var tempChartType = 'c';
    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      switch (item) {
        case 'line':
          tempChartType = 'l';
          break;
      }
    }
    return tempChartType;
  } else if (key == 'time_period') {
    var tempTimePeriod = 'i5';
    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      switch (item) {
        case 'm':
          tempTimePeriod = 'm';
          break;
        case 'w':
          tempTimePeriod = 'w';
          break;
        case 'd':
          tempTimePeriod = 'd';
          break;
        case '15':
          tempTimePeriod = 'i15';
          break;
        case '3':
          tempTimePeriod = 'i3';
          break;
      }
    }
    return tempTimePeriod;
  } else if (key == 'time_period_futures') {
    var tempTimePeriod = 'm5';
    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      switch (item) {
        case 'h':
          tempTimePeriod = 'h1';
          break;
        case 'd':
          tempTimePeriod = 'd1';
          break;
        case 'w':
          tempTimePeriod = 'w1';
          break;
        case 'm':
          tempTimePeriod = 'm1';
          break;
      }
    }
    return tempTimePeriod;
  } else if (key == 'time_period_forex') {
    var tempTimePeriod = 'm5';
    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      switch (item) {
        case 'h':
          tempTimePeriod = 'h1';
          break;
        case 'd':
          tempTimePeriod = 'd1';
          break;
        case 'w':
          tempTimePeriod = 'w1';
          break;
        case 'm':
          tempTimePeriod = 'mo';
          break;
      }
    }
    return tempTimePeriod;
  } else if (key == 'time_period_sector') {
    tempTimePeriod = 't';
    switch (options) {
      case 'w':
        tempTimePeriod = 'w';
        break;
      case 'm':
        tempTimePeriod = 'm';
        break;
      case 'q':
        tempTimePeriod = 'q';
        break;
      case 'h':
        tempTimePeriod = 'h';
        break;
      case 'y':
        tempTimePeriod = 'y';
        break;
      case 'ytd':
        tempTimePeriod = 'ytd';
        break;
    }
    return tempTimePeriod;
  }
}

function formatFancyMessage(message, url) {
  return {
    files: [url]
  };
  return {
    embed: {
      color: 0x009d14,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: message,
      image: {
        url
      }
    }
  };
}

client.on('messageReactionAdd', async (reaction, user, message, client) => {
  if (reaction.emoji.name === '❌') {
    console.log("❌ Reaction was added")
    if (!user.bot) {
      if (client.config.admins.includes(message.author.id)) {
        return reaction.message.delete();
        console.log("Message was deleted")
      } else {
        return;
      }
    }
  }
});

client.login(config.BOT_TOKEN);
