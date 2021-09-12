<script setup>
import config from '../../web.config'
import { useRouter } from 'vue-router'

const router = useRouter()
const go = (path) => {
  router.push(`/portfolio/${path}`)
}
</script>

<template>
  <div>
    <section class="container is-center hero_2gtQS">
      <h2 class="lead_1u3G2">
        Namaste <br>I'm Jenil,
        a <a href="https://www.wired.com/2017/03/john-maeda-want-survive-design-better-learn-code/"
          target="_blank">computational
          designer</a> passionate about crafting great user experiences with a strong understanding of
        development.
        <small>I have a penchant for <a href="http://blog.jgog.in/post/165874378175/thesis-4-topics"
            target="_blank">design tools</a> and <a href="http://blog.jgog.in/tagged/thesis"
            target="_blank">design systems</a>.</small> <small>Also, I've made <a
            href="https://jenil.github.io/bulmaswatch/" target="_blank"
            title="Bulmaswatch">free website themes</a>, <a href="https://jenil.github.io/chota/" target="_blank"
            title="Chota">a CSS framework</a>, <a href="https://icongr.am/" target="_blank"
            title="Icongram">a icon CDN</a> and <a href="https://s.jgog.in/HuntSplash" target="_blank"
            title="HuntSplash">a Chrome extension</a>.</small></h2>
    </section>

    <hr> <br>
    <h6 class="container is-text-center is-text-uppercase">Selected work</h6> <br>
    <div class="container work_RC80A">
      <div class="row">
        <div class="col">
          <div class="card_OF-oQ left" v-for="project in config.profolioLeft" >
          <a @click="go(project.project)">
              <figure class="figure_1ZhV3">
                <img :src="config.imageUrl+project.image">
              </figure>
              <footer>
                <h4>{{ project.title }}</h4> <small>{{ project.info }}</small>
                <p>{{ project.description }}</p>
              </footer>
            </a>
          </div>
        </div>
        <div class="col">
          <div class="card_OF-oQ right"  v-for="project in config.profolioRight" >
          <a @click="go(project.project)">
          <figure class="figure_1ZhV3"><img :src="config.imageUrl+project.image"></figure>
              <footer>
                <h4>{{ project.title }}</h4> <small>{{ project.info }}</small>
                <p>{{ project.description }}</p>
              </footer>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="is-text-center">
      <a target="_blank" href="https://be.net/jenil"
        class="outline button secondary">See more work on Behance
      </a>
    </p> 
    <br>
  </div>
</template>