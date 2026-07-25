/* ============================================================
   weather.js — Widget de clima con WeatherAPI.com
   Exporta: weather (default)

   CONFIGURACIÓN:
   1. Regístrate gratis en https://www.weatherapi.com
   2. Copia tu API key y pégala en API_KEY
   ============================================================ */

const API_KEY = '301e660285164637974134112261804'; // ← sustituye por tu clave de WeatherAPI.com

export default function weather() {
  const widget = document.querySelector('#weather-widget');
  if (!widget) return;

  /* Muestra estado de carga */
  widget.innerHTML = `<span class="weather-loading">📍 ...</span>`;

  /* Pide geolocalización al navegador */
  if (!navigator.geolocation) {
    widget.innerHTML = `<span class="weather-error">Sin ubicación</span>`;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=es`;
        const res  = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const city  = data.location.name;
        const temp  = Math.round(data.current.temp_c);
        const icon  = data.current.condition.icon;   // URL del icono
        const desc  = data.current.condition.text;

        widget.innerHTML = `
          <div class="weather-widget">
            <div class="weather-top">
              <img class="weather-icon" src="https:${icon}" alt="${desc}" />
              <span class="weather-temp">${temp}°C</span>
            </div>
            <span class="weather-city">${city}</span>
          </div>
        `;
      } catch (err) {
        console.warn('WeatherAPI error:', err);
        widget.innerHTML = `<span class="weather-error">Sin datos</span>`;
      }
    },
    () => {
      widget.innerHTML = `<span class="weather-error">Sin permiso</span>`;
    }
  );
}