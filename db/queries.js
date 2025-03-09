const { eventModel } = require("@/models/event-models");

export async function getAllEvents() {
  const allEvents = await eventModel.find();

  return allEvents
}

export async function getEventById(eventId) {
  const event = await eventModel.findById(eventId);
  return event;
}