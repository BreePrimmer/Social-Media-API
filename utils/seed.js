const connection = require('../Config/connection');
const { User } = require('../Models');
const userSeeds = [
    {
        'username': 'bluefrog',
        'email': 'blue@gmail.com',
        'thoughts': [],
        'friends': []
    },
    {
        'username': 'redfrog',
        'email': 'red@gmail.com',
        'thoughts': [],
        'friends': []
    },
    {
        'username': 'greenfrog',
        'email': 'green@gmail.com',
        'thoughts': [],
        'friends': []
    }
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB!');

    await User.deleteMany({});
    await User.collection.insertMany(userSeeds);

    console.table(userSeeds);
    console.info('Seeding is complete! 🌱')
})