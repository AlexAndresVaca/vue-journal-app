export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "DayBookLayout" */ "@/modules/daybook/layouts/DayBookLayout"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "@/modules/daybook/views/NoEntrySelected"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "EntryView.vue" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
  ],
};
