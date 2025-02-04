document.addEventListener("DOMContentLoaded", () => {
  const quoteArray = [
  { quote: "You can pick one superpower, which one would you? 'With big powers come big responsabilities', what do you do with this super power?" },
  { quote: "What do you do in life that is not in your resume?" },
  { quote: "Did you ever face a corpse?" },
  { quote: "Could you become vegetarian? Vegan?" },
  { quote: "Do you have scars? Where do they come from?" },
  { quote: "Do you think ghosts are real?\rWhat about aliens?" },
  { quote: "What was your first car?" },
  { quote: "Dog or cat?" },
  { quote: "Do you consent to donate your organs once you will be gone?" },
  { quote: "Phò or Ramen?" },
  { quote: "Did you ever had a pet? What type of pet was it? What was it's name?" },
  { quote: "Would you use a selfdriving car without human driver? Without pedals and steering wheel?" },
  { quote: "What is the hardest habits you decided to get rid of? Why? Do you still hold on it?" },
  { quote: "Which seat do you usualy pick: window or aisle?" },
  { quote: "Are you a morning person?" },
  { quote: "Did you ever go on holidays on your own? Where was it? How long did it last? Did you like it?" },
  { quote: "According to you, what has been the most decisive moment of your life so far?" },
  { quote: "What people use to say about you when you were a kid?" },
  { quote: "Do you remember the first contact you had with the Internet?" },
  { quote: "What are your favorite shoes? Are they the same as the ones you wear the most?" },
  { quote: "Do you own a library card?" },
  { quote: "What is your morning routine?" },
  { quote: "Are you a snooze person?" },
  { quote: "You have to get ride of one of your 5 senses, which one do you give up on?" },
  { quote: "Do you remember when you had an encounter a wild animal?" },
  { quote: "Have you ever played a musical instrument, or do you play one now?" },
  { quote: "Do you shower in the evening or in the morning?" },
  { quote: "Comté or St-Nectaire?" },
  { quote: "What is your daily coffee maker?" },
  { quote: "What is your favorite coffee maker?" },
  { quote: "Are up to date regarding your vaccins?" },
  { quote: "Do you make your bed every morning?" },
  { quote: "What is your home office outfit?" },
  { quote: "Do you like to take naps?" },
  { quote: "If you had to hide a corpse, who would you call first?" },
  { quote: "What do you usually you have for breakfast?" },
  { quote: "What is your worst hotel experience?" },
  { quote: "Are you friend with your parents on social media?" },
  { quote: "Do you think you can land a passengers plane in case of emergency?" },
  { quote: "If you have a daughter, do you prefer for her to be very beautiful or very smart?" },
  { quote: "Do you remember the first names of all your sex parteners?" },
  { quote: "If you bank account could talk, what would he say?" },
  { quote: "What was the hardest decision you had to make?" },
  { quote: "In 2050, I think we..." },
  { quote: "Were you popular in school?" },
  { quote: "Did you like having a sibling?" },
  { quote: "Did you ever lied on a skill to get hired?" },
  { quote: "Who would you haunt if you had to pick someone?" },
  { quote: "What is your favorite type of street food?" },
  { quote: "Text messaging or voice messaging?" },
  { quote: "What type of crisps do you prefer?" },
  { quote: "Are you easily annoyed by spelling mistakes?" },
  { quote: "Do you usualy have a plan?" },
  { quote: "Who do you want to spend more time with?" },
  { quote: "Which movie were you too scared to watch when you were young?" },
  { quote: "Do you usually plan what you are going to wear the day after before going to bed?" },
  { quote: "What do you wish you knew 10 years ago?" },
  { quote: "What do you check first when you get in an hotel room?" },
  { quote: "Where do you get the news from?" },
  { quote: "Would you like to know how you will die?" },
  { quote: "If you could change anything about the way you grew up, what would it be?" },
  { quote: "Would you like to be famous? In what way?" },
  { quote: "Have you ever been arrested by the police?" },
  { quote: "Would you rather be buried or cremated?" },
  { quote: "What is the item you lie on in your resume?" },
  { quote: "Sometimes we want to change everything in our lives but what would you never change?" },
  { quote: "Can you share an happy memory from your childhood?" },
  { quote: "What drives you most, the past or the future?" },
  { quote: "Do you shower in the evening or in the morning ?" },
  { quote: "Do you remember when you had an encounter with a wild animal?" },
  { quote: "Social media algorithmes speak about who we are and what we're interested in. Are you ready to share your Search recommandations on Instagram?" },
  { quote: "Who should play your role in the biopic of your life?" },
  { quote: "Imagine sex doesn't exist. \n  A startup comes up with the concept. Imagine the pitch." },
  { quote: "Do you prefer to stop eating cheese or stop having sex?" },
  { quote: "Where and when were you last holidays? How was it?" },
  { quote: "What is your favorite sleeping outfit?" },
  { quote: "Open WhatsApp and show what are the emojis on the first line of recently used. What is your favorite emoji?" },
  { quote: "How do you organise your phone's apps icones?" },
  { quote: "Do you have/had nicknames or short names?\nWho gave you them? Did you like being called that way?" },
  { quote: "Should sex be at the Olympics?\nWhat could be the related events?" },
  { quote: "We all did stupid things. What is the stupidest things you did?" },
  { quote: "What is the favortie picture of you when you were very young?" },
  { quote: "Do you have a specific practice to peel fruits?" },
  { quote: "What is the hardest habits you decided to get rid of? Why? Do you still stand it?" },
  { quote: "What does it mean for you to be a feminist? Can you search and read the definition of it? Do you relate to it?" },
  { quote: "Do you think we can stop the global warming? Will we?" },
  { quote: "Do you belive in ghosts?\rWhat about aliens?" },
  { quote: "Did you experience illegal substences? What do you keep from that?" },
  { quote: "If money was not an issue, what would you do?" },
  { quote: "Do you keep track of a wish list or a list of things you would like to have?" },
  { quote: "When is your birthday? Do you belive in Zodiac signs?" },
  { quote: "Do you think that we are the most advanced civilisation that Earth ever carried?" },
  { quote: "We offer you to go swimming in the Seine tomorrow morning, do you accept?" },
  { quote: "How do you picture yourself as a retired person?" },
  { quote: "What was your first car? Do you have a story to tell about it?" },
  { quote: "At what age is it too late to breakup with somone?" },
  { quote: "Did you ever want to own and run a bar? If yes, what would it be like? What would be the name?" },
  { quote: "Have you ever gone on vacation to an all-inclusive hotel? How was it?" },
  { quote: "Have you ever been camping?" },
  { quote: "If you could change jobs, what would you do?" },
  { quote: "Where do you buy your underwears?" },
  { quote: "Have you ever had an MRI/scan?" },
  { quote: "Are you afraid of thunderstorms?" },
  { quote: "Do you sleep with the shutters open or closed?" },
  { quote: "Schould we let an AI run the politics?" },
  { quote: "Do you enjoy reading? What is the last book you read? Do you have a book that you read more than once?" },
  { quote: "When was the last time you felt grown up?" },
  { quote: "Cheese or dessert?" },
  { quote: "What is on your mind right now?" },
  { quote: "What invention could make a difference on your daily life?" },
  { quote: "What would be the best way to handle the financial question within a couple with important incomes gap?" },
  { quote: "Do you have memories of your first kiss?" },
  { quote: "How do you show you are upset without  telling I'm upset ?" },
  { quote: "Is a tongue stud a turn-on?" },
  { quote: "Let's admit that you can rob a million euros without getting caught, would you do it?" },
  { quote: "How do hang up the laundry in order to dry? How do you deal with socks?" },
  { quote: "Go to bed early or late?" },
  { quote: "Should we tear down Google, Amazon, Facebook? How will that affect our lives?" },
  { quote: "Piano or guitar?" },
  { quote: "What moments of your life would you drop in the director's cuts? Or request postproduction special effects?" },
  { quote: "Would you share your bedroom with a total stranger (no sex involved)?" },
  { quote: "What is the best way to figure out someone's social backgrounds in a glimpse?" },
  { quote: "What do your clothes say about yourself?" },
  { quote: "How was your last 7 days? Point out one positive thing and one that could have been better." },
  { quote: "How do you feel regarding spicy food?" },
  { quote: "Did you ever felt like you were acting like your Mum or your Dad? In which situation was it?" },
  { quote: "Do you think you can land a passengers plane in case of emergency?" },
  { quote: "What can't be replaced if your appartment would burn?" },
];

const colorArray = [
    "#F07857", "#43A5BE", "#53BDA5", "#F5C26B", "#253342", "#4FB06D", "#5C62D6",
  ];

  const pickedQuotes = [];
  const pickedColors = [];
  const quoteText = document.getElementById("quote-text");
  const body = document.body;

  function nextQuote() {
    if (quoteArray.length === 0) {
      quoteArray.push(...pickedQuotes.splice(0));
    }

    if (colorArray.length === 0) {
      colorArray.push(...pickedColors.splice(0));
    }

    const randomColor = colorArray.splice(Math.floor(Math.random() * colorArray.length), 1)[0];
    const randomQuote = quoteArray.splice(Math.floor(Math.random() * quoteArray.length), 1)[0];

    pickedColors.push(randomColor);
    pickedQuotes.push(randomQuote);

    body.style.backgroundColor = randomColor;
    quoteText.style.color = randomColor;
    quoteText.textContent = randomQuote.quote;
  }

  body.addEventListener("click", nextQuote);
  nextQuote();
});
