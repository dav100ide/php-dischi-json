const { createApp } = Vue;

createApp({
   data() {
      return {
         cds: [],
      };
   },
   created() {
      axios
         .get('http://localhost/DICEMBRE/php-dischi-json/api.php') //
         .then((response) => {
            this.cds = response.data;
         });
   },
}).mount('#app');
