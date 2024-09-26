// doJob by callback
function doJob(job, time, cb) {
  setTimeout(() => {
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

console.log(`開始工作 at ${new Date().toISOString()}`);

// write your code here
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
doJob("刷牙", 1000, function (notification) {
  console.log(notification);

  doJob("吃早餐", 3000, function (notification) {
    console.log(notification);

    doJob("寫功課", 1000, function (notification) {
      console.log(notification);

      doJob("吃午餐", 2000, function (notification) {
        console.log(notification);
      });
    });
  });
});
