export default function SocialIcons() {
    const icons = [
      { id: 1, href: '#', icon: 'fa-linkedin' },
      { id: 2, href: '#', icon: 'fa-twitter' },
      { id: 3, href: '#', icon: 'fa-github' },
      { id: 4, href: '#', icon: 'fa-instagram' },
      { id: 5, href: '#', icon: 'fa-youtube' },
      { id: 6, href: '#', icon: 'fa-envelope' },
    ];
  
    return (
      <div className="flex space-x-4 mt-4">
        {icons.map(({ id, href, icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 text-2xl"
          >
            <i className={`fab ${icon}`} />
          </a>
        ))}
      </div>
    );
  }