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

// solution 2: async & await
async function doAllJobs2(jobs) {
  console.log(`開始工作 at ${new Date().toISOString()}`);

  for (let job of jobs) {
    console.log(await doJob(job.name, job.time));
  }
}

// execute doAllJobs function
let jobs = [
  { name: "刷牙", time: 1000 },
  { name: "吃早餐", time: 3000 },
  { name: "寫功課", time: 1000 },
  { name: "吃午餐", time: 2000 },
];

// uncomment one solution at a time
doAllJobs1(); // solution 1: .then()
// doAllJobs2(jobs); // solution 2: async & await
