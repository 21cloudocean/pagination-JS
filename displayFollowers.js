const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url: img, login: name, html_url: pageURL } = person;
      return `<article class="card">
    <img src="${img}" alt="${name}"/>
    <h4>${name}</h4>
    <a href="${pageURL}" class="btn">view profile</a>
    </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
