import home  from "../assests/home.svg"
import user  from "../assests/user.svg"
import product  from "../assests/product.svg"
import order  from "../assests/order.svg"
import post  from "../assests/post.svg"
import element  from "../assests/element.svg"
import note  from "../assests/note.svg"
import calendar  from "../assests/calendar.svg"
import setting  from "../assests/setting.svg"
import backup  from "../assests/backup.svg"
import chart  from "../assests/chart.svg"
import log  from "../assests/log.svg"

export const menuItems = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: `${home}`,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: `${user}`,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: `${user}`,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: `${product}`,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: `${order}`,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: `${post}`,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: `${element}`,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: `${note}`,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: `${log}`,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: `${calendar}`,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: `${setting}`,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: `${backup}`,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: `${chart}`,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: `${log}`,
      },
    ],
  },
];
