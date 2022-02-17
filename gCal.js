const { google } = require('googleapis')
const _ = require('lodash')
const objectInspect = require('object-inspect')
const ApiCalendar = require('react-google-calendar-api')
const gcalSlack = require('gcal-slack-integration')

module.exports.fetchUsers = function fetchUsers(users, unknown){
    
}

module.exports.fetchMeetings = function fetchUserCalendar(googleUsers, unknown){

}

module.exports.createMeeting = function createMeeting(googleUsers, unknown){

}

module.exports.checkHealth = function checkHealth(){
    google.getSupportedAPIs()
}