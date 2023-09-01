export const menu = [
  {
    type: "folder",
    title: "Documents",
    isActive: true,
  },
  {
    type: "folder",
    title: "Desktop",
    submenu: [
      {
        type: "image",
        title: "Screen_Shot_2022_10_21_at_12.12.47.png",
      },
      {
        type: "video",
        title: "One_piece_episode_1037.mp4",
      },
    ],
  },
  {
    type: "folder",
    title: "Workspace",
    submenu: [
      {
        type: "folder",
        title: "Lab react",
        submenu: [
            {
                type:'image',
                title:'hello 1'
            },
            {
                type:'image',
                title:'hello 2'
            }
        ],
      },
      {
        type: "folder",
        title: "Lab Laravel",
        submenu: [],
      },
    ],
  },
  {
    type: "folder",
    title: "Public",
    submenu: [
      {
        type: "folder",
        title: "week",
        submenu: [
          {
            type: "image",
            title: "picture.jpg",
          },
          {
            type: "music",
            title: "song.mp3",
          },
        ],
      },
      {
        type: "video",
        title: "video.mp4",
      },
      {
        type: "image",
        title: "picture.gif",
      },
    ],
  },
];
