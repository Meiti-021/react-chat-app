import { Box, Typography } from "@mui/material";
const ChatBodySkeleton = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: -10,
      }}
    >
      <Typography
        sx={{ fontSize: "5rem", fontWeight: "bold", color: "#EAEDF3" }}
      >
        LOADING
      </Typography>
    </Box>
  );
};

export default ChatBodySkeleton;
