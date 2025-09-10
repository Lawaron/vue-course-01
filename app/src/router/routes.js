import ChatRoom from "@/views/ChatRoom.vue"
import Welcome from "@/views/Welcome.vue"
import { requireAuth, requireNoAuth } from "./guards"

export default [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: "/chat-room",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth
  }
]
