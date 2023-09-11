import Sitemap from 'sitemap';

// Pobierz konfigurację tras z Vue Router
import router from './router'; // Twoja konfiguracja Vue Router

const sitemap = Sitemap.createSitemap({
  hostname: 'https://lazy-cup.vercel.app/',
  cacheTime: 600000, // 600 000 ms = 10 minut (opcjonalnie)
});

// Dodaj trasy do sitemap.xml
router.options.routes.forEach((route) => {
  sitemap.add({
    url: route.path,
    changefreq: 'weekly', // Możesz dostosować częstotliwość zmiany strony
    priority: 0.8, // Możesz dostosować priorytet
  });
});

// Wygeneruj plik sitemap.xml
const sitemapContent = sitemap.toString();
// Zapisz sitemap.xml do pliku lub użyj go w odpowiedzi HTTP
console.log(sitemapContent); // Możesz użyć tego, aby zapisać plik

// Możesz również użyć tego sitemapContent w odpowiedzi HTTP w Express.js, na przykład:
// res.header('Content-Type', 'application/xml');
// res.send(sitemapContent);
