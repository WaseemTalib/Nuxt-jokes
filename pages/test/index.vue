<template>
  <div>
    <!-- <div class="jokeWrapper">
      <nuxt-link
        v-for="(link, ind) of links"
        :key="ind"
        :to="{ name: 'test-slug', params: { id: link.link, slug: link.title } }"
        >Go to Url {{ link.link }} <br
      /></nuxt-link>

      <button @click="changeFormat">Change Format</button>
    </div> -->

    <!-- Multi Component -->

    <component v-for="(el, ind) in links" :key="ind" :is="`joke-${el.comp}`"></component>

  </div>
</template>
<script>
export default {
  data() {
    return {
      component: "",
      links: [
        {
          link: 1,
          title: "Waseem Talib",
          comp: "one"
        },
        {
          link: 2,
          title: "sana Zafar",
          comp: "two"
        },
        {
          link: 3,
          title: "sidra",
          comp: "three"
        },
      ],
      newLinksArray: [],
    };
  },
  methods: {
    changeFormat() {
      this.links.map((el) => {
        let title = el.title;
        title = title.toLowerCase();
        title = title.split(" ");
        title = title.join("");
        console.log(title);
        this.newLinksArray.push(title);
      });
      console.log(this.newLinksArray);
    },
  },
};
</script>