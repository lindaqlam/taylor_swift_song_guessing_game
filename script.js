var allSongs = [
    {lyric: "Taught me some hard lessons, I just forget what they were", song: "I Forgot That You Existed"},
    {lyric: "I'm always waiting for you to be waiting below", song: "Cruel Summer"},
    {lyric: "I'm highly suspicious that everyone who sees you wants you", song: "Lover"},
    {lyric: "He looks up, grinning like a devil", song: "Cruel Summer"},
    {lyric: "I'd be just like Leo, in Saint-Tropez", song: "The Man"},
    {lyric: "I've got a hundred thrown-out speeches I almost said to you", song: "The Archer"},
    {lyric: "Wanna see what's under that attitude", song: "I Think He Knows"},
    {lyric: "We can follow the sparks, I'll drive", song: "I Think He Knows"},
    {lyric: "The damsels are depressed", song: "Miss Americana and the Heartbreak Prince"},
    {lyric: "We're so sad, we paint the town blue", song: "Miss Americana and the Heartbreak Prince"},
    {lyric: "Now I've read all of the books beside your bed", song: "Paper Rings"},
    {lyric: "I'm with you even if it makes me blue", song: "Paper Rings"},
    {lyric: "And baby, I get mystified by how this city screams your name", song: "Cornelia Street"},
    {lyric: "I look through the windows of this love, even though we boarded them up", song: "Death By A Thousand Cuts"},
    {lyric: "Show me a gray sky, a rainy cab ride. Babes, don't threaten me with a good time", song: "London Boy"},
    {lyric: "Desperate people find faith, so now I pray to Jesus too", song: "Soon You'll Get Better"},
    {lyric: "I know delusion when I see it in the mirror", song: "Soon You'll Get Better"},
    {lyric: "Daring you to leave me just so I can try and scare you", song: "False God"},
    {lyric: "We see you over there on the internet comparing all the girls who are killing it", song: "You Need To Calm Down"},
    {lyric: "This ultraviolet morning light below tells me this love is worth the fight, oh", song: "Afterglow"},
    {lyric: "I'm the only one of me. Baby, that's the fun of me", song: "ME!"},
    {lyric: "Something gave you the nerve to touch my hand", song: "It's Nice To Have A Friend"},
    {lyric: "I wounded the good and I trusted the wicked. Clearin' the air, I breathed in the smoke", song: "Daylight"},
    {lyric: "I once believed love would be black and white but it's golden", song: "Daylight"},


    {lyric: "Me, I was a robber first time that he saw me. Stealing hearts and running off and never saying sorry", song: "...Ready for It?"},
    {lyric: "I bury hatchets but I keep maps of where I put 'em", song: "Endgame"},
    {lyric: "If he drops my name, then I owe him nothin'", song: "I Did Something Bad"},
    {lyric: "They're burning all the witches, even if you aren't one", song: "I Did Something Bad"},
    {lyric: "My name is whatever you decide", song: "Don't Blame Me"},
    {lyric: "I once was poison ivy, but now I'm your daisy", song: "Don't Blame Me"},
    {lyric: "My reputation's never been worse, so you must like me for me", song: "Delicate"},
    {lyric: "Phone lights up my nightstand in the black. Come here, you can meet me in the back", song: "Delicate"},
    {lyric: "I've got a list of names and yours is in red, underlined", song: "Look What You Made Me Do"},
    {lyric: "I don't like your kingdom keys. They once belonged to me", song: "Look What You Made Me Do"},
    {lyric: "You did a number on me. But, honestly, baby, who's counting?", song: "So It Goes..."},
    {lyric: "I'm yours to keep, and I'm yours to lose", song: "So It Goes.."},
    {lyric: "You should think about the consequence of your magnetic field being a little too strong", song: "Gorgeous"},
    {lyric: "You should take it as a compliment that I'm talking to everyone here but you", song: "Gorgeous"},
    {lyric: "If you've got a girlfriend, I'm jealous of her. But if you're single that's honestly worse", song: "Gorgeous"},
    {lyric: "He was the best of times, the worst of crimes", song: "Getaway Car"},
    {lyric: "The ties were black, the lies were white", song: "Getaway Car"},
    {lyric: "I knew it from the first Old Fashioned, we were cursed", song: "Getaway Car"},
    {lyric: "Put the money in a bag and I stole the keys. That was the last time you ever saw me", song: "Getaway Car"},
    {lyric: "Now you try on callin' me, baby, like tryin' on clothes", song: "King of My Heart"},
    {lyric: "Your love is a secret I'm hoping, dreaming, dying to keep", song: "King of My Heart"},
    {lyric: "Deep blue, but you painted me golden", song: "Dancing With Our Hands Tied"},
    {lyric: "I'm a mess, but I'm the mess that you wanted", song: "Dancing With Our Hands Tied"},
    {lyric: "I'd kiss you as the lights went out, swaying as the room burned down", song: "Dancing With Our Hands Tied"},
    {lyric: "There is an indentation in the shape of you", song: "Dress"},
    {lyric: "I don't want you like a best friend", song: "Dress"},
    {lyric: "Your buzzcut and my hair bleached. Even in my worst times, you could see the best of me", song: "Dress"},
    {lyric: "Feeling so Gatsby for that whole year", song: "This Is Why We Can't Have Nice Things"},
    {lyric: "Did you think I wouldn't hear all the things you said about me?", song: "This Is Why We Can't Have Nice Things"},
    {lyric: "Here's a toast to my real friends. They don't care about that he said, she said", song: "This Is Why We Can't Have Nice Things"},
    {lyric: "Here's to my momma. Had to listen to all this drama", song: "This Is Why We Can't Have Nice Things"},
    {lyric: "I brought a knife to a gunfight. They took the crown, but it's alright", song: "Call It What You Want"},
    {lyric: "My baby's fly like a jet stream, high above the whole scene, loves me like I'm brand new", song: "Call It What You Want"},
    {lyric: "All my flowers grew back as thorns, windows boarded up after the storm", song: "Call It What You Want"},
    {lyric: "Holdin' my breath, slowly I said, 'You don't need to save me, but would you run away with me?'", song: "Call It What You Want"},
    {lyric: "You squeeze my hand three times in the back of the taxi, I can tell that it's going to be a long road", song: "New Year's Day"},
    {lyric: "Please don't ever become a stranger whose laugh I could recognize anywhere", song: "New Year's Day"},

    {lyric: "Everybody here was someone else before", song: "Welcome To New York"},
    {lyric: "Kaleidoscope of loud heartbeats under coats", song: "Welcome To New York"},
    {lyric: "Love's a game, want to play?", song: "Blank Space"},
    {lyric: "I can read you like a magazine", song: "Blank Space"},
    {lyric: "'Cause you know I love the players, and you love the game", song: "Blank Space"},
    {lyric: "'Cause darling I'm a nightmare dressed like a daydream", song: "Blank Space"},
    {lyric: "Boys only want love if it's torture", song: "Blank Space"},
    {lyric: "So it goes, he can't keep his wild eyes on the road", song: "Style"},
    {lyric: "When we go crashing down, we come back every time", song: "Style"},
    {lyric: "You took a Polaroid of us then discovered the rest of the world was black and white, but we were in screaming color", song: "Out of the Woods"},
    {lyric: "We were built to fall apart, then fall back together", song: "Out of the Woods"},
    {lyric: "People like you always want back the love they gave away", song: "All You Had To Do Was Stay"},
    {lyric: "I go on too many dates, but I can't make 'em stay. At least that's what people say", song: "Shake It Off"},
    {lyric: "You gave me everything and nothing", song: "I Wish You Would"},
    {lyric: "Wish you knew that I miss you too much to be mad anymore", song: "I Wish You Would"},
    {lyric: "You think I'm gonna hate you now 'cause you still don't know what I never said", song: "I Wish You Would"},
    {lyric: "If you love like that blood runs cold", song: "Bad Blood"},
    {lyric: "Some day when you leave me, I bet these memories follow you around", song: "Wildest Dreams"},
    {lyric: "I can see the end as it begins", song: "Wildest Dreams"},
    {lyric: "Broke your heart, I'll put it back together", song: "How You Get The Girl"},
    {lyric: "Tossing, turning, struggle through the night for someone new", song: "This Love"},
    {lyric: "These hands had to let it go free and this love came back to me", song: "This Love"},
    {lyric: "When you're young, you just run. But you come back to what you need", song: "This Love"},
    {lyric: "Love's a fragile little flame, it could burn out", song: "I Know Places"},
    {lyric: "Loose lips sink ships all the damn time, not this time ", song: "I Know Places"},
    {lyric: "They are the hunters, we are the foxes. And we run", song: "I Know Places"},
    {lyric: "The flowers that we'd grown together died of thirst", song: "Clean"},
    {lyric: "When the butterflies turned to dust, they covered my whole room", song: "Clean"},
    {lyric: "The water filled my lungs, I screamed so loud but no one heard a thing", song: "Clean"},
    {lyric: "Haven't you heard what becomes of curious minds", song: "Wonderland"},
    {lyric: "I should've slept with one eye opened at night", song: "Wonderland"},
    {lyric: "But there were strangers watching, and whispers turned to talking, and talking turned to screams", song: "Wonderland"},
    {lyric: "No proof, not much, but you saw enough", song: "You Are in Love"},
    {lyric: "You keep his shirt, he keeps his word", song: "You Are in Love"},
    {lyric: "He keeps a picture of you in his office downtown", song: "You Are in Love"},
    {lyric: "We show off our different scarlet letters. Trust me, mine is better", song: "New Romantics"},
    {lyric: "We play dumb but we know exactly what we're doing", song: "New Romantics"},
    {lyric: "Honey, life is just a classroom", song: "New Romantics"},
    {lyric: "I could build a castle out of all the bricks they threw at me", song: "New Romantics"},
    {lyric: "The best people in life are free", song: "New Romantics"},
    {lyric: "The rumors are terrible and cruel but honey most of them are true", song: "New Romantics"},


    {lyric: "We fall in love 'til it hurts or bleeds or fades in time", song: "State of Grace"},
    {lyric: "I loved in shades of wrong", song: "State of Grace"},
    {lyric: "Love is a ruthless game Unless you play it good and right", song: "State of Grace"},
    {lyric: "Loving him is like driving a new Maserati down a dead-end street", song: "Red"},
    {lyric: "Memorizing him was as easy as knowing all the words to your old favorite song", song: "Red"},
    {lyric: "Put your lips close to mine, as long as they don't touch", song: "Treacherous"},
    {lyric: "I'd be smart to walk away, but you're quicksand", song: "Treacherous"},
    {lyric: "All we are is skin and bone, trained to get along", song: "Treacherous"},
    {lyric: "I hear the sound of my own voice asking you to stay", song: "Treacherous"},
    {lyric: "Autumn leaves falling down like pieces into place", song: "All Too Well"},
    {lyric: "You tell me 'bout your past, thinking your future was me", song: "All Too Well"},
    {lyric: "You call me up again just to break me like a promise. So casually cruel in the name of being honest", song: "All Too Well"},
    {lyric: "A new notch in your belt is all I'll ever be", song: "I Knew You Were Trouble"},
    {lyric: "We're happy, free, confused and lonely at the same time", song: "22"},
    {lyric: "You look like bad news, I gotta have you", song: "22"},
    {lyric: "You don't know about me, but I bet you want to", song: "22"},
    {lyric: "I bet it never ever occurred to you that I can't say 'Hello' to you and risk another goodbye", song: "I Almost Do"},
    {lyric: "We hadn't seen each other in a month when you said you needed space (what?)", song: "We Are Never Ever Getting Back Together"},
    {lyric: "I'm really gonna miss you picking fights and me, falling for it screaming that I'm right", song: "We Are Never Ever Getting Back Together"},
    {lyric: "You would hide away and find your peace of mind with some indie record that's much cooler than mine", song: "We Are Never Ever Getting Back Together"},
    {lyric: "You took the time to memorize me, my fears, my hopes and dreams", song: "Stay Stay Stay"},
    {lyric: "It's been occurring to me I'd like to hang out with you for my whole life", song: "Stay Stay Stay"},
    {lyric: "You wear your best apology but I was there to watch you leave", song: "The Last Time"},
    {lyric: "Find myself at your door just like all those times before. I'm not sure how I got there.", song: "The Last Time"},
    {lyric: "For the first time I had something to lose", song: "Holy Ground"},
    {lyric: "Sometimes I wonder how you think about it now, and I see your face in every crowd", song: "Holy Ground"},
    {lyric: "Tonight I'm gonna dance for all that we've been through", song: "Holy Ground"},
    {lyric: "Words, how little they mean when you're a little too late", song: "Sad Beautiful Tragic"},
    {lyric: "Good girls, hopeful they'll be and long they will wait", song: "Sad Beautiful Tragic"},
    {lyric: "You've got your demons and darlin' they all look like me", song: "Sad Beautiful Tragic"},
    {lyric: "Another name goes up in lights like diamonds in the sky", song: "The Lucky One"},
    {lyric: "Your lover in the foyer doesn't even know you", song: "The Lucky One"},
    {lyric: "Your eyes look like coming home", song: "Everything Has Changed"},
    {lyric: "Can't remember what song he was playing when we walked in", song: "Starlight"},
    {lyric: "It was the best night, never would forget how we moved", song: "Starlight"},
    {lyric: "He said, 'Look at you, worrying so much about things you can't change. You'll spend your whole life singing the blues if you keep thinking that way'", song: "Starlight"},
    {lyric: "I think it's strange that you think I'm funny 'cause he never did", song: "Begin Again"},
    {lyric: "I've been spending the last eight months thinking all love ever does is break and burn and end", song: "Begin Again"},
    {lyric: "Should've burst through the door with that 'Baby, I'm right here' smile", song: "The Moment I Knew"},
    {lyric: "I told myself, don't get attached but in my mind I play it back", song: "Come Back...Be Here"},
    {lyric: "The feeling you can know so much without knowing anything at all", song: "Come Back...Be Here"},
    {lyric: "This is falling in love in the cruelest way", song: "Come Back...Be Here"},


    {lyric: "You say we'll never make my parents' mistakes", song: "Mine"},
    {lyric: "Braced myself for the goodbye, 'cause that's all I've ever known", song: "Mine"},
    {lyric: "The way you move is like a full on rainstorm, and I'm a house of cards", song: "Sparks Fly"},
    {lyric: "Gimme something that'll haunt me whenever you're not around", song: "Sparks Fly"},
    {lyric: "My mind forgets to remind me, you're a bad idea", song: "Sparks Fly"},
    {lyric: "You gave me roses and I left them there to die", song: "Back to December"},
    {lyric: "You gave me all your love and all I gave you was goodbye", song: "Back to December"},
    {lyric: "Maybe this is wishful thinking, probably mindless dreaming. But if we loved again I swear I'd love you right", song: "Back to December"},
    {lyric: "You are not the kind of boy who should be marryin' the wrong girl", song: "Speak Now"},
    {lyric: "Long were the nights when my days once revolved around you", song: "Dear John"},
    {lyric: "My mother accused me of losing my mind, but I swore I was fine", song: "Dear John"},
    {lyric: "Wondering which version of you I might get on the phone tonight", song: "Dear John"},
    {lyric: "I lived in your chess game, but you changed the rules every day", song: "Dear John"},
    {lyric: "Maybe it's you and your sick need to give love then take it away", song: "Dear John"},
    {lyric: "But I took your matches before fire could catch me", song: "Dear John"},
    {lyric: "You have pointed out my flaws again as if I don't already see them", song: "Mean"},
    {lyric: "Somebody made you cold but the cycle ends right now", song: "Mean"},
    {lyric: "I used to know my place was a spot next to you, now I'm searching the room for an empty seat", song: "The Story Of Us"},
    {lyric: "You held your pride like you should have held me", song: "The Story Of Us"},
    {lyric: "This is looking like a contest of who can act like they care less", song: "The Story Of Us"},
    {lyric: "The battle's in your hands now but I would lay my armor down if you'd say you'd rather love than fight", song: "The Story Of Us"},
    {lyric: "To you, everything's funny. You've got nothing to regret", song: "Never Grow Up"},
    {lyric: "The lingering question kept me up. 2 a.m., who do you love?", song: "Enchanted"},
    {lyric: "Please don't be in love with someone else. Please don't have somebody waiting on you", song: "Enchanted"},
    {lyric: "This is me praying that this was the very first page, not where the story line ends", song: "Enchanted"},
    {lyric: "I had it all, I had him right there where I wanted him", song: "Better Than Revenge"},
    {lyric: "She took him faster than you could say sabotage", song: "Better Than Revenge"},
    {lyric: "Soon she's gonna find stealing other people's toys on the playground won't make you many friends", song: "Better Than Revenge"},
    {lyric: "She looks at life like it's a party and she's on the list. She looks at me like I'm a trend and she's so over it", song: "Better Than Revenge"},
    {lyric: "You might have him, but I'll always get the last word", song: "Better Than Revenge"},
    {lyric: "Lost your balance on a tightrope, lost your mind tryin' to get it back", song: "Innocent"},
    {lyric: "Wasn't it beautiful when you believed in everything? And everybody believed in you?", song: "Innocent"},
    {lyric: "Time turns flames to embers. You'll have new Septembers", song: "Innocent"},
    {lyric: "Come on, come on don't leave me like this. I thought I had you figured out", song: "Haunted"},
    {lyric: "You told me you loved me, so why did you go away", song: "Last Kiss"},
    {lyric: "The beat of your heart, it jumps through your shirt. I can still feel your arms", song: "Last Kiss"},
    {lyric: "All that I know is I don't know how to be something you missed", song: "Last Kiss"},
    {lyric: "I'm not much for dancing but for you I did", song: "Last Kiss"},
    {lyric: "How you kissed me when I was in the middle of saying something. There's not a day I don't miss those rude interruptions", song: "Last Kiss"},
    {lyric: "So I'll watch your life in pictures like I used to watch you sleep. And I feel you forget me like I used to feel you breathe", song: "Last Kiss"},
    {lyric: "All the kingdom lights shined just for me and you", song: "Long Live"},
    {lyric: "You held your head like a hero on a history book page. It was the end of a decade, but the start of an age", song: "Long Live"},
    {lyric: "I had the time of my life fighting dragons with you", song: "Long Live"},
    {lyric: "If you have children someday, when they point to the pictures, please tell them my name", song: "Long Live"},
    {lyric: "May these memories break our fall", song: "Long Live"},
    {lyric: "They'll judge it like they know about me and you", song: "Ours"},
    {lyric: "Life makes love look hard,", song: "Ours"},
    {lyric: "Ghosts from your past gonna jump out at me, lurking in the shadows with their lip gloss smiles,", song: "Ours"},
    {lyric: "Your hands are tough but they are where mine belong in", song: "Ours"},
    {lyric: "Last night I heard my own heart beating, sounded like footsteps on my stairs", song: "If This Was a Movie"},
    {lyric: "It's not the kind of ending you wanna see now", song: "If This Was a Movie"},
    {lyric: "Six months gone and I'm still reaching even though I know you're not there", song: "If This Was a Movie"},



    {lyric: "I realize your laugh is the best sound I have ever heard", song: "Jump Then Fall"},
    {lyric: "I hear the words but all I can think is we should be together", song: "Jump Then Fall"},
    {lyric: "When people say things that bring you to your knees, I'll catch you", song: "Jump Then Fall"},
    {lyric: "I said, 'leave' but all I really want is you", song: "The Other Side of the Door"},
    {lyric: "Stand outside my window throwing pebbles screaming, 'I'm in love with you'", song: "The Other Side of the Door"},
    {lyric: "You know I wanna ask you to dance right there, in the middle of the parking lot", song: "Fearless"},
    {lyric: "Run your hands through your hair, absent mindedly makin' me want you", song: "Fearless"},
    {lyric: "I'm not usually this way but you pull me in and I'm a little more brave", song: "Fearless"},
    {lyric: "So baby drive slow, 'til we run out of road in this one horse town", song: "Fearless"},
    {lyric: "This is life before you know who you're gonna be", song: "Fifteen"},
    {lyric: "Back then I swore I was gonna marry him someday, but I realized some bigger dreams of mine", song: "Fifteen"},
    {lyric: "I'll be waiting, all there's left to do is run", song: "Love Story"},
    {lyric: "We keep quiet, 'cause we're dead if they knew", song: "Love Story"},
    {lyric: "Come feel this magic I've been feeling since I met you", song: "Hey Stephen"},
    {lyric: "The way you walk, way you talk, way you say my name. It's beautiful, wonderful, don't you ever change", song: "Hey Stephen"},
    {lyric: "That face of an angel comes out just when you need it to", song: "White Horse"},
    {lyric: "My mistake I didn't know to be in love, you had to fight to have the upper hand", song: "White Horse"},
    {lyric: "Laughing on a park bench, thinking to myself. Hey isn't this easy", song: "You Belong With Me"},
    {lyric: "You've got a smile that could light up this whole town", song: "You Belong With Me"},
    {lyric: "I see your face in my mind as I drive away,", song: "Breathe"},
    {lyric: "Music starts playin' like the end of a sad movie. It's the kinda ending you don't really wanna see", song: "Breathe"},
    {lyric: "You're the only thing I know like the back of my hand", song: "Breathe"},
    {lyric: "I need you like a heartbeat, but you know you got a mean streak", song: "Tell Me Why"},
    {lyric: "You could write a book on how to ruin someone's perfect day", song: "Tell Me Why"},
    {lyric: "Could've loved you all my life if you hadn't left me waiting in the cold", song: "You're Not Sorry"},
    {lyric: "You got your share of secrets and I'm tired of being last to know", song: "You're Not Sorry"},
    {lyric: "I miss screamin' and fightin' and kissin' in the rain", song: "The Way I Loved You"},
    {lyric: "You're so in love that you act insane", song: "The Way I Loved You"},
    {lyric: "'Cause one second it was perfect, now you're halfway out the door", song: "Forever & Always"},
    {lyric: "It rains when you're here and it rains when you're gone", song: "Forever & Always"},
    {lyric: "Did I say something way too honest? Made you run and hide", song: "Forever & Always"},
    {lyric: "So here's to everything coming down to nothing. Here's to silence, that cuts me to the core", song: "Forever & Always"},
    {lyric: "I don't know why all the trees change in the fall. But I know you're not scared of anything at all", song: "The Best Day"},



    {lyric: "When you think happiness, I hope you think that little black dress. Think of my head on your chest and my old faded blue jeans", song: "Tim McGraw"},
    {lyric: "September saw a month of tears and thankin' God that you weren't here to see me like that", song: "Tim McGraw"},
    {lyric: "It's hard not to find it all a little bitter sweet. And lookin' back on all of that, it's nice to believe", song: "Tim McGraw"},
    {lyric: "State the obvious, I didn't get my perfect fantasy", song: "Picture To Burn"},
    {lyric: "I realize you love yourself more than you could ever love me", song: "Picture To Burn"},
    {lyric: "So go and tell your friends that I'm obsessive and crazy", song: "Picture To Burn"},
    {lyric: "There's no time for tears, I'm just sitting here planning my revenge", song: "Picture To Burn"},
    {lyric: "I'll bet she's beautiful, that girl he talks about,", song: "Teardrops On My Guitar"},
    {lyric: "He's the song in the car I keep singing, don't know why I do", song: "Teardrops On My Guitar"},
    {lyric: "I'll put his picture down and maybe get some sleep tonight,", song: "Teardrops On My Guitar"},
    {lyric: "I'll be strong, I'll be wrong, oh but life goes on", song: "A Place In This World"},
    {lyric: "Don't know what's down this road, I'm just walking", song: "A Place In This World"},
    {lyric: "When you take, you take the very best of me", song: "Cold As You"},
    {lyric: "You put up the walls and paint them all a shade of gra", song: "Cold As You"},
    {lyric: "What a rainy ending given to a perfect day", song: "Cold As You"},
    {lyric: "I didn't know what I would find when I went lookin' for a reason", song: "The Outside"},
    {lyric: "I guess it's true that love was all you wanted, 'cause you're givin' it away like it's extra change", song: "Tied Together With a Smile"},
    {lyric: "Hoping it will end up in his pocket, but he leaves you out like a penny in the rain", song: "Tied Together With a Smile"},
    {lyric: "When you find everything you've looked for, I hope your love leads you back to my door", song: "Stay Beautiful"},
    {lyric: "I'm taking pictures in my mind so I can save them for a rainy day", song: "Stay Beautiful"},
    {lyric: "It's hard to make a conversation when he's taking my breath away", song: "Stay Beautiful"},
    {lyric: "I should've been there, in the back of your mind. I shouldn't be asking myself why", song: "Should've Said No"},
    {lyric: "You should've said no, baby and you might still have me", song: "Should've Said No"},
    {lyric: "Take me back when our world was one block wide. I dared you to kiss me, and ran when you tried", song: "Mary's Song"},
    {lyric: "Our daddies used to joke about the two of us. They never believed we'd really fall in love", song: "Mary's Song"},
    {lyric: "He's got a one-hand feel on the steering wheel, the other on my heart,", song: "Our Song"},
    {lyric: "When we're on the phone and you talk real slow, 'cause it's late and your mama don't know,", song: "Our Song"},
    {lyric: "You and I are painting pictures in the sky", song: "I'm Only Me When I'm With You"},
    {lyric: "I'm only up when you're not down, don't wanna fly if you're still on the ground", song: "I'm Only Me When I'm With You"},
    {lyric: "All I think about is how to make you think of me", song: "Invisible"},
    {lyric: "Maybe I should've seen the signs, should've read the writing on the wall", song: "A Perfectly Good Heart"},



    {lyric: "Only sound that you hear is 'no'", song: "Sweeter Than Fiction"},
    {lyric: "What a sight, what a sight when the light came on", song: "Sweeter Than Fiction"},
    {lyric: "Fell in love when I saw you standing there", song: "Today Was a Fairytale"},
    {lyric: "Time slows down whenever you're around", song: "Today Was a Fairytale"},
    {lyric: "I was trying to fly but I couldn't find wings. But you came along and you changed everything", song: "Crazier"},
    {lyric: "Every sky was your own kind of blue", song: "Crazier"},
    {lyric: "Baby you showed me what livin' is for, I don't wanna hide anymore", song: "Crazier"},
    {lyric: "The way you roll your eyes, the way you taste. You make it hard for breathing", song: "Two Is Better Than One"},
    {lyric: "Don't you dare look out your window, darling everything's on fire", song: "Safe & Sound"},
    {lyric: "I came out alive, but I'm black and blue.", song: "I Heart Question Mark"},
    {lyric: "Wake-up and smell the break up, fix my heart, put on my make-up.", song: "I Heart Question Mark"},
    {lyric: "He'll never fall in love he swears as he runs his fingers through his hair. I'm laughing 'cause I hope he's wrong", song: "I'd Lie"},
    {lyric: "Doesn't he know that I've had him memorized for so long?", song: "I'd Lie"},
    {lyric: "My god if I could only say, 'I'm holding every breath for you...'", song: "I'd Lie"},
    {lyric: "First thought when I wake up is 'My god, he's beautiful.' So I put on my make-up and pray for a miracle.", song: "I'd Lie"}

    ];

var allColors = [ "#63b7af", "#abf0e9", "#ee8572", "#84a9ac", "#3b6978", "#204051",
									"#17706e", "#ccafaf", "#ffcac2", "#fc9d9d", "#900c3f", "#654062",
									"#ff9c71", "#ea907a", "#3da4ab", "#0e9aa7", "#f6cd61", "#1b6ca8",
									"#e84a5f", "#a8df65", "#679b9b", "#aacfcf", "#bb596b", "#ec823a",
									"#9a1f40", "#d9455f", "#7d5a5a", "#b6eb7a", "#ea9a96", "#3797a4"
];

var numSquares = 6;
var colors = [];
var pickedColor;
var selectedSongs = [];
var pickedSong;
var songTitles = document.querySelectorAll(".song-choice");
var squares = document.querySelectorAll(".square");
var lyricDisplay = document.getElementById("lyricDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector(".header");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			var clickedSong = this.textContent;

			//compare color to pickedColor
			if(clickedSong === pickedSong.song){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				header.style.background = clickedColor;
			} else {
				this.style.background = "#fff";
				//make text disappear too


				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	//generate random colors
	colors = selectRandomColors(numSquares);

	//generate random songs, selectedSongs stores entire song objects
	selectedSongs = generateRandomSongs(numSquares);

	//pick a new random song from array
	pickedSong = pickLyric();

	//change colorDisplay to match picked Color
	lyricDisplay.textContent = pickedSong.lyric;
	resetButton.textContent = "New Songs"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
			songTitles[i].textContent = selectedSongs[i].song; //COME BACK & FIX

		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.background = "#82c4c3";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickLyric() {
	var random = Math.floor(Math.random() * selectedSongs.length);
	return selectedSongs[random];
}

function generateRandomSongs(num) {
	var initList = new Set([]); //only stores song titles
	var arr = []; //stores song objects

	while (initList.size < num) {
		var randomSong = Math.floor(Math.random() * allSongs.length);

		if (initList.has(allSongs[randomSong].song) === false) {
			initList.add(allSongs[randomSong].song);
			arr.push(allSongs[randomSong])
		}
	}

	return arr;
}

function selectRandomColors(num) {
	var colorSet = new Set([]);

	while (colorSet.size < num) {
		var randomColor = Math.floor(Math.random() * allColors.length);
		colorSet.add(allColors[randomColor]);
	}

	var arr = Array.from(colorSet);

	return arr;
}
