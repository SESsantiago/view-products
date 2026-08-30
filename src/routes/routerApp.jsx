import { Routes, Route } from 'react-router-dom';
import { Products } from '../pages/Products';

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/productos" element={<Products />} />
            {/* Definir las demás páginas aquí */}
            <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    );
};