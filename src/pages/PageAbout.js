function PageAbout() {

    return (
        <section className="about-page">
            <h2>Page About</h2>
            <div>

                <h3>Hello and Welcome! <br/>
                    This is a project created by an aspiring developer, I hope you enjoy this movieDb powered website. <br/>
                    Browse around to see and favourite movies you like from different categories provided by MovieDb.
                </h3>
                <h3>This product uses the TMDb API but is not endorsed or certified by TMDb.</h3>
                <img className="moviedb-img"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                    alt="moviedb logo"
                />
            </div>
        </section>
    )
}

export default PageAbout