function Promise(executor) {
    // 初始化state为等待态    
    this.state = 'pending';
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 存放 fn1 的回调
    this.fn1Callbacks = [];
    // 存放 fn2 的回调
    this.fn2Callbacks = [];
     // 成功
    let resolve = () => { };
    // 失败
    let reject = () => { };
    // 立即执行
    executor(resolve, reject);
   }