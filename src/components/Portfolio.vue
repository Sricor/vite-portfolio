<script setup>
import config from '../../web.config'
import { useRouter } from 'vue-router'

const router = useRouter()
const go = (path) => {
  router.push(`/portfolio/${path}`)
}
</script>

<template lang="pug">
div
  section.container.is-center.hero_2gtQS
    h2.lead_1u3G2 Hey there👋
      br
      .
        I'm Sricor,
        a
      a(href="" target="_blank")
        |  designer  
      .
        passionate about crafting great user experiences with a strong understanding of development.
      small I have a penchant for
        a(href="" target="_blank")
          |  design tools 
        | and 
        a(href="" target="_blank")
          |  design systems 
        | .
      small Also, I've made
        a(href="" target="_blank")
          |  free website themes 
        | ,
        a(href="" target="_blank")
          |  a CSS framework 
        | ,
        a(href="" target="_blank")
          |  a icon CDN 
        | and
        a(href="" target="_blank")
          |  a Chrome extension 
        | .
  hr
  br
  h6.container.is-text-center.is-text-uppercase Selected work
  br
  .container.work_RC80A
    .row
      .col
        .card_OF-oQ.left(v-for="project in config.profolioLeft")
          a(@click="go(project.project)")
            figure.figure_1ZhV3
              img(:src="config.imageUrl+project.image")
            footer
              h4 {{ project.title }}
              small {{ project.info }}
              p {{ project.description }}
      .col
        .card_OF-oQ.right(v-for="project in config.profolioRight")
          a(@click="go(project.project)")
            figure.figure_1ZhV3
              img(:src="config.imageUrl+project.image")
            footer
              h4 {{ project.title }}
              small {{ project.info }}
              p {{ project.description }}
  p.is-text-center
    a.outline.button.secondary(target="_blank" href="https://be.net/jenil")
      | See more work on Behance
  br
</template>