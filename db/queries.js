import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";

// get all events
async function getAllEvents(query) {
  let allEvents = [];
  if (query) {
    const regex = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }

  return allEvents;
}
// get event by Id
async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
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

// events interested users
async function updateInterest(eventId, authId) {
  const event = await eventModel.findById(eventId);
  if (event) {
    const foundUsers = await event.interested_ids.find((id) => id === authId);
    if (foundUsers) {
      event.interested_ids.pull(authId);
    } else {
      event.interested_ids.push(authId);
    }
    await event.save();
  }
}

// event update going
async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(authId);
  await event.save();
}

export {
  getAllEvents,
  getEventById,
  createUser,
  fundUserByCredentials,
  updateInterest,
  updateGoing,
};
