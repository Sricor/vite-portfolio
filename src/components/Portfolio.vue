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
  section.container.is-center.hero
    h2.lead Hey there👋
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
  .container.work
    .row
      .col
        .card.left(v-for="project in config.profolioLeft")
          a(@click="go(project.project)")
            figure.figure
              img(:src="config.imageUrl + project.image + config.imageWebp")
            footer
              h4 {{ project.title }}
              small {{ project.info }}
              p {{ project.description }}
      .col
        .card.right(v-for="project in config.profolioRight")
          a(@click="go(project.project)")
            figure.figure
              img(:src="config.imageUrl + project.image + config.imageWebp")
            footer
              h4 {{ project.title }}
              small {{ project.info }}
              p {{ project.description }}
  p.is-text-center
    a.outline.button.secondary(target="_blank" href="https://be.net/jenil")
      | See more work on Behance
  br
</template>


<style scoped>
.is-text-center {
  text-align: center
}

h6 {
  text-transform: uppercase
}

.figure {
  overflow: hidden;
  margin: 0
}

.figure p {
  font-style: italic;
  text-align: center;
  font-size: 90%;
  margin-top: 1rem
}

.figure img {
  display: block;
  transition: all .3s ease;
  margin: auto
}

.card {
  padding: 0;
  background-color: transparent;
  transition: all .2s ease, transform .2s cubic-bezier(.03, .98, .52, .99);
  box-shadow: 0 2px 15px rgba(0, 0, 0, .3);
  color: #ddd;
  position: relative;
  border-radius: 1rem;
  transform: translateZ(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
  margin-bottom: calc(var(--grid-gutter)*2)
}

.card:hover {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02);
  box-shadow: rgba(0, 0, 0, .5) 0px 10px 50px;
}

.card a {
  display: block
}

.card footer {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  padding: .75rem 1rem;
  transform: translateZ(3rem);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .25)
}

@media screen and (max-width:480px) {
  .card footer {
    box-shadow: none;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    border-radius: 0 0 1rem 1rem
  }
}

.card figure {
  margin: 0;
  border-radius: 1rem
}

.card figure img {
  width: 100%
}

.card h4 {
  margin: 0;
  line-height: 1.2;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 1px 8px rgba(0, 0, 0, .4), 0 0 40px #000
}

@media screen and (max-width:480px) {
  .card h4 {
    font-size: 1em
  }
}

.card p {
  color: #eee;
  text-shadow: 0 1px 8px rgba(0, 0, 0, .4), 0 0 20px rgba(0, 0, 0, .4);
  width: 100%;
  margin-bottom: 0
}

@media screen and (max-width:480px) {
  .card p {
    display: none
  }
}

.card small {
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #eee;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(0, 0, 0, .3), 0 1px 40px #000
}

.work {
  margin-top: 2rem
}

.work a:hover {
  opacity: 1
}

.work>div>div {
  margin: var(--grid-gutter)
}

.hero {
  min-height: 200px;
  height: 50vh;
  width: 75vw;
  font: 1.1em sans-serif;
}

.lead {
  font-weight: 300
}

.lead small {
  display: block;
  font-size: .65em;
  line-height: 1.8
}

@media screen and (max-width:48rem) {
  .lead {
    font-size: 1.2em
  }

  .lead small {
    font-size: .75em
  }
}

</style>