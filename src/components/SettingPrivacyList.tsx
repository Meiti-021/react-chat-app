import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Drawer,
  Box,
  Typography,
  IconButton,
  FormControl,
  Radio,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
type PrivacyDataType =
  | "Phone Number"
  | "Last Seen & Online"
  | "Profile Photos"
  | "Bio"
  | "Forwarded Messages"
  | "Calls"
  | "Groups & Channels";
const privacyData: PrivacyDataType[] = [
  "Phone Number",
  "Last Seen & Online",
  "Profile Photos",
  "Bio",
  "Forwarded Messages",
  "Calls",
  "Groups & Channels",
];

const SettingPrivacyList = () => {
  const [Open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<{
    "Phone Number": "Everybody" | "My Contacts" | "Nobody";
    "Last Seen & Online": "Everybody" | "My Contacts" | "Nobody";
    "Profile Photos": "Everybody" | "My Contacts" | "Nobody";
    Bio: "Everybody" | "My Contacts" | "Nobody";
    "Forwarded Messages": "Everybody" | "My Contacts" | "Nobody";
    Calls: "Everybody" | "My Contacts" | "Nobody";
    "Groups & Channels": "Everybody" | "My Contacts" | "Nobody";
  }>({
    "Phone Number": "Everybody",
    "Last Seen & Online": "Everybody",
    "Profile Photos": "Everybody",
    Bio: "Everybody",
    "Forwarded Messages": "Everybody",
    Calls: "Everybody",
    "Groups & Channels": "Everybody",
  });
  const [drawerContent, setDrawerContent] = useState<
    | "Phone Number"
    | "Last Seen & Online"
    | "Profile Photos"
    | "Bio"
    | "Forwarded Messages"
    | "Calls"
    | "Groups & Channels"
  >("Phone Number");
  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <List sx={{ px: 0, mt: -2 }}>
        {privacyData.map((item) => {
          return (
            <ListItem key={item}>
              <ListItemText primary={item} />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => {
                    setDrawerContent(item);
                    setOpen(true);
                  }}
                >
                  {selectedValue[item]}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Drawer
        variant="temporary"
        open={Open}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on .
        }}
      >
        <Box sx={{ width: { xs: "100vw", sm: "400px" }, height: "100vh" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              component={"div"}
              sx={{
                height: "3.5rem",
                display: "flex",
                gap: 5,
                alignItems: "center",
                bgcolor: "#008EE4",
                color: "white",
                px: 2,
                width: "100%",
              }}
            >
              <IconButton
                sx={{ color: "white" }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography fontSize={"1.1rem"}>{drawerContent}</Typography>
            </Box>
            <Box p={2}>
              <Typography sx={{ color: "#008EE4" }}>
                Who can see your {drawerContent.toLowerCase()}?
              </Typography>
              <FormControl fullWidth>
                <List>
                  <ListItem>
                    <ListItemText>Everybody</ListItemText>
                    <ListItemSecondaryAction>
                      <Radio
                        checked={selectedValue[drawerContent] === "Everybody"}
                        onChange={() => {
                          setSelectedValue({
                            ...selectedValue,
                            [drawerContent]: "Everybody",
                          });
                        }}
                        value="Everybody"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "Everybody" }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemText>My Contacts</ListItemText>
                    <ListItemSecondaryAction>
                      <Radio
                        checked={selectedValue[drawerContent] === "My Contacts"}
                        onChange={() => {
                          setSelectedValue({
                            ...selectedValue,
                            [drawerContent]: "My Contacts",
                          });
                        }}
                        value="My Contacts"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "My Contacts" }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Nobody</ListItemText>
                    <ListItemSecondaryAction>
                      <Radio
                        checked={selectedValue[drawerContent] === "Nobody"}
                        onChange={() => {
                          setSelectedValue({
                            ...selectedValue,
                            [drawerContent]: "Nobody",
                          });
                        }}
                        value="Nobody"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "Nobody" }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingPrivacyList;
