const adminNavigation = [
  { url: "/admin/orders", text: "Ordenes", blank: false },
  { url: "/admin/products", text: "Productos", blank: false },
  { url: "/order/cafe", text: "Ver Quiosco", blank: true },
];

export default function AdminSidebar() {
  return (
    <>
      <div className="space-y-3 ">
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
          Navegación
        </p>
        <nav className="flex flex-col"></nav>
      </div>
    </>
  );
}