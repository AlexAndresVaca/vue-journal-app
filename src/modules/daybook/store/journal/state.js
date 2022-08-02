export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Quas ullam porro earum quia vero! Voluptatibus, exercitationem minima, pariatur non architecto veniam fugit quasi vel sed, beatae nisi praesentium atque sit!",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Pariatur non architecto veniam fugit quasi vel sed, beatae nisi praesentium atque sit!",
      picture: null,
    },
  ],
});
