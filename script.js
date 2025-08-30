// Data berita (mudah ditambah)
const newsData = [
  {
    title: "Website Diluncurkan",
    date: "30 Agustus 2025",
    content: "Website ini resmi diluncurkan menggunakan GitHub Pages. Kini bisa diakses siapa saja secara gratis."
  },
  {
    title: "Halaman Berita Dibuka",
    date: "31 Agustus 2025",
    content: "Sekarang tersedia halaman khusus untuk berita. Admin bisa menulis update atau pengumuman terbaru di sini."
  }
];

// Render berita ke halaman news.html
const newsContainer = document.getElementById("news-container");
if (newsContainer) {
  newsData.forEach(news => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${news.title}</h2>
      <p><small>${news.date}</small></p>
      <p>${news.content}</p>
    `;
    newsContainer.appendChild(article);
  });
}