<script setup>
import config from '../../web.config'
import { useRoute } from 'vue-router'

const route = useRoute()

// 遍历作品集调用
// 展示组件的复用
const getProject = () =>{
  const name = route.params.project
  const projectList = config.project
  for(let i=0; i<projectList.length; i++) {
    if(projectList[i].name == name) {
      return projectList[i]
    }
  }
}

const project = getProject()

</script>
<template lang="pug">
#project.container
  header
    h1 {{ project.title }}
  .row
    .col.overview
      h6 Overview
      p.lead {{ project.overview }}
    .col-1.mid
    .col.details
      h6 Details
      table
        tbody
          tr
            td Time
            td {{ project.details.time }}
          tr
            td Categories
            td {{ project.details.categories }}
  br
  img(v-for="i in project.image" :src="config.imageUrl+i")
  br
  hr
  br
  .row
    .col-2
      small
        a(href="#project")
          | ↑ back to top
    .col
    .col-3.is-text-right
      small Also see:
        a(href="/work/cita")
          | Cita →
</template>