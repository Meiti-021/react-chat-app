import { Typography, Paper } from "@mui/material";
const HelpPrivacy = () => {
  return (
    <Paper elevation={0} sx={{ p: 3, m: 2 }}>
      <Typography variant="h5" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        At [Your App Name], we are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        outlines the types of data we collect, how we use and safeguard that
        data, and your rights regarding your personal information.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Information Collection and Usage
      </Typography>
      <Typography variant="body1" paragraph>
        We collect the data you provide to us when using our chat app, including
        but not limited to your name, profile picture, messages, and contact
        information. This data is used solely for the purpose of facilitating
        communication within the app and improving user experience.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We implement strict security measures to protect your personal data from
        unauthorized access, disclosure, or alteration. However, please be aware
        that no online transmission or storage method is 100% secure.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Third-Party Services
      </Typography>
      <Typography variant="body1" paragraph>
        We may use third-party services to analyze app usage and gather insights
        to enhance our services. These third parties may collect and process
        data in accordance with their own privacy policies.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your Choices
      </Typography>
      <Typography variant="body1" paragraph>
        You can update, correct, or delete your personal information within the
        app settings. You also have the right to access, rectify, or erase your
        data by contacting us.
      </Typography>
      <Typography variant="body1" paragraph>
        By using our chat app, you agree to the terms outlined in this Privacy
        Policy.
      </Typography>
    </Paper>
  );
};
export default HelpPrivacy;
