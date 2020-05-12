<template>
  <div class="hello">
    <div class="content" v-for="(n, index) in pageOffSet" :key="index">
      <img
        :src="'https://atlas-content-cdn.pixelsquid.com/stock-images/armchair-arm-chair-6360XZ2-600.jpg'+index"
        alt
      />
      <p>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vel tempora esse placeat
        sapiente accusamus quos dolorem quisquam quo
        similique tempore laboriosam natus cupiditate
        ipsa laudantium saepe fugiat, non necessitatibus maxime.
      </p>
    </div>
    <footer>
      <div ref="infiniteScrollTrigger" id="scroll-trigger"></div>
      <div class="circle-loader" v-if="showloader"></div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      maxPerPage: 2,
      totalResults: 100,
      showloader: true
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffSet() {
      // quero que ele traga de 2 em 2
      return this.maxPerPage * this.currentPage;
    } 
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showloader = true;
            setTimeout(() => {
              this.currentPage += 1;
              this.showloader = false;
            }, 2000); // simulando uma chamada ajax
          }
        });
      })
      observer.observe(this.$refs.infiniteScrollTrigger)
    }
  },
  mounted() {
    this.scrollTrigger();
  }
};
</script>
<style scoped>
#scroll-trigger {
  height: 50px;
}

.circle-loader {
  position: relative;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px dashed #6769ab;
  /* border-top: 4px solid rgb(50, 10, 73); */
  animation: animate 1.5s infinite backwards;
  -moz-animation: animate 1.5s infinite backwards;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>