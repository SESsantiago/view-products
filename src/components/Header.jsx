export const Header = () => {
  return (
    <header className="h-16 flex-none bg-surface/80 backdrop-blur-xl border-b border-outline-variant z-40 flex items-center justify-between px-margin-page">
      <div className="flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-on-surface-variant lg:hidden">menu</span>
        <div className="h-8 w-[1px] bg-outline-variant lg:hidden"></div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full border border-outline-variant">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-body-sm text-on-surface placeholder:text-on-surface-variant w-48"
            placeholder="Buscar..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-stack-md">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </header>
  );
};