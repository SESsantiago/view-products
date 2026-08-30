import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { productsList } from '../helpers/productsData';

export const Products = () => {
    return (
        <div className="bg-background font-body-md text-on-surface overflow-hidden flex">
            <Sidebar />
            <div className="pl-sidebar-width h-screen flex flex-col w-full">
                <Header />
                <main className="flex-1 overflow-auto bg-background relative">
                    <div className="flex flex-col w-full px-margin-page py-stack-lg gap-stack-lg">
                        {/* Header / Hero */}
                        <div className="flex flex-col gap-stack-sm md:flex-row md:items-end justify-between">
                            <div>
                                <h1 className="font-display-lg text-display-lg text-on-background">Nuestros Productos</h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-stack-sm">
                                    Soluciones diseñadas para impulsar el crecimiento de su empresa.
                                </p>
                            </div>
                            <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                Nuevo Producto
                            </button>
                        </div>

                        {/* Grid & Filters Area */}
                        <div className="flex flex-col lg:flex-row gap-gutter">
                            {/* Filtros */}
                            <aside className="w-full lg:w-64 flex-shrink-0 space-y-stack-md">
                                <div className="bg-surface-container rounded-xl p-stack-md shadow-sm">
                                    <h3 className="font-headline-sm text-headline-sm text-on-background mb-stack-md">Categorías</h3>
                                    <div className="space-y-stack-sm">
                                        {['Software CRM', 'Infraestructura Cloud', 'Análisis de Datos', 'Seguridad IT'].map((cat, idx) => (
                                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 rounded border border-outline ${idx === 0 ? 'bg-primary' : ''} flex items-center justify-center`}>
                                                    {idx === 0 && <span className="material-symbols-outlined text-[16px] text-on-primary">check</span>}
                                                </div>
                                                <span className="font-body-md text-body-md text-on-surface">{cat}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                            {/* Grid de Productos */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-gutter">
                                {productsList.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};