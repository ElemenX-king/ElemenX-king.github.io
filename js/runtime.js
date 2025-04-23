var now = new Date();

function createtime() {
    var e = new Date("11/12/2021 00:00:00");
    var durationE = calculateDuration(e);

    var o = new Date("04/16/2025 00:00:00");
    var durationO = calculateDuration(o);

    let c = "";

    c = `<div style="font-size:13px;font-weight:bold">
            本站存活时间为 ${durationO.days} 天 ${durationO.hours} 小时 ${durationO.minutes} 分 ${durationO.seconds} 秒 
            <i id="heartbeat" class='fas fa-heartbeat'></i> 
            <br> 
            站主已经和站娘爱情长跑 ${durationE.days} 天 ${durationE.hours} 小时 ${durationE.minutes} 分 ${durationE.seconds} 秒 ，爱你哦(´∀｀)♡😚
        </div>`;
        
    // if (s < 18 && s >= 9) {
    //     c = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> 
    //          <div style="font-size:13px;font-weight:bold">
    //              本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
    //              <i id="heartbeat" class='fas fa-heartbeat'></i> 
    //              <br> 
    //              旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
    //          </div>`;
    // } else {
    //     c = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> 
    //          <div style="font-size:13px;font-weight:bold">
    //              本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
    //              <i id="heartbeat" class='fas fa-heartbeat'></i> 
    //              <br> 
    //              旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
    //          </div>`;
    // }

    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = c;
    }
}

setInterval(() => {
    createtime();
}, 1e3);

function calculateDuration(startDate) {
    now.setTime(now.getTime() + 1e3);  // 增加1秒，模拟一些延时

    // 计算e的持续时间
    var n = (now - startDate) / 1e3 / 60 / 60 / 24;
    var r = Math.floor(n);
    
    var i = (now - startDate) / 1e3 / 60 / 60 - 24 * r;
    var s = Math.floor(i);
    if (s == 1) {
        s = "0" + s;
    }

    var d = (now - startDate) / 1e3 / 60 - 1440 * r - 60 * s;
    var l = Math.floor(d);
    if (l == 1) {
        l = "0" + l;
    }

    var g = (now - startDate) / 1e3 - 86400 * r - 3600 * s - 60 * l;
    var b = Math.round(g);
    if (b == 1) {
        b = "0" + b;
    }

    // 返回格式化后的时间差
    return {
        days: r,
        hours: s,
        minutes: l,
        seconds: b
    };
}
