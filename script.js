const dialog = document.querySelector('#detail');
let dialogTrigger;

function showDetail(label, title, paragraphs, trigger) {
  dialogTrigger = trigger;
  document.querySelector('#dialog-label').textContent = label;
  document.querySelector('#dialog-title').textContent = title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  paragraphs.forEach((text, index) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    if (index === paragraphs.length - 1) paragraph.className = 'dialog-note';
    content.append(paragraph);
  });
  dialog.showModal();
}

const projects = [
  { title: '小日子 · Little Days', text: [
    '一个以日常记录为主题的网站设计概念。以安静的山景、细腻的文字与充足的留白，为生活片刻提供一个可以停留的空间。',
    '页面围绕记录、阅读和归档展开，探索如何让数字空间承载日常的温度。',
    '此项目为概念展示，尚未关联真实产品。'
  ] },
  { title: '专注空间 · Orbit', text: [
    '一个围绕专注体验的产品概念。以克制的单色界面、圆形计时器和清晰的信息层级，减少视觉干扰。',
    '把复杂留在界面背后，把注意力留给眼前的事。这个概念探索了计时与专注体验之间的关系。',
    '此项目为概念展示，尚未关联真实产品。'
  ] }
];
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[Number(button.dataset.project)];
    showDetail('SELECTED WORK / 概念示例', project.title, project.text, button);
  });
});

const notes = [
  ['从一个小小的想法开始', '不必等到一切准备好才开始。把一个想法写下来，做成一个最小的版本，再从实际的体验中寻找下一个方向。', '创造有时很朴素：发现一个小问题，然后认真试着解决它。'],
  ['给生活留一点空白', '留一点时间散步，留一点空间发呆。暂时放下对效率的追求，也许会注意到那些匆忙时看不到的细节。', '记录不必宏大。一束光、一段对话，或是今天心情不错的理由，都值得留下。'],
  ['保持一个初学者的心态', '面对陌生的事，允许自己从最简单的问题问起。好奇心比急着证明自己知道答案，更能带来新的发现。', '学习是一场没有固定终点的探索。今天比昨天多理解一点，就已经很好。']
];
document.querySelectorAll('[data-note]').forEach(button => {
  button.addEventListener('click', () => {
    const [title, ...paragraphs] = notes[Number(button.dataset.note)];
    showDetail('FIELD NOTES / 随想示例', title, [...paragraphs, '此文为示例内容，可替换为原创文章。'], button);
  });
});
document.querySelectorAll('.close-dialog, .close-bottom').forEach(button => {
  button.addEventListener('click', () => dialog.close());
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => dialogTrigger?.focus({ preventScroll: true }));

const header = document.querySelector('#header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
const navigation = document.querySelectorAll('[data-nav]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navigation.forEach(link => link.classList.toggle('active', link.dataset.nav === entry.target.id));
  });
}, { rootMargin: '-20% 0px -55% 0px' });
document.querySelectorAll('#home, #work, #about, #notes, #contact').forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
