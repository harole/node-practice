function PromiseA(func) {
  this.state = 'pending'
  this.value = undefined
  this.reason = undefined
  this.then = function(onResolved, onRejected) {
    if (Object.prototype.toString.call(onResolved) === '[object Function]' || Object.prototype.toString.call(onRejected) === '[object Function]') {
      throw new Error('the params of "then" function should be a function')
    } else {
      this.onResolved = onResolved
      this.onRejected = onRejected
    }
  }
  function resolve(value) {
    if (this.state === 'pending') {
      this.value = value
      this.state = 'resolved'

      // 返回值做检查，不同值做不同处理
      this.onResolved(this.value)
    } else {
      throw new Error('the state is not "pending", can not be resolved')
    }
  }
  function reject(reason) {
    if (this.state === 'pending') {
      this.reason = reason
      this.state = 'rejected'
      this.onRejected(this.reason)
    } else {
      throw new Error('the state is not "pending", can not be rejected')
    }
  }
  if (func && Object.prototype.toString.call(func) === '[object Function]') {
    func(resolve, reject);
  } else if (fun) {
    throw new Error('param should be a "function"')
  }
}