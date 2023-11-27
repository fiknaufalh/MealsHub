export default function Profile(props: any) {
    return (
        <img id="ProfileButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer border-2" src={props.image} alt="User dropdown" onClick={props.onProfileClick}></img>
    )
}