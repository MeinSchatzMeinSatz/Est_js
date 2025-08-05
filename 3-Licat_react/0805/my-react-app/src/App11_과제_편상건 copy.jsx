function Content({ page }) {
    switch (page) {
        case "about":
            return <About />;

        case "profile":
            return <Profile />;

        case "contact":
            return <Contact />;

        default:
            return <About />;
    }
}

function RenderTest() {
    const [page, setPage] = useState();
    return (
        <>
            <header
                className="header"
                onClick={(e) => {
                    if (
                        e.currentTarget === e.target ||
                        e.target.tagName !== "BUTTON"
                    )
                        return;
                    setPage(e.target.textContent.toLowerCase());
                }}
            >
                <nav>
                    <ul>
                        <li>
                            <button>About</button>
                        </li>
                        <li>
                            <button>Profile</button>
                        </li>
                        <li>
                            <button>Contact</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Content page={page} />
        </>
    );
}
