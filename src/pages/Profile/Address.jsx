import { ArrowLeft, Plus } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserSidebar } from "../../layouts"

const Address = () => {
    const [Address, setAddress] = useState(false)
    return (


        <div>
            <div>
                <UserSidebar />
            </div>
            {/* <header className="header-simple">
                <section>
                    <Link to={"/"}>
                        <ArrowLeft />
                    </Link>
                </section>
                <section>
                    <div className="plain-header__heading">Address Book</div>
                </section>
                <section></section>
            </header> */}

            <div>
                {Address ? <>
                    <div className="address-cards-container">
                        <AddressCard />
                        <AddressCard />
                        <AddressCard />
                    </div>

                </> :
                    <div className="add-addr-container">
                        <div className="flex-center h-100">
                            <button className="btn btn-icon add-address__btn"

                                onClick={() => setAddress(true)}
                            >
                                <Plus /> <span>Add New Address</span>
                            </button>
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default Address


const AddressCard = () => {
    return (
        <div className="address-card__wrapper">
            <div className="address-card__title">
                Name of the customer OR Address  Title
            </div>
            <div className="address-card__tags">
                <div className="tag-sm">
                    Default Address
                </div>
            </div>
            <div className="address-card__info text-sm" >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias facere atque nulla sit, accusamus aut reprehenderit libero ex esse corporis?
            </div>

        </div>
    )
}
