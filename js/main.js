const { createApp } = Vue;

createApp({
   data() {
      return {
         cds: [],
         filteredCds: [],
         currentGenre: 'default',
      };
   },
   methods: {
      changeGenre() {
         this.filteredCds = this.cds.filter((cd) => cd.genre === this.currentGenre);
         if (this.currentGenre === 'default') {
            this.filteredCds = this.cds;
         }
      },
   },
   created() {
      axios
         .get('http://localhost/DICEMBRE/php-dischi-json/api.php') //
         .then((response) => {
            this.cds = response.data;
            this.filteredCds = this.cds;
         });
   },
}).mount('#app');
