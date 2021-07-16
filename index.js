let fs = require('fs')
let util = require('util')
let mongoose = require('mongoose') // or let { connect } = require('mongoose')

const discord = require('discord.js')
const client = new discord.Client()

if (!process.env.token) return console.warn('Bot token not found!')
if (!process.env.mongourl) return console.warn('MongoDB URL not found!')

client.on('ready', async () {
    await mongoose.connect(process.env.mongourl);
    console.log('Connected to MongoDB.')
    console.log('Successfully logged in.');
})

client.on('message', async (message) {
    message.channel.send('Congratulations. This is my second time trying JavaScript.')
});
