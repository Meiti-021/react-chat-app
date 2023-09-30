import ChatIcon from "@mui/icons-material/Chat";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CampaignIcon from "@mui/icons-material/Campaign";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import RecommendIcon from "@mui/icons-material/Recommend";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupIcon from "@mui/icons-material/Group";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import ShareIcon from "@mui/icons-material/Share";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { languageType } from "./languageType";
import KeyIcon from "@mui/icons-material/Key";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AvTimerIcon from "@mui/icons-material/AvTimer";
export const en: languageType = {
  meitigram: "meitigram",
  all: "all",
  new: "new",
  members: "members",
  admins: "admins",
  admin: "admin",
  copy: "copy",
  reply: "reply",
  edit: "edit",
  delete: "delete",
  cancel: "cancel",
  name: "Name",
  lastName: "Last name",
  editEmail: "Edit email",
  emptyMessageError: "Message can't be empty!",
  saveChanges: "Save changes",
  editMessages: "edit messages",
  allMessages: "all messages",
  newPrivateMessages: "new private messages",
  groups: "groups",
  privates: "privates",
  convertasion: "conversation",
  startMessaging: "start messaging",
  continue: "continue",
  email: "email",
  password: "password",
  fillTheFormErrorMessage: "Please fill the form.",
  allConversation: "ALL CONVERSATIONS",
  newMessages: "NEW MESSAGES",
  online: "online",
  offline: "offline",
  voiceCall: "voice call",
  setting: "setting",
  mute: "mute",
  muteOff: "mute off",
  autoDeletion: "auto deletion",
  shareContact: "share contact",
  blockUser: "block user",
  deleteContact: "delete contact",
  about: "about",
  media: "media",
  files: "files",
  share: "share",
  newChannel: "new channel",
  newGroup: "new group",
  newChat: "new chat",
  search: "search",
  general: "general",
  faqs: "faqs",
  bug: "bug",
  suggestion: "suggestion",
  others: "others",
  sendFeedBack: "send feedback",
  title: "title",
  enterATitle: "enter a title",
  description: "description",
  enterAdescription: "enter description",
  submit: "submit",
  editName: "edit name",
  setProfilePhoto: "set profile photo",
  logOut: "log out",
  tapToChangeEmail: "tap to change email",
  location: "location",
  career: "career",
  bio: "bio",
  account: "account",
  off: "off",
  on: "on",
  security: "security",
  privacy: "privacy",
  phoneNumber: "phone number",
  lastSeenAndonline: "last seen and online",
  profilePhotos: "profile photos",
  forwardedMessages: "forwarded messages",
  calls: "calls",
  everyBody: "everybody",
  myContacts: "my contact",
  nobody: "nobody",
  setBakup: "set backup",
  setBakupEmail: "set backup email",
  setBackupDesc:
    "Your Safty Net For Account Recovery And Security Notifications.",
  passcodeLock: "passcode lock",
  passcodeLockDesc:
    "When A Passcode Is Set, A Lock Icon Appears Above Your Chatlist, Tap It To Lock Your Meitigram App.",
  EnablePasscode: "enable passcode",
  GroupsAndChannels: "groups and channels",
  music: "music",
  ProfilePicture: "profile picture",
  Videos: "videos",
  darkMode: "dark mode",
  login: "login",
  language: "language",
  loading: "loading",
  thersNoMessages: "There's no messages yet!",
  startAudioCall: "Start Audio call",
  image: "image",
  select: "select",
  aboutMe: "about me",
  attachFile: "Attach file",
  openEmojiTab: "Open emoji tab",
  typeMessageHere: "Type Message Here ...",
  send: "send",
  call: "call",
  notSet: "NOT SET",
  clearHistory: "Clear History",
  leaveGroup: "Leave Group",
  lastSeen: "Last seen",
  channels: "channels",
  InviteFriends: "Invite Friends",
  MeitigramFeatures: "Meitigram Features",
  settingCareerDescription:
    "You can add a few lines about your carrer and what you are doing now.",
  settingLocationDescription:
    "You can add a few lines about where you're living right now.",
  settingBioDescription:
    " You can add a few lines about yourself. Choose who can see your bio in setting.",
  loginWarning: {
    dataPersistence: {
      title: "Data Persistence",
      description:
        "Please note that the information you enter on this page is for demonstration purposes only and will not be saved or stored anywhere.",
    },
    noRealData: {
      title: "No Real Data",
      description:
        "Do not enter any real or sensitive information. This is a frontend demo, and your inputs are only used for showcasing the design and functionality.You can use any random data here! you don't need to enter real world information.",
    },
    dataDeletion: {
      title: "Data Deletion",
      description:
        "If you reload this page or navigate away, all the data you've entered will be lost. It won't be recoverable.",
    },
    privacy: {
      title: "Privacy",
      description:
        "We do not collect, store, or use any of the information you provide here. Your privacy is important to us.",
    },
    resetOnRefresh: {
      title: "Reset on Refresh",
      description:
        "The page is designed to reset all inputs to their default values when you refresh it, so don't rely on it for storing any personal or critical data.",
    },
    forTestingPurposes: {
      title: "For Testing Purposes",
      description:
        "Feel free to explore and interact with the login page, but remember it's meant for testing and presentation purposes only. Not for Real",
    },
    authentication: {
      title: "Authentication",
      description:
        "This login page is not connected to a real authentication system. It's purely a frontend demonstration and does not provide any real security.",
    },
  },
  firstLoginForm: {
    title: "Your Email Address",
    subtitle: "Please confirm your email address and enter your password.",
  },
  loginRegistery: {
    title: "Check Your Email",
    subtitle: "Please Enter the code we have sent to your email.",
  },
  WelcomePage: {
    title: "Welcome to my chat app react project.",
    subtitle: "please select a chat or start a new convertasion.",
  },
  menuItems: [
    {
      title: "MENU",
      items: [
        {
          id: "Conversations",
          title: "Conversations",
          icon: <ChatIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },

        {
          id: "Groups",
          title: "Groups",
          icon: <GroupsIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Privates",
          title: "Privates",
          icon: <GroupIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Contacts",
          title: "Contacts",
          icon: <PermContactCalendarIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "contacts",
        },

        {
          id: "Channels",
          title: "Channels",
          icon: <CampaignIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "channels",
        },
        {
          id: "Bots",
          title: "Bots",
          icon: <SmartToyIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "bots",
        },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        {
          id: "Need help?",
          title: "Need help?",
          icon: <HelpOutlineIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "help",
        },
        {
          id: "Contact us",
          title: "Contact us",
          icon: <HeadsetMicIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "contact-us",
        },
        {
          id: "Hire me",
          title: "Hire me",
          icon: <RecommendIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "hire-me",
        },
      ],
    },
    {
      title: "SETTING",
      items: [
        {
          id: "Setting",
          title: "Setting",
          icon: <SettingsIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "setting",
        },
        {
          id: "Dark mode",
          title: "Dark mode",
          icon: <Brightness4Icon sx={{ color: "inherit" }} />,
          type: Button,
          address: "darkmode",
        },
        {
          id: "Log out",
          title: "Log out",
          icon: <LogoutIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "logout",
        },
      ],
    },
  ],
  helpCenter: {
    title: "help center",
    subtitle: "Find answers to frequently asked questions.",
    aboutDescription:
      "Introducing MEITIGRAM – a demo that highlights the magic of front-end development using React and Material UI. Dive into a smooth messaging experience, where things look great and work seamlessly thanks to the skills of our developer (Mahdi Dehgani).",
    helpDatacenter: [
      {
        id: "general",
        title: "General",
        icon: <SettingsOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "suggestion",
        title: "Suggestion",
        icon: <AssistantOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "buq-report",
        title: "Buq Report",
        icon: <BugReportOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "privacy-and-security",
        title: "Privacy & Security",
        icon: <PrivacyTipOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
    ],
    general: {
      faqsDescription:
        "Welcome to the Chat App FAQ page! Here, you'll find answers to common questions about our chat application. Discover how to get started, navigate the interface, manage your conversations, and much more. Whether you're a new user or a seasoned chatter, this resource will guide you through the ins and outs of our platform. If you can't find what you're looking for, feel free to reach out to our support team for personalized assistance. Let's make your chatting experience smooth and enjoyable!",
      faqs: [
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
      ],
    },
    suggestion: {
      title: "Send us your feedback !",
      subtitle:
        "Do You have a suggestion or found some bug? - let us know in the field below.",
      experience: "How was your Experience?",
      textarea: "Describe your experience here",
    },
    bugReport: {
      title: "Report a bug or request a feature",
      optionText: "Select an Option",
      options: {
        reportABug: "Report A Bug",
        requestAFeature: "Request A Feature",
        others: "Others",
      },
    },
    privacy: {
      title: "Privacy and Policy",
      privacyPolicy: {
        primary: "Privacy Policy",
        secondary:
          "At meitigram, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of data we collect, how we use and safeguard that data, and your rights regarding your personal information.",
      },
      informationCollection: {
        primary: "Information Collection and Usage",
        secondary:
          "We collect the data you provide to us when using our chat app, including but not limited to your name, profile picture, messages, and contact information. This data is used solely for the purpose of facilitating communication within the app and improving user experience.",
      },
      DataSecurity: {
        primary: "Data Security",
        secondary:
          "We implement strict security measures to protect your personal data from unauthorized access, disclosure, or alteration. However, please be aware that no online transmission or storage method is 100% secure.",
      },
      thirdPartyServices: {
        primary: "Third-Party Services",
        secondary:
          "We may use third-party services to analyze app usage and gather insights to enhance our services. These third parties may collect and process data in accordance with their own privacy policies.",
      },
      yourChoice: {
        primary: "Your Choices",
        secondary:
          "You can update, correct, or delete your personal information within the app settings. You also have the right to access, rectify, or erase your data by contacting us.",
      },
      bottomLine:
        "By using our chat app, you agree to the terms outlined in this Privacy Policy.",
    },
  },
  contactCenter: {
    contactInfoTitle: "Contact Info",
    contactInfoSubtitle:
      "We're here to help! If you have any questions, concerns, or feedback about our chat app, please don't hesitate to reach out to us. Our dedicated support team is available to assist you.",
    costumerSupport: "Customer Support",
    feedbackTitle: "Feedback and Suggestions",
    feedbackSubtitle:
      "We value your input and are always looking for ways to improve our app. If you have any suggestions or ideas, please feel free to share them with us at feedback@chatapp.com.",
    technicalSupportTitle: "Technical Support",
    technicalSupportSubtitle:
      "Encountering technical issues? Our technical support team is here to help you get back on track. Reach out to us at - techsupport@chatapp.com -, and we'll work to resolve any problems you're facing.",
  },
  hireMeCenter: {
    aboutMeTitle: "about me",
    aboutMeSubtitle:
      "Hey, - I'm Mehdi Dehghani -, a front-end developer and the creator of this project. If you find this project intriguing and wish to explore potential collaboration, please don't hesitate to reach out to me using one of the contact methods listed below.",
    contactMeTitle: "Contact me",
    contactMesubtitle:
      "Ready to discuss your web development project or have any questions? Feel free to reach out! I'm eager to learn about your vision and how I can help you bring it to life.",
    whatCanIOfferTitle: "What I Can Offer",
    whatCanIOfferSubtitle:
      "Responsive and user-friendly website design and development. Custom web solutions tailored to your unique needs. Proficiency in HTML, CSS, JavaScript, and various web development frameworks. A keen eye for detail and a commitment to delivering high-quality work. Quick problem-solving skills to ensure smooth project development. Adaptable and comfortable with both remote and non-remote work arrangements.",
    RemoteOrOnSiteTitle: "Remote or On-Site, I'm Flexible",
    RemoteOrOnSiteSubtitle:
      "Whether you need a web developer who can collaborate with your team on-site or someone who can seamlessly integrate into your remote workflow, I'm here to make your project a success. Distance is never a barrier when it comes to delivering top-notch web solutions.",
    bussinessHours: {
      primary: "Business Hours",
      secondary: "Monday - Friday, 9:00 AM - 6:00 PM (EST)",
    },
  },
  chatSetting: {
    title: "chat setting",
    chatSettings: "chat settings",
    messagesCorners: "messages corners",
    generalChatSettings: "general chat setting",
    Darkmode: "dark mode",
    animations: {
      primary: "animations",
      secondary: "Reduce motion effects to save power",
    },
    stikersandEmojies: {
      primary: "Stickers and Emoji",
      secondary: "Manage stickers, emoji and reactions",
    },
    mediaAndSounds: "Media and Sound",
    tapToShowNext: {
      primary: "Tap to show next media",
      secondary:
        "Tap near the edge of the screen while viewing media to navigate",
    },
    raiseToListen: {
      primary: "Raise to listen",
      secondary: "Switch sound to earpiece by rising the phone to your ear",
    },
    raiseToSpeak: {
      primary: "Raise to speak",
      secondary: "reacord voice messages by rising the phone to your ear",
    },
    pauseMusicWhileRecording: {
      primary: "Pause music while recording",
      secondary: "Pause music while reacording a video message",
    },
    microphoenForVoiceMessages: "Microphoen for voice messages",
  },
  PrivacyAndPolicy: {
    title: "privacy and policy",
    twoStepVerification: "Two-Step verification",
    autoDeleteMessages: "Auto-Delete Messages",
    loginWithEmail: "Login with emial",
    PasscodeLock: "Passcode Lock",
    backupEmail: "Backup Email",
    changeBackup: "Change Backup",
    setBackup: "Set Backup",
    firstLine:
      "Review the list of devices where you are logged into your meitigram app.",
    backupFirstLine:
      "Your safty net for account recovery and security notifications.",
    pascodeFirstLine:
      "when a passcode is set, a lock icon appears above your chatlist,tap it to lock your meitigram app.",
    EnablePasscode: "Enable Passcode",
  },
  NotificationAndSounds: {
    title: "Notification and Sounds ",
    showNotificationsFrom: "Show notification from",
    AllAcounts: "All accounts",
    firstTextLine:
      "Turn This off if you want to recieve notifications only from the account you are currently using.",
    notificationForChats: "Notificaton for chats",
    tapToChange: "Tap to Change",
    BadgeCounter: "Badge Counter",
    ShowBadgeIcon: "Show Badge Icon",
    IncludeMutedChats: "Include Muted Chats",
    CountUnreadedMessages: "Count Unreaded Messages",
    events: "Events",
    ContactJoined: "Contact joined to Meitigram",
    PinnedMessages: "Pinned Messages",
    Others: "Others",
    keepAliveService: {
      primary: "Keep-Alive Service",
      secondary: "Relunch web when shut down.Enable for reliable notofication",
    },
    backgroundConnection: {
      primary: "Background Connection",
      secondary:
        "Keep a low inpact background connection to telegram for reliable notification.",
    },
  },
  DataAndStorage: {
    title: "Data and Storage",
    diskAndNetworkUsage: "Disk and network usage",
    StorageUsage: "Storage Usage",
    DataUsage: "Data Usage",
    AutomaticMediaDownload: "Automatic media download",
    whenUsinMobile: "When using Mobile data",
    whenConnenctedTowifi: "when Connected to wi-fi",
    whenRoaming: "when Roaming",
    saveToGallery: "Save to GAllery",
    clearCache: "clear cache",
    StorageUsageTopCaption: "Meitigram uses - MB of your device storage.",
    StorageUsageBottomCaption:
      "All media will stay in Meitigram cloude and can be redownloaded again",
  },
  logoutPage: {
    alternativeOptions: "Alternative options",
    addAnotherAccount: {
      primary: "Add another account",
      secondary:
        "connect other Meitigram account and easily swutch between them",
    },
    changePhoneNumber: {
      primary: "Change Phone Number",
      secondary: "Move your account,chats and media to a new number",
    },
    setPasscode: {
      primary: "Set a Passcode",
      secondary: "Lock the app with a passcode so that others can't open it",
    },
    clearCache: {
      primary: "Clear Cache",
      secondary: "Free up space on your device",
    },
    contactSupport: {
      primary: "Contact Support",
      secondary: "Tell us about any issue; logging out does't usually help",
    },
  },
  actions: [
    { icon: <MapsUgcIcon />, name: "New Chat" },
    { icon: <GroupsIcon />, name: "New Group" },
    { icon: <VolumeDownIcon />, name: "New Channel" },
    { icon: <ShareIcon />, name: "Share" },
  ],
  settingData: [
    {
      id: "pass",
      icon: <KeyIcon />,
      title: "Two-Step verification",
    },
    {
      id: "delete",
      icon: <AvTimerIcon />,
      title: "Auto-Delete Messages",
    },
    {
      id: "login",
      icon: <EmailOutlinedIcon />,
      title: "Login with emial",
    },
  ],
};

export const tr: languageType = {
  meitigram: "meitigram",
  all: "tümü",
  new: "yeni",
  members: "üyeler",
  admins: "yöneticiler",
  admin: "yönetici",
  copy: "kopyala",
  reply: "cevapla",
  edit: "düzenle",
  delete: "sil",
  cancel: "iptal",
  name: "Ad",
  lastName: "Soyadı",
  editEmail: "E-postayı düzenle",
  emptyMessageError: "Mesaj boş olamaz!",
  saveChanges: "Değişiklikleri Kaydet",
  editMessages: "mesajları düzenle",
  allMessages: "tüm mesajlar",
  newPrivateMessages: "yeni özel mesajlar",
  groups: "gruplar",
  privates: "özel",
  convertasion: "konuşma",
  startMessaging: "mesajlaşmaya başla",
  continue: "devam et",
  email: "e-posta",
  password: "şifre",
  fillTheFormErrorMessage: "Lütfen formu doldurun.",
  allConversation: "TÜM KONUŞMALAR",
  newMessages: "YENİ MESAJLAR",
  online: "çevrimiçi",
  offline: "çevrimdışı",
  voiceCall: "sesli arama",
  setting: "ayarlar",
  mute: "sessize al",
  muteOff: "sessizden çıkar",
  autoDeletion: "otomatik silme",
  shareContact: "iletişim bilgisini paylaş",
  blockUser: "kullanıcıyı engelle",
  deleteContact: "iletişimi sil",
  about: "hakkında",
  media: "medya",
  files: "dosyalar",
  share: "paylaş",
  newChannel: "yeni kanal",
  newGroup: "yeni grup",
  newChat: "yeni sohbet",
  search: "arama",
  general: "genel",
  faqs: "SSS",
  bug: "hata",
  suggestion: "öneri",
  others: "diğerleri",
  sendFeedBack: "geri bildirim gönder",
  title: "başlık",
  enterATitle: "başlık girin",
  description: "açıklama",
  enterAdescription: "açıklama girin",
  submit: "gönder",
  editName: "adı düzenle",
  setProfilePhoto: "profil fotoğrafını ayarla",
  logOut: "çıkış yap",
  tapToChangeEmail: "e-postayı değiştirmek için dokunun",
  location: "konum",
  career: "kariyer",
  bio: "biyografi",
  account: "hesap",
  off: "kapalı",
  on: "açık",
  security: "güvenlik",
  privacy: "gizlilik",
  phoneNumber: "telefon numarası",
  lastSeenAndonline: "son görülme ve çevrimiçi",
  profilePhotos: "profil fotoğrafları",
  forwardedMessages: "iletildi",
  calls: "aramalar",
  everyBody: "herkes",
  myContacts: "benim kişilerim",
  nobody: "hiç kimse",
  setBakup: "yedekleme ayarla",
  setBakupEmail: "yedekleme e-postası ayarla",
  setBackupDesc: "Hesap Kurtarma ve Güvenlik Bildirimleri için Güvenlik Ağı.",
  passcodeLock: "şifre kilidi",
  passcodeLockDesc:
    "Bir Şifre Ayarlandığında, Meitigram Uygulamasının Üzerinde Bir Kilit İkonu Görünür, Kilitlemek İçin Dokunun.",
  EnablePasscode: "şifreyi etkinleştir",
  GroupsAndChannels: "gruplar ve kanallar",
  music: "müzik",
  ProfilePicture: "profil resmi",
  Videos: "videolar",
  darkMode: "karanlık mod",
  login: "giriş",
  language: "dil",
  loading: "yükleniyor",
  thersNoMessages: "Henüz mesaj yok!",
  startAudioCall: "Sesli aramayı başlat",
  image: "görüntü",
  select: "seç",
  aboutMe: "hakkımda",
  attachFile: "Dosya Ekle",
  openEmojiTab: "Emoji sekmesini aç",
  typeMessageHere: "Buraya mesaj yazın ...",
  send: "gönder",
  call: "arama",
  notSet: "AYARLANMADI",
  clearHistory: "Geçmişi Temizle",
  leaveGroup: "Grubu Terk Et",
  lastSeen: "Son görülme",
  channels: "kanallar",
  InviteFriends: "Arkadaşlarını Davet Et",
  MeitigramFeatures: "Meitigram Özellikleri",
  settingCareerDescription:
    "Kariyeriniz ve şu anda ne yaptığınız hakkında birkaç satır ekleyebilirsiniz.",
  settingLocationDescription:
    "Şu anda yaşadığınız yere dair birkaç satır ekleyebilirsiniz.",
  settingBioDescription:
    "Kendiniz hakkında birkaç satır ekleyebilirsiniz. Kimlerin biyografinizi görebileceğini ayarlamak için.",
  loginWarning: {
    dataPersistence: {
      title: "Veri Sürekliliği",
      description:
        "Lütfen bu sayfada girdiğiniz bilgilerin yalnızca gösterim amaçlı olduğunu ve herhangi bir yerde kaydedilmeyeceğini unutmayın.",
    },
    noRealData: {
      title: "Gerçek Veri Yok",
      description:
        "Gerçek veya hassas bilgi girmeyin. Bu bir ön yüz demo, girdileriniz yalnızca tasarımı ve işlevselliği sergilemek için kullanılır. Burada herhangi rastgele veri kullanabilirsiniz! Gerçek dünya bilgilerini girmeniz gerekmez.",
    },
    dataDeletion: {
      title: "Veri Silme",
      description:
        "Bu sayfayı yeniden yüklerseniz veya başka bir yere giderseniz, girdiğiniz tüm veriler kaybolur. Geri alınamaz.",
    },
    privacy: {
      title: "Gizlilik",
      description:
        "Verdiğiniz bilgileri toplamıyor, saklamıyor veya kullanmıyoruz. Gizliliğiniz bizim için önemlidir.",
    },
    resetOnRefresh: {
      title: "Yeniden Yükleme Sıfırlama",
      description:
        "Sayfa, yeniden yüklendiğinde tüm girdileri varsayılan değerlerine sıfırlamak üzere tasarlanmıştır, bu nedenle kişisel veya önemli verileri saklamak için güvenmeyin.",
    },
    forTestingPurposes: {
      title: "Test Amaçlı",
      description:
        "Giriş sayfasını keşfetmek ve etkileşimde bulunmakta özgürsünüz, ancak unutmayın ki yalnızca test ve sunum amaçları içindir. Gerçek bir güvenlik sunmayan sadece ön yüz gösterimidir.",
    },
    authentication: {
      title: "Kimlik Doğrulama",
      description:
        "Bu giriş sayfası, gerçek bir kimlik doğrulama sistemine bağlı değildir. Sadece bir ön yüz demo, gerçek bir güvenlik sunmaz.",
    },
  },
  firstLoginForm: {
    title: "E-posta Adresiniz",
    subtitle: "Lütfen e-posta adresinizi onaylayın ve şifrenizi girin.",
  },
  loginRegistery: {
    title: "E-postanızı Kontrol Edin",
    subtitle: "E-postanıza gönderdiğimiz kodu girin.",
  },
  WelcomePage: {
    title: "Sohbet uygulamamın React projesine hoş geldiniz.",
    subtitle: "Lütfen bir sohbet seçin veya yeni bir konuşma başlatın.",
  },
  menuItems: [
    {
      title: "MENÜ",
      items: [
        {
          id: "Conversations",
          title: "Konuşmalar",
          icon: <ChatIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Groups",
          title: "Gruplar",
          icon: <GroupsIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Privates",
          title: "Özel",
          icon: <GroupIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Contacts",
          title: "Kişiler",
          icon: <PermContactCalendarIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "contacts",
        },
        {
          id: "Channels",
          title: "Kanallar",
          icon: <CampaignIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "channels",
        },
        {
          id: "Bots",
          title: "Botlar",
          icon: <SmartToyIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "bots",
        },
      ],
    },
    {
      title: "DESTEK",
      items: [
        {
          id: "Need help?",
          title: "Yardım",
          icon: <HelpOutlineIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "help",
        },
        {
          id: "Contact us",
          title: "Bizimle iletişime",
          icon: <HeadsetMicIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "contact-us",
        },
        {
          id: "Hire me",
          title: "Beni işe al",
          icon: <RecommendIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "hire-me",
        },
      ],
    },
    {
      title: "AYAR",
      items: [
        {
          id: "Setting",
          title: "Ayarlar",
          icon: <SettingsIcon sx={{ color: "inherit" }} />,
          type: NavLink,
          address: "setting",
        },
        {
          id: "Dark mode",
          title: "Karanlık mod",
          icon: <Brightness4Icon sx={{ color: "inherit" }} />,
          type: Button,
          address: "darkmode",
        },
        {
          id: "Log out",
          title: "Çıkış yap",
          icon: <LogoutIcon sx={{ color: "inherit" }} />,
          type: Button,
          address: "logout",
        },
      ],
    },
  ],
  helpCenter: {
    title: "yardım merkezi",
    subtitle: "Sıkça sorulan soruların cevaplarını bulun.",
    aboutDescription:
      "MEITIGRAM'ı tanıtmaktan mutluluk duyuyoruz - React ve Material UI kullanarak ön yüz geliştirmenin büyüsünü vurgulayan bir demo. Sorunsuz bir mesajlaşma deneyimine dalın, şeyler harika görünüyor ve işlevsellik sayesinde sorunsuz çalışıyor, bu becerilerin geliştiricimiz (Mahdi Dehgani) tarafından sağlandı.",
    helpDatacenter: [
      {
        id: "general",
        title: "Genel",
        icon: <SettingsOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "suggestion",
        title: "Öneri",
        icon: <AssistantOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "buq-report",
        title: "Hata Bildirimi",
        icon: <BugReportOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
      {
        id: "privacy-and-security",
        title: "Gizlilik ve Güvenlik",
        icon: <PrivacyTipOutlinedIcon sx={{ fontSize: "inherit" }} />,
      },
    ],
    general: {
      faqsDescription:
        "Chat App SSS sayfasına hoş geldiniz! Burada, sohbet uygulamamızla ilgili yaygın soruların cevaplarını bulacaksınız. Nasıl başlayacağınızı, arabirimde nasıl gezineceğinizi, konuşmalarınızı nasıl yöneteceğinizi ve çok daha fazlasını keşfedin. Yeni bir kullanıcı mısınız yoksa deneyimli bir sohbetçi misiniz, bu kaynak platformumuzun içindekileri size rehberlik edecektir. Aradığınızı bulamazsanız, kişiselleştirilmiş yardım için destek ekibimize başvurun. Sohbet deneyiminizi sorunsuz ve keyifli hale getirelim!",
      faqs: [
        {
          question: "Nasıl mesaj gönderirim?",
          answer:
            "Bir mesaj göndermek için sohbet penceresini açın, iletiyi metin kutusuna yazın ve Enter veya Gönder düğmesine basın.",
        },
        {
          question: "Gönderdikten sonra bir mesajı silebilir miyim?",
          answer:
            "Evet, belirli bir zaman çerçevesi içinde gönderilen mesajları silebilirsiniz. Mesajın üzerine uzun süre basılı tutun ve 'Sil' seçeneğini seçin.",
        },
        {
          question: "Grup sohbeti nasıl oluşturabilirim?",
          answer:
            "Grup sohbeti oluşturmak için 'Sohbetler' sekmesine gidin, 'Yeni Grup' düğmesine tıklayın, üyeleri ekleyin, bir grup adı ve resmi belirleyin, ardından 'Oluştur' düğmesine tıklayın.",
        },
        {
          question: "Bildirim ayarlarını özelleştirebilir miyim?",
          answer:
            "Kesinlikle! 'Ayarlar' menüsünde 'Bildirimler'e gidin, burada bildirim tonlarını, titreşim desenlerini ve daha fazlasını özelleştirebilirsiniz.",
        },
        {
          question: "Bir kullanıcıyı nasıl engellerim?",
          answer:
            "Bir kullanıcıyı engellemek için profilini ziyaret edin, 'Engelle' düğmesine tıklayın ve onaylayın. Engellenen kullanıcılar sizinle iletişime geçemez.",
        },
        {
          question: "Uçtan uca şifreleme kullanılıyor mu?",
          answer:
            "Evet, sohbet uygulamamız mesajların yalnızca sizin ve alıcının okuyabileceği şekilde uçtan uca şifreleme kullanır. Başka hiç kimse, hatta biz, mesajlara erişemez.",
        },
        {
          question: "Karanlık moda nasıl geçiş yaparım?",
          answer:
            "Karanlık modu etkinleştirmek için 'Ayarlar'ı açın, 'Görünüm'e gidin ve 'Karanlık Mod'u seçin. Uygulama arayüzü daha koyu bir tema haline gelecektir.",
        },
        {
          question: "Uygulamayı kaldırırsam mesajlarım ne olur?",
          answer:
            "Mesajlarınızı yedeklemeden uygulamayı kaldırırsanız kaybedersiniz. Kaldırmadan önce yedekleme özelliğini veya mesajlarınızı senkronize etmeyi düşünün.",
        },
        {
          question: "Uygulamayı birden fazla cihazda kullanabilir miyim?",
          answer:
            "Evet, uygulamayı birden fazla cihazda kullanabilirsiniz. Aynı hesapla oturum açın ve sohbetleriniz cihazlarınız arasında senkronize olur.",
        },
        {
          question: "Uygunsuz içerik nasıl bildirilir?",
          answer:
            "Uygunsuz içerikle karşılaşırsanız, mesaja uzun süre basın, 'Bildir' seçeneğini seçin ve uygun nedeni seçin. Moderasyon ekibimiz bunu gözden geçirecektir.",
        },
      ],
    },
    suggestion: {
      title: "Bize Geri Bildirim Gönderin!",
      subtitle:
        "Bir öneriniz veya bulduğunuz bir hata mı var? Aşağıdaki alanda bize bildirin.",
      experience: "Deneyiminiz nasıldı?",
      textarea: "Deneyiminizi burada açıklayın",
    },
    bugReport: {
      title: "Bir Hata Bildirin veya Bir Özellik İsteyin",
      optionText: "Bir Seçenek Seçin",
      options: {
        reportABug: "Hata Bildir",
        requestAFeature: "Bir Özellik İste",
        others: "Diğerleri",
      },
    },
    privacy: {
      title: "Gizlilik ve Politika",
      privacyPolicy: {
        primary: "Gizlilik Politikası",
        secondary:
          "Meitigram olarak, gizliliğinizi koruma ve kişisel bilgilerinizin güvenliğini sağlama konusundaki taahhüdümüzün farkındayız. Bu Gizlilik Politikası, hangi verilerin toplandığı, bu verilerin nasıl kullanıldığı ve korunduğu ve kişisel bilgilerinizle ilgili haklarınızı açıklar.",
      },
      informationCollection: {
        primary: "Bilgi Toplama ve Kullanımı",
        secondary:
          "Uygulamamızı kullanırken bize sağladığınız verileri topluyoruz, bunlar arasında adınız, profil resminiz, mesajlarınız ve iletişim bilgileriniz de bulunabilir. Bu veriler, uygulama içinde iletişimi kolaylaştırmak ve kullanıcı deneyimini iyileştirmek amacıyla yalnızca kullanılır.",
      },
      DataSecurity: {
        primary: "Veri Güvenliği",
        secondary:
          "Verilerinizi yetkisiz erişime, açıklamaya veya değişikliğe karşı korumak için sıkı güvenlik önlemleri uyguluyoruz. Bununla birlikte, lütfen çevrimiçi iletim veya depolama yönteminin %100 güvenli olmadığını unutmayın.",
      },
      thirdPartyServices: {
        primary: "Üçüncü Taraf Hizmetleri",
        secondary:
          "Hizmetlerimizi iyileştirmek için uygulama kullanımını analiz etmek ve içgörüler elde etmek için üçüncü taraf analitik hizmetlerini kullanabiliriz. Ancak, bu hizmetler verilerinizi başka amaçlarla kullanmaz.",
      },
      yourChoice: {
        primary: "Haklarınız",
        secondary:
          "Kişisel verilerinizi kontrol etme ve işleme şeklinize ilişkin bazı haklara sahipsiniz. Verilerinizin nasıl kullanıldığı ve işlendiği hakkında daha fazla bilgi almak için Gizlilik Politikamızı inceleyebilirsiniz.",
      },
      bottomLine:
        "Sohbet uygulamamızı kullanarak bu Gizlilik Politikasında belirtilen şartları kabul etmiş olursunuz.",
    },
  },
  contactCenter: {
    contactInfoTitle: "İletişim Bilgileri",
    contactInfoSubtitle:
      "Size yardımcı olmaktan mutluluk duyarız! Chat uygulamamız hakkında herhangi bir sorunuz, endişeniz veya geri bildiriminiz varsa, lütfen çekinmeden bizimle iletişime geçin. Dediğinizde size yardımcı olmaya hazır olan özel destek ekibimiz burada.",
    costumerSupport: "Müşteri Desteği",
    feedbackTitle: "Geri Bildirim ve Öneriler",
    feedbackSubtitle:
      "Görüşlerinizi değerli buluyoruz ve uygulamamızı nasıl geliştirebileceğimize dair herhangi bir öneriniz veya fikriniz varsa, lütfen bunları feedback@chatapp.com adresinden bizimle paylaşın.",
    technicalSupportTitle: "Teknik Destek",
    technicalSupportSubtitle:
      "Teknik sorunlarla mı karşılaşıyorsunuz? Teknik destek ekibimiz sizi tekrar yoluna koymak için burada. Bize techsupport@chatapp.com adresinden ulaşın, karşılaştığınız herhangi bir sorunu çözmek için çalışacağız.",
  },
  hireMeCenter: {
    aboutMeTitle: "Ben Kimim",
    aboutMeSubtitle:
      "Merhaba, Ben Mehdi Dehghani, bir ön yüz geliştiriciyim ve bu proje tasarlayan kişiyim. Eğer bu proje ilginç buluyorsanız ve potansiyel bir işbirliği keşfetmek isterseniz, lütfen aşağıda listelenen iletişim yöntemlerinden birini kullanarak benimle iletişime geçmekten çekinmeyin.",
    contactMeTitle: "Benimle İletişime Geçin",
    contactMesubtitle:
      "Web geliştirme projesinizi tartışmaya hazır mısınız veya herhangi bir sorunuz mu var? İletişime geçmekten çekinmeyin! Sizin vizyonunuz hakkında bilgi edinmeye ve nasıl yardımcı olabileceğimi öğrenmeye istekliyim.",
    whatCanIOfferTitle: "Neler Sunabilirim",
    whatCanIOfferSubtitle:
      "Duyarlı ve kullanıcı dostu web site tasarımı ve geliştirmesi. Benzersiz ihtiyaçlarınıza uygun özel web çözümleri. HTML, CSS, JavaScript ve çeşitli web geliştirme çerçevelerinde yetenek. Detaya önem veren bir göz ve yüksek kaliteli iş teslim etmeye bağlılık. Sorunları hızlı çözme becerisi, sorunsuz proje gelişimini sağlamak için. Uzaktan ve uzak olmayan çalışma düzenlemeleriyle uyumlu ve rahat.",
    RemoteOrOnSiteTitle: "Uzaktan veya Yerinde, Esnekim",
    RemoteOrOnSiteSubtitle:
      "Ekibinizle yerinde işbirliği yapabilen bir web geliştirici mi yoksa uzaktan iş akışınıza sorunsuz entegre olabilen birini mi arıyorsunuz? En iyi web çözümlerini sunmak için buradayım. Mesafe, üstün kalitede web çözümleri sunma konusunda bir engel değildir.",
    bussinessHours: {
      primary: "Çalışma Saatleri",
      secondary: "Pazartesi - Cuma, 09:00 - 18:00 (EST)",
    },
  },
  chatSetting: {
    title: "Sohbet Ayarları",
    chatSettings: "Sohbet Ayarları",
    messagesCorners: "Mesaj Köşeleri",
    generalChatSettings: "Genel Sohbet Ayarı",
    Darkmode: "Karanlık Mod",
    animations: {
      primary: "Animasyonlar",
      secondary: "Güç tasarrufu için hareket efektlerini azalt",
    },
    stikersandEmojies: {
      primary: "Çıkartmalar ve Emoji",
      secondary: "Çıkartmaları, emojileri ve tepkileri yönetin",
    },
    mediaAndSounds: "Medya ve Ses",
    tapToShowNext: {
      primary: "Sonraki medyayı göstermek için dokunun",
      secondary:
        "Medya görüntülerken ekrana yakın bir yere dokunarak gezinebilirsiniz",
    },
    raiseToListen: {
      primary: "Dinlemek için kaldırın",
      secondary: "Telefonu kulağınıza kaldırarak sesi hoparlöre geçirin",
    },
    raiseToSpeak: {
      primary: "Konuşmak için kaldırın",
      secondary: "Telefonu kulağınıza kaldırarak sesli mesajlar kaydedin",
    },
    pauseMusicWhileRecording: {
      primary: "Kayıt yaparken müziği duraklat",
      secondary: "Video mesaj kaydederken müziği duraklat",
    },
    microphoenForVoiceMessages: "Sesli Mesajlar için Mikrofon",
  },
  PrivacyAndPolicy: {
    title: "Gizlilik ve Politika",
    twoStepVerification: "İki Adımlı Doğrulama",
    autoDeleteMessages: "Mesajları Otomatik Sil",
    loginWithEmail: "E-posta ile Giriş",
    PasscodeLock: "Parola Kilidi",
    backupEmail: "Yedek E-posta",
    changeBackup: "Yedek Değiştir",
    setBackup: "Yedek Ayarla",
    firstLine:
      "Meitigram uygulamasına nerede oturum açtığınızın listesini gözden geçirin.",
    backupFirstLine:
      "Hesap kurtarma ve güvenlik bildirimleri için güvenlik ağınız.",
    pascodeFirstLine:
      "Bir şifre ayarlandığında, sohbet listenizin üzerinde bir kilitleme simgesi görünür, kilitleme simgesine dokunarak Meitigram uygulamanızı kilitleyebilirsiniz.",
    EnablePasscode: "Parola Etkinleştir",
  },
  NotificationAndSounds: {
    title: "Bildirimler ve Sesler ",
    showNotificationsFrom: "Bildirimleri Göster",
    AllAcounts: "Tüm Hesaplar",
    firstTextLine:
      "Sadece şu anda kullandığınız hesaptan bildirim almak istemiyorsanız bu seçeneği kapatın.",
    notificationForChats: "Sohbetler için Bildirim",
    tapToChange: "Değiştirmek için Dokunun",
    BadgeCounter: "Rozet Sayacı",
    ShowBadgeIcon: "Rozet İkonu Göster",
    IncludeMutedChats: "Sessiz Sohbetleri Dahil Et",
    CountUnreadedMessages: "Okunmamış Mesajları Say",
    events: "Olaylar",
    ContactJoined: "Kişi Meitigram'a Katıldı",
    PinnedMessages: "Sabitleyilen Mesajlar",
    Others: "Diğerleri",
    keepAliveService: {
      primary: "Uyandırma Hizmeti",
      secondary:
        "Kapatıldığında web'i yeniden başlatır. Güvenilir bildirim için etkinleştirin",
    },
    backgroundConnection: {
      primary: "Arka Planda Bağlantı",
      secondary:
        "Güvenilir bildirim için Telegram ile düşük etki arka plan bağlantısı tutar.",
    },
  },
  DataAndStorage: {
    title: "Veri ve Depolama",
    diskAndNetworkUsage: "Disk ve Ağ Kullanımı",
    StorageUsage: "Depolama Kullanımı",
    DataUsage: "Veri Kullanımı",
    AutomaticMediaDownload: "Otomatik Medya İndirme",
    whenUsinMobile: "Mobil veri kullanırken",
    whenConnenctedTowifi: "Wi-Fi'ye bağlıyken",
    whenRoaming: "Gezerken",
    saveToGallery: "Galeriye Kaydet",
    clearCache: "Önbelleği Temizle",
    StorageUsageTopCaption: "Meitigram cihazınızın - MB'ini kullanıyor.",
    StorageUsageBottomCaption:
      "Tüm medya Meitigram bulutunda kalacak ve yeniden indirilebilir.",
  },
  logoutPage: {
    alternativeOptions: "Alternatif Seçenekler",
    addAnotherAccount: {
      primary: "Başka bir hesap ekleyin",
      secondary:
        "Diğer Meitigram hesaplarını bağlayın ve kolayca aralarında geçiş yapın",
    },
    changePhoneNumber: {
      primary: "Telefon Numarasını Değiştir",
      secondary:
        "Hesabınızı, sohbetlerinizi ve medyanızı yeni bir numaraya taşıyın",
    },
    setPasscode: {
      primary: "Parola Ayarla",
      secondary:
        "Uygulamayı bir parola ile kilitleyin, böylece diğerleri açamaz",
    },
    clearCache: {
      primary: "Önbelleği Temizle",
      secondary: "Cihazınızdaki alanı boşaltın",
    },
    contactSupport: {
      primary: "Destek ile İletişime Geçin",
      secondary:
        "Herhangi bir sorunu bize bildirin; oturumu kapatmak genellikle yardımcı olmaz",
    },
  },
  actions: [
    { icon: <MapsUgcIcon />, name: "Yeni Sohbet" },
    { icon: <GroupsIcon />, name: "Yeni Grup" },
    { icon: <VolumeDownIcon />, name: "Yeni Kanal" },
    { icon: <ShareIcon />, name: "Paylaş" },
  ],
  settingData: [
    {
      id: "pass",
      icon: <KeyIcon />,
      title: "İki Adımlı Doğrulama",
    },
    {
      id: "delete",
      icon: <AvTimerIcon />,
      title: "Mesajları Otomatik Sil",
    },
    {
      id: "login",
      icon: <EmailOutlinedIcon />,
      title: "E-posta ile Giriş",
    },
  ],
};
