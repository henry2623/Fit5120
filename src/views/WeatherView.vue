<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
    </div>

    <div class="search-bar">
      <input
        type="text"
        v-model="city"
        placeholder="Enter city name"
        class="search-input"
      />
      <button @click="searchByCity" class="search-button">Search</button>
    </div>
  </div>

 
  <main>
  <div v-if="weatherData">

      <h2>
        {{ weatherData.name }}, {{ weatherData.sys.country }}
      </h2>
      <div>
      
        <img :src="iconUrl" alt="Weather Icon" />
        <p>{{ temperature }} °C</p>
      </div>
    
      <span>{{ weatherData.weather[0].description }}</span>
    </div>
  </main>
</template>

<script>
import axios from "axios";

const apikey = "cebd1a7f51eea232e225ec6faed39375"; 

export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
      hourlyForecast: [],
      dailyForecast: [],
    };
  },
  computed: {
   
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },

    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    async searchByCity() {
      if (!this.city.trim()) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
      await this.fetchWeatherData(url);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 60px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.header h1 {
  color: #333;
  margin-bottom: 16px;
}

.search-bar {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 1rem;
}

.search-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.search-button:hover {
  background: #0056b3;
}

main {
  text-align: center;
  margin-top: 20px;
}

img {
  width: 80px;
  height: 80px;
}

span {
  display: block;
  margin-top: 10px;
  text-transform: capitalize;
}
</style>
