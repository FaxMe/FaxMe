// Fetch the latest sports news from a sample API
document.addEventListener('DOMContentLoaded', function() {
  fetchLatestNews();
});

function fetchLatestNews() {
  const newsContainer = document.getElementById('news-container');

  fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      if (data.articles) {
        data.articles.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.classList.add('news-article');
          articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          `;
          newsContainer.appendChild(articleElement);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
}
