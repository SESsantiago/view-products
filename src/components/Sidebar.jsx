import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const links = [
        { name: 'Inicio', path: '/', icon: 'home' },
        { name: 'Productos', path: '/productos', icon: 'shopping_bag' },
        { name: 'Servicios', path: '/servicios', icon: 'design_services' },
        { name: 'Información', path: '/informacion', icon: 'info' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col border-r border-outline-variant">
            <div className="h-16 flex items-center px-gutter gap-stack-sm">
                <span className="font-headline-sm text-primary tracking-tight">CorpPortal</span>
            </div>
            <nav className="flex-1 px-stack-md py-stack-lg space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center gap-stack-md px-stack-md py-3 transition-all group rounded-lg ${isActive
                                ? 'bg-primary text-on-primary'
                                : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">{link.icon}</span>
                        <span className="font-body-md">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-stack-md border-t border-outline-variant">
                <div className="flex items-center gap-stack-md px-stack-md py-stack-sm">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-body-sm font-semibold">Admin User</span>
                        <span className="text-label-md text-on-surface-variant">Standard Plan</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};