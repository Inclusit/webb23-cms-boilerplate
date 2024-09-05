import Link from 'next/link';
import Image from 'next/image';


export default function Header({ config }) {
    return (
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <span>
            {config?.content?.logo?.filename && (
              <Image
                src={config.content.logo.filename}
                alt="Logo"
                width={100}
                height={100}
              />
            )}
          </span>
          <div className="lg:flex lg:gap-x-12 ">
            {config?.content?.header_menu?.map((item) => (
              <Link key={item._uid} href={`/${item.link.cached_url}`}>
                <span className="text-base font-medium text-gray-900 hover:text-gray-400">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    );
    }

