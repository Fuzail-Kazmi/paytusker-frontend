import { useGetUserDetailsQuery } from "../../features/api/api"
import { UserSidebar, Header } from "../../layouts"
import { Freeze } from "../../components"
import { User } from "lucide-react"

const Profile = () => {
  const userProfileFields = [
    {
      "fieldname": "first_name",
      "label": "First Name",
      "read_only": true,
      "value": ""
    },
    {
      "fieldname": "last_name",
      "label": "Last Name",
      "read_only": true,
      "value": ""
    },
    {
      "fieldname": "username",
      "label": "Username",
      "read_only": true,
      "value": ""
    },
    {
      "fieldname": "email",
      "label": "Email",
      "read_only": true,
      "value": ""
    },
    {
      "fieldname": "phone_number",
      "label": "Phone Number",
      "read_only": true,
      "value": ""
    },
  ]
  const { data, isLoading } = useGetUserDetailsQuery()
  console.log(data)
  if (data) {
    userProfileFields.map((val) => {
      val.value = data[val.fieldname]
    })
  }
  if (isLoading) return <Freeze />
  return (
    <div>
      <div>
        <Header />

      </div>

      <div className="sidebar-page">
        <UserSidebar />

        <div className="sidebar-page__content profile-page">
          <div>
            <div className="heading-md">My Profile</div>
            <form className="user-details-grid" >
              {userProfileFields?.map((val, idx) =>
                <div className="input-box" key={idx}>
                  <div className="input-box__label">{val.label}</div>
                  <div className="input-box__input">
                    <input type="text" placeholder={val.label} name={val.fieldname}
                      readOnly={val.read_only}
                      value={val.value}
                    />
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile


{/* \
<UserSidebar />
<div className="sidebar-page__content">
  <Navbar title={"Your Orders"} />
  <main className="order-page-main">
    {orders?.map((val, index) => (
      <OrdersCard key={index}
        data={val} />
    ))}
  </main>
</div>
</div> */}