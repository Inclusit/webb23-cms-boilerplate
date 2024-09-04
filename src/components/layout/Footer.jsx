export default function Footer({ config }) {
    return (
        <footer>
            <nav>
                <ul>
                    {config?.footer?.map((item) => (
                        <li key={item._uid}>
                            <Link href={`/${item.slug}`}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
}