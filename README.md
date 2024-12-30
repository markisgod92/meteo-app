# SimplyMeteo

## Description
SimplyMeteo is a simple, dashboard-style weather application that I made as an academic project. It uses [WeatherAPI](https://www.weatherapi.com/) to display current weather data and a daily forecast for the specified location.

**Features**:
- multi-language (Italian, English)
- responsive design
- easy-to-use interface
- switch between metric and imperial measure units


## Technologies Used
- **React**: component-based UI development
- **Bootstrap**: styling and layout
- **i18next**: multi-language support


## Screenshots
![screenshot1](/screenshots/Screenshot%202024-12-30%20alle%2018.44.09.png)
![screenshot2](/screenshots/Screenshot%202024-12-30%20alle%2018.44.14.png)


## Installation
1. **Prerequisites**:
   - **npm**: required to manage dependencies and run the development server.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/markisgod92/meteo-app.git
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Set up your API key**:
   - Rename `.env.sample` to `.env`
   - Add your WeatherAPI key:
   ```env
   VITE_API_KEY=<your_api_key>
   ```

5. **Run the app**:
   ```bash
   npm run dev
   ```


## Usage
1. Type a location in the search bar.
2. Select the desired result from the dropdown menu.
3. View the current weather and daily forecast for your location.


## Demo
SimplyMeteo is deployed on Vercel: [simplymeteo.vercel.app](https://simplymeteo.vercel.app/)