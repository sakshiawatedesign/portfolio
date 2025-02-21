import Link from "next/link";
import Image from "next/image";

export default function SocialIcons() {
  const icons = [
    { id: 1, href: 'tel:+919867559183', src: '/icons/call.png', alt: 'Mobile Number' }, // Phone call
    { id: 2, href: 'mailto:arunvishwakarma3009@gmail.com', src: '/icons/email.png', alt: 'Email' },
    { id: 3, href: 'https://www.linkedin.com/in/arun-vishwakarma30', src: '/icons/linkedin.png', alt: 'LinkedIn' },
    { id: 4, href: 'https://github.com/ArunVishwakarma30', src: '/icons/github.png', alt: 'GitHub' },
    { id: 5, href: 'https://www.instagram.com/_arun__30/', src: '/icons/instagram.png', alt: 'Instagram' },
    // { id: 7, href: 'https://x.com/?lang=en', src: '/icons/twitter.png', alt: 'Twitter' },
  ];

  return (
    <div className="flex space-x-2 mt-4">
      {icons.map(({ id, href, src, alt }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-[#edf2f7] border border-gray-300 px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px]">
            <Image
              src={src}
              alt={alt}
              width={24}
              height={24}
              className="h-6 w-6 group-hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
