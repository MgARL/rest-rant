const React = require('react')

function Def(html){
    return(
        <html>
            <head>
                <title>REST-Rant</title>
                <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav className='mb-5'>
                    <div className="row">
                        <div className="col-sm-3">
                            <a href="/"><h2>REST-Rant</h2></a>
                        </div>
                        <div className="col-sm-6">
                            <ul>
                                <li><a href="/">Home <i className="bi bi-house"></i></a></li>
                                <li><a href="/places">Places <i className="bi bi-shop"></i></a></li>
                                <li><a href="/places/new">Add Place <i className="bi bi-plus-square"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {html.children}
                <div className='mb-5'></div>

                <footer className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <p className="white-big mx-2">Created By</p><a href="https://www.linkedin.com/in/miguel-rodriguez-25371021b/" target="_blank" className="text-decoration-none"> Miguel Rodriguez</a>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-2">
                            <a href="https://github.com/MgARL" target="_blank"><i className="bi bi-github"></i></a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://www.linkedin.com/in/miguel-rodriguez-25371021b/" target="_blank"><i className="bi bi-linkedin"></i></a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://twitter.com/mgarl22" target="_blank"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def