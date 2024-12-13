import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SocialIcons() {
  const icons = [
    { id: 1, href: '#', icon: 'fa-linkedin' },
    { id: 2, href: '#', icon: 'fa-twitter' },
    { id: 3, href: '#', icon: 'fa-github' },
    { id: 4, href: '#', icon: 'fa-instagram' },
    { id: 5, href: '#', icon: 'fa-youtube' },
    { id: 6, href: '#', icon: 'fa-envelope' }, // fas = FontAwesome Solid
  ];

  return (
    <div className="flex space-x-5 mt-4">
      {icons.map(({ id, href, icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px]">
            <i className={`fab ${icon} text-black-500 text-md group-hover:text-gray-900`} />
          </div>
        </a>
      ))}
    </div>
  );
}
