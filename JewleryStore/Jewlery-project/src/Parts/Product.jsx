import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { ImageList, ImageListItem } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import { IoAddOutline } from "react-icons/io5";
import { FaShekelSign } from "react-icons/fa6";
import { TbCurrencyShekel } from "react-icons/tb";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function RecipeReviewCard({ images, content, title, subheader, price, sendToCart,product }) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    handleOpen();
  };

  return (
    <div className='other'>
      <Card className='other2' sx={{ maxWidth: 330, minWidth: 230 }}>
        <CardHeader
          title={title}
          subheader={subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={images[0]}
          alt="Paella dish"
          onClick={() => handleImageClick(0)}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

          <IconButton onClick={()=>sendToCart(product)}>
            <IoAddOutline />
          </IconButton>

          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}

          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <h5 style={{paddingLeft:'30%' }}>{price}<TbCurrencyShekel /></h5>
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            width: '80%',
            height: '80%',
            maxWidth: 'none',
            margin: 'auto',
            borderRadius: 2,
          },
        }}
      >
        {/* Close button */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 20,
            top: 10,
            zIndex: 100,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Content of the dialog */}
        <Carousel interval={null} activeIndex={selectedImageIndex} onSelect={setSelectedImageIndex}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Image ${index}`}
                  style={{

                    marginTop: "1.7rem",
                    aspectRatio: '16/9',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2> this is the title</h2>
        <p>this is the content</p>
      </Dialog>
    </div>
  );
}
