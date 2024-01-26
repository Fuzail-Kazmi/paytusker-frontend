import { Route, Routes } from "react-router-dom"
import { Header } from "../../components"
import { UserSidebar } from "../../layouts"
const Profile = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <UserSidebar />
        </div>
        <h1>Profile</h1>
      </div>
    </div>
  )
}

export default Profile