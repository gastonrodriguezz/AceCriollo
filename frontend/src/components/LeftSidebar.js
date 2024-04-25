import home from "../icons/home.svg";
import event from "../icons/calendar.svg";
import bell from "../icons/bell.svg";
import ranking from "../icons/medal.svg";
import user from "../icons/user.svg";
import more from "../icons/more.svg";
import React from "react";
import logo from "../icons/logo.svg";
const LeftSidebar = () =>{
return(
<div className="w-[20%]">
<img className="h-[30px] ml-5 my-10" src={logo} alt="Acecriollo-logo" />
    <div>
        <div >
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                    <img className="invert w-5" src={home} alt="Acecriollo-logo-full"  />
                </div>
            <a  className="font-bold text-lg ml-2"> Inicio </a>
            </div>
        </div>
        <div>
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                <img className="invert w-5" src={event} alt="eventos"  />
                </div>
                <a  className="font-bold text-lg ml-2"> Eventos </a>
            </div>
        </div>
        <div>
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                <img className="invert w-5" src={bell} alt="notificaciones"  />
                </div>
                <a  className="font-bold text-lg ml-2"> Norificaciones </a>
            </div>
        </div>
        <div>
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                <img className="invert w-5" src={ranking} alt="ranking"  />
                </div>
                <a  className="font-bold text-lg ml-2"> Ranking </a>
            </div>
        </div>
        <div>
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                <img className="invert w-5" src={user} alt="perfil"  />
                </div>
                <a className="font-bold text-lg ml-2"> Perfil </a>
            </div>
        </div>
        <div>
            <div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
                <div>
                <img className="invert w-5" src={more} alt="mas"  />
                </div>
                <a  className="font-bold text-lg ml-2"> Mas </a>
            </div>
        </div>
    </div>

</div>
)
}
export default LeftSidebar;