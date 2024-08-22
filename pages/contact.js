const { Grid, Item, Box, Card, CardContent, Typography, Divider, Slide, Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Snackbar, Alert } = window['MaterialUI'];
const { useState } = React;

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const openSuccess = () => setSuccess(true);
  const closeSuccess = () => setSuccess(false);
  const openFailure = () => setFailure(true);
  const closeFailure = () => setFailure(false);
  const copyText = (text) => copyToClipboard(text, openSuccess, openFailure);

  return (<div class="contact-wrapper">
    <Grid container direction="column">
      {/* About Card */}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: '40%' }}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Card id="aboutCard" className="info-card">
              <CardContent>
                <Typography className="card-title" sx={{ ml: 2, mb: 2 }} variant="h5" component="div">
                  About Anthony
                </Typography>
                <Divider className="card-divider" variant="middle" />
                <Box className="card-content" sx={{ m: 2, mb: 0 }}>
                  <Avatar className="avatar" alt="Anthony Pellegrino" src="../rsc/Anthony Portrait.jpg" />
                  <Typography sx={{ mb: 1 }} variant="body1">
                  Anthony Pellegrino is a 2D Animator and Character Artist from Long Island, NY.
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  His journey began with a myriad of cartoon influences that opened his eyes to the freedom of animation. 
                  From there he continued sharpening his skills through traditional art studies,  as well as, practicing story craft.
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  His college career began with a brief stint as an architecture major before realizing his true dream 
                  to inspire the next generation the way he was inspired in his youth. 
                  </Typography>
                  <Typography variant="body1">
                  Transferring to 2D Animation he began working hard putting his skills to the test learning digital art. 
                  Tapping into the creative skills he's built his whole life he now crafts work that blossoms from the intricate 
                  weave of character and plot.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </Grid>

      {/* Contact Card */}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: '40%' }}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Card id="contactCard" className="info-card">
              <CardContent>
                <Typography className="card-title" sx={{ ml: 2, mb: 2 }} variant="h5" component="div">
                  Where to find me
                </Typography>
                <Divider className="card-divider" variant="middle" />
                <Box className="card-content" sx={{ m: 2, mb: 0 }}>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  You can find my work or reach out to me in the following ways:
                  </Typography>
                  <List className="social-info">
                    {/* Vimeo Link */}
                    <ListItem
                      secondaryAction={
                        <IconButton size="small" aria-label="copy" onClick={() => copyText("https://vimeo.com/user150503860")}>
                          <i className="fa-regular fa-copy"></i>
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar className="social-icon">
                          <i className="fa-brands fa-vimeo-v fa-sm"></i>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="social-text"
                        primary="My Vimeo Page"
                      />
                    </ListItem>
                    {/* Instagram Link */}
                    <ListItem
                      secondaryAction={
                        <IconButton size="small" aria-label="copy" onClick={() => copyText("@lychees.keys")}>
                          <i className="fa-regular fa-copy"></i>
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar className="social-icon">
                          <i className="fa-brands fa-instagram fa-sm"></i>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="social-text"
                        primary="@lychees.keys"
                      />
                    </ListItem>
                    {/* Email Link */}
                    <ListItem
                      secondaryAction={
                        <IconButton size="small" aria-label="copy" onClick={() => copyText("lychees.keys@gmail.com")}>
                          <i className="fa-regular fa-copy"></i>
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar className="social-icon">
                          <i className="fa-solid fa-envelope fa-sm"></i>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText className="social-text"
                        primary="lychees.keys@gmail.com"
                      />
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </Grid>
    </Grid>

    {/* Snackbar */}
    <Snackbar open={success} autoHideDuration={6000} onClose={closeSuccess}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Text copied to clipboard!
      </Alert>
    </Snackbar>
    <Snackbar open={failure} autoHideDuration={6000} onClose={closeFailure}>
      <Alert severity="error" sx={{ width: '100%' }}>
        Text failed to copy to clipboard.
      </Alert>
    </Snackbar>
  </div>);
};