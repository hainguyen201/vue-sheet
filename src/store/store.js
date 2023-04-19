// store.js
import { reactive } from 'vue'

export const store = reactive({
  data: {},
  setData(data){
    this.data=data;
  }
})