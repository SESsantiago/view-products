export const ProductCard = ({ product }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-gutter shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-variant rounded-full opacity-50 blur-xl group-hover:bg-primary/20 transition-colors"></div>
      <div>
        <div className="flex justify-between items-start mb-stack-md">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[24px]">{product.icon}</span>
          </div>
          <span className="bg-surface-container-high text-on-surface font-label-md text-label-md px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-background mb-2">{product.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{product.description}</p>
      </div>
      <div className="mt-stack-lg flex items-end justify-between border-t border-outline-variant/30 pt-stack-md">
        <div>
          <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{product.type}</span>
          <span className="font-headline-sm text-headline-sm text-primary">
            {product.price}
            {product.unit && <span className="font-body-sm text-body-sm text-on-surface-variant">{product.unit}</span>}
          </span>
        </div>
        <button className="text-primary font-label-md text-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Detalles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};