import { Box, Skeleton, Stack, Typography } from "@mui/material";
const ChatLoading = () => {
  return (
    <>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "0.5rem",
          borderBottom: "1px solid #EAEDF3",
          height: "3.5rem",
          position: "sticky",
          top: "0",
          width: "inherite",
          background: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Stack sx={{ pt: 1 }}>
            <Skeleton
              animation="wave"
              height={10}
              width="6rem"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="4rem"
              style={{ marginBottom: 6 }}
            />
          </Stack>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mr: 2 }}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
        </Box>
      </Box>
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
    </>
  );
};

export default ChatLoading;
