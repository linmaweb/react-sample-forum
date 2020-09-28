import { people } from "./config";

const generateFakeMessages = (count) => {
  return Array.from(Array(count).keys()).map((i) => {
    const userName = randomUser();
    return {
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date(),
    };
  });
};

const randomUser = () => {
  return people.map((p) => p.name)[
    Math.floor(Math.random() * 1000) % people.length
  ];
};

const createFakeActivity = (channels, maxMessages) => {
  return channels.reduce((result, channel) => {
    const rndNum = Math.floor(Math.random() * maxMessages);
    result[channel.id] = generateFakeMessages(rndNum);
    return result;
  }, {});
};

const nextId = (messages) => {
  return messages.length ? messages[messages.length - 1].id + 1 : 0;
};

const createMessage = (text, messageId) => {
  return {
    id: messageId,
    userName: "Myself",
    text: text,
    timestamp: new Date(),
  };
};

export { createFakeActivity, nextId, createMessage };
