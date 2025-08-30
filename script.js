// Data berita dengan thumbnail
const newsData = [
  {
    title: "Website Diluncurkan",
    date: "30 Agustus 2025",
    content: "Website ini resmi diluncurkan menggunakan GitHub Pages. Kini bisa diakses siapa saja secara gratis.",
    image: "https://via.placeholder.com/400x200?text=Website+Diluncurkan"
  },
  {
    title: "Halaman Berita Dibuka",
    date: "31 Agustus 2025",
    content: "Sekarang tersedia halaman khusus untuk berita. Admin bisa menulis update atau pengumuman terbaru di sini.",
    image: "https://via.placeholder.com/400x200?text=Halaman+Berita"
  },
  {
    title: "Update Baru",
    date: "1 September 2025",
    content: "Website mendapat update desain agar lebih menarik.",
    image: "https://via.placeholder.com/400x200?text=Update+Baru"
  }
];

// Render berita ke halaman news.html
const newsContainer = document.getElementById("news-container");
if (newsContainer) {
  newsData.forEach(news => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <h2>${news.title}</h2>
      <p><small>${news.date}</small></p>
      <p>${news.content}</p>
      <hr>
    `;
    newsContainer.appendChild(article);
  });
}
