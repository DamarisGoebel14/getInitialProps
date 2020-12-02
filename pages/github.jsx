function GitHub ({projects}){

const proj = projects.map((project) => <li>{project.name}</li>)

    return (
        <div>
        <h1>Data Fetching getInitialProps </h1>
            <p>getInitialProps enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the data already populated from the server. Recommended: getStaticProps or getServerSideProps.

                If you're using Next.js 9.3 or newer, we recommend that you use getStaticProps or getServerSideProps instead of getInitialProps.</p>


            <p> Das erste Projekt: {projects[0].name}</p>


                <ul>{proj}</ul>
        </div>
    )
}

GitHub.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/DamarisGoebel14/repos')
    const json = await res.json()
    const projects = json

    return {
        projects: projects
    }
}

export default GitHub