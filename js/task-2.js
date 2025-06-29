const images = [
  {
    url: './images/image-1.jpg',
    alt: 'Design planning',
  },
  {
    url: './images/image-2.jpg',
    alt: 'Lightbulb idea',
  },
  {
    url: './images/image-3.jpg',
    alt: 'Phone and coffee',
  },
  {
    url: './images/image-4.jpg',
    alt: 'Meeting room',
  },
  {
    url: './images/image-5.jpg',
    alt: 'Colorful office',
  },
  {
    url: './images/image-6.jpg',
    alt: 'Coworking team',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(({ url, alt }) => {
    return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" class="gallery-image" />
    </li>
  `;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);
