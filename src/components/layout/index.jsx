import Header from './Header';
//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    return (
        <>
            <header>
                <Header config={config} />
            </header>
            <main>{children}
            </main>
            <footer></footer>
        </>
    );
}