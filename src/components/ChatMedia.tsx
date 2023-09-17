import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Dialog, DialogTitle } from "@mui/material";
const itemData = [
  {
    img: "./assets/media/breakfast.webp",
    title: "Breakfast",
  },
  {
    img: "./assets/media/burger.webp",
    title: "Burger",
  },
  {
    img: "./assets/media/camera.webp",
    title: "Camera",
  },
  {
    img: "./assets/media/coffe.webp",
    title: "Coffee",
  },
  {
    img: "./assets/media/hats.webp",
    title: "Hats",
  },
  {
    img: "./assets/media/honey.webp",
    title: "Honey",
  },
  {
    img: "./assets/media/Basketball.webp",
    title: "Basketball",
  },
  {
    img: "./assets/media/Fern.webp",
    title: "Fern",
  },
  {
    img: "./assets/media/mashrooms.webp",
    title: "Mushrooms",
  },
  {
    img: "./assets/media/tomato.webp",
    title: "Tomato basil",
  },
  {
    img: "./assets/media/seastar.webp",
    title: "Sea star",
  },
  {
    img: "./assets/media/bike.webp",
    title: "Bike",
  },
];
const ChatMedia = () => {
  const [open, setOpen] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageList
        sx={{ width: "100%", height: "auto", mt: "-0.05rem" }}
        cols={3}
        rowHeight={130}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setOpen(true);
                setImageIndex(index);
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {itemData[imageIndex].title}
        </DialogTitle>
        <img
          src={`${itemData[imageIndex].img}?w=164&h=164&fit=crop&auto=format`}
          alt={itemData[imageIndex].title}
          style={{ width: "500px", height: "auto", objectFit: "contain" }}
        />
      </Dialog>
    </>
  );
};

export default ChatMedia;
