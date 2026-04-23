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
            name: 'Owner Name 1', 
            bio: 'Bio for owner 1. Responsibilities include server development and community management.' 
        },
        { 
            name: 'Owner Name 2', 
            bio: 'Bio for owner 2. Focused on event planning and player interactions.' 
        },
        { 
            name: 'Owner Name 3', 
            bio: 'Bio for owner 3. Manages server infrastructure and technical support.' 
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

const PORT = process.env.PORT || 8063;
app.listen(PORT, () => {
    console.log(`CMSMP site running on http://localhost:${PORT}`);
});