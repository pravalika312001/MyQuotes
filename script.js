const quotes = [
    "You are a beautiful memory etched in the story of my life, a timeless reflection of moments that will forever stay with me.",
    "You have awakened in me the true essence of love, revealing its beauty in ways I never imagined possible.",
    "Your love is a rare gift, unconditional and pure, a feeling I've never known until now—and one I may never experience again.",
    "You are the sweetest soul in my life, the one who made me believe in a love so magical, I began to imagine a world with you beyond the stars.",
	"You are the most cherished part of my heart—the one who turned love into a melody, soft as moonlight, and made me dream of a life with you, dancing endlessly beyond the stars."
	"My favorite moments with you were wrapped in love—when I showered you with affection, held you close with my possessiveness, felt a little jealous, and reminded you in every way that you were always mine."
	"My kind of love is calling you by all the sweetest names—junnulu, bujjulu,laddududu, baby, sweetheart, honey—because every word was a little piece of my heart, whispering how deeply I adored you."
	"Not a day passes in my life without your memories echoing in my heart, shaping every moment with the warmth of your love."
	"It’s all about a beautiful chapter of my life that began two years ago, a story written in love, memories, and moments that will forever stay with me."
	"You are an unforgettable presence in my life my senior,  your impact will forever be etched in my heart, no matter where life takes me."
	"You made me feel everything—every shade of love, every breath of magic—and now, you’ve left me with nothing but your memories, where I quietly learn to live without you."
	"Thank you for coming into my life and teaching me lessons I’ll carry forever. Your presence has shaped me in ways words can never fully express."
	"I will always love you, always respect you, and you will forever be remembered in my heart."
	"Signing off with a heavy heart, missing you to the moon and back, where no distance can ever fade the love I carry for you."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById("quoteText");
    quoteText.classList.remove("fade-in");
    void quoteText.offsetWidth; // re-trigger animation
    quoteText.textContent = quotes[randomIndex];
    quoteText.classList.add("fade-in");
  }
  
  function copyQuote() {
    const text = document.getElementById("quoteText").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Quote copied to clipboard!");
    });
  }
  