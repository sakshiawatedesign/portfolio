import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function SocialIcons() {
  const icons = [
    {
      id: 1,
      href: 'https://www.behance.net/sakshiawate',
      icon: <FaBehance className="w-5 h-5 text-[#0057ff]" />,
      label: 'Behance',
      title: 'Behance Portfolio'
    },
    {
      id: 2,
      href: 'https://www.linkedin.com/in/sakshi-awate-900239198/',
      icon: <FaLinkedinIn className="w-5 h-5 text-[#0a66c2]" />,
      label: 'LinkedIn',
      title: 'LinkedIn Profile'
    },
    {
      id: 3,
      href: 'mailto:sakshiawatedesign@gmail.com',
      icon: <FaEnvelope className="w-5 h-5 text-[#ea4335]" />,
      label: 'Email',
      title: 'Email Sakshi'
    },
    {
      id: 4,
      href: 'tel:+919594482689',
      icon: <FaPhone className="w-4 h-4 text-[#2c7a7b]" />,
      label: 'Phone',
      title: '+91 9594482689'
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {icons.map(({ id, href, icon, title, label }) => (
        <Link
          key={id}
          href={href}
          target={href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          title={title}
          className="group"
        >
          <div className="bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl shadow-sm transition-all duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:shadow-md group-hover:border-[#2c7a7b] flex items-center gap-2">
            <span className="group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
            <span className="text-xs font-semibold text-gray-700 group-hover:text-[#2c7a7b] hidden sm:inline">
              {label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
