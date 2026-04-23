const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/server', (req, res) => {
    res.render('server', { title: 'Server Overview' });
});

app.get('/media', (req, res) => {
    const creators = [
        { 
            name: 'MemesMC', 
            platform: 'YouTube', 
            link: 'http://youtube.com/@OfficialMemesMC',
            description: 'Official Co-Owner of CMSMP and Owner of MemesSMP'
        },
        { 
            name: 'RipMyBrain', 
            platform: 'YouTube', 
            link: 'http://www.youtube.com/@RipMyBrain',
            description: 'No More Braincells'
        },
        { 
            name: 'Grilled Salmon', 
            platform: 'YouTube', 
            link: 'http://www.youtube.com/@GrilledSalmon-f8w',
            description: 'Salmon... But Grilled'
        }
        // Add more creators here
    ];
    res.render('media', { title: 'Media', creators });
});

app.get('/owners', (req, res) => {
    const owners = [
        { 
            name: 'Shadow | Shadownite133', 
            bio: 'Shadow is the "Tech" Owner of the group he is know among the community for being, "Too Quiet". Self Quote, "I don\'t know" - Shadownite133', 
            avatar: './public/images/shadow.png'
        },
        { 
            name: 'Memes | Memes69ha', 
            bio: 'Memes69ha is an Iconic figure of CMSMP along with the other owners of CMSMP but he is one of the most "Known" with the public. Self Quote, "I am funny man" - Memes69ha', 
            avatar: './public/images/memes.png'
        },
        { 
            name: 'Kraven | KravenBacon', 
            bio: 'This guys mysterios... Self Quote, HE DOESN\'T HAVE ONE',
            avatar: './public/images/kraven.png'
        }
    ];
    res.render('owners', { title: 'Meet the Owners', owners });
});

app.get('/socials', (req, res) => {
    res.render('socials', { title: 'Socials' });
});

app.get('/credits', (req, res) => {
    res.render('credits', { title: 'Credits' });
});

const PORT = process.env.PORT || 3094;
app.listen(PORT, () => {
    console.log(`CMSMP site running on http://localhost:${PORT}`);
});