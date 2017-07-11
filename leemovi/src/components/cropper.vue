<template>
  <div class="my-cropper">
    <input id='preview' type="file" accept="image/*" @change="preview($event)" ref="img">
    <div v-if="!showEdit">
      <img :src="editedImg" alt="">
    </div>
    <div v-if="showEdit" style="height: 250px;width: 350px;margin-top: 100px">
      <vueCropper
              ref="cropper"
              :img="option.img"
              :outputSize="option.size"
              :outputType="option.outputType"
              :autoCrop=true>
      </vueCropper>
      <button @click="start">开始</button>
      <button @click="ok">确认</button>
      <button @click="reset">重置</button>
      <button @click="stop">停止</button>
    </div>


  </div>

</template>
<script>
  import VueCropper from 'vue-cropper';
  const path = require('path');
  const logo =path.resolve(__dirname,'../assets/logo.png')
  export default {
    data () {
      return {
	      option:{
              img:'../../static/img/happybirthday.jpg',
              size:0.1,
              outputType:'jpeg',

		      info:false
          },
	      showEdit:false,
	      editedImg:""
      }
    },
    components:{
	    VueCropper
    },
    methods: {
    	preview(e){
		    var prevDiv = document.getElementById('preview');
		    var files = event.target.files, file;
		    if (files && files.length > 0) {
			    // 获取目前上传的文件
			    file = files[0];
			    // 来在控制台看看到底这个对象是什么
			    console.log(file);
			    // 那么我们可以做一下诸如文件大小校验的动作
			    if (file.size > 1024 * 1024 * 2) {
				    alert('图片大小不能超过 2MB!');
				    return false;
			    }
			    // !!!!!!
			    // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
			    // 获取 window 的 URL 工具
			    var URL = window.URL || window.webkitURL;
			    // 通过 file 生成目标 url
			    var imgURL = URL.createObjectURL(file);
			    // 用这个 URL 产生一个 <img> 将其显示出来
			    this.option.img = imgURL;
			    this.showEdit = true;
			    // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
			    // URL.revokeObjectURL(imgURL);
		    }
        },
	    ok(){
	    	let that = this;
		    this.$refs.cropper.getCropData((data) => {
			    // do something
			    that.editedImg = data;
			    that.showEdit = false;
		    })
        },
	    reset(){
	    	//取消编辑框
		    this.$refs.cropper.clearCrop()
        },
	    stop(){
		    this.$refs.cropper.stopCrop()
        },
	    start(){
		    this.$refs.cropper.startCrop();
        }
    },
    mounted () {
//	    this.$refs.cropper.startCrop();
    }
  }
</script>
<style scoped>
.my-cropper{
  height:350px;
  width:400px;
  margin: 0 auto;
}
</style>
