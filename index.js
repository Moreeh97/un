
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top.header');
    const logo = document.querySelector('.logo img');
    
    logo.addEventListener('click', function() {
        alert('Welcome to the United Nations!');
    });
}   );


const donateButtons = document.querySelectorAll('[id$="-donate"]');

const donationForm = document.getElementById('donationForm');

donateButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    donationForm.style.display = 'block';
    donationForm.scrollIntoView({ behavior: 'smooth' });
  });
});

 donateButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    donationForm.classList.add('show');
    donationForm.scrollIntoView({ behavior: 'smooth' });
  });
});



//for get last ten news from un.org
  async function fetchUNNews() {
    const rssUrl = "https://news.un.org/feed/subscribe/en/news/all/rss.xml";
    const proxy = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl);

    try {
      const response = await fetch(proxy);
      const data = await response.json();

      const newsList = document.getElementById("news-list");

      data.items.slice(0, 10).forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        newsList.appendChild(li);
      });

    } catch (error) {
      console.error("Failed to fetch UN news:", error);
      document.getElementById("news-list").innerHTML = "<li>Unable to load news at the moment.</li>";
    }
  }

  fetchUNNews();