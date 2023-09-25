import {
  Box,
  Button,
  Typography,
  Fab,
  TextField,
  TextFieldProps,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { enqueueSnackbar } from "notistack";
import login from "../assets/login.json";
import login2 from "../assets/login2.json";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide, SwiperRef as SwiperRefType } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../services/settingSlice";
import { RootState } from "../store";
const LoginCenter = () => {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((store: RootState) => store.setting);
  const [open, setOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const lottie2Ref = useRef<LottieRefCurrentProps>(null);
  const swiperRef = useRef<SwiperRefType>(null);
  const emailRef = useRef<TextFieldProps>(null);
  const passwordRef = useRef<TextFieldProps>(null);
  const codeRef = useRef<TextFieldProps>(null);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove={false}
        ref={swiperRef}
      >
        <SwiperSlide>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: "100vh",
              width: "100vw",
              background: darkmode ? "#000" : "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "45px",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xs: 320, md: 450 },
                height: { xs: 200, md: 400 },
              }}
            >
              <Lottie
                animationData={login}
                lottieRef={lottieRef}
                loop={false}
                autoplay={false}
                onComplete={() => {
                  swiperRef.current?.swiper.slideNext();
                  setOpen(true);
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "white",
                bgcolor: "#008EE4",
                width: "90%",
                maxWidth: "400px",
                mt: { xs: 10, md: 0 },
              }}
              size="large"
              onClick={() => {
                if (lottieRef.current) {
                  lottieRef.current.play();
                }
              }}
            >
              START MESSAGING
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              background: darkmode ? "#000" : "#fff",
            }}
          >
            <Box
              component={"form"}
              sx={{
                width: "90%",
                maxWidth: "450px",
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize={"1.2rem"}
                textAlign={"center"}
                color={darkmode ? "#fff" : undefined}
              >
                Your Email Address
              </Typography>
              <Typography color={"#848484"} mt={1} textAlign={"center"} px={3}>
                Please confirm your email address and enter your password.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 2,
                  gap: 1,
                  width: "100%",
                }}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  type="email"
                  required
                  inputRef={emailRef}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  required
                  inputRef={passwordRef}
                />
              </Box>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, right: 0 }}
                onClick={() => {
                  if (emailRef.current?.value && passwordRef.current?.value) {
                    swiperRef.current?.swiper.slideNext();
                    lottie2Ref.current?.play();
                  } else {
                    enqueueSnackbar({
                      variant: "error",
                      message: "Please fill the form.",
                    });
                  }
                }}
              >
                <ArrowForwardIcon />
              </Fab>
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              background: darkmode ? "#000" : "#fff",
            }}
          >
            <Box
              component={"form"}
              sx={{
                width: "90%",
                maxWidth: "450px",
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: { xs: 920, md: 850 },
                  height: { xs: 300, md: 500 },
                  mt: { xs: -30, md: -20 },
                  display: darkmode ? "none" : "block",
                }}
              >
                <Lottie
                  animationData={login2}
                  lottieRef={lottie2Ref}
                  loop={false}
                  autoplay={false}
                  width={"600px"}
                  style={{ height: "300px" }}
                />
              </Box>
              <Typography
                fontSize={"1.2rem"}
                textAlign={"center"}
                color={darkmode ? "#fff" : undefined}
              >
                Check Your Email
              </Typography>
              <Typography color={"#848484"} mt={1} textAlign={"center"} px={3}>
                Please Enter the code we have sent to your email.
              </Typography>
              <TextField
                label="code"
                variant="outlined"
                size="small"
                sx={{ width: "100%", mt: 2 }}
                required
                inputRef={codeRef}
              />
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, right: 0 }}
                onClick={() => {
                  if (codeRef.current?.value) {
                    dispatch(logIn());
                  } else {
                    enqueueSnackbar({
                      variant: "error",
                      message: "Please fill the form.",
                    });
                  }
                }}
              >
                <CheckIcon />
              </Fab>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, left: 0 }}
                onClick={() => {
                  swiperRef.current?.swiper.slidePrev();
                }}
              >
                <ArrowBackIcon />
              </Fab>
            </Box>
          </div>
        </SwiperSlide>
      </Swiper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography
            sx={{
              fontSize: "1rem",
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            Data Persistence:
          </Typography>{" "}
          Please note that the information you enter on this page is for
          demonstration purposes only and will not be saved or stored anywhere.
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            No Real Data:
          </Typography>{" "}
          Do not enter any real or sensitive information. This is a frontend
          demo, and your inputs are only used for showcasing the design and
          functionality.
          <span
            style={{
              color: darkmode ? "white" : "black",
              fontWeight: "bold",
            }}
          >
            You can use any random data here!
          </span>{" "}
          you don't need to enter real world information.
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            Data Deletion:
          </Typography>{" "}
          If you reload this page or navigate away, all the data you've entered
          will be lost. It won't be recoverable.
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            Privacy:
          </Typography>{" "}
          We do not collect, store, or use any of the information you provide
          here. Your privacy is important to us.
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            Reset on Refresh:
          </Typography>{" "}
          The page is designed to reset all inputs to their default values when
          you refresh it, so don't rely on it for storing any personal or
          critical data.
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            For Testing Purposes:
          </Typography>
          Feel free to explore and interact with the login page, but remember
          it's meant for testing and presentation purposes only. Not for Real
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            Authentication:
          </Typography>{" "}
          This login page is not connected to a real authentication system. It's
          purely a frontend demonstration and does not provide any real
          security.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginCenter;
