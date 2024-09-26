// doJob by promise
function doJob(job, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  });
}

// write your code here
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec

// solution 1: .then()
function doAllJobs1() {
  console.log(`開始工作 at ${new Date().toISOString()}`);

  doJob("刷牙", 1000)
    .then((notification) => {
      console.log(notification);
      return doJob("吃早餐", 3000);
    })
    .then((notification) => {
      console.log(notification);
      return doJob("寫功課", 1000);
    })
    .then((notification) => {
      console.log(notification);
      return doJob("吃午餐", 2000);
    })
    .then((notification) => {
      console.log(notification);
    });
}

doAllJobs1(); // solution 1: .then()
