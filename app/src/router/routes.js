import ChatRoom from "@/views/ChatRoom.vue"
import Welcome from "@/views/Welcome.vue"

export default [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/chat-room",
    name: "ChatRoom",
    component: ChatRoom
  }
]
