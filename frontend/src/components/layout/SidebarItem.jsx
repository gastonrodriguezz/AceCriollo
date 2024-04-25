import React from "react";

    const SidebarItem = ({text, icon }) =>{
        return(
<div class="flex items-center my-2 px-4 py-2 btn-hoover hover:bg-greeno/10 hover:cursor-pointer rounded-full">
    <div>
        <img src={icon} alt="Acecriollo-logo-full" class="invert" />
    </div>
    <a  class="font-bold text-lg ml-2">{text}</a>
</div>
        )
}
export default SidebarItem;
