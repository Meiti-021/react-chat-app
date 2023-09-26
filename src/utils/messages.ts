export type MessageType = {
  message_id: string;
  content: string;
  timestamp: string;
  sender: string;
  group_sender_display_name: null;
  seen: boolean;
  replay: string | undefined;
};
export const messages: MessageType[] = [
  {
    message_id: "message1",
    content: "Hey, A-TRAIN",
    timestamp: "2023-07-26 12:01:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message2",
    content: "can i ask you somthing?",
    timestamp: "2023-07-26 12:02:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message3",
    content: "Hey Meiti, Shoot buddy.whats in your mind?",
    timestamp: "2023-07-26 12:03:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: false,
    replay: "message2",
  },
  {
    message_id: "message4",
    content:
      " Hey, Soldier Boy, big fan here! Just wanted to say thanks for keeping us safe.",
    timestamp: "2023-07-26 12:05:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message5",
    content: "Hey, thanks for the support! It's an honor to serve and protect.",
    timestamp: "2023-07-26 12:06:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message6",
    content: "Sup, Vought Boss? Another day, another race to win.",
    timestamp: "2023-07-26 12:07:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message7",
    content:
      " A-Train, keep those Compound V results in check. We can't afford any more slip-ups.",
    timestamp: "2023-07-26 12:09:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: "message6",
  },
  {
    message_id: "message8",
    content:
      "🐬 Hey, everyone. Just rescued some dolphins today. Feeling pretty good about it.",
    timestamp: "2023-07-26 12:10:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message9",
    content:
      "Oh, ain't that heartwarming, Deep. Meanwhile, we're dealing with supes who think they're gods.",
    timestamp: "2023-07-26 12:12:00",
    sender: "user9",
    group_sender_display_name: null,
    seen: false,
    replay: "message8",
  },
  {
    message_id: "message11",
    content:
      "listen up, you bunch of fuck-ups. We got a goddamn mess to clean.",
    timestamp: "2023-07-26 12:18:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message12",
    content: "hey team. Any updates on our next move?",
    timestamp: "2023-07-26 12:20:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message13",
    content: "Not yet, meiti. Waiting for orders from Butcher",
    timestamp: "2023-07-26 12:21:00",
    sender: "user5",
    group_sender_display_name: null,
    seen: false,
    replay: "message12",
  },
  {
    message_id: "message14",
    content:
      "Hold tight, we'll strike when the time's right. those supes won't know whats hit 'em.",
    timestamp: "2023-07-26 12:23:00",
    sender: "user9",
    group_sender_display_name: null,
    seen: true,
    replay: "message12",
  },
  {
    message_id: "message15",
    content: "Ready to kick some super-ass,boys -🇺🇸",
    timestamp: "2023-07-26 12:25:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message16",
    content:
      "just rememeber guys, we're the underdogs here. Gotta play it smart.",
    timestamp: "2023-07-26 12:27:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message17",
    content: "Homelander?,You've gone too far this time.",
    timestamp: "2023-07-26 12:29:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message18",
    content: "Can we talk for a moment?",
    timestamp: "2023-07-26 12:31:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message19",
    content: "What do you want meiti?",
    timestamp: "2023-07-26 12:33:00",
    sender: "user7",
    group_sender_display_name: null,
    seen: false,
    replay: "message18",
  },
  {
    message_id: "message20",
    content:
      "I've heard rumors about what happend with seven. is it true you killed mallory's grandkids?",
    timestamp: "2023-07-26 12:35:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message21",
    content:
      "Yeah. it's true. it happend long time ago, but i couldn't escape it.",
    timestamp: "2023-07-26 12:37:00",
    sender: "user7",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message22",
    content: "why did you do it?",
    timestamp: "2023-07-26 12:39:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: "message21",
  },
  {
    message_id: "message23",
    content:
      "I was a mess back then, couldn't handle the pressure. i regrert it everyday and i don't think i can ever make up for what i did, but i'm trying to be better now.",
    timestamp: "2023-07-26 12:41:00",
    sender: "user7",
    group_sender_display_name: null,
    seen: true,
    replay: "message22",
  },
  {
    message_id: "message24",
    content: "don't you fuckin dare to speak about what happend tonight ok?",
    timestamp: "2023-07-26 12:43:00",
    sender: "user9",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message25",
    content: "Ok but we can't hide it forever, you know it.",
    timestamp: "2023-07-26 12:45:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message26",
    content: "you are meiti, right?",
    timestamp: "2023-07-26 12:47:00",
    sender: "user8",
    group_sender_display_name: null,
    seen: false,
    replay: undefined,
  },
  {
    message_id: "message27",
    content: "Hey, answer to me, ive somthing for you.",
    timestamp: "2023-07-29 12:49:00",
    sender: "user8",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message28",
    content: "nooooooooooo",
    timestamp: "2023-07-26 12:51:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message29",
    content: "no please no, dont say anything to starlight",
    timestamp: "2023-07-26 12:53:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message30",
    content: "can you just stop spying at me?",
    timestamp: "2023-07-26 12:51:00",
    sender: "user5",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message31",
    content: "what are you talking about?",
    timestamp: "2023-07-26 12:53:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message32",
    content:
      "I've always wondered, what's it like being the fastest man alive? Do you ever get tired of running all the time?",
    timestamp: "2023-07-26 12:53:02",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message33",
    content:
      "Being the fastest ain't all it's cracked up to be, you know? it's like life is on fast-forward, and sometimes you miss the details. but it's the price i pay to being a superhero, i guess.",
    timestamp: "2023-07-26 12:53:35",
    sender: "user2",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message34",
    content: "yeah i can imagine, must be crazy life.",
    timestamp: "2023-07-26 12:55:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: "message33",
  },
  {
    message_id: "message35",
    content:
      "crazy is understatement, my friend. but hey, that's what makes it interesting",
    timestamp: "2023-07-26 12:57:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: true,
    replay: "message33",
  },
  {
    message_id: "message36",
    content:
      "I've always wondered, what's the toughest mission you've ever been on? Any crazy stories?",
    timestamp: "2023-07-26 12:54:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message37",
    content:
      " Oh, there've been some wild ones. Toughest? Probably that secret op in South America. We were knee-deep in trouble, but my squad pulled through.",
    timestamp: "2023-07-26 12:55:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: "message36",
  },
  {
    message_id: "message38",
    content:
      "Impressive! Must be intense out there. Do you ever get to take a break?",
    timestamp: "2023-07-26 12:56:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: "message37",
  },
  {
    message_id: "message39",
    content:
      "Not often, but when I do, I catch up on classic war movies. Gotta stay sharp, you know?",
    timestamp: "2023-07-26 12:57:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: "message38",
  },
  {
    message_id: "message40",
    content: "Cool! Any favorite war movie?",
    timestamp: "2023-07-26 12:57:40",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: "message39",
  },
  {
    message_id: "message41",
    content:
      "Saving Private Ryan. That opening scene, wow. Hits close to home.",
    timestamp: "2023-07-26 12:59:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: "message40",
  },
  {
    message_id: "message42",
    content:
      "I can imagine. Thanks for the chat, Soldier Boy. Stay safe out there!",
    timestamp: "2023-07-26 13:01:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: "message41",
  },
  {
    message_id: "message43",
    content: "You too! And remember, real heroes are everyday people like you",
    timestamp: "2023-07-26 13:04:00",
    sender: "user3",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message44",
    content: "🤣🤣🤣Butcher, always the ray of sunshine.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: true,
    replay: "message9",
  },
  {
    message_id: "message45",
    content:
      "Focus, everyone. We've got PR nightmares to contain and corporate interests to",
    timestamp: "2023-07-26 13:04:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message46",
    content: "🐬🐬🐬🐬🐬 Yeah, yeah, boss. Saving dolphins, saving the world.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: "message45",
  },
  {
    message_id: "message47",
    content:
      " Let's just get the job done, and don't forget who's really in charge, Vought.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user9",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message48",
    content: "What's the problem homelander.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message49",
    content: "Yeah,Whats got your panties in a twist🐠",
    timestamp: "2023-07-26 13:04:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: "message11",
  },
  {
    message_id: "message50",
    content: "Homelander,Calm down. We're herer to help.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user5",
    group_sender_display_name: null,
    seen: true,
    replay: "message11",
  },
  {
    message_id: "message51",
    content: "Spit it out, What's the job",
    timestamp: "2023-07-26 13:04:00",
    sender: "user7",
    group_sender_display_name: null,
    seen: true,
    replay: "message11",
  },
  {
    message_id: "message52",
    content:
      "Vought's got some shit going down, we're gonna handle it our way. NO MORE FUCKING AROUND!!!!",
    timestamp: "2023-07-26 13:04:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message53",
    content: "Are we getting into some deep water here???",
    timestamp: "2023-07-26 13:04:00",
    sender: "user4",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message54",
    content: "This, doesn't feel right guys.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user5",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message55",
    content: "Well, ain't this a cozy little super-criminal gathering?",
    timestamp: "2023-07-26 13:04:00",
    sender: "user7",
    group_sender_display_name: null,
    seen: true,
    replay: "message52",
  },
  {
    message_id: "message56",
    content: "We do what we have to do, no more question. understand?",
    timestamp: "2023-07-26 13:04:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message57",
    content: "We've got each others back. we can do this.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user5",
    group_sender_display_name: null,
    seen: true,
    replay: "message16",
  },
  {
    message_id: "message58",
    content: "Damn right. WE'll take down VOUGHT. one supe at a time",
    timestamp: "2023-07-26 13:04:00",
    sender: "user9",
    group_sender_display_name: null,
    seen: true,
    replay: "message57",
  },
  {
    message_id: "message59",
    content: "Oh, have i, meiti? you're always were a buzzkill.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message60",
    content: "People are getting hurt, you're not above the law.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message61",
    content: "Look at me meiti. I am the LAW you idiot.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message62",
    content: "We'll make sure you pay for your crimes, one way or another.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message63",
    content: "Goodluck with that then. you'll need it.",
    timestamp: "2023-07-26 13:04:00",
    sender: "user6",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
  {
    message_id: "message",
    content: "",
    timestamp: "2023-07-26 13:04:00",
    sender: "user",
    group_sender_display_name: null,
    seen: true,
    replay: undefined,
  },
];
