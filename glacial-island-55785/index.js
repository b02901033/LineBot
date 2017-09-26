var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1512244966,
  channelSecret: "6fe155c1ac9050851bde10f53b631cfa",
  channelAccessToken: "GHmhuZ0ziSqZg0Yh/9vnw+y0cthHhhfzJmlce1oD9ZNOaWl7Vt/H6DJHkk80/yhAo1dVbRMBsiVA3n6uDTKpWSvb85OS46uFEV248SApEO5xPXfCZGsTJ2K4eXOCGQMQryjzS0ePT/MhQZByDysbPwdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event);
  if (event.message.type == 'text') {
    var msg = event.message.text;
    var replyMsg = '';
    if (msg.indexOf('早安') != -1) {
       replyMsg = '摯友今天也好酷！';
    }
    if (msg.indexOf('酒吞') != -1) {
      replyMsg += '摯友是最棒的！';
    }
    if (msg.indexOf('吞吞') != -1) {
      replyMsg += ' (*´Д `≡´Д`*)hshs ';
    }
    if ( (msg.indexOf('茨木') != -1) ) {
      replyMsg += '你有摯友的消息嗎？';
      if (msg.indexOf('白字') != -1) {
        replyMsg = '刷不到好御魂，怪我？';
      }
      if (msg.indexOf('捏大蛇') != -1) {
        replyMsg = '才沒有捏大蛇！你看錯了！';
      }
    }
    if (msg.indexOf('摯友') != -1) {
      replyMsg += ' |ω・´) 摯友喊我嗎？';
    }
    if (msg.indexOf('紅葉') != -1) {
      replyMsg = '那個女人...[地獄之手]';
    }
    if (msg.indexOf('報告') != -1) {
      replyMsg = '還不去做報告！廢物！';
    }
    if (msg.indexOf('作業') != -1) {
      replyMsg = '還不去做作業！廢物！';
    }
    if (msg.indexOf('考試') != -1) {
      replyMsg = '還不去準備考試！廢物！';
    }
  }
  if (replyMsg != '') {
    event.reply(replyMsg).then(function(data) {
      console.log(replyMsg);
    }).catch(function(error) {
      console.log('error');
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
