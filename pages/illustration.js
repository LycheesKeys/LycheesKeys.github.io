const { Grid, Box, Modal, Fab, Icon } = window['MaterialUI'];
const { useState, useCallback } = React;
const videos = ([
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 3,
  },
  {
    thumbnail: '../rsc/Anthony Pellegrino - The Newt and The Fly 3D.jpg',
    thumbnailHover: '../rsc/Anthony Pellegrino - The Newt and The Fly 3D.gif',
    vimeoId: '800400954',
    order: 4,
  },
  {
    thumbnail: '../rsc/CanineLocomotionAnthonyPellegrino.jpg',
    thumbnailHover: '../rsc/CanineLocomotionAnthonyPellegrino.gif',
    vimeoId: '800401785',
    order: 10,
  },
  {
    thumbnail: '../rsc/Equine Locomotion Anthony Pellegrino.jpg',
    thumbnailHover: '../rsc/Equine Locomotion Anthony Pellegrino.gif',
    vimeoId: '800401763',
    order: 11,
  },
  {
    thumbnail: '../rsc/LilSqueakers.jpg',
    thumbnailHover: '../rsc/LilSqueakers.gif',
    vimeoId: '800401121',
    order: 6,
  },
  {
    thumbnail: '../rsc/Illustration/Pellegrino_Anthony_Alkonost_Character_Design.jpg',
    thumbnailHover: '../rsc/Pellegrino Anthony Animated Documentary Final.gif',
    vimeoId: '800401693',
    order: 0,
  },
  {
    thumbnail: '../rsc/Pellegrino_Anthony_Breaking_It_Down_Oh_Yeah.jpg',
    thumbnailHover: '../rsc/Pellegrino_Anthony_Breaking_It_Down_Oh_Yeah.gif',
    vimeoId: '800401403',
    order: 9,
  },
  {
    thumbnail: '../rsc/Pellegrino_Anthony_Final_Film_Color_Final_120720.jpg',
    thumbnailHover: '../rsc/Pellegrino_Anthony_Final_Film_Color_Final_120720.gif',
    vimeoId: '800401172',
    order: 2,
  },
  {
    thumbnail: '../rsc/PellegrinoAnthonyFinalFilmWereHunter.jpg',
    thumbnailHover: '../rsc/PellegrinoAnthonyFinalFilmWereHunter.gif',
    vimeoId: '800401310',
    order: 1,
  },
  {
    thumbnail: '../rsc/PellegrinoAnthonyTransmogColorized.jpg',
    thumbnailHover: '../rsc/PellegrinoAnthonyTransmogColorized.gif',
    vimeoId: '800401230',
    order: 7,
  },
  {
    thumbnail: '../rsc/SpookyMansionBackground.jpg',
    thumbnailHover: '../rsc/SpookyMansionBackground.gif',
    vimeoId: '800407506',
    order: 8,
  },
  {
    thumbnail: '../rsc/WeAllEatFinishedNoSound.jpg',
    thumbnailHover: '../rsc/WeAllEatFinishedNoSound.gif',
    vimeoId: '800401370',
    order: 5,
  },
  {
    thumbnail: '../rsc/AnthonyPellegrinoKnightVSDragonColor.jpg',
    thumbnailHover: '../rsc/AnthonyPellegrinoKnightVSDragonColor.gif',
    vimeoId: '800403540',
    order: 12,
  },
  {
    thumbnail: '../rsc/Pellegrino_Anthony_Character_Animation_Final.jpg',
    thumbnailHover: '../rsc/Pellegrino_Anthony_Character_Animation_Final.gif',
    vimeoId: '800403430',
    order: 14,
  },
  {
    thumbnail: '../rsc/Pellegrino_Anthony_Staging_Skatepark_101920_small.jpg',
    thumbnailHover: '../rsc/Pellegrino_Anthony_Staging_Skatepark_101920_small.gif',
    vimeoId: '800403352',
    order: 13,
  },
]).sort((video1, video2) => video1.order - video2.order);

const Portfolio = () => {
  // Allows for selection of a particular video to display
  const [videoId, setVideoId] = useState(null);
  // Keeps track of mouse hover for video thumbnails
  const [hoverItem, setHoverItem] = useState(null);
  const openModal = (newVideoId) => {
    if (!videoId)
      setVideoId(newVideoId);
  };
  const closeModal = () => setVideoId(null);
  const getHoverClass = useCallback((videoIndex) => (videoIndex === hoverItem) ? " hover" : "", [hoverItem]);

  return (
    <div class="portfolio-wrapper">
      {/* Video Player Modal */}
      <Modal className="video-modal" open={!!videoId} fullScreen>
        <Box className="modal-content-wrapper">
          <Box className="modal-content">
            <Fab className="close-icon" size="small" onClick={() => closeModal()}>
              <i className="fa-sharp fa-solid fa-xmark fa-xl"></i>
            </Fab>
            <iframe class="video-frame" src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=612d2d`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Box>
      </Modal>
      
      {/* Video Selection Grid */}
      <Grid container direction="column">
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ width: '80%' }}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <Card id="videoCard" className="info-card">
                <CardContent>
                  <Typography className="card-title" sx={{ ml: 2, mb: 2 }} variant="h5" component="div">
                    Videos
                  </Typography>
                  <Divider className="card-divider" variant="middle" />
                  <Box className="card-content" sx={{ m: 2, mb: 0 }}>
                    <Grid className="thumbnails" container direction="row" justifyContent="center" alignItems="center">
                      {videos.map((video, index) => {
                        const imgSrc = (index === hoverItem) ? video.thumbnailHover : video.thumbnail;
                        return (
                          <Grid key={index} onClick={() => openModal(video.vimeoId)} onMouseEnter={() => setHoverItem(index)} onMouseLeave={() => setHoverItem(null)} sx={{ m: 3, zIndex: 3 }}>
                            <Box className="thumbnail-container">
                              <i class={"fa-solid fa-play" + getHoverClass(index)}></i>
                              <img class="thumbnail" src={imgSrc} key={imgSrc} />
                              <img class="thumbnail-bg" src={video.thumbnail} />
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}