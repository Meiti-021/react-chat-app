import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const faqs = [
  {
    question: "How do I send a message?",
    answer:
      "To send a message, open a chat window, type your message in the text box, and press Enter or the Send button.",
  },
  {
    question: "Can I delete a message after sending it?",
    answer:
      "Yes, you can delete your sent messages within a certain time frame. Simply long-press the message and select the 'Delete' option.",
  },
  {
    question: "How do I create a group chat?",
    answer:
      "To create a group chat, go to the 'Chats' tab, click on the 'New Group' button, add members, set a group name and picture, then click 'Create'.",
  },
  {
    question: "Can I customize notification settings?",
    answer:
      "Absolutely! In the 'Settings' menu, navigate to 'Notifications' where you can customize notification tones, vibration patterns, and more.",
  },
  {
    question: "How do I block a user?",
    answer:
      "To block a user, go to their profile, click on the 'Block' button, and confirm. Blocked users won't be able to contact you.",
  },
  {
    question: "Is end-to-end encryption used?",
    answer:
      "Yes, our chat app employs end-to-end encryption to ensure that only you and the recipient can read the messages. No one else, not even us, can access them.",
  },
  {
    question: "How do I switch to dark mode?",
    answer:
      "To enable dark mode, open 'Settings', go to 'Appearance', and select 'Dark Mode'. The app interface will switch to a darker theme.",
  },
  {
    question: "What happens to my messages if I uninstall the app?",
    answer:
      "If you uninstall the app without backing up your messages, you'll lose them. Consider using the backup feature or syncing your messages before uninstalling.",
  },
  {
    question: "Can I use the app on multiple devices?",
    answer:
      "Yes, you can use the app on multiple devices. Just log in with the same account, and your chats will sync across your devices.",
  },
  {
    question: "How do I report inappropriate content?",
    answer:
      "If you encounter inappropriate content, long-press the message, select 'Report', and choose the appropriate reason. Our moderation team will review it.",
  },
  // Add more FAQs here
];

const HelpGeneral = () => {
  return (
    <Box component={"div"} sx={{ p: 5 }}>
      <Typography sx={{ fontSize: "2rem", fontWeight: 600, mb: 2 }}>
        General
      </Typography>
      <Typography sx={{ color: "#7a7f9a" }}>
        Welcome to the Chat App FAQ page! Here, you'll find answers to common
        questions about our chat application. Discover how to get started,
        navigate the interface, manage your conversations, and much more.
        Whether you're a new user or a seasoned chatter, this resource will
        guide you through the ins and outs of our platform. If you can't find
        what you're looking for, feel free to reach out to our support team for
        personalized assistance. Let's make your chatting experience smooth and
        enjoyable!
      </Typography>
      <Box component={"div"} sx={{ mt: 5 }}>
        {faqs.map((faq, index) => {
          return (
            <Accordion key={"faq" + index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ fontSize: "1rem", color: "black", fontWeight: 500 }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.9rem", color: "#7a7f9a", fontWeight: 400 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default HelpGeneral;