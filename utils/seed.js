const connection = require('../Config/connection');
const { User } = require('../Models/User');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // await User.deleteMany({});
    // await Thought.deleteMany({});
    // await Reaction.deleteMany({});

    await User.collection.insertMany(
        [
            {
                username: 'bluefrog',
                email: 'blue@gmail.com'
            },
            {
                username: 'greenfrog',
                email: 'green@gmail.com'
            },
            {
                username: 'redfrog',
                email: 'red@gmail.com'
            }
        ]
    );
    console.info('Seeding completed!')
    process.exit(0);
});