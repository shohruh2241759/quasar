<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Folder_name
        </q-toolbar-title>


      </q-toolbar>
    </q-header>


 <q-footer>
    <q-tabs>
    <q-route-tab
        to="/"
        icon="list"
        label="Todo" />
        <q-route-tab
        to="/settings"
        icon="settings"
        label="settings"
        />
        <q-route-tab
        to="/about"
        icon="info"
        label="about"
        />
       </q-tabs>
      </q-footer>



    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dars>
        <q-item-label header class="text-grey-8">Shohruh</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          class="text-grey-4"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'todo',
          caption: 'PageTodo.vue',
          icon: 'list',
          link: 'http://localhost:8080/#'
        },
        {
          title: 'settings',
          caption: 'PageSettings.vue',
          icon: 'settings',
          link: 'http://localhost:8080/#/settings'
        },
        {
          title: 'about',
          caption: 'PageAbout.vue',
          icon: 'info',
          link: 'http://localhost:8080/#/about'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 767px){
.q-footer{
 display:nano;}
}
.q-drawer {
  .q-route-link--exact-active{
  color: white !important;
}
}

<//style>