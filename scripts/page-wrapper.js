const { Zoom, List, Fab, Box, Menu, MenuItem } = window['MaterialUI'];
const { Fragment, useState } = React;
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const HashRouter = ReactRouterDOM.HashRouter;

const STAR_LAYER = {
    NEAR: { 
        filterId: "starFilter1",
        frequency: 0.1,
        weight: -5,
        animClass: "star-anim-1"
    },
    MID: {
        filterId: "starFilter2",
        frequency: 0.2,
        weight: -5,
        animClass: "star-anim-2"
    },
    FAR: {
        filterId: "starFilter3",
        frequency: 0.4,
        weight: -5,
        animClass: "star-anim-3"
    }
};

const StarBG = ({ starLayer }) => {
    const { filterId, frequency, weight, animClass } = starLayer;
    return (<Fragment>
        <svg className={"star-bg " + animClass} xmlns="http://www.w3.org/2000/svg" width="100%" height="2000px">
            <filter id={filterId}>
                {/* Generate Noise */}
                <feTurbulence baseFrequency={frequency}/>
                {/* Convert to greyscale and shift most values to white/black */}
                <feColorMatrix values={`0 0 0 9 ${weight}
                                        0 0 0 9 ${weight}
                                        0 0 0 9 ${weight}
                                        0 0 0 0 1`}/>
                {/* Make black transparent */}
                <feColorMatrix values="1 0 0 0 0
                                       0 1 0 0 0
                                       0 0 1 0 0
                                       3 -1 -1 0 0"/>
            </filter>
            <rect width="100%" height="100%" filter={`url(#${filterId})`}/>
        </svg>
        <svg className={"star-bg-after " + animClass} xmlns="http://www.w3.org/2000/svg" width="100%" height="2000px">
            <rect width="100%" height="100%" filter={`url(#${filterId})`}/>
        </svg>
    </Fragment>);
}; 

const App = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = !!anchorEl;
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (<HashRouter>
        {/* Header */}
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div class="header">
                <div class="logo-wrapper">
                    <img class="logo" src="https://cdn.glitch.global/b5f62b77-7a2a-4959-912b-e003c8a30e5e/NewLogo-01.svg?v=1674705919462" />
                </div>
                <nav class="menu">
                    <ul class="nav-links">
                        {/* Portfolio */}
                        <li class="nav-link" id="portfolio-button"
                            aria-controls={open ? 'portfolio-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}><Link>Portfolio</Link></li>
                        {/* Reel */}
                        <li class="nav-link"><Link to="/reel">Reel</Link></li>
                        {/* Contact */}
                        <li class="nav-link"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </Slide>

        {/* Header Menus */}
        <Menu 
        id="portfolio-menu"
        aria-labelledby="portfolio-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem class="nav-link-small" onClick={handleClose}><Link to="/">Animation</Link></MenuItem>
        <MenuItem class="nav-link-small" onClick={handleClose}><Link to="/illustration">Illustration</Link></MenuItem>
      </Menu>

        {/* Page Body */}
        <div id="pageContent">
            <Route path="/" exact component={Portfolio} />
            <Route path="/reel" component={Reel} />
            <Route path="/contact" component={Contact} />
        </div>

        {/* Social Link Menu */}
        <Box className="fab-menu">
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab onClick={() => openInNewTab('https://vimeo.com/user150503860')}>
                    <i className="fa-brands fa-vimeo-v fa-xl"></i>
                </Fab>
            </Zoom>
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab onClick={() => openInNewTab('https://www.instagram.com/lychees.keys/')}>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                </Fab>
            </Zoom>
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab onClick={() => openInNewTab('mailto:lychees.keys@gmail.com')}>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                </Fab>
            </Zoom>
        </Box>

        {/* Star BG Setup */}
        <StarBG starLayer={STAR_LAYER.NEAR} />
        <StarBG starLayer={STAR_LAYER.MID} />
        <StarBG starLayer={STAR_LAYER.FAR} />
    </HashRouter>);
};

ReactDOM.render(<App />, document.querySelector('#root'));