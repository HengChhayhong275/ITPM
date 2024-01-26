<template>
    <div class="bg-white rounded-18">
      <div class="pt-5 pb-2 px-5">
        <h2>Course</h2>
      </div>
      <hr>
      <div class="bg-white h-screen">
        <div class="container pt-5 pb-2 px-5 max-w-full grid grid-cols-3 gap-5">
        <div v-for="(card, index) in cards" :key="index" class="max-w-lg">
          <div class="cards" :style="{
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${require(`@/assets/${card.img}`)}')`
          }">
            <div class="text-22">{{ card.subject }}</div>
            <div>{{ card.name }}</div>
            <img class="rounded-full mt-5 w-16 h-16" :src="require(`@/assets/${card.profilePic}`)" alt="profile-picture">
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            subject: 'English',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/englishclass.jpg'
          },
          {
            subject: 'Physic',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/physic.jpg'
          },
          {
            subject: 'Data Science and machine Learning',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/datascience.jpg'
          },
          {
            subject: 'Music',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/music.jpg'
          },
          {
            subject: 'History',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/history.jpg'
          },
          {
            subject: 'Art and Culture',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/art.jpg'
          },
          {
            subject: 'Math',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/math.jpg'
          },
          {
            subject: 'Sport',
            name: 'Sothy Rith',
            profilePic: 'img/profile-pic/profile-2.png',
            img: 'img/sport.jpg'
          },
          // Add more card objects as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
.cards {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 18px;
    padding-left: 22px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.cards:hover {
    transform: scale(1.05); /* Enlarge the card on hover */
    background-color: rgba(255, 255, 255, 0.1); /* Change the color on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a slight shadow on hover */
}



div {
    color: white !important;
}
</style>
