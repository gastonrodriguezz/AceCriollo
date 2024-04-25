import home from "../icons/home.svg";
import event from "../icons/calendar.svg";
import bell from "../icons/bell.svg";
import ranking from "../icons/medal.svg";
import user from "../icons/user.svg";
import more from "../icons/more.svg";
import React from "react";
import logo from "../icons/logo.svg";
import IconNav from "./ui/IconNav";
const LeftSidebar = () => {
	return (
		<div className="w-[20%]">
			<img className="h-[30px] ml-5 my-10" src={logo} alt="Acecriollo-logo" />
			<IconNav src={home} alt="inicio" title="Inicio" />
			<IconNav src={event} alt="evento" title="Eventos" />
			<IconNav src={bell} alt="notificion" title="Notificaciones" />
			<IconNav src={ranking} alt="ranking" title="Ranking" />
			<IconNav src={user} alt="perfil" title="Perfil" />
			<IconNav src={more} alt="mas" title="Mas" />
		</div>
	);
};
export default LeftSidebar;
