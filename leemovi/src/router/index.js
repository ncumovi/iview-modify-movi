import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/Form'
import Upload from '@/components/Upload'
import table from '@/components/table'
import scroll from '@/components/scroll-spy'
import scroll2 from '@/components/scroll-spy2'
import cropper from '@/components/cropper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/upload',
      component: Upload
    },
    {
      path: '/table',
      component: table
    },
    {
      path: '/scroll',
      component: scroll
    },
    {
      path: '/scroll2',
      component: scroll2
    },
    {
        path: '/cropper',
        component: cropper
    }
  ]
})
