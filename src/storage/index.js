/**
 * Storage封装
 * 先写原生语句，再写递归调用。因为先有原生再有递归。先写get方法，再写set方法，因为先获取到数据，这样能知道设置哪些数据。
 */
const  STORAGE_KEY = 'mall';
export default{
  // 存储值
  // 设置某一个模块下面的属性x下面的属性
  setItem(key,value,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      // 设置值，必须调用原生api再次将值设置进storage中
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val)); // 因为val是json对象，storage中全部都字符串，因此需要先转字符串再设置进storage
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){
    // 不用再次调用原语句，如果说逻辑相同。用递归，调用自身函数。
    // 只需传入参数个数不同，利用条件语句再次调用原写过的逻辑语句。
    if (module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    // 对于取值都先获取全部数据，再获取数据中数据。比如这里先获取全部storage中user属性信息模块,再获取user属性信息模块下面的userName属性
    return this.getStorage()[key]; //无论获取值、设置值、清除值。最终都会调用到原生api语句。
  },
  // 获取全部storage数据
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}'); // 我们获取到json字符串，但我们需要拿到json对象，因此从storage中获取到的json字符串需要转json对象。
  },
  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    // 清除值，必须调用原生api再次将值设置进storage中
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}