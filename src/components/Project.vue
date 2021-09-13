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

<style>
#project iframe,
#project video {
  max-width: 100%
}

#project>figure {
  width: 90%;
  margin: 5rem auto
}

#project header {
  text-align: center;
  font-size: 2rem;
  margin: 6rem 1rem
}

#project header h1 {
  margin-bottom: 1rem
}

@media screen and (max-width:480px) {
  #project h1 {
    margin: 5rem 1rem
  }
}

#project .details tr {
  border-bottom: 1px solid var(--lightGrey-color)
}

#project .details tr td:last-child {
  font-weight: 500
}
</style>