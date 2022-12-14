const url = 'https://634808cc0484786c6e90070a.mockapi.io';

const container = document.getElementById('container');

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

getMockApi(`${url}/article`)
  .then(function (result) {
    container.innerHTML = '';
    result.forEach(function (article) {
      container.innerHTML += `
        <div class="box">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
          <a href="article-detail.html?id=${article.id}">Detail</a>
        </div>`
    });
  });
