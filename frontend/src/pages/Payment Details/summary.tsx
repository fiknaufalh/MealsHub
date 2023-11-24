import Sidebar from '../../components/Sidebar'
import OrderDetailsCard from '../../components/OrderDetailsCard';
import OrderSummaryCard from '../../components/OrderSummaryCard';
import BackButton from '../../components/BackButton';
import Welcome from '../../components/Welcome';
import Profile from '../../components/Profile';
import ProfileDropDown from '../../components/ProfileDropDown';
import { useState } from "react";
import ConfirmPopUp from '../../components/ConfirmPopUp';

const Summary = () => {
    const [showProfileDropDown, setShowProfileDropDown] = useState(false);
    const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);

    const handleProfileClick = () => {
        setShowProfileDropDown(!showProfileDropDown);
    };
    const handleConfirmPayment = () => {
      setShowConfirmPopUp(true); 
  };

  const handleCloseConfirmPopUp = () => {
      setShowConfirmPopUp(false); 
  };
    return (
        // Create grid layout for sidebard, header, and main content
        <div className="grid grid-cols-5 grid-rows-8 bg-mealshub-cream min-h-screen">
            {/* Sidebar */}
            <div className="col-span-1 row-span-8">
                <Sidebar number={1} current={1} menu1="Payment List" path1="M8.22042 7.85718C6.79962 7.85718 5.43701 8.47803 4.43235 9.58316C3.42769 10.6883 2.86328 12.1872 2.86328 13.75V14.9286H37.1433V13.75C37.1433 12.1872 36.5789 10.6883 35.5742 9.58316C34.5696 8.47803 33.2069 7.85718 31.7861 7.85718H8.22042ZM2.86328 30.25V17.2857H37.1433V30.25C37.1433 31.8129 36.5789 33.3118 35.5742 34.4169C34.5696 35.522 33.2069 36.1429 31.7861 36.1429H8.22185C6.80105 36.1429 5.43844 35.522 4.43378 34.4169C3.42912 33.3118 2.86471 31.8129 2.86471 30.25H2.86328ZM26.0719 25.9286C25.7877 25.9286 25.5152 26.0528 25.3142 26.2738C25.1133 26.4948 25.0004 26.7946 25.0004 27.1072C25.0004 27.4198 25.1133 27.7195 25.3142 27.9406C25.5152 28.1616 25.7877 28.2857 26.0719 28.2857H31.0719C31.356 28.2857 31.6285 28.1616 31.8295 27.9406C32.0304 27.7195 32.1433 27.4198 32.1433 27.1072C32.1433 26.7946 32.0304 26.4948 31.8295 26.2738C31.6285 26.0528 31.356 25.9286 31.0719 25.9286H26.0719Z" />
            </div>
            {/* Header */}
            <div className="col-span-4">
                <div className="row-span-1 ms-20 mt-9 py-3 w-11/12">
                    <Welcome user="Aldaebaran" />
                </div>
                <div className="absolute top-0 right-0 mt-9 mx-12">
                    <Profile image="/public/images/ProfileDefault.png" onProfileClick={handleProfileClick} />
                </div>
                <div className="absolute top-12 right-0 mt-9 mx-12">
                    {showProfileDropDown && <ProfileDropDown name="Aldaebaran" email="Aldaebaran@example.com" />}
                </div>
                <div className="row-span-7 mt-6 mb-9 w-11/12">
                    <div className="ms-4">
                        <BackButton />
                    </div>
                    <div className="ms-20 py-12 bg-white rounded-3xl">
                        <h2 className="text-mealshub-red text-3xl font-bold ms-16">Order Details</h2>
                        <OrderDetailsCard />
                        <OrderSummaryCard />
                        <div className="flex mx-16 justify-center">
                          <button className="max-w-xs text-white bg-mealshub-red font-bold text-lg rounded-full px-2 py-1 text-center shadow-xl" onClick={handleConfirmPayment}>
                            Confirm Payment
                          </button>
                        </div>
                        {showConfirmPopUp && (
                <ConfirmPopUp onClose={handleCloseConfirmPopUp} />
            )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Summary