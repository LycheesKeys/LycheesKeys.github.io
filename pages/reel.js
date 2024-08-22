const { Grid } = window['MaterialUI'];

const Reel = () => (
  <div class="reel-wrapper">
    <Grid container direction="column" sx={{ height: '100%' }}>
      <Grid display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Box sx={{ width: '80%', height: '100%' }}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Card id="reelCard" className="info-card" sx={{ height: '100%' }}>
              <iframe class="reel-frame" src={'https://player.vimeo.com/video/618482196?autoplay=1&color=612d2d'} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </Card>
          </Slide>
        </Box>
      </Grid>
    </Grid>
  </div>
);