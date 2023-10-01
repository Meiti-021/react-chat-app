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

export const tr: languageType = {
  meitigram: "Meitigram",
  all: "Tümü",
  new: "Yeni",
  members: "üyeler",
  admins: "Yöneticiler",
  admin: "Yönetici",
  copy: "Kopyala",
  reply: "Cevapla",
  edit: "Düzenle",
  delete: "Sil",
  cancel: "Iptal",
  name: "Ad",
  lastName: "Soyadı",
  editEmail: "E-postayı düzenle",
  emptyMessageError: "Mesaj boş olamaz!",
  saveChanges: "Değişiklikleri Kaydet",
  editMessages: "Mesajları düzenle",
  allMessages: "Tüm mesajlar",
  newPrivateMessages: "Yeni özel mesajlar",
  groups: "Gruplar",
  privates: "özel",
  convertasion: "Konuşma",
  startMessaging: "Mesajlaşmaya başla",
  continue: "Devam et",
  email: "E-posta",
  password: "şifre",
  fillTheFormErrorMessage: "Lütfen formu doldurun.",
  allConversation: "TÜM KONUŞMALAR",
  newMessages: "YENİ MESAJLAR",
  online: "çevrimiçi",
  offline: "çevrimdışı",
  voiceCall: "Sesli arama",
  setting: "Ayarlar",
  mute: "Sessize al",
  muteOff: "Sessizden çıkar",
  autoDeletion: "Otomatik silme",
  shareContact: "Iletişim bilgisini paylaş",
  blockUser: "Kullanıcıyı engelle",
  deleteContact: "Iletişimi sil",
  about: "Hakkında",
  media: "Medya",
  files: "Dosyalar",
  share: "Paylaş",
  newChannel: "Yeni kanal",
  newGroup: "Yeni grup",
  newChat: "Yeni sohbet",
  search: "Arama",
  general: "Genel",
  faqs: "SSS",
  bug: "Hata",
  suggestion: "öneri",
  others: "Diğerleri",
  sendFeedBack: "Geri bildirim gönder",
  title: "Başlık",
  enterATitle: "Başlık girin",
  description: "Açıklama",
  enterAdescription: "Açıklama girin",
  submit: "Gönder",
  editName: "Adı düzenle",
  setProfilePhoto: "Profil fotoğrafını ayarla",
  logOut: "çıkış yap",
  tapToChangeEmail: "E-postayı değiştirmek için dokunun",
  location: "Konum",
  career: "Kariyer",
  bio: "Biyografi",
  account: "Hesap",
  off: "Kapalı",
  on: "Açık",
  security: "Güvenlik",
  privacy: "Gizlilik",
  phoneNumber: "Telefon numarası",
  lastSeenAndonline: "Son görülme ve çevrimiçi",
  profilePhotos: "Profil fotoğrafları",
  forwardedMessages: "Iletildi",
  calls: "Aramalar",
  everyBody: "Herkes",
  myContacts: "Benim kişilerim",
  nobody: "Hiç kimse",
  setBakup: "Yedekleme ayarla",
  setBakupEmail: "Yedekleme e-postası ayarla",
  setBackupDesc: "Hesap Kurtarma ve Güvenlik Bildirimleri için Güvenlik Ağı.",
  passcodeLock: "şifre kilidi",
  passcodeLockDesc:
    "Bir Şifre Ayarlandığında, Meitigram Uygulamasının Üzerinde Bir Kilit İkonu Görünür, Kilitlemek İçin Dokunun.",
  EnablePasscode: "şifreyi etkinleştir",
  GroupsAndChannels: "Gruplar ve kanallar",
  music: "Müzik",
  ProfilePicture: "Profil resmi",
  Videos: "Videolar",
  darkMode: "Karanlık mod",
  login: "Giriş",
  language: "Dil",
  loading: "Yükleniyor",
  thersNoMessages: "Henüz mesaj yok!",
  startAudioCall: "Sesli aramayı başlat",
  image: "Görüntü",
  select: "Seç",
  aboutMe: "Hakkımda",
  attachFile: "Dosya Ekle",
  openEmojiTab: "Emoji sekmesini aç",
  typeMessageHere: "Buraya mesaj yazın ...",
  send: "Gönder",
  call: "Arama",
  notSet: "AYARLANMADI",
  clearHistory: "Geçmişi Temizle",
  leaveGroup: "Grubu Terk Et",
  lastSeen: "Son görülme",
  channels: "Kanallar",
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
          icon: <ChatIcon sx={{ color: "Inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Groups",
          title: "Gruplar",
          icon: <GroupsIcon sx={{ color: "Inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Privates",
          title: "Özel",
          icon: <GroupIcon sx={{ color: "Inherit" }} />,
          type: Button,
          address: "",
        },
        {
          id: "Contacts",
          title: "Kişiler",
          icon: <PermContactCalendarIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Contacts",
        },
        {
          id: "Channels",
          title: "Kanallar",
          icon: <CampaignIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Channels",
        },
        {
          id: "Bots",
          title: "Botlar",
          icon: <SmartToyIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Bots",
        },
      ],
    },
    {
      title: "DESTEK",
      items: [
        {
          id: "Need help?",
          title: "Yardım",
          icon: <HelpOutlineIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Help",
        },
        {
          id: "Contact us",
          title: "Bizimle iletişime",
          icon: <HeadsetMicIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Contact-us",
        },
        {
          id: "Hire me",
          title: "Beni işe al",
          icon: <RecommendIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Hire-me",
        },
      ],
    },
    {
      title: "AYAR",
      items: [
        {
          id: "Setting",
          title: "Ayarlar",
          icon: <SettingsIcon sx={{ color: "Inherit" }} />,
          type: NavLink,
          address: "Setting",
        },
        {
          id: "Dark mode",
          title: "Karanlık mod",
          icon: <Brightness4Icon sx={{ color: "Inherit" }} />,
          type: Button,
          address: "Darkmode",
        },
        {
          id: "Log out",
          title: "Çıkış yap",
          icon: <LogoutIcon sx={{ color: "Inherit" }} />,
          type: Button,
          address: "Logout",
        },
      ],
    },
  ],
  helpCenter: {
    title: "Yardım merkezi",
    subtitle: "Sıkça sorulan soruların cevaplarını bulun.",
    aboutDescription:
      "MEITIGRAM'ı tanıtmaktan mutluluk duyuyoruz - React ve Material UI kullanarak ön yüz geliştirmenin büyüsünü vurgulayan bir demo. Sorunsuz bir mesajlaşma deneyimine dalın, şeyler harika görünüyor ve işlevsellik sayesinde sorunsuz çalışıyor, bu becerilerin geliştiricimiz (Mahdi Dehgani) tarafından sağlandı.",
    helpDatacenter: [
      {
        id: "general",
        title: "Genel",
        icon: <SettingsOutlinedIcon sx={{ fontSize: "Inherit" }} />,
      },
      {
        id: "suggestion",
        title: "Öneri",
        icon: <AssistantOutlinedIcon sx={{ fontSize: "Inherit" }} />,
      },
      {
        id: "buq-report",
        title: "Hata Bildirimi",
        icon: <BugReportOutlinedIcon sx={{ fontSize: "Inherit" }} />,
      },
      {
        id: "privacy-and-security",
        title: "Gizlilik ve Güvenlik",
        icon: <PrivacyTipOutlinedIcon sx={{ fontSize: "Inherit" }} />,
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
