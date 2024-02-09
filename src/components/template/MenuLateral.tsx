import { IconeConfig, IconeHome, IconeSair, IconeSino } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function MenuLateral() {


    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeHome} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
                <MenuItem url="/configuracoes" texto="Ajustes" icone={IconeConfig} />
            </ul>
            <ul>
            <MenuItem 
            className={`text-red-500
            hover:bg-red-600
            hover:text-white
            `}
            url="/configuracoes" 
            texto="Sair" 
            icone={IconeSair}  
            onClick={() => console.log('logout')
            }/>
            </ul>
        </aside>
    )
}