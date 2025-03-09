import { userModel } from "@/models/user-model";

const { eventModel } = require("@/models/event-models");

// get all events
async function getAllEvents() {
  const allEvents = await eventModel.find();

  return allEvents;
}
// get event by Id
async function getEventById(eventId) {
  const event = await eventModel.findById(eventId);
  return event;
}

// create users
async function createUser(user) {
  return await userModel.create(user);
}

// find User
async function fundUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  return user;
}

export { getAllEvents, getEventById, createUser, fundUserByCredentials };
