const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const posts = [...document.querySelectorAll('.post-card')];
const searchInput = document.querySelector('#search-input');
const filters = [...document.querySelectorAll('[data-filter]')];
let activeCategory = 'all';

function filterPosts() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let count = 0;
  posts.forEach(post => {
    const matchesCategory = activeCategory === 'all' || post.dataset.category === activeCategory;
    const matchesSearch = !query || post.dataset.search.toLocaleLowerCase().includes(query);
    post.hidden = !(matchesCategory && matchesSearch);
    if (!post.hidden) count++;
  });
  filters.forEach(button => {
    const active = button.dataset.filter === activeCategory;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#result-count').textContent = query || activeCategory !== 'all' ? `找到 ${count} 篇` : `共 ${count} 篇`;
  document.querySelector('#empty-state').hidden = count > 0;
}
if (searchInput) {
  searchInput.addEventListener('input', filterPosts);
  document.querySelector('#search-form').addEventListener('submit', event => {
    event.preventDefault();
    filterPosts();
    document.querySelector('#notes').scrollIntoView({ block: 'start' });
  });
  filters.forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    filterPosts();
  }));
  document.querySelector('#reset-search').addEventListener('click', () => {
    searchInput.value = '';
    activeCategory = 'all';
    filterPosts();
    searchInput.focus({ preventScroll: true });
  });
  filterPosts();
}
